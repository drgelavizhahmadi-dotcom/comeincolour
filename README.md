# come in colour · comeincolour.org

Lemon #F0F08A · Lavender #C9A8E8 · Berlin

---

## Project structure

```
comeincolour/
├── index.html          ← main landing page
├── css/
│   └── style.css       ← all styles, tokens, responsive
├── js/
│   └── main.js         ← animations, nav, form
├── images/             ← add your logo + photos here
└── README.md
```

---

## Quick start

```bash
# open locally
open index.html

# or serve with a local server
npx serve .
# or
python3 -m http.server 8080
```

---

## Claude Code vibe coding prompts

Paste these directly into Claude Code to extend the site:

### Add a real workshop events section
```
Add a "Next Workshop" section to index.html between the workshops and manifesto sections.
It should show a date, time, location (café name + Berlin neighbourhood), and a "Reserve your spot" button.
Use the same lemon/lavender colour tokens from style.css.
```

### Connect the email form to Formspree
```
In js/main.js, replace the form submit handler with a real Formspree POST request.
My form ID is: YOUR_FORMSPREE_ID
Show a loading state on the button during submission, then the success message on completion.
Handle errors gracefully with an inline error message.
```

### Add a photo/texture section
```
Add a full-bleed photo section between the about and pillars sections.
It should show a warm café/art scene image with a lemon or lavender colour overlay at 40% opacity.
Add a short italic quote in Cormorant Garamond over the image.
```

### Add German language toggle
```
Add a DE/EN language toggle to the navigation.
Create a translations object in main.js with German versions of all text content.
Toggle should swap all visible text on click without reloading the page.
```

### Add cookie-free analytics (Plausible)
```
Add Plausible analytics to index.html.
My domain is comeincolour.org.
Add the script tag in the <head> and track the join form submission as a custom event called "workshop_signup".
```

### Make it a proper multi-page site
```
Split index.html into:
- index.html (hero + about + pillars)
- workshops.html (who + workshops grid)
- manifesto.html (manifesto section)
- join.html (join form)
Keep the nav, footer, css and js shared across all pages.
```

---

## Deployment

### Netlify (recommended — free)
1. Drag the `comeincolour` folder to netlify.com/drop
2. Go to Site Settings → Domain → add `comeincolour.org`
3. Update your DNS at your registrar: add NETLIFY CNAME record

### Vercel
```bash
npm i -g vercel
cd comeincolour
vercel
# follow prompts, add domain in dashboard
```

### GitHub Pages
```bash
git init
git add .
git commit -m "initial launch 🎨"
gh repo create comeincolour --public
git push origin main
# enable Pages in repo Settings → Pages → main branch
```

---

## Form backend options

| Option | Free tier | Setup |
|--------|-----------|-------|
| Formspree | 50/month | formspree.io → get ID → paste in main.js |
| Netlify Forms | 100/month | add `netlify` attr to form tag |
| Mailchimp | 500 contacts | embed their form or use API |

For Netlify Forms, just add to the form tag in index.html:
```html
<form class="join__form" id="joinForm" name="workshop-signup" netlify>
```

---

## Colours
- Lemon yellow: `#F0F08A`
- Warm lavender: `#C9A8E8`
- Deep violet (text/dark bg): `#2a1f3d`

## Fonts (Google Fonts — already linked)
- Headlines: Cormorant Garamond (serif)
- Body: DM Sans (sans-serif)

---

*come as you are. leave in colour.* · Berlin 2025
