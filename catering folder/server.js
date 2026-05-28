const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const app = express();

// Połączenie z bazą PostgreSQL na Renderze
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Serwowanie plików statycznych z folderu "public"
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Obsługa wysyłki formularza
app.post('/zloz-zamowienie', async (req, res) => {
  const { ulica, numer, telefon } = req.body;
  try {
    await pool.query(
      'INSERT INTO zamowienia (ulica, nr, telefon) VALUES ($1, $2, $3)',
      [ulica, numer, telefon]
    );
    res.send('Zamówienie zapisane pomyślnie!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Błąd bazy danych.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
