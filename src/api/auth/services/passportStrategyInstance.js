import bcrypt from "bcrypt";
import config from "../../shared/config/config.js";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

export class PassportStrategyInstance {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.registerStrategies();
  }

  registerStrategies = () => {
    passport.use(
      "login",
      new LocalStrategy({ usernameField: "email" }, this.loginLocalStrategy)
    );
    passport.use(
      "register",
      new LocalStrategy(
        {
          usernameField: "email",
          passReqToCallback: true,
        },
        this.registerLocalStrategy
      )
    );

    // serialize and deserialize
    passport.serializeUser((user, done) => {
      done(null, user.email);
    });

    passport.deserializeUser(async (email, done) => {
      const userData = await this.userRepository.getByParams({ email });
      done(null, userData);
    });
  };

  loginLocalStrategy = async (email, password, done) => {
    try {
      if (!email.includes("@") || !email.includes(".")) {
        return done(
          { message: "Invalid email, please enter a valid one" },
          false
        );
      }

      if (email === config.admin.email) {
        if (password !== config.admin.password) {
          return done({ message: "Invalid credentials" }, false);
        }
        return done(null, {
          email,
          role: "admin",
        });
      }

      const findUser = await this.userRepository.getByParams({ email });

      const isMatch = await bcrypt.compare(password, findUser.password);
      if (!isMatch) return done({ message: "Invalid credentials" }, false);

      done(null, findUser);
    } catch (err) {
      done(err, false);
    }
  };

  registerLocalStrategy = async (req, email, password, done) => {
    try {
      if (!email.includes("@") || !email.includes(".")) {
        return done(
          {
            message: "Invalid email, please enter a valid one",
          },
          false
        );
      }

      if (email === config.admin.email) {
        if (password !== config.admin.password) {
          return done({ message: "Invalid credentials" }, false);
        }
        return done(null, {
          email,
          role: "admin",
        });
      }

      const user = await this.userRepository.save(req.body);
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  };
}
