

## FlowFront Global — Pet Supply E-Commerce Website

### Overview
A professional pet supply e-commerce site for FlowFront Global LLC, closely matching the Monster Pets reference layout, with full Shopify integration for product management and checkout.

### Pages & Structure

**1. Homepage (`/`)**
- **Top banner**: Promotional bar (e.g., "Free shipping on orders over $XX")
- **Header**: FlowFront logo (properly scaled/cropped), search icon, account icon, cart icon with badge
- **Navigation bar**: Shop All, Collections (dropdown), About Us, Contact Us — on a light blue background bar
- **Hero section**: Full-width image carousel with headline text ("Designed for Dogs. Loved by Humans." style) and "Shop Now" CTA button
- **Collections grid**: Category cards (Dog, Cat, Bird, Aquatics, Small Animals, etc.) with arrow buttons — matching the reference layout
- **Top/Featured Products tabs**: Tabbed product grid showing real Shopify products with images, titles, and prices
- **Promotional banners**: Two side-by-side cards (e.g., "Dog Food" and "Cat Food" CTAs) with background imagery
- **Brand logos**: Scrolling/static row of brand logos (Roudybush, etc.)
- **Footer**: FlowFront logo, Quick Links, Collections, Policies columns + Newsletter signup + Social icons + Contact info (email, addresses) + Payment method icons + Copyright

**2. About Us (`/about`)**
- Company story using the provided copy
- Team/mission imagery
- Professional credibility-focused layout

**3. Contact Us (`/contact`)**
- Contact form
- Email: owner@flowfrontglobal.com
- Distribution Center: 2020 NE Aloclek Dr #118, Hillsboro, OR 97124
- Based in Lancaster, California

**4. Shop All (`/shop`)**
- Full product grid from Shopify with category filtering
- Product cards: image, title, price, "Sold out" badge when unavailable

**5. Product Detail (`/product/:handle`)**
- Product images, title, description, price
- Variant selection (size, flavor, etc.)
- Add to Cart button
- No fake reviews

**6. Cart Drawer**
- Slide-out cart with item list, quantity controls, totals
- Checkout button → Shopify-hosted checkout (new tab)

### Design Direction
- Clean, professional, family-friendly pet store aesthetic
- Color scheme: White background, light blue accents (nav bar), dark text, blue CTA buttons
- FlowFront logo displayed at correct proportions in header without oversizing
- Responsive design for mobile and desktop
- Matches the Monster Pets reference structure closely

### Shopify Integration
- Real product data from Shopify Storefront API
- Zustand cart state management with persistent storage
- Shopify-hosted checkout flow
- Products initially empty — you can add products by telling me what to create

### Logo Handling
- Both logo files will be embedded in the project
- Logo cropped/fitted to content bounds to prevent oversized header
- Proper `object-contain` sizing within a fixed-height header

