var constant = require('../constant');

//========================== Class Definitions Start =====================
class APIResponse{
	constructor(statusCode, result){
		this.statusCode = statusCode;
		if(statusCode == constant.STATUS_CODE.SUCCESS){
			result ? this.responseData = result: constant.EMPTY;
		}
		else{
			result ? this.error = result: constant.EMPTY;
		}
		this.time = new Date().getTime();
	}
}
//========================== Class Definitions End =======================

//========================== Export Module Start ==========================
module.exports = APIResponse;
//========================== Export Module End ============================