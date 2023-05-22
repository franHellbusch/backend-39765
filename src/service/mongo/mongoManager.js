class MongoManager {
    constructor(model) {
        this.model = model;
    }

    async getAll() {
        return await this.model.find();
    }

    async getById(id) {
        const data = await this.model.findById(id);

        if (data == null) {
            throw new Error(`ID: ${id} not found`);
        }

        return data;
    }

    async save(object) {
        return new this.model(object).save();
    }

    async deleteById(id) {
        await this.getById(id);
        await this.model.findByIdAndDelete(id);

        return id;
    }
}

module.exports = MongoManager;
