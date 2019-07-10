const express = require('express');

const postRouter = require('./post-router.js');
const server = express();

server.use('/api/posts', postRouter);

server.listen(9000, () => {
    console.log('Server running on localhost:9000')
})