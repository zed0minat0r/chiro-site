/* ─── NAV SCROLL ─── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ─── MOBILE MENU ─── */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');

function openMenu() {
  burger.classList.add('open');
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
  burger.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
}
function closeMenu() {
  burger.classList.remove('open');
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
}

burger.addEventListener('click', () => {
  burger.classList.contains('open') ? closeMenu() : openMenu();
});
mobileOverlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

document.querySelectorAll('.mobile-menu__link, .mobile-menu__cta').forEach(link => {
  link.addEventListener('click', closeMenu);
});

/* ─── HERO TRUST BAR: trigger pop animation once ─── */
const heroTrust = document.querySelector('.hero__trust');
if (heroTrust) {
  heroTrust.classList.add('animated');
}

/* ─── REVEAL ON SCROLL ─── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Stagger cards in grids using computed sibling index
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      const baseDelay = idx * 85;
      setTimeout(() => entry.target.classList.add('visible'), baseDelay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

/* ─── VALUE STRIP REVEAL ─── */
const valueItems = document.querySelectorAll('.value-strip__item');
const valueObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      valueObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

valueItems.forEach(el => valueObserver.observe(el));

/* ─── CONTACT FORM ─── */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const note = form.querySelector('.form__note');
    const originalBtnText = btn.textContent;
    const originalNote = note ? note.textContent : '';

    // Loading state
    btn.textContent = 'Sending…';
    btn.disabled = true;
    btn.style.opacity = '0.8';

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        btn.textContent = 'Message Sent ✓';
        btn.style.opacity = '1';
        btn.style.background = 'var(--teal-dark)';
        if (note) note.textContent = "We'll be in touch within a few hours. Thank you!";
        form.reset();
        setTimeout(() => {
          btn.textContent = originalBtnText;
          btn.style.background = '';
          btn.disabled = false;
          if (note) note.textContent = originalNote;
        }, 5000);
      } else {
        const json = await response.json().catch(() => ({}));
        throw new Error(json.error || 'Server error');
      }
    } catch (err) {
      btn.textContent = 'Something went wrong — try again';
      btn.style.opacity = '1';
      btn.style.background = '#c0392b';
      if (note) note.textContent = 'Please try again or call us directly at (610) 555-0100.';
      setTimeout(() => {
        btn.textContent = originalBtnText;
        btn.style.background = '';
        btn.disabled = false;
        if (note) note.textContent = originalNote;
      }, 5000);
    }
  });
}

/* ─── ACTIVE NAV LINK ON SCROLL ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--teal)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ─── FAQ: smooth open/close micro-interaction ─── */
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      const answer = item.querySelector('.faq-item__a');
      if (answer) {
        answer.style.animation = 'none';
        // Force reflow then fade in
        answer.getBoundingClientRect();
        answer.style.animation = 'faqReveal 0.3s ease forwards';
      }
    }
  });
});
