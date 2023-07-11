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
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

cartSchema.pre(/^find/, function (next) {
  this.populate("products.product");
  next();
});

export const cartModel = model("cart", cartSchema);
