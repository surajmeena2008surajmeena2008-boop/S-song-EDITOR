# S-Song Editor (v6)

A static website package prepared for GitHub Pages.

## Publish on GitHub Pages
1. Create a new GitHub repository named `sunny-song-editor`.
2. Upload all files and folders from this ZIP to the repository root. Keep `index.html`, `manifest.webmanifest`, and the `icons` folder together.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Wait for the Pages deployment to finish and open the website URL shown in Settings → Pages.

## Notes
- The editor uses a couple of JavaScript libraries from CDN, so those features require an internet connection.
- GitHub Pages serves this as a static website; no server setup is required.

## Install as an app (Chrome on Android)
1. Open your GitHub Pages link in Chrome once while online (so the app can save itself for offline use).
2. Tap the menu (three dots) and choose **Install app** (or **Add to Home screen**).
3. Open it from the home screen icon. It runs full screen like a normal app.

## What's new in v6
- New pink glass layout matching the design mockup, purple default theme.
- Local album art (the song's embedded cover) is shown in the player card.
- The whole theme adapts to the album art with a smooth colour change. The palette button switches between "Match album art" and fixed colours.
- Installable PWA: manifest, icons (including maskable), service worker and offline support.
