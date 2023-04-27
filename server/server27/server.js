const express = require('express');

const server = express();

server.get('/heartbeat', (req, res) => {
  res.json({"is": "working"});
});


server.listen(8080, () => {
  console.log('the server is running at localhost:8080');
})