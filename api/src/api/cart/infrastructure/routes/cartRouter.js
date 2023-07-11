import BaseRouter from "../../../shared/routes/baseRouter.js";

export class CartRouter extends BaseRouter {
  initRoutes() {
    this.get("/carts/:id", ["USER", "ADMIN"], this.controllers.getCart);

    this.post("/carts", ["USER", "ADMIN"], this.controllers.postCart);

    this.post(
      "/carts/:cid/products/:pid",
      ["USER", "ADMIN"],
      this.controllers.postProductInCart
    );

    this.put(
      "/carts/:cid/products/:pid",
      ["USER", "ADMIN"],
      this.controllers.updateProductQuantity
    );

    this.delete(
      "/carts/:cid/products/:pid",
      ["USER", "ADMIN"],
      this.controllers.deleteProduct
    );

    this.delete(
      "/carts/:id",
      ["USER", "ADMIN"],
      this.controllers.deleteAllProducts
    );
  }
}
