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

/* ─── REVEAL ON SCROLL ─── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger cards in grids
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      let delay = 0;
      siblings.forEach((el, idx) => { if (el === entry.target) delay = idx * 80; });
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

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
        // Success state
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
        // Server error
        const json = await response.json().catch(() => ({}));
        throw new Error(json.error || 'Server error');
      }
    } catch (err) {
      // Error state
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
