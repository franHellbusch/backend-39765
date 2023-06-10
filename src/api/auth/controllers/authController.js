export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  login = async (req, res, next) => {
    try {
      const user = await this.authService.login(req);
      res.status(200).json({
        success: true,
        payload: user,
      });
    } catch (err) {
      next(err);
    }
  };

  register = async (req, res, next) => {
    try {
      const user = await this.authService.register(req);
      res.status(201).json({
        success: true,
        payload: user,
      });
    } catch (err) {
      next(err);
    }
  };

  logout = async (req, res, next) => {
    try {
      await this.authService.logout(req);
      res.status(200).json({
        success: true,
      });
    } catch (err) {
      next(err);
    }
  };
}
