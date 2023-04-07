const fs = require('fs');

class ProductManager {
  constructor(archivo) {
    this.path = `./${archivo}`;
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
      console.error(err);
    }
  }

  getById(ID) {
    return this.products.some((e) => e.id == ID)
      ? this.products.find((e) => e.id == ID)
      : null;
  }

  getAll() {
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
      console.error(error.message);
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
      console.error(err);
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
      console.error(err);
    }
  }
}

const pruebas = async (
  archivo,
  object,
  getId,
  deleteId,
  updateId,
  updatedObject,
  borrar = false
) => {
  const productsInstance = new ProductManager(archivo);

  await productsInstance.getFile();

  console.log(await productsInstance.save(object));

  console.log(productsInstance.getById(getId));

  console.log(await productsInstance.updateProduct(updateId, updatedObject));

  console.log(productsInstance.getAll());

  await productsInstance.deleteById(deleteId);

  if (borrar) {
    setTimeout(() => {
      productsInstance.deleteAll();
    }, 2000);
  }
};

const product = {
  title: `newProduct`,
  description: `product description`,
  price: 99,
  thumbnail: `http`,
  stock: 10,
};

const updatedProduct = {
  title: `UpdatedProduct`,
  description: `product description`,
  price: 999,
  thumbnail: `http`,
  stock: 10,
};

pruebas('./productos.json', product, 4, 4, 2, updatedProduct, false);
