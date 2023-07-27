import BaseRouter from "../../../shared/routes/baseRouter.js";

export class UserRouter extends BaseRouter {
  initRoutes() {
    this.post("/users", ["USER", "ADMIN"], this.controllers.postUser);

    this.get("/users", ["USER", "ADMIN"], this.controllers.getUser);
  }
}
