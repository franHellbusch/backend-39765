export class UserController {
  constructor(userUC) {
    this.userUC = userUC;
  }

  saveUser = async (req, res, next) => {
    try {
      const user = await this.userUC.createUser(req.body);
      res.status(200).json({
        success: true,
        payload: user,
      });
    } catch (err) {
      next(err);
    }
  };

  getUser = async (req, res, next) => {
    try {
      const { email } = req.query;
      const user = await this.userUC.sendUser(email);
      res.status(200).json({
        success: true,
        payload: user,
      });
    } catch (err) {
      next(err);
    }
  };
}
