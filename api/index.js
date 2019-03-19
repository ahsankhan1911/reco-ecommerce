const responseHandler = require('../lib/responseHandler')
const adminRouter = require('./admin')
const productRouter = require('./product')



module.exports = function(app){
	app.use('/api/product', productRouter);
	// app.use('/api/category', categoryRouter);


	// Attach ErrorHandler to Handle All Errors
	app.use(responseHandler.handleError);
}