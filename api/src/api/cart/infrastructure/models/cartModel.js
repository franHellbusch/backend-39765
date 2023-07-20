import mongoose, { Schema, model } from "mongoose";

export const cartSchema = new Schema(
  {
    products: [
      {
        quantity: {
          type: Number,
          required: true,
        },
        product: {
          type: mongoose.Types.ObjectId,
          ref: "product",
        },
        subtotal: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

cartSchema.pre("save", function (next) {
  let subtotal = 0;
  this.products.forEach((item) => {
    item.subtotal = item.quantity * item.product.price;
    subtotal += item.subtotal;
  });
  this.total = subtotal;
  next();
});

cartSchema.pre(/^find/, function (next) {
  this.populate("products.product");
  next();
});

export const cartModel = model("cart", cartSchema);
