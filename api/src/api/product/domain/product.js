export class Product {
  constructor({
    id = null,
    title = "",
    description = "",
    price = 0,
    stock = 0,
    code = "",
    imageUrls = [],
    presentationImage = "",
    status = "",
    category = "",
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.code = code;
    this.imageUrls = imageUrls;
    this.presentationImage = presentationImage;
    this.status = status;
    this.category = category;
  }
}
