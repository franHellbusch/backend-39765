import { UserUC } from "../application/UserUseCases.js";
import { MongoUserRepository } from "./repositories/mongoUserRepository.js";
import { UserRouter } from "./routes/userRouter.js";

// user dependency inyection
const userRepository = new MongoUserRepository();
const userUC = new UserUC(userRepository);
const userRouter = new UserRouter("api-users", userUC);

export default userRouter;
