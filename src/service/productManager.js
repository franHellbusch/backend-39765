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
    try {
      object['id'] = this.nextId();
      this.products.push(object);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, 2)
      );
      return object;
    } catch (err) {
      throw new Error(err);
    }
  }

  getById(ID) {
    return this.products.some((e) => e.id == ID)
      ? this.products.find((e) => e.id == ID)
      : null;
  }

  getAll(limit) {
    if (limit && limit > 0 && this.products.length > limit) {
      return this.products.slice(0, limit);
    }
    return this.products;
  }

  async updateProduct(ID, object) {
    try {
      let product = this.getById(ID);

      if (product) {
        product = {
          ...product,
          ...object,
        };

        this.products = this.products.map((prod) => {
          if (prod.id === product.id) {
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
      return product;
    } catch (error) {
      throw new Error(err);
    }
  }

  async deleteById(ID) {
    try {
      this.products = this.products.filter((e) => e.id != ID);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, 2)
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleteAll() {
    try {
      this.products = [];
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, 2)
      );
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = ProductManager;
