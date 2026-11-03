/* =========================================================
   AHMAD NUR KHOLILY — PERSONAL PORTFOLIO
   Main JavaScript
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  /* =====================================================
       01. INTRO / LOADING ANIMATION
       ===================================================== */

  const introScreen = document.getElementById('intro-screen');

  function hideIntro() {
    if (introScreen) {
      introScreen.classList.add('hide');

      // Hapus elemen setelah animasi selesai
      setTimeout(function () {
        introScreen.remove();
      }, 800);
    }
  }

  // Tunggu sebentar agar animasi logo terlihat
  window.addEventListener('load', function () {
    setTimeout(hideIntro, 1200);
  });

  // Fallback jika event load terlalu lama
  setTimeout(hideIntro, 4000);

  /* =====================================================
       02. DARK / LIGHT MODE
       ===================================================== */

  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  function updateThemeIcon() {
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('i');

    if (!icon) return;

    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }

  // Baca preferensi tema yang tersimpan
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  } else if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
  }

  updateThemeIcon();

  // Ganti tema ketika tombol ditekan
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');

      const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';

      localStorage.setItem('portfolio-theme', currentTheme);

      updateThemeIcon();
    });
  }

  /* =====================================================
       03. AUTOMATIC FOOTER YEAR
       ===================================================== */

  const currentYear = document.getElementById('currentYear');

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  /* =====================================================
       04. MOBILE NAVIGATION
       ===================================================== */

  const navbarCollapse = document.getElementById('mainNavbar');

  if (navbarCollapse && typeof bootstrap !== 'undefined') {
    const navLinks = navbarCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show') && window.innerWidth < 992) {
          const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);

          bsCollapse.hide();
        }
      });
    });
  }

  /* =====================================================
       05. ACTIVE NAVIGATION ON SCROLL
       ===================================================== */

  const sections = document.querySelectorAll('main section[id]');

  const mainNavLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');

  function updateActiveNavigation() {
    let currentSection = '';

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 150;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });

    mainNavLinks.forEach(function (link) {
      link.classList.remove('active');

      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavigation, {
    passive: true,
  });

  updateActiveNavigation();

  /* =====================================================
       06. SCROLL REVEAL ANIMATION
       ===================================================== */

  const revealElements = document.querySelectorAll('.section-heading, .skill-card, .portfolio-card, ' + '.fact-item, .app-item, .about-lead, ' + '.about-description, .contact-section .container');

  // Tambahkan class animasi awal
  revealElements.forEach(function (element) {
    element.classList.add('reveal');
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    // Fallback untuk browser lama
    revealElements.forEach(function (element) {
      element.classList.add('visible');
    });
  }

  /* =====================================================
       07. PORTFOLIO IMAGE FALLBACK
       ===================================================== */

  const portfolioImages = document.querySelectorAll('.portfolio-image img');

  portfolioImages.forEach(function (image) {
    image.addEventListener('error', function () {
      // Jangan biarkan gambar rusak menampilkan ikon error
      image.style.display = 'none';

      const container = image.closest('.portfolio-image');

      if (container) {
        container.classList.add('image-placeholder');
      }
    });
  });

  /* =====================================================
       08. PREVENT EMPTY SOCIAL LINKS
       ===================================================== */

  const socialLinks = document.querySelectorAll('.social-links a');

  socialLinks.forEach(function (link) {
    const href = link.getAttribute('href');

    if (!href || href === '#') {
      link.addEventListener('click', function (event) {
        event.preventDefault();
      });
    }
  });

  /* =====================================================
       09. BACK TO TOP
       ===================================================== */

  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    backToTop.addEventListener('click', function (event) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  /* =====================================================
       10. CONSOLE MESSAGE
       ===================================================== */

  console.log('%cAHMAD NUR KHOLILY', 'font-size:20px;font-weight:bold;color:#d92736;');

  console.log('%cPortfolio website successfully initialized.', 'font-size:12px;color:#727b8c;');
});
