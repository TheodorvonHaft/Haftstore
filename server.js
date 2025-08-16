require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { processMessage } = require('./services/logic-engine');
const { startCacheWatcher } = require('./services/google-drive-sync');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/api/message', async (req, res) => {
  try {
    const { message, gpt } = req.body || {};
    const result = await processMessage(message || '', !!gpt);
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Serverfehler' });
  }
});

app.listen(PORT, () => console.log(`KI-Monster Philipp läuft auf http://localhost:${PORT}`));

startCacheWatcher();
