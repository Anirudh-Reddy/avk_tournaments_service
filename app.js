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
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


// Import Routes
const teamRoutes = require('./routes/teamRoutes');
const matchRoutes = require('./routes/matchRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const photoRoutes = require('./routes/photo.routes');

// Mount Routes
app.use('/api/teams', teamRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/photos', photoRoutes);

// Health Check
app.get('/', (req, res) => {
  res.send('AVK iVL Tournament API is up and running');
});

module.exports = app;
