const sequelize = require('../../lib/config/dbConfig')
const Sequelize = require('sequelize')
const Category = require('../category/categoryModel')

const Product = sequelize.define('product', {

    product_id : {type: Sequelize.INTEGER(11),allowNull: false, primaryKey: true,  autoIncrement: true,foreignKey:true},
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
    initialAutoIncrement: false,
    underscored: true,
    // associations : function (models) {
    //     Product.hasOne(models.Category, {as: 'category', foreignKey: 'category_id'})
    // },
    // defaultScope: function () {
    //     return {
    //       include: [
    //         { model: Category, as: 'category' },
    //       ]
    //     };
    //   },
})

// Product.hasOne(Category, {as: 'category', foreignKey: 'product_id'})

// Product.associate = models => {
    
// }

const Product_Attribute = sequelize.define('product_attribute', {
    product_id : {type: Sequelize.INTEGER(11), 
        // references: {model : 'product', key: 'product_id'}
    },
    attribute_value_id: {type: Sequelize.INTEGER(11), references: {model : 'attribute_value', key: 'attribute_value_id'}}
})

const Product_Category = sequelize.define('product_category', {
    product_id : {type: Sequelize.INTEGER(11), primaryKey: true
        // references: {model : 'product', key: 'product_id'}
    },
    category_id: {type: Sequelize.INTEGER(11), primaryKey: true
        // references: {model : 'category', key: 'category_id'}, foreignKey: true
    }

},
{
    version: false,
    timestamps: false,
    initialAutoIncrement: false,
    underscored: true,
})

// Product.hasMany(Product_Category)

// Product.associate  =  models => {
//     Product.hasOne(models.Category, {as: 'category', foreignKey: 'category_id'})
// }

module.exports = { 
    Product,
    Product_Attribute,
    Product_Category 

}
