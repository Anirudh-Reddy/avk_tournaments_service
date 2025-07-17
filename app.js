// import express from 'express';
// import cors from 'cors';
// import * as dotenv from 'dotenv';
// import { connectDB } from "./src/config/db.js";
// import teamRoutes from './src/routes/teamRoutes.js';
// import matchRoutes from './src/routes/matchRoutes.js';
// import announcementRoutes from './src/routes/announcementRoutes.js';
// import photoRoutes from './src/routes/photo.routes.js';

// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// // Create Express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json({ limit: '20mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // Mount Routes
// app.use('/api/teams', teamRoutes);
// app.use('/api/matches', matchRoutes);
// app.use('/api/announcements', announcementRoutes);
// app.use('/api/photos', photoRoutes);

// // Health Check
// app.get('/', (req, res) => {
//   res.send('AVK iVL Tournament API is up and running');
// });

// // ✅ Export app
// export default app;
