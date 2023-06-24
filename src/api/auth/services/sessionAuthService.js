import bcrypt from "bcrypt";
import config from "../../shared/config/config.js";

export class SessionAuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  authCallback(strategy) {
    switch (strategy) {
      case "login":
        return this.login;
      case "register":
        return this.register;
      default:
        throw new Error("missing strategy");
    }
  }

  login = async (req, _res, next) => {
    const { email, password } = req.query;
    if (!email || !password) {
      throw new Error("Missing credentials");
    }

    if (email === config.admin.email) {
      if (password !== config.admin.password) {
        throw new Error("Invalid credentials");
      }
      req.session.user = email;
      req.user = {
        email,
        role: "admin",
      };
      req.message = `Admin account login: ${email}`;
      return next();
    }

    const user = await this.userRepository.getByParams({ email });

    const authorized = await bcrypt.compare(password, user.password);
    if (!authorized) {
      throw new Error("Invalid credentials");
    }

    req.session.user = user.email;
    req.user = user;

    next();
  };

  register = async (req, _res, next) => {
    if (req.body.email === config.admin.email) {
      throw new Error("User already exist");
    }
    const user = await this.userRepository.save(req.body);
    req.session.user = user.email;

    req.user = user;

    next();
  };
}
