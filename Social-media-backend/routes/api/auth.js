const express = require('express');
const registrationController = require('../../controllers/registrationController');
const loginController = require('../../controllers/loginController');
const linkvarificationController = require('../../controllers/linkvarificationController');

const route = express.Router()

route.post('/registration', registrationController);
route.post('/linkvarification', linkvarificationController);
route.post('/login', loginController);

module.exports = route