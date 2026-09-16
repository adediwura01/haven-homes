// This file loads everything from projects.json
// You can edit public/data/projects.json directly and the site will update
// Or edit this file for quick changes

import projects from './projects.json'

export const IMAGES = projects.images
export const properties = projects.properties
export const faqs = projects.faqs
export const testimonials = projects.testimonials

// HOW IT WORKS:
// 1. All data lives in public/data/projects.json (and src/data/projects.json)
// 2. This file imports it so components can use it
// 3. To add a real customer house:
//    - Drop image into public/images/ e.g. public/images/lekki-villa.jpg
//    - Open public/data/projects.json
//    - Add new object to "properties" array:
//      { "name":"Lekki Villa","location":"Lekki","price":"₦300M","meta":"4 Beds","image":"/images/lekki-villa.jpg" }
//    - Save, refresh. Done.
// 4. For Vercel: public/data/projects.json is fetched at runtime if you use fetch, or bundled if you import (we use import for simplicity)
