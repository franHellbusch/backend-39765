import { ErrorNames } from "@/models/errorNames";

export const errorHandler = (error) => {
  switch (error.name) {
    // GENERIC ERRORS
    case ErrorNames.INTERNAL_SERVER_ERROR:
      error.message =
        "Ha ocurrido un error interno en el servidor. Por favor, inténtalo de nuevo más tarde.";
      break;
    case ErrorNames.UNAUTHORIZED:
      error.message = "No estás autorizado para acceder a esta página. Por favor, inicia sesión.";
      break;
    case ErrorNames.MISSING_PATHS:
      error.message =
        "Algunos campos requeridos están vacíos. Por favor, completa todos los campos.";
      break;
    case ErrorNames.WRONG_ID_FORMAT:
      error.message = "El formato del ID es incorrecto. Por favor, verifica el ID proporcionado.";
      break;
    case ErrorNames.FORBIDDEN:
      error.message = "No tienes permiso para realizar esta acción.";
      break;
    case ErrorNames.DUPLICATE_KEY:
      error.message = "El elemento que intentas crear ya existe.";
      break;
    case ErrorNames.NOT_FOUND:
      error.message = "No se ha encontrado el recurso solicitado.";
      break;

    // PRODUCTS
    case ErrorNames.products.PRODUCT_NOT_FOUND:
      error.message = "El producto solicitado no se ha encontrado.";
      break;

    // CARTS
    case ErrorNames.carts.CART_NOT_FOUND:
      error.message = "El carrito solicitado no se ha encontrado.";
      break;
    case ErrorNames.carts.MISSING_QUANTITY:
      error.message = "La cantidad es obligatoria para esta acción en el carrito.";
      break;
    case ErrorNames.carts.MISSING_STOCK_TO_PURCHASE:
      error.message = "No hay suficiente stock para completar la compra.";
      break;

    // USERS
    case ErrorNames.users.USER_NOT_FOUND:
      error.message = "El usuario solicitado no se ha encontrado.";
      break;
    case ErrorNames.users.DUPLICATE_EMAIL:
      error.message = "El correo electrónico ya está en uso. Por favor, elige otro.";
      break;
    case ErrorNames.users.DUPLICATE_PASSWORD:
      error.message = "La contraseña ya esta en uso. Por favor, elige otra.";
      break;
    case ErrorNames.users.INVALID_EMAIL:
      error.message =
        "Invalid email address. Please make sure to enter a valid email address with '@' and '.'";
      break;
    case ErrorNames.users.INVALID_CREDENTIALS:
      error.message =
        "Invalid login credentials. Please double-check your username and password and try again.";
      break;

    // TICKETS
    case ErrorNames.tickets.TICKET_NOT_FOUND:
      error.message = "El ticket solicitado no se ha encontrado.";
      break;
    case ErrorNames.tickets.DUPLICATE_TICKET_CODE:
      error.message = "El código de ticket ya existe. Por favor, utiliza otro código.";
      break;

    // DEFAULT ERROR
    default:
      console.log(error);
      error.message = "Ha ocurrido un error. Por favor, inténtalo de nuevo.";
  }

  return error;
};
