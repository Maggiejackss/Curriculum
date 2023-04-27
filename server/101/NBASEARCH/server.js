const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors({
  origin: ['http://127.0.0.1:5500']
}));

const mvps = require('./mvps.json');

server.get("/", (req, res) => {

})

server.get("/mvps/years/:year", (req, res) => {
  const {year} = req.params;
  const target = mvps.filter(mvps => mvps.year === year);
  console.log(target)
  return target;
})

server.get("/mvps/players/:player", (req, res) => {
  const {player} = req.params;
  const target = mvps.filter(mvps => mvps.player.includes(player));
  res.json(target);
})

server.get('/mvps', (req, res) => {
  res.json(mvps);
})


server.listen(8080, () => {
  console.log('the server is running at PORT 8080');
})


