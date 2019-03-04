const axios = require('axios');
const responseHandler = require('../../lib/responseHandler');
const adminDoa = require('./adminDao.js')


exports.addadmin = (request, response) => {
    let {} = request.body;
    


   adminDoa.addadmin({adminName, adminNumberPlate,adminLocation} ).then((result) => {
    responseHandler.sendSuccess(response, {responceMessage: "admin Added successfully", adminId: result._id})

}).catch((error) => {
    responseHandler.sendError(response, error)
})
   
}