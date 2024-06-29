const express = require('express');
const userController = require('../../controllers/userController');
const linkvarification = require('../../controllers/linkvarification');


const route = express.Router()

route.post('/userController', userController);
route.post('/linkvarification', linkvarification);

module.exports = route