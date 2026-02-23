const express = require("express");
const router = express.Router();
const {isAuth} = require("../middleware/auth");
const {generateThumbnail, getThumbnailHistory} = require("../controllers/thumbnail.controller");



router.post("/generate", isAuth, generateThumbnail);
router.get("/history", isAuth, getThumbnailHistory);


module.exports = router;