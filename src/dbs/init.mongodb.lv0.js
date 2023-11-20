'use strict'

const mongoose = require('mongoose')

const connectString = 'mongodb://localhost:27017/shopDEV'

mongoose.connect(connectString).then(()=> console.log("Connected to mongodb"))
.catch(err => console.log("Error connecting to mongodb"));

if (1 === 0){
    mongoose.set('debug', true);
    mongoose.set('debug', {color: true});
}

module.exports = mongoose;