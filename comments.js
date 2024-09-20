// Create web server
// Create a web server that listens on port 3000 and serves the comments.js file to the client.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/javascript' });
  fs.readFile('comments.js', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
      return;
    }
    res.end(data);
  });
});

server.listen(3000);