const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/index.html');
});

app.get('/api/ads', (req, res) => {
  // This would fetch ads from a database in a real application
  const ads = [
    { id: 1, title: 'Sample Ad 1', content: 'This is a sample advertisement' },
    { id: 2, title: 'Sample Ad 2', content: 'This is another sample advertisement' }
  ];
  res.json(ads);
});

// Start server
app.listen(PORT, () => {
  console.log(`REKLAMA Advertising Platform running on port ${PORT}`);
});

module.exports = app;