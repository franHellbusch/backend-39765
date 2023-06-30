import BaseRouter from "../../shared/routes/baseRouter.js";
import { generateToken } from "../../shared/utils/gererateToken.js";

export class AuthRouter extends BaseRouter {
  initRoutes() {
    this.post(
      "/login",
      ["NO_AUTH"],
      this.service.authCallback("login", { strategyType: "locals" }),
      async (req, res, _next) => {
        const token = generateToken(req.user);
        res
          .cookie("authToken", token, {
            maxAge: 1000 * 3600 * 24,
            httpOnly: true,
          })
          .redirect("/home");
      }
    );

    this.post(
      "/register",
      ["NO_AUTH"],
      this.service.authCallback("register", { strategyType: "locals" }),
      async (req, res, _next) => {
        const token = generateToken(req.user);
        res
          .cookie("authToken", token, {
            maxAge: 1000 * 3600 * 24,
            httpOnly: true,
          })
          .redirect("/home");
      }
    );

    this.get("/current", ["USER", "ADMIN"], async (req, res, _next) => {
      res.sendSuccessWithPayload(200, req.user);
    });

    this.post("/logout", ["USER", "ADMIN"], async (req, res, _next) => {
      res.clearCookie("authToken");
      res.redirect("/login");
    });
  }
}
