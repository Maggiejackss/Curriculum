const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.json({message: 'hello world'});
    res.send('hello universe');
})

server.listen(8080, () => {
    console.log('the server is running at PORT 8080');
})

