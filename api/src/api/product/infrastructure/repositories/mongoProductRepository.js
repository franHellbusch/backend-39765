import config from "../../../shared/config/config.js";
import { MongoRepository } from "../../../shared/repositories/mongoRepository.js";
import productCustomErrorHandler from "../helpers/ProductCustomErrorHandler.js";
import { productModel } from "../models/productModel.js";

export class MongoProductRepository extends MongoRepository {
  constructor() {
    super(productModel, productCustomErrorHandler);
  }

  async getAllPaginate({ limit = 10, page = 1, sort = 0, query }) {
    try {
      const options = {};
      if (limit) options.limit = limit;
      if (page) options.page = page;
      // eslint-disable-next-line valid-typeof
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
      } = await this.model.paginate(query || {}, options);

      return {
        products: rest.docs,
        page: rest.page,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage,
        totalPages,
        prevLink: !hasPrevPage
          ? null
          : `${config.server.apiUrl}${
              config.server.apiVersion
            }/products?limit=${limit}&page=${prevPage}&sort=${
              sort || ""
            }&query=${query || ""}`,
        nextLink: !hasNextPage
          ? null
          : `${config.server.apiUrl}${
              config.server.apiVersion
            }/products?limit=${limit}&page=${nextPage}&sort=${
              sort || ""
            }&query=${query || ""}`,
      };
    } catch (err) {
      this.errorHanlder.handleError(err);
    }
  }
}
