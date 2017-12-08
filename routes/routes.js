const routes = {
    "index" : require("./index"),
    "CreateEvent" : require("./notImplemented"),
    "JoinEvent" : require("./notImplemented"),
}

module.exports.exec = (optionType,socket) => {
    routes[optionType](socket)
}