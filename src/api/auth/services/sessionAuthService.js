import bcrypt from "bcrypt";
import config from "../../shared/config/config.js";

export class SessionAuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  login = async (req) => {
    const { email, password } = req.query;
    if (!email || !password) {
      throw new Error("Missing credentials");
    }

    if (email === config.admin.email) {
      if (password !== config.admin.password) {
        throw new Error("Invalid credentials");
      }
      req.session.user = email;
      return `Admin account login: ${email}`;
    }

    const user = await this.userRepository.getByParams({ email });

    const authorized = await bcrypt.compare(password, user.password);
    if (!authorized) {
      throw new Error("Invalid credentials");
    }

    req.session.user = user.email;

    return email;
  };

  register = async (req) => {
    if (req.body.email === config.admin.email) {
      throw new Error("User already exist");
    }
    const user = await this.userRepository.save(req.body);
    req.session.user = user.email;
    return user.email;
  };

  logout = async (req) => {
    req.session.destroy();
  };
}
