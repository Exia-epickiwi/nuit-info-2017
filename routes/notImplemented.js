const Message = require("../message")
const routes = require("./routes")

module.exports = (socket) => {
    let message = new Message(1, "text", []);
    message.text = "Cette fonctionnalité n'est pas encore implémentée. Désolé..."
    socket.emit("ReceivedMessage", message)

    routes.exec("index",socket)
}