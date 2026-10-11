import { defineConfig } from "astro/config";

// A custom domain can override Vercel's production origin.
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);
if (site && (!site.startsWith("https://") || new URL(site).pathname !== "/")) {
  throw new Error("SITE_URL must be an HTTPS origin, without a path.");
}

export default defineConfig({
  site: site || undefined,
  output: "static",
});
