var constant = require('./constant'),
	customException = require('./customException'),
	logger = require('./logger').logger,
	APIResponse = require('./api-model/APIResponse');

function _sendResponse(response, result){
	// send status code 200
	return response.send(result);
}

function sendError(response, error){
	// if error doesn't has sc than it is an unhandled error,
	// log error, and throw intrnl server error
	if(!error.errorCode){
		logger.error(error, "Unhandled error.");
		error = customException.internalServerErrorException(error);
	}
	else{
		var result = new APIResponse(constant.STATUS_CODE.ERROR, error);
		_sendResponse(response, result);
	}
}

function handleError(error, request, response, next){
	// unhandled error
	sendError(response, error);
}

function sendSuccessWithMessage(response, result){
	var result = new APIResponse(constant.STATUS_CODE.SUCCESS, result);
	_sendResponse(response, result);
}

function sendSuccess(response, result){
	/*if(result.errorCode !== 0){
		sendError(response, result);
	}*/
	var result = new APIResponse(constant.STATUS_CODE.SUCCESS, result);
	_sendResponse(response, result);
}

//========================== Export Module Start ==========================
module.exports = {
	handleError,
	sendError,
	sendSuccess,
	sendSuccessWithMessage
}
//========================== Export Module End ============================