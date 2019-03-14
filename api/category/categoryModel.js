const sequelize = require('../../lib/config/dbConfig')
const Sequelize = require('sequelize')
const {Product, Product_Category} = require('../product/productModel')


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
    // associations : function (model) {
    //     Category.hasMany(model.Product, {as: 'products', foreignKey: 'product_id'})
    // }
}) 

// Product.belongsTo(Product_Category, {as: 'category', foreignKey: 'product_id'})
Product_Category.hasOne(Product, {as: 'product', foreignKey: 'product_id'})
Product_Category.hasOne(Category, {as: 'category', foreignKey: 'category_id'})
// Category.hasMany(Product, {as: 'products', foreignKey:'product_id'})
// Category.associate  =  models => {
// Category.hasMany(models.Product, {as: 'products', foreignKey: 'product_id'})
// }
// Category.hasMany(Product)

module.exports = Category