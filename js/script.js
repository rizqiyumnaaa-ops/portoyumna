'use strict';

/* ============================================================
   00. INTERNATIONALIZATION (i18n) & TRANSLATIONS
   ============================================================ */
const translations = {
  id: {
    // Navbar & Global
    role_title: 'Web Developer',
    nav_home: 'Beranda',
    nav_about: 'Tentang',
    nav_projects: 'Proyek',
    nav_skills: 'Keahlian',
    nav_experience: 'Pengalaman',
    nav_testimonials: 'Testimoni',
    nav_contact: 'Kontak',
    nav_cta: 'Hubungi Saya',
    lang_label: 'Pilihan Bahasa:',

    // Hero
    hero_label: 'Web Developer',
    hero_heading: 'Membangun solusi<br><em>digital</em><br>yang memecahkan<br>masalah nyata.',
    hero_desc: 'Mahasiswa Informatika yang berfokus pada pengembangan aplikasi berbasis web, digitalisasi proses bisnis, dan pengelolaan sistem informasi perusahaan.',
    hero_btn_work: 'Lihat Portofolio',
    hero_btn_contact: 'Hubungi Saya',
    hero_tag_loc: 'Berbasis di Bandung',
    hero_tag_role: 'Web Developer',

    // About
    about_label: 'Tentang',
    about_heading: 'Tentang Saya',
    about_p1: 'Mahasiswa Informatika Universitas Langlangbuana dengan pengalaman sebagai Personal Assistant sekaligus Web Developer yang berfokus pada pengembangan aplikasi internal perusahaan.',
    about_p2: 'Saya memiliki pengalaman dalam membangun aplikasi HRIS, sistem manajemen laporan, website company profile, serta sistem administrasi berbasis web. Terbiasa menangani database management, system analysis, dan digitalisasi proses bisnis untuk meningkatkan efisiensi operasional.',
    exp_tag_1: 'Pengembangan Aplikasi Web',
    exp_tag_2: 'Aplikasi Internal Perusahaan',
    exp_tag_3: 'Analisis Sistem',
    exp_tag_4: 'Manajemen Database',
    exp_tag_5: 'Digitalisasi Proses Bisnis',
    exp_tag_6: 'Koordinasi Proyek Operasional',
    edu_title: 'Pendidikan',
    edu_year_1: '2024 — Sekarang',
    edu_school_1: 'Universitas Langlangbuana',
    edu_faculty_1: 'Fakultas Teknik Informatika',
    edu_note_1: 'Estimasi Kelulusan 2028',
    edu_year_2: '2023',
    edu_school_2: 'SMK Marhas Margahayu',
    edu_faculty_2: 'Rekayasa Perangkat Lunak',
    edu_note_2: 'Lulus Mei 2023',

    // Projects Section
    projects_label: 'Karya Terpilih',
    projects_heading: 'Proyek Terpilih',
    projects_sub: 'Koleksi proyek web yang telah saya rancang dan kembangkan.',
    btn_view_details: 'Lihat Detail',
    modal_quick_visit: 'Kunjungi Website',
    modal_visit_live: 'Kunjungi Website Live',
    modal_view_code: 'Lihat Source Code',
    modal_close: 'Tutup',
    modal_overview_title: 'Overview Proyek',
    modal_problem_title: 'Tantangan & Masalah',
    modal_solution_title: 'Solusi yang Dibangun',
    modal_features_title: 'Fitur & Kemampuan Utama',
    modal_tech_title: 'Teknologi yang Digunakan',

    // Skills
    skills_label: 'Keahlian',
    skills_heading: 'Keahlian Saya',
    cat_frontend: 'Front End',
    cat_backend: 'Back End',
    cat_database: 'Database',
    skill_responsive: 'Desain Web Responsif',
    skill_db_mgmt: 'Manajemen Database',
    pro_skills_title: 'Keahlian Profesional',
    pro_skill_1: 'Analisis Sistem',
    pro_skill_2: 'Pemecahan Masalah',
    pro_skill_3: 'Manajemen Data',
    pro_skill_4: 'Penyusunan Laporan',
    pro_skill_5: 'Koordinasi Proyek',
    pro_skill_6: 'Kolaborasi Tim',
    pro_skill_7: 'Public Speaking',
    pro_skill_8: 'Pelatihan & Presentasi',
    tools_title: 'Tools yang Saya Gunakan',

    // Experience
    exp_label: 'Karir',
    exp_heading: 'Pengalaman Kerja',
    exp1_period_short: 'Ags 2024 — Sekarang',
    exp1_role_short: 'Personal Assistant<br>&amp; Web Developer',
    exp1_role_full: 'Personal Assistant & Web Developer',
    exp1_period_full: 'Agustus 2024 — Sekarang',
    exp1_r1: 'Mengembangkan Human Resource Information System (HRIS) berbasis web.',
    exp1_r2: 'Mengembangkan aplikasi manajemen laporan berbasis web.',
    exp1_r3: 'Membangun website company profile perusahaan dan anak perusahaan.',
    exp1_r4: 'Mengintegrasikan formulir kontak website dengan PHPMailer.',
    exp1_r5: 'Menyusun laporan progres proyek.',
    exp1_r6: 'Mengelola dan memvalidasi data operasional proyek.',
    exp1_r7: 'Mendesain logo, kemasan produk, banner, dan konten media sosial.',
    exp1_r8: 'Memberikan dukungan teknis dan administratif selama proyek.',

    exp2_period_short: 'Feb 2026 — Sekarang',
    exp2_role_short: 'Freelance Web Developer<br>(Side Job)',
    exp2_company_short: 'PROYEK INDEPENDEN & KLIEN',
    exp2_role_full: 'Freelance Web Developer (Side Job)',
    exp2_company_full: 'Independen & Berbasis Proyek',
    exp2_period_full: 'Februari 2026 — Sekarang',
    exp2_r1: 'Merancang dan mengembangkan aplikasi web kustom untuk kebutuhan digitalisasi UMKM, instansi, dan klien perorangan.',
    exp2_r2: 'Membangun modul sistem informasi seperti sistem presensi karyawan, HRIS, tanda tangan elektronik (E-Signature QR Code & SHA-256), dan repositori laporan.',
    exp2_r3: 'Mendesain website company profile modern, responsif, dan optimal di berbagai perangkat (mobile, tablet, desktop).',
    exp2_r4: 'Mengintegrasikan fitur otomatisasi formulir (SMTP PHPMailer), ekspor dokumen instan (PDF / Excel), dan visualisasi data statistik (Chart.js).',
    exp2_r5: 'Merancang arsitektur database relasional (MySQL) yang terstruktur, efisien, dan memiliki integritas data yang kuat.',
    exp2_r6: 'Menerapkan standar keamanan aplikasi (Role-Based Access Control, proteksi sesi, enkripsi data) dan optimasi performa loading.',

    exp3_period_short: 'Feb 2024 — Mei 2024',
    exp3_role_short: 'Admin SPM',
    exp3_role_full: 'Admin Divisi Stationery',
    exp3_period_full: 'Februari 2024 — Mei 2024',
    exp3_r1: 'Mendesain planogram produk berdasarkan strategi visual merchandising.',
    exp3_r2: 'Mengimplementasikan planogram di berbagai toko.',
    exp3_r3: 'Mengolah dan menganalisis data penjualan.',
    exp3_r4: 'Menyusun laporan penjualan.',

    // Achievements
    ach_stat_label: 'Penerima manfaat Sistema.bio<br>di Jawa Barat dikelola &amp; divalidasi',
    ach_label: 'Pencapaian Utama',
    ach_heading: 'Pencapaian',
    ach_item_1: 'Berhasil mengembangkan tiga aplikasi berbasis web untuk mendukung digitalisasi operasional perusahaan.',
    ach_item_2: 'Berhasil mengotomatisasi proses rekapitulasi absensi dan perhitungan gaji melalui HRIS.',
    ach_item_3: 'Mengembangkan sistem manajemen laporan untuk pengiriman, pengarsipan, dan pencarian dokumen digital.',
    ach_item_4: 'Membangun website perusahaan yang terintegrasi dengan PHPMailer.',
    ach_item_5: 'Mengelola dan memvalidasi data lebih dari <strong>300 penerima manfaat</strong> Sistema.bio di Jawa Barat.',
    ach_item_6: 'Berperan sebagai pemateri pada kegiatan pelatihan Program TJSL bersama Perum Jasa Tirta II.',

    // Testimonials
    testi_label: 'Testimoni',
    testi_heading: 'Apa Kata Mereka',
    testi_sub: 'Ulasan dari klien dan rekan kolaborasi.',
    testi_card_1: 'Aplikasi yang dikembangkan sangat membantu operasional perusahaan kami. Sangat profesional dan tepat waktu.',
    testi_card_2: 'Proyek berjalan dengan lancar. Solusi yang diberikan sangat inovatif dan menyelesaikan permasalahan bisnis kami secara efisien.',
    testi_card_3: 'Kualitas aplikasi yang dibuat sangat memuaskan, andal, dan mudah digunakan. Dukungan teknis pasca-pengembangannya juga responsif.',
    testi_card_4: 'Kerjasama yang luar biasa! Implementasi sistem sangat rapi dan berhasil meningkatkan efisiensi operasional secara signifikan.',

    // Contact
    contact_label: 'Kontak',
    contact_heading: 'Punya rencana<br>proyek?',
    contact_sub: 'Mari diskusikan dan bangun solusi bermakna bersama.',
    contact_info_email: 'Email',
    contact_info_phone: 'Telepon / WhatsApp',
    contact_info_loc: 'Lokasi',
    form_name_label: 'Nama Lengkap',
    form_name_placeholder: 'Nama Anda',
    form_email_label: 'Email',
    form_email_placeholder: 'nama@email.com',
    form_subject_label: 'Subjek Pesan',
    form_subject_placeholder: 'Terkait apa pesan ini?',
    form_message_label: 'Pesan',
    form_message_placeholder: 'Ceritakan tentang proyek atau kebutuhan Anda...',
    form_submit: 'Kirim Pesan',

    // Footer
    footer_tagline: 'Web Developer & Personal Assistant berfokus pada solusi digital yang praktis dan bermakna.',
    footer_nav_title: 'Navigasi',
    footer_social_title: 'Media Sosial',
    footer_contact_title: 'Kontak',
    footer_location: 'Bandung, Jawa Barat',
    footer_rights: 'Hak cipta dilindungi undang-undang.'
  },
  en: {
    // Navbar & Global
    role_title: 'Web Developer',
    nav_home: 'Home',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_experience: 'Experience',
    nav_testimonials: 'Testimonials',
    nav_contact: 'Contact',
    nav_cta: "Let's Talk",
    lang_label: 'Language Selection:',

    // Hero
    hero_label: 'Web Developer',
    hero_heading: 'Building digital<br><em>experiences</em><br>that solve real<br>problems.',
    hero_desc: 'Informatics student specializing in web application development, business process digitalization, and enterprise information systems.',
    hero_btn_work: 'View My Work',
    hero_btn_contact: "Let's Talk",
    hero_tag_loc: 'Based in Bandung',
    hero_tag_role: 'Web Developer',

    // About
    about_label: 'About',
    about_heading: 'About Me',
    about_p1: 'Informatics Engineering student at Langlangbuana University with professional experience as a Personal Assistant and Web Developer, dedicated to crafting intuitive internal corporate applications.',
    about_p2: 'Experienced in developing HRIS platforms, management reporting systems, corporate websites, and administrative web portals. Skilled in database architecture, system analysis, and digitizing operations to maximize efficiency.',
    exp_tag_1: 'Web Application Development',
    exp_tag_2: 'Internal Company Applications',
    exp_tag_3: 'System Analysis',
    exp_tag_4: 'Database Management',
    exp_tag_5: 'Business Process Digitalization',
    exp_tag_6: 'Operational Project Coordination',
    edu_title: 'Education',
    edu_year_1: '2024 — Present',
    edu_school_1: 'Langlangbuana University',
    edu_faculty_1: 'Faculty of Informatics Engineering',
    edu_note_1: 'Expected Graduation 2028',
    edu_year_2: '2023',
    edu_school_2: 'SMK Marhas Margahayu',
    edu_faculty_2: 'Software Engineering',
    edu_note_2: 'Graduated May 2023',

    // Projects Section
    projects_label: 'Selected Work',
    projects_heading: 'Selected Projects',
    projects_sub: "A selection of projects I've designed and developed.",
    btn_view_details: 'View Details',
    modal_quick_visit: 'Live Website',
    modal_visit_live: 'Visit Live Website',
    modal_view_code: 'View Source Code',
    modal_close: 'Close',
    modal_overview_title: 'Project Overview',
    modal_problem_title: 'Challenges & Problems',
    modal_solution_title: 'Solution Built',
    modal_features_title: 'Key Features & Capabilities',
    modal_tech_title: 'Technologies Used',

    // Skills
    skills_label: 'Expertise',
    skills_heading: 'My Skills',
    cat_frontend: 'Front End',
    cat_backend: 'Back End',
    cat_database: 'Database',
    skill_responsive: 'Responsive Web Design',
    skill_db_mgmt: 'Database Management',
    pro_skills_title: 'Professional Skills',
    pro_skill_1: 'System Analysis',
    pro_skill_2: 'Problem Solving',
    pro_skill_3: 'Data Management',
    pro_skill_4: 'Report Writing',
    pro_skill_5: 'Project Coordination',
    pro_skill_6: 'Team Collaboration',
    pro_skill_7: 'Public Speaking',
    pro_skill_8: 'Training & Presentation',
    tools_title: 'Tools I Use',

    // Experience
    exp_label: 'Career',
    exp_heading: 'Experience',
    exp1_period_short: 'Aug 2024 — Present',
    exp1_role_short: 'Personal Assistant<br>&amp; Web Developer',
    exp1_role_full: 'Personal Assistant & Web Developer',
    exp1_period_full: 'August 2024 — Present',
    exp1_r1: 'Developed a web-based Human Resource Information System (HRIS).',
    exp1_r2: 'Engineered an internal web-based management report repository.',
    exp1_r3: 'Built responsive company profile websites for the parent company and subsidiaries.',
    exp1_r4: 'Integrated website contact forms with SMTP PHPMailer.',
    exp1_r5: 'Compiled regular project progress and operational reports.',
    exp1_r6: 'Managed and validated multi-stakeholder operational project data.',
    exp1_r7: 'Designed logos, product packaging, banners, and social media assets.',
    exp1_r8: 'Provided technical and administrative support throughout operational rollouts.',

    exp2_period_short: 'Feb 2026 — Present',
    exp2_role_short: 'Freelance Web Developer<br>(Side Job)',
    exp2_company_short: 'INDEPENDENT & CLIENT PROJECTS',
    exp2_role_full: 'Freelance Web Developer (Side Job)',
    exp2_company_full: 'Independent & Project-Based',
    exp2_period_full: 'February 2026 — Present',
    exp2_r1: 'Designing and developing custom web applications for MSMEs, institutions, and independent clients.',
    exp2_r2: 'Building information system modules including attendance tracking, HRIS, E-Signature verification (QR Code & SHA-256), and report repositories.',
    exp2_r3: 'Designing modern, responsive corporate websites optimized across mobile, tablet, and desktop devices.',
    exp2_r4: 'Integrating automated form workflows (SMTP PHPMailer), instant file exports (PDF / Excel), and dynamic analytical charts (Chart.js).',
    exp2_r5: 'Architecting robust, normalized relational databases (MySQL) ensuring data consistency and query performance.',
    exp2_r6: 'Implementing application security standards (Role-Based Access Control, session protection, data hashing) and page speed optimization.',

    exp3_period_short: 'Feb 2024 — May 2024',
    exp3_role_short: 'Admin SPM',
    exp3_role_full: 'Stationery Division Administrator',
    exp3_period_full: 'February 2024 — May 2024',
    exp3_r1: 'Designed product planograms aligned with visual merchandising strategies.',
    exp3_r2: 'Executed planogram rollouts across multiple retail store branches.',
    exp3_r3: 'Processed and analyzed retail sales data trends.',
    exp3_r4: 'Compiled regular sales and inventory reports.',

    // Achievements
    ach_stat_label: 'Sistema.bio beneficiaries in<br>West Java managed &amp; validated',
    ach_label: 'Key Highlights',
    ach_heading: 'Achievements',
    ach_item_1: 'Successfully developed three web-based applications to drive corporate digital transformation.',
    ach_item_2: 'Automated attendance tracking and payroll recap workflows through an integrated HRIS portal.',
    ach_item_3: 'Built a centralized report management system for streamlined digital submission, archiving, and retrieval.',
    ach_item_4: 'Constructed dynamic company websites integrated with PHPMailer notification pipelines.',
    ach_item_5: 'Managed and validated operational data for over <strong>300 Sistema.bio beneficiaries</strong> in West Java.',
    ach_item_6: 'Served as an official trainer and presenter for the TJSL Program in partnership with Perum Jasa Tirta II.',

    // Testimonials
    testi_label: 'Testimonials',
    testi_heading: 'What People Say',
    testi_sub: 'Feedback from clients and collaborators.',
    testi_card_1: 'The application developed really helped our company operations. Very professional and on time.',
    testi_card_2: 'The project went smoothly. The solution provided was highly innovative and solved our business problems efficiently.',
    testi_card_3: 'The quality of the application is very satisfying, reliable, and easy to use. The post-development support is also responsive.',
    testi_card_4: 'Outstanding collaboration! The system implementation is very neat and has successfully improved our operational efficiency significantly.',

    // Contact
    contact_label: 'Get In Touch',
    contact_heading: 'Have a project<br>in mind?',
    contact_sub: "Let's build something meaningful together.",
    contact_info_email: 'Email',
    contact_info_phone: 'Phone / WhatsApp',
    contact_info_loc: 'Location',
    form_name_label: 'Full Name',
    form_name_placeholder: 'Your Name',
    form_email_label: 'Email',
    form_email_placeholder: 'your@email.com',
    form_subject_label: 'Subject',
    form_subject_placeholder: "What's this regarding?",
    form_message_label: 'Message',
    form_message_placeholder: 'Tell me about your project or inquiry...',
    form_submit: 'Send Message',

    // Footer
    footer_tagline: 'Web Developer & Personal Assistant focused on practical, high-impact digital solutions.',
    footer_nav_title: 'Navigation',
    footer_social_title: 'Social Media',
    footer_contact_title: 'Contact',
    footer_location: 'Bandung, West Java',
    footer_rights: 'All rights reserved.'
  }
};

