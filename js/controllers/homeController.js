/* Home controller: render simple welcome page. */

import { Paragraph } from "../views/atoms/index.js"
import { Layout } from "./layoutController.js"

/** Return home page layout. */
export const HomePage = async () => {
    const title = "Velkommen"
    const p = Paragraph()
    p.innerText = "Velkommen til Sgt. Prepper webshop"
    return await Layout(title, p)
}