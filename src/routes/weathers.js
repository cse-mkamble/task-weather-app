const express = require("express");
const router = express.Router();
const weatherController = require("../controller/weathers");

router.post("/add-weather", weatherController.postAddWeather);
router.get("/all-weather", weatherController.getAllWeather);

module.exports = router;
