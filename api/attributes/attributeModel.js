const sequelize = require('../../lib/config/dbConfig')
const Sequelize = require('sequelize')
const {Product, Product_Category} = require('../product/productModel')


const Attribute = sequelize.define('attribute', {
    attribute_id: {type: Sequelize.INTEGER(11), allowNull: false,primaryKey:true,autoIncrement: true},
    name: {type: Sequelize.STRING(100), allowNull:false },
},
{
    version: false,
    timestamps: false,
    initialAutoIncrement: false,
    underscored: true,
 
})

const Attribute_Value = sequelize.define('attribute_value', {
    attribute_value_id: {type: Sequelize.INTEGER(11), allowNull: false,primaryKey:true,},
    attribute_id: {type: Sequelize.INTEGER(11), allowNull: false,primaryKey:true,},
    value: {type: Sequelize.STRING(100), allowNull:false },
},
{
    version: false,
    timestamps: false,
    initialAutoIncrement: false,
    underscored: true,
 
}) 

module.exports ={ Attribute, Attribute_Value } 