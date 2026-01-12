const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Import routes
const authRoutes = require('./routes/auth');
const musicRoutes = require('./routes/music');
const subscriptionRoutes = require('./routes/subscription');
const earningsRoutes = require('./routes/earnings');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/earnings', earningsRoutes);

// Serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🎵 MusicStream Pro server running on port ${PORT}`);
});