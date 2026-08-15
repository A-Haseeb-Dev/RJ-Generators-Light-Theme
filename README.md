# RJ Generators

Website for **RJ Generators** — a trusted dealer for the **sale and purchase of generators**. The site lets visitors browse generators available for sale, sell their own units for a fair market value, request valuations, and trade in older machines.

Built with **Next.js 15** (App Router) + **React 19**, styled with **Tailwind CSS 4**, and animated with **Motion**.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, services (quality-checked stock, valuations, instant cash payment, trade-ins), stock teaser, testimonials, generator categories, how it works, FAQ, CTA |
| `/products` | "Buy Generators — Current Stock" catalogue with condition badges and a "We Buy Generators" valuation CTA |
| `/about` | Dealership story, core principles, trading stats |
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
  contact/page.tsx     # Contact & inquiry form
  products/page.tsx    # Generators for sale
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
  utils.ts
public/images/         # Local generator images
```

## Configuration

Update the placeholder business details in these files before going live:

- **WhatsApp number** — `components/header.tsx` (lines with `wa.me/1234567890`), `app/page.tsx`, `app/products/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx` (`whatsappNumber` constant)
- **Phone / address / email** — `components/footer.tsx`, `app/contact/page.tsx`
- **Site title & description** — `app/layout.tsx` (metadata) and `metadata.json`
- **Stock catalogue** — product list in `app/products/page.tsx` (names, kVA output, condition, images, features)

## Deployment

This is a standard Next.js app. Build with `npm run build` and deploy anywhere that supports Next.js (Vercel, Netlify, a Node host, etc.).

## Credits

Powered by "K&amp;H TECH SOL".
