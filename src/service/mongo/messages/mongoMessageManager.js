const messageModel = require("../../../models/message");
const MongoManager = require("../mongoManager");

class MongoMessageManager extends MongoManager {
    constructor() {
        super(messageModel);
    }
}

module.exports = MongoMessageManager;
