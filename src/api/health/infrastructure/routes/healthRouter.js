import BaseRouter from "../../../shared/routes/baseRouter.js";

export class HealthRouter extends BaseRouter {
  initRoutes() {
    this.get("/health", async (_req, res, _next) => {
      const message = await this.service.sendMessage();
      res.sendSuccessWithPayload(200, message);
    });
  }
}
