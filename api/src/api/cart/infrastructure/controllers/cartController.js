export class CartController {
  constructor(cartUC) {
    this.cartUC = cartUC;
  }

  getCart = async (req, res, _next) => {
    const cart = await this.cartUC.sendCart(req.params.id);
    res.sendSuccessWithPayload(200, cart);
  };

  postCart = async (_req, res, _next) => {
    const cart = await this.cartUC.createCart();
    res.sendSuccessWithPayload(200, cart);
  };

  postProductInCart = async (req, res, _next) => {
    const { cid, pid } = req.params;
    const cart = await this.cartUC.addProductToCart(cid, pid);
    res.sendSuccessWithPayload(200, cart);
  };

  updateProductQuantity = async (req, res, _next) => {
    const { cid, pid } = req.params;
    const { quantity } = req.query;
    const cart = await this.cartUC.updateProductQuantity(cid, pid, quantity);
    res.sendSuccessWithPayload(200, cart);
  };

  deleteProduct = async (req, res, _next) => {
    const { cid, pid } = req.params;
    const cart = await this.cartUC.deleteProduct(cid, pid);
    res.sendSuccessWithPayload(200, cart);
  };

  deleteAllProducts = async (req, res, _next) => {
    const cart = await this.cartUC.deleteAllProducts(req.params.id);
    res.sendSuccessWithPayload(200, cart);
  };

  postPurchase = async (req, res, _next) => {
    const message = await this.cartUC.finishPurchase(
      req.params.cid,
      req.user.email
    );
    res.sendSuccess(200, message);
  };
}
