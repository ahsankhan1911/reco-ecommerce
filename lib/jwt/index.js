const Promise = require('bluebird')
const jwt =  Promise.promisifyAll(require('jsonwebtoken'))

exports.generateAccessToken = (payload ) => {

   return jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn : process.env.JWT_EXP_TIME});
}

exports.decodeAccessToken = (token ) => {

    return jwt.decode(token, {complete: true})
}

exports.verifyAccessToken = (token ) => {

    return jwt.verify(token,process.env.JWT_SECRET_KEY, {complete: true})
}
