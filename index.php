<?php
// index.php — Portfolio Homepage
// Rizqi Yumna Shafwan — Web Developer
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Rizqi Yumna Shafwan — Web Developer & Personal Assistant. Mahasiswa Informatika yang berfokus pada pengembangan aplikasi berbasis web, digitalisasi proses bisnis, dan pengelolaan sistem informasi perusahaan.">
  <meta name="keywords" content="web developer, PHP, Laravel, MySQL, Bandung, portfolio, Rizqi Yumna Shafwan">
  <meta name="author" content="Rizqi Yumna Shafwan">
  <!-- Open Graph -->
  <meta property="og:title" content="Rizqi Yumna Shafwan — Web Developer">
  <meta property="og:description" content="Mahasiswa Informatika yang berfokus pada pengembangan aplikasi berbasis web, digitalisasi proses bisnis, dan pengelolaan sistem informasi perusahaan.">
  <meta property="og:type" content="website">
  <title>Rizqi Yumna Shafwan — Web Developer</title>
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  
  <!-- Google Fonts: Plus Jakarta Sans & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&display=swap" rel="stylesheet">
  
  <!-- Custom Stylesheet -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<!-- ============================================================
     PAGE LOADER
     ============================================================ -->
<div class="page-loader" aria-hidden="true" role="status">
  <div class="loader-inner">
    <p class="loader-name">RIZQI YUMNA SHAFWAN</p>
    <div class="loader-line"></div>
  </div>
</div>

<!-- ============================================================
     NAVBAR
     ============================================================ -->
<header>
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="container">
      <div class="navbar-inner">
        <!-- Logo -->
        <a href="#home" class="navbar-logo" aria-label="Rizqi Yumna Shafwan — Home">
          <span class="navbar-logo-name">Rizqi Yumna Shafwan</span>
          <span class="navbar-logo-role" data-i18n="role_title">Web Developer</span>
        </a>

        <!-- Desktop Nav -->
        <ul class="navbar-nav" role="menubar">
          <li role="none"><a href="#home" role="menuitem" data-i18n="nav_home">Home</a></li>
          <li role="none"><a href="#about" role="menuitem" data-i18n="nav_about">About</a></li>
          <li role="none"><a href="#projects" role="menuitem" data-i18n="nav_projects">Projects</a></li>
          <li role="none"><a href="#skills" role="menuitem" data-i18n="nav_skills">Skills</a></li>
          <li role="none"><a href="#experience" role="menuitem" data-i18n="nav_experience">Experience</a></li>
          <li role="none"><a href="#testimonials" role="menuitem" data-i18n="nav_testimonials">Testimonials</a></li>
          <li role="none"><a href="#contact" role="menuitem" data-i18n="nav_contact">Contact</a></li>
        </ul>

        <!-- Right Actions: Language Switcher & CTA -->
        <div class="navbar-actions">
          <div class="lang-switcher" role="radiogroup" aria-label="Language selector">
            <button type="button" class="lang-btn" data-lang="id" aria-label="Bahasa Indonesia">ID</button>
            <span class="lang-divider" aria-hidden="true">/</span>
            <button type="button" class="lang-btn" data-lang="en" aria-label="English">EN</button>
          </div>
          <a href="#contact" class="btn-nav-cta" data-i18n="nav_cta" aria-label="Let's Talk — Go to contact">
            <span>Let's Talk</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <!-- Hamburger -->
        <button class="navbar-hamburger" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <nav class="mobile-menu" id="mobile-menu" role="dialog" aria-label="Mobile navigation" aria-modal="true">
    <a href="#home" data-i18n="nav_home">Home</a>
    <a href="#about" data-i18n="nav_about">About</a>
    <a href="#projects" data-i18n="nav_projects">Projects</a>
    <a href="#skills" data-i18n="nav_skills">Skills</a>
    <a href="#experience" data-i18n="nav_experience">Experience</a>
    <a href="#testimonials" data-i18n="nav_testimonials">Testimonials</a>
    <a href="#contact" data-i18n="nav_contact">Contact</a>
    <a href="#contact" class="mobile-menu-cta" data-i18n="nav_cta">
      <span>Let's Talk</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
    <div class="mobile-lang-wrap">
      <span class="mobile-lang-label" data-i18n="lang_label">Language:</span>
      <div class="lang-switcher" role="radiogroup" aria-label="Language selector mobile">
        <button type="button" class="lang-btn" data-lang="id">ID</button>
        <span class="lang-divider" aria-hidden="true">/</span>
        <button type="button" class="lang-btn" data-lang="en">EN</button>
      </div>
    </div>
  </nav>
