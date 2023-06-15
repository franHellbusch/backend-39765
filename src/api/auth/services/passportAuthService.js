import passport from "passport";

export class PassportAuthService {
  authCallback(strategy) {
    return (req, res, next) => {
      passport.authenticate(strategy, (err, user, info) => {
        if (err) {
          err.service = "api-auth";
          return next(err);
        }
        if (!user) {
          info.service = "api-auth";
          return next(info);
        }
        req.user = user;
        next();
      })(req, res, next);
    };
  }
}
