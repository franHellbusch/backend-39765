import BaseRouter from "../../shared/routes/baseRouter.js";

export class ClientRouter extends BaseRouter {
  initRoutes() {
    this.get("/home", (_req, res, _next) => {
      res.render("home", { title: "home" });
    });

    this.get("/login", (_req, res, _next) => {
      res.render("login", { title: "login" });
    });

    this.get("/register", (_req, res, _next) => {
      res.render("register", { title: "register" });
    });
  }
}
