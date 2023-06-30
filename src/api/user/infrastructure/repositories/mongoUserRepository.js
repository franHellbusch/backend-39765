import { MongoRepository } from "../../../shared/repositories/mongoRepository.js";
import { userModel } from "../models/userModel.js";

export class MongoUserRepository extends MongoRepository {
  constructor(cartRepository) {
    super(userModel);
    this.cartRepository = cartRepository;
  }

  saveUser = async (object) => {
    const user = await this.save(object);
    const cart = await this.cartRepository.save();
    user.cart = cart._id;
    return user.save();
  };
}
