const http = require('http');
const dotenv = require('dotenv');
const { Server } = require('socket.io');
const app = require('./app');

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

// Real-time socket handler
require('./socket/socketHandler')(io);

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
