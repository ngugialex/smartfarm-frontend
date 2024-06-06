const express = require('express');
const router = express.Router();
const weatherController = require('../Controllers/weatherController');

router.get('/current', weatherController.getCurrentWeather);
router.get('/forecast', weatherController.getWeatherForecast);

module.exports = router;
