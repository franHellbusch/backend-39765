export class Product {
  constructor({
    id = null,
    title = "",
    description = "",
    price = 0,
    stock = 0,
    code = "",
    status = "",
    category = "",
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.code = code;
    this.status = status;
    this.category = category;
  }
}
