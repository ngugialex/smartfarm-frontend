const express = require('express');
const router = express.Router();
const cropController = require('../Controllers/cropController');
const authMiddleware = require('../Middlewares/authMiddleware');

router.get('/recommendations', authMiddleware, cropController.getCropRecommendations);

module.exports = router;
