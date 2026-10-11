# SHAN FITNESS

A static Astro + TypeScript fitness website with custom CSS, self-hosted fonts, responsive images, an automatic hero gallery, and native video playback.

## Run locally

Requires Node.js 22.12+ and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4321/. For a phone on the same Wi-Fi, use `npm run dev:network` and open the Network URL printed in the terminal. Keep the server running; the computer's Wi-Fi IP can change.

```sh
npm run check
npm run format:check
npm run build
npm run preview
```

The production build is written to `dist/`.

## Project structure

```text
src/
  assets/           # Brand, hero, trainers, transformations, video covers
  components/       # Page sections and shared UI
  config/site.ts    # Business details and WhatsApp messages
  data/             # Trainers, services, transformations, videos
  layouts/          # Page metadata, fonts, styles
  pages/            # Homepage, robots.txt, sitemap.xml
  styles/           # Responsive styling and animations
public/
  videos/           # Four browser-ready MP4 files
  favicon.png
  icon-licenses.txt
scripts/            # Optional image conversion and logo extraction
source-assets/      # Local originals; excluded from Git and deployment
docs/validation.md  # Verification record
vercel.json         # Static Astro deployment settings
```

The `source-assets/` folder keeps the supplied HEIC photographs and original logo PDF locally. Every image and video needed to build the website is committed under `src/assets/` or `public/`. Python and the source originals are not needed on Vercel. Obsolete drafts, superseded portraits, duplicate Reel download versions, and temporary review files were removed.

## Content and media

- `src/config/site.ts`: verified address, contact links, Shanoob CK's name and achievement.
- `src/data/trainers.ts`: Shanoob CK first, then Ganesh and Praveen.
- `src/data/services.ts`: twelve confirmed services, including home personal training, weight loss, bodybuilding, ACL recovery, Pilates, and aerobics.
- `src/data/videos.ts`: four owner-supplied Instagram Reel source links. Playback is local, with one native player and four film choices. The duplicate fifth video was removed at the owner's request.
- `src/data/transformations.ts`: two exact before/after pairs and individual publication flags. Set `publicationApproved` to `false` and rebuild to omit a pair.

The owner confirmed both transformation pairs and the supplied video, including its audio, are approved for website use on 2026-10-11. The four Reels were added at the owner's request. No member names, weight changes, timelines, or guaranteed outcomes are claimed.

| Display                      | Website asset                                                           | Local original, if retained                                          |
| ---------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Shanoob CK                   | `src/assets/trainers/shanoob-ck.webp`                                   | `source-assets/trainers/shanoob-ck.heic` (supplied as IMG_5282.HEIC) |
| Ganesh / Praveen             | `src/assets/trainers/ganesh.png`, `praveen.webp`                        | Website files are the supplied originals                             |
| Three Shanoob CK hero photos | `src/assets/hero/seated.jpg`, `back-physique.jpg`, `front-physique.jpg` | Website files are the supplied originals                             |
| Fourth hero photo            | `src/assets/hero/members.webp`                                          | `source-assets/hero/members.heic`                                    |
| Member comparisons           | `src/assets/transformations/member-01-*`, `member-02-*`                 | Matching HEIC files in `source-assets/transformations/`              |
| Original logo                | `src/assets/brand/` and `public/favicon.png`                            | `source-assets/brand/logo.pdf`                                       |
| Four films                   | `public/videos/`                                                        | Reel source URLs remain in `src/data/videos.ts`                      |

HEIC conversions preserve proportions and remove image metadata. The genuine logo was extracted from the supplied PDF without redrawing or recoloring. To regenerate these assets locally, install Pillow and pillow-heif, then use `scripts/prepare-images.py`; logo extraction also needs Poppler and the render command in `scripts/extract-logo.py`.

Videos use H.264/AAC and fast-start metadata. The sideways second Reel was rotated upright. Only intentional playback loads the selected video (`preload="none"`). The hero cycles through all four images every 6.5 seconds while at least 20% visible, with a gentle transition. It pauses offscreen, in background tabs, and for reduced-motion preferences. Photo dots and keyboard arrows allow manual selection. Without JavaScript, the first hero photo, navigation links, and native video controls remain usable.

WhatsApp and nutrition icons use locally included Simple Icons and Lucide artwork; attribution is in `public/icon-licenses.txt`.

## Deploy to Vercel

1. In Vercel, choose **Add New → Project** and import `MidhlajAm/shan_fitness` from GitHub.
2. Use the repository root (`./`). The committed configuration selects **Astro**, installs with `npm ci`, builds with `npm run build`, and serves `dist/`.
3. Deploy. Later pushes to the connected production branch trigger new deployments.

This is a static website; no Astro server adapter is required. Vercel's `VERCEL_PROJECT_PRODUCTION_URL` supplies the production origin for canonical URLs, social metadata, robots.txt, and sitemap.xml. Ensure system environment variables are exposed to the build. To use a confirmed custom domain instead, set `SITE_URL` to its HTTPS origin without a path and redeploy. With neither origin available, local builds omit the canonical URL and produce an empty sitemap rather than a guessed domain.

No Vercel account or deployment has been created by this cleanup. After deployment, check the four videos and WhatsApp destination on a real phone.

References: [Astro on Vercel](https://docs.astro.build/en/guides/deploy/vercel/), [Vercel's system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables).
