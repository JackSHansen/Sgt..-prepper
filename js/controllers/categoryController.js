/* Category controller: fetch categories and format them for navigation. */

import { getList } from "../models/categoryModel.js"

/** Return formatted category list for NavBarView. */
export const getCategoryList = async () => {
    const url = new URL(window.location.href)
    const curCategory = url.searchParams.get('category') || 'vand-og-vandrensning'
    const data = await getList()
    const safeData = Array.isArray(data) ? data : []
    const formattedCategories = safeData.map(item => ({
        slug: item.slug,
        title: item.title,
        url: `/index.htm?category=${item.slug}`,
        textColor: curCategory === item.slug ? 'nav-item-active' : 'nav-item'
    }))
    return formattedCategories
}
