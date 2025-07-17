// src/socket/socketHandler.js

export default function(io) {
  io.on('connection', (socket) => {
    console.log(`✅ Client connected: ${socket.id}`);

    // Listen for score updates
    socket.on('scoreUpdate', (data) => {
      console.log('📊 Score update received:', data);
      socket.broadcast.emit('scoreUpdate', data); // Broadcast to others
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      console.log(`❌ Client disconnected: ${socket.id}`);
    });
  });
}
