const axios = require('axios');
const responseHandler = require('../../lib/responseHandler');
const pointDoa = require('./pointDao.js')


exports.addPoint = (request, response) => {
    let {pointName, pointNumberPlate, latitude , longitude} = request.body;
    
    let pointLocation = {
        coordinates: [latitude,longitude ]
    }

   pointDoa.addPoint({pointName, pointNumberPlate,pointLocation} ).then((result) => {
    responseHandler.sendSuccess(response, {responceMessage: "Point Added successfully", pointId: result._id})

}).catch((error) => {
    responseHandler.sendError(response, error)
})
   
}


exports.receivePointLocation = (request, response) => {

    let {latitude, longitude, pointId} = request.query
    
    socketServer.io.emit('location', {latitude: latitude, longitude: longitude })

       latitude = Number(latitude);
       longitude = Number(longitude);

      pointDoa.updatePointLocation({latitude, longitude, pointId}).then((result) => {
             
        responseHandler.sendSuccess(response, {responceMessage: "Location updated !"})
            
      }).catch((error) => {
        responseHandler.sendError(response, error)
      })

     
}

exports.getNearestPoint = (request, response) => {

    let {latitude, longitude} = request.body

    latitude = Number(latitude);
       longitude = Number(longitude);

   pointDoa.getNearestPoint(latitude, longitude).then((result) => {
        responseHandler.sendSuccess(response, result[0])

   }).catch((error) => {
        responseHandler.sendError(response, error)
})

}