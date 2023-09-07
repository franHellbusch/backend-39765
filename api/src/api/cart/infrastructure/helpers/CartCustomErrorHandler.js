import httpStatus from "http-status";
import CustomErrorHandler from "../../../shared/helpers/CustomErrorHanlder.js";
import { ErrorNames } from "../../../shared/helpers/errorNames.js";
import { HttpError } from "../../../shared/helpers/HttpError.js";

class CartCustomErrorHandler extends CustomErrorHandler {
  constructor() {
    super();
    this.errorHandlers.set(ErrorNames.NOT_FOUND, this.handleCartNotFoundError);
    this.errorHandlers.set(
      ErrorNames.carts.MISSING_QUANTITY,
      this.handleMissingQuantityError
    );
    this.errorHandlers.set(
      ErrorNames.carts.MISSING_STOCK_TO_PURCHASE,
      this.handleMissingStockToPurchaseError
    );
  }

  handleCartNotFoundError(_err) {
    const message = "Cart not found. Please check the cart ID and try again";
    return HttpError.createError(
      { message, name: ErrorNames.carts.CART_NOT_FOUND },
      httpStatus.CONFLICT
    );
  }

  handleMissingQuantityError(err) {
    const message = "Missing product quantity. Please provide a valid quantity";
    return HttpError.createError(
      { message, name: err.name },
      httpStatus.BAD_REQUEST
    );
  }

  handleMissingStockToPurchaseError(err) {
    const meta = { errors: err.meta };
    const message =
      "Some products have insufficient stock to complete the purchase. Please remove them from your cart or reduce the quantity";
    return HttpError.createError(
      { message, name: err.name },
      httpStatus.UNPROCESSABLE_ENTITY,
      meta
    );
  }
}

export default new CartCustomErrorHandler();
