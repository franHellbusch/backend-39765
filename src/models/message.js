const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const messageModel = model("message", messageSchema);

module.exports = messageModel;
