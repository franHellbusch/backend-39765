const fs = require('fs');
const productsService = require('../products/productsService');

class CartManager {
  constructor(path) {
    this.path = `${__dirname}/${path}`;
    this.carts = [];
  }

  async getFile() {
    try {
      const data = await fs.promises.readFile(this.path, 'utf-8');
      const carts = await JSON.parse(data);
      this.carts = carts;
    } catch (err) {
      console.error(err);
      await fs.promises.writeFile(this.path, '[]');
    }
  }

  nextId() {
    return this.carts.length !== 0
      ? this.carts[this.carts.length - 1].id + 1
      : 1;
  }

  async save() {
    const newCart = new Object();
    newCart['id'] = this.nextId();
    newCart['products'] = new Array();
    this.carts.push(newCart);
    await fs.promises.writeFile(this.path, JSON.stringify(this.carts, null, 2));
    return newCart;
  }

  async setNewProduct(id, prod_id) {
    await this.getById(id); // verificar si existe el id
    const product = await productsService.getById(prod_id); // traer el producto para agregarlo

    const carts = this.getAll();

    carts.forEach((cart) => {
      if (cart.id == id) {
        // agregando la cantidad de elementos en el carrito
        if (cart.products.some((p) => p.product == prod_id)) {
          cart.products.map((p) => {
            p.product == prod_id && (p.quantity += 1);
            return p;
          });
        }
        // agregando el producto con la key quantity
        else {
          let productObject = {
            quantity: 1,
            product: product.id,
          };
          cart.products.push(productObject);
        }
      }
    });

    await fs.promises.writeFile(this.path, JSON.stringify(carts, null, 2));

    return await this.getById(id);
  }

  getById(ID) {
    const cart = this.carts.find((cart) => cart.id == ID);

    if (!cart) throw new Error('Cart not found');
    return cart;
  }

  getAll(limit) {
    if (limit && limit > 0 && this.carts.length > limit)
      return this.carts.slice(0, limit);

    if (this.carts.length == 0) throw new Error('No hay carts disponibles');

    return this.carts;
  }

  async deleteById(ID) {
    this.carts = this.carts.filter((e) => e.id != ID);
    await fs.promises.writeFile(this.path, JSON.stringify(this.carts, null, 2));
  }

  async deleteProduct(id, prod_id) {
    await this.getById(id); // verificar si existe el id

    const carts = this.getAll();

    let validProdId = true;

    carts.forEach((cart) => {
      if (cart.id == id) {
        // validar si existe el id de producto en el carrito
        const validation = cart.products.some((p) => p.product == prod_id);
        if (!validation) {
          validProdId = false;
        }
        // eliminar productos
        cart.products = cart.products.filter((p) => p.product != prod_id);
      }
    });

    if (!validProdId) {
      throw new Error(`No existe el id ${prod_id} en el carrito`);
    }

    await fs.promises.writeFile(this.path, JSON.stringify(carts, null, 2));

    return `producto ${prod_id} eliminado del carrito`;
  }
}

module.exports = CartManager;
