import BaseRouter from "../../shared/routes/baseRouter.js";
import { passportCall } from "../services/passportAuthService.js";

export class AuthRouter extends BaseRouter {
  initRoutes() {
    this.post(
      "/login",
      ["NO_AUTH"],
      passportCall("login", { strategyType: "locals" }),
      this.controllers.login
    );

    this.post(
      "/register",
      ["NO_AUTH"],
      passportCall("register", { strategyType: "locals" }),
      this.controllers.register
    );

    this.get("/current", ["USER", "ADMIN"], this.controllers.currentUser);

    this.post("/logout", ["USER", "ADMIN"], this.controllers.logout);
  }
}