</header>

<!-- ============================================================
     01. HERO SECTION
     ============================================================ -->
<main>
<section id="home" class="hero" aria-label="Hero — Introduction">
  <div class="container">
    <div class="hero-inner">

      <!-- Left Column -->
      <div class="hero-left">
        <p class="label accent hero-anim" data-i18n="hero_label">Web Developer</p>

        <h1 class="hero-heading hero-anim" data-i18n-html="hero_heading">
          Building digital<br>
          <em>experiences</em><br>
          that solve real<br>
          problems.
        </h1>

        <p class="hero-desc hero-anim" data-i18n="hero_desc">
          Mahasiswa Informatika yang berfokus pada pengembangan aplikasi berbasis web,
          digitalisasi proses bisnis, dan pengelolaan sistem informasi perusahaan.
        </p>

        <div class="hero-actions hero-anim">
          <a href="#projects" class="btn-primary" aria-label="View My Work — scroll to projects">
            <span data-i18n="hero_btn_work">View My Work</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" class="btn-outline" aria-label="Let's Talk — scroll to contact">
            <span data-i18n="hero_btn_contact">Let's Talk</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <!-- Right Column — Profile Image Container -->
      <div class="hero-right">
        <div class="hero-image-wrap hero-right-anim">
          <!-- Decorative frame -->
          <div class="hero-image-frame" aria-hidden="true"></div>

          <!-- Profile image container -->
          <div class="hero-image-box">
            <img
              src="assets/images/yumna.png"
              alt="Rizqi Yumna Shafwan"
              loading="eager"
              onerror="this.onerror=null; this.src='assets/images/profile-placeholder.svg';">
          </div>

          <!-- Decorative tags -->
          <div class="hero-deco-tag hero-deco-top" data-i18n="hero_tag_loc" aria-hidden="true">Based in Bandung</div>
          <div class="hero-deco-tag hero-deco-bottom" data-i18n="hero_tag_role" aria-hidden="true">Web Developer</div>

          <!-- Dot pattern -->
          <div class="hero-deco-dot" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================
     02. ABOUT SECTION
     ============================================================ -->
<section id="about" class="about section" aria-label="About Me">
  <div class="container">
    <div class="about-inner">

      <!-- Left: Text -->
      <div class="about-text">
        <div class="section-header" data-reveal>
          <p class="label" data-i18n="about_label">About</p>
          <h2 class="section-heading" data-i18n="about_heading">About Me</h2>
        </div>

        <div data-reveal data-reveal-delay="100">
          <p data-i18n="about_p1">
            Mahasiswa Informatika Universitas Langlangbuana dengan pengalaman sebagai
            Personal Assistant sekaligus Web Developer yang berfokus pada pengembangan
            aplikasi internal perusahaan.
          </p>
          <p data-i18n="about_p2">
            Saya memiliki pengalaman dalam membangun aplikasi HRIS, sistem manajemen laporan,
            website company profile, serta sistem administrasi berbasis web. Terbiasa menangani
            database management, system analysis, dan digitalisasi proses bisnis untuk meningkatkan
            efisiensi operasional.
          </p>
        </div>

        <div class="about-expertise" data-reveal data-reveal-delay="200">
          <span class="expertise-tag" data-i18n="exp_tag_1">Web Application Development</span>
          <span class="expertise-tag" data-i18n="exp_tag_2">Internal Company Applications</span>
          <span class="expertise-tag" data-i18n="exp_tag_3">System Analysis</span>
          <span class="expertise-tag" data-i18n="exp_tag_4">Database Management</span>
          <span class="expertise-tag" data-i18n="exp_tag_5">Business Process Digitalization</span>
          <span class="expertise-tag" data-i18n="exp_tag_6">Operational Project Coordination</span>
        </div>
      </div>

      <!-- Right: Education Timeline -->
      <div class="about-edu" data-reveal data-reveal-delay="200">
        <p class="edu-title" data-i18n="edu_title">Education</p>
        <div class="edu-timeline">

          <!-- University -->
          <div class="edu-item">
            <div class="edu-year" data-i18n="edu_year_1">2024 — Present</div>
            <div class="edu-content">
              <p class="edu-school" data-i18n="edu_school_1">Universitas Langlangbuana</p>
              <p class="edu-faculty" data-i18n="edu_faculty_1">Fakultas Teknik Informatika</p>
              <p class="edu-note" data-i18n="edu_note_1">Expected Graduation 2028</p>
            </div>
          </div>

          <!-- High School -->
          <div class="edu-item">
            <div class="edu-year">2023</div>
            <div class="edu-content">
              <p class="edu-school" data-i18n="edu_school_2">SMK Marhas Margahayu</p>
              <p class="edu-faculty" data-i18n="edu_faculty_2">Rekayasa Perangkat Lunak</p>
              <p class="edu-note" data-i18n="edu_note_2">Graduated May 2023</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================
     03. PROJECTS SECTION
     ============================================================ -->
