import { MongoRepository } from "../../../shared/repositories/mongoRepository.js";
import { productModel } from "../models/productModel.js";

export class MongoProductRepository extends MongoRepository {
  constructor() {
    super(productModel);
  }

  async getAllPaginate({ limit = 20, page = 1, sort = 0, query = {} }) {
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
    } = await this.model.paginate(query, options);

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
        : `http://localhost:${
            process.env.PORT
          }/home?limit=${limit}&page=${prevPage}&sort=${sort || ""}&query=${
            query || ""
          }`,
      nextLink: !hasNextPage
        ? null
        : `http://localhost:${
            process.env.PORT
          }/home?limit=${limit}&page=${nextPage}&sort=${sort || ""}&query=${
            query || ""
          }`,
    };
  }
}
