/* =========================================================================
   EXCLUSIVE DENTAL CARE — SHARED BEHAVIOR
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- Populate every element wired to central config ---------------- */
  document.querySelectorAll('[data-phone-display]').forEach(el => el.textContent = CLINIC.phoneDisplay);
  document.querySelectorAll('[data-whatsapp-display]').forEach(el => el.textContent = CLINIC.whatsappDisplay);
  document.querySelectorAll('[data-email-display]').forEach(el => el.textContent = CLINIC.email);
  document.querySelectorAll('[data-address-display]').forEach(el => el.innerHTML = `${CLINIC.address.line1}<br>${CLINIC.address.line2}`);
  document.querySelectorAll('a[data-tel]').forEach(el => el.href = telLink());
  document.querySelectorAll('a[data-whatsapp]').forEach(el => el.href = waLink(el.getAttribute('data-wa-message')));
  document.querySelectorAll('a[data-mail]').forEach(el => el.href = mailLink());
  document.querySelectorAll('[data-hours]').forEach(el => {
    el.innerHTML = CLINIC.hours.map(h => `<div class="contact-row" style="border:none;padding:4px 0;"><p style="flex:1"><strong style="color:var(--ink)">${h.days}</strong></p><p>${h.time}</p></div>`).join('');
  });
  const mapFrame = document.querySelector('[data-map-embed]');
  if (mapFrame) mapFrame.src = CLINIC.mapEmbedUrl;

  /* ---------------- Nav: scrolled state ---------------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.setAttribute('data-scrolled', window.scrollY > 8 ? 'true' : 'false');
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------- Mobile menu ---------------- */
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (burger && mobileMenu) {
    const closeMenu = () => { burger.setAttribute('aria-expanded', 'false'); mobileMenu.setAttribute('data-open', 'false'); document.body.style.overflow = ''; };
    const openMenu = () => { burger.setAttribute('aria-expanded', 'true'); mobileMenu.setAttribute('data-open', 'true'); document.body.style.overflow = 'hidden'; };
    burger.addEventListener('click', () => {
      const isOpen = burger.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  /* ---------------- Welcome animation (home page only) ---------------- */
  const welcome = document.getElementById('welcome');
  if (welcome) {
    const seen = sessionStorage.getItem('edc_welcome_seen');
    if (seen || reduced) {
      welcome.remove();
    } else {
      sessionStorage.setItem('edc_welcome_seen', '1');
      const hide = () => welcome.setAttribute('data-hide', 'true');
      setTimeout(hide, 3100);
      welcome.addEventListener('click', hide);
      setTimeout(() => welcome.remove(), 3900);
    }
  }

  /* ---------------- Hero: rotating headline + crossfading background ---------------- */
  const hero = document.querySelector('.hero');
  if (hero) {
    const slides = hero.querySelectorAll('.hero-slide');
    const texts = hero.querySelectorAll('.hh-text');
    const dots = hero.querySelectorAll('.hero-dots button');
    let idx = 0;
    const show = i => {
      slides.forEach((s, n) => s.setAttribute('data-active', n === i ? 'true' : 'false'));
      texts.forEach((t, n) => t.setAttribute('data-active', n === i ? 'true' : 'false'));
      dots.forEach((d, n) => d.setAttribute('data-active', n === i ? 'true' : 'false'));
      idx = i;
    };
    show(0);
    let timer = reduced ? null : setInterval(() => show((idx + 1) % slides.length), 5200);
    dots.forEach((d, n) => d.addEventListener('click', () => {
      show(n);
      if (timer) { clearInterval(timer); timer = setInterval(() => show((idx + 1) % slides.length), 5200); }
    }));
  }

  /* ---------------- Scroll reveal (one quiet, consistent pattern) ---------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.setAttribute('data-shown', 'true'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.setAttribute('data-shown', 'true'));
  }

  /* ---------------- Gallery filter chips (services page) ---------------- */
  const chips = document.querySelectorAll('.filter-chip');
  if (chips.length) {
    const items = document.querySelectorAll('[data-service-item]');
    chips.forEach(chip => chip.addEventListener('click', () => {
      chips.forEach(c => c.setAttribute('aria-pressed', 'false'));
      chip.setAttribute('aria-pressed', 'true');
      const cat = chip.getAttribute('data-filter');
      items.forEach(item => {
        const show = cat === 'all' || item.getAttribute('data-service-item') === cat;
        item.style.display = show ? '' : 'none';
      });
    }));
  }

  /* ---------------- Gallery lightbox ---------------- */
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    document.querySelectorAll('.masonry button, [data-lightbox-src]').forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-lightbox-src') || btn.querySelector('img')?.src;
        lbImg.src = src;
        lbImg.alt = btn.querySelector('img')?.alt || '';
        lightbox.setAttribute('data-open', 'true');
      });
    });
    lightbox.addEventListener('click', () => lightbox.setAttribute('data-open', 'false'));
    window.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.setAttribute('data-open', 'false'); });
  }

  /* ---------------- Form validation + fake-submit success state ---------------- */
  document.querySelectorAll('form[data-validate]').forEach(form => {
    const successBox = document.querySelector(form.getAttribute('data-success-target'));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach(input => {
        const field = input.closest('.field');
        const ok = input.type === 'checkbox' ? input.checked : input.value.trim().length > 0;
        if (field) field.classList.toggle('invalid', !ok);
        if (!ok) valid = false;
      });
      const emailField = form.querySelector('input[type="email"]');
      if (emailField && emailField.value && !/^\S+@\S+\.\S+$/.test(emailField.value)) {
        emailField.closest('.field').classList.add('invalid');
        valid = false;
      }
      if (!valid) {
        const firstInvalid = form.querySelector('.invalid input, .invalid select, .invalid textarea');
        firstInvalid?.focus();
        return;
      }
      form.style.display = 'none';
      if (successBox) successBox.setAttribute('data-show', 'true');
    });
  });

  /* ---------------- Set current year in footer ---------------- */
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
});
