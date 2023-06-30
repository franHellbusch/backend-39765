import { ProductUC } from "../application/ProductUseCases.js";
import { MongoProductRepository } from "./repositories/mongoProductRepository.js";
import { ProductRouter } from "./routes/productRouter.js";

// user dependency inyection
export const productRepository = new MongoProductRepository();
const productUC = new ProductUC(productRepository);
const productRouter = new ProductRouter("api-products", productUC);

export default productRouter;