let currentLang = localStorage.getItem('preferred_lang') || 'id';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'id';
  currentLang = lang;
  localStorage.setItem('preferred_lang', lang);
  document.documentElement.lang = lang;

  const dict = translations[lang];

  // Update plain text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update HTML elements
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update active state on language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    btn.classList.toggle('active', btnLang === lang);
  });

  // Re-render project cards with current language
  renderProjects();
}

/* ============================================================
   01. PAGE LOADER
   ============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
      loader.classList.add('hidden');
      // Remove from DOM after animation
      setTimeout(() => loader.remove(), 600);
    }
    // Trigger hero animations
    initHeroAnimations();
    // Start scroll reveal
    revealOnScroll();
    initCounterAnimation();
  }, 1200);
});

/* ============================================================
   02. NAVBAR
   ============================================================ */
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.navbar-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a, .mobile-menu-cta');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNavLink();
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  document.body.classList.toggle('no-scroll', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu on link click
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Active nav link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav a');
  
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   03. SMOOTH SCROLLING
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (!target) return;
    
    e.preventDefault();
    const offset = navbar.offsetHeight + 20;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

/* ============================================================
   04. HERO ANIMATIONS
   ============================================================ */
function initHeroAnimations() {
  // Hero elements should now be visible (CSS handles the animation)
  // Additional JS animations if needed
  const heroElements = document.querySelectorAll('.hero-anim');
  heroElements.forEach(el => {
    el.style.animationPlayState = 'running';
  });
}

/* ============================================================
   05. SCROLL REVEAL & COUNTER ANIMATION
   ============================================================ */
function revealOnScroll() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

function initCounterAnimation() {
  const counterEl = document.getElementById('stat-counter');
  if (!counterEl) return;

  const target = parseInt(counterEl.getAttribute('data-target') || '300', 10);
  const duration = 1000; // fast 1 second count-up
  let hasAnimated = false;

  function runAnimation() {
    if (hasAnimated) return;
    hasAnimated = true;
    animateCounter(counterEl, 1, target, duration);
  }

  function checkInView() {
    if (hasAnimated) return;
    const rect = counterEl.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
      runAnimation();
    }
  }

  // 1. IntersectionObserver for modern scrolling detection
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px 50px 0px'
    });

    const targetContainer = counterEl.closest('.achievements') || counterEl;
    observer.observe(targetContainer);
  }

  // 2. Scroll & Resize event fallback
  window.addEventListener('scroll', checkInView, { passive: true });
  window.addEventListener('resize', checkInView, { passive: true });

  // 3. Immediate check on load & after loader fades
  setTimeout(checkInView, 300);
  setTimeout(checkInView, 1200);
}

