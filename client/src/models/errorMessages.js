export const ErrorMessages = {
    INTERNAL_SERVER_ERROR: "An internal server error has occurred. Please try again later.",
    UNAUTHORIZED: "You are not authorized to access this page. Please log in.",
    MISSING_PATHS: "Some required fields are empty. Please complete all fields.",
    WRONG_ID_FORMAT: "The ID format is incorrect. Please verify the provided ID.",
    FORBIDDEN: "You do not have permission to perform this action.",
    DUPLICATE_KEY: "The item you are trying to create already exists.",
    NOT_FOUND: "The requested resource was not found.",
    products: {
      PRODUCT_NOT_FOUND: "The requested product was not found.",
    },
    carts: {
      CART_NOT_FOUND: "The requested cart was not found.",
      MISSING_QUANTITY: "Quantity is mandatory for this action in the cart.",
      MISSING_STOCK_TO_PURCHASE: "There is not enough stock to complete the purchase.",
      NOT_LOGGED_IN_TO_BUY: "Oops! You need to log in to add items to your cart.",
    },
    users: {
      USER_NOT_FOUND: "The requested user was not found.",
      DUPLICATE_EMAIL: "The email address is already in use. Please choose another.",
      DUPLICATE_PASSWORD: "The password is already in use. Please choose another.",
      INVALID_EMAIL: "Invalid email address. Please make sure to enter a valid email address with '@' and '.'.",
      INVALID_CREDENTIALS: "Invalid login credentials. Please double-check your email and password and try again.",
    },
    tickets: {
      TICKET_NOT_FOUND: "The requested ticket was not found.",
      DUPLICATE_TICKET_CODE: "The ticket code already exists. Please use another code.",
    },
    DEFAULT_ERROR: "An error has occurred. Please try again.",
  };