/**                           Database Access Object                    */

const {Product  } = require('./productModel'),
    Exception = require('../../lib/api-model/Exception'),
    randomstring = require('randomstring');


/**
 * @param {number} pageNo pageNo for list
 * @param {number} limit docs to limit
 * @param {string} gender filter for product gender
 * @param {string} category category filter
 * @returns Promise
 * @description All the products on the company
 */
function getProduct (pageNo, limit, gender, category) {

    pageNo = Number(pageNo)
    limit = Number(limit)

    let where = {}

    if(gender) {
        where.gender = gender
    }

    if(category) {
        where.category = category
    }

   return Product.findAndCountAll({where: where})
    
     .then((data) => {

        let offset =  (pageNo - 1) * limit

      return   Product.findAll({
            where: where,
            limit: limit,
            offset: offset
        }).then((products) => {

            return {result: products , totalRecords: data.count}
        })
     } )

}

    module.exports = {
            getProduct
    }