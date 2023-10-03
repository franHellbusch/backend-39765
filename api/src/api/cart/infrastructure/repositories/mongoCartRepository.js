import { ErrorNames } from "../../../shared/helpers/ErrorNames.js";
import { ThrowNewError } from "../../../shared/helpers/ThrowNewError.js";
import { MongoRepository } from "../../../shared/repositories/mongoRepository.js";
import cartCustomErrorHandler from "../helpers/CartCustomErrorHandler.js";
import { cartModel } from "../models/cartModel.js";

export class MongoCartRepository extends MongoRepository {
  constructor(productRepository, ticketRepository) {
    super(cartModel, cartCustomErrorHandler);
    this.productRepository = productRepository;
    this.ticketRepository = ticketRepository;
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
      throw ThrowNewError(ErrorNames.carts.MISSING_QUANTITY);
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

  cartPurchase = async (id, email) => {
    const cartById = await this.getById(id);

    const productsWithoutStock = [];
    cartById.products.forEach((item) => {
      if (item.product.stock < item.quantity) {
        productsWithoutStock.push({
          id: item.product._id,
          title: item.product.title,
        });
      }
    });

    if (productsWithoutStock.length > 0) {
      throw ThrowNewError(
        ErrorNames.carts.MISSING_STOCK_TO_PURCHASE,
        productsWithoutStock
      );
    }

    const updatedProducts = cartById.products.map((item) => {
      item.product.stock -= item.quantity;
      return item.product.save();
    });

    await Promise.all(updatedProducts);

    await this.ticketRepository.saveTicket(cartById, email);

    await this.deleteAll(id);

    return "The ticket was created and is ready to be searched";
  };
}
