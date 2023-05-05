const CartManager = require('./cartManager');
const cartsService = new CartManager('/carts.json');

cartsService.getFile();

module.exports = cartsService;
