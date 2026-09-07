<?php
/**
 * config/mail.php
 * Mail Configuration - Loads environment variables for PHPMailer
 * SMTP credentials are loaded securely from .env file (NEVER hardcoded in frontend/source)
 */

// Load PHPMailer classes
$autoloadFile = __DIR__ . '/../vendor/autoload.php';
if (file_exists($autoloadFile)) {
    require_once $autoloadFile;
} else {
    // Direct PSR-4 fallback for PHPMailer
    require_once __DIR__ . '/../vendor/phpmailer/phpmailer/src/Exception.php';
    require_once __DIR__ . '/../vendor/phpmailer/phpmailer/src/PHPMailer.php';
    require_once __DIR__ . '/../vendor/phpmailer/phpmailer/src/SMTP.php';
}

/**
 * Robust .env Loader
 * Reads .env file and populates $_ENV & putenv() securely
 */
function loadEnvFile(string $filePath): void {
    if (!file_exists($filePath)) {
        return;
    }

    $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        // Skip comments and empty lines
        if ($line === '' || str_starts_with($line, '#')) {
            continue;
        }

        // Parse KEY=VALUE
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $key   = trim($key);
            $value = trim($value);

            // Strip surrounding quotes
            if (
                (str_starts_with($value, '"') && str_ends_with($value, '"')) ||
                (str_starts_with($value, "'") && str_ends_with($value, "'"))
            ) {
                $value = substr($value, 1, -1);
            }

            if (!isset($_ENV[$key])) {
                $_ENV[$key] = $value;
                putenv("{$key}={$value}");
            }
        }
    }
}

// Load .env from project root
loadEnvFile(__DIR__ . '/../.env');

/**
 * Returns mail configuration from environment variables.
 *
 * @return array Mail config array
 */
function getMailConfig(): array {
    return [
        'host'       => $_ENV['MAIL_HOST']       ?? getenv('MAIL_HOST')       ?: 'smtp.gmail.com',
        'port'       => (int) ($_ENV['MAIL_PORT'] ?? getenv('MAIL_PORT')       ?: 587),
        'encryption' => $_ENV['MAIL_ENCRYPTION'] ?? getenv('MAIL_ENCRYPTION') ?: 'tls',
        'username'   => $_ENV['MAIL_USERNAME']   ?? getenv('MAIL_USERNAME')   ?: '',
        'password'   => $_ENV['MAIL_PASSWORD']   ?? getenv('MAIL_PASSWORD')   ?: '',
        'from'       => $_ENV['MAIL_FROM']       ?? getenv('MAIL_FROM')       ?: 'rizqiyumnaaa@gmail.com',
        'from_name'  => $_ENV['MAIL_FROM_NAME']  ?? getenv('MAIL_FROM_NAME')  ?: 'Rizqi Yumna Shafwan',
        'to'         => $_ENV['MAIL_TO']         ?? getenv('MAIL_TO')         ?: 'rizqiyumnaaa@gmail.com',
    ];
}
