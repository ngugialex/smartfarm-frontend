const express = require('express');
const router = express.Router();
const { register, login, getProfile } = require('../Controllers/authController');
const auth = require('../Middlewares/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', auth, getProfile);

module.exports = router;
