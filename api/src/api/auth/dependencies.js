import { MailerService } from "../shared/services/MailerService.js";
import { userRepository } from "../user/infrastructure/dependencies.js";
import { PassportStrategyInstance } from "./config/passportStrategyInstance.js";
import { AuthController } from "./controllers/authController.js";
import { AuthRouter } from "./routes/authRouter.js";

// auth service dependency inyection
const mailerService = new MailerService();
const authController = new AuthController(userRepository, mailerService);
const authRouter = new AuthRouter("api-auth", authController);

// eslint-disable-next-line no-new
new PassportStrategyInstance(userRepository); // instanciando las estrategias de passport

export default authRouter;
