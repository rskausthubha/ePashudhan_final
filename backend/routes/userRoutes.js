const express = require('express');

const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userControllers');
const { validateUserRegistration, validateUserLogin, userValidation } = require('../middlewares/validation/userValidation');

// Making post request
router.post('/register', validateUserRegistration, userValidation, registerUser);
router.post('/login', validateUserLogin, userValidation, loginUser);

module.exports = router;