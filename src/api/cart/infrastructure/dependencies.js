import { productRepository } from "../../product/infrastructure/dependencies.js";
import { CartUC } from "../application/cartUseCases.js";
import { MongoCartRepository } from "./repositories/mongoCartRepository.js";
import { CartRouter } from "./routes/cartRouter.js";

// user dependency inyection
export const cartRepository = new MongoCartRepository(productRepository);
const cartUC = new CartUC(cartRepository);
const cartRouter = new CartRouter("api-carts", cartUC);

export default cartRouter;
