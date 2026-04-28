/* ─────────────────────────────────────────
   COME IN COLOUR · main.js
   ───────────────────────────────────────── */

(function () {
  'use strict';

  /* ── TRANSLATIONS ── */
  const translations = {
    en: {
      'nav.about':       'About',
      'nav.workshops':   'Workshops',
      'nav.who':         "Who it's for",
      'nav.manifesto':   'Manifesto',
      'nav.join':        'Come along',
      'hero.sub':        'A donation-based art therapy community for women 40+ in Berlin.<br>Come as you are. Leave in colour.',
      'hero.btn.join':   'Join us',
      'hero.btn.story':  'Our story',
      'hero.location':   'Berlin, Germany',
      'about.eyebrow':   'Our story',
      'about.heading':   "Making space for women who've made space for <em>everyone else</em>",
      'about.p1':        '<strong>Come In Colour</strong> is a Berlin-based community offering donation-based art therapy workshops for women 40 and over — navigating stress, anxiety, divorce, migration, unemployment, and the quiet weight of lives lived largely for others.',
      'about.p2':        'Founded by two women — one with a background in <strong>AI and creative technology</strong>, one in <strong>art therapy</strong> — we bring together the healing power of art, the warmth of sisterhood, and the innovation of human-centred creativity.',
      'about.p3':        "You don't need to be an artist. You just need to show up.",
      'pillar1.title':   'Art therapy',
      'pillar1.body':    'Evidence-based, trauma-informed creative practice. No skill required — only your presence.',
      'pillar2.title':   'Sisterhood',
      'pillar2.body':    'Small circles of women who return together. Trust built slowly, held gently, lasting long after the session ends.',
      'pillar3.title':   'AI & creativity',
      'pillar3.body':    "Berlin's only art therapy circle using AI as a creative mirror — human warmth and technology, together.",
      'photo.quote':     '<em>You already know how to heal.<br>You just needed somewhere to do it.</em>',
      'who.eyebrow':     'Who this is for',
      'who.heading':     'Every woman carrying more than anyone thought to ask about',
      'who1.title':      'Newly arrived',
      'who1.body':       'Rebuilding identity in a new language, a new system, a new life. You belong here even before Berlin feels like home.',
      'who2.title':      'In transition',
      'who2.body':       'Divorced, separated, or starting over. Women whose map changed and who are finding a new route.',
      'who3.title':      'Carrying it all',
      'who3.body':       'Working mothers, single parents, carers — women who give everything and have never been asked what they need.',
      'who4.title':      'Professionally invisible',
      'who4.body':       'Skilled and experienced, but whose qualifications or language make them feel unseen at work.',
      'who5.title':      'Quietly searching',
      'who5.body':       "Women who woke up one day not knowing who they are anymore — and are brave enough to find out.",
      'who6.title':      'Simply here',
      'who6.body':       'No crisis required. Just a hunger for a room to breathe, create, and belong.',
      'ws.eyebrow':      'What we offer',
      'ws.heading':      'Six workshops. One unfolding journey.',
      'ws1.title':       'The Quiet Room',
      'ws1.body':        'Slow, meditative art-making. No outcomes, no performance — just the brush and you.',
      'ws2.title':       'Roots & Routes',
      'ws2.body':        'Visual identity maps for women between worlds. Your language, your colours, your story.',
      'ws3.title':       'The Unsent Letter',
      'ws3.body':        'Write what you never got to say. Then paint over it, tear it apart, or let it go.',
      'ws4.title':       'Sisterhood Portrait',
      'ws4.body':        'Draw each other. See and be seen — really seen — for the first time in a long time.',
      'ws5.title':       'AI + Me',
      'ws5.body':        'Artificial intelligence as a creative mirror. A dialogue between your emotion and a machine.',
      'ws6.title':       'The Long Table',
      'ws6.body':        'One canvas, all of us. A communal painting ritual followed by a shared meal.',
      'manifesto.label': '— what we believe —',
      'm1':              'We believe every woman carries a colour the world never asked to see.',
      'm2':              "We believe you don't need to be an artist to make something true.",
      'm3':              'We believe pain deserves a better language than diagnosis.',
      'm4':              'We believe migration is not a deficit. It is a second palette.',
      'm5':              'We believe sisterhood is the most durable infrastructure there is.',
      'm6':              'We believe you already know how to heal. You just needed somewhere to do it.',
      'm7':              'So come in. Come in colour.',
      'gathering.eyebrow': 'Next gathering',
      'gathering.date':    'Saturday, 16 May 2026',
      'gathering.time':    '14:00 – 17:00',
      'gathering.place':   'Mitte, Berlin',
      'gathering.note':    'Suggested donation €20. No one is turned away.',
      'gathering.cta':     'Join us',
      'join.eyebrow':      'Berlin · Donation based · Every woman welcome',
      'join.heading':      'Join a<br><em>circle</em>',
      'join.sub':          "We'll let you know about the next gathering.<br>No commitment. Just a gentle hello.",
      'form.name':         "your name, if you'd like to share",
      'form.email':        'your email address',
      'form.submit':       "I'll come",
      'form.note':         'Come as you are.',
      'form.loading':      'sending…',
      'form.success':      'Welcome to the circle, {name}. See you soon.',
      'footer.instagram':  'Instagram',
      'footer.contact':    'Contact',
      'footer.join':       'Come along',
      'footer.copy':       '© 2025 Come In Colour · Berlin',
    },
    de: {
      'nav.about':       'Über uns',
      'nav.workshops':   'Workshops',
      'nav.who':         'Für wen',
      'nav.manifesto':   'Manifest',
      'nav.join':        'Mitmachen',
      'hero.sub':        'Eine spendenbasierte Kunsttherapie-Gemeinschaft für Frauen ab 40 in Berlin.<br>Komm wie du bist. Geh in Farbe.',
      'hero.btn.join':   'Dabei sein',
      'hero.btn.story':  'Unsere Geschichte',
      'hero.location':   'Berlin, Deutschland',
      'about.eyebrow':   'Unsere Geschichte',
      'about.heading':   'Raum schaffen für Frauen, die <em>für alle anderen</em> Raum geschaffen haben',
      'about.p1':        '<strong>Come In Colour</strong> ist eine Berliner Gemeinschaft, die spendenbasierte Kunsttherapie-Workshops für Frauen ab 40 anbietet — für diejenigen, die Stress, Angst, Scheidung, Migration, Arbeitslosigkeit und die stille Last eines Lebens tragen, das weitgehend für andere gelebt wurde.',
      'about.p2':        'Gegründet von zwei Frauen — eine mit Hintergrund in <strong>KI und kreativer Technologie</strong>, eine in <strong>Kunsttherapie</strong> — verbinden wir die heilende Kraft der Kunst, die Wärme der Schwesternschaft und die Innovation menschenzentrierter Kreativität.',
      'about.p3':        'Du musst keine Künstlerin sein. Du musst nur erscheinen.',
      'pillar1.title':   'Kunsttherapie',
      'pillar1.body':    'Evidenzbasierte, traumainformierte kreative Praxis. Keine Fähigkeiten erforderlich — nur deine Anwesenheit.',
      'pillar2.title':   'Schwesternschaft',
      'pillar2.body':    'Kleine Kreise von Frauen, die gemeinsam zurückkehren. Vertrauen langsam aufgebaut, sanft gehalten, lange nach der Sitzung anhaltend.',
      'pillar3.title':   'KI & Kreativität',
      'pillar3.body':    'Berlins einziger Kunsttherapiekreis, der KI als kreativen Spiegel nutzt — menschliche Wärme und Technologie, gemeinsam.',
      'photo.quote':     '<em>Du weißt bereits, wie du heilen kannst.<br>Du brauchtest nur einen Ort dafür.</em>',
      'who.eyebrow':     'Für wen ist das',
      'who.heading':     'Jede Frau, die mehr trägt, als irgendjemand gedacht hat zu fragen',
      'who1.title':      'Neu angekommen',
      'who1.body':       'Identität in einer neuen Sprache, einem neuen System, einem neuen Leben aufbauen. Du gehörst dazu, auch bevor sich Berlin wie Heimat anfühlt.',
      'who2.title':      'Im Wandel',
      'who2.body':       'Geschieden, getrennt oder neu beginnend. Frauen, deren Karte sich verändert hat und die einen neuen Weg finden.',
      'who3.title':      'Die alles tragen',
      'who3.body':       'Berufstätige Mütter, Alleinerziehende, Pflegende — Frauen, die alles geben und nie gefragt wurden, was sie brauchen.',
      'who4.title':      'Beruflich unsichtbar',
      'who4.body':       'Qualifiziert und erfahren, aber deren Qualifikationen oder Sprache sie am Arbeitsplatz unsichtbar machen.',
      'who5.title':      'Still suchend',
      'who5.body':       'Frauen, die eines Tages aufgewacht sind und nicht mehr wussten, wer sie sind — und mutig genug sind, es herauszufinden.',
      'who6.title':      'Einfach hier',
      'who6.body':       'Keine Krise erforderlich. Nur ein Hunger nach einem Raum zum Atmen, Kreieren und Dazugehören.',
      'ws.eyebrow':      'Was wir anbieten',
      'ws.heading':      'Sechs Workshops. Eine sich entfaltende Reise.',
      'ws1.title':       'Das stille Zimmer',
      'ws1.body':        'Langsames, meditatives Kunstschaffen. Keine Ergebnisse, keine Aufführung — nur der Pinsel und du.',
      'ws2.title':       'Wurzeln & Wege',
      'ws2.body':        'Visuelle Identitätskarten für Frauen zwischen den Welten. Deine Sprache, deine Farben, deine Geschichte.',
      'ws3.title':       'Der ungesendete Brief',
      'ws3.body':        'Schreibe, was du nie sagen konntest. Dann male darüber, zerreiße es oder lass es los.',
      'ws4.title':       'Schwesternschafts-Porträt',
      'ws4.body':        'Zeichnet euch gegenseitig. Gesehen werden und sehen — wirklich gesehen — zum ersten Mal seit langer Zeit.',
      'ws5.title':       'KI + Ich',
      'ws5.body':        'Künstliche Intelligenz als kreativer Spiegel. Ein Dialog zwischen deiner Emotion und einer Maschine.',
      'ws6.title':       'Der lange Tisch',
      'ws6.body':        'Eine Leinwand, wir alle. Ein gemeinschaftliches Malritual, gefolgt von einer gemeinsamen Mahlzeit.',
      'manifesto.label': '— was wir glauben —',
      'm1':              'Wir glauben, dass jede Frau eine Farbe trägt, die die Welt nie zu sehen bat.',
      'm2':              'Wir glauben, man muss keine Künstlerin sein, um etwas Wahres zu schaffen.',
      'm3':              'Wir glauben, Schmerz verdient eine bessere Sprache als Diagnose.',
      'm4':              'Wir glauben, Migration ist kein Defizit. Es ist eine zweite Palette.',
      'm5':              'Wir glauben, Schwesternschaft ist die dauerhafteste Infrastruktur, die es gibt.',
      'm6':              'Wir glauben, du weißt bereits, wie du heilen kannst. Du brauchtest nur einen Ort dafür.',
      'm7':              'Also komm herein. Komm in Farbe.',
      'gathering.eyebrow': 'Nächstes Treffen',
      'gathering.date':    'Samstag, 16. Mai 2026',
      'gathering.time':    '14:00 – 17:00 Uhr',
      'gathering.place':   'Mitte, Berlin',
      'gathering.note':    'Vorgeschlagene Spende €20. Niemand wird abgewiesen.',
      'gathering.cta':     'Dabei sein',
      'join.eyebrow':      'Berlin · Spendenbasiert · Jede Frau willkommen',
      'join.heading':      'Einem<br><em>Kreis</em> beitreten',
      'join.sub':          'Wir informieren dich über das nächste Treffen.<br>Keine Verpflichtung. Nur ein sanftes Hallo.',
      'form.name':         'dein Name, wenn du möchtest',
      'form.email':        'deine E-Mail-Adresse',
      'form.submit':       'Ich komme',
      'form.note':         'Komm wie du bist.',
      'form.loading':      'wird gesendet…',
      'form.success':      'Willkommen im Kreis, {name}. Bis bald.',
      'footer.instagram':  'Instagram',
      'footer.contact':    'Kontakt',
      'footer.join':       'Mitmachen',
      'footer.copy':       '© 2025 Come In Colour · Berlin',
    }
  };

  let currentLang = localStorage.getItem('cic-lang') || 'en';

  function t(key) {
    return (translations[currentLang] || translations.en)[key] || key;
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.documentElement.dataset.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langBtn === currentLang);
    });
  }

  /* ── LANG TOGGLE ── */
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.langBtn;
      localStorage.setItem('cic-lang', currentLang);
      applyTranslations();
    });
  });

  applyTranslations();

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
    }, { threshold: 0.12 });
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
          setTimeout(() => line.classList.add('visible'), i * 150);
        });
        mio.disconnect();
      });
    }, { threshold: 0.18 });
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
      const emailInput = form.querySelector('input[type="email"]');
      const nameInput  = form.querySelector('input[type="text"]');
      const submitBtn  = form.querySelector('button[type="submit"]');
      const email = emailInput.value.trim();
      const name  = nameInput.value.trim();

      if (!email || !email.includes('@')) {
        emailInput.focus();
        return;
      }

      submitBtn.textContent = t('form.loading');
      submitBtn.disabled = true;

      // Replace with your actual form handler (Mailchimp, Formspree, etc.)
      setTimeout(() => {
        const displayName = name || 'lovely';
        const successText = t('form.success').replace('{name}', displayName);
        form.innerHTML = `
          <p style="
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(18px, 2.5vw, 23px);
            font-style: italic;
            font-weight: 400;
            color: rgba(42,31,61,0.85);
            text-align: center;
            width: 100%;
            line-height: 1.7;
            padding: 8px 0;
          ">${successText}</p>
        `;
      }, 900);
    });
  }

  /* ── SMOOTH SCROLL OFFSET ── */
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
