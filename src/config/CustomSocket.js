const { Server: IoServer } = require('socket.io');
const productsEvents = require('../controllers/sockets/socket.products');

class CustomSocket {
  constructor(httpServer) {
    this.io = new IoServer(httpServer);

    this.configEvents(productsEvents(this.io));
  }

  configEvents(events = []) {
    this.io.on('connection', (socket) => {
      console.log(`User connection: ${socket?.id}`);

      if (events.length > 0) {
        events.forEach((event) => {
          socket.on(event.name, event.callback);
        });
      }
    });
  }
}

module.exports = CustomSocket;