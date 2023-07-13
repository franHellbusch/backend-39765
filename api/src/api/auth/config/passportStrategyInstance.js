import bcrypt from "bcrypt";
import passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import config from "../../shared/config/config.js";
import { cookieExtractor } from "../../shared/utils/index.js";

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

    passport.use(
      "jwt",
      new JWTStrategy(
        {
          jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
          secretOrKey: config.jwt.secret,
        },
        this.jwtStategy
      )
    );
  };

  loginLocalStrategy = async (email, password, done) => {
    try {
      if (!email.includes("@") || !email.includes(".")) {
        return done(
          { message: "Invalid email, please enter a valid one", status: 401 },
          false
        );
      }

      if (email === config.admin.email) {
        if (password !== config.admin.password) {
          return done({ message: "Invalid credentials", status: 401 }, false);
        }
        return done(null, {
          email,
          role: "admin",
        });
      }

      const findUser = await this.userRepository.getByParams({ email });

      const isMatch = await bcrypt.compare(password, findUser.password);
      if (!isMatch)
        return done({ message: "Invalid credentials", status: 401 }, false);

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
            status: 401,
          },
          false
        );
      }

      if (email === config.admin.email) {
        if (password !== config.admin.password) {
          return done({ message: "Invalid credentials", status: 401 }, false);
        }
        return done(null, {
          email,
          role: "admin",
        });
      }

      const user = await this.userRepository.saveUser(req.body);

      done(null, user);
    } catch (err) {
      done(err, false);
    }
  };

  jwtStategy = async (payload, done) => {
    try {
      done(null, payload);
    } catch (err) {
      done(err, false);
    }
  };
}