<section id="projects" class="projects section" aria-label="Selected Projects">
  <div class="container">
    <div class="projects-header" data-reveal>
      <div>
        <p class="label" data-i18n="projects_label">Selected Work</p>
        <h2 class="section-heading" data-i18n="projects_heading">Selected Projects</h2>
        <p class="section-sub" data-i18n="projects_sub">A selection of projects I've designed and developed.</p>
      </div>
      <!-- Slider Navigation Controls -->
      <div class="projects-slider-controls">
        <button type="button" class="slider-arrow slider-prev" id="projects-prev-btn" aria-label="Previous Projects">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button type="button" class="slider-arrow slider-next" id="projects-next-btn" aria-label="Next Projects">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>

    <!-- Projects carousel viewport & track -->
    <div class="projects-carousel-wrap">
      <div id="projects-track" class="projects-track" role="region" aria-label="Project portfolio carousel">
        <!-- Injected by JavaScript -->
      </div>
    </div>

    <!-- Pagination Dots -->
    <div class="projects-dots" id="projects-dots" aria-label="Carousel pagination"></div>
  </div>
</section>

<!-- ============================================================
     04. SKILLS SECTION
     ============================================================ -->
<section id="skills" class="skills section" aria-label="Skills and Tools">
  <div class="container">
    <div class="section-header" data-reveal>
      <p class="label" data-i18n="skills_label">Expertise</p>
      <h2 class="section-heading" data-i18n="skills_heading">My Skills</h2>
    </div>

    <!-- Skills Grid: 3 Main Categories -->
    <div class="skills-grid" data-reveal data-reveal-delay="100">

      <!-- 01 Front End -->
      <div class="skill-category">
        <p class="skill-cat-num">01</p>
        <p class="skill-cat-title" data-i18n="cat_frontend">Front End</p>
        <svg class="skill-cat-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <path d="M14 17l-5 3 5 3M26 17l5 3-5 3M21 14l-2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <div class="skill-items">
          <div class="skill-item">
            <span class="skill-dot"></span>
            <span class="skill-name">HTML5</span>
          </div>
          <div class="skill-item">
            <span class="skill-dot"></span>
            <span class="skill-name">CSS3</span>
          </div>
          <div class="skill-item">
            <span class="skill-dot"></span>
            <span class="skill-name">JavaScript</span>
          </div>
          <div class="skill-item">
            <span class="skill-dot"></span>
            <span class="skill-name" data-i18n="skill_responsive">Responsive Web Design</span>
          </div>
        </div>
      </div>

      <!-- 02 Back End -->
      <div class="skill-category">
        <p class="skill-cat-num">02</p>
        <p class="skill-cat-title" data-i18n="cat_backend">Back End</p>
        <svg class="skill-cat-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <rect x="4" y="10" width="32" height="20" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="10" cy="20" r="2" fill="currentColor"/>
          <path d="M16 16l4 4-4 4M22 24h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <div class="skill-items">
          <div class="skill-item">
            <span class="skill-dot"></span>
            <span class="skill-name">PHP</span>
          </div>
          <div class="skill-item">
            <span class="skill-dot"></span>
            <span class="skill-name">Laravel</span>
          </div>
          <div class="skill-item">
            <span class="skill-dot"></span>
            <span class="skill-name">Java</span>
          </div>
          <div class="skill-item">
            <span class="skill-dot"></span>
            <span class="skill-name">C++</span>
          </div>
        </div>
      </div>

      <!-- 03 Database -->
      <div class="skill-category">
        <p class="skill-cat-num">03</p>
        <p class="skill-cat-title" data-i18n="cat_database">Database</p>
        <svg class="skill-cat-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <ellipse cx="20" cy="12" rx="14" ry="5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M6 12v6c0 2.76 6.27 5 14 5s14-2.24 14-5v-6" stroke="currentColor" stroke-width="1.5"/>
          <path d="M6 18v6c0 2.76 6.27 5 14 5s14-2.24 14-5v-6" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <div class="skill-items">
          <div class="skill-item">
            <span class="skill-dot"></span>
            <span class="skill-name">MySQL</span>
          </div>
          <div class="skill-item">
            <span class="skill-dot"></span>
            <span class="skill-name" data-i18n="skill_db_mgmt">Database Management</span>
          </div>
          <div class="skill-item">
            <span class="skill-dot"></span>
            <span class="skill-name">SQL</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Professional Skills -->
    <div class="pro-skills" data-reveal>
      <p class="pro-skills-title" data-i18n="pro_skills_title">Professional Skills</p>
      <div class="pro-skills-grid">
        <span class="pro-skill-tag" data-i18n="pro_skill_1">System Analysis</span>
        <span class="pro-skill-tag" data-i18n="pro_skill_2">Problem Solving</span>
        <span class="pro-skill-tag" data-i18n="pro_skill_3">Data Management</span>
        <span class="pro-skill-tag" data-i18n="pro_skill_4">Report Writing</span>
        <span class="pro-skill-tag" data-i18n="pro_skill_5">Project Coordination</span>
        <span class="pro-skill-tag" data-i18n="pro_skill_6">Team Collaboration</span>
        <span class="pro-skill-tag" data-i18n="pro_skill_7">Public Speaking</span>
        <span class="pro-skill-tag" data-i18n="pro_skill_8">Training &amp; Presentation</span>
      </div>
    </div>

    <!-- Tools Section -->
    <div class="tools-section" data-reveal>
      <p class="tools-title" data-i18n="tools_title">Tools I Use</p>
      <div class="tools-grid">

        <!-- VS Code -->
        <div class="tool-item">
          <div class="tool-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.86V4.14a1.5 1.5 0 0 0-.85-1.553zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
            </svg>
          </div>
          <span class="tool-name">VS Code</span>
        </div>

        <!-- NetBeans -->
        <div class="tool-item">
          <div class="tool-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M2 3h20v18H2V3zm2 2v14h16V5H4zm2 2h4v10H6V7zm6 0h4l2 5-2 5h-4V7z"/>
            </svg>
          </div>
          <span class="tool-name">NetBeans</span>
        </div>

        <!-- XAMPP -->
        <div class="tool-item">
          <div class="tool-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <span class="tool-name">XAMPP</span>
        </div>

        <!-- GitHub -->
        <div class="tool-item">
          <div class="tool-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
          </div>
          <span class="tool-name">GitHub</span>
        </div>

        <!-- Figma -->
        <div class="tool-item">
          <div class="tool-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.354-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 10.979c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117v-6.038H8.148zm4.587 13.019c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.509c-1.665 0-3.019 1.354-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019zm5.889-12.019h-.73V0h.73c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49z"/>
            </svg>
          </div>
          <span class="tool-name">Figma</span>
        </div>

        <!-- Canva -->
        <div class="tool-item">
          <div class="tool-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 3a7 7 0 1 0 0 14A7 7 0 0 0 12 5zm0 2a5 5 0 1 1 0 10A5 5 0 0 1 12 7z"/>
            </svg>
          </div>
          <span class="tool-name">Canva</span>
        </div>

        <!-- Microsoft Office -->
        <div class="tool-item">
          <div class="tool-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.53 3.306A1 1 0 0 0 21 3H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-.47-.694zM4 5h16v10H4V5zm0 14v-2h16v2H4z"/>
            </svg>
          </div>
          <span class="tool-name">MS Office</span>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- ============================================================
     05. EXPERIENCE SECTION
     ============================================================ -->
