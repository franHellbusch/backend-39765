import httpStatus from "http-status";
import CustomErrorHandler from "../../../shared/helpers/CustomErrorHanlder.js";
import { ErrorNames } from "../../../shared/helpers/ErrorNames.js";
import { HttpError } from "../../../shared/helpers/HttpError.js";

class UserCustomErrorHandler extends CustomErrorHandler {
  constructor() {
    super();
    this.errorHandlers.set(ErrorNames.NOT_FOUND, this.handleUserNotFoundError);
    this.errorHandlers.set(
      ErrorNames.DUPLICATE_KEY,
      this.handleDuplicateEmailError
    );
    this.errorHandlers.set(
      ErrorNames.users.DUPLICATE_PASSWORD,
      this.handleDuplicatePasswordError
    );
    this.errorHandlers.set(
      ErrorNames.users.INVALID_EMAIL,
      this.handleInvalidEmailError
    );
    this.errorHandlers.set(
      ErrorNames.users.INVALID_CREDENTIALS,
      this.handleInvalidCredentialsError
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
      "Email address is already in use. Please choose a different one";
    return HttpError.createError(
      { message, name: ErrorNames.users.DUPLICATE_EMAIL },
      httpStatus.CONFLICT
    );
  }

  handleDuplicatePasswordError(_err) {
    const message = "Can't be the same password. Please choose a different one";
    return HttpError.createError(
      { message, name: ErrorNames.users.DUPLICATE_PASSWORD },
      httpStatus.CONFLICT
    );
  }

  handleInvalidEmailError(_err) {
    const message = "Invalid email, please enter a valid one";
    return HttpError.createError(
      { message, name: ErrorNames.users.INVALID_EMAIL },
      httpStatus.BAD_REQUEST
    );
  }

  handleInvalidCredentialsError(_err) {
    const message = "Invalid credentials";
    return HttpError.createError(
      { message, name: ErrorNames.users.INVALID_CREDENTIALS },
      httpStatus.UNAUTHORIZED
    );
  }
}

export default new UserCustomErrorHandler();
