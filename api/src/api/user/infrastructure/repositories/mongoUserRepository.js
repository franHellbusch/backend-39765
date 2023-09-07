import { MongoRepository } from "../../../shared/repositories/mongoRepository.js";
import userCustomErrorHandler from "../helpers/UserCustomErrorHandler.js";
import { userModel } from "../models/userModel.js";

export class MongoUserRepository extends MongoRepository {
  constructor(cartRepository) {
    super(userModel, userCustomErrorHandler);
    this.cartRepository = cartRepository;
  }

  saveUser = async (object) => {
    try {
      const user = await this.save(object);
      const cart = await this.cartRepository.save();
      user.cart = cart._id;
      return await user.save();
    } catch (err) {
      throw this.errorHanlder.handleError(err);
    }
  };
}
