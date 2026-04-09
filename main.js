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

/* ─── SERVICE CARD CTAs → SCROLL TO CALENDAR ─── */
document.querySelectorAll('.service-card__cta[data-reason]').forEach(cta => {
  cta.addEventListener('click', (e) => {
    // Prevent propagation so card header click doesn't fire too
    e.stopPropagation();
    const cal = document.getElementById('calVisual');
    if (cal) cal.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

/* ─── EXPANDABLE SERVICE CARDS ─── */
(function() {
  const cards = document.querySelectorAll('.service-card--expandable');

  function openCard(card) {
    card.setAttribute('data-expanded', 'true');
    const btn = card.querySelector('.service-card__header');
    const toggle = card.querySelector('.service-card__toggle');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    if (toggle) toggle.textContent = '−';
  }

  function closeCard(card) {
    card.setAttribute('data-expanded', 'false');
    const btn = card.querySelector('.service-card__header');
    const toggle = card.querySelector('.service-card__toggle');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    if (toggle) toggle.textContent = '+';
  }

  cards.forEach(function(card) {
    const btn = card.querySelector('.service-card__header');
    if (!btn) return;
    btn.addEventListener('click', function() {
      const isOpen = card.getAttribute('data-expanded') === 'true';
      if (isOpen) {
        // Allow toggling the open one closed too
        closeCard(card);
      } else {
        // Close all others first
        cards.forEach(function(other) {
          if (other !== card) closeCard(other);
        });
        openCard(card);
      }
    });
  });
})();

/* ─── TESTIMONIAL CAROUSEL DOTS + ARROWS ─── */
(function() {
  var scroll = document.getElementById('testimonials-scroll');
  var dots = document.querySelectorAll('.testimonials__dot');
  var prevBtn = document.querySelector('.testimonials__arrow--prev');
  var nextBtn = document.querySelector('.testimonials__arrow--next');

  if (!scroll || !dots.length) return;

  function getCards() {
    return scroll.querySelectorAll('.testimonial-card');
  }

  function setActiveDot(index) {
    var cards = getCards();
    dots.forEach(function(d, i) {
      d.classList.toggle('testimonials__dot--active', i === index);
      d.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
    if (prevBtn) {
      prevBtn.disabled = index === 0;
      prevBtn.setAttribute('aria-disabled', index === 0 ? 'true' : 'false');
    }
    if (nextBtn) {
      nextBtn.disabled = index === cards.length - 1;
      nextBtn.setAttribute('aria-disabled', index === cards.length - 1 ? 'true' : 'false');
    }
  }

  function getActiveIndex() {
    var cards = getCards();
    var scrollLeft = scroll.scrollLeft;
    var best = 0;
    var bestDist = Infinity;
    cards.forEach(function(card, i) {
      var dist = Math.abs(card.offsetLeft - scrollLeft);
      if (dist < bestDist) { bestDist = dist; best = i; }
    });
    return best;
  }

  function scrollToCard(index) {
    var cards = getCards();
    if (!cards[index]) return;
    scroll.scrollTo({ left: cards[index].offsetLeft, behavior: 'smooth' });
    setActiveDot(index);
  }

  // Dot clicks
  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() { scrollToCard(i); });
  });

  // Arrow clicks
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      var idx = getActiveIndex();
      var cards = getCards();
      scrollToCard(Math.max(0, idx - 1));
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      var idx = getActiveIndex();
      var cards = getCards();
      scrollToCard(Math.min(cards.length - 1, idx + 1));
    });
  }

  // Snap scroll updates active dot
  var ticking = false;
  scroll.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        setActiveDot(getActiveIndex());
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initialise arrow states on load
  setActiveDot(0);
})();

