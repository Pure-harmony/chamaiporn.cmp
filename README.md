# ชไมพร · CHAMAIPORN PROJECT (CMP): Landing page

The landing page for CHAMAIPORN PROJECT (CMP), built with plain HTML, CSS and JavaScript. It needs no build step.

## Folder structure

```
.
├── index.html          # Page structure and content (Thai/English)
├── css/style.css       # All styles, including responsive rules
├── js/main.js          # Language switch, mobile menu, scroll effects
└── assets/images/      # Every image used on the page
```

## Run locally

Open `index.html` in a browser directly, or start a local server:

```bash
python3 -m http.server 8000
```

Then go to http://localhost:8000

## Features

- TH / EN language switch (the choice is saved in localStorage)
- Hamburger menu on mobile
- Highlights the menu item for the section on screen
- Fade-in animation on scroll (turned off when the user has reduced motion enabled)
- Back-to-top button
- Responsive across mobile, tablet and desktop

## Editing content

- **Translations**: each element with text in both languages has `data-th` and `data-en` attributes. Edit both.
- **Upcoming show**: in the `#live` section, fill in the `.gig.ph` card, then remove the `ph` class.
- **Client logos**: in the `#clients` section, replace each `<span>[Brand Customer]</span>` with an `<img>` that points to a file in `assets/images/`.

## Deploy

The site is static, so you can upload it to GitHub Pages, Netlify, Vercel or any web host.
For GitHub Pages, go to Settings → Pages → Source: `main` / root.
