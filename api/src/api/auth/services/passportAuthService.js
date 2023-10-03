import passport from "passport";
import { ErrorNames } from "../../shared/helpers/ErrorNames.js";
import { logger } from "../../shared/utils/logger.js";
import { User } from "../../user/domain/user.js";

export const passportCall = (strategy, options = {}) => {
  return (req, res, next) => {
    passport.authenticate(strategy, (err, user, info) => {
      if (err) return next(err);
      if (!options.strategyType) {
        logger.info(`Route ${req.url} doesn't have defined a strategyType`);
        return next({ name: ErrorNames.INTERNAL_SERVER_ERROR, status: 500 });
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
