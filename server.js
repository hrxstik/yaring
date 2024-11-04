const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
