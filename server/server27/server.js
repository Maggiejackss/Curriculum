const express = require('express');

server.use(express.static(__dirname + "/public"));

server.engine('html', es6Renderer);
server.set('views', 'views');
server.set('view engine', 'html');
const server = express();

server.get('/heartbeat', (req, res) => {
  res.json({"is": "working"});
});


server.listen(8080, () => {
  console.log('the server is running at localhost:8080');
})