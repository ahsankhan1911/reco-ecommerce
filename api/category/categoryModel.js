const sequelize = require('../../lib/config/dbConfig')
const Sequelize = require('sequelize')


const Category = sequelize.define('category', {
    category_id: {type: Sequelize.INTEGER(11), allowNull: false,primaryKey:true,autoIncrement: true},
    department_id: {type: Sequelize.INTEGER(11), allowNull:false},
    name: {type: Sequelize.STRING(100), allowNull:false },
    description: {type: Sequelize.STRING(1000) ,allowNull:true}
}) 

module.exports = Category