import BaseRouter from "../../../shared/routes/baseRouter.js";

export class CartRouter extends BaseRouter {
  initRoutes() {
    this.get("/carts/:id", ["USER"], this.controllers.getCart);

    this.post("/carts", ["USER"], this.controllers.postCart);

    this.post(
      "/carts/:cid/products/:pid",
      ["USER"],
      this.controllers.postProductInCart
    );

    this.put(
      "/carts/:cid/products/:pid",
      ["USER"],
      this.controllers.updateProductQuantity
    );

    this.delete(
      "/carts/:cid/products/:pid",
      ["USER"],
      this.controllers.deleteProduct
    );

    this.delete("/carts/:id", ["USER"], this.controllers.deleteAllProducts);

    this.post("/carts/:cid/purchase", ["USER"], this.controllers.postPurchase);
  }
}
