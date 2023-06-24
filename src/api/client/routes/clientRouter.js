import BaseRouter from "../../shared/routes/baseRouter.js";

export class ClientRouter extends BaseRouter {
  initRoutes() {
    this.get("/home", ["USER", "ADMIN"], (req, res, _next) => {
      res.render("home", { title: "home", user: req.user });
    });

    this.get("/login", ["NO_AUTH"], (_req, res, _next) => {
      res.render("login", { title: "login" });
    });

    this.get("/register", ["NO_AUTH"], (_req, res, _next) => {
      res.render("register", { title: "register" });
    });
  }
}
