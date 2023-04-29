const express = require('express');
const  { checkAuth } = require('./middleware');

const server = express();
server.use(express.json());
server.use(checkAuth);


server.get('/heartbeat', (req, res) => {
  res.json({"is":"working"});
})

server.listen(8080, () => {
  console.log('the server is running at localhost:8080')
})

server.post('/auth/login', (req, res) => {
  res.send(`${req.body.username}, ${req.body.password}`)
});