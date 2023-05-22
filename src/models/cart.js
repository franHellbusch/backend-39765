const { Schema, default: mongoose, model } = require("mongoose");

const cartSchema = new Schema(
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

const cartModel = model("cart", cartSchema);

module.exports = cartModel;
