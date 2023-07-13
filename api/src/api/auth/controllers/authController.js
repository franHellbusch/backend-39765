import { generateToken } from "../../shared/utils/index.js";

export class AuthController {
  login = async (req, res, _next) => {
    const token = generateToken(req.user);
    res
      .cookie("authToken", token, {
        maxAge: 1000 * 3600 * 24,
        httpOnly: true,
      })
      .sendSuccessWithPayload(200, req.user);
  };

  register = async (req, res, _next) => {
    const token = generateToken(req.user);
    res
      .cookie("authToken", token, {
        maxAge: 1000 * 3600 * 24,
        httpOnly: true,
      })
      .sendSuccessWithPayload(200, req.user);
  };

  currentUser = async (req, res, _next) => {
    res.sendSuccessWithPayload(200, req.user);
  };

  logout = async (_req, res, _next) => {
    res.clearCookie("authToken");
    res.sendSuccess(200, "Success logout");
  };
}
