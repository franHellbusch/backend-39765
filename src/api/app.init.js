import express from "express";

import App from "./shared/app.js";
import healthRouter from "./health/infrastructure/dependencies.js";
import userRouter from "./user/infrastructure/dependencies.js";
import authRouter from "./auth/dependencies.js";
import { errorHandler } from "./shared/middlewares/errorHandler.js";
import session from "express-session";
import config from "./shared/config/config.js";

const appInit = () => {
  const app = new App();

  app.setMiddlewares([
    session(config.session),
    express.json(),
    express.urlencoded({ extended: true }),
  ]);
  app.setRoutes([healthRouter, userRouter, authRouter]);
  app.errorHandler(errorHandler);

  return app;
};

export default appInit();
