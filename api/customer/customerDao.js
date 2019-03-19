const Customer = require('./customerModel'),
      Exception = require('../../lib/api-model/Exception'),
      randomstring  = require('randomstring'),
      sequelize = require('sequelize')


function checkIfEmailExist (customerData) {
      return Customer.findOne({
               where: {
                     email :  customerData.email
               }
         })
}
function customerSignUp (customerData) {

   return  checkIfEmailExist(customerData).then((result) => {
            if(result)
             throw new Exception(1, "A user already exist with this email")

             return Customer.create(customerData)
      })
           
}
module.exports = {
      customerSignUp
}