/* ─── ABOUT CREDENTIALS TOGGLE ─── */
(function() {
  var toggle = document.getElementById('credsToggle');
  var list = document.getElementById('credsList');
  if (!toggle || !list) return;

  toggle.addEventListener('click', function() {
    var isOpen = list.classList.contains('open');
    if (isOpen) {
      list.classList.remove('open');
      list.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'View credentials +';
    } else {
      list.classList.add('open');
      list.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.textContent = 'Hide credentials −';
    }
  });
})();

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

/* ─── WHY CHOOSE US: collapsible items ─── */
(function() {
  var items = document.querySelectorAll('.why-item');

  function openItem(item) {
    item.setAttribute('data-expanded', 'true');
    var btn = item.querySelector('.why-item__btn');
    var toggle = item.querySelector('.why-item__toggle');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    if (toggle) toggle.textContent = '−';
  }

  function closeItem(item) {
    item.setAttribute('data-expanded', 'false');
    var btn = item.querySelector('.why-item__btn');
    var toggle = item.querySelector('.why-item__toggle');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    if (toggle) toggle.textContent = '+';
  }

  items.forEach(function(item) {
    // Respect open state set in HTML; close everything else
    var startsOpen = item.getAttribute('data-expanded') === 'true';
    if (!startsOpen) {
      item.setAttribute('data-expanded', 'false');
    }

    var btn = item.querySelector('.why-item__btn');
    if (!btn) return;

    btn.addEventListener('click', function() {
      var isOpen = item.getAttribute('data-expanded') === 'true';
      if (isOpen) {
        closeItem(item);
      } else {
        // Close all others first
        items.forEach(function(other) {
          if (other !== item) closeItem(other);
        });
        openItem(item);
      }
    });
  });
})();

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

/* ─── BOOKING CARD: calendar toggle + date selection ─── */
(function() {
  var toggleBtn = document.getElementById('calToggleBtn');
  var calSection = document.getElementById('calSection');
  var toggleIcon = toggleBtn ? toggleBtn.querySelector('.booking-card__cal-toggle-icon') : null;

  if (toggleBtn && calSection) {
    toggleBtn.addEventListener('click', function() {
      var isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        calSection.hidden = true;
        toggleBtn.setAttribute('aria-expanded', 'false');
        if (toggleIcon) toggleIcon.textContent = '+';
      } else {
        calSection.hidden = false;
        toggleBtn.setAttribute('aria-expanded', 'true');
        if (toggleIcon) toggleIcon.textContent = '−';
      }
    });
  }

  var el = document.getElementById('calVisual');
  if (!el) return;

  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var today = now.getDate();
  var monthName = now.toLocaleString('default', { month: 'long' });
  var firstDay = new Date(year, month, 1).getDay();
  var daysInMonth = new Date(year, month + 1, 0).getDate();
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var closedDay = 0;
  var fullDays = [today + 2, today + 5].filter(function(d) { return d <= daysInMonth; });

  var html = '<div class="cal-header">';
  html += '<span class="cal-month">' + monthName + ' ' + year + '</span>';
  html += '</div>';
  html += '<div class="cal-days">';
  days.forEach(function(d) { html += '<span class="cal-day-label">' + d + '</span>'; });
  html += '</div>';
  html += '<div class="cal-grid">';
  for (var i = 0; i < firstDay; i++) html += '<span class="cal-cell cal-cell--empty"></span>';
  for (var d = 1; d <= daysInMonth; d++) {
    var dow = new Date(year, month, d).getDay();
    var isPast = d < today;
    var isToday = d === today;
    var isClosed = dow === closedDay;
    var isFull = fullDays.includes(d);
    var cls = 'cal-cell';
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

  var callBtn = document.getElementById('calCallBtn');
  var banner = document.getElementById('calSelectedBanner');
  var selectedDateEl = document.getElementById('calSelectedDate');
  var baseCallText = 'Call (610) 555-0100';

  el.querySelectorAll('.cal-cell--open, .cal-cell--today').forEach(function(cell) {
    cell.setAttribute('tabindex', '0');
    cell.setAttribute('role', 'button');

    function selectCell(c) {
      el.querySelectorAll('.cal-cell--selected').forEach(function(s) { s.classList.remove('cal-cell--selected'); });
      c.classList.add('cal-cell--selected');
      var dayNum = c.textContent.trim();
      var dateLabel = monthName + ' ' + dayNum;
      if (selectedDateEl) selectedDateEl.textContent = dateLabel;
      if (banner) banner.hidden = false;
      if (callBtn) callBtn.textContent = baseCallText + ' — ' + monthName + ' ' + dayNum;
    }

    cell.addEventListener('click', function() { selectCell(this); });
    cell.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectCell(this);
      }
    });
  });
})();

