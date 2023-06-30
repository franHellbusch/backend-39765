import { Cart } from "../domain/cart.js";

export class CartUC {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  sendCart = async (id) => {
    const cartInfo = await this.cartRepository.getById(id);
    return new Cart(cartInfo);
  };

  createCart = async () => {
    const cartInfo = await this.cartRepository.save();
    return new Cart(cartInfo);
  };

  addProductToCart = async (cartId, productId) => {
    const cartInfo = await this.cartRepository.setNewProduct(cartId, productId);
    return new Cart(cartInfo);
  };

  updateProductQuantity = async (cartId, productId, quantity) => {
    const cartInfo = await this.cartRepository.updateProductQuantity(
      cartId,
      productId,
      quantity
    );
    return new Cart(cartInfo);
  };

  deleteProduct = async (cartId, productId) => {
    const cartInfo = await this.cartRepository.deleteProduct(cartId, productId);
    return new Cart(cartInfo);
  };

  deleteAllProducts = async (cartId) => {
    const cartInfo = await this.cartRepository.deleteAll(cartId);
    return new Cart(cartInfo);
  };
}
