var Exception = require('./api-model/Exception'),
	constant = require('./constant');

//========================== Export Module Start ==========================
module.exports = {
	internalServerErrorException: function(error){
		return new Exception(1, constant.MESSAGES.INTERNAL_SERVER_ERROR, error);
	},
	unauthorizeAccessException: function(error){
		return new Exception(2, constant.MESSAGES.UNAUTHORIZED_ACCESS, error);
	},
	accessForbiddenException: function(){
		return new Exception(3, constant.MESSAGES.ACCESS_FORBIDDEN);
	},
	customErrorException: function(errorMessage, error){
		return new Exception(4, errorMessage, error);
	},
	tokenGeneratingErrorException: function(error){
		return new Exception(5, constant.MESSAGES.TOKEN_GENERATING_ERROR, error);
	},
	dataNotFoundException: function(){
		return new Exception(8, constant.MESSAGES.DATA_NOT_FOUND);
	},
	someThingWentWrongException(){
		return new Exception(11, constant.MESSAGES.SOMETHING_WENT_WRONG);
	}
}
//========================== Export Module End ============================