const express =require("express");
const http = require("http");
const socket = require("socket.io");
const port = process.env.PORT || 8000;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const app = express();
const server = http.createServer(app);
const io = socket(server);


io.on("connection", (socket) => {

    const { roomId } = socket.handshake.query;
    socket.join(roomId);

    socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {

        io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
    });

    socket.on("disconnect", () => {
        socket.leave(roomId);
    });
});

server.listen(port, () => {

    console.log(`Listening on port ${port}`);
})




