/**                           Database Access Object                    */

const { Product, Product_Category, Product_Attribute } = require('./productModel'),
    Exception = require('../../lib/api-model/Exception'),
    randomstring = require('randomstring'),
    Category = require('../category/categoryModel'),
    Sequelize = require('sequelize')

/**
 * @param {number} pageNo pageNo for list
 * @param {number} limit docs to limit
 * @param {string} gender filter for product gender
 * @param {string} category category filter
 * @returns Promise
 * @description All the products on the company
 */
function getProduct(pageNo, limit, gender, category) {

    pageNo = Number(pageNo)
    limit = Number(limit)

    let where = {}

    if (gender) {
        where.gender = gender
    }

    if (category) {
        where.category_id = category
    }

    return Product_Category.findAndCountAll({ where: where })

        .then((data) => {

        let offset = (pageNo - 1) * limit
        let attributes = ['name','price','discounted_price','image','thumbnail','display']
        let attributes2 = ['name']
            return Product_Category.findAll({
                where: where,
                limit: limit,
                offset: offset,
                
                include: [
                    {
                        as: 'product',
                        model: Product,
                        where: { product_id: Sequelize.col('product_category.product_id') },
                        attributes: attributes
                    },

                    {
                        as: 'category',
                        model: Category,
                        where: { category_id: Sequelize.col('product_category.category_id') },
                        attributes: attributes2
                    }

                ],
            }).then((products) => {
                return { result: products, totalRecords: data.count }
            })
        })

}

function viewProduct (productId) {
    let attributes = ['name','price','description','discounted_price','image','image_2','thumbnail','display']
    let attributes2 = ['name']
  return Product_Category.findOne({
        where: { product_id: productId},
        
        include: [
            {
                as: 'product',
                model: Product,
                where: { product_id: Sequelize.col('product_category.product_id') },
                attributes: attributes
            },
            {
                as: 'category',
                model: Category,
                where: { category_id: Sequelize.col('product_category.category_id') },
                attributes: attributes2
            }
        ],
    })
}

module.exports = {
    getProduct,
    viewProduct
}