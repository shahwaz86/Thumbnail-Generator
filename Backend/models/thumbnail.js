const mongoose = require("mongoose");

const thumbnailSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    },
    prompt: {
        type: String,
        required: true,
      

    },

    style: {
        type: String,
        default: "YOUTUBE",

    },

    imageUrl: {
        type: String,
        required: true,

    },
    aiModel: {
        type: String,
        default: "chatgpt"
    }


}, { timestamps: true }
);

const Thumbnail = mongoose.model("Thumbnail", thumbnailSchema);

module.exports = Thumbnail;