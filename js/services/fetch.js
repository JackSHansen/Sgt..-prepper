/* Service: HTTP helper for API calls.
   Exposes `request(url, method, body)` which returns parsed response or throws Error.
*/

import { getToken } from "./auth.js"

/**
 * Send a fetch request and return parsed response.
 * @param {string} url - Full request URL
 * @param {string} [method='GET'] - HTTP method
 * @param {object} [body={}] - Request payload for non-GET calls
 * @throws {Error} when response status is not ok (err.status and err.body set)
 * @returns {Promise<any>} parsed JSON or text
 */
export const request = async (url, method = 'GET', body = {}) => {
    if (!url) throw new Error('Missing url')

    const token = getToken()

    const hasBody = body !== undefined && body !== null && method !== 'GET'

    const options = {
        method, 
        headers: {
            'Accept': 'application/json',        
            'Content-type': 'application/json',  
            ...(token?.accessToken ? { Authorization: `Bearer ${token.accessToken}` } : {})
        },
        ...(hasBody ? { body: JSON.stringify(body) } : {})
    }

    try {
        const response = await fetch(url, options)

        const contentType = response.headers.get('content-type') || ''
        const result = contentType.includes('application/json')
            ? await response.json()
            : await response.text()

        if (!response.ok) {
            const message = result && typeof result === 'object'
                ? (result.message || JSON.stringify(result))
                : String(result)
            const err = new Error(message || `HTTP error ${response.status}`)
            err.status = response.status
            err.body = result
            console.debug('Request failed', { url, method, status: response.status, body: result })
            throw err
        }

        return result
    } catch (error) {
        throw error
    }
}