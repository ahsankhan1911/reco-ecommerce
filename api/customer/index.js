var express = require('express');
const controller = require('./customerController');
const customerMiddleware = require('./customerMiddleware') 

const customerRouter = express.Router();


module.exports = customerRouter