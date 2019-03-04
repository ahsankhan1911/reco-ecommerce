const axios = require('axios');
const responseHandler = require('../../lib/responseHandler');
const productDoa = require('./productDao.js')

exports.addProduct = (request, response) => {
    let {productName, productNumberPlate, latitude , longitude} = request.body;
  

   productDoa.addProduct({productName, productNumberPlate,productLocation} ).then((result) => {
    responseHandler.sendSuccess(response, {responceMessage: "product Added successfully", productId: result._id})

}).catch((error) => {
    responseHandler.sendError(response, error)
})
   
}


exports.getProducts = (request, response) => {
    let { pageNo, limit} = request.params;
    let {gender, category} = request.query;
  

   productDoa.getProduct(pageNo, limit, gender, category).then((result) => {
    responseHandler.sendSuccess(response, result)

}).catch((error) => {
    responseHandler.sendError(response, error)
})
   
}