function animateCounter(el, start, end, duration) {
  let startTime = null;
  el.textContent = start;

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out cubic: starts fast and smoothly locks onto the final number
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.floor(easeOut * (end - start) + start);
    
    el.textContent = currentVal;
    
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = end;
    }
  }

  requestAnimationFrame(step);
}

/* ============================================================
   06. PROJECTS DATA & RENDERING
   ============================================================ */

// ✏️ EDIT THIS ARRAY TO ADD YOUR REAL PROJECTS
const projects = [
  {
    id: 1,
    title: 'Company Profile PT Kaza Jawara Jamur',
    category: 'Company Profile & Agribusiness',
    year: '2026',
    role: 'Web Developer & UI Designer',
    client: 'PT Kaza Jawara Jamur',
    description: {
      id: 'Website company profile interaktif berbasis web untuk produsen jamur merang terkemuka dengan 500+ unit kumbung dan 4 sentra produksi.',
      en: 'Interactive web-based company profile for a leading straw mushroom producer featuring 500+ cultivation houses across 4 production centers.'
    },
    overview: {
      id: 'Proyek ini berfokus pada perancangan dan pengembangan website company profile interaktif berbasis web untuk PT Kaza Jawara Jamur, produsen jamur merang terkemuka dengan lebih dari 500 unit kumbung di 4 sentra produksi. Platform ini dibangun untuk meningkatkan brand awareness, mempermudah calon mitra bisnis memahami skema kemitraan agribisnis, serta menyediakan saluran komunikasi langsung antara pelanggan dan tim operasional.',
      en: 'This project focuses on designing and developing a modern, interactive company profile website for PT Kaza Jawara Jamur. Built to enhance brand credibility, streamline agribusiness partnership onboarding, and provide direct client inquiry channels.'
    },
    problem: {
      id: 'Informasi seputar kapasitas produksi, katalog produk jamur segar/olahan, dan skema kemitraan sebelumnya tersebar secara terpisah dalam dokumen manual. Hal ini memperlambat proses konsultasi kemitraan dan membuat calon investor/klien korporat kesulitan memverifikasi profil resmi perusahaan secara digital.',
      en: 'Information regarding production capacity, fresh/processed mushroom catalogs, and partnership schemes was previously scattered in offline manuals, slowing down stakeholder consultations and corporate verification.'
    },
    solution: {
      id: 'Membangun website responsif berkinerja tinggi dengan navigasi intuitif, penyajian data kapasitas produksi yang terukur, kalkulator/katalog skema kemitraan interaktif, galeri sentra produksi, serta formulir kontak langsung yang terintegrasi dengan protokol SMTP email otomatis.',
      en: 'Engineered a high-performance responsive website featuring intuitive navigation, verified capacity metrics, interactive partnership catalogs, farm galleries, and automated SMTP inquiry workflows.'
    },
    features: {
      id: [
        'Visualisasi profil bisnis & metrik kapasitas produksi (500+ kumbung & 4 sentra produksi)',
        'Katalog produk jamur merang segar, bibit, dan olahan dengan deskripsi standar mutu',
        'Halaman skema & simulasi kemitraan budidaya jamur terstruktur',
        'Formulir pesan/kontak interaktif terintegrasi SMTP PHPMailer secara asinkron (AJAX)',
        'Desain antarmuka modern, mobile-first, dan optimal di berbagai resolusi layar',
        'Galeri multimedia dokumentasi panen dan operasional sentra budidaya'
      ],
      en: [
        'Business profile visualization & production capacity metrics (500+ houses & 4 centers)',
        'Fresh, seed, and processed mushroom product catalog with quality assurance benchmarks',
        'Structured cultivation partnership simulation and inquiry pages',
        'Asynchronous (AJAX) contact form powered by automated SMTP PHPMailer',
        'Modern mobile-first UI design fully optimized across all screen viewports',
        'Multimedia harvest and farm facility documentation gallery'
      ]
    },
    images: [
      'assets/images/kaza1.png'
    ],
    image: 'assets/images/kaza1.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'PHP', 'PHPMailer', 'Font Awesome', 'Responsive Design'],
    liveUrl: 'https://www.kazajawarajamur.id',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Management Report System PLN Indonesia Power UBP Saguling',
    category: 'Management System & Repository',
    year: '2026',
    role: 'Full Stack Web Developer',
    client: 'PLN Indonesia Power UBP Saguling',
    description: {
      id: 'Platform terpusat untuk digitalisasi repositori dan otomasi alur kerja dokumen perusahaan guna mempercepat temu balik data dan transparansi approval.',
      en: 'Centralized repository and automated document workflow platform designed to expedite instant retrieval and multi-level approval transparency.'
    },
    overview: {
      id: 'Platform terpusat untuk digitalisasi repositori dan otomasi alur kerja dokumen perusahaan guna mempercepat temu balik data (instant retrieval) serta transparansi alur persetujuan berkas.',
      en: 'A centralized enterprise management portal built to digitize report workflows, expedite secure document archival, and provide transparent review tracking.'
    },
    problem: {
      id: 'Pengelolaan arsip fisik yang tersebar di berbagai divisi meningkatkan risiko redundansi data, kehilangan berkas penting, serta memakan waktu lama saat proses audit berkala.',
      en: 'Scattered physical and unstructured archives across divisions heightened data redundancy risks and slowed routine audit readiness.'
    },
    solution: {
      id: 'Membangun repositori dokumen digital berbasis web dengan sistem pengindeksan cepat, verifikasi multi-stage approval, serta pencatatan jejak audit (audit trail) yang aman.',
      en: 'Developed a secure web repository with instant multi-filtering indexing, multi-stage approval verification, and immutable audit trails.'
    },
    features: {
      id: [
        'Pencarian dokumen cerdas (instant multi-filtering, sorting dinamis, & kategorisasi)',
        'Alur kerja verifikasi, penolakan dengan catatan revisi, dan approval laporan berjenjang',
        'Audit Log Trail otomatis untuk melacak riwayat akses, unggah, dan perubahan dokumen',
        'Sistem notifikasi email otomatis saat ada pengajuan atau pembaruan status laporan',
        'Sistem keamanan hak akses dokumen berbasis peran (Role-Based Access Control)'
      ],
      en: [
        'Smart document retrieval with instant multi-filtering, dynamic sorting, and tagging',
        'Multi-stage verification, revision feedback notes, and hierarchical approval queues',
        'Automated Audit Trail logging for access timestamps, uploads, and modifications',
        'Automated email notification triggers for submissions and status changes',
        'Strict Role-Based Access Control (RBAC) guaranteeing granular data protection'
      ]
    },
    images: [
      'assets/images/pln1.png',
      'assets/images/pln2.png'
    ],
    image: 'assets/images/pln1.png',
    technologies: ['Laravel', 'PHP', 'MySQL', 'TailwindCSS / CSS3', 'Livewire / AJAX', 'PHPMailer / Mailtrap'],
    liveUrl: 'https://www.plnipsaguling.com',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Sistem HRIS (Human Resource Information System)',
    category: 'HR Management & Web Application',
    year: '2026',
    role: 'Full Stack Web Developer',
    client: 'PT Kaza Jawara Jamur',
    description: {
      id: 'Sistem informasi manajemen SDM berbasis web untuk otomatisasi administrasi karyawan, presensi, pengajuan cuti, dan rekapitulasi data terpusat.',
      en: 'Web-based Human Resource Information System automating employee records, daily attendance tracking, leave requests, and payroll recaps.'
    },
    overview: {
      id: 'Mengembangkan sistem informasi manajemen sumber daya manusia (HRIS) berbasis web untuk mengotomatisasi administrasi karyawan, pencatatan absensi, pengajuan cuti, dan rekapitulasi data secara terpusat.',
      en: 'An integrated web HR platform built to eliminate administrative friction in employee records, daily attendance logging, and leave management.'
    },
    problem: {
      id: 'Proses pengelolaan data pegawai, rekap absensi, dan pengajuan izin/cuti sebelumnya masih manual, memakan waktu lama, serta rentan terhadap human error dan duplikasi data.',
      en: 'Manual spreadsheet attendance and paper leave submissions caused data duplication, human calculation errors, and delayed monthly reporting.'
    },
    solution: {
      id: 'Membangun platform terintegrasi dengan sistem otentikasi bertingkat (Role-Based Access Control), validasi data otomatis, serta fitur rekapitulasi dan pelaporan berkala yang efisien.',
      en: 'Built an integrated web portal with role-based access, automated attendance calculation engines, and one-click PDF/Excel report exports.'
    },
    features: {
      id: [
        'Manajemen Data Karyawan: Pengelolaan profil, riwayat jabatan, dan dokumen pegawai secara terpusat',
        'Sistem Absensi & Pengajuan Cuti: Pencatatan kehadiran harian dan alur persetujuan (approval) cuti secara online',
        'Hak Akses Bertingkat (RBAC): Pemisahan hak akses antara Administrator, HRD, dan Karyawan',
        'Export Laporan & Rekapitulasi: Pembuatan laporan absensi dan aktivitas secara otomatis ke format Excel/PDF'
      ],
      en: [
        'Centralized Employee Management: Profile management, career milestones, and digital employee files',
        'Attendance & Leave Management: Daily check-in recording and automated online leave approval flow',
        'Role-Based Access Control (RBAC): Strict permission boundaries between Admin, HR, and Employees',
        'Automated Export Engine: Instant attendance summaries and payroll preparation in Excel & PDF formats'
      ]
    },
    images: [
      'assets/images/hris1.png',
      'assets/images/hris2.png'
    ],
    image: 'assets/images/hris1.png',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://www.hris.kazajawarajamur.id',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'E-Signature Generator & Verification System',
    category: 'Digital Signature & Security',
    year: '2026',
    role: 'Full Stack Web Developer',
    client: 'Digital Governance System',
    description: {
      id: 'Sistem tanda tangan elektronik dan verifikasi keaslian naskah dinas berbasis QR Code dan hashing dokumen (SHA-256) untuk mencegah pemalsuan dokumen digital.',
      en: 'Electronic signature generation and official document verification system utilizing dynamic QR Codes and SHA-256 cryptographic hashing.'
    },
    overview: {
      id: 'Sistem web Tanda Tangan Elektronik (E-Signature / TTE) dan verifikasi keaslian naskah dinas berbasis QR Code dan hashing dokumen untuk menjamin validitas, integritas, serta mencegah pemalsuan surat/dokumen digital.',
      en: 'A web-based Electronic Signature and document validation system engineered to guarantee document authenticity and prevent digital tampering.'
    },
    problem: {
      id: 'Proses validasi dokumen fisik rentan terhadap manipulasi/pemalsuan, memerlukan waktu lama untuk proses verifikasi manual, serta belum adanya mekanisme pelacakan identitas penandatangan secara digital yang aman dan transparan.',
      en: 'Physical signature verification was prone to forgery and lacked transparent digital signer tracking and cryptographic integrity.'
    },
    solution: {
      id: 'Mengembangkan platform penerbitan QR Code dinamis berbasis UUID dan algoritma hashing dokumen (SHA-256), dilengkapi portal verifikasi publik instan yang menampilkan status keabsahan, data naskah, profil penandatangan, dan unduhan file asli.',
      en: 'Engineered a UUID-based QR Code generator coupled with SHA-256 checksum hashing and an instant public verification portal.'
    },
    features: {
      id: [
        'Penerbitan QR TTE Dinamis: Pembuatan QR Code otomatis berbasis UUID unik dengan opsi penyematan identitas & foto penandatangan',
        'Verifikasi Keaslian Instan: Pemindaian QR langsung mengarah ke halaman verifikasi publik yang menampilkan status validitas dokumen secara real-time',
        'Integritas Dokumen (Cryptographic Hash): Validasi keaslian naskah digital menggunakan hash dokumen untuk mendeteksi perubahan file',
        'Dashboard Manajemen Dokumen & Admin: Panel pengelolaan arsip dokumen, detail naskah, kategori surat, serta kontrol akses pengguna'
      ],
      en: [
        'Dynamic E-Signature QR Generator: Automated UUID-backed QR generation with embedded signer identity metadata',
        'Instant Public Verification: Scanning opens a live validation landing page confirming document authenticity',
        'Cryptographic Integrity Check: SHA-256 file hashing to detect any post-signing document alterations',
        'Admin Document Management: Comprehensive dashboard for managing official letter types and issuance logs'
      ]
    },
    images: [
      'assets/images/esignature1.png',
      'assets/images/esignature2.png'
    ],
    image: 'assets/images/esignature1.png',
    technologies: ['PHP', 'MySQL', 'FPDF', 'PHP QR Code', 'JavaScript', 'Bootstrap 5', 'HTML5 / CSS3'],
    liveUrl: 'https://www.esignature.kazajawarajamur.id',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Sistem Monitoring & Arsip Laporan Kegiatan TJSL',
    category: 'Monitoring & Archiving System',
    year: '2026',
    role: 'Full Stack Web Developer',
    client: 'Perum Jasa Tirta II',
    description: {
      id: 'Sistem informasi terintegrasi untuk mendigitalkan pencatatan, pemantauan, pengarsipan, dan pelaporan kegiatan pendampingan lapangan TJSL Perum Jasa Tirta II.',
      en: 'Integrated platform digitizing field activity monitoring, milestone tracking, and corporate social responsibility (TJSL) reporting for Perum Jasa Tirta II.'
    },
    overview: {
      id: 'Mengembangkan sistem informasi berbasis web yang terintegrasi untuk mendigitalkan proses pencatatan, pemantauan, pengarsipan, dan pelaporan kegiatan pendampingan lapangan divisi Tanggung Jawab Sosial dan Lingkungan (TJSL) Perum Jasa Tirta II.',
      en: 'A comprehensive management portal built to monitor, archive, and analyze corporate social responsibility field operations across quarterly planning periods.'
    },
    problem: {
      id: 'Pencatatan laporan kegiatan lapangan sebelumnya masih manual dan tersebar, menyulitkan monitoring progres per periode RKT/tahun, rekapitulasi data lintas kategori, serta membutuhkan waktu lama saat pembuatan laporan cetak dan rekap data untuk manajemen.',
      en: 'Uncentralized field reports made progress monitoring across yearly workplans difficult and delayed executive reporting.'
    },
    solution: {
      id: 'Membangun aplikasi web monitoring terpusat dengan kontrol hak akses berbasis peran (Role-Based Access Control), visualisasi dashboard interaktif dengan Chart.js, filter dinamis multi-parameter, serta fitur ekspor otomatis ke format PDF siap cetak dan spreadsheet Excel.',
      en: 'Built an interactive monitoring dashboard with Chart.js analytics, flexible multi-parameter filters, and standardized PDF & Excel export engines.'
    },
    features: {
      id: [
        'Dashboard Analitik Interaktif: Visualisasi statistik KPI dan grafik distribusi laporan per kategori secara real-time menggunakan Chart.js',
        'Role-Based Access Control (RBAC): Pemisahan hak akses antara Administrator (pengelolaan data penuh, user, dan master kategori) dan Checker/Petugas Lapangan',
        'Multi-Parameter Filter & Archiving: Pencarian dan penyaringan laporan yang fleksibel berdasarkan Kategori, Tahun Kegiatan, dan Periode RKT (RKT 1–4)',
        'Automated Export Engine: Integrasi ekspor laporan ke format PDF landscape terstandarisasi (Dompdf) dan format spreadsheet Microsoft Excel (PhpSpreadsheet)',
        'Keamanan & UX Modern: Proteksi sesi, verifikasi password terenkripsi, antarmuka responsif modern SaaS, serta dynamic time-based background login'
      ],
      en: [
        'Interactive Analytics Dashboard: Real-time KPI charts and category distributions powered by Chart.js',
        'Role-Based Access Control (RBAC): Granular permissions for Admins, Supervisors, and Field Officers',
        'Multi-Parameter Archiving: Search and filter by category, work year, and quarterly plan phases (RKT 1–4)',
        'Automated Export Pipeline: Standardized landscape PDF generation (Dompdf) and Excel spreadsheets (PhpSpreadsheet)',
        'Robust Security & Modern UX: Encrypted passwords, session guards, responsive SaaS UI, and dynamic greeting backgrounds'
      ]
    },
    images: [
      'assets/images/pjt1.png',
      'assets/images/pjt2.png',
      'assets/images/pjt3.png'
    ],
    image: 'assets/images/pjt1.png',
    technologies: ['PHP', 'MySQL', 'Bootstrap 5', 'Chart.js', 'Dompdf', 'PhpSpreadsheet', 'SweetAlert2', 'JavaScript', 'HTML5 / CSS3'],
    liveUrl: 'https://www.reportpjt.kazajawarajamur.id',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Operasional Jawara — Mushroom Cultivation ERP',
    category: 'Agri-Tech ERP & Operations Portal',
    year: '2026',
    role: 'Full Stack Web Developer',
    client: 'Jawara Jamur',
    description: {
      id: 'Sistem portal manajemen operasional agribisnis terpadu untuk digitalisasi pencatatan panen jamur merang multi-kumbung, manajemen siklus budidaya, distribusi penjualan, serta dashboard transparansi real-time bagi investor.',
      en: 'A comprehensive agri-tech operational portal built to streamline mushroom cultivation management (Kumbung Jamur Merang), monitor multi-cycle harvests, track sales distributions, and provide transparent real-time dashboards for investors.'
    },
    overview: {
      id: 'Sistem portal manajemen operasional agribisnis terpadu untuk digitalisasi pencatatan panen jamur merang multi-kumbung, manajemen siklus budidaya, distribusi penjualan, serta dashboard transparansi real-time bagi investor.',
      en: 'A comprehensive agri-tech operational portal built to streamline mushroom cultivation management (Kumbung Jamur Merang), monitor multi-cycle harvests, track sales distributions, and provide transparent real-time dashboards for investors.'
    },
    problem: {
      id: 'Pencatatan panen manual berbasis kertas di berbagai kumbung sering memicu selisih data stok, lambatnya rekapitulasi penjualan, serta minimnya transparansi progres bagi para investor.',
      en: 'Manual paper-based harvest logs across distributed kumbung units caused data discrepancies, delayed sales reconciliation, and lacked real-time visibility for farm investors and stakeholders.'
    },
    solution: {
      id: 'Membangun sistem operasional berbasis web dengan pencatatan panen harian terstruktur, penyesuaian harga jual dinamis, pengarsipan siklus otomatis, dan dashboard pantau khusus investor.',
      en: 'Developed a centralized operational ERP featuring granular daily harvest logging, dynamic customer pricing, automated cycle archiving, and dedicated investor transparency dashboards.'
    },
    features: {
      id: [
        'Manajemen Kumbung & Siklus Panen: Pemantauan menyeluruh setiap periode tanam lengkap dengan fitur penutupan siklus dan pengarsipan data historis (archiving)',
        'Pencatatan Panen Harian & PIC: Input data hasil panen harian yang cepat dan akurat berdasarkan lokasi kumbung, PIC bertugas, dan shift kerja',
        'Dedicated Dashboard Investor: Halaman dashboard interaktif khusus per kumbung yang menampilkan visualisasi data panen secara transparan dan aman tanpa perlu login admin',
        'Manajemen Penjualan & Harga Fleksibel: Modul transaksi penjualan dengan kalkulasi pendapatan otomatis dan penyesuaian harga berdasarkan tujuan/pelanggan',
        'Export Laporan Excel & CSV: Rekapitulasi otomatis data panen, penjualan, dan arsip siklus ke format Excel/CSV untuk kebutuhan audit dan pembukuan',
        'Role-Based Access Control (RBAC): Pembatasan hak akses berjenjang untuk menjaga integritas data antara Admin, Petugas Lapangan, dan Publik'
      ],
      en: [
        'Multi-Kumbung & Harvest Cycle Management: End-to-end tracking of mushroom cultivation phases with automated cycle completion and historical data archiving',
        'Granular Daily Yield & Shift Logging: Fast and structured recording of daily harvests categorized by kumbung, PIC, shift, and quality grading',
        'Dedicated Investor & Stakeholder Portal: Public and route-dedicated interactive dashboards (e.g., per kumbung) displaying real-time harvest graphs, operational metrics, and transparency reports',
        'Sales & Dynamic Pricing Matrix: Streamlined order fulfillment with multi-tier customer pricing, auto-calculated revenues, and buyer distribution tracking',
        'Automated Data Export & Periodic Reporting: One-click CSV and Excel export engine for audit readiness, sales logs, and harvest yield analytics',
        'Role-Based Access Control (RBAC): Strict permission segregation between Administrators, Field Operators, and Viewers to ensure operational data integrity'
      ]
    },
    images: [
      'assets/images/opr1.png',
      'assets/images/opr2.png',
      'assets/images/opr3.png'
    ],
    image: 'assets/images/opr1.png',
    technologies: ['Laravel 8', 'PHP', 'MySQL', 'Bootstrap 5', 'DataTables', 'Chart.js', 'JavaScript / AJAX', 'Custom CSS'],
    liveUrl: 'https://www.operasional.kazajawarajamur.id',
    githubUrl: '#',
  },
];

