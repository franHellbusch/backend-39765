export class UserController {
  constructor(userUC) {
    this.userUC = userUC;
  }

  postUser = async (req, res, _next) => {
    const user = await this.userUC.createUser(req.body);
    res.sendSuccessWithPayload(200, user);
  };

  getUser = async (req, res, _next) => {
    const { email } = req.query;
    const user = await this.userUC.sendUser(email);
    res.sendSuccessWithPayload(200, user);
  };
}
