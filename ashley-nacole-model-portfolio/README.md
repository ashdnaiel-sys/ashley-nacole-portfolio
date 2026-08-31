# Ashley Nacole — Modeling Portfolio

A premium, image-first modeling portfolio built with Next.js 16.3.3, React, and TypeScript.

## First things to replace before launch

1. **Professional email** — edit `data/modelData.ts` and replace `REPLACE_WITH_PROFESSIONAL_EMAIL`.
2. **Hero + portfolio images** — add files under `public/images/` and populate `src`, `width`, and `height` for each entry in `portfolioImages`.
3. **Current unretouched digitals** — add files under `public/images/digitals/` and populate each entry in `digitalImages`.
4. **Movement videos** — add MP4 paths or YouTube/Vimeo links in `movementVideos`.
5. **Open Graph preview image** — replace `public/images/replace-with-portfolio-og.jpg` with a strong portfolio image, ideally 1200×630.
6. **Comp card** — place the final PDF at `public/ashley-nacole-comp-card.pdf`, then set `compCard.enabled` to `true` in `data/modelData.ts`.

## Centralized content

All model-facing information is in:

`data/modelData.ts`

This includes name, measurements, representation, availability, Instagram, email, biography, skills, credits, SEO, portfolio order, digitals order, movement videos, and image focal points.

Measurements are not independently hard-coded across pages; all display components read from the centralized data file.

## Image entry example

```ts
{
  id: 'beauty-closeup',
  src: '/images/portfolio/beauty-closeup.jpg',
  alt: 'Beauty close-up of Ashley Nacole',
  category: 'Beauty',
  orientation: 'portrait',
  featured: true,
  order: 2,
  visible: true,
  width: 1600,
  height: 2000,
  focalPoint: '50% 35%'
}
```

For ordinary portfolio images, providing `width` and `height` preserves the original aspect ratio. `focalPoint` is primarily useful for the hero or any intentionally cropped image.

## Routes

- `/` — complete condensed modeling book
- `/portfolio` — full portfolio gallery with keyboard-accessible lightbox
- `/digitals` — current unretouched digitals with measurements repeated clearly

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deployment

This project is ready for standard Next.js hosting such as Vercel. Connect the final custom domain `ashleynacole.com` after deployment.

## Contact form behavior

Because no professional booking email was supplied yet, the inquiry form intentionally does **not** invent one. Once the professional email is added to `modelData.ts`, the form validates the fields and opens the visitor's email application with a structured inquiry pre-filled. The form also includes a basic honeypot field. For server-side delivery later, it can be swapped to an email provider/API without changing the visual design.

## Launch checklist

- Replace every neutral placeholder with Ashley's own final photographs.
- Use a true current/unretouched set only on `/digitals` and in the homepage digitals section.
- Verify the hero crop on iPhone and Android sizes after the final hero image is installed.
- Replace the Open Graph placeholder with a professional portfolio photo.
- Add the professional booking email.
- Add the final comp card and enable its button.
- Confirm Instagram and email links.
- Confirm all final image alt text describes the actual photo.
- Remove GPS/EXIF metadata from exported public images before upload.
- Run Lighthouse/Core Web Vitals checks on the deployed version.

## Current portfolio content

The project currently contains 62 curated portfolio images: 27 Fashion, 16 Lifestyle, 5 Fitness, 10 Beauty/Skincare, and 4 Swim images. Beauty product photographs are treated as independent test imagery and do not imply a client relationship with any visible brand. Homepage selections are controlled with the `featured` and `order` fields in `data/modelData.ts`.
