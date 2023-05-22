const MongoProductManager = require("./mongo/products/mongoProductManager");
const productsService = new MongoProductManager();

module.exports = productsService;
