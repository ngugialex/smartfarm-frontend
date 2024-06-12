const express = require('express');
const router = express.Router();
const { getCurrentWeather, getWeatherForecast } = require('../Controllers/weatherController');
const auth = require('../Middlewares/auth');

// router.get('/current', auth, getCurrentWeather);
// router.get('/forecast', auth, getWeatherForecast);

router.get('/current',  getCurrentWeather);
router.get('/forecast', getWeatherForecast);

module.exports = router;
