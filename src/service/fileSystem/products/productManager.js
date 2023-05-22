const fs = require('fs');

class ProductManager {
  constructor(archivo) {
    this.path = `${__dirname}/${archivo}`;
    this.products = [];
  }

  async getFile() {
    try {
      const data = await fs.promises.readFile(this.path, 'utf-8');
      const products = await JSON.parse(data);
      this.products = products;
    } catch (err) {
      console.error(err);
      await fs.promises.writeFile(this.path, '[]');
    }
  }

  nextId() {
    return this.products.length !== 0
      ? this.products[this.products.length - 1].id + 1
      : 1;
  }

  async save(object) {
    if (
      !object.title ||
      !object.description ||
      !object.code ||
      !object.price ||
      !object.status ||
      !object.stock ||
      !object.category
    ) {
      throw new Error('Missing product content');
    }

    object['id'] = this.nextId();
    this.products.push(object);
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.products, null, 2)
    );
    return object;
  }

  getById(ID) {
    const product = this.products.find((product) => product.id == ID);

    if (!product) throw new Error('Product not found');
    return product;
  }

  getAll(limit) {
    if (limit && limit > 0 && this.products.length > limit)
      return this.products.slice(0, limit);

    if (this.products.length == 0)
      throw new Error('No hay productos disponibles');

    return this.products;
  }

  async update(ID, object) {
    if (object.id)
      throw new Error('El id del producto no puede ser modificado');

    let product = this.getById(ID);

    product = {
      ...product,
      ...object,
    };

    this.products = this.products.map((prod) => {
      if (prod.id == product.id) {
        prod = product;
      }
      return prod;
    });

    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.products, null, 2)
    );

    return product;
  }

  async deleteById(ID) {
    this.products = this.products.filter((e) => e.id != ID);
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.products, null, 2)
    );
  }

  async deleteAll() {
    this.products = [];
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.products, null, 2)
    );
  }
}

module.exports = ProductManager;
