const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app);

const io = socketio(server);

app.get('/', (req, res) => {
  res.send('hey');
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
