// The server.js is only for the making of the socketio server and the express server
// Agar.io clone
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const socketIo = require('socket.io');
const helmet = require('helmet');


const httpServer = http.createServer();
const server = express(httpServer);

httpServer.on('listening', () => {
    console.log(`The server is running on port ${9090}`);
});

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, 'public')));
server.use(helmet());

httpServer.listen(9090);
const io = socketIo(httpServer);
//App Organization

module.exports = {
    app: server, io
};
