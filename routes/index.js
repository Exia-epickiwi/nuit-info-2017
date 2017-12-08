const MessageOption = require("../MessageOption")
const Message = require("../message")

module.exports = (socket) => {
    let options = [
        new MessageOption("CreateEvent", "Créer un évènement", "Je veux créer un événement", ""),
        new MessageOption("JoinEvent", "Joindre un évènement", "Je veux rejoindre un événement", "")];

    let message = new Message(1, "text", options);
    message.text = "Que puis-je faire pour vous ?"

    socket.emit("ReceivedMessage", message)
}