<section id="experience" class="experience section" aria-label="Work Experience">
  <div class="container">
    <div class="section-header" data-reveal>
      <p class="label" data-i18n="exp_label">Career</p>
      <h2 class="section-heading" data-i18n="exp_heading">Experience</h2>
    </div>

    <div class="experience-inner">

      <!-- Timeline Sidebar Navigation -->
      <div class="experience-sidebar" data-reveal>
        <div class="exp-timeline">

          <div class="exp-item active" role="button" tabindex="0" aria-expanded="true" aria-controls="exp-detail-1">
            <p class="exp-period" data-i18n="exp1_period_short">Aug 2024 — Present</p>
            <h3 class="exp-role" data-i18n-html="exp1_role_short">Personal Assistant<br>&amp; Web Developer</h3>
            <p class="exp-company">PT. TIRTA PUTRA MANDIRI</p>
          </div>

          <div class="exp-item" role="button" tabindex="0" aria-expanded="false" aria-controls="exp-detail-2">
            <p class="exp-period" data-i18n="exp2_period_short">Feb 2026 — Present</p>
            <h3 class="exp-role" data-i18n-html="exp2_role_short">Freelance Web Developer<br>(Side Job)</h3>
            <p class="exp-company" data-i18n="exp2_company_short">INDEPENDENT &amp; CLIENT PROJECTS</p>
          </div>

          <div class="exp-item" role="button" tabindex="0" aria-expanded="false" aria-controls="exp-detail-3">
            <p class="exp-period" data-i18n="exp3_period_short">Feb 2024 — May 2024</p>
            <h3 class="exp-role" data-i18n="exp3_role_short">Admin SPM</h3>
            <p class="exp-company">PT. AKUR PRATAMA</p>
          </div>

        </div>
      </div>

      <!-- Experience Details Panel -->
      <div class="experience-details-panel">

        <!-- Detail 01 -->
        <div class="exp-details active" id="exp-detail-1" data-reveal data-reveal-delay="200">
          <h3 class="exp-detail-heading" data-i18n="exp1_role_full">Personal Assistant &amp; Web Developer</h3>
          <p class="exp-detail-company">PT. TIRTA PUTRA MANDIRI</p>
          <p class="exp-detail-period" style="--present-badge: inline-block;" data-i18n="exp1_period_full">August 2024 — Present</p>
          <div class="exp-responsibilities">
            <div class="exp-resp-item">
              <span class="resp-num">01</span>
              <p class="resp-text" data-i18n="exp1_r1">Mengembangkan Human Resource Information System (HRIS) berbasis web.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">02</span>
              <p class="resp-text" data-i18n="exp1_r2">Mengembangkan aplikasi manajemen laporan berbasis web.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">03</span>
              <p class="resp-text" data-i18n="exp1_r3">Membangun website company profile perusahaan dan anak perusahaan.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">04</span>
              <p class="resp-text" data-i18n="exp1_r4">Mengintegrasikan formulir kontak website dengan PHPMailer.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">05</span>
              <p class="resp-text" data-i18n="exp1_r5">Menyusun laporan progres proyek.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">06</span>
              <p class="resp-text" data-i18n="exp1_r6">Mengelola dan memvalidasi data operasional proyek.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">07</span>
              <p class="resp-text" data-i18n="exp1_r7">Mendesain logo, kemasan produk, banner, dan konten media sosial.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">08</span>
              <p class="resp-text" data-i18n="exp1_r8">Memberikan dukungan teknis dan administratif selama proyek.</p>
            </div>
          </div>
        </div>

        <!-- Detail 02: Freelance Web Developer -->
        <div class="exp-details" id="exp-detail-2" data-reveal data-reveal-delay="200">
          <h3 class="exp-detail-heading" data-i18n="exp2_role_full">Freelance Web Developer (Side Job)</h3>
          <p class="exp-detail-company" data-i18n="exp2_company_full">Independent &amp; Project-Based</p>
          <p class="exp-detail-period" style="--present-badge: inline-block;" data-i18n="exp2_period_full">February 2026 — Present</p>
          <div class="exp-responsibilities">
            <div class="exp-resp-item">
              <span class="resp-num">01</span>
              <p class="resp-text" data-i18n="exp2_r1">Merancang dan mengembangkan aplikasi web kustom untuk kebutuhan digitalisasi UMKM, instansi, dan klien perorangan.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">02</span>
              <p class="resp-text" data-i18n="exp2_r2">Membangun modul sistem informasi seperti sistem presensi karyawan, HRIS, tanda tangan elektronik (E-Signature QR Code &amp; SHA-256), dan repositori laporan.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">03</span>
              <p class="resp-text" data-i18n="exp2_r3">Mendesain website company profile modern, responsif, dan optimal di berbagai perangkat (mobile, tablet, desktop).</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">04</span>
              <p class="resp-text" data-i18n="exp2_r4">Mengintegrasikan fitur otomatisasi formulir (SMTP PHPMailer), ekspor dokumen instan (PDF / Excel), dan visualisasi data statistik (Chart.js).</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">05</span>
              <p class="resp-text" data-i18n="exp2_r5">Merancang arsitektur database relasional (MySQL) yang terstruktur, efisien, dan memiliki integritas data yang kuat.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">06</span>
              <p class="resp-text" data-i18n="exp2_r6">Menerapkan standar keamanan aplikasi (Role-Based Access Control, proteksi sesi, enkripsi data) dan optimasi performa loading.</p>
            </div>
          </div>
        </div>

        <!-- Detail 03 -->
        <div class="exp-details" id="exp-detail-3" data-reveal data-reveal-delay="200">
          <h3 class="exp-detail-heading" data-i18n="exp3_role_full">Admin Divisi Stationery</h3>
          <p class="exp-detail-company">PT. AKUR PRATAMA</p>
          <p class="exp-detail-period" data-i18n="exp3_period_full">February 2024 — May 2024</p>
          <div class="exp-responsibilities">
            <div class="exp-resp-item">
              <span class="resp-num">01</span>
              <p class="resp-text" data-i18n="exp3_r1">Mendesain planogram produk berdasarkan strategi visual merchandising.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">02</span>
              <p class="resp-text" data-i18n="exp3_r2">Mengimplementasikan planogram di berbagai toko.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">03</span>
              <p class="resp-text" data-i18n="exp3_r3">Mengolah dan menganalisis data penjualan.</p>
            </div>
            <div class="exp-resp-item">
              <span class="resp-num">04</span>
              <p class="resp-text" data-i18n="exp3_r4">Menyusun laporan penjualan.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

