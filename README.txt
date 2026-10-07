CrystalOS Offline Edition

This version adds PWA/offline support.

IMPORTANT:
Service workers only work on HTTPS or localhost. Opening index.html directly with file:// will not install the offline cache.

For VS Code:
1. Open this folder.
2. Run it with a local server (for example VS Code Live Server), or use:
   python -m http.server 8080
3. Open http://localhost:8080
4. Visit CrystalOS once while online.
5. Create/sign into your local CrystalOS account.
6. Refresh once while online so the service worker finishes caching.
7. Disconnect from the internet and refresh — CrystalOS should still load.

Your account/session, settings, games and virtual files are already stored in browser localStorage. The service worker caches the OS itself so the page can start offline.

Note: server-backed features and arbitrary external websites still require internet. A local CrystalOS account is not the same as a remote server account.
