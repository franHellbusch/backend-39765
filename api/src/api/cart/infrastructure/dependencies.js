import { productRepository } from "../../product/infrastructure/dependencies.js";
import { CartUC } from "../application/CartUseCases.js";
import { TicketUC } from "../application/TicketUseCases.js";
import { CartController } from "./controllers/cartController.js";
import { TicketController } from "./controllers/ticketController.js";
import { MongoCartRepository } from "./repositories/mongoCartRepository.js";
import { MongoTicketRepository } from "./repositories/mongoTicketRepository.js";
import { CartRouter } from "./routes/cartRouter.js";
import { TicketRouter } from "./routes/ticketRouter.js";

// ticket dependency inyection
export const ticketRepository = new MongoTicketRepository();
const ticketUC = new TicketUC(ticketRepository);
const ticketController = new TicketController(ticketUC);
const ticketRouter = new TicketRouter("api-tickets", ticketController);

// cart dependency inyection
export const cartRepository = new MongoCartRepository(
  productRepository,
  ticketRepository
);
const cartUC = new CartUC(cartRepository);
const cartController = new CartController(cartUC);
const cartRouter = new CartRouter("api-carts", cartController);

export { cartRouter, ticketRouter };