function padNum(n) {
  return String(n).padStart(2, '0');
}

function getProjectField(project, field) {
  const val = project[field];
  if (!val) return '';
  if (typeof val === 'object' && !Array.isArray(val)) {
    return val[currentLang] || val['id'] || val['en'] || '';
  }
  return val;
}

function getProjectFeatures(project) {
  if (!project.features) return [];
  if (Array.isArray(project.features)) return project.features;
  if (typeof project.features === 'object') {
    return project.features[currentLang] || project.features['id'] || project.features['en'] || [];
  }
  return [];
}

function createProjectCardHTML(project, isClone = false) {
  const dict = translations[currentLang] || translations.id;
  const title = getProjectField(project, 'title');
  const category = getProjectField(project, 'category');
  const description = getProjectField(project, 'description');
  const viewDetailsText = dict.btn_view_details || 'Lihat Detail';

  return `
    <article class="project-card ${isClone ? 'is-clone' : ''}" data-project-id="${project.id}" role="button" tabindex="0" aria-label="View ${title}">
      <div class="project-image-wrap">
        <img 
          src="${project.image || (project.images && project.images[0]) || 'assets/images/project-placeholder.svg'}" 
          alt="${title}" 
          loading="lazy"
          onerror="this.src='assets/images/project-placeholder.svg'"
        >
        <span class="project-num">${padNum(project.id)}</span>
        <div class="project-overlay">
          <button type="button" class="project-overlay-btn primary" onclick="event.stopPropagation(); openProjectModal(${project.id});">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            ${viewDetailsText}
          </button>
        </div>
      </div>
      <div class="project-body">
        <div class="project-meta-row">
          <span class="project-category">${category}</span>
          ${project.year ? `<span class="project-year">${project.year}</span>` : ''}
        </div>
        <h3 class="project-title">${title}</h3>
        <p class="project-desc">${description}</p>
        <div class="project-tech">
          ${project.technologies.slice(0, 3).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          ${project.technologies.length > 3 ? `<span class="tech-tag" style="background:var(--accent-light);color:var(--accent);font-weight:600;">+${project.technologies.length - 3}</span>` : ''}
        </div>
        <div class="project-card-footer">
          <button type="button" class="btn-card-detail" onclick="event.stopPropagation(); openProjectModal(${project.id});">
            <span>${viewDetailsText}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProjects() {
  const track = document.getElementById('projects-track');
  const dotsContainer = document.getElementById('projects-dots');
  const prevBtn = document.getElementById('projects-prev-btn');
  const nextBtn = document.getElementById('projects-next-btn');
  
  if (!track || !projects.length) return;

  const N = projects.length;
  const cloneCount = 3;
  const clonesBefore = projects.slice(-cloneCount);
  const clonesAfter = projects.slice(0, cloneCount);

  let html = '';
  clonesBefore.forEach(p => { html += createProjectCardHTML(p, true); });
  projects.forEach(p => { html += createProjectCardHTML(p, false); });
  clonesAfter.forEach(p => { html += createProjectCardHTML(p, true); });
  track.innerHTML = html;

  if (dotsContainer) {
    dotsContainer.innerHTML = projects.map((_, i) => `
      <button type="button" class="project-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
    `).join('');
  }

  track.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = parseInt(card.getAttribute('data-project-id'), 10);
      if (pid) openProjectModal(pid);
    });
  });

  let currentIndex = cloneCount;
  let isAnimating = false;

  function getStepWidth() {
    const card = track.children[0];
    if (!card) return 0;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap || style.columnGap) || 24;
    return card.offsetWidth + gap;
  }

  function updateDots(realIdx) {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.project-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === realIdx);
    });
  }

  function moveTo(index, animate = true) {
    currentIndex = index;
    const step = getStepWidth();
    const offset = currentIndex * step;

    if (animate) {
      track.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
      isAnimating = true;
    } else {
      track.style.transition = 'none';
      isAnimating = false;
    }

    track.style.transform = `translateX(-${offset}px)`;

    const realIdx = ((currentIndex - cloneCount) % N + N) % N;
    updateDots(realIdx);
  }

  track.addEventListener('transitionend', (e) => {
    if (e.target !== track) return;
    isAnimating = false;

    if (currentIndex >= N + cloneCount) {
      currentIndex = currentIndex - N;
      moveTo(currentIndex, false);
    } else if (currentIndex < cloneCount) {
      currentIndex = currentIndex + N;
      moveTo(currentIndex, false);
    }
  });

  if (prevBtn) {
    prevBtn.onclick = () => {
      if (isAnimating) return;
      moveTo(currentIndex - 1, true);
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      if (isAnimating) return;
      moveTo(currentIndex + 1, true);
    };
  }

  if (dotsContainer) {
    dotsContainer.querySelectorAll('.project-dot').forEach(dot => {
      dot.onclick = () => {
        if (isAnimating) return;
        const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
        moveTo(cloneCount + targetIdx, true);
      };
    });
  }

  // Touch / Swipe support for mobile
  let touchStartX = 0;
  let touchDiff = 0;
  let isSwiping = false;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDiff = 0;
    isSwiping = true;
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    touchDiff = touchStartX - e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (!isSwiping) return;
    isSwiping = false;
    if (Math.abs(touchDiff) > 40) {
      if (touchDiff > 0) {
        moveTo(currentIndex + 1, true);
      } else {
        moveTo(currentIndex - 1, true);
      }
    }
  });

  // Mouse drag support for desktop
  let isMouseDown = false;
  let mouseStartX = 0;
  let mouseDiff = 0;

  track.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isMouseDown = true;
    mouseStartX = e.clientX;
    mouseDiff = 0;
    track.classList.add('is-dragging');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    mouseDiff = mouseStartX - e.clientX;
  });

  window.addEventListener('mouseup', () => {
    if (!isMouseDown) return;
    isMouseDown = false;
    track.classList.remove('is-dragging');
    if (Math.abs(mouseDiff) > 50) {
      if (mouseDiff > 0) {
        moveTo(currentIndex + 1, true);
      } else {
        moveTo(currentIndex - 1, true);
      }
    }
  });

  window.addEventListener('resize', () => {
    moveTo(currentIndex, false);
  });

  moveTo(cloneCount, false);
}

/* ============================================================
   07. PROJECT MODAL WITH PHOTO GALLERY & RICH DETAILS
   ============================================================ */
const modalOverlay = document.getElementById('project-modal');

function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project || !modalOverlay) return;

  const dict = translations[currentLang] || translations.id;
  const title = getProjectField(project, 'title');
  const category = getProjectField(project, 'category');
  const overview = getProjectField(project, 'overview') || getProjectField(project, 'description');
  const problem = getProjectField(project, 'problem');
  const solution = getProjectField(project, 'solution');
  const features = getProjectFeatures(project);

  const projectImages = project.images && project.images.length > 0 
    ? project.images 
    : [project.image || 'assets/images/project-placeholder.svg'];

  const content = modalOverlay.querySelector('.modal-content');
  content.innerHTML = `
    <!-- Modal Header Meta & Quick Visit Button -->
    <div class="modal-header-top">
      <div class="modal-header-meta">
        <span class="modal-category">${category}</span>
        ${project.year ? `<span class="modal-meta-pill">${project.year}</span>` : ''}
        ${project.role ? `<span class="modal-meta-pill role">${project.role}</span>` : ''}
      </div>
      <a 
        href="${(project.liveUrl && project.liveUrl !== '#') ? project.liveUrl : '#'}" 
        ${(project.liveUrl && project.liveUrl !== '#') ? 'target="_blank" rel="noopener noreferrer"' : 'onclick="if(this.getAttribute(\'href\')===\'#\'){ alert(\'Link live website dapat Anda atur di file js/script.js pada properti liveUrl\'); return false; }"' }
        class="btn-primary modal-quick-visit"
        aria-label="${dict.modal_quick_visit || 'Kunjungi Website'}"
      >
        <span>${dict.modal_quick_visit || 'Kunjungi Website'}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
    </div>

    <h2 class="modal-title">${title}</h2>

    <!-- Photo Gallery Section -->
    <div class="modal-gallery">
      <div class="modal-main-image">
        <img 
          id="modal-featured-img" 
          src="${projectImages[0]}" 
          alt="${title} Screenshot" 
          onerror="this.src='assets/images/project-placeholder.svg';"
        >
      </div>
      ${projectImages.length > 1 ? `
        <div class="modal-thumbnails" role="tablist" aria-label="Project screenshot thumbnails">
          ${projectImages.map((imgSrc, idx) => `
            <button 
              type="button" 
              class="modal-thumb ${idx === 0 ? 'active' : ''}" 
              onclick="switchModalImage('${imgSrc}', this)"
              aria-label="View screenshot ${idx + 1}"
            >
              <img src="${imgSrc}" alt="Thumbnail ${idx + 1}" onerror="this.src='assets/images/project-placeholder.svg';">
            </button>
          `).join('')}
        </div>
      ` : ''}
    </div>

    <!-- Overview -->
    <div class="modal-section">
      <h4 class="modal-section-title">${dict.modal_overview_title || 'Overview Proyek'}</h4>
      <p class="modal-desc">${overview}</p>
    </div>

    <!-- Problem & Solution Cards -->
    ${(problem || solution) ? `
      <div class="modal-grid-2">
        ${problem ? `
          <div class="modal-card-box problem">
            <div class="modal-card-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h5>${dict.modal_problem_title || 'Tantangan & Masalah'}</h5>
            <p>${problem}</p>
          </div>
        ` : ''}
        ${solution ? `
          <div class="modal-card-box solution">
            <div class="modal-card-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h5>${dict.modal_solution_title || 'Solusi yang Dibangun'}</h5>
            <p>${solution}</p>
          </div>
        ` : ''}
      </div>
    ` : ''}

    <!-- Key Features Checklist -->
    ${(features && features.length > 0) ? `
      <div class="modal-section">
        <h4 class="modal-section-title">${dict.modal_features_title || 'Fitur & Kemampuan Utama'}</h4>
        <ul class="modal-feature-list">
          ${features.map(feat => `
            <li class="modal-feature-item">
              <span class="modal-feature-bullet" aria-hidden="true">&#10003;</span>
              <span>${feat}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    ` : ''}

    <!-- Technologies Used -->
    <div class="modal-section">
      <h4 class="modal-section-title">${dict.modal_tech_title || 'Teknologi yang Digunakan'}</h4>
      <div class="modal-tech">
        ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="modal-actions">
      <a 
        href="${(project.liveUrl && project.liveUrl !== '#') ? project.liveUrl : '#'}" 
        ${(project.liveUrl && project.liveUrl !== '#') ? 'target="_blank" rel="noopener noreferrer"' : 'onclick="if(this.getAttribute(\'href\')===\'#\'){ alert(\'Link live website dapat Anda atur di file js/script.js pada properti liveUrl\'); return false; }"' }
        class="btn-primary"
      >
        <span>${dict.modal_visit_live || 'Kunjungi Website Live'}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
      ${project.githubUrl && project.githubUrl !== '#' ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          <span>${dict.modal_view_code || 'Lihat Source Code'}</span>
        </a>
      ` : ''}
      <button type="button" class="btn-outline" onclick="closeProjectModal()">
        <span>${dict.modal_close || 'Tutup'}</span>
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.classList.add('no-scroll');
  
  // Focus management
  modalOverlay.querySelector('.modal-close').focus();
}

