import BaseRouter from "../../../shared/routes/baseRouter.js";

export class HealthRouter extends BaseRouter {
  initRoutes() {
    this.get("/health", ["PUBLIC"], this.controllers.getHealthMessage);
  }
}
