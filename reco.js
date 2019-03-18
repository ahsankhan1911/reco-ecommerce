'use strict';
var path = require('path');
// Load .env file
require('dotenv').load({
  path: path.join(__dirname, './.env'),
  silent: true
});

var sequelize = require('./lib/config/dbConfig')
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
const Sequelize = require('sequelize')
var Category = require('./api/category/categoryModel')

var {Product_Category, Product} = require('./api/product/productModel')
var app = express();
var PORT = process.env.PORT || 5000
console.log("Reco app starting on",process.env.NODE_ENV, 'environment')
console.log()


sequelize
  .authenticate()
  .then((data) => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    throw new Error(err);
  });

//Disable x-powered-by response header for appilcation security purpose
app.disable('x-powered-by');

//Compressing static resources
app.use(compression());


//Serving images always from public folder
app.use('/images',express.static('./client/public/images'))


//CORS congif
app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies


//API urls binded
require('./api')(app)


app.get('/', (req, res) => {
  res.send("WELCOME TO RECO APP")
})


app.listen(PORT,  () => {
  console.log('Running server on ' + PORT);
});
