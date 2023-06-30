import { AuthRouter } from "./routes/authRouter.js";
import { PassportAuthService } from "./services/passportAuthService.js";
import { PassportStrategyInstance } from "./config/passportStrategyInstance.js";
import { userRepository } from "../user/infrastructure/dependencies.js";

// auth service dependency inyection
const authService = new PassportAuthService();
const authRouter = new AuthRouter("api-auth", authService);

// eslint-disable-next-line no-new
new PassportStrategyInstance(userRepository); // instanciando las estrategias de passport

export default authRouter;
