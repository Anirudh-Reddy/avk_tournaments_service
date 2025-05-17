module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    // Listen for score updates
    socket.on('scoreUpdate', (data) => {
      console.log('Score update received:', data);

      // Broadcast to all other clients
      socket.broadcast.emit('scoreUpdate', data);
    });

    // Optionally: handle disconnect
    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};
