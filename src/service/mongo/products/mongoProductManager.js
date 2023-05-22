const productModel = require("../../../models/product");
const MongoManager = require("../mongoManager");

class MongoProductManager extends MongoManager {
    constructor() {
        super(productModel);
    }

    async update(id, object) {
        await this.getById(id);
        await this.model.findByIdAndUpdate(id, object);

        return `ID: ${id} updated`;
    }
}

module.exports = MongoProductManager;
