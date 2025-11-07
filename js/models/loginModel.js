import { request } from "../services/fetch.js"

/* Login model: authenticate against API. */

/**
 * Authenticate user.
 * @param {string} username
 * @param {string} password
 * @returns {Promise<Object>} token object or throws
 */
export const Authenticate = async (username, password) => {
    try {
        const url = `http://localhost:4000/api/auth/login`
        const data = await request(url, 'POST', { username, password })
        return data
    } catch (error) {
        console.error(error)
    }
}