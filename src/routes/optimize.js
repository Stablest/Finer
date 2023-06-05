const express = require("express");
const router = express.Router();

const { optimizeImage } = require("../controllers/optimize");

router.route("/").post(optimizeImage);

module.exports = router;
