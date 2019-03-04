var express = require('express');
const controller = require('./customerController');
const customerMiddleware = require('./customerMiddleware') 
var multer = require('multer');

const customerRouter = express.Router();


customerRouter.route('/signup').post( [customerMiddleware.validateSignUp], controller.customerSignup)
customerRouter.route('/login').post(controller.customerLogin)
customerRouter.route('/details/:_id').get([customerMiddleware.authenticatecustomerAccesstoken], controller.customerDetails)
customerRouter.route('/edit-profile/:_id').post([customerMiddleware.authenticatecustomerAccesstoken, customerMiddleware.uploadcustomerProfilePicture], controller.customerEditProfile)


module.exports = customerRouter