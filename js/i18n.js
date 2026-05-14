/* ─────────────────────────────────────────
   COME IN COLOUR · i18n.js
   ───────────────────────────────────────── */
(function () {
  'use strict';

  var T = {
    en: {
      /* titles */
      'page.title.home':        'Come In Colour · Creative Gatherings for Women · Berlin',
      'page.title.motherhood':  'Colours of Motherhood · Come In Colour · Berlin',

      /* nav */
      'nav.about':                  'About',
      'nav.gatherings':             'Gatherings',
      'nav.gatherings.all':         'All gatherings',
      'nav.gatherings.motherhood':  'Colours of Motherhood',
      'nav.who':                    "Who it's for",
      'nav.manifesto':              'Manifesto',
      'nav.join':                   'Join a circle',

      /* hero */
      'hero.sub':       'Creative gatherings for women 35+ in Berlin.<br>Come as you are. Leave in colour.',
      'hero.btn.join':  'Join a circle',
      'hero.btn.story': 'Our story',
      'hero.location':  'Berlin, Germany',
      'hero.tagline':   'CREATIVITY · SISTERHOOD · BERLIN',

      /* marquee */
      'marquee.1': 'come as you are',
      'marquee.2': 'creativity &amp; sisterhood',
      'marquee.3': 'colour as a language',
      'marquee.4': 'berlin',
      'marquee.5': 'leave in colour',
      'marquee.6': 'women 35+',

      /* about */
      'about.eyebrow': 'Our story',
      'about.h2':  "Making space for women who've made space for <em>everyone else</em>",
      'about.p1':  '<strong>Come In Colour</strong> is a Berlin-based community of women 35 and over who gather to paint, write, and be held — in a room where nothing needs to be explained and nothing needs to be perfect.',
      'about.p2':  'Founded by two women — one with a background in <strong>creativity and design</strong>, one in <strong>expressive arts</strong> — we create spaces where colour is the language, and showing up is enough.',
      'about.p3':  "You don't need to be an artist. You just need to show up.",
      'about.btn': 'Join us →',

      /* pillars */
      'pillar.1.h3': 'Creativity',
      'pillar.1.p':  'Painting, writing, making — with your hands, at your own pace. No skill needed. No outcome required.',
      'pillar.2.h3': 'Sisterhood',
      'pillar.2.p':  'Small circles of women who return together. Trust built slowly, held gently, lasting long after the session ends.',
      'pillar.3.h3': 'Empathy',
      'pillar.3.p':  'A room where every story is welcome. No fixing, no advice — only the quiet power of being witnessed.',

      /* who */
      'who.eyebrow': 'Who this is for',
      'who.h2':  'Every woman carrying more than anyone thought to ask about',
      'who.1.h3': 'Newly arrived',
      'who.1.p':  'Rebuilding identity in a new language, a new city, a new life. You belong here even before Berlin feels like home.',
      'who.2.h3': 'In transition',
      'who.2.p':  'Divorced, separated, or starting over. Women whose map changed and who are finding a new route.',
      'who.3.h3': 'Carrying it all',
      'who.3.p':  "Working mothers, single parents, carers — women who give everything and have never been asked what they need.",
      'who.4.h3': 'Professionally invisible',
      'who.4.p':  'Skilled and experienced, but whose qualifications or language make them feel unseen at work.',
      'who.5.h3': 'Quietly searching',
      'who.5.p':  "Women who woke up one day not quite recognising themselves — and are brave enough to find out who they're becoming.",
      'who.6.h3': 'Simply here',
      'who.6.p':  'No crisis required. Just a hunger for a room to breathe, create, and belong.',

      /* workshops */
      'ws.eyebrow': 'What we offer',
      'ws.h2':    'Six gatherings. One unfolding journey.',
      'ws.1.h3':  'The Quiet Room',
      'ws.1.p':   'Slow, meditative making. No outcomes, no performance — just the brush, the colour, and you.',
      'ws.1.tag': 'Stillness · Colour',
      'ws.2.h3':  'Roots &amp; Routes',
      'ws.2.p':   'Visual maps for women between worlds. Your language, your colours, your story.',
      'ws.2.tag': 'Identity · Belonging',
      'ws.3.h3':  'The Unsent Letter',
      'ws.3.p':   'Write what you never got to say. Then paint over it, tear it apart, or let it go.',
      'ws.3.tag': 'Writing · Release',
      'ws.4.h3':  'Sisterhood Portrait',
      'ws.4.p':   'Draw each other. See and be seen — really seen — for the first time in a long time.',
      'ws.4.tag': 'Community · Connection',
      'ws.5.h3':  'Colours of Motherhood',
      'ws.5.p':   'Paint, write, and be held — a gathering about mothers, daughters, and the colours between.',
      'ws.5.tag': 'Motherhood · Memory',
      'ws.6.h3':  'The Long Table',
      'ws.6.p':   'One canvas, all of us. A communal making ritual followed by a shared meal.',
      'ws.6.tag': 'Ritual · Celebration',

      /* gathering preview */
      'preview.eyebrow': 'From our last gathering',
      'preview.h2':   'Colours of <em>Motherhood</em>',
      'preview.date': '9 May 2025 · CISpace · Berlin',
      'preview.btn':  'Read more →',

      /* manifesto */
      'manifesto.label': '— what we believe —',
      'manifesto.1':     'We believe every woman carries a colour the world never asked to see.',
      'manifesto.2':     "We believe you don't need to be an artist to make something true.",
      'manifesto.3':     'We believe colour is a language anyone can speak.',
      'manifesto.4':     'We believe migration is not a deficit. It is a second palette.',
      'manifesto.5':     'We believe sisterhood is the most durable infrastructure there is.',
      'manifesto.6':     'We believe a room full of women making things together is quietly radical.',
      'manifesto.final': 'So come in. Come in colour.',

      /* join */
      'join.eyebrow':           'Berlin · Donation based · Every woman welcome',
      'join.h2':                'Join a<br><em>circle</em>',
      'join.p':                 'Creative gatherings held in Berlin. A small donation of €25 keeps this circle alive.<br>Come as you are.',
      'join.btn':               "I'm in →",
      'join.note':              'No one is turned away. Come as you are.',
      'join.name.placeholder':  'your name',
      'join.email.placeholder': 'your email address',
      'join.success':           'Welcome to the circle, {{name}}. ✦',

      /* footer */
      'footer.copy': '© 2025 Come In Colour · Berlin',

      /* motherhood page */
      'mh.back':              '← Come In Colour',
      'mh.hero.tag':          'Creative Gathering · Berlin',
      'mh.hero.h1':           'Colours of<br>Motherhood',
      'mh.hero.sub':          'Paint, write, and be held — the day before Mother\'s Day',
      'mh.hero.meta.date':    '9 May 2025',
      'mh.hero.meta.time':    '16:00–19:00',
      'mh.hero.meta.place':   'CISpace · Bugenhagenstr. 9',
      'mh.hero.meta.who':     'Women 35+',
      'mh.hero.meta.don':     'Donation €25',
      'mh.hero.cta':          'Join the next circle →',
      'mh.about.eyebrow':     'About this gathering',
      'mh.about.h2':          "The day before Mother's Day, we <em>gathered</em>",
      'mh.about.p1':          "Not every woman in the room was a mother. Not every mother had been well-mothered. We didn't ask anyone to explain their story or justify their presence.",
      'mh.about.p2':          'We gave everyone a canvas, some blank pages, and a circle of women who were already there. What came out of it surprised us every time — tenderness, grief, colour, and something that kept feeling like relief.',
      'mh.about.p3':          'This is not a class. There is no outcome. You bring what you carry, and you leave a little lighter.',
      'mh.happens.eyebrow':   'What happens',
      'mh.happens.h2':        'Three hours. Three things.',
      'mh.card1.verb':        '01 · Write',
      'mh.card1.h3':          'A letter',
      'mh.card1.p':           "To the mother you needed — whether she was yours, a stranger, or someone you have only imagined. You don't need to send it. You just need to write it.",
      'mh.card2.verb':        '02 · Paint',
      'mh.card2.h3':          'Her portrait',
      'mh.card2.p':           'Not what she looked like. What she felt like. What she might have given you, in colour, if she had known how.',
      'mh.card3.verb':        '03 · Be held',
      'mh.card3.h3':          'In the circle',
      'mh.card3.p':           'We share what we made. We witness each other. No explanations required. We close with food, and with the quiet knowledge that we were not alone.',
      'mh.photos.eyebrow':    'From the room',
      'mh.photos.h2':         'What it looked like',
      'mh.test.eyebrow':      'In their words',
      'mh.test.h2':           'What women said',
      'mh.quote':             '"You came here today and you made something. You imagined a mother who saw you clearly, loved you without condition, and gave you what you needed. That imagination lives in you. It always did."',
      'mh.cta.eyebrow':       'Come join us',
      'mh.cta.h2':            'The next circle is <em>forming</em>',
      'mh.cta.p':             'Gatherings are held in Berlin. A small donation of €25 keeps this circle alive. No one is turned away.',
      'mh.cta.btn1':          'Join a circle →',
      'mh.cta.btn2':          'All gatherings',
    },

    de: {
      /* titles */
      'page.title.home':        'Come In Colour · Kreative Treffen für Frauen · Berlin',
      'page.title.motherhood':  'Farben der Mutterschaft · Come In Colour · Berlin',

      /* nav */
      'nav.about':                  'Über uns',
      'nav.gatherings':             'Treffen',
      'nav.gatherings.all':         'Alle Treffen',
      'nav.gatherings.motherhood':  'Farben der Mutterschaft',
      'nav.who':                    'Für wen',
      'nav.manifesto':              'Manifest',
      'nav.join':                   'Kreis beitreten',

      /* hero */
      'hero.sub':       'Kreative Treffen für Frauen ab 35 in Berlin.<br>Komm wie du bist. Geh in Farbe.',
      'hero.btn.join':  'Kreis beitreten',
      'hero.btn.story': 'Unsere Geschichte',
      'hero.location':  'Berlin, Deutschland',
      'hero.tagline':   'KREATIVITÄT · SCHWESTERNSCHAFT · BERLIN',

      /* marquee */
      'marquee.1': 'komm wie du bist',
      'marquee.2': 'kreativität &amp; schwesternschaft',
      'marquee.3': 'farbe als sprache',
      'marquee.4': 'berlin',
      'marquee.5': 'geh in farbe',
      'marquee.6': 'frauen ab 35',

      /* about */
      'about.eyebrow': 'Unsere Geschichte',
      'about.h2':  'Raum für Frauen, die für alle anderen Raum gemacht haben — für <em>sich selbst</em>',
      'about.p1':  '<strong>Come In Colour</strong> ist eine Berliner Gemeinschaft von Frauen ab 35, die zusammenkommen, um zu malen, zu schreiben und gehalten zu werden — in einem Raum, in dem nichts erklärt und nichts perfekt sein muss.',
      'about.p2':  'Gegründet von zwei Frauen — eine mit einem Hintergrund in <strong>Kreativität und Design</strong>, eine in <strong>expressiven Künsten</strong> — schaffen wir Räume, in denen Farbe die Sprache ist und das bloße Erscheinen genug ist.',
      'about.p3':  'Du musst keine Künstlerin sein. Du musst nur auftauchen.',
      'about.btn': 'Mitmachen →',

      /* pillars */
      'pillar.1.h3': 'Kreativität',
      'pillar.1.p':  'Malen, schreiben, erschaffen — mit deinen Händen, in deinem eigenen Tempo. Keine Vorkenntnisse nötig. Kein Ergebnis erforderlich.',
      'pillar.2.h3': 'Schwesternschaft',
      'pillar.2.p':  'Kleine Kreise von Frauen, die gemeinsam zurückkehren. Vertrauen, das langsam wächst, sanft gehalten wird — und noch lange nach dem Treffen bleibt.',
      'pillar.3.h3': 'Empathie',
      'pillar.3.p':  'Ein Raum, in dem jede Geschichte willkommen ist. Kein Raten, kein Ratschlagen — nur die stille Kraft, bezeugt zu werden.',

      /* who */
      'who.eyebrow': 'Für wen',
      'who.h2':  'Jede Frau, die mehr trägt, als je jemand zu fragen dachte',
      'who.1.h3': 'Neu angekommen',
      'who.1.p':  'Identität neu aufbauen in einer neuen Sprache, einer neuen Stadt, einem neuen Leben. Du gehörst dazu, noch bevor sich Berlin wie Zuhause anfühlt.',
      'who.2.h3': 'Im Übergang',
      'who.2.p':  'Geschieden, getrennt oder neu beginnend. Frauen, deren Karte sich verändert hat und die einen neuen Weg finden.',
      'who.3.h3': 'Die alles trägt',
      'who.3.p':  'Berufstätige Mütter, Alleinerziehende, Pflegende — Frauen, die alles geben und denen noch nie jemand fragte, was sie brauchen.',
      'who.4.h3': 'Beruflich unsichtbar',
      'who.4.p':  'Kompetent und erfahren, aber deren Qualifikationen oder Sprache sie bei der Arbeit unsichtbar machen.',
      'who.5.h3': 'Leise suchend',
      'who.5.p':  'Frauen, die eines Tages aufgewacht sind und sich selbst kaum mehr erkannten — und mutig genug sind, herauszufinden, wer sie werden.',
      'who.6.h3': 'Einfach da',
      'who.6.p':  'Keine Krise nötig. Nur der Hunger nach einem Raum zum Atmen, Erschaffen und Dazugehören.',

      /* workshops */
      'ws.eyebrow': 'Was wir anbieten',
      'ws.h2':    'Sechs Treffen. Eine sich entfaltende Reise.',
      'ws.1.h3':  'The Quiet Room',
      'ws.1.p':   'Langsames, meditatives Gestalten. Keine Ergebnisse, keine Performance — nur der Pinsel, die Farbe und du.',
      'ws.1.tag': 'Stille · Farbe',
      'ws.2.h3':  'Roots &amp; Routes',
      'ws.2.p':   'Visuelle Karten für Frauen zwischen Welten. Deine Sprache, deine Farben, deine Geschichte.',
      'ws.2.tag': 'Identität · Zugehörigkeit',
      'ws.3.h3':  'The Unsent Letter',
      'ws.3.p':   'Schreibe, was du nie sagen konntest. Dann male darüber, zerreiße es oder lass es los.',
      'ws.3.tag': 'Schreiben · Loslassen',
      'ws.4.h3':  'Sisterhood Portrait',
      'ws.4.p':   'Zeichnet euch gegenseitig. Sieh und werde gesehen — wirklich gesehen — zum ersten Mal seit langer Zeit.',
      'ws.4.tag': 'Gemeinschaft · Verbindung',
      'ws.5.h3':  'Farben der Mutterschaft',
      'ws.5.p':   'Malen, schreiben und gehalten werden — ein Treffen über Mütter, Töchter und die Farben dazwischen.',
      'ws.5.tag': 'Mutterschaft · Erinnerung',
      'ws.6.h3':  'The Long Table',
      'ws.6.p':   'Eine Leinwand, wir alle. Ein gemeinschaftliches Ritual, gefolgt von einem gemeinsamen Mahl.',
      'ws.6.tag': 'Ritual · Feier',

      /* gathering preview */
      'preview.eyebrow': 'Von unserem letzten Treffen',
      'preview.h2':   'Farben der <em>Mutterschaft</em>',
      'preview.date': '9. Mai 2025 · CISpace · Berlin',
      'preview.btn':  'Mehr lesen →',

      /* manifesto */
      'manifesto.label': '— was wir glauben —',
      'manifesto.1':     'Wir glauben, dass jede Frau eine Farbe trägt, die die Welt nie zu sehen bat.',
      'manifesto.2':     'Wir glauben, dass du keine Künstlerin sein musst, um etwas Wahres zu schaffen.',
      'manifesto.3':     'Wir glauben, dass Farbe eine Sprache ist, die jede sprechen kann.',
      'manifesto.4':     'Wir glauben, dass Migration kein Mangel ist. Sie ist eine zweite Palette.',
      'manifesto.5':     'Wir glauben, dass Schwesternschaft die dauerhafteste Infrastruktur ist, die es gibt.',
      'manifesto.6':     'Wir glauben, dass ein Zimmer voller Frauen, die gemeinsam erschaffen, leise radikal ist.',
      'manifesto.final': 'Also komm herein. Komm in Farbe.',

      /* join */
      'join.eyebrow':           'Berlin · Spendenbasiert · Jede Frau willkommen',
      'join.h2':                'Einem<br><em>Kreis</em> beitreten',
      'join.p':                 'Kreative Treffen in Berlin. Eine kleine Spende von €25 hält diesen Kreis am Leben.<br>Komm wie du bist.',
      'join.btn':               'Ich bin dabei →',
      'join.note':              'Niemand wird abgewiesen. Komm wie du bist.',
      'join.name.placeholder':  'dein Name',
      'join.email.placeholder': 'deine E-Mail-Adresse',
      'join.success':           'Willkommen im Kreis, {{name}}. ✦',

      /* footer */
      'footer.copy': '© 2025 Come In Colour · Berlin',

      /* motherhood page */
      'mh.back':              '← Come In Colour',
      'mh.hero.tag':          'Kreatives Treffen · Berlin',
      'mh.hero.h1':           'Farben der<br>Mutterschaft',
      'mh.hero.sub':          'Malen, schreiben und gehalten werden — am Tag vor Muttertag',
      'mh.hero.meta.date':    '9. Mai 2025',
      'mh.hero.meta.time':    '16:00–19:00',
      'mh.hero.meta.place':   'CISpace · Bugenhagenstr. 9',
      'mh.hero.meta.who':     'Frauen ab 35',
      'mh.hero.meta.don':     'Spende €25',
      'mh.hero.cta':          'Nächsten Kreis beitreten →',
      'mh.about.eyebrow':     'Über dieses Treffen',
      'mh.about.h2':          'Am Tag vor Muttertag haben wir uns <em>getroffen</em>',
      'mh.about.p1':          'Nicht jede Frau im Raum war eine Mutter. Nicht jede Mutter hatte eine gute Mutter gehabt. Niemanden haben wir gebeten, ihre Geschichte zu erklären oder ihre Anwesenheit zu rechtfertigen.',
      'mh.about.p2':          'Wir haben jeder eine Leinwand, einige leere Seiten und einen Kreis von Frauen gegeben, die bereits da waren. Was daraus entstand, überraschte uns jedes Mal — Zärtlichkeit, Trauer, Farbe und etwas, das sich immer wieder wie Erleichterung anfühlte.',
      'mh.about.p3':          'Dies ist kein Kurs. Es gibt kein Ergebnis. Du bringst, was du trägst — und gehst ein wenig leichter.',
      'mh.happens.eyebrow':   'Was passiert',
      'mh.happens.h2':        'Drei Stunden. Drei Dinge.',
      'mh.card1.verb':        '01 · Schreiben',
      'mh.card1.h3':          'Ein Brief',
      'mh.card1.p':           'An die Mutter, die du gebraucht hättest — ob sie deine war, eine Fremde oder nur vorgestellt. Du musst ihn nicht abschicken. Du musst ihn nur schreiben.',
      'mh.card2.verb':        '02 · Malen',
      'mh.card2.h3':          'Ihr Porträt',
      'mh.card2.p':           'Nicht wie sie aussah. Wie sie sich anfühlte. Was sie dir hätte geben können, in Farbe, wenn sie es gewusst hätte.',
      'mh.card3.verb':        '03 · Gehalten werden',
      'mh.card3.h3':          'Im Kreis',
      'mh.card3.p':           'Wir teilen, was wir gemacht haben. Wir bezeugen einander. Keine Erklärungen nötig. Wir schließen mit Essen — und dem stillen Wissen, dass wir nicht allein waren.',
      'mh.photos.eyebrow':    'Aus dem Raum',
      'mh.photos.h2':         'Wie es aussah',
      'mh.test.eyebrow':      'In ihren Worten',
      'mh.test.h2':           'Was Frauen sagten',
      'mh.quote':             '„Du bist heute hergekommen und hast etwas gemacht. Du hast dir eine Mutter vorgestellt, die dich klar sah, dich bedingungslos liebte und dir gab, was du brauchtest. Diese Vorstellungskraft lebt in dir. Sie lebte schon immer."',
      'mh.cta.eyebrow':       'Komm zu uns',
      'mh.cta.h2':            'Der nächste Kreis <em>formt sich</em>',
      'mh.cta.p':             'Treffen finden in Berlin statt. Eine kleine Spende von €25 hält diesen Kreis am Leben. Niemand wird abgewiesen.',
      'mh.cta.btn1':          'Kreis beitreten →',
      'mh.cta.btn2':          'Alle Treffen',
    }
  };

  function getLang() {
    try { return localStorage.getItem('cic-lang') || 'en'; } catch (e) { return 'en'; }
  }

  function applyLang(lang) {
    if (!T[lang]) return;

    document.documentElement.lang = lang;

    var titleKey = document.body && document.body.dataset.pageTitle;
    if (titleKey && T[lang][titleKey]) document.title = T[lang][titleKey];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = T[lang][el.dataset.i18n];
      if (v !== undefined) el.innerHTML = v;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var v = T[lang][el.dataset.i18nPlaceholder];
      if (v !== undefined) el.placeholder = v;
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
    });

    try { localStorage.setItem('cic-lang', lang); } catch (e) {}
  }

  function init() {
    var lang = getLang();
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
    });
    applyLang(lang);
  }

  /* expose for main.js form success */
  window.CIC_I18N = { getLang: getLang, T: T };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
