const ProductManager = require('./productManager');
const products = new ProductManager('/productos.json');

products.getFile();

module.exports = products;
