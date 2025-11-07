/* Cart views: header, list and total row renderers. */
import { price2Dkk } from "../../utils/index.js"
import { Button, Div, Li, Ul } from "../atoms/index.js"

/** Render cart list items. */ export const cartListView = (data = []) => {
    const element = Ul()

    data.forEach(item => {
        const li = Li('cart-row')

        const quantity = Div('col-qty')
        quantity.innerText = item.quantity
        li.append(quantity)

        const name = Div('col-product')
        name.innerText = item.product.name
        li.append(name)

        const price = Div('col-price')
        price.innerText = price2Dkk(item.product.price)
        li.append(price)

        const action = Div('col-action')
        const delBtn = Button('Slet', 'button')
        delBtn.dataset.cartid = item.id
        action.append(delBtn)
        li.append(action)

        element.append(li)
    })
    
    return element
}

/** Render cart header columns. */ export const cartListHeaderView = arrColumns => {
    const cartHeader = Div('cart-header')

    arrColumns.forEach(item => {
        const col = Div(item.className)
        col.textContent = item.name
        cartHeader.append(col)
    })

    return cartHeader
}

/** Render cart total row. */ export const cartTotalView = totalPrice => {
    const totalRow = Div('cart-total-row')

    const textCol = Div('total-text-col')
    textCol.innerText = 'Total'

    const totalCol = Div('total-value-col')
    totalCol.innerText = price2Dkk(totalPrice)

    const spacerCol = Div('col-action')

    totalRow.append(textCol, totalCol, spacerCol)

    return totalRow
}