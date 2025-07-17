import http from 'http';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import app from './app.js'; // ✅ Correct default import
import socketHandler from './src/socket/socketHandler.js'; // ✅ Must be a default export

// Load environment variables
dotenv.config();

// Create HTTP server
const server = http.createServer(app);

// Attach Socket.IO
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// ✅ Pass Socket.IO instance to your handler
socketHandler(io);

// Start server
const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`✅ Server is running on http://localhost:${PORT}`);
// });
