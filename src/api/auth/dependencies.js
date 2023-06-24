import { MongoUserRepository } from "../user/infrastructure/repositories/mongoUserRepository.js";
import { AuthRouter } from "./routes/authRouter.js";
import { PassportAuthService } from "./services/passportAuthService.js";
import { PassportStrategyInstance } from "./config/passportStrategyInstance.js";

// auth service dependency inyection
const userRepository = new MongoUserRepository();
const authService = new PassportAuthService();
const authRouter = new AuthRouter("api-auth", authService);

// eslint-disable-next-line no-new
new PassportStrategyInstance(userRepository); // instanciando las estrategias de passport

export default authRouter;
