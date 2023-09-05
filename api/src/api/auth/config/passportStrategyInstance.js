import bcrypt from "bcrypt";
import httpStatus from "http-status";
import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github2";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
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
      "github",
      new GithubStrategy(
        {
          clientID: config.github.clientId,
          clientSecret: config.github.clientSecret,
          callbackURL: config.github.callbackUrl,
          scope: ["user:email"],
          session: false,
        },
        this.githubStrategy
      )
    );

    passport.use(
      "google",
      new GoogleStrategy(
        {
          clientID: config.google.clientId,
          clientSecret: config.google.clientSecret,
          callbackURL: config.google.callbackUrl,
          scope: ["profile", "email"],
          session: false,
        },
        this.googleStrategy
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

  githubStrategy = async (accessToken, refreshToken, profile, done) => {
    try {
      const userData = {
        email:
          profile._json.email ||
          (profile.emails && profile.emails.length > 0
            ? profile.emails[0].value
            : ""),
        displayName: profile.displayName,
        picture: profile._json.avatar_url,
      };

      let user = {};
      try {
        user = await this.userRepository.saveUser(userData);
      } catch (err) {
        if (err.name == httpStatus[`${httpStatus.CONFLICT}_NAME`]) {
          user = await this.userRepository.getByParams({
            email: userData.email,
          });
        } else {
          done(err, false);
        }
      }

      done(null, user);
    } catch (err) {
      done(err, false);
    }
  };

  googleStrategy = async (accessToken, refreshToken, profile, done) => {
    try {
      console.log(profile);
      const userData = {
        email:
          profile._json.email ||
          (profile.emails && profile.emails.length > 0
            ? profile.emails[0].value
            : ""),
        displayName: profile.displayName,
        name: profile._json.given_name || null,
        lastName: profile._json.family_name || null,
        picture: profile._json.picture,
      };

      let user = {};
      try {
        user = await this.userRepository.saveUser(userData);
      } catch (err) {
        if (err.name == httpStatus[`${httpStatus.CONFLICT}_NAME`]) {
          user = await this.userRepository.getByParams({
            email: userData.email,
          });
        } else {
          done(err, false);
        }
      }

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
