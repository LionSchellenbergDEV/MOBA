const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Für das Parsen von JSON-Daten

// Verbinde mit der MongoDB-Datenbank
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Datenbank verbunden"))
    .catch(err => console.log("Datenbankfehler: ", err));

// Beispiel-Route
app.get('/', (req, res) => {
    res.send("Hello World!");
});

// Starte den Server
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
