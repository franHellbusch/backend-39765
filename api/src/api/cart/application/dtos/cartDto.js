import { Product } from "../../../product/domain/product.js";

export class CartDto {
  constructor({ id = null, products = [] }) {
    this.id = id;
    this.products = products.map((item) => {
      const { quantity, product } = item;
      const newProduct = {
        quantity,
        product: new Product(product),
      };

      return newProduct;
    });
  }
}
