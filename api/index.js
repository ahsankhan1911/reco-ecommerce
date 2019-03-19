const responseHandler = require('../lib/responseHandler')
const adminRouter = require('./admin')
const productRouter = require('./product')
const customerRouter = require('./customer')



module.exports = function(app){
	app.use('/api/product', productRouter);
	app.use('/api/customer', customerRouter);


	// Attach ErrorHandler to Handle All Errors
	app.use(responseHandler.handleError);
}