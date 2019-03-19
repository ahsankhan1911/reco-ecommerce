const axios = require('axios');
const responseHandler = require('../../lib/responseHandler');
const customerDoa = require('./customerDao')



exports.customerSignUp = (request, response) => {
    let {name, email,password,credit_card,address_1,address_2,city,region,postal_code,country,shipping_region_id,day_phone,eve_phone,mob_phone} = request.body

    customerDoa.customerSignUp({name, email,password,credit_card,address_1,address_2,city,region,postal_code,country,shipping_region_id,day_phone,eve_phone,mob_phone})
    
    .then((result) => {
        var responseData = {
            "responceMessage": "You have successfully created an Account",
            "customer": result
        }
        responseHandler.sendSuccess(response, responseData)
    })
    .catch((error) => {
        responseHandler.sendError(response, error)
    })
}