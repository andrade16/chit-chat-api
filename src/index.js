const http = require('http');
const express = require('express');
const cors = require('cors');
const io = require('socket.io');
const path = require('path');

const port = 8080;

// Sets up server
const app = express();
const server = http.createServer(app);

const socketIo = io(server);

// Allows CORS
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

// Start Listening
server.listen(port, (err) => {
    console.log(`Server listening on port ${port}`);
});

// socket.io set up
socketIo.on('connection', socket => {
    const username = socket.handshake.query.username;
    console.log(`${username} connected`);

    socket.broadcast.emit('client:connection', username);

    // handles message submissions
    socket.on('client:message', data => {
        console.log(`${data.username}: ${data.message}`);

        // message received from UI, now broadcasting
        socket.broadcast.emit('server:message', data);
    });

    // handles user input events
    socket.on('client:typing', inputData => {

        const inputEvent = {user: username, data: inputData};
        socket.broadcast.emit('server:typing', inputEvent);

    })

    socket.on('disconnect', () => {
        console.log(`${username} disconnected`);

    });
});

module.exports = app;