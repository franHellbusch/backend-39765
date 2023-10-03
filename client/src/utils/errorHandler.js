import { ErrorNames } from "@/models/errorNames";
import { ErrorMessages } from "@/models/errorMessages";

export const errorHandler = (error) => {
  switch (error.name) {
    // GENERIC ERRORS
    case ErrorNames.INTERNAL_SERVER_ERROR:
      error.message = ErrorMessages.INTERNAL_SERVER_ERROR;
      break;
    case ErrorNames.UNAUTHORIZED:
      error.message = ErrorMessages.UNAUTHORIZED;
      break;
    case ErrorNames.MISSING_PATHS:
      error.message = ErrorMessages.MISSING_PATHS;
      break;
    case ErrorNames.WRONG_ID_FORMAT:
      error.message = ErrorMessages.WRONG_ID_FORMAT;
      break;
    case ErrorNames.FORBIDDEN:
      error.message = ErrorMessages.FORBIDDEN;
      break;
    case ErrorNames.DUPLICATE_KEY:
      error.message = ErrorMessages.DUPLICATE_KEY;
      break;
    case ErrorNames.NOT_FOUND:
      error.message = ErrorMessages.NOT_FOUND;
      break;

    // PRODUCTS
    case ErrorNames.products.PRODUCT_NOT_FOUND:
      error.message = ErrorMessages.products.PRODUCT_NOT_FOUND;
      break;

    // CARTS
    case ErrorNames.carts.CART_NOT_FOUND:
      error.message = ErrorMessages.carts.CART_NOT_FOUND;
      break;
    case ErrorNames.carts.MISSING_QUANTITY:
      error.message = ErrorMessages.carts.MISSING_QUANTITY;
      break;
    case ErrorNames.carts.MISSING_STOCK_TO_PURCHASE:
      error.message = ErrorMessages.carts.MISSING_STOCK_TO_PURCHASE;
      break;

    // USERS
    case ErrorNames.users.USER_NOT_FOUND:
      error.message = ErrorMessages.users.USER_NOT_FOUND;
      break;
    case ErrorNames.users.DUPLICATE_EMAIL:
      error.message = ErrorMessages.users.DUPLICATE_EMAIL;
      break;
    case ErrorNames.users.DUPLICATE_PASSWORD:
      error.message = ErrorMessages.users.DUPLICATE_PASSWORD;
      break;
    case ErrorNames.users.INVALID_EMAIL:
      error.message = ErrorMessages.users.INVALID_EMAIL;
      break;
    case ErrorNames.users.INVALID_CREDENTIALS:
      error.message = ErrorMessages.users.INVALID_CREDENTIALS;
      break;

    // TICKETS
    case ErrorNames.tickets.TICKET_NOT_FOUND:
      error.message = ErrorMessages.tickets.TICKET_NOT_FOUND;
      break;
    case ErrorNames.tickets.DUPLICATE_TICKET_CODE:
      error.message = ErrorMessages.tickets.DUPLICATE_TICKET_CODE;
      break;

    // DEFAULT ERROR
    default:
      error.message = ErrorMessages.DEFAULT_ERROR;
  }

  return error;
};