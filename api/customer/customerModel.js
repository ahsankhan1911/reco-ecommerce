'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var GeoSchema = new Schema({
//   _id:false,
//   type:{type:String, default:'Point'},
//   coordinates:{type:[Number], index:'2dsphere'}
// });

var UserSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email : {type : String, required: true, unique: true},
  phone: { type: String },
  profilePicture: { type: String ,default: '/images/default_user.jpeg'},
  gender: { type: String, enum: ['male', 'female', 'other'] },
  age: { type: Number },
  isActive: {type: Boolean, default: true},
  accessToken: {type: Array , default: []}

  // location : GeoSchema

},{
  versionKey:false,
  timestamps:true
});


module.exports = mongoose.model('User', UserSchema);

