# Deem Hospital

Marketing and patient-facing website for Deem Hospital — a multi-specialty
hospital site built with Next.js 15 (App Router), React 19 and Tailwind CSS v4.

## Pages

| Route | Description |
| --- | --- |
| `/` | Homepage — hero, stats, about, services, insights, consultants, testimonials, FAQ |
| `/services` | All departments |
| `/services/[slug]` | Department detail, treatments, care pathway, department team |
| `/doctors` | Consultant directory |
| `/doctors/[slug]` | Consultant profile |
| `/about` | Story, values, timeline, careers |
| `/blog` | Health insights index |
| `/blog/[slug]` | Article |
| `/contact` | Contact channels, map, enquiry form |
| `/appointment` | Appointment request form |

Plus `sitemap.xml`, `robots.txt` and a custom 404.

## Features

- Fully static — all 29 routes prerendered at build time
- Light and dark theme with no flash of the wrong theme on load
- Responsive from 360px up, no horizontal scroll at any breakpoint
- Scroll-reveal animation, all motion disabled under `prefers-reduced-motion`
- Client-side validated appointment and contact forms (demo only — they do not transmit data)
- Per-page metadata, Open Graph tags and a generated sitemap

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
app/          routes and layouts
components/   shared UI (header, footer, cards, forms, icons)
lib/site.js   all site content — services, doctors, posts, FAQs
public/images hospital photography
```

Content lives in a single module (`lib/site.js`), so copy, departments,
consultants and articles can be edited without touching the components.
