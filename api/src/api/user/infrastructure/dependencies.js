import { cartRepository } from "../../cart/infrastructure/dependencies.js";
import { UserUC } from "../application/UserUseCases.js";
import { UserController } from "./controllers/userController.js";
import { MongoUserRepository } from "./repositories/mongoUserRepository.js";
import { UserRouter } from "./routes/userRouter.js";

// user dependency inyection
export const userRepository = new MongoUserRepository(cartRepository);
const userUC = new UserUC(userRepository);
const userController = new UserController(userUC);
const userRouter = new UserRouter("api-users", userController);

export default userRouter;
