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

  setRoutes(routers = [], clientRouter = () => {}) {
    routers.forEach((router) => {
      this.app.use(config.server.apiVersion, router);
    });

    this.app.use("/", clientRouter);
  }

  setMiddlewares(middlewares = []) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  setViewEngine(engine, viewEngine, viewsDir, staticPath, staticDir) {
    this.app.engine(viewEngine, engine);
    this.app.set("view engine", viewEngine);
    this.app.set("views", viewsDir);
    this.app.use(staticPath, express.static(staticDir));
  }

  errorHandler(errorHandler) {
    this.app.use(errorHandler);
  }
}

export default App;
