const express = require('express');
const app = express();
const port = 3000;

app.get('/dateSSSS', (req, res) => {
  const today = new Date();
  res.json({
    date: today.toISOString().split('T')[0]
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
