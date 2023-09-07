import httpStatus from "http-status";
import CustomErrorHandler from "../../../shared/helpers/CustomErrorHanlder.js";
import { ErrorNames } from "../../../shared/helpers/errorNames.js";
import { HttpError } from "../../../shared/helpers/HttpError.js";

class TicketCustomErrorHandler extends CustomErrorHandler {
  constructor() {
    super();
    this.errorHandlers.set(
      ErrorNames.NOT_FOUND,
      this.handleTicketNotFoundError
    );
    this.errorHandlers.set(
      ErrorNames.DUPLICATE_KEY,
      this.handleDuplicateTicketCodeError
    );
  }

  handleTicketNotFoundError(_err) {
    const message =
      "Ticket not found. Please check the ticket ID and try again";
    return HttpError.createError(
      { message, name: ErrorNames.tickets.TICKET_NOT_FOUND },
      httpStatus.CONFLICT
    );
  }

  handleDuplicateTicketCodeError(_err) {
    const message =
      "Ticket code already exists. Please generate a new code for the ticket";
    return HttpError.createError(
      { message, name: ErrorNames.tickets.DUPLICATE_TICKET_CODE },
      httpStatus.CONFLICT
    );
  }
}

export default new TicketCustomErrorHandler();
