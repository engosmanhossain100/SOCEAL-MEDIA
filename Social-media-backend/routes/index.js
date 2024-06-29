const express = require('express')
require('dotenv').config()
const route = express.Router()
const apiRoute = require("./api")


route.use(process.env.API_URL, apiRoute)

module.exports = route

