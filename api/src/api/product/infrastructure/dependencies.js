import { ProductUC } from "../application/ProductUseCases.js";
import { ProductController } from "./controllers/productController.js";
import { MongoProductRepository } from "./repositories/mongoProductRepository.js";
import { ProductRouter } from "./routes/productRouter.js";

// product dependency inyection
export const productRepository = new MongoProductRepository();
const productUC = new ProductUC(productRepository);
const productController = new ProductController(productUC);
const productRouter = new ProductRouter("api-products", productController);

export default productRouter;