/* ─── BOOKING CARD: callback form toggle + validation ─── */
(function() {
  var formToggleBtn = document.getElementById('formToggleBtn');
  var callbackForm = document.getElementById('callbackForm');
  var formToggleIcon = formToggleBtn ? formToggleBtn.querySelector('.booking-card__cal-toggle-icon') : null;

  if (formToggleBtn && callbackForm) {
    formToggleBtn.addEventListener('click', function() {
      var isOpen = formToggleBtn.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        callbackForm.hidden = true;
        formToggleBtn.setAttribute('aria-expanded', 'false');
        if (formToggleIcon) formToggleIcon.textContent = '+';
      } else {
        callbackForm.hidden = false;
        formToggleBtn.setAttribute('aria-expanded', 'true');
        if (formToggleIcon) formToggleIcon.textContent = '−';
      }
    });
  }

  var form = document.getElementById('callbackFormEl');
  var thanks = document.getElementById('callbackThanks');
  if (!form) return;

  function showError(inputId, errId) {
    var input = document.getElementById(inputId);
    var err = document.getElementById(errId);
    if (input) input.classList.add('is-invalid');
    if (err) err.hidden = false;
  }

  function clearError(inputId, errId) {
    var input = document.getElementById(inputId);
    var err = document.getElementById(errId);
    if (input) input.classList.remove('is-invalid');
    if (err) err.hidden = true;
  }

  // Live validation on blur
  var nameInput = document.getElementById('cb-name');
  var contactInput = document.getElementById('cb-contact');

  if (nameInput) {
    nameInput.addEventListener('blur', function() {
      if (!this.value.trim()) { showError('cb-name', 'cb-name-err'); }
      else { clearError('cb-name', 'cb-name-err'); }
    });
    nameInput.addEventListener('input', function() {
      if (this.value.trim()) clearError('cb-name', 'cb-name-err');
    });
  }

  if (contactInput) {
    contactInput.addEventListener('blur', function() {
      if (!this.value.trim()) { showError('cb-contact', 'cb-contact-err'); }
      else { clearError('cb-contact', 'cb-contact-err'); }
    });
    contactInput.addEventListener('input', function() {
      if (this.value.trim()) clearError('cb-contact', 'cb-contact-err');
    });
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var valid = true;

    if (!nameInput || !nameInput.value.trim()) {
      showError('cb-name', 'cb-name-err');
      valid = false;
    } else {
      clearError('cb-name', 'cb-name-err');
    }
    if (!contactInput || !contactInput.value.trim()) {
      showError('cb-contact', 'cb-contact-err');
      valid = false;
    } else {
      clearError('cb-contact', 'cb-contact-err');
    }

    if (!valid) return;

    // Build mailto link and open it, then show thank you
    var name = nameInput.value.trim();
    var contact = contactInput.value.trim();
    var day = document.getElementById('cb-day') ? document.getElementById('cb-day').value : '';
    var subject = encodeURIComponent('Callback Request — ' + name);
    var body = encodeURIComponent('Name: ' + name + '\nContact: ' + contact + (day ? '\nPreferred day: ' + day : ''));
    window.location.href = 'mailto:hello@stellarchiropractic.com?subject=' + subject + '&body=' + body;

    // Show confirmation
    form.hidden = true;
    if (thanks) thanks.hidden = false;
  });
})();
