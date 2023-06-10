import { UserUC } from "../application/UserUseCases.js";
import { MongoUserRepository } from "./repositories/mongoUserRepository.js";
import { UserController } from "./controllers/userController.js";
import { Router } from "express";

const router = Router();

// user dependency inyection
const userRepository = new MongoUserRepository();
const userUC = new UserUC(userRepository);
const userController = new UserController(userUC);

// user routes
router.post("/users", userController.saveUser); // POST USER

router.get("/users", userController.getUser); // GET USER BY EMAIL

export default router;
