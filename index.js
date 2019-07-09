const express = require('express');

const postRouter = require('./routers/post-router.js');
const server = express();

server.get('/', (req, res) => {
    res.send(`WebAPI - II - Challenge`);
})

server.listen(9000, () => {
    console.log('Server running on localhost')
})