<!-- ============================================================
     ACHIEVEMENTS SECTION
     ============================================================ -->
<section id="achievements" class="achievements" aria-label="Achievements">
  <div class="container">
    <div class="achievements-inner">

      <!-- Stat Highlight: 300+ -->
      <div class="achievements-stat" data-reveal>
        <div>
          <div class="stat-number"><span id="stat-counter" data-target="300">0</span><span class="stat-unit">+</span></div>
          <p class="stat-label" data-i18n-html="ach_stat_label">Penerima manfaat Sistema.bio<br>di Jawa Barat dikelola &amp; divalidasi</p>
        </div>
      </div>

      <!-- Achievements List -->
      <div>
        <div class="section-header" data-reveal>
          <p class="label" data-i18n="ach_label">Key Highlights</p>
          <h2 class="section-heading" data-i18n="ach_heading">Achievements</h2>
        </div>

        <div class="achievements-list">

          <div class="achievement-item" data-reveal data-reveal-delay="100">
            <div class="ach-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <p class="ach-text" data-i18n="ach_item_1">Berhasil mengembangkan tiga aplikasi berbasis web untuk mendukung digitalisasi operasional perusahaan.</p>
          </div>

          <div class="achievement-item" data-reveal data-reveal-delay="150">
            <div class="ach-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <p class="ach-text" data-i18n="ach_item_2">Berhasil mengotomatisasi proses rekapitulasi absensi dan perhitungan gaji melalui HRIS.</p>
          </div>

          <div class="achievement-item" data-reveal data-reveal-delay="200">
            <div class="ach-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <p class="ach-text" data-i18n="ach_item_3">Mengembangkan sistem manajemen laporan untuk pengiriman, pengarsipan, dan pencarian dokumen digital.</p>
          </div>

          <div class="achievement-item" data-reveal data-reveal-delay="250">
            <div class="ach-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <p class="ach-text" data-i18n="ach_item_4">Membangun website perusahaan yang terintegrasi dengan PHPMailer.</p>
          </div>

          <div class="achievement-item" data-reveal data-reveal-delay="300">
            <div class="ach-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <p class="ach-text" data-i18n-html="ach_item_5">Mengelola dan memvalidasi data lebih dari <strong>300 penerima manfaat</strong> Sistema.bio di Jawa Barat.</p>
          </div>

          <div class="achievement-item" data-reveal data-reveal-delay="350">
            <div class="ach-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <p class="ach-text" data-i18n="ach_item_6">Berperan sebagai pemateri pada kegiatan pelatihan Program TJSL bersama Perum Jasa Tirta II.</p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================
     06. TESTIMONIALS SECTION
     ============================================================ -->
