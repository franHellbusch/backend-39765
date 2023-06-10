import { User } from "../domain/user.js";

export class UserUC {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  createUser = async (user) => {
    const userInfo = await this.userRepository.save(user);
    return new User(userInfo);
  };

  sendUser = async (email) => {
    const userInfo = await this.userRepository.getByParams({ email });
    return new User(userInfo);
  };
}
