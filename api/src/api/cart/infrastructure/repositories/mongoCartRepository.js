import { MongoRepository } from "../../../shared/repositories/mongoRepository.js";
import { cartModel } from "../models/cartModel.js";

export class MongoCartRepository extends MongoRepository {
  constructor(productRepository) {
    super(cartModel);
    this.productRepository = productRepository;
  }

  saveCart = async () => {
    return await this.save({
      products: [],
    });
  };

  setNewProduct = async (id, prodId) => {
    const product = await this.productRepository.getById(prodId);
    const cartById = await this.getById(id);

    const newProduct = cartById.products.find(
      ({ product }) => product._id == prodId
    );

    if (newProduct) {
      newProduct.quantity += 1;
    } else {
      cartById.products.push({ product, quantity: 1 });
    }

    return await cartById.save();
  };

  updateProductQuantity = async (id, prodId, quantity) => {
    // eslint-disable-next-line valid-typeof
    if (!quantity || typeof quantity == String) {
      throw new Error("Missing product quantity");
    }

    await this.productRepository.getById(prodId);
    const cartById = await this.getById(id);

    cartById.products = await cartById.products.map((p) => {
      if (p.product._id.toString() == prodId) {
        p.quantity = parseInt(quantity);
      }
      return p;
    });

    return await cartById.save();
  };

  deleteProduct = async (id, prodId) => {
    const cartById = await this.getById(id);

    cartById.products = cartById.products.filter(
      ({ product }) => product._id != prodId
    );

    return cartById.save();
  };

  deleteAll = async (id) => {
    const cartById = await this.getById(id);
    cartById.products = [];

    return await cartById.save();
  };
}
