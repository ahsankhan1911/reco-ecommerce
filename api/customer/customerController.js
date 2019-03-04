const axios = require('axios');
const mongoose = require('mongoose');
const responseHandler = require('../../lib/responseHandler');
const userDoa = require('./customerDao')


exports.userSignup = (request, response) => {
    let { name, email, password ,gender} = request.body

    userDoa.createUser({name ,email ,password,gender}).then((result) => {
        responseHandler.sendSuccess(response, { responceMessage: "Signup successfully", userId: result._id , accessToken: result.accessToken})
    }).catch((error) => {

        responseHandler.sendError(response, error)
    })

}



exports.userLogin = (request, response) => {
    let {email, password} = request.body
    userDoa.userLogin({email, password}).then((result) => {
        responseHandler.sendSuccess(response, {responceMessage: "Login successfully", userId: result.user._id , accessToken: result.accessToken})

    }).catch((error) => {
        responseHandler.sendError(response, error)
    })
       
  }   

exports.userDetails = (request, response) => {
    let { _id } = request.params
    userDoa.userDetails({ _id }).then((result) => {
        responseHandler.sendSuccess(response, result)
    }).catch((error) => {
        responseHandler.sendError(response, error)
    })

} 

exports.userEditProfile = (request, response) => {
    let {name, age, phone} = request.body
    let {_id }= request.params 
    let  file = request.file
   let profilePicture = `/images/users/${file.filename}` 

    userDoa.userEditProfile({_id, name,profilePicture,age,phone}).then((result) => {
        responseHandler.sendSuccess(response, {message: "user updated successfully !", user : result})
    })
    
} 