/* Product controller: builds product list and product details pages. */

import { addToCart } from "../models/cartModel.js";
import { getDetails, getList } from "../models/productModel.js";
import { isLoggedIn } from "../services/auth.js";
import { ProductDetailsView, ProductListView } from "../views/organisms/productViews.js";
import { Layout } from "./layoutController.js";
import { Paragraph } from "../views/atoms/index.js";

export const ProductPage = async () => {
    isLoggedIn()
    const { category = 'vand-og-vandrensning', product } = Object.fromEntries(new URLSearchParams(location.search));
    let html = ''
    if (!product) {
        html = ProductList()
    } else {
        html = ProductDetails(product)
    }
    return html
}

/** Build and return product list page. */
export const ProductList = async () => {
    const { category = 'vand-og-vandrensning' } = Object.fromEntries(new URLSearchParams(location.search));
    const data = await getList(category)
    if (!Array.isArray(data) || data.length === 0) {
        const msg = Paragraph()
        msg.innerText = 'Kunne ikke hente produkter lige nu. Prøv igen senere.'
        return Layout('Produkter', msg)
    }
    const formattedProducts = data.map(item => ({
        ...item,
        stockText: item.stock ? 'På lager' : 'Forventes på lager indenfor få uger',
        stockClass: item.stock ? 'stock-available' : 'stock-unavailable'
    }))
    const html = ProductListView(formattedProducts, category)
    const layout = Layout('Produkter', html)
    return layout
}

/** Build and return product details page. */
export const ProductDetails = async (product) => {
    const data = await getDetails(product)
    if (!data) {
        const msg = Paragraph()
        msg.innerText = 'Kunne ikke hente produktet lige nu. Prøv igen senere.'
        return Layout('', msg)
    }
    const html = ProductDetailsView(data)
    const form = html.querySelector('form')
    if (form) {
        form.addEventListener('submit', (e) => {
            handleAddToCart(e)
        })
    }
    const layout = Layout('', html)
    return layout
}

/** Handle add-to-cart submit events. */
export const handleAddToCart = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const productId = form.productId.value
    const quantity = form.quantity.value
    if(quantity && productId) {
        const data = await addToCart(productId, quantity)
    }
}