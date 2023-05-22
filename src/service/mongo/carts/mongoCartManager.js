const cartModel = require("../../../models/cart");
const productsService = require("../../products.service");
const MongoManager = require("../mongoManager");

class MongoCartManager extends MongoManager {
    constructor() {
        super(cartModel);
    }

    async save() {
        return await super.save({
            products: [],
        });
    }

    async setNewProduct(id, prod_id) {
        const product = await productsService.getById(prod_id);
        const cartById = await this.getById(id);

        const newProduct = cartById.products.find(
            ({ product }) => product == prod_id
        );

        if (newProduct) {
            newProduct.quantity += 1;
        } else {
            cartById.products.push({ product: product._id, quantity: 1 });
        }

        cartById.save();

        return cartById;
    }

    async deleteProduct(id, prod_id) {
        const cartById = await this.getById(id);

        cartById.products = await cartById.products.filter(
            (product) => product._id != prod_id
        );

        cartById.save();

        return cartById;
    }
}

module.exports = MongoCartManager;
