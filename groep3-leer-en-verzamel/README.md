# Leer & Verzamel! — Groep 3 game (React + Tailwind)

Educatieve webgame voor kinderen (groep 3): **Woordjes leren** + **Rekenen** met beloningen (figuren verzamelen).  
✅ Nederlands TTS (Web Speech API) • ✅ LocalStorage progressie • ✅ GitHub Pages / Netlify / Vercel ready

## Snel starten

```bash
npm install
npm run dev
```

## Build & Deploy
- **GitHub Pages**: dit werkt out-of-the-box door `base: './'` in `vite.config.js` + HashRouter.
- **Vercel/Netlify**: plug & play (`npm run build`).

## Structuur
- `/src/pages` — Home, Woordjes, Rekenen, Album
- `/src/data` — `words.js`, `math.js`, `figures.js`
- `/src/assets/woorden` — SVG's voor woordjes (animatiestijl)
- `/src/assets/figuren` — SVG's voor verzamelbare figuren

## Aanpassen
- Voeg meer woordjes toe in `src/data/words.js` en leg assets in `/src/assets/woorden`.
- Voeg sommen toe in `src/data/math.js`.
- Voeg figuren toe in `src/data/figures.js` (rarity: Common/Rare/Epic).

## Licentie
- Alle SVG's in dit project zijn **custom-made** en vrij te gebruiken binnen dit project.
