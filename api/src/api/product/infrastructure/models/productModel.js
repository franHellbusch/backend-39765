import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

export const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "none"],
      default: "active",
    },
    imageUrls: {
      type: [String],
      default: [],
      required: true,
    },
    presentationImage: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

productSchema.pre(/^find/, function (next) {
  if (this.stock > 0) {
    this.status = "active";
  } else {
    this.status = "none";
  }
  next();
});

productSchema.plugin(mongoosePaginate);

export const productModel = model("product", productSchema);
