export class ProductController {
  constructor(productUC) {
    this.productUC = productUC;
  }

  postProduct = async (req, res, _next) => {
    const product = await this.productUC.createProduct(req.body);
    res.sendSuccessWithPayload(200, product);
  };

  getProduct = async (req, res, _next) => {
    const product = await this.productUC.sendProduct(req.params.id);
    res.sendSuccessWithPayload(200, product);
  };

  getAllProducts = async (req, res, _next) => {
    const product = await this.productUC.sendAllProduct(req.query);
    res.sendSuccessWithPayload(200, product);
  };

  updateProduct = async (req, res, _next) => {
    const product = await this.productUC.updateProduct(req.params.id, req.body);
    res.sendSuccessWithPayload(200, product);
  };

  deleteProduct = async (req, res, _next) => {
    const product = await this.productUC.deleteProduct(req.params.id);
    res.sendSuccessWithPayload(200, product);
  };
}
