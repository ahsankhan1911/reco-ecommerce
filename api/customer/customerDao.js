const customer = require('./customerModel'),
      Exception = require('../../lib/api-model/Exception'),
      randomstring  = require('randomstring');


var checkIfEmailExist = (customerData) => {
    let regex = new RegExp(customerData.email.replace(customerData.email, `^${customerData.email}$`), 'i')
    let query = {email : {'$regex':regex}}
    return customer.findOne(query).then((result) => {
        if(result) { return true;}
        else  { return false;}
    }).catch((error) => {
        throw error
    })
}

var customerLogin = (customerData) => {
    //Email Auth
    let regex = new RegExp(customerData.email.replace(customerData.email, `^${customerData.email}$`), 'i')
    return customer.findOne({ email: { '$regex': regex } }).then((customerOnEmai) => {
        if (customerOnEmai) {
            //Password Auth
            let regex2 = new RegExp(customerOnEmai.email.replace(customerOnEmai.email, `^${customerOnEmai.email}$`), 'i')
            return customer.findOne({ email: { '$regex': regex2 }, password: customerData.password })
                .then((customerOnPass) => {
                    if (customerOnPass) {
                        if(customerOnPass.isActive === false) {
                            throw new Exception(3, "You have been blocked by Admin")
                        }
                        //Adding new accessToken 
                        let regex3 = new RegExp(customerOnPass.email.replace(customerOnPass.email, `^${customerOnPass.email}$`), 'i')

                        let accessToken = randomstring.generate()
                        return customer.findOneAndUpdate({ email: { '$regex': regex3 }, password: customerData.password }, { '$push': { accessToken: accessToken } }, { new: true })
                            .then((loggedIncustomer) => {
                                return { customer: loggedIncustomer, accessToken: accessToken }
                            })
                    }
                    else {
                        throw new Exception(2, "Password does not match");
                    }
                })
        }
        else {
            throw new Exception(1, "No customer found on this email");
        }

    }).catch((error) => {
        throw error;
    })
}

var createcustomer = (customerData) => {
  return checkIfEmailExist(customerData).then((result) => {
       if(result) {
        throw new Exception(1, "customer already exist with this email");
       }
       return customer.create(customerData);
    })
  
}

var customerEditProfile = (customerData) => {
    let set = {}
    let update = {'$set': set}
    let options = {select: {_id: 0 ,name:1, email:1,age:1, gender:1,profilePicture:1,phone:1}, new: true}

    if(customerData.profilePicture)
      set.profilePicture = customerData.profilePicture

    if(customerData.name)
      set.name = customerData.name

    if(customerData.age)
      set.age = customerData.age

    if(customerData.phone)
      set.phone = customerData.phone

    return customer.findByIdAndUpdate(customerData._id, update,options)

}

var customerDetails = (customerData) => {
    return customer.findById(customerData._id, {_id:0 ,name:1, email:1,age:1, gender:1,profilePicture:1,phone:1})
}

var authenticatecustomerAccesstoken = (customerData) => {
    console.log(customerData.accessToken)
    let query = {accessToken :  customerData.accessToken}
    return customer.findOne(query)
}


module.exports = {
    checkIfEmailExist,
    createcustomer,
    customerLogin,
    customerEditProfile,
    customerDetails,
    authenticatecustomerAccesstoken,
}