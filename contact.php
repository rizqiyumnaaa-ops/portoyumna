<?php
/**
 * contact.php
 * Contact Form Handler - Processes submissions via PHPMailer
 * Returns JSON for AJAX handling
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// ============================================================
// RATE LIMITING via session
// ============================================================
session_start();
$now   = time();
$limit = 3;    // max submissions
$window = 300; // per 5 minutes

if (!isset($_SESSION['contact_submissions'])) {
    $_SESSION['contact_submissions'] = [];
}

// Remove old entries outside window
$_SESSION['contact_submissions'] = array_filter(
    $_SESSION['contact_submissions'],
    fn($t) => ($now - $t) < $window
);

if (count($_SESSION['contact_submissions']) >= $limit) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'message' => 'Too many requests. Please wait a few minutes before trying again.',
    ]);
    exit;
}

require_once __DIR__ . '/config/mail.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ============================================================
// SANITIZE & VALIDATE INPUT
// ============================================================
$name    = trim(strip_tags($_POST['name']    ?? ''));
$email   = trim(strip_tags($_POST['email']   ?? ''));
$subject = trim(strip_tags($_POST['subject'] ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));

$errors = [];

if (empty($name))    $errors[] = 'Name is required.';
if (empty($email))   $errors[] = 'Email is required.';
if (empty($subject)) $errors[] = 'Subject is required.';
if (empty($message)) $errors[] = 'Message is required.';

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address.';
}

if (strlen($name) > 100)     $errors[] = 'Name is too long (max 100 characters).';
if (strlen($subject) > 200)  $errors[] = 'Subject is too long (max 200 characters).';
if (strlen($message) < 10)   $errors[] = 'Message is too short (min 10 characters).';
if (strlen($message) > 5000) $errors[] = 'Message is too long (max 5000 characters).';

// Honeypot: bots fill the hidden 'website' field
if (!empty($_POST['website'])) {
    // Silently succeed — don't send email, don't show error
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
    exit;
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

// ============================================================
// SEND VIA PHPMAILER
// ============================================================
try {
    $config = getMailConfig();

    $mail = new PHPMailer(true);

    // SMTP Settings
    $mail->isSMTP();
    $mail->Host       = $config['host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['username'];
    $mail->Password   = str_replace(' ', '', $config['password']);
    $mail->SMTPSecure = $config['encryption'] === 'ssl'
        ? PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $config['port'];
    $mail->CharSet    = 'UTF-8';

    // Development SSL compatibility
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Recipients
    $mail->setFrom($config['from'], $config['from_name']);
    $mail->addAddress($config['to']);
    $mail->addReplyTo($email, $name);

    // Build message
    $mail->isHTML(true);
    $mail->Subject = '[Portfolio Contact] ' . $subject;
    $mail->Body    = buildHtmlEmail($name, $email, $subject, $message);
    $mail->AltBody = buildPlainEmail($name, $email, $subject, $message);

    $mail->send();

    // Record for rate limiting
    $_SESSION['contact_submissions'][] = $now;

    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully! I will get back to you soon.',
    ]);

} catch (Exception $e) {
    // Log error server-side, never expose to client
    error_log('[Portfolio Contact] PHPMailer Error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Something went wrong. Please try again or email me directly at rizqiyumnaaa@gmail.com',
    ]);
}

// ============================================================
// EMAIL TEMPLATE BUILDERS
// ============================================================

function buildHtmlEmail(string $name, string $email, string $subject, string $message): string {
    $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
    $safeName    = htmlspecialchars($name,    ENT_QUOTES, 'UTF-8');
    $safeEmail   = htmlspecialchars($email,   ENT_QUOTES, 'UTF-8');
    $safeSubject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');

    return "<!DOCTYPE html>
<html lang='en'>
<head><meta charset='UTF-8'><title>New Contact Message</title></head>
<body style='font-family:Inter,Arial,sans-serif;background:#f7f7f2;padding:24px;color:#111;'>
  <div style='max-width:580px;margin:0 auto;background:#fff;border-radius:6px;overflow:hidden;border:1px solid #e2e2db;'>
    <div style='background:#111;padding:28px 32px;'>
      <h1 style='color:#f7f7f2;margin:0;font-size:18px;letter-spacing:3px;font-weight:400;'>NEW MESSAGE</h1>
      <p style='color:#6B7B4E;margin:6px 0 0;font-size:11px;letter-spacing:2px;'>PORTFOLIO CONTACT FORM</p>
    </div>
    <div style='padding:32px;'>
      <table style='width:100%;border-collapse:collapse;margin-bottom:24px;'>
        <tr>
          <td style='padding:10px 0;color:#999;font-size:11px;letter-spacing:1px;text-transform:uppercase;width:80px;vertical-align:top;border-bottom:1px solid #f0f0f0;'>From</td>
          <td style='padding:10px 0 10px 16px;font-weight:600;font-size:14px;border-bottom:1px solid #f0f0f0;'>{$safeName}</td>
        </tr>
        <tr>
          <td style='padding:10px 0;color:#999;font-size:11px;letter-spacing:1px;text-transform:uppercase;vertical-align:top;border-bottom:1px solid #f0f0f0;'>Email</td>
          <td style='padding:10px 0 10px 16px;font-size:14px;border-bottom:1px solid #f0f0f0;'><a href='mailto:{$safeEmail}' style='color:#6B7B4E;'>{$safeEmail}</a></td>
        </tr>
        <tr>
          <td style='padding:10px 0;color:#999;font-size:11px;letter-spacing:1px;text-transform:uppercase;vertical-align:top;'>Subject</td>
          <td style='padding:10px 0 10px 16px;font-size:14px;'>{$safeSubject}</td>
        </tr>
      </table>
      <p style='color:#999;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;margin:0 0 12px;'>Message</p>
      <div style='background:#f7f7f2;padding:20px;border-radius:4px;font-size:14px;line-height:1.75;color:#444;'>{$safeMessage}</div>
    </div>
    <div style='padding:16px 32px;background:#f7f7f2;font-size:11px;color:#bbb;border-top:1px solid #e2e2db;'>
      Sent from portfolio contact form &mdash; rizqiyumnaaa@gmail.com
    </div>
  </div>
</body>
</html>";
}

function buildPlainEmail(string $name, string $email, string $subject, string $message): string {
    return "New contact form message from portfolio:\n\n"
         . "Name:    {$name}\n"
         . "Email:   {$email}\n"
         . "Subject: {$subject}\n\n"
         . "Message:\n{$message}\n\n"
         . "---\nSent from portfolio contact form.";
}
