const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            require: true,
        },
        code: {
            type: String,
            require: true,
        },
        status: {
            type: String,
            enum: ["active", "none"],
            default: "active",
        },
        category: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const productModel = model("product", productSchema);

module.exports = productModel;