<section id="testimonials" class="testimonials section" aria-label="Testimonials">
  <div class="container">
    <div class="section-header" data-reveal>
      <p class="label" data-i18n="testi_label">Testimonials</p>
      <h2 class="section-heading" data-i18n="testi_heading">What People Say</h2>
      <p class="section-sub" data-i18n="testi_sub">Feedback from clients and collaborators.</p>
    </div>

    <div class="testimonials-carousel" data-reveal>
      <div class="testimonials-track" role="list">

        <!-- Testimonial 01 -->
        <div class="testimonial-card" role="listitem">
          <div class="testimonial-quote-icon" aria-hidden="true">&ldquo;</div>
          <p class="testimonial-text" data-i18n="testi_card_1">Aplikasi yang dikembangkan sangat membantu operasional perusahaan kami. Sangat profesional dan tepat waktu.</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
            </div>
            <div class="testimonial-author-info">
              <p class="testimonial-name">Direktur</p>
              <p class="testimonial-role">PT Tirta Putra Mandiri</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 02 -->
        <div class="testimonial-card" role="listitem">
          <div class="testimonial-quote-icon" aria-hidden="true">&ldquo;</div>
          <p class="testimonial-text" data-i18n="testi_card_2">Proyek berjalan dengan lancar. Solusi yang diberikan sangat inovatif dan menyelesaikan permasalahan bisnis kami secara efisien.</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
            </div>
            <div class="testimonial-author-info">
              <p class="testimonial-name">Direktur</p>
              <p class="testimonial-role">PT Kaza Jawara Jamur</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 03 -->
        <div class="testimonial-card" role="listitem">
          <div class="testimonial-quote-icon" aria-hidden="true">&ldquo;</div>
          <p class="testimonial-text" data-i18n="testi_card_3">Kualitas aplikasi yang dibuat sangat memuaskan, andal, dan mudah digunakan. Dukungan teknis pasca-pengembangannya juga responsif.</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
            </div>
            <div class="testimonial-author-info">
              <p class="testimonial-name">Manajer Unit</p>
              <p class="testimonial-role">PLN UBP Saguling</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 04 -->
        <div class="testimonial-card" role="listitem">
          <div class="testimonial-quote-icon" aria-hidden="true">&ldquo;</div>
          <p class="testimonial-text" data-i18n="testi_card_4">Kerjasama yang luar biasa! Implementasi sistem sangat rapi dan berhasil meningkatkan efisiensi operasional secara signifikan.</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
            </div>
            <div class="testimonial-author-info">
              <p class="testimonial-name">Kepala Divisi Humas</p>
              <p class="testimonial-role">Perum Jasa Tirta II</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Carousel Navigation Controls -->
    <div class="testimonial-controls">
      <div class="testimonial-dots" role="tablist" aria-label="Testimonial navigation">
        <button class="t-dot active" role="tab" aria-selected="true" aria-label="Testimonial 1"></button>
        <button class="t-dot" role="tab" aria-selected="false" aria-label="Testimonial 2"></button>
        <button class="t-dot" role="tab" aria-selected="false" aria-label="Testimonial 3"></button>
        <button class="t-dot" role="tab" aria-selected="false" aria-label="Testimonial 4"></button>
      </div>
      <div class="testimonial-arrows">
        <button class="t-arrow prev" aria-label="Previous testimonial">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button class="t-arrow next" aria-label="Next testimonial">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     07. CONTACT SECTION
     ============================================================ -->
