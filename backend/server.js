require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json()); // Für JSON-Anfragen
app.use(cors()); // CORS erlauben


const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
// MongoDB Verbindung
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Datenbank verbunden"))
    .catch((err) => console.log("Datenbank Fehler: ", err));

// Port und Server starten
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
