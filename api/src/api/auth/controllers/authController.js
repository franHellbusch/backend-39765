import { mailerService } from "../../shared/services/MailerService.js";
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

  restore = async (req, res, _next) => {
    await mailerService.sendEmail({
      to: req.body.email,
      subject: "Restore password",
      text: "Click next link to restore your password",
      html: `<a href='https://google.com'>this link</a>`,
    });

    res.sendSuccess(200, "Email successfully sent");
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
