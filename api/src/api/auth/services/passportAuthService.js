import passport from "passport";
import { User } from "../../user/domain/user.js";

export const passportCall = (strategy, options = {}) => {
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
            req.error = info;
            return next();
          case "locals":
            return next({ ...info });
        }
      }

      req.user = { ...new User(user) };
      next();
    })(req, res, next);
  };
};
