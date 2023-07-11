import BaseRouter from "../../../shared/routes/baseRouter.js";

export class ProductRouter extends BaseRouter {
  initRoutes() {
    this.post("/products", ["USER", "ADMIN"], this.controllers.postProduct);

    this.get("/products/:id", ["USER", "ADMIN"], this.controllers.getProduct);

    this.get("/products", ["USER", "ADMIN"], this.controllers.getAllProducts);

    this.put(
      "/products/:id",
      ["USER", "ADMIN"],
      this.controllers.updateProduct
    );

    this.delete(
      "/products/:id",
      ["USER", "ADMIN"],
      this.controllers.deleteProduct
    );
  }
}
