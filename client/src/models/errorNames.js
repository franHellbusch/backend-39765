export const ErrorNames = {
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  UNAUTHORIZED: "UNAUTHORIZED",
  MISSING_PATHS: "MISSING_PATHS",
  WRONG_ID_FORMAT: "WRONG_ID_FORMAT",
  FORBIDDEN: "FORBIDDEN",
  DUPLICATE_KEY: "DUPLICATE_KEY",
  NOT_FOUND: "NOT_FOUND",
  products: {
    PRODUCT_NOT_FOUND: "PRODUCT_NOT_FOUND",
  },
  carts: {
    CART_NOT_FOUND: "CART_NOT_FOUND",
    MISSING_QUANTITY: "MISSING_QUANTITY",
    MISSING_STOCK_TO_PURCHASE: "MISSING_STOCK_TO_PURCHASE",
    NOT_LOGGED_IN_TO_BUY: "NOT_LOGGED_IN_TO_BUY"
  },
  users: {
    USER_NOT_FOUND: "USER_NOT_FOUND",
    DUPLICATE_EMAIL: "DUPLICATE_EMAIL",
    DUPLICATE_PASSWORD: "DUPLICATE_PASSWORD",
    INVALID_EMAIL: "INVALID_EMAIL",
    INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
  },
  tickets: {
    TICKET_NOT_FOUND: "TICKET_NOT_FOUND",
    DUPLICATE_TICKET_CODE: "DUPLICATE_TICKET_CODE",
  },
};
