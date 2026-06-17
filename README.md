# Carnet — 60-Day French Fluency Tracker

A small, dependency-free web app for the 60-day French conversational fluency plan (relationship/family focus). No build step, no framework, no backend. Pronunciation audio uses your browser's built-in text-to-speech (Web Speech API) — works fully offline once the page is loaded, and there's nothing to configure or pay for.

## What's inside

- `index.html` — structure
- `style.css` — notebook/cahier-styled design
- `data.js` — all the content: ~270-word vocab core, 40 phrase chunks, pronunciation patterns, and the 6 study blocks with rotating prompts
- `script.js` — tab switching, text-to-speech, and progress tracking (stored in `localStorage`, in your browser only — nothing is sent anywhere)

## Run it locally

No build step needed. Either:

1. Double-click `index.html` to open it directly in a browser, or
2. From this folder, run a tiny local server (avoids occasional browser quirks with `file://` paths):
   ```bash
   python3 -m http.server 8000
   ```
   then open `http://localhost:8000`

## Put it on GitHub

```bash
cd french-fluency-tracker
git init
git add .
git commit -m "Initial commit: 60-day French tracker"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Host it free on GitHub Pages (optional)

1. Push the repo as above.
2. On GitHub: **Settings → Pages → Source → Deploy from a branch → main → / (root)**.
3. Save. Your tracker will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Notes on the text-to-speech

- Voice quality and availability depend on your OS/browser, not on this code. Chrome, Edge, and Safari generally ship decent French (`fr-FR`) voices; some Linux/Firefox setups have fewer voices installed.
- If you don't hear anything on first load, click any 🔊 button a second time — some browsers only register available voices after a short delay (the app already listens for this, but it's a known browser quirk).
- Speech rate is set slightly slower than native (0.92×) since this is for learning, not native-speed listening practice. Change `utterance.rate` in `script.js` if you want it faster.

## Editing the content

Everything you'd want to change — vocab, phrases, pronunciation patterns, block prompts — lives in `data.js` as plain arrays/objects. No need to touch `script.js` or `style.css` to add or edit words.
