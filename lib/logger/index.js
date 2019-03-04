var bunyan = require('bunyan'),
	_ = require('lodash');

var logger,
	streams;

const TAG = {
		REQUEST: 'tracilence-request',
		RESPONSE: 'tracilence-response',
		DEBUG: 'tracilence-debug',
		ERROR: 'tracilence-error',
		MESSAGE: 'tracilence-message'
	},
	_debug = require('debug');
	errLog = _debug(TAG.ERROR);

var initialize = _.once(function(){
	if(process.env.NODE_ENV === 'dev' || process.env.NODE_ENV){
		var bunyanDebugStream = require('bunyan-debug-stream');
		streams = [{
				level: 'error',
				type: 'raw',
				stream: bunyanDebugStream({
					basepath: __dirname + '/..' // this should be the root folder of your project.
				})
			}, {
				level: 'warn',
				type: 'raw',
				stream: bunyanDebugStream({
					basepath: __dirname + '/..' // this should be the root folder of your project.
			})
		}];
	}
	else{
		streams = [{
				level: 'error',
				path: 'logs.log'
			}, {
				level: 'warn',
				path: 'logs.log'
			}, {
				level: 'info',
				path: 'logs.log'
		}];
	}

	logger = bunyan.createLogger({
		name: 'tracilenceLog',
		streams: streams,
		serializers: {
			req: bunyan.stdSerializers.req,
			res: bunyan.stdSerializers.res,
			err: bunyan.stdSerializers.err
		}
	});
});

initialize();

/**
 * Log Incoming Request
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function requestLogger(req, res, next){
	//Skip Logging for Swagger Page Load Requests
	if(_.includes(req.url, '/docs')){
		return next();
	}
	req.received_at = new Date();
	res.req = req;
	log(TAG.REQUEST, ['======================= [time] Request ID : ', seq , ' ===========================']);
	logOnRequestReceive( req );
	log(TAG.REQUEST, '=================================================================================');
	req.seq = seq++;
	res.req = req;
	next();
}

/**
 *Log Incoming Request
 * @param req
 */
function logOnRequestReceive(req){
	var reqData = {
		path: req.path,
		headers: req.headers,
	};
	//Extract Data from Request
	(req.connection) ? reqData.headers.ip = req.connection.remoteAddress: null;
	(!_.isEmpty(req.query)) ? reqData.query = req.query: null;
	(!_.isEmpty(req.body)) ? reqData.body = req.body: null;
	(!_.isEmpty(req.params)) ? reqData.params = req.params: null;
	(!_.isEmpty(req.files)) ? reqData.files = req.files: null;
	req.data = reqData;
	log(TAG.REQUEST, reqData);
}

/**
 * Log  Response
 * @param req
 * @param data
 */
function logResponse(res, data){
	if(!res.req || !res.req.data){
		return;
	}
	var req = res.req;
	(!_.isEmpty(req.files)) ? req.data.files = req.files: null;
	data.timeTakenInMs = new Date().getTime() - (req.received_at ? req.received_at.getTime() : new Date().getTime());
	//Delete Unnecessary Stuff
	delete req.data.headers;
	var resData = data.result;
	delete data.result;
	data.result = resData;  //This is done to keep result at bottom in object
	//Logging
	log(TAG.RESPONSE, ['======================= [time] Response for Request ID : ', req.seq , ' ===================']);
	log(TAG.RESPONSE, '----Request---');
	log(TAG.RESPONSE, req.data);
	log(TAG.RESPONSE, '----Response---');
	log(TAG.RESPONSE, data);
	log(TAG.RESPONSE, '=================================================================================');
}

/**
 * Log Incoming Request Data
 * @param data
 * @param tag
 */
function log(tag, data){
	//No Tag
	if(_.isEmpty(data)){
		data = tag;
		tag = TAG.MESSAGE;
	}
	//No Array
	if(data.length == 1){
		data = _.first(data); //Extract single element
	}
	//Print Error in case of Error
	if(data instanceof Error){
		return errLog(data.stack);
	}
	//Log
	_debug(tag)( _getLoggableData(data));
}

/**
 * Logs Data only in debug mode
 * @param data
 */
function debug(data){
	log(data, TAG.DEBUG);
}

/**
 * Get Loggable Version of Data to logged
 * @param data
 * @returns {*}
 * @private
 */
function _getLoggableData(data){
	var to_log = _.clone(data);
	//Convert to String if Array
	to_log = to_log instanceof Array ? to_log.join('') : to_log ;
	if(typeof to_log == 'string')
		to_log = to_log.replace('[time]' , 'Time : '+ new Date());
	return to_log;
}

module.exports = {
	logger,
	requestLogger
}