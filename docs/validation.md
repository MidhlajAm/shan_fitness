# Validation — 2026-10-11

## Website verification

- Astro and TypeScript checks: 23 files, zero errors, warnings, or hints before and after cleanup.
- Formatting and static production build passed before and after cleanup.
- Earlier browser checks at 320, 360, 375, 390, 430, 530, 768, 1024, and 1280 CSS pixels found no horizontal overflow. Desktop and phone compositions were visually inspected.
- Mobile navigation opens and closes on Escape or selection. All anchor targets exist.
- Shanoop CK's replacement portrait is first, followed by Ganesh and Praveen. Trainer crops are capped at 280 CSS pixels. The introductory red bar is removed, and standard WhatsApp and nutrition leaf artwork is used.
- All four hero photos are included. Autoplay advances every 6.5 seconds when at least 20% visible, including while the gallery is hovered and a photo dot focused. Offscreen, background-tab, and reduced-motion pauses remain. Previous/next and play/pause buttons are removed at the owner's request.
- The four retained local films played successfully in the browser after moving, with durations 19.02, 33.43, 31.35, and 79.43 seconds. The duplicate fifth film and its cover were removed at the owner's request. The first film is labeled "Inside the gym". One native player switches films. Fresh loading remains paused with readyState 0. Native pause works; no media errors were reported.
- All twelve services and nineteen contextual WhatsApp links use the confirmed business details. Images have appropriate alt text. The page has one H1, semantic landmarks, visible focus styles, and accurate ExerciseGym metadata.
- The browser reported no errors or warnings. Images, fonts, scripts, styles, and video playback are served locally.
- Reduced-motion and JavaScript-free fallbacks were reviewed in source; these modes were not separately emulated in the available browser API.

## Cleanup and deployment preparation

All 29 moved media/document files were checked with SHA-256 before and after moving; bytes were unchanged. Runtime images are grouped in `src/assets/`; four playback files are in `public/videos/`. Optional HEIC and logo originals remain locally in the ignored `source-assets/` folder. Superseded portraits, redundant Reel download versions and metadata, stale planning drafts, and generated review tooling were removed.

The play triangle is optically centered in its circular button, with the previous margin offset removed.

Vercel configuration builds the static Astro site into `dist/`. A production origin is read from `SITE_URL` or Vercel's production URL environment variable. No production domain is fabricated.

## Limits

No Lighthouse score or real-world Core Web Vitals measurement is claimed. Android/iOS device testing and confirmation that WhatsApp reaches the intended business account remain launch checks. The website has not been deployed to Vercel by this task.

## Hero autoplay correction

The phone viewport initially showed about 43% of the gallery, below the old 55% threshold. Autoplay stayed on the first photo for longer than one interval. Lowering the threshold to 20% allows automatic movement on first arrival. At the same 530 x 811 viewport, the active photo advanced from 1 to 3 across two intervals without input. After scrolling the gallery offscreen, the active photo stayed unchanged for longer than one interval. Background-tab and reduced-motion guards remain in place.

## Additional services

The owner confirmed weight loss, bodybuilding, ACL recovery, Pilates, aerobics, and home personal training. Six cards were added to the existing services grid. Each new service has a matching WhatsApp enquiry message; the home enquiry asks about location availability. ACL recovery is described as training support, without asserting physiotherapy credentials or medical treatment. No prices or home-service area are assumed.

## Trainer details correction

The owner updated the first trainer's display name to Shanoop CK and confirmed Mr. Kerala Men's Physique (2017) and Mr. India participation. Both details appear on separate lines below his name. The previous 2019 and Second Runner-up wording is removed. Hero and trainer image descriptions use the updated name; the portrait itself is unchanged.
