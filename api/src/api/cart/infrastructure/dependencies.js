import { productRepository } from "../../product/infrastructure/dependencies.js";
import { CartUC } from "../application/cartUseCases.js";
import { CartController } from "./controllers/cartController.js";
import { MongoCartRepository } from "./repositories/mongoCartRepository.js";
import { CartRouter } from "./routes/cartRouter.js";

// user dependency inyection
export const cartRepository = new MongoCartRepository(productRepository);
const cartUC = new CartUC(cartRepository);
const cartController = new CartController(cartUC);
const cartRouter = new CartRouter("api-carts", cartController);

export default cartRouter;
