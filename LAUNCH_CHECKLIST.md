# Hassanmba Events: Vercel deployment checklist

## Project settings

- Import `ShashankGowdaGS1/Hassanmba-Events` into Vercel and use the repository root as the root directory.
- Use the Next.js framework preset and default build and output settings. The project has a committed `package-lock.json` and builds with `npm run build`; no `vercel.json` is required.
- The project specifies Node.js 24.x in `package.json`, matching the major version used for local verification. Vercel uses this engine setting for the build and runtime.
- The enquiry form opens a prepared WhatsApp message; it does not require a server-side email service or database.

## Domain and environment

- Set `NEXT_PUBLIC_SITE_URL` in Vercel's Production environment to the confirmed public HTTPS origin, without a path or trailing query, for example `https://your-domain.example`. This is public configuration, not a secret.
- Redeploy after changing the variable. Without a valid value, the site deliberately omits canonical URLs, social image URLs and sitemap entries. Set a Preview-specific origin only when it is known and appropriate.
- Check the production canonical URL, social sharing metadata, `/sitemap.xml`, and `/robots.txt` after deployment.

## Before publishing

- Review the Privacy Policy and Terms & Conditions; both are currently marked as drafts.
- Confirm the business name, phone numbers, WhatsApp, Instagram, address, and service descriptions.
- Approve the illustrative AI-generated images and logo or replace them with authorized assets.
- Review the site on desktop, tablet, mobile and short screens. Test the navigation, service links, image gallery, contact form, WhatsApp handoff, telephone links and maps.
- Verify deployment protection for previews if required. A Git push can automatically create a Preview or Production deployment when the repository is connected to Vercel; confirm the configured production branch in Vercel.

## Local verification

Run `npm run type-check`, `npm run lint`, and `npm run build`. Keep `.env` files, credentials, `node_modules`, and `.next` out of source control; `.env.example` documents the public configuration.

References: [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), [Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions), [environment variables](https://vercel.com/docs/environment-variables), and [Git deployments](https://vercel.com/docs/git).
