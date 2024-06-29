const mongoose = require('mongoose');

let mongoConfig = () => {
mongoose
.connect("mongodb+srv://engosmanhossain100:0duuuDFb2GojoaIP@cluster0.xitzwiw.mongodb.net/")
.then(() => console.log('Database Connected!'))
};

module.exports = mongoConfig;