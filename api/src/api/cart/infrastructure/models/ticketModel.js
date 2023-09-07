import mongoose, { Schema, model } from "mongoose";

export const ticketSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    purchase_datetime: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    amount: {
      type: Number,
      required: true,
    },
    purchaser: {
      type: String,
      required: true,
    },
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
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

ticketSchema.pre(/^find/, function (next) {
  this.populate("products.product");
  next();
});

export const ticketModel = model("ticket", ticketSchema);
