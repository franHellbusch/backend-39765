const MongoMessageManager = require("./mongo/messages/mongoMessageManager");
const messagesService = new MongoMessageManager();

module.exports = messagesService;
