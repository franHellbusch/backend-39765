import { Product } from "../../../product/domain/product.js";

export class CartDto {
  constructor({ id = null, products = [], total = 0 }) {
    this.id = id;
    this.products = products.map((item) => {
      const { quantity, product, subtotal } = item;
      const newProduct = {
        quantity,
        product: new Product(product),
        subtotal,
      };

      return newProduct;
    });
    this.total = total;
  }
}
