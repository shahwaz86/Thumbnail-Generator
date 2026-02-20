const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/auth");
const {generateThumbnail} = require("../controllers/thumbnail.controller");



router.post("/generate", isAuthenticated, generateThumbnail);


module.exports = router;