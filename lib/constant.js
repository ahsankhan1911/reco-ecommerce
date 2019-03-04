const STATUS_CODE = {
	ERROR: 0,
	SUCCESS: 1
}


const MESSAGES = {
	INTERNAL_SERVER_ERROR: "Please try after some time.",
	UNAUTHORIZED_ACCESS: "Your session has been expired.",
	ACCESS_FORBIDDEN: "Access forbidden.",
	VALIDATION_ERROR: "Validation error.",
	TOKEN_GENERATING_ERROR: "Error while generating access token.",
	INVALID_EMAIL: "Please fill valid email address.",
	INVALID_PASSWORD: "Password needs to have at least one lower case, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.",
	DATA_NOT_FOUND: "No data found.",
	SOMETHING_WENT_WRONG: "Something went wrong."
}

//========================== Export Module Start ==========================
module.exports = Object.freeze({
	STATUS_CODE: STATUS_CODE,
	MESSAGES: MESSAGES,
});
//========================== Export Module End ============================
