const sequelize = require('../../lib/config/dbConfig')
const Sequelize = require('sequelize')

const Product = sequelize.define('product', {

    product_id : {type: Sequelize.INTEGER(11),allowNull: false, primaryKey: true,  autoIncrement: true},
    name : {type : Sequelize.STRING(100), allowNull: false},
    description: {type : Sequelize.STRING(1000), allowNull: false},
    price: {type : Sequelize.DECIMAL(10,2), allowNull: false},
    discounted_price : {type : Sequelize.DECIMAL(10,2), allowNull: false},
    image : {type : Sequelize.STRING(150), defaultValue: null},
    image_2 : {type : Sequelize.STRING(150), defaultValue:null},
    thumbnail:{type : Sequelize.STRING(150), defaultValue:null},
    display: {type : Sequelize.SMALLINT(6), allowNull:false}
}, {
    version: false,
    timestamps: false,
    initialAutoIncrement: false
})

const Product_Attribute = sequelize.define('product_attribute', {
    product_id : {type: Sequelize.INTEGER(11), primaryKey: true},
    attribute_value_id: {type: Sequelize.INTEGER(11), primaryKey: true}
})

const Product_Category = sequelize.define('product_category', {
    product_id : {type: Sequelize.INTEGER(11), primaryKey: true},
    category_id: {type: Sequelize.INTEGER(11), primaryKey: true}
})


module.exports = { 
    Product,
    Product_Attribute,
    Product_Category 

}
