// import OpenAI from "openai";
// import Thumbnail from "../models/Thumbnail.js";

const OpenAI = require("openai");
const Thumbnail = require("../models/thumbnail");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateThumbnail = async (req, res) => {
  try {
    const { prompt, style } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    const finalPrompt = `
      Create a high-quality ${style} thumbnail.
      Topic: ${prompt}
      Bright colors, bold text, cinematic lighting,
      high contrast, professional YouTube-style design,
      16:9 aspect ratio.
    `;

    const imageResponse = await openai.images.generate({
      model: "gpt-image-1",
      prompt: finalPrompt,
      size: "1024x1024",
    });

    const imageUrl = imageResponse.data[0].url;

    // Save to MongoDB
    const thumbnail = await Thumbnail.create({
      user: req.user.id,
      prompt,
      style,
      imageUrl,
    });

    res.status(200).json({
      image: thumbnail.imageUrl,
    });
  } catch (error) {
    console.error("Thumbnail generation error:", error);
    res.status(500).json({ message: "Thumbnail generation failed" });
  }
};