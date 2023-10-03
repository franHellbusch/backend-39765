import httpStatus from "http-status";
import CustomErrorHandler from "../../../shared/helpers/CustomErrorHanlder.js";
import { ErrorNames } from "../../../shared/helpers/ErrorNames.js";
import { HttpError } from "../../../shared/helpers/HttpError.js";

class ProductCustomErrorHandler extends CustomErrorHandler {
  constructor() {
    super();
    this.errorHandlers.set(
      ErrorNames.NOT_FOUND,
      this.handleProductNotFoundError
    );
  }

  handleProductNotFoundError(_err) {
    const message =
      "Product not found. Please check the product ID and try again.";
    return HttpError.createError(
      { message, name: ErrorNames.products.PRODUCT_NOT_FOUND },
      httpStatus.NOT_FOUND
    );
  }
}

export default new ProductCustomErrorHandler();
