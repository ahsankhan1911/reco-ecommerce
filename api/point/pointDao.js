const Point = require('./pointModel'),
    Exception = require('../../lib/api-model/Exception'),
    randomstring = require('randomstring');


function addPoint (pointData) {
        return Point.create(pointData);
}

/**
 * @param {number} latitute user's latitude
 * @param {number} longitude user's longitude
 * @returns Promise
 * @description Provides the nearest point according to user's location provided in latitude and longitude
 */
function getNearestPoint(latitude, longitude) {
    let aggPipe = []

    let geoNear = { 
        near: { type: "Point", coordinates: [ latitude , longitude ] },
        distanceField: "distance",
        spherical: true
    }

    aggPipe.push({'$geoNear' : geoNear})

    let sort = {
        distance: 1
    }

    aggPipe.push({'$sort': sort})


     return Point.aggregate(aggPipe)
}

function updatePointLocation(pointData) {
    let set = { "pointLocation.coordinates": [pointData.latitude, pointData.longitude]}
    let update = { '$set': set}
    return Point.findByIdAndUpdate(pointData.pointId,update )
}

module.exports = {
    addPoint,
    getNearestPoint,
    updatePointLocation
}