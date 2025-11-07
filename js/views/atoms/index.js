/* Atomic view helpers: small element factories used across views. */

/** Create DocumentFragment. */ 
export const Fragment = () => {
    const element = document.createDocumentFragment()
    return element
}

/** Create <div> with optional class. */
export const Div = (className = '') => {
    const element = document.createElement('div')
    element.className = className
    return element
}

/** Create <p>. */
export const Paragraph = (className = '') => {
    const element = document.createElement('p')
    element.className = className
    return element
}

/** Create heading <h1>-<h6>. */
export const Heading = (text, num = 1, className = '') => {
    const element = document.createElement(`h${num}`)
    element.className = className
    element.textContent = text
    return element
}

/** Create <ul>. */ 
export const Ul = (className = '') => {
    const element = document.createElement('ul')
    element.className = className
    return element
}

/** Create <li>. */ 
export const Li = (className = '') => {
    const element = document.createElement('li')
    element.className = className
    return element
}

/** Create <a>. */ 
export const Link = (to, text = '', className = '') => {
    const element = document.createElement('a')
    element.className = className
    element.href = to
    element.innerText = text
    return element
}

/** Create <img>. */ 
export const Image = (src, title, className = '') => {
    const element = document.createElement('img')
    element.src = src
    element.className = className
    element.alt = title
    element.title = title
    return element
}

/** Create <form>. */ 
export const Form = (method = 'GET') => {
    const element = document.createElement('form')
    element.method = method
    return element
}

/** Create <label>. */ 
export const Label = (title, id, className = 'form-label') => {
    const element = document.createElement('label')
    element.htmlFor = id
    element.innerText = title
    element.className = className
    return element
}

/** Create <input>. */ 
export const Input = (name, placeholder, type = 'text', value = '', className = 'input') => {
    const element = document.createElement('input')
    element.type = type
    element.id = name
    element.name = name
    element.placeholder = placeholder
    element.value = value
    element.className = className
    element.autocomplete = true
    element.required = true
    return element
}

/** Create <button>. */ 
export const Button = (title, type = 'submit', className = 'btn') => {
    const element = document.createElement('button')
    element.type = type
    element.textContent = title
    element.className = className
    return element
}