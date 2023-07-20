import { CartDto } from "./dtos/cartDto.js";

export class CartUC {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  sendCart = async (id) => {
    const cartInfo = await this.cartRepository.getById(id);
    return new CartDto(cartInfo);
  };

  createCart = async () => {
    const cartInfo = await this.cartRepository.saveCart();
    return new CartDto(cartInfo);
  };

  addProductToCart = async (cartId, productId) => {
    const cartInfo = await this.cartRepository.setNewProduct(cartId, productId);
    return new CartDto(cartInfo);
  };

  updateProductQuantity = async (cartId, productId, quantity) => {
    const cartInfo = await this.cartRepository.updateProductQuantity(
      cartId,
      productId,
      quantity
    );
    return new CartDto(cartInfo);
  };

  deleteProduct = async (cartId, productId) => {
    const cartInfo = await this.cartRepository.deleteProduct(cartId, productId);
    return new CartDto(cartInfo);
  };

  deleteAllProducts = async (cartId) => {
    const cartInfo = await this.cartRepository.deleteAll(cartId);
    return new CartDto(cartInfo);
  };

  finishPurchase = async (cartId, email) => {
    const message = await this.cartRepository.cartPurchase(cartId, email);
    return message;
  };
}
