import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './src/config/db.js';
import teamRoutes from './src/routes/teamRoutes.js';
import matchRoutes from './src/routes/matchRoutes.js';
import photoRoutes from './src/routes/photo.routes.js';
import announcementRoutes from './src/routes/announcementRoutes.js';

import cors from "cors";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ['https://avk-tournaments.vercel.app', 'http://localhost:4200']
}));

dotenv.config();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/teams', teamRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/photos', photoRoutes);

app.get('/', (req, res) => {
  res.send('✅ AVK iVL Tournament API is live on Vercel!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;