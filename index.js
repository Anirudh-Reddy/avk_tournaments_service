import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './src/config/db.js';
import teamRoutes from './src/routes/teamRoutes.js';
import matchRoutes from './src/routes/matchRoutes.js';
import cors from "cors";
const app = express();

app.use(cors({
  origin: 'https://avk-tournaments.vercel.app',
}));


dotenv.config();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/teams', teamRoutes);
app.use('/api/matches', matchRoutes);

app.get('/', (req, res) => {
  res.send('✅ AVK iVL Tournament API is live on Vercel!');
});

export default app; // ✅ Required by Vercel
