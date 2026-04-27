/* ─────────────────────────────────────────
   COME IN COLOUR · main.js
   ───────────────────────────────────────── */

(function () {
  'use strict';

  /* ── SCROLL: nav shadow ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* ── MOBILE MENU ── */
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });
    // close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── SCROLL ANIMATIONS ── */
  const animEls = document.querySelectorAll('[data-animate]');
  if ('IntersectionObserver' in window && animEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el    = entry.target;
        const delay = parseFloat(el.dataset.delay || 0) * 1000;
        setTimeout(() => el.classList.add('animated'), delay);
        io.unobserve(el);
      });
    }, { threshold: 0.15 });
    animEls.forEach(el => io.observe(el));
  } else {
    animEls.forEach(el => el.classList.add('animated'));
  }

  /* ── MANIFESTO REVEAL ── */
  const manifestoLines = document.querySelectorAll('.m-line');
  if ('IntersectionObserver' in window && manifestoLines.length) {
    const mio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        manifestoLines.forEach((line, i) => {
          setTimeout(() => line.classList.add('visible'), i * 130);
        });
        mio.disconnect();
      });
    }, { threshold: 0.2 });
    const mSection = document.querySelector('.manifesto');
    if (mSection) mio.observe(mSection);
  } else {
    manifestoLines.forEach(l => l.classList.add('visible'));
  }

  /* ── FORM SUBMIT ── */
  const form = document.getElementById('joinForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value.trim();
      const name  = form.querySelector('input[type="text"]').value.trim();

      if (!email || !email.includes('@')) {
        form.querySelector('input[type="email"]').focus();
        return;
      }

      // Replace this with your actual form handler (Mailchimp, Formspree, etc.)
      // Example Formspree: fetch('https://formspree.io/f/YOUR_ID', {...})
      console.log('New signup:', { name, email });

      // Success state
      form.innerHTML = `
        <p style="
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-style: italic;
          font-weight: 600;
          color: var(--dark);
          text-align: center;
          width: 100%;
          padding: 12px 0;
        ">Welcome to the circle, ${name || 'lovely'}. ✦</p>
      `;
    });
  }

  /* ── SMOOTH SCROLL OFFSET (for fixed nav) ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = nav ? nav.offsetHeight + 16 : 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
