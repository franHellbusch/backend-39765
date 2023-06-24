import passport from "passport";
import { User } from "../../user/domain/user.js";

export class PassportAuthService {
  authCallback(strategy, options = {}) {
    return (req, res, next) => {
      passport.authenticate(strategy, (err, user, info) => {
        if (err) return next(err);
        if (!options.strategyType) {
          console.log(`Route ${req.url} doesn't have defined a strategyType`);
          return res.sendServerError();
        }

        if (!user) {
          switch (options.strategyType) {
            case "jwt":
              req.error = info.message ? info.message : info.toString();
              return next();
            case "locals":
              return next({ message: info.message || info.toString() });
          }
        }

        req.user = { ...new User(user) };
        next();
      })(req, res, next);
    };
  }
}
