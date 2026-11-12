/* =========================================================
   PF0_Portfolio — Script principal
   Navigation, thème, animations, filtres, slider, formulaire
   ========================================================= */
'use strict';

/* ---------- 1. Navbar : ombre au scroll + lien actif ---------- */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar__link');
const sections = document.querySelectorAll('section[id]');

function onScrollNavbar() {
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  // Lien actif selon la section visible
  const y = window.scrollY + 120;
  sections.forEach((sec) => {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach((l) =>
        l.classList.toggle('active-link', l.getAttribute('href') === '#' + sec.id)
      );
    }
  });
}
window.addEventListener('scroll', onScrollNavbar, { passive: true });
onScrollNavbar();

/* ---------- 2. Menu mobile ---------- */
const burger = document.getElementById('nav-burger');
const menu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('nav-close');

function toggleMenu(show) {
  menu.classList.toggle('show-menu', show);
  document.body.style.overflow = show ? 'hidden' : '';
}
burger?.addEventListener('click', () => toggleMenu(true));
closeBtn?.addEventListener('click', () => toggleMenu(false));
navLinks.forEach((l) => l.addEventListener('click', () => toggleMenu(false)));

/* ---------- 3. Thème clair / sombre ---------- */
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('pf0-theme', theme);
}
// Préférence enregistrée > préférence système > sombre
const saved = localStorage.getItem('pf0-theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
applyTheme(saved || (prefersLight ? 'light' : 'dark'));

themeToggle?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

/* ---------- 4. Effet machine à écrire (hero) ---------- */
const typedEl = document.getElementById('typed-text');
const words = ['Full Stack', 'Front-End', 'React & Vue', 'Freelance'];
let wIndex = 0, cIndex = 0, deleting = false;

function typeLoop() {
  if (!typedEl) return;
  const word = words[wIndex];
  typedEl.textContent = word.slice(0, cIndex);

  if (!deleting && cIndex < word.length) {
    cIndex++;
    setTimeout(typeLoop, 90);
  } else if (!deleting && cIndex === word.length) {
    deleting = true;
    setTimeout(typeLoop, 1800);
  } else if (deleting && cIndex > 0) {
    cIndex--;
    setTimeout(typeLoop, 45);
  } else {
    deleting = false;
    wIndex = (wIndex + 1) % words.length;
    setTimeout(typeLoop, 350);
  }
}
typeLoop();

/* ---------- 5. Animations au scroll (IntersectionObserver) ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ---------- 6. Compteurs animés (stats hero) ---------- */
function animateCounter(el) {
  const target = +el.dataset.count;
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        statsObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll('.stat-card__number').forEach((el) => statsObserver.observe(el));

/* ---------- 7. Filtres des projets ---------- */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active-filter'));
    btn.classList.add('active-filter');
    const filter = btn.dataset.filter;

    projectCards.forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden-card', !show);
      if (show) {
        card.classList.remove('in-view');
        requestAnimationFrame(() => card.classList.add('in-view'));
      }
    });
  });
});

/* ---------- 8. Slider de témoignages ---------- */
const testimonials = document.querySelectorAll('.testimonial');
const dotsWrap = document.getElementById('testimonial-dots');
let tIndex = 0;
let tTimer = null;

testimonials.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.setAttribute('aria-label', `Afficher le témoignage ${i + 1}`);
  if (i === 0) dot.classList.add('active-dot');
  dot.addEventListener('click', () => { showTestimonial(i); restartAutoplay(); });
  dotsWrap?.appendChild(dot);
});

function showTestimonial(i) {
  tIndex = i;
  testimonials.forEach((t, k) => t.classList.toggle('active-testimonial', k === i));
  dotsWrap?.querySelectorAll('button').forEach((d, k) => d.classList.toggle('active-dot', k === i));
}
function nextTestimonial() { showTestimonial((tIndex + 1) % testimonials.length); }
function restartAutoplay() {
  clearInterval(tTimer);
  tTimer = setInterval(nextTestimonial, 6000);
}
if (testimonials.length) restartAutoplay();

/* ---------- 9. Formulaire de contact (validation côté client) ---------- */
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

function validateField(field) {
  const group = field.closest('.form__group');
  let valid = true;
  if (field.required && !field.value.trim()) valid = false;
  if (field.type === 'email' && field.value.trim()) {
    valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(field.value.trim());
  }
  if (field.id === 'message' && field.value.trim().length < 10) valid = false;
  group?.classList.toggle('invalid', !valid);
  return valid;
}

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const fields = [...form.querySelectorAll('input, textarea')];
  const allValid = fields.map(validateField).every(Boolean);

  if (allValid) {
    feedback.textContent = '✅ Merci ! Votre message a bien été envoyé. Je vous réponds sous 24h.';
    feedback.className = 'form__feedback success';
    form.reset();
    setTimeout(() => { feedback.textContent = ''; }, 6000);
  } else {
    feedback.textContent = '⚠️ Merci de corriger les champs en rouge.';
    feedback.className = 'form__feedback error';
  }
});

// Validation en temps réel après 1re saisie
form?.addEventListener('blur', (e) => {
  if (e.target.matches('input, textarea')) validateField(e.target);
}, true);

/* ---------- 10. Bouton retour en haut ---------- */
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollTopBtn?.classList.toggle('show', window.scrollY > 600);
}, { passive: true });
scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
