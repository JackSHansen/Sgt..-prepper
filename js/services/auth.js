/* Auth helpers: session storage wrapper and token checks.
   Functions: setSessionItem, getSessionItem, deleteSessionItem,
   getToken, setToken, clearToken, isTokenExpired, isLoggedIn
*/

/** Store value in sessionStorage under name (JSON). */
export const setSessionItem = (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value))
}

/** Read and parse JSON value from sessionStorage. */
export const getSessionItem = name => {
    try {
        const value = sessionStorage.getItem(name)
        return value ? JSON.parse(value) : null
    } catch (error) {
        console.error(error);
        return null
    }
}

/** Remove item from sessionStorage. */
export const deleteSessionItem = name => {
    sessionStorage.removeItem(name)
}

/** Return stored auth token object or null. */
export const getToken = () => {
    return getSessionItem('sgtprepper_token')
}

/** Store token object. */
export const setToken = token => {
    setSessionItem('sgtprepper_token', token)
}

/** Clear token and reload page. */
export const clearToken = () => {
    deleteSessionItem('sgtprepper_token')
    location.reload()
}

/**
 * Check whether JWT accessToken is expired.
 * @param {string} accessToken - JWT access token
 * @returns {boolean}
 */
export const isTokenExpired = accessToken => {
    if(!accessToken) return true

    try {
        const payload = JSON.parse(atob(accessToken.split('.')[1]))
        if(payload.exp && payload.exp * 1000 < Date.now()) {
            return true
        }
        return false
    } catch (error) {
        console.error(error);
    }
}

/** Return true if user is logged in and token not expired. */
export const isLoggedIn = () => {
    const token = getToken()
    if(!token?.accessToken) {
        return false
    }
    if(isTokenExpired(token.accessToken)) {
        clearToken()
        return false
    }
    return true
}