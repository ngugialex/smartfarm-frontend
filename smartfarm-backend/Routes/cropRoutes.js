const express = require('express');
const router = express.Router();
const { getCropRecommendations } = require('../Controllers/cropController');
const auth = require('../Middlewares/auth');

// router.get('/recommendations', auth, getCropRecommendations);
router.get('/recommendations', getCropRecommendations);


module.exports = router;
