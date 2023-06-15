import BaseRouter from "../../../shared/routes/baseRouter.js";

export class UserRouter extends BaseRouter {
  initRoutes() {
    this.post("/users", async (req, res, _next) => {
      const user = await this.service.createUser(req.body);
      res.sendSuccessWithPayload(200, user);
    });

    this.get("/users", async (req, res, _next) => {
      const { email } = req.query;
      const user = await this.service.sendUser(email);
      res.sendSuccessWithPayload(200, user);
    });
  }
}