<section id="contact" class="contact section" aria-label="Contact">
  <div class="container">
    <div class="contact-inner">

      <!-- Left: Contact Details -->
      <div class="contact-left" data-reveal>
        <p class="label" data-i18n="contact_label">Get In Touch</p>
        <h2 class="contact-heading" data-i18n-html="contact_heading">
          Have a project<br>in mind?
        </h2>
        <p class="contact-sub" data-i18n="contact_sub">Let's build something meaningful together.</p>

        <div class="contact-info-list">

          <div class="contact-info-item">
            <div class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="contact-info-content">
              <p class="contact-info-label" data-i18n="contact_info_email">Email</p>
              <p class="contact-info-value">
                <a href="mailto:rizqiyumnaaa@gmail.com">rizqiyumnaaa@gmail.com</a>
              </p>
            </div>
          </div>

          <div class="contact-info-item">
            <div class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="contact-info-content">
              <p class="contact-info-label" data-i18n="contact_info_phone">Phone</p>
              <p class="contact-info-value">
                <a href="https://wa.me/62895338443691" target="_blank" rel="noopener noreferrer">0895338443691</a>
              </p>
            </div>
          </div>

          <div class="contact-info-item">
            <div class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <div class="contact-info-content">
              <p class="contact-info-label" data-i18n="contact_info_loc">Location</p>
              <p class="contact-info-value">Jl. Terusan Kopo, Katapang, Cilampeni, Kp. Muara Ciwidey</p>
            </div>
          </div>

          <div class="contact-info-item">
            <div class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div class="contact-info-content">
              <p class="contact-info-label">LinkedIn</p>
              <p class="contact-info-value">
                <a href="https://www.linkedin.com/in/rizqi-yumna-shafwan-950175372" target="_blank" rel="noopener noreferrer">Rizqi Yumna Shafwan</a>
              </p>
            </div>
          </div>

        </div>
      </div>

      <!-- Right: Contact Form (PHPMailer) -->
      <div class="contact-right" data-reveal data-reveal-delay="200">
        <form id="contact-form" class="contact-form" novalidate aria-label="Contact form">
          <!-- Honeypot field (hidden from real users) -->
          <div class="form-honeypot" aria-hidden="true">
            <label for="website">Website</label>
            <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="name"><span data-i18n="form_name_label">Name</span> <span aria-hidden="true">*</span></label>
              <input type="text" id="name" name="name" placeholder="Your Name" data-i18n-placeholder="form_name_placeholder" required autocomplete="name">
            </div>
            <div class="form-group">
              <label for="email"><span data-i18n="form_email_label">Email</span> <span aria-hidden="true">*</span></label>
              <input type="email" id="email" name="email" placeholder="your@email.com" data-i18n-placeholder="form_email_placeholder" required autocomplete="email">
            </div>
          </div>

          <div class="form-group">
            <label for="subject"><span data-i18n="form_subject_label">Subject</span> <span aria-hidden="true">*</span></label>
            <input type="text" id="subject" name="subject" placeholder="What's this regarding?" data-i18n-placeholder="form_subject_placeholder" required>
          </div>

          <div class="form-group">
            <label for="message"><span data-i18n="form_message_label">Message</span> <span aria-hidden="true">*</span></label>
            <textarea id="message" name="message" placeholder="Tell me about your project or inquiry..." data-i18n-placeholder="form_message_placeholder" required minlength="10" maxlength="5000"></textarea>
          </div>

          <!-- Status notification message -->
          <div class="form-message" role="alert" aria-live="polite"></div>

          <button type="submit" class="btn-submit" aria-label="Send message">
            <span class="btn-text">
              <span data-i18n="form_submit">Send Message</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
            <span class="btn-spinner" aria-label="Sending..."></span>
          </button>

        </form>
      </div>

    </div>
  </div>
