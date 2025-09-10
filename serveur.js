const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello\n');
});

server.listen(8080, () => {
  console.log('Serveur en écoute sur le port 8080');
});
