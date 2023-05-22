const MongoCartManager = require("./mongo/carts/mongoCartManager");
const cartsService = new MongoCartManager();

module.exports = cartsService;
