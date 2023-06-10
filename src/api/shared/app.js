import express from "express";
import { createServer } from "http";
import config from "./config/config.js";

class App {
  constructor() {
    this.app = express();
    this.server = createServer(this.app);
  }

  listen() {
    this.server.listen(config.globals.port, () => {
      console.info(config.server.gretting());
    });
  }

  stop() {
    this.server.close();
  }

  setRoutes(routers = []) {
    routers.forEach((router) => {
      this.app.use(config.server.apiVersion, router);
    });
  }

  setMiddlewares(middlewares = []) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  errorHandler(errorHandler) {
    this.app.use(errorHandler);
  }
}

export default App;
