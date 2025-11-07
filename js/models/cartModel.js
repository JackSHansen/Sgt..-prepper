/* Cart model: get/add/remove items in cart. */

import { request } from "../services/fetch.js"

const url = `http://localhost:4000/api/cart`

/** Return cart items array. */
export const getCartList = async () => {
    try {
        const data = await request(url)
        if (!Array.isArray(data)) return []
        return data
    } catch (error) {
        console.warn('Fejl i kald af indkøbskurv model liste:', error?.message || error)
        return []
    }
}

/** Add an item to cart. */
export const addToCart = async (productId, quantity) => {
    console.log({productId}, {quantity});
    try {
        const data = await request(url, 'POST', { productId, quantity })
        return data
    } catch (error) {
        console.error(`Fejl i cart model addToCart: ${error}`);
    }
}

/** Remove cart item by id. */
export const removeFromCart = async id => {
    try {
        const data = await request(`${url}/${id}`, 'DELETE')
        if(data.message) {
            location.reload()
        }
    } catch (error) {
        console.error(error);
    }
}