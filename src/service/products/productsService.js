const ProductManager = require('./productManager');
const productsService = new ProductManager('/products.json');

productsService.getFile();

module.exports = productsService;
