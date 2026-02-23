const axios = require("axios");
const FormData = require("form-data");
const cloudinary = require("../utils/cloudinary");
const Thumbnail = require("../models/thumbnail");

const CLIPDROP_URL = "https://clipdrop-api.co/text-to-image/v1";

const generateThumbnail = async (req, res) => {
  try {
    const { prompt, style } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    // 🎯 Prompt optimized for thumbnails
    const finalPrompt = `
      
      ${prompt}.
      Bright colors, bold text,
      high contrast, cinematic lighting,
      professional, eye-catching,
      16:9 aspect ratio.
    `;

    // 🔥 Build form-data (Clipdrop requirement)
    const formData = new FormData();
    formData.append("prompt", finalPrompt);

    // 🔥 Call Clipdrop API
    const clipdropResponse = await axios.post(
      CLIPDROP_URL,
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API_KEY,
          ...formData.getHeaders(),
        },
        responseType: "arraybuffer", // IMPORTANT
      }
    );

    // ✅ Convert response → Buffer
    const imageBuffer = Buffer.from(clipdropResponse.data);

    // ✅ Upload to Cloudinary (stream – safest)
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "ai-thumbnails",
          resource_type: "image",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      stream.end(imageBuffer);
    });

    // ✅ Save in MongoDB
    const thumbnail = await Thumbnail.create({
      user: req.user._id,
      prompt,
      style,
      imageUrl: uploadResult.secure_url,
    });

    return res.status(200).json({
      image: thumbnail.imageUrl,
    });
  } catch (error) {
    console.error(
      "Clipdrop thumbnail generation failed:",
      error.response?.data || error.message
    );

    return res.status(500).json({
      message: "Thumbnail generation failed",
    });
  }
};


// GET thumbnail history for logged-in user
const getThumbnailHistory = async (req, res) => {
  try {
    const thumbnails = await Thumbnail.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.status(200).json(thumbnails);
  } catch (error) {
    console.error("Fetch history error:", error);
    res.status(500).json({ message: "Failed to fetch thumbnail history" });
  }
};

module.exports = { generateThumbnail, getThumbnailHistory };