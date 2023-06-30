import { Product } from "../domain/product.js";

export class ProductUC {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  createProduct = async (product) => {
    const productInfo = await this.productRepository.save(product);
    return new Product(productInfo);
  };

  sendProduct = async (id) => {
    const productInfo = await this.productRepository.getById(id);
    return new Product(productInfo);
  };

  sendAllProduct = async (options) => {
    const allProducts = await this.productRepository.getAllPaginate(options);
    return {
      ...allProducts,
      products: allProducts.products.map((productInfo) => {
        return new Product(productInfo);
      }),
    };
  };

  updateProduct = async (id, productUpdates) => {
    const productId = await this.productRepository.update(id, productUpdates);
    return {
      message: `Successfully updated ${productId}`,
      id: productId,
    };
  };

  deleteProduct = async (id) => {
    const productId = await this.productRepository.deleteById(id);
    return {
      message: `Successfully deleted ${productId}`,
      id: productId,
    };
  };
}
