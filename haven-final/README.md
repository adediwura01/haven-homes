# HAVEN - Final Perfect Version

This is the exact first prototype you loved, now separated + with projects.json

## How projects.json works (BEST for client work)

1. **All data is in ONE file:**
   - `public/data/projects.json` (this is what you edit)
   - Also copied to `src/data/projects.json` for bundling

2. **To add a real customer house:**
   ```json
   // Open public/data/projects.json
   {
     "name": "Lekki Luxury Villa",
     "location": "Lekki Phase 1, Lagos",
     "price": "₦350M",
     "meta": "4 Beds • 5 Baths",
     "image": "/images/lekki-villa.jpg"
   }
   ```
   Add that object to the "properties" array, drop the image into public/images/, save, refresh.

3. **Images:**
   - Put images in public/images/
   - Reference as /images/filename.jpg
   - If file missing, fallback Unsplash shows automatically

4. **Why JSON is best:**
   - Non-developer can edit it (client, designer)
   - No need to touch React code
   - Works with CMS later (you can fetch it)
   - Vercel will serve public/data/projects.json as static asset

5. **Separated components:**
   - src/components/Header.jsx, Hero.jsx, etc.
   - src/data/data.js loads the JSON
   - App.jsx just composes components

Run:
npm install
npm run dev
Deploy:
vercel --prod or GitHub -> Vercel
