const productModel = require("../../../models/product");
const MongoManager = require("../mongoManager");

class MongoProductManager extends MongoManager {
    constructor() {
        super(productModel);
    }

    async getAllPaginate({ limit, page, sort, query }) {
        const options = {};
        if (limit) options.limit = limit;
        if (page) options.page = page;
        if (sort && typeof sort != String)
            options.sort = {
                price: sort >= 0 ? 1 : -1,
            };

        const {
            hasPrevPage,
            hasNextPage,
            prevPage,
            nextPage,
            totalPages,
            ...rest
        } = await this.model.paginate(query, options);
        return {
            payload: rest.docs,
            page: rest.page,
            hasPrevPage,
            hasNextPage,
            prevPage,
            nextPage,
            totalPages,
            prevLink: !hasPrevPage
                ? null
                : `http://localhost:${
                      process.env.PORT
                  }/home?limit=${limit}&page=${prevPage}&sort=${
                      sort || ""
                  }&query=${query || ""}`,
            nextLink: !hasNextPage
                ? null
                : `http://localhost:${
                      process.env.PORT
                  }/home?limit=${limit}&page=${nextPage}&sort=${
                      sort || ""
                  }&query=${query || ""}`,
        };
    }

    async update(id, object) {
        await this.getById(id);
        await this.model.findByIdAndUpdate(id, object);

        return `ID: ${id} updated`;
    }
}

module.exports = MongoProductManager;
