var express = require('express');
const controller = require('./pointController');
const pointMiddleware = require('./pointMiddleware') 

const pointRouter = express.Router();

// pointRouter.route('/add').post([pointMiddleware.validateAddPoint], controller.addPoint)

// pointRouter.route('/location').post( controller.receivePointLocation)
// pointRouter.route('/get').get( controller.getNearestPoint)


module.exports = pointRouter