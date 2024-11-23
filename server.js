const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const { Pool } = require('pg');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/images', (req, res) => {
  const imagesDir = path.join(__dirname, 'public/photos');

  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).send('Error reading images directory');
    }

    const images = files
      .filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file))
      .map((file) => `/photos/${file}`);

    res.json(images);
  });
});

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get('/api/bookings', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bookings');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
