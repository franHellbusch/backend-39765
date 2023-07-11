import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import session from "express-session";
import passport from "passport";
import authRouter from "./auth/dependencies.js";
import cartRouter from "./cart/infrastructure/dependencies.js";
import healthRouter from "./health/infrastructure/dependencies.js";
import productRouter from "./product/infrastructure/dependencies.js";
import App from "./shared/app.js";
import config from "./shared/config/config.js";
import { errorHandler } from "./shared/middlewares/errorHandler.js";
import { loggerMiddleware } from "./shared/utils/index.js";
import userRouter from "./user/infrastructure/dependencies.js";

const appInit = () => {
  const app = new App();

  app.setMiddlewares([
    session(config.session),
    express.json(),
    express.urlencoded({ extended: true }),
    passport.initialize(),
    cookieParser(),
    loggerMiddleware,
    cors(config.cors),
  ]);
  app.setRoutes([
    healthRouter.getRouter(),
    userRouter.getRouter(),
    authRouter.getRouter(),
    productRouter.getRouter(),
    cartRouter.getRouter(),
  ]);
  app.errorHandler(errorHandler);

  return app;
};

export default appInit();
