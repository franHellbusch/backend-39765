import { MongoRepository } from "../../../shared/repositories/mongoRepository.js";
import { userModel } from "../models/userModel.js";

export class MongoUserRepository extends MongoRepository {
  constructor() {
    super(userModel);
  }
}
