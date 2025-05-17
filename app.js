const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const teamRoutes = require('./routes/teamRoutes');
const matchRoutes = require('./routes/matchRoutes');
const announcementRoutes = require('./routes/announcementRoutes');

// Mount Routes
app.use('/api/teams', teamRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/announcements', announcementRoutes);

// Health Check
app.get('/', (req, res) => {
  res.send('AVK Tournament API is up and running');
});

module.exports = app;
