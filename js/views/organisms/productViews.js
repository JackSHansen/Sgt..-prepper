import { price2Dkk } from "../../utils/index.js";
import { Button, Div, Form, Fragment, Heading, Image, Input, Link, Paragraph } from "../atoms/index.js"

/* Product views: list and details view builders. */

/** Build product list fragment. */
export const ProductListView = (products, category) => {
    const element = Fragment()
    products.forEach(product => {
        const { imageUrl, name, price, slug, stockText, stockClass, teaser } = product
        const linkBox = Link(`?category=${category}&product=${slug}`,'', 'product-link')
        const imgCol = Div('img-col')
        const img = Image(`http://localhost:4000${imageUrl}`, name, 'product-image')
        img.loading = 'lazy'
        imgCol.append(img)
        const infoCol = Div('info-col')
        const h2 = Heading(name,2)
        const p = Paragraph()
        p.innerHTML = teaser
        infoCol.append(h2, p)
        const priceCol = Div('price-col')
        const priceText = Paragraph('price-text price-strong')
        priceText.textContent = price2Dkk(price)
        const stockTxt = Paragraph(stockClass)
        stockTxt.textContent = stockText
        priceCol.append(priceText, stockTxt)
        linkBox.append(imgCol, infoCol, priceCol)
        element.append(linkBox)
    });
    return element
}

/** Build product details element. */
export const ProductDetailsView = (product) => {
    const { id, name, imageUrl, description, price } = product
    const element = Div('product-details')
    const imageCol = Div('image-col')
    const img = Image(`http://localhost:4000${imageUrl}`, name, 'product-detail-image')
    imageCol.append(img)
    const infoCol = Div('info-col')
    const h3 = Heading(name,1,'product-title')
    infoCol.append(h3)
    const p = Paragraph()
    p.innerHTML = description
    infoCol.append(p)
    const form = Form('POST')
    const productId = Input('productId','','hidden',id)
    const quantity = Input('quantity', '', 'number', 1)
    const button = Button('Læg i kurv', 'submit')
    form.append(productId,quantity,button)
    infoCol.append(form)
    const priceCol = Div('price-col')
    priceCol.innerHTML = price2Dkk(price)
    element.append(imageCol, infoCol, priceCol)
    return element
}