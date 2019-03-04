
const appUtils = require('../../lib/appUtils'),
      _ = require('lodash'),
      customerDao = require('./customerDao'),
      customException = require('../../lib/customException'),
	  constant = require('../../lib/constant'),
	  multer  = require('multer'),
	  storage = multer.diskStorage({
		  
		destination: function (req, file, cb) {
		  cb(null, 'client/public/images/customers')
		},
		filename: function (req, file, cb) {
			console.log(file)
			//  let date = new Date()
			 let extension = file.mimetype.replace('image/', '')
			 let name = req.body.name.replace(' ', '') + '-' + new Date() + '.' + extension
			// console.log(file.s)
		  cb(null, name)
		}
	  }),
	  upload = multer({ storage: storage });
	  


var uploadcustomerProfilePicture =   upload.single('customerProfilePicture')


var validateSignUp = function(request, response, next){
	let {name, email, password,gender} = request.body;
	var errors = [];
    var genders = ['male', 'female','other']

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

	if(!genders.find((gen) => gen === gender)){
		errors.push({fieldName:'gender', message:"Gender can't be other than male,female and other"});
	}
	
	if(errors && errors.length > 0){
		validationError(errors, next);
	}
	next();
}

var authenticatecustomerAccesstoken = (request, response,next) => {
   let {accessToken} = request.query
   customerDao.authenticatecustomerAccesstoken({accessToken}).then((result) => {
	   if(result) {
		   next()
	   }

	else {
		return next(customException.customErrorException(constant.MESSAGES.ACCESS_FORBIDDEN, null));
	   }
   })
   
}


var validationError = function(errors, next){
	if(errors && errors.length > 0){
		return next(customException.customErrorException(constant.MESSAGES.VALIDATION_ERROR, errors));
	}
	next();
}

module.exports = {
	validateSignUp,
	authenticatecustomerAccesstoken,
	uploadcustomerProfilePicture
}