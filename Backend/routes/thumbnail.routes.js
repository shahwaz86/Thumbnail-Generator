const express = require("express");
const router = express.Router();
const {isAuth} = require("../middleware/auth");
const {generateThumbnail} = require("../controllers/thumbnail.controller");



router.post("/generate", isAuth, generateThumbnail);


module.exports = router;