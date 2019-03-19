
const appUtils = require('../../lib/appUtils'),
      _ = require('lodash'),
      customerDao = require('./customerDao'),
      customException = require('../../lib/customException'),
	  constant = require('../../lib/constant');
	

var validateSignUp = function(request, response, next){
        let {name, email, password,shipping_region_id} = request.body;
        var errors = [];
    
        if(_.isEmpty(name)){
            errors.push({fieldName:'name', message:"Please enter your name"});
        }
        email = _.toLower(email);
        if(_.isEmpty(email)){
            errors.push({fieldName:'email', message:"Please enter your email"});
        }
        if(!appUtils.isValidEmail(email)){
            errors.push({fieldName:'email', message:"Please provide a valid email"});
        }
        if(_.isEmpty(password)){
            errors.push({fieldName:'password', message:"Please enter your password"});
        }

        if(_.isEmpty(shipping_region_id)){
            errors.push({fieldName:'shipping_region_id', message:"Please enter shipping_region_id"});
        }
    

        if(errors && errors.length > 0){
            validationError(errors, next);
        }
        next();
    }



var validationError = function(errors, next){
        if(errors && errors.length > 0){
            return next(customException.customErrorException(constant.MESSAGES.VALIDATION_ERROR, errors));
        }
        next();
    }
    

module.exports = {
    validateSignUp
}