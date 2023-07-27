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

    this.get(
      "/auth/github",
      ["NO_AUTH"],
      passportCall("github", { strategyType: "locals" })
    );

    this.get(
      "/auth/github/callback",
      ["NO_AUTH"],
      passportCall("github", { strategyType: "locals" }),
      this.controllers.githubAuthCallback
    );

    this.get(
      "/auth/google",
      ["NO_AUTH"],
      passportCall("google", { strategyType: "locals" })
    );

    this.get(
      "/auth/google/callback",
      ["NO_AUTH"],
      passportCall("google", { strategyType: "locals" }),
      this.controllers.googleAuthCallback
    );

    this.get("/current", ["USER", "ADMIN"], this.controllers.currentUser);

    this.post("/logout", ["USER", "ADMIN"], this.controllers.logout);
  }
}
