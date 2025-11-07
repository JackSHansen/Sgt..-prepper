/* Molecule view builders (header, nav, main, footer, form groups). */
import { cookieBanner } from "../../controllers/cookieBannerController.js"
import { Div, Heading, Input, Label, Li, Link, Paragraph, Ul } from "../atoms/index.js"

/** Build header element. */
export const HeaderView = () => {
    const element = document.createElement('header')
    element.className = 'site-header'
    const h1 = Heading('Sgt. Prepper')
    element.append(h1)

    const p = Paragraph()
    const a = Link('/index.htm#/login', 'Login', 'login-link')
    p.append(a)
    element.append(p)

    const cart = Paragraph()
    const cartLink = Link('/index.htm#/cart', 'Se kurv', 'cart-link')
    cart.append(cartLink)
    element.append(cart)

    return element
}

/** Build nav bar from category items. */ 
export const NavBarView = arrNavItems => {
    const element = document.createElement('nav')
    element.className = 'nav-bar'
    const ul = Ul('nav-list')

    arrNavItems.forEach(item => {
        const { url, title } = item
        const li = Li()
        const item1 = Link(url, title, `nav-link ${item.textColor}`)
        li.append(item1)
        ul.append(li)
    })

    element.append(ul)
    return element
}

/** Build main content wrapper and attach cookie banner. */ 
export const MainView = (title, content) => {
    const element = document.createElement('main')
    element.className = "main-content"
    const h1 = Heading(title)
    element.append(h1, content)
    element.append(cookieBanner())
    return element
}

/** Build footer element. */ 
export const FooterView = () => {
    const element = document.createElement('footer')
    element.className = "site-footer"
    return element
}

/** Build labeled form group. */ 
export const FormGroup = (title, name, placeholder, type, value) => {
    const element = Div('form-group')
    const label = Label(title, name)
    const input = Input(name, placeholder, type, value)
    element.append(label, input)
    return element
}
