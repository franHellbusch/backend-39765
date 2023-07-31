import { ProductUC } from "../application/ProductUseCases.js";
import { MockProductController } from "./controllers/mockProductController.js";
import { ProductController } from "./controllers/productController.js";
import { MongoProductRepository } from "./repositories/mongoProductRepository.js";
import { MockProductRouter } from "./routes/mockProductRouter.js";
import { ProductRouter } from "./routes/productRouter.js";

// product dependency inyection
export const productRepository = new MongoProductRepository();
const productUC = new ProductUC(productRepository);
const productController = new ProductController(productUC);
const productRouter = new ProductRouter("api-products", productController);

// mock products dependency inyection
const mockProductController = new MockProductController();
const mockProductRouter = new MockProductRouter(
  "api-mock-products",
  mockProductController
);

export { productRouter, mockProductRouter };
