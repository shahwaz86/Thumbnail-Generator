// import mongoose from "mongoose";
const mongoose = require("mongoose");

const thumbnailSchema = new mongoose.Schema(
  {
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
      default: "YouTube",
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =  mongoose.model("Thumbnail", thumbnailSchema);
