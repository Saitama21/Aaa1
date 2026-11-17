# CNC Machinist — PWA edition

This is a web/PWA conversion of the user-supplied CNC_MACHINIST.apk.
The original app UI, calculations, translations, and CAD module are preserved.

## Run locally

```bash
python3 -m http.server 8080 --directory .
```

Open `http://localhost:8080/`. Test installing from Chrome or Safari.
For mobile devices, deploy the contents of this directory on a static **HTTPS** host
(GitHub Pages, Cloudflare Pages, Netlify, etc.). Do not open `index.html` with `file://`.

Once all assets are cached on a successful first online visit, the app and its CAD
STEP parser are available offline. External Instagram/TikTok links still need a connection.

### Deployment
Publish **this folder's contents**, not the APK. On GitHub Pages with a subdirectory,
relative paths in the manifest and service worker allow the app to work under a repo path.

### Source limitations
Original project sources were not available; this is a direct extraction of the embedded
HTML/JS/CSS and bundled Open CASCADE WASM. It is not a rewrite or codebase refactor.
