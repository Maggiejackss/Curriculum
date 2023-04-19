const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const server = express();

server.get('/heartbeat', (req, res) => {
  res.json({message: 'heartbeat'})
})

server.get('/', (req, res) => {
  res.render('index', {
    locals: {
      title: 'Welcome!'
    },
    partials: {
      header: 'header',
      main: 'main',
      footer: 'footer'
    }
  
  
  });
})

server.engine('html', es6Renderer);
server.set('views', 'views');
server.set('view engine', 'html');

server.listen(8080, () => {
  console.log('the server is running at PORT 8080')
})
