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

/* ─── SERVICE CARD CTAs → PRE-POPULATE REASON DROPDOWN ─── */
document.querySelectorAll('.service-card__cta[data-reason]').forEach(cta => {
  cta.addEventListener('click', () => {
    const reason = cta.dataset.reason;
    const select = document.getElementById('reason');
    if (select) {
      // Match the option text to the data-reason value
      for (const opt of select.options) {
        if (opt.textContent.trim() === reason) {
          select.value = opt.value || opt.textContent;
          break;
        }
      }
    }
  });
});

/* ─── PER-FIELD FORM VALIDATION ─── */
function validateField(field) {
  const group = field.closest('.form-group');
  if (!group) return true;
  const errorEl = group.querySelector('.form-error');
  let valid = true;

  if (field.hasAttribute('required') && !field.value.trim()) {
    valid = false;
  } else if (field.type === 'email' && field.value.trim()) {
    // Basic email format check
    valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
  }

  if (!valid) {
    group.classList.add('form-group--error');
    field.setAttribute('aria-invalid', 'true');
  } else {
    group.classList.remove('form-group--error');
    field.removeAttribute('aria-invalid');
  }
  return valid;
}

// Live validation: clear error on input, show on blur
const formFields = document.querySelectorAll('#contact-form input[required], #contact-form input[type="email"]');
formFields.forEach(field => {
  field.addEventListener('blur', () => validateField(field));
  field.addEventListener('input', () => {
    const group = field.closest('.form-group');
    if (group && group.classList.contains('form-group--error')) {
      validateField(field);
    }
  });
});

/* ─── CONTACT FORM ─── */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all required fields before submitting
    let allValid = true;
    form.querySelectorAll('input[required], input[type="email"]').forEach(field => {
      if (!validateField(field)) allValid = false;
    });
    if (!allValid) return;
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
      if (note) note.textContent = 'Please try again in a moment, or call us directly to book.';
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

/* ─── HERO SCROLL HINT FADE ON SCROLL ─── */
const scrollHint = document.querySelector('.hero__scroll-hint');
if (scrollHint) {
  window.addEventListener('scroll', () => {
    const opacity = Math.max(0, 1 - window.scrollY / 300);
    scrollHint.style.opacity = opacity;
    if (opacity === 0) scrollHint.style.pointerEvents = 'none';
    else scrollHint.style.pointerEvents = '';
  }, { passive: true });
}

/* ─── STICKY MOBILE CTA BAR ─── */
const stickyCta = document.getElementById('sticky-cta');
if (stickyCta) {
  const heroCtas = document.querySelector('.hero__cta-group');
  const contactSection = document.getElementById('contact');

  // Show sticky bar once hero CTAs scroll out of view
  const stickyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        stickyCta.classList.add('visible');
      } else {
        stickyCta.classList.remove('visible');
      }
    });
  }, { threshold: 0 });

  if (heroCtas) stickyObserver.observe(heroCtas);

  // Hide sticky bar when contact section is in view
  if (contactSection) {
    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        stickyCta.classList.toggle('hidden-in-contact', entry.isIntersecting);
      });
    }, { threshold: 0.2 });
    contactObserver.observe(contactSection);
  }
}

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

/* ─── VISUAL CALENDAR ─── */
(function() {
  const el = document.getElementById('calVisual');
  if (!el) return;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();
  const monthName = now.toLocaleString('default', { month: 'long' });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const closedDay = 0;
  const fullDays = [today + 2, today + 5].filter(d => d <= daysInMonth);

  let html = '<div class="cal-header">';
  html += '<span class="cal-month">' + monthName + ' ' + year + '</span>';
  html += '</div>';
  html += '<div class="cal-days">';
  days.forEach(d => { html += '<span class="cal-day-label">' + d + '</span>'; });
  html += '</div>';
  html += '<div class="cal-grid">';
  for (let i = 0; i < firstDay; i++) html += '<span class="cal-cell cal-cell--empty"></span>';
  for (let d = 1; d <= daysInMonth; d++) {
    const dow = new Date(year, month, d).getDay();
    const isPast = d < today;
    const isToday = d === today;
    const isClosed = dow === closedDay;
    const isFull = fullDays.includes(d);
    let cls = 'cal-cell';
    if (isPast) cls += ' cal-cell--past';
    else if (isClosed) cls += ' cal-cell--closed';
    else if (isFull) cls += ' cal-cell--full';
    else if (isToday) cls += ' cal-cell--today';
    else cls += ' cal-cell--open';
    html += '<span class="' + cls + '">' + d + '</span>';
  }
  html += '</div>';
  html += '<div class="cal-legend">';
  html += '<span><span class="cal-dot cal-dot--open"></span> Available</span>';
  html += '<span><span class="cal-dot cal-dot--full"></span> Full</span>';
  html += '<span><span class="cal-dot cal-dot--closed"></span> Closed</span>';
  html += '</div>';
  el.innerHTML = html;

  el.querySelectorAll('.cal-cell--open, .cal-cell--today').forEach(cell => {
    cell.addEventListener('click', function() {
      el.querySelectorAll('.cal-cell--selected').forEach(s => s.classList.remove('cal-cell--selected'));
      this.classList.add('cal-cell--selected');
    });
  });
})();
