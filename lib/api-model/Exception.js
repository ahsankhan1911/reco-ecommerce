//========================== Class Definitions Start =====================
class Exception{
	constructor(errorCode, message, errStackTrace){
		this.errorCode = errorCode;
		this.errorMessage = message;
		if(errStackTrace){
			this.errors = errStackTrace;
		}
	}
}
//========================== Class Definitions End =======================

//========================== Export Module Start ==========================
module.exports = Exception;
//========================== Export Module End ============================