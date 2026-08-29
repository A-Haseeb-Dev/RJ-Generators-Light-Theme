# RJ Generators

Website for **RJ Generators** — a trusted dealer for the **sale and purchase of generators**. The site lets visitors browse generators available for sale, sell their own units for a fair market value, request valuations, and trade in older machines.

Built with **Next.js 15** (App Router) + **React 19**, styled with **Tailwind CSS 4**, and animated with **Motion**.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, services (quality-checked stock, valuations, instant cash payment, trade-ins), stock teaser, testimonials, generator categories, how it works, FAQ, CTA |
| `/products` | "Buy Generators — Current Stock" catalogue of the 10 real in-stock units (500, 400, 300, 220, 150, 100, 90, 60, 45, 25 kVA), each with its own photo, condition badge, and a "We Buy Generators" valuation CTA |
| `/about` | Dealership story, core principles, trading stats |
| `/sell` | "Sell to Us" — what we buy, how it works, and a sell-your-generator form |
| `/contact` | Contact details and inquiry form (sell / buy / valuation / trade-in / parts & support) |

## Tech Stack

- **Framework:** Next.js 15 (App Router, static prerendering)
- **UI:** React 19, TypeScript
- **Styling:** Tailwind CSS 4 + `tw-animate-css`
- **Animation:** `motion` (Motion for React)
- **Icons:** `lucide-react`
- **Fonts/theme:** `font-sans` with blue accent palette

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Run linting
npm run lint

# Create a production build
npm run build

# Start the production server
npm start

# Clean the build cache
npm run clean
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
  page.tsx             # Home page
  about/page.tsx       # About / dealership story
  contact/page.tsx     # Contact & inquiry form (submits via WhatsApp)
  products/page.tsx    # Generators for sale
  sell/page.tsx        # Sell to Us (what we buy + sell form via WhatsApp)
  globals.css          # Global styles
  layout.tsx           # Root layout & metadata
components/
  header.tsx           # Fixed header + mobile menu
  footer.tsx           # Footer with directory & contact info
  hero-slider.tsx      # Auto-rotating hero images
  faq-accordion.tsx    # FAQ accordion
  floating-whatsapp.tsx# Floating WhatsApp chat button
hooks/
  use-mobile.ts
lib/
  whatsapp.ts          # WhatsApp number + URL builder (edit phone here)
  utils.ts
public/images/         # Local generator images
```

## Configuration

Update the placeholder business details in these files before going live:

- **WhatsApp number** — `lib/whatsapp.ts` (`WHATSAPP_NUMBER` constant). This drives all WhatsApp CTAs, forms, and the floating chat button site-wide.
- **Phone / address / email** — `components/footer.tsx`, `app/contact/page.tsx`
- **Site title & description** — `app/layout.tsx` (metadata) and `metadata.json`
- **Stock catalogue** — product list in `app/products/page.tsx` (names, kVA output, condition, images, features). The site ships with 10 real generator photos in `public/images/` named by kVA rating (`25KVA.jpeg` … `500KVA.jpeg`), plus `Repair_and_maintanance.jpeg` and `Instant_Cash_Payment.jpeg` used across the home page. The hero slider, home service cards, and about page use royalty-free stock photos (downloaded into `public/images/` as `hero-industrial-*.jpg`, `technician-engineering-*.jpg`, and `business-*.jpg`) that visually match each section.

## Deployment

This is a standard Next.js app. Build with `npm run build` and deploy anywhere that supports Next.js (Vercel, Netlify, a Node host, etc.).

## Credits

Powered by "K&amp;H TECH SOL".
