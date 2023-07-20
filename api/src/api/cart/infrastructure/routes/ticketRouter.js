import BaseRouter from "../../../shared/routes/baseRouter.js";

export class TicketRouter extends BaseRouter {
  initRoutes() {
    this.get("/tickets/:email", ["USER"], this.controllers.getTickets);
  }
}
