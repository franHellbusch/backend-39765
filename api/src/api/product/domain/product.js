export class Product {
  constructor({
    id = null,
    title = "",
    description = "",
    price = 0,
    stock = 0,
    code = "",
    imageUrl = "",
    status = "",
    category = "",
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.code = code;
    this.imageUrl = imageUrl;
    this.status = status;
    this.category = category;
  }
}
