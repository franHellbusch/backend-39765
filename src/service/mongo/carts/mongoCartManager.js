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
            ({ product }) => product._id == prod_id
        );

        if (newProduct) {
            newProduct.quantity += 1;
        } else {
            cartById.products.push({ product: product._id, quantity: 1 });
        }

        return cartById.save();
    }

    async updateProductQuantity(id, prod_id, quantity) {
        await productsService.getById(prod_id);
        const cartById = await this.getById(id);

        cartById.products = await cartById.products.map((p) => {
            console.log(p.product._id.toString(), prod_id);
            if (p.product._id.toString() == prod_id) {
                p.quantity = parseInt(quantity);
            }
            return p;
        });

        return cartById.save();
    }

    async deleteProduct(id, prod_id) {
        const cartById = await this.getById(id);

        cartById.products = await cartById.products.filter(
            ({ product }) => product._id != prod_id
        );

        return cartById.save();
    }

    async deleteAll(id) {
        const cartById = await this.getById(id);
        cartById.products = [];

        return cartById.save();
    }
}

module.exports = MongoCartManager;