</section>

</main>

<!-- ============================================================
     08. FOOTER
     ============================================================ -->
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-top">

      <div class="footer-brand">
        <p class="footer-logo-name">Rizqi Yumna Shafwan</p>
        <p class="footer-tagline" data-i18n="footer_tagline">Web Developer &amp; Personal Assistant berfokus pada solusi digital yang praktis dan bermakna.</p>
      </div>

      <div class="footer-nav-group">
        <p class="footer-nav-title" data-i18n="footer_nav_title">Navigation</p>
        <nav class="footer-nav-links" aria-label="Footer navigation">
          <a href="#home" data-i18n="nav_home">Home</a>
          <a href="#about" data-i18n="nav_about">About</a>
          <a href="#projects" data-i18n="nav_projects">Projects</a>
          <a href="#skills" data-i18n="nav_skills">Skills</a>
          <a href="#experience" data-i18n="nav_experience">Experience</a>
          <a href="#testimonials" data-i18n="nav_testimonials">Testimonials</a>
          <a href="#contact" data-i18n="nav_contact">Contact</a>
        </nav>
      </div>

      <div class="footer-nav-group">
        <p class="footer-nav-title" data-i18n="footer_social_title">Follow</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/in/rizqi-yumna-shafwan-950175372" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="#" aria-label="GitHub Profile">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
            GitHub
          </a>
        </div>
      </div>

      <div class="footer-nav-group">
        <p class="footer-nav-title" data-i18n="footer_contact_title">Contact</p>
        <div class="footer-nav-links">
          <a href="mailto:rizqiyumnaaa@gmail.com">rizqiyumnaaa@gmail.com</a>
          <a href="https://wa.me/62895338443691" target="_blank" rel="noopener noreferrer">0895338443691</a>
          <span style="font-size:13px;color:rgba(247,247,242,0.4);" data-i18n="footer_location">Bandung, West Java</span>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p class="footer-copy">&copy; <?php echo date('Y'); ?> Rizqi Yumna Shafwan. <span data-i18n="footer_rights">All rights reserved.</span></p>
      <p class="footer-made">Minimal &amp; Editorial Portfolio</p>
    </div>
  </div>
</footer>

<!-- ============================================================
     PROJECT MODAL
     ============================================================ -->
<div id="project-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-label="Project details" aria-hidden="true">
  <div class="modal-box">
    <button class="modal-close" onclick="closeProjectModal()" aria-label="Close project modal">&times;</button>
    <div class="modal-content">
      <!-- Dynamically filled by JavaScript -->
    </div>
  </div>
</div>

<!-- Main Script -->
<script src="js/script.js"></script>

</body>
</html>
