/* Category model: fetch categories list. */

import { request } from "../services/fetch.js"

/**
 * Fetch categories.
 * @returns {Promise<Array>} array of categories or [] on error
 */
export const getList = async () => {
    const url = 'http://localhost:4000/api/categories'
    try {
        const data = await request(url)
        if (!Array.isArray(data)) {
            console.warn('categoryModel.getList: forventede array, fik:', data)
            return []
        }
        return data
    } catch (error) {
        console.warn('Fejl i categoryModel.getList:', error?.message || error)
        return []
    }
}