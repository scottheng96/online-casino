const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
// Express initializes app to be a function handler that you can supply to an HTTP server
const app = express();
const server = http.createServer(app);
const io = socketIO(server);



// Define a route handler '/' that gets called when we hit our website home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index1.html');
});

app.use(express.static(__dirname + '/../../build'))
// I listen on the connection event for incoming sockets and log it to the console
io.on('connection', (socket) => {
    console.log('a user connected');

    // give the socket a unique id
    socket.id = Math.floor(Math.random() * 1000);
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', socket.id + ": " + msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// We make the http server listen on port 3000
server.listen(PORT, () => {
    console.log('listening on *:3000');
});