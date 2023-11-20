
require('dotenv').config()
const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//init db
require('./dbs/init.mongodb')

//check overload
const {checkOverload} = require('./helpers/check.connect')
checkOverload();

//init routers
app.use('/', (req, res, next)=>{
    const testCompression = "Hello world";
    return res.status(500).json({
    message: "hello world",
    testdata: testCompression.repeat(100000)
    });
})
//handle errors



module.exports = app;