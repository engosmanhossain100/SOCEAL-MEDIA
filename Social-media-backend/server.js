const express = require('express')
require('dotenv').config()
const app = express()
var cors = require('cors')
const router = require("./routes")
const mongoConfig = require("./config/mongoConfig")


mongoConfig();
app.use(cors());
app.use(express.json());
app.use('/', router);


const Port = process.env.PORT || 8000

app.listen(Port)
