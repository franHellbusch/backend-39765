const messagesService = require("../../service/messages.service");

const messagesEvents = (io) => {
    return [
        {
            name: "NEW-MESSAGE-TO-SAVE",
            callback: async (data) => {
                console.log(data);
                const messageSaved = await messagesService.save(data);
                io.sockets.emit("MESSAGE-SAVED", messageSaved);
            },
        },
    ];
};

module.exports = messagesEvents;
