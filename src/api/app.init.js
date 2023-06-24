import express from "express";

import App from "./shared/app.js";
import healthRouter from "./health/infrastructure/dependencies.js";
import userRouter from "./user/infrastructure/dependencies.js";
import authRouter from "./auth/dependencies.js";
import clientRouter from "./client/router.js";
import { errorHandler } from "./shared/middlewares/errorHandler.js";
import session from "express-session";
import config from "./shared/config/config.js";
import passport from "passport";
import handlebars from "express-handlebars";
import cookieParser from "cookie-parser";

const appInit = () => {
  const app = new App();

  app.setMiddlewares([
    session(config.session),
    express.json(),
    express.urlencoded({ extended: true }),
    passport.initialize(),
    cookieParser(),
  ]);
  app.setViewEngine(
    handlebars.engine(),
    config.views.viewEngine,
    config.views.viewsDir,
    config.views.staticPath,
    config.views.staticDir
  );
  app.setRoutes(
    [healthRouter.getRouter(), userRouter.getRouter(), authRouter.getRouter()],
    clientRouter.getRouter()
  );
  app.errorHandler(errorHandler);

  return app;
};

export default appInit();
