const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/authController');

router.post('/login', loginUser);
router.post('/register-seed', registerUser); // Use this once to create an admin, then remove or protect

module.exports = router;
