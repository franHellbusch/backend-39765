import httpStatus from "http-status";
import CustomErrorHandler from "../../../shared/helpers/CustomErrorHanlder.js";
import { ErrorNames } from "../../../shared/helpers/errorNames.js";
import { HttpError } from "../../../shared/helpers/HttpError.js";

class UserCustomErrorHandler extends CustomErrorHandler {
  constructor() {
    super();
    this.errorHandlers.set(ErrorNames.NOT_FOUND, this.handleUserNotFoundError);
    this.errorHandlers.set(
      ErrorNames.DUPLICATE_KEY,
      this.handleDuplicateEmailError
    );
  }

  handleUserNotFoundError(_err) {
    const message = "Missing credentials";
    return HttpError.createError(
      { message, name: ErrorNames.users.USER_NOT_FOUND },
      httpStatus.NOT_FOUND
    );
  }

  handleDuplicateEmailError(_err) {
    const message =
      "Email address is already in use. Please choose a different one.";
    return HttpError.createError(
      { message, name: ErrorNames.users.DUPLICATE_EMAIL },
      httpStatus.CONFLICT
    );
  }
}

export default new UserCustomErrorHandler();
