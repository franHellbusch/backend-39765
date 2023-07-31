import BaseRouter from "../../../shared/routes/baseRouter.js";

export class MockProductRouter extends BaseRouter {
  initRoutes() {
    this.get("/mockingproducts", ["PUBLIC"], this.controllers.getMockProducts);
  }
}
