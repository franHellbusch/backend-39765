import { Product } from "../../../product/domain/product.js";

export class TicketDto {
  constructor({
    id = "",
    code = "",
    purchase_datetime = "",
    amount = 0,
    purchaser = "",
    products = [],
  }) {
    this.id = id;
    this.code = code;
    this.purchase_datetime = purchase_datetime;
    this.amount = amount;
    this.purchaser = purchaser;
    this.products = products.map((item) => {
      const { quantity, product, subtotal } = item;
      const newProduct = {
        quantity,
        product: new Product(product),
        subtotal,
      };

      return newProduct;
    });
  }
}
