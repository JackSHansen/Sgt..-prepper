/* Cookie banner controller: handle consent storage and banner interactions. */

import { cookieBannerView } from "../views/organisms/cookieBannerView.js"

/** Return cookie banner element wired with event handlers. */
export const cookieBanner = () => {
    const KEY = 'cookieConsent'
    const getConsent = () => JSON.parse(localStorage.getItem(KEY) || null)
    const setConsent = (c) => localStorage.setItem(KEY, JSON.stringify(c))
    const saved = getConsent()
    const banner = cookieBannerView()
    const all = banner.querySelector('#cookie-acceptall')
    const some = banner.querySelector('#cookie-acceptsome')
    if(!saved) {
        banner.style.display = 'block'
    }
    all.addEventListener('click', () => {
        setConsent({ accepted: true })
        banner.style.display = 'none'
    })
    some.addEventListener('click', () => {
        setConsent({ accepted: false })
    })
    return banner
}