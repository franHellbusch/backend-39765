const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const productSchema = new Schema(
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

productSchema.plugin(mongoosePaginate);

const productModel = model("product", productSchema);

module.exports = productModel;
