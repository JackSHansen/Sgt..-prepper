/* Product model: fetch product lists and details from API.
   Exports: getList(category), getDetails(productId)
*/

import { request } from "../services/fetch.js"

/**
 * Get products for a category.
 * @param {string} category
 * @returns {Promise<Array>} array of products or empty array on error
 */
export const getList = async (category) => {
    const url = `http://localhost:4000/api/products/${category}`
    try {
        const data = await request(url)
        if (!Array.isArray(data)) {
            console.warn('productModel.getList: forventede array, fik:', data)
            return []
        }
        return data
    } catch (error) {
        console.warn('Fejl i productModel.getList:', error?.message || error)
        return []
    }
}

/**
 * Get details for a single product by id.
 * @param {string} product
 * @returns {Promise<Object|null>} product object or null on error
 */
export const getDetails = async (product) => {
    const url = `http://localhost:4000/api/products/byId/${product}`
    try {
        const data = await request(url)
        return data
    } catch (error) {
        console.warn('Fejl i productModel.getDetails:', error?.message || error)
        return null
    }
}