// Function to switch main image in modal gallery
function switchModalImage(imgSrc, thumbBtn) {
  const featuredImg = document.getElementById('modal-featured-img');
  if (featuredImg) {
    featuredImg.src = imgSrc;
  }
  const allThumbs = document.querySelectorAll('.modal-thumb');
  allThumbs.forEach(t => t.classList.remove('active'));
  if (thumbBtn) {
    thumbBtn.classList.add('active');
  }
}

function closeProjectModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

// Close modal on overlay background click
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeProjectModal();
  });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
    closeProjectModal();
  }
});

/* ============================================================
   08. EXPERIENCE TAB SWITCHER
   ============================================================ */
function initExperienceTabs() {
  const expItems = document.querySelectorAll('.exp-item');
  const expDetails = document.querySelectorAll('.exp-details');
  const expTimeline = document.querySelector('.exp-timeline');

  if (!expItems.length) return;

  // Show first by default
  expItems[0].classList.add('active');
  expDetails[0].classList.add('active');

  expItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      expItems.forEach(i => i.classList.remove('active'));
      expDetails.forEach(d => d.classList.remove('active'));
      item.classList.add('active');
      if (expDetails[index]) {
        expDetails[index].classList.add('active');
      }
      
      // On mobile horizontal timeline, scroll ONLY the timeline container without shifting the window
      if (expTimeline && window.innerWidth <= 991) {
        const targetScroll = item.offsetLeft - (expTimeline.clientWidth / 2) + (item.offsetWidth / 2);
        expTimeline.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
      }
    });
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });
}

