import BaseRouter from "../../shared/routes/baseRouter.js";

export class AuthRouter extends BaseRouter {
  initRoutes() {
    this.post(
      "/login",
      this.service.authCallback("login"),
      async (_req, res, _next) => {
        res.redirect("/home");
      }
    );

    this.post(
      "/register",
      this.service.authCallback("register"),
      async (_req, res, _next) => {
        res.redirect("/home");
      }
    );

    this.post("/logout", async (req, res, _next) => {
      req.logout(() => {
        res.redirect("/login");
      });
    });
  }
}
