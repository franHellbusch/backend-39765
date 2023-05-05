const http = require('./src/app');
const CustomSocket = require('./src/config/CustomSocket');

const PORT = process.env.PORT || 8080;

const server = http.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

server.on('error', (err) => console.error(err));

new CustomSocket(http);
