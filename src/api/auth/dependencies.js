import { Router } from "express";
import { MongoUserRepository } from "../user/infrastructure/repositories/mongoUserRepository.js";
import { AuthController } from "./controllers/AuthController.js";
import { SessionAuthService } from "./services/sessionAuthService.js";

const router = Router();

// auth service dependency inyection
const userRepository = new MongoUserRepository();
const authService = new SessionAuthService(userRepository);
const authController = new AuthController(authService);

// auth routes
router.post("/login", authController.login); // login

router.post("/register", authController.register); // register

router.post("/logout", authController.logout); // logout

export default router;
