const axios = require('axios');
const responseHandler = require('../../lib/responseHandler');
const productDoa = require('./productDao.js')

exports.addProduct = (request, response) => {

   
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