var express = require('express');
const controller = require('./productController');
const productMiddleware = require('./productMiddleware') 

const productRouter = express.Router();

// productRouter.route('/add').post( controller.addProduct)
// productRouter.route('/edit').post( controller.editProduct)
productRouter.route('/view/:productId').get( controller.viewProduct)
productRouter.route('/list/:pageNo/:limit').get( controller.getProducts)



module.exports = productRouter