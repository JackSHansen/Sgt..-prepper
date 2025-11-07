/* Cart controller: render cart page and attach event handlers. */
import { getCartList, removeFromCart } from "../models/cartModel.js"
import { isLoggedIn } from "../services/auth.js"
import { Div } from "../views/atoms/index.js"
import { cartListHeaderView, cartListView, cartTotalView } from "../views/organisms/cartViews.js"
import { Layout } from "./layoutController.js"

/** Render cart page (requires login). */
export const CartPage = async () => {
    if(!isLoggedIn()) {
        location.href = '/index.htm#/login'
        return false
    }

    const data = await getCartList()

    const arrHeaderColumns = [
        { name: 'Antal', className: 'col-qty header-cell' },
        { name: 'Produkt', className: 'col-product header-cell' },
        { name: 'Pris', className: 'col-price header-cell' },
        { name: 'Handling', className: 'col-action header-cell' },
    ]

    const totalPrice = data.reduce((sum, item) => {
        return sum + (item?.product?.price * item?.quantity || 0)
    }, 0)

    const html = Div()
    html.classList.add('cart-page')
    html.append(cartListHeaderView(arrHeaderColumns))
    html.append(cartListView(data))
    html.append(cartTotalView(totalPrice))
    attachCartListEvents(html)

    return Layout('Indkøbskurv', html)
}

/** Attach delete handlers to cart items. */
const attachCartListEvents = (container) => {
    const deleteBtns = container.querySelectorAll('button[data-cartid]')
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cartId = e.target.dataset.cartid
            removeFromCart(cartId)
        })
    });
}