/* ============================================================
   09. TESTIMONIALS CAROUSEL
   ============================================================ */
function initTestimonialsCarousel() {
  const track = document.querySelector('.testimonials-track');
  const dots = document.querySelectorAll('.t-dot');
  const prevBtn = document.querySelector('.t-arrow.prev');
  const nextBtn = document.querySelector('.t-arrow.next');
  
  if (!track) return;

  const originalCards = Array.from(track.children);
  const N = originalCards.length;
  if (!N) return;

  // Clone 2 items at start and 2 at end for seamless looping
  const cloneCount = Math.min(2, N);
  const clonesBefore = originalCards.slice(-cloneCount).map(c => c.cloneNode(true));
  const clonesAfter = originalCards.slice(0, cloneCount).map(c => c.cloneNode(true));

  clonesBefore.forEach(c => track.insertBefore(c, track.firstChild));
  clonesAfter.forEach(c => track.appendChild(c));

  let currentIndex = cloneCount;
  let isAnimating = false;

  function getStepWidth() {
    const card = track.children[0];
    if (!card) return 0;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap || style.columnGap) || 24;
    return card.offsetWidth + gap;
  }

  function updateDots(realIdx) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === realIdx);
      dot.setAttribute('aria-selected', i === realIdx ? 'true' : 'false');
    });
  }

  function moveTo(index, animate = true) {
    currentIndex = index;
    const step = getStepWidth();
    const offset = currentIndex * step;

    if (animate) {
      track.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
      isAnimating = true;
    } else {
      track.style.transition = 'none';
      isAnimating = false;
    }

    track.style.transform = `translateX(-${offset}px)`;

    const realIdx = ((currentIndex - cloneCount) % N + N) % N;
    updateDots(realIdx);
  }

  // Handle seamless infinite loop jump on transition end
  track.addEventListener('transitionend', (e) => {
    if (e.target !== track) return;
    isAnimating = false;

    if (currentIndex >= N + cloneCount) {
      currentIndex = currentIndex - N;
      moveTo(currentIndex, false);
    } else if (currentIndex < cloneCount) {
      currentIndex = currentIndex + N;
      moveTo(currentIndex, false);
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (isAnimating) return;
      moveTo(currentIndex - 1, true);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (isAnimating) return;
      moveTo(currentIndex + 1, true);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (isAnimating) return;
      moveTo(cloneCount + index, true);
    });
  });

  // Auto-advance
  let autoplayTimer = setInterval(() => {
    moveTo(currentIndex + 1, true);
  }, 5000);

  // Pause on hover
  track.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  track.addEventListener('mouseleave', () => {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => {
      moveTo(currentIndex + 1, true);
    }, 5000);
  });

  // Touch / Swipe support
  let touchStartX = 0;
  let touchDiff = 0;
  let isSwiping = false;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDiff = 0;
    isSwiping = true;
    clearInterval(autoplayTimer);
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    touchDiff = touchStartX - e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (!isSwiping) return;
    isSwiping = false;
    if (Math.abs(touchDiff) > 40) {
      if (touchDiff > 0) {
        moveTo(currentIndex + 1, true);
      } else {
        moveTo(currentIndex - 1, true);
      }
    }
    autoplayTimer = setInterval(() => {
      moveTo(currentIndex + 1, true);
    }, 5000);
  });

  // Recalculate on window resize
  window.addEventListener('resize', () => {
    moveTo(currentIndex, false);
  });

  // Initial positioning
  moveTo(cloneCount, false);
}

