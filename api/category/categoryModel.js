const sequelize = require('../../lib/config/dbConfig')
const Sequelize = require('sequelize')
const {Product, Product_Category, Product_Attribute} = require('../product/productModel')
const {Attribute, Attribute_Value} = require('../attributes/attributeModel')


const Category = sequelize.define('category', {
    category_id: {type: Sequelize.INTEGER(11), allowNull: false,primaryKey:true,autoIncrement: true},
    department_id: {type: Sequelize.INTEGER(11), allowNull:false},
    name: {type: Sequelize.STRING(100), allowNull:false },
    description: {type: Sequelize.STRING(1000) ,allowNull:true}
},
{
    version: false,
    timestamps: false,
    initialAutoIncrement: false,
    underscored: true,
 
}) 

// Product.belongsTo(Product_Category, {as: 'category', foreignKey: 'product_id'})
Product_Category.belongsTo(Product, {as: 'product', foreignKey: 'product_id'})
Product_Category.belongsTo(Category, {as: 'category', foreignKey: 'category_id'})
Product_Category.belongsToMany(Product_Attribute, {as: 'attributes', through: 'attribute_value'})

// Product_Category.belongsTo(Category, {as: 'category', foreignKey: 'category_id'})


module.exports = Category