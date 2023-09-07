import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../shared/config/config.js";
import { createHash, generateToken } from "../../shared/utils/index.js";

export class AuthController {
  constructor(userRepository, mailerService) {
    this.userRepository = userRepository;
    this.mailerService = mailerService;
  }

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

  restoreRequest = async (req, res, _next) => {
    const { email } = req.body;
    if (!email) return res.sendError(400, "Bad Request, missing email");
    const user = await this.userRepository.getByParams({ email });
    const restoreToken = generateToken({ email: user.email });

    await this.mailerService.sendEmail({
      to: email,
      subject: "Restore password",
      text: "Click next link to restore your password",
      template: config.sendgrid.templates.restorePassword,
      templateData: {
        restoreLink: `http://localhost:5173/restore-password?restoreToken=${restoreToken}`,
      },
    });

    res.sendSuccess(200, "Email successfully sent");
  };

  restorePassword = async (req, res, _next) => {
    const { password, restoreToken } = req.body;
    const { email } = jwt.verify(restoreToken, config.jwt.secret);
    const user = await this.userRepository.getByParams({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) return res.sendError(400, "Can't be the same password");

    const hashedPassword = await createHash(password);

    await this.userRepository.update(user._id, { password: hashedPassword });

    res.sendSuccess(200, "Password changed");
  };

  githubAuthCallback = (req, res, _next) => {
    const token = generateToken(req.user);
    res
      .cookie("authToken", token, {
        maxAge: 1000 * 3600 * 24,
        httpOnly: true,
      })
      .sendSuccessWithPayload(200, req.user);
  };

  googleAuthCallback = (req, res, _next) => {
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
