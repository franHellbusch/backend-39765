import BaseRouter from "../../../shared/routes/baseRouter.js";

export class ProductRouter extends BaseRouter {
  initRoutes() {
    this.post("/products", ["ADMIN"], this.controllers.postProduct);

    this.get("/products/:id", ["PUBLIC"], this.controllers.getProduct);

    this.get("/products", ["PUBLIC"], this.controllers.getAllProducts);

    this.put("/products/:id", ["ADMIN"], this.controllers.updateProduct);

    this.delete("/products/:id", ["ADMIN"], this.controllers.deleteProduct);
  }
}
