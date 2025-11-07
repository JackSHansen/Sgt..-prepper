import { clearToken } from "../../services/auth.js"
import { Button, Form, Paragraph } from "../atoms/index.js"
import { FormGroup } from "../molecules/index.js"

/* Login related views: form and user info. */

/** Return login form element. */
export const LoginFormView = () => {
    const form = Form('POST')
    const username = FormGroup('Brugernavn', 'username', 'Indtast dit brugernavn', 'text')
    const password = FormGroup('Adgangskode', 'password', 'Indtast dit password', 'password')
    const button = Button('Send')
    form.append(username, password, button)
    return form
}

/** Return user info element with logout button. */
export const UserInfoView = (user) => {
    const element = Paragraph()
    element.innerText = `Velkommen ${user.firstname} ${user.lastname}`
    const button = Button('Logout', 'button')
    button.addEventListener('click', () => {
        clearToken()
    })
    element.append(button)
    return element
}