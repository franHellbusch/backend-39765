import BaseRouter from "../../../shared/routes/baseRouter.js";

export class ProductRouter extends BaseRouter {
  initRoutes() {
    this.post("/products", ["USER", "ADMIN"], async (req, res, _next) => {
      const product = await this.service.createProduct(req.body);
      res.sendSuccessWithPayload(200, product);
    });

    this.get("/products/:id", ["USER", "ADMIN"], async (req, res, _next) => {
      const product = await this.service.sendProduct(req.params.id);
      res.sendSuccessWithPayload(200, product);
    });

    this.get("/products", ["USER", "ADMIN"], async (req, res, _next) => {
      const product = await this.service.sendAllProduct(req.query);
      res.sendSuccessWithPayload(200, product);
    });

    this.put("/products/:id", ["USER", "ADMIN"], async (req, res, _next) => {
      const product = await this.service.updateProduct(req.params.id, req.body);
      res.sendSuccessWithPayload(200, product);
    });

    this.delete("/products/:id", ["USER", "ADMIN"], async (req, res, _next) => {
      const product = await this.service.deleteProduct(req.params.id);
      res.sendSuccessWithPayload(200, product);
    });
  }
}
