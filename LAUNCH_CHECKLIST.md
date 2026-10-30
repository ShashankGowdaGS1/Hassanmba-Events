# Hassanmba Events: deployment checklist

This project has not been deployed. Preview and production deployments both require explicit authorization.

## Before public launch

- [ ] Confirm the production domain and configure `NEXT_PUBLIC_SITE_URL` in Vercel's Production environment as its complete HTTPS origin, with no path, query, fragment, or credentials. For example: `https://your-confirmed-domain.example` (format only). Never put secrets in a `NEXT_PUBLIC_` variable.
- [ ] Rebuild after setting or changing the variable. Verify the live canonical URLs, Open Graph image and URL, `/sitemap.xml`, and `/robots.txt`. With the variable unset or invalid, the site deliberately omits canonicals and sitemap entries.
- [ ] Confirm the business spelling, both phone numbers, WhatsApp, Instagram, full address and service descriptions. The current logo spelling is pending confirmation; do not alter the artwork without approval.
- [ ] Have the client approve the Privacy Policy and Terms & Conditions, including actual contact-data handling and any relevant hosting practices. Both pages remain clearly marked as drafts.
- [ ] Approve the illustrative AI-generated images or replace them with authorized, verified event photography. Small concept crops should not be enlarged into large desktop images. Confirm rights to all imagery and logo artwork.
- [ ] Manually review desktop, tablet, phone and short-screen layouts; test navigation, service anchors, gallery/lightbox, form validation, WhatsApp handoff, phone links and maps. No visual viewport review was performed in this preparation.

## Vercel setup, after authorization

- [ ] Keep `package-lock.json`, use the Next.js framework preset and the project root. The existing `npm run build` uses `next build`; no custom `vercel.json` or output override is needed by this project. The local build was verified with Node.js 24.14.0; select Node.js 24.x in Vercel for a comparable environment.
- [ ] Arrange a protected Preview deployment first. An unset Preview `NEXT_PUBLIC_SITE_URL` omits canonical metadata; use a confirmed Preview HTTPS origin only if preview-specific canonical and sitemap output is required. Preview access protection should be configured where available. Do not assume Preview is private or excluded from search without verifying project settings.
- [ ] Confirm the Vercel project and deployment workflow before importing a repository: importing or pushing to a connected production branch can initiate a deployment. Do not deploy, connect a production domain, or promote a preview until explicitly approved.
- [ ] Run a fresh Vercel build and check build logs, installed dependencies and image optimization. Verify all routes and perform a manual review of the protected Preview before requesting production approval.

## Source control and maintenance

- [ ] There is currently no Git repository. If authorized later, initialize one locally, inspect the untracked and ignored files, stage only intended source files and approved media, and review the staged diff before committing. Do not include secrets, `.env` files, `node_modules`, or `.next`; `.env.example` is intentionally allowed.
- [ ] Business details live in `src/data/business.ts`; service labels, enquiry options and short descriptions in `src/data/services.ts`; detailed service descriptions in `src/data/service-details.ts`. Keep related display, phone-link and address fields consistent when updating them.
- [ ] Re-run `npm run type-check`, `npm run lint`, and `npm run build` after changes. A production build currently succeeds with the existing lockfile. No automated test script is configured.

References: [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), [Vercel environment variables](https://vercel.com/docs/environment-variables), [Vercel deployment environments](https://vercel.com/docs/deployments/environments), and [Node.js version settings](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).
