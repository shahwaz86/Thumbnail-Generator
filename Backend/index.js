const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user.routes");
const thumbnailRouter = require("./routes/thumbnail.routes");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: "https://thumbnail-generator-eta.vercel.app",
  credentials: true,
}));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRouter);
app.use("/api/thumbnail", thumbnailRouter);

module.exports = app;