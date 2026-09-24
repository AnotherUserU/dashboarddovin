// Nusajawa Clove: menu, active section, ripening bar fallback, enquiry form.
(() => {
  const EMAIL = 'export@nusajawa.id';
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // UI strings created in JS; the page language picks the set (English and Indonesian pages share this file).
  const STRINGS = {
    en: {
      openMenu: 'Open menu', closeMenu: 'Close menu',
      toDark: 'Switch to dark theme', toLight: 'Switch to light theme',
      subject: 'Price offer request',
      sentTitle: 'Your email app should now open with the request filled in.',
      sentBefore: 'If nothing opened, email ', sentAfter: ' or message us on WhatsApp.',
    },
    id: {
      openMenu: 'Buka menu', closeMenu: 'Tutup menu',
      toDark: 'Ganti ke tema gelap', toLight: 'Ganti ke tema terang',
      subject: 'Permintaan penawaran harga',
      sentTitle: 'Aplikasi email Anda akan terbuka dengan permintaan yang sudah terisi.',
      sentBefore: 'Jika tidak terbuka, kirim email ke ', sentAfter: ' atau hubungi kami lewat WhatsApp.',
    },
  };
  const T = STRINGS[document.documentElement.lang] || STRINGS.en;

  /* Mobile menu */
  const toggle = document.querySelector('.menu-toggle');
  const navList = document.getElementById('nav-list');
  const setMenu = (open) => {
    navList.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? T.closeMenu : T.openMenu);
    toggle.querySelector('i').className = open ? 'ph ph-x' : 'ph ph-list';
  };
  toggle.addEventListener('click', () => setMenu(!navList.classList.contains('is-open')));
  navList.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  /* Theme toggle: light by default, choice remembered per browser */
  const themeBtn = document.querySelector('.theme-toggle');
  const syncThemeBtn = () => {
    const dark = document.documentElement.dataset.theme === 'dark';
    themeBtn.setAttribute('aria-pressed', String(dark));
    themeBtn.setAttribute('aria-label', dark ? T.toLight : T.toDark);
    themeBtn.querySelector('i').className = dark ? 'ph ph-sun' : 'ph ph-moon';
  };
  themeBtn.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    if (dark) document.documentElement.dataset.theme = 'dark';
    else delete document.documentElement.dataset.theme;
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) { /* storage blocked: choice lasts this visit */ }
    syncThemeBtn();
  });
  syncThemeBtn();

  /* Active section in the nav; ripening bar fallback where scroll timelines are missing */
  const links = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  const sections = links.map((a) => document.querySelector(a.getAttribute('href')));
  const fill = document.querySelector('.ripening-fill');
  const hasScrollTimeline = CSS.supports('animation-timeline: scroll()');

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const i = sections.indexOf(entry.target);
      links.forEach((a) => a.removeAttribute('aria-current'));
      if (i >= 0) links[i].setAttribute('aria-current', 'true');
      if (!hasScrollTimeline) {
        const progress = i >= 0 ? (i + 1) / sections.length : entry.target.id === 'contact' ? 1 : 0;
        fill.style.setProperty('--progress', progress.toFixed(3));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  // Hero and contact are observed too, so no nav item stays highlighted outside its section.
  [document.getElementById('top'), ...sections, document.getElementById('contact')].forEach((s) => s && spy.observe(s));

  /* Scroll motion: entrances fire once via IntersectionObserver (no scroll listeners) */
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Stagger order: list rows in reading order, map provinces west to east.
  document.querySelectorAll('[data-stagger]').forEach((list) => {
    [...list.children].forEach((li, i) => li.style.setProperty('--d', i));
  });
  const WEST_TO_EAST = { 'Banten': 0, 'Dki Jakarta': 0, 'Jawa Barat': 1, 'Jawa Tengah': 2, 'Daerah Istimewa Yogyakarta': 3, 'Jawa Timur': 4 };
  document.querySelectorAll('[data-reveal="map"] path').forEach((p) => p.style.setProperty('--d', WEST_TO_EAST[p.dataset.name] ?? 0));
  document.querySelectorAll('[data-reveal="map"] .hub-pin, [data-reveal="map"] .port-pin').forEach((pin, i) => pin.style.setProperty('--d', 5 + i));

  // Statement: wrap words so they can ink in sequence (CSS drives it with a view timeline).
  document.querySelectorAll('[data-words] p').forEach((p) => {
    const text = p.textContent.trim();
    const words = text.split(/\s+/);
    const readable = document.createElement('span');
    readable.className = 'sr-only';
    readable.textContent = text;
    p.innerHTML = '';
    p.append(readable);
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.className = 'w';
      span.setAttribute('aria-hidden', 'true');
      span.style.setProperty('--i', i);
      span.textContent = word;
      p.append(span, i < words.length - 1 ? ' ' : '');
    });
  });

  // Facts: count up to the real figure once, keeping any prefix like "≥" and suffix like "+".
  function countUp(dd) {
    const node = [...dd.childNodes].find((n) => n.nodeType === Node.TEXT_NODE && /\d/.test(n.textContent));
    if (!node) return;
    const [, prefix, digits, suffix] = node.textContent.match(/^(\D*)(\d+)(.*)$/);
    const target = Number(digits);
    const start = performance.now();
    const DURATION = 1400;
    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      node.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const revealTargets = document.querySelectorAll('[data-reveal], [data-stagger], [data-count]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('is-in'));
  } else {
    const revealer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('is-in');
        if (el.hasAttribute('data-count')) el.querySelectorAll('dd').forEach(countUp);
        obs.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealTargets.forEach((el) => revealer.observe(el));
  }

  /* Product links prefill the enquiry form */
  const form = document.getElementById('enquiry');
  const productSelect = form.elements.product;
  document.querySelectorAll('[data-product]').forEach((a) => {
    a.addEventListener('click', () => { productSelect.value = a.dataset.product; clearError(productSelect); });
  });

  /* Enquiry form: validate, then hand off to the visitor's email app */
  const rules = {
    name: (v) => v.trim().length > 1,
    company: (v) => v.trim().length > 1,
    email: (v) => EMAIL_RE.test(v.trim()),
    country: (v) => v !== '',
    product: (v) => v !== '',
  };

  function showError(field) {
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', `e-${field.name}`);
    document.getElementById(`e-${field.name}`).hidden = false;
  }
  function clearError(field) {
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
    const msg = document.getElementById(`e-${field.name}`);
    if (msg) msg.hidden = true;
  }

  Object.keys(rules).forEach((name) => {
    const field = form.elements[name];
    field.addEventListener(field.tagName === 'SELECT' ? 'change' : 'blur', () => {
      if (field.value && !rules[name](field.value)) showError(field);
      else if (rules[name](field.value)) clearError(field);
    });
    field.addEventListener('input', () => { if (rules[name](field.value)) clearError(field); });
  });

  const status = form.querySelector('.form-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const invalid = Object.keys(rules).filter((name) => !rules[name](form.elements[name].value));
    Object.keys(rules).forEach((name) => clearError(form.elements[name]));
    invalid.forEach((name) => showError(form.elements[name]));
    if (invalid.length) {
      form.elements[invalid[0]].focus();
      return;
    }

    const f = form.elements;
    const productLabel = productSelect.options[productSelect.selectedIndex].text;
    const subject = `${T.subject}: ${productLabel}, ${f.country.value}`;
    const body = [
      `Name: ${f.name.value.trim()}`,
      `Company: ${f.company.value.trim()}`,
      `Email: ${f.email.value.trim()}`,
      `Destination country: ${f.country.value}`,
      `Product: ${productLabel}`,
      `Volume (MT / month): ${f.volume.value || 'not specified'}`,
      '',
      f.notes.value.trim(),
    ].join('\n');

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.hidden = false;
    status.innerHTML = '';
    const title = document.createElement('strong');
    title.textContent = T.sentTitle;
    const note = document.createElement('span');
    note.append(T.sentBefore);
    const link = document.createElement('a');
    link.href = `mailto:${EMAIL}`;
    link.textContent = EMAIL;
    note.append(link, T.sentAfter);
    status.append(title, note);
  });
})();
