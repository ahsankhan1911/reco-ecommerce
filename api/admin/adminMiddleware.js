
const appUtils = require('../../lib/appUtils'),
_ = require('lodash'),
customException = require('../../lib/customException'),
constant = require('../../lib/constant');


var validateAddPoint = function ( request, response,next) {
  let {pointName, pointNumberPlate, latitude , longitude} = request.body;
	var errors = [];

	if(_.isEmpty(pointName)){
		errors.push({fieldName:'pointName', message:"Please enter point name"});
  }
  
  if(_.isEmpty(pointNumberPlate)){
		errors.push({fieldName:'pointNumberPlate', message:"Please enter point number plate"});
  }
  if(_.isEmpty(latitude)){
		errors.push({fieldName:'latitude', message:"Please enter latitude"});
	}
  
  if(_.isEmpty(longitude)){
		errors.push({fieldName:'longitude', message:"Please enter longitude"});
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
  validateAddPoint
}