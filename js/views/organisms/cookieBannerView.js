/* Cookie banner view builder. */

import { Button, Div } from "../atoms/index.js"

/** Return cookie banner overlay element. */ export const cookieBannerView = () => {
    const overlay = Div()
    overlay.className = 'cookie-overlay'
    overlay.id = 'cookie-overlay'
    overlay.setAttribute('aria-hidden', 'false')

    const banner = Div()
    banner.className = 'cookie-banner'
    banner.id = 'cookie-banner'
    banner.role = 'dialog'
    banner.setAttribute('aria-model', 'true')
    banner.setAttribute('aria-live', 'polite')
    banner.tabIndex = -1

    const wrap = Div('cookie-wrap')
    const text = Div('cookie-text')
    text.innerText = "Vi bruger cookies til statistik og marketing. Du kan vælge nødvendige eller acceptere alle."

    const btns = Div()
    btns.className = 'cookie-btns'

    const acceptAll = Button('Accepter alle', 'button', 'btn btn-accept-all')
    acceptAll.id = 'cookie-acceptall'

    const acceptSome = Button('Kun nødvendige', 'button', 'btn btn-accept-some')
    acceptSome.id = 'cookie-acceptsome'

    btns.append(acceptAll, acceptSome)

    wrap.append(text,btns)
    banner.append(wrap)
    overlay.append(banner)

    return overlay 
}