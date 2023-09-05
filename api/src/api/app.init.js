import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import session from "express-session";
import passport from "passport";
import swaggerUiExpress from "swagger-ui-express";
import authRouter from "./auth/dependencies.js";
import {
  cartRouter,
  ticketRouter,
} from "./cart/infrastructure/dependencies.js";
import healthRouter from "./health/infrastructure/dependencies.js";
import {
  mockProductRouter,
  productRouter,
} from "./product/infrastructure/dependencies.js";
import App from "./shared/app.js";
import config from "./shared/config/config.js";
import { errorHandler } from "./shared/middlewares/errorHandler.js";
import { loggerMiddleware, specs } from "./shared/utils/index.js";
import userRouter from "./user/infrastructure/dependencies.js";

const appInit = () => {
  const app = new App();

  app.setMiddlewares([
    cors(config.cors),
    session(config.session),
    express.json(),
    express.urlencoded({ extended: true }),
    passport.initialize(),
    cookieParser(),
    loggerMiddleware,
  ]);
  app.app.use("/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
  app.setRoutes([
    healthRouter.getRouter(),
    userRouter.getRouter(),
    authRouter.getRouter(),
    productRouter.getRouter(),
    mockProductRouter.getRouter(),
    cartRouter.getRouter(),
    ticketRouter.getRouter(),
  ]);
  app.errorHandler(errorHandler);

  return app;
};

export default appInit();
