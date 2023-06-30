import BaseRouter from "../../../shared/routes/baseRouter.js";

export class CartRouter extends BaseRouter {
  initRoutes() {
    this.get("/carts/:id", ["USER", "ADMIN"], async (req, res, _next) => {
      const cart = await this.service.sendCart(req.params.id);
      res.sendSuccessWithPayload(200, cart);
    });

    this.post("/carts", ["USER", "ADMIN"], async (_req, res, _next) => {
      const cart = await this.service.createCart();
      res.sendSuccessWithPayload(200, cart);
    });

    this.post(
      "/carts/:cid/products/:pid",
      ["USER", "ADMIN"],
      async (req, res, _next) => {
        const { cid, pid } = req.params;
        const cart = await this.service.addProductToCart(cid, pid);
        res.sendSuccessWithPayload(200, cart);
      }
    );

    this.put(
      "/carts/:cid/products/:pid",
      ["USER", "ADMIN"],
      async (req, res, _next) => {
        const { cid, pid } = req.params;
        const { quantity } = req.query;
        const cart = await this.service.updateProductQuantity(
          cid,
          pid,
          quantity
        );
        res.sendSuccessWithPayload(200, cart);
      }
    );

    this.delete(
      "/carts/:cid/products/:pid",
      ["USER", "ADMIN"],
      async (req, res, _next) => {
        const { cid, pid } = req.params;
        const cart = await this.service.deleteProduct(cid, pid);
        res.sendSuccessWithPayload(200, cart);
      }
    );

    this.delete("/carts/:id", ["USER", "ADMIN"], async (req, res, _next) => {
      const cart = await this.service.deleteAllProducts(req.params.id);
      res.sendSuccessWithPayload(200, cart);
    });
  }
}
