# 🤖 KI-Monster Philipp — Drive‑Sync + 3D‑Denkbaum
Chatbot mit Vista‑UI, GitHub‑Integration, **Google‑Drive‑Sync** und **WebGL/Three.js Denkbaum**.

## Quickstart
```bash
cp .env.example .env                 # Keys eintragen
npm install
npm start                            # Backend: http://localhost:3000
```
## GitHub Upload
```bash
npm run deploy
```

## Google Drive einrichten
1. Google Cloud Projekt anlegen → Drive API aktivieren
2. Service Account erstellen, JSON‑Key herunterladen
3. In Projekt legen als: `google-drive-key.json`
4. `.env` setzen:
```
GOOGLE_APPLICATION_CREDENTIALS=./google-drive-key.json
DRIVE_FOLDER_ID=           # optional: Zielordner-ID
CACHE_MAX_BYTES=2000000000 # 2 GB
```
## Chat-Kommandos
- `/github info`             – GitHub Benutzerinfo
- `/github repos`            – Repos auflisten
- `/drive list`              – Dateien in Drive Zielordner
- `/drive upload pfad.txt`   – lokale Datei hochladen
- `/drive get <fileId>`      – Datei aus Drive abrufen
