// ===== NAV SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ===== I18N =====
const translations = {
  it: {
    'hero-desc':      'Specializzato su server Linux, con esperienza su Windows, VMware, backup, reti e firewall. Lavoro sia da remoto che on-site, sempre con il terminale in mano.',
    'btn-connect':    'GitHub & LinkedIn',
    'btn-more':       'Scopri di più',
    'term-uptime':    'sempre online',
    'term-whoami':    'Tecnico Hardware',
    'about-text':     'Tecnico Hardware specializzato su sistemi Linux con esperienza su server fisici e virtuali in ambienti aziendali. Mi occupo inoltre di sistemi di backup, server Windows, firewall e reti. Oltre che da remoto lavoro anche on-site. Automatizzo tutto ciò che si ripete.',
    'distro-1':       'Enterprise Linux',
    'distro-2':       'Open source RHEL',
    'distro-3':       'Community Linux',
    'conf-role':      '"Tecnico Hardware"',
    'conf-location':  '"Italia"',
    'conf-sector':    '"IT Infrastructure & Supporto"',
    'skill-1-title':  'Linux & Scripting',
    'skill-1-li2':    'Bash scripting & shell personalizzate',
    'skill-2-title':  'Virtualizzazione & Backup',
    'skill-2-li2':    'NAS QNAP · script backup personalizzati',
    'skill-4-title':  'Hardware & Field Service',
    'skill-4-li1':    'Server Lenovo & Fujitsu',
    'skill-4-li2':    'XClarity · iRMC · garanzie RMA',
    'skill-4-li3':    'Interventi on-site',
    'gh-desc':        'qui trovi i miei progetti, script e configurazioni',
    'li-desc':        '📍 Italia. Per contattarmi usa il link qui sotto.',
    'btn-gh':         'Apri profilo GitHub',
    'btn-li':         'Apri profilo LinkedIn',
    'page-title':     'Simone Gottardi — Tecnico Hardware',
  },
  en: {
    'hero-desc':      'Specialised in Linux servers, with experience in Windows, VMware, backup, networking and firewalls. I work both remotely and on-site, always with a terminal open.',
    'btn-connect':    'GitHub & LinkedIn',
    'btn-more':       'Learn more',
    'term-uptime':    'always online',
    'term-whoami':    'Hardware Technician',
    'about-text':     'Hardware Technician specialised in Linux systems with experience on physical and virtual servers in enterprise environments. I also handle backup systems, Windows Server, firewalls and networking, both remotely and on-site. I automate everything that repeats.',
    'distro-1':       'Enterprise Linux',
    'distro-2':       'Open-source RHEL',
    'distro-3':       'Community Linux',
    'conf-role':      '"Hardware Technician"',
    'conf-location':  '"Italy"',
    'conf-sector':    '"IT Infrastructure & Support"',
    'skill-1-title':  'Linux & Scripting',
    'skill-1-li2':    'Bash scripting & custom shells',
    'skill-2-title':  'Virtualisation & Backup',
    'skill-2-li2':    'QNAP NAS · custom backup scripts',
    'skill-4-title':  'Hardware & Field Service',
    'skill-4-li1':    'Lenovo & Fujitsu Servers',
    'skill-4-li2':    'XClarity · iRMC · RMA warranties',
    'skill-4-li3':    'On-site interventions',
    'gh-desc':        'find my projects, scripts and configs here',
    'li-desc':        '📍 Italy. Contact me via the link below.',
    'btn-gh':         'Open GitHub profile',
    'btn-li':         'Open LinkedIn profile',
    'page-title':     'Simone Gottardi — Hardware Technician',
  }
};

const rolesByLang = {
  it: [
    'Tecnico Hardware',
    'Linux & Bash Scripting',
    'VMware & Virtualizzazione',
    'Windows Server & Active Directory',
    'Reti & Firewall',
  ],
  en: [
    'Hardware Technician',
    'Linux & Bash Scripting',
    'VMware & Virtualisation',
    'Windows Server & Active Directory',
    'Networks & Firewalls',
  ]
};

let currentLang = localStorage.getItem('lang') || 'en';

// ===== TYPED EFFECT ROLES (mutable array, updated by applyLang) =====
const roles = [...rolesByLang[currentLang]];

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Translate all tagged elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Update page title
  document.title = translations[lang]['page-title'];

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update typed roles array in place
  roles.length = 0;
  rolesByLang[lang].forEach(r => roles.push(r));

  // Sync all lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Wire up all lang buttons (nav + footer)
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// Apply saved / default language on load
applyLang(currentLang);

// ===== THEME =====
let currentTheme = localStorage.getItem('theme') || 'dark';

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
}

document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
});

applyTheme(currentTheme);
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed');

function typeLoop() {
  const current = roles[roleIndex % roles.length];
  typedEl.textContent = isDeleting
    ? current.slice(0, --charIndex)
    : current.slice(0, ++charIndex);

  let delay = isDeleting ? 45 : 80;
  if (!isDeleting && charIndex === current.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }
  setTimeout(typeLoop, delay);
}
typeLoop();

// ===== TERMINAL LINE-BY-LINE REVEAL =====
const termLines = document.querySelectorAll('.term-body p');
termLines.forEach((line, i) => {
  line.style.opacity = '0';
  line.style.transition = 'opacity 0.3s ease';
  setTimeout(() => { line.style.opacity = '1'; }, 400 + i * 250);
});

// ===== REVEAL ON SCROLL =====
const revealEls = document.querySelectorAll(
  '#about .container > *, #skills .container > *, #contact .container > *'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// contact è ora un link LinkedIn — nessun form da gestire

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + entry.target.id
          ? 'var(--white)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
