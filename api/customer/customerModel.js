'use strict';

const sequelize = require('../../lib/config/dbConfig')
const Sequelize = require('sequelize')

const Customer = sequelize.define('customer', {

    customer_id: { type: Sequelize.INTEGER(11), allowNull: false, primaryKey: true, autoIncrement: true, foreignKey: true },
    name: { type: Sequelize.STRING(50), allowNull: false },
    email: { type: Sequelize.STRING(100), allowNull: false , unique: true},
    password: { type: Sequelize.STRING(50), allowNull: false },
    credit_card: { type: Sequelize.TEXT,},
    address_1: { type: Sequelize.STRING(100), defaultValue: null },
    address_2: { type: Sequelize.STRING(100), defaultValue: null },
    city: { type: Sequelize.STRING(100), defaultValue: null },
    region: { type: Sequelize.STRING(100) },
    postal_code: { type: Sequelize.STRING(100) },
    country: { type: Sequelize.STRING(100)},
    shipping_region_id : {type: Sequelize.INTEGER(11) , allowNull: false, foreignKey: true },
    day_phone: { type: Sequelize.STRING(100)},
    eve_phone: { type: Sequelize.STRING(100) },
    mob_phone: { type: Sequelize.STRING(100) },
    is_verified: {type: Sequelize.BOOLEAN, defaultValue: 0 },
    verification_code: {type: Sequelize.INTEGER(4)}

}, {
        version: false,
        timestamps: false,
        initialAutoIncrement: false,
        underscored: true,
}
)


module.exports = Customer

