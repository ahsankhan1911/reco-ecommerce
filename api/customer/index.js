var express = require('express');
const controller = require('./customerController');
const customerMiddleware = require('./customerMiddleware') 

const customerRouter = express.Router();


customerRouter.route('/signup').post( controller.customerSignUp)
module.exports = customerRouter