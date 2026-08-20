/**
 * SWEYA PHARMACEUTICAL LIMITED — Main JS
 * Renders dynamic sections from SWEYA_CONFIG and wires up
 * navigation, scroll reveal, form validation and small UI behaviors.
 */

(function () {
  "use strict";

  /* ---------------------------------------------------------------
     ICON LIBRARY — simple line icons, no external dependency
  --------------------------------------------------------------- */
  const ICONS = {
    capsule: '<path d="M6.5 17.5 17.5 6.5a5 5 0 1 1 7 7L13.5 24.5a5 5 0 1 1-7-7Z"/><path d="M9.5 8.5l6 6"/>',
    pill: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17M7 6l10 12"/>',
    handshake: '<path d="M3 11.5 7 8l4 3-2.4 2.4a1.7 1.7 0 0 0 2.4 2.4L15 12l4.5 4.5"/><path d="M21 11.5 17 8l-4.3 3.3"/><path d="M3 11.5v5l3 3"/><path d="M21 11.5v5l-3 3"/>',
    pin: '<path d="M12 22s7-7.4 7-12.6A7 7 0 0 0 5 9.4C5 14.6 12 22 12 22Z"/><circle cx="12" cy="9.5" r="2.5"/>',
    cross: '<path d="M12 4v16M4 12h16" stroke-width="2.4"/><rect x="4" y="4" width="16" height="16" rx="5"/>',
    monitor: '<rect x="3" y="5" width="14" height="10" rx="2"/><path d="M7 19h6M10 15v4"/><path d="M14.5 9.5h4l1.5-2 1.5 4 1.5-2h1"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/>',
    hospital: '<rect x="4" y="8" width="16" height="12" rx="1.5"/><path d="M9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><path d="M12 11.5v5M9.5 14h5"/>',
    thermometer: '<path d="M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0Z"/><path d="M10 8h2"/>',
    droplet: '<path d="M12 3s6 7.2 6 11.5a6 6 0 0 1-12 0C6 10.2 12 3 12 3Z"/>',
    glove: '<path d="M7 12V5a1.5 1.5 0 0 1 3 0v5M10 10V4a1.5 1.5 0 0 1 3 0v6M13 10V5a1.5 1.5 0 0 1 3 0v7M16 12V8a1.5 1.5 0 0 1 3 0v7a6 6 0 0 1-6 6H9a5 5 0 0 1-5-5v-2.5a2.5 2.5 0 0 1 5 0"/>',
    chat: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z"/>',
    grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
    shield: '<path d="M12 3.5 19 6v6c0 4.8-3.2 7.9-7 8.5-3.8-.6-7-3.7-7-8.5V6l7-2.5Z"/><path d="M9 12l2 2 4-4.2"/>',
    phone: '<path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1.2 1.2 0 0 1 1.2-.3 10 10 0 0 0 3.1.5 1.2 1.2 0 0 1 1.2 1.2V20a1.2 1.2 0 0 1-1.2 1.2A16.8 16.8 0 0 1 2.8 4.2 1.2 1.2 0 0 1 4 3h3.4a1.2 1.2 0 0 1 1.2 1.2 10 10 0 0 0 .5 3.1 1.2 1.2 0 0 1-.3 1.2l-2.2 2.3Z"/>',
    mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4.5 7 12 12.5 19.5 7"/>',
    whatsapp: '<path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.4-1.2A8.5 8.5 0 1 0 12 3.5Z"/><path d="M8.7 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.6.6 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.5l-.4.4c-.1.1-.2.3-.1.5.2.4.7 1.1 1.5 1.7.9.7 1.5.9 1.8 1 .2.1.4.1.5-.1l.5-.6c.2-.2.3-.2.5-.1l1.5.7c.2.1.4.2.4.4.1.4.1.9-.1 1.3-.2.4-1 .9-1.7.9-.6 0-1.9-.2-3.6-1.6-2.1-1.7-2.9-3.3-3-3.6-.1-.2-.7-1.1-.7-2.1 0-1 .5-1.5.7-1.7Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    facebook: '<path d="M14 9.5h2.5V6H14c-2 0-3.5 1.6-3.5 3.6V12H8v3.5h2.5V22H14v-6.5h2.6l.4-3.5h-3V9.9c0-.5.2-.4.5-.4Z"/>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1"/>',
    twitter: '<path d="M20.5 6.5c-.6.3-1.3.5-2 .6a3.4 3.4 0 0 0 1.5-1.9c-.7.4-1.5.7-2.3.9a3.4 3.4 0 0 0-5.8 3.1A9.7 9.7 0 0 1 4.8 5.9a3.4 3.4 0 0 0 1 4.6c-.5 0-1-.2-1.5-.4v.1c0 1.7 1.2 3 2.8 3.4-.5.1-1 .1-1.5 0 .4 1.3 1.7 2.3 3.2 2.3A6.8 6.8 0 0 1 3 17.3a9.6 9.6 0 0 0 5.2 1.5c6.3 0 9.7-5.2 9.7-9.7v-.4c.7-.5 1.3-1.1 1.6-1.8Z"/>'
  };

  function iconSvg(name, extraClass) {
    const path = ICONS[name] || ICONS.cross;
    return `<svg class="${extraClass || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  }

  function placeholder(labelText, subText, icon) {
    return `
      <div class="img-placeholder" role="img" aria-label="${labelText} — placeholder image, to be replaced">
        <div class="ph-inner">
          ${iconSvg(icon || 'sparkle')}
          <span class="ph-label">${labelText}</span>
          ${subText ? `<span class="ph-sub">${subText}</span>` : ''}
        </div>
      </div>`;
  }

  // Real photo block (used where config supplies an actual image URL,
  // e.g. product/category photos). Falls back to placeholder() if no
  // image URL is present, so removing a URL from config.js is safe.
  function photoBlock(url, alt, labelText, icon) {
    if (!url) return placeholder(labelText, null, icon);
    return `<div class="img-photo"><img src="${url}" alt="${alt || labelText}" loading="lazy" /></div>`;
  }

  const cfg = window.SWEYA_CONFIG;
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------------------------------------------------------------
     RENDER: header / nav / footer contact bits from config
  --------------------------------------------------------------- */
  function renderBrand() {
    $$('[data-brand-logo]').forEach(el => { el.src = cfg.business.logo; el.alt = cfg.business.name + ' logo'; });
    $$('[data-business-name]').forEach(el => el.textContent = cfg.business.name);
    $$('[data-business-desc]').forEach(el => el.textContent = cfg.business.description);
    $$('[data-year]').forEach(el => el.textContent = cfg.business.year);
  }

  function renderNav() {
    const desktop = $('#mainNavList');
    const mobile = $('#mobileNavList');
    [desktop, mobile].forEach(list => {
      if (!list) return;
      list.innerHTML = cfg.nav.map(item =>
        `<li><a href="${item.href}" data-nav-link>${item.label}</a></li>`
      ).join('');
    });
  }

  function renderPhones() {
    const primary = cfg.business.phones[0];
    $$('[data-phone-primary]').forEach(el => { el.href = primary.href; el.textContent = primary.display; });
    const list = $('#contactPhoneList');
    if (list) {
      list.innerHTML = cfg.business.phones.map(p => `<a href="${p.href}">${p.display}</a>`).join('');
    }
    const footPhones = $('#footerPhones');
    if (footPhones) {
      footPhones.innerHTML = cfg.business.phones.map(p =>
        `<li>${iconSvg('phone')}<a href="${p.href}">${p.display}</a></li>`).join('');
    }
  }

  function renderEmail() {
    $$('[data-email-link]').forEach(el => { el.href = 'mailto:' + cfg.business.email; el.textContent = cfg.business.email; });
  }

  function renderAddress() {
    $$('[data-address-line1]').forEach(el => el.textContent = cfg.business.address.line1);
    $$('[data-address-line2]').forEach(el => el.textContent = cfg.business.address.line2);
  }

  function renderWhatsapp() {
    $$('[data-whatsapp-href]').forEach(el => el.href = cfg.business.whatsapp);
  }

  /* ---------------------------------------------------------------
     RENDER: highlights
  --------------------------------------------------------------- */
  function renderHighlights() {
    const el = $('#highlightsGrid');
    if (!el) return;
    el.innerHTML = cfg.highlights.map((h, i) => `
      <div class="highlight-card reveal" style="--i:${i}">
        <div class="icon-badge">${iconSvg(h.icon)}</div>
        <h3>${h.title}</h3>
        <p>${h.text}</p>
      </div>`).join('');
  }

  /* ---------------------------------------------------------------
     RENDER: product categories
  --------------------------------------------------------------- */
  function renderCategories() {
    const el = $('#categoryGrid');
    if (!el) return;
    el.innerHTML = cfg.categories.map((c, i) => `
      <div class="category-card reveal" style="--i:${i}">
        ${photoBlock(c.image, c.imageAlt, c.name, c.icon)}
        <div class="cat-body">
          <div class="icon-badge cyan">${iconSvg(c.icon)}</div>
          <h3>${c.name}</h3>
          <div class="category-tags">
            ${c.items.slice(0, 6).map(t => `<span>${t}</span>`).join('')}
            ${c.items.length > 6 ? `<span>+${c.items.length - 6} more</span>` : ''}
          </div>
          <div class="cat-foot">
            <a class="btn btn-outline-dark btn-sm" href="#contact">Ask About Availability</a>
          </div>
        </div>
      </div>`).join('');
  }

  /* ---------------------------------------------------------------
     RENDER: product showcase
  --------------------------------------------------------------- */
  function renderShowcase() {
    const el = $('#showcaseGrid');
    if (!el) return;
    el.innerHTML = cfg.showcase.map((p, i) => `
      <div class="product-card reveal" style="--i:${i}">
        ${photoBlock(p.image, p.imageAlt, p.name, p.icon)}
        <div class="prod-body">
          <span class="prod-cat">${p.category}</span>
          <h4>${p.name}</h4>
          <p>${p.desc}</p>
          <a class="btn btn-ghost btn-sm btn-block" href="#contact">Contact Us</a>
        </div>
      </div>`).join('');
  }

  /* ---------------------------------------------------------------
     RENDER: services
  --------------------------------------------------------------- */
  function renderServices() {
    const el = $('#servicesGrid');
    if (!el) return;
    el.innerHTML = cfg.services.map((s, i) => `
      <div class="service-card reveal" style="--i:${i}">
        <div class="icon-badge">${iconSvg(s.icon)}</div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </div>`).join('');
  }

  /* ---------------------------------------------------------------
     RENDER: why choose us
  --------------------------------------------------------------- */
  function renderWhyUs() {
    const el = $('#whyGrid');
    if (!el) return;
    el.innerHTML = cfg.whyChooseUs.map((w, i) => `
      <div class="why-card reveal" style="--i:${i}">
        <div class="icon-badge on-dark">${iconSvg(w.icon)}</div>
        <div>
          <h3>${w.title}</h3>
          <p>${w.text}</p>
        </div>
      </div>`).join('');
  }

  /* ---------------------------------------------------------------
     RENDER: team
  --------------------------------------------------------------- */
  function renderTeam() {
    const el = $('#teamGrid');
    if (!el) return;
    el.innerHTML = cfg.team.map((t, i) => `
      <div class="team-card reveal" style="--i:${i}">
        ${photoBlock(t.image, t.imageAlt, t.name, 'handshake')}
        <div class="team-body">
          <span class="team-role">${t.role}</span>
          <h3>${t.name}</h3>
          <p>${t.bio}</p>
        </div>
      </div>`).join('');
  }

  /* ---------------------------------------------------------------
     RENDER: branches
  --------------------------------------------------------------- */
  function renderBranches() {
    const el = $('#branchGrid');
    if (!el) return;
    el.innerHTML = cfg.branches.map((b, i) => {
      const dirHref = b.mapDirectionsUrl && b.mapDirectionsUrl.trim()
        ? b.mapDirectionsUrl
        : 'https://www.google.com/maps/search/' + encodeURIComponent(b.address);
      return `
      <div class="branch-card reveal" style="--i:${i}">
        ${placeholder(b.name, '', 'hospital')}
        <div class="branch-body">
          <h3>${iconSvg('pin')} ${b.name}</h3>
          <p class="branch-addr">${b.address}</p>
          <a class="branch-phone" href="${b.phone.href}">${b.phone.display}</a>
          <div class="branch-actions">
            <a class="btn btn-cyan btn-sm" href="${dirHref}" target="_blank" rel="noopener">Get Directions</a>
            <a class="btn btn-outline-dark btn-sm" href="${b.phone.href}">Call Branch</a>
          </div>
        </div>
      </div>`;
    }).join('');
  }

  /* ---------------------------------------------------------------
     RENDER: map / location
  --------------------------------------------------------------- */
  function renderMap() {
    const noteEl = $('#mapNote');
    if (noteEl) {
      noteEl.textContent = cfg.business.mapEmbedUrl
        ? 'Interactive map embedded below.'
        : '';
    }
    const dirBtn = $('#mapDirectionsBtn');
    if (dirBtn) {
      dirBtn.href = cfg.business.mapDirectionsUrl && cfg.business.mapDirectionsUrl.trim()
        ? cfg.business.mapDirectionsUrl
        : 'https://www.google.com/maps/search/' + encodeURIComponent(cfg.business.address.line1 + ', ' + cfg.business.address.line2);
    }
  }

  /* ---------------------------------------------------------------
     RENDER: footer
  --------------------------------------------------------------- */
  function renderFooterNav() {
    const el = $('#footerNavList');
    if (!el) return;
    el.innerHTML = cfg.nav.map(item => `<li><a href="${item.href}">${item.label}</a></li>`).join('');
  }

  function renderSocial() {
    const el = $('#footerSocial');
    if (!el) return;
    const entries = Object.entries(cfg.social).filter(([, url]) => url && url.trim());
    if (!entries.length) { el.style.display = 'none'; return; }
    el.innerHTML = entries.map(([key, url]) =>
      `<a href="${url}" target="_blank" rel="noopener" aria-label="${key}">${iconSvg(key)}</a>`).join('');
  }

  /* ---------------------------------------------------------------
     HEADER SCROLL + MOBILE MENU
  --------------------------------------------------------------- */
  function initHeader() {
    const header = $('#siteHeader');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const menu = $('#mobileMenu');
    const openBtn = $('#menuOpenBtn');
    const closeBtn = $('#menuCloseBtn');
    const openMenu = () => { menu.classList.add('open'); document.body.classList.add('menu-open'); menu.setAttribute('aria-hidden', 'false'); closeBtn.focus(); };
    const closeMenu = () => { menu.classList.remove('open'); document.body.classList.remove('menu-open'); menu.setAttribute('aria-hidden', 'true'); openBtn.focus(); };
    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    menu.addEventListener('click', (e) => { if (e.target.matches('a')) closeMenu(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu(); });
  }

  function initActiveNav() {
    const links = $$('[data-nav-link]');
    const sections = links
      .map(l => document.querySelector(l.getAttribute('href')))
      .filter(Boolean);
    if (!('IntersectionObserver' in window) || !sections.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(s => obs.observe(s));
  }

  /* ---------------------------------------------------------------
     SCROLL REVEAL
  --------------------------------------------------------------- */
  function initReveal() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window) || !items.length) {
      items.forEach(i => i.classList.add('is-visible'));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    items.forEach(i => obs.observe(i));
  }

  /* ---------------------------------------------------------------
     CONTACT FORM VALIDATION
  --------------------------------------------------------------- */
  function initForm() {
    const form = $('#enquiryForm');
    if (!form) return;
    const success = $('#formSuccess');

    const rules = {
      name: v => v.trim().length >= 2 || 'Please enter your full name.',
      phone: v => /^[0-9+()\s-]{7,15}$/.test(v.trim()) || 'Please enter a valid phone number.',
      email: v => v.trim() === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Please enter a valid email address.',
      message: v => v.trim().length >= 10 || 'Please enter at least 10 characters.'
    };

    function validateField(input) {
      const rule = rules[input.name];
      if (!rule) return true;
      const result = rule(input.value);
      const field = input.closest('.field');
      const errorEl = field.querySelector('.error-msg');
      if (result === true) {
        field.classList.remove('has-error');
        errorEl.textContent = '';
        return true;
      } else {
        field.classList.add('has-error');
        errorEl.textContent = result;
        return false;
      }
    }

    $$('input, textarea', form).forEach(input => {
      input.addEventListener('blur', () => validateField(input));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = $$('input, textarea', form);
      const validArr = inputs.map(validateField);
      const allValid = validArr.every(Boolean);
      if (!allValid) {
        const firstInvalid = inputs.find((input, idx) => !validArr[idx]);
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // No backend is connected — build a pre-filled email draft instead
      // of pretending the message was delivered.
      const name = form.elements.name.value.trim();
      const phone = form.elements.phone.value.trim();
      const email = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();

      const subject = `Product Enquiry from ${name}`;
      const bodyLines = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : null,
        '',
        'Message:',
        message
      ].filter(line => line !== null);

      const mailtoUrl =
        `mailto:${cfg.business.email}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(bodyLines.join('\n'))}`;

      window.location.href = mailtoUrl;

      success.classList.add('show');
      success.focus();
      form.reset();
    });
  }

  /* ---------------------------------------------------------------
     INIT
  --------------------------------------------------------------- */
  function init() {
    renderBrand();
    renderNav();
    renderPhones();
    renderEmail();
    renderAddress();
    renderWhatsapp();
    renderHighlights();
    renderCategories();
    renderShowcase();
    renderServices();
    renderWhyUs();
    renderTeam();
    renderBranches();
    renderMap();
    renderFooterNav();
    renderSocial();

    initHeader();
    initActiveNav();
    initReveal();
    initForm();

    $('#currentYear') && ($('#currentYear').textContent = cfg.business.year);
  }

  document.addEventListener('DOMContentLoaded', init);
})();