/* ============================================================
   10. CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('.btn-submit');
  const messageDiv = form.querySelector('.form-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !subject || !message) {
      showFormMessage(currentLang === 'id' ? 'Mohon lengkapi semua kolom yang wajib diisi.' : 'Please fill in all required fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormMessage(currentLang === 'id' ? 'Format email tidak valid.' : 'Please enter a valid email address.', 'error');
      return;
    }

    if (message.length < 10) {
      showFormMessage(currentLang === 'id' ? 'Pesan minimal berisi 10 karakter.' : 'Message must be at least 10 characters.', 'error');
      return;
    }

    // Loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    messageDiv.style.display = 'none';
    messageDiv.className = 'form-message';

    try {
      const formData = new FormData(form);
      const response = await fetch('contact.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        showFormMessage(result.message || (currentLang === 'id' ? 'Pesan berhasil terkirim! Terima kasih.' : 'Message sent successfully! Thank you.'), 'success');
        form.reset();
      } else {
        showFormMessage(result.message || (currentLang === 'id' ? 'Terjadi kendala. Silakan coba lagi.' : 'Something went wrong. Please try again.'), 'error');
      }
    } catch (err) {
      showFormMessage(currentLang === 'id' ? 'Terjadi kesalahan jaringan. Silakan periksa koneksi Anda.' : 'Network error. Please check your connection and try again.', 'error');
    } finally {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });

  function showFormMessage(msg, type) {
    messageDiv.textContent = msg;
    messageDiv.className = `form-message ${type}`;
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* ============================================================
   11. INITIALIZE ALL
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Setup language switcher click listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) setLanguage(lang);
    });
  });

  // Apply stored or default language
  setLanguage(currentLang);

  initExperienceTabs();
  initTestimonialsCarousel();
  initContactForm();
  revealOnScroll();
  initCounterAnimation();
});
