import { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./constants";

export interface PageMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

/**
 * Generates standardized, accessible, and structured SEO metadata.
 */
export function constructMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  noIndex = false,
}: PageMetadataProps = {}): Metadata {
  const canonicalUrl = SITE_URL ? `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}` : undefined;
  const computedTitle = title
    ? title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Flower Decoration & Event Services`;

  return {
    title: computedTitle,
    description,
    ...(SITE_URL && canonicalUrl ? { metadataBase: new URL(SITE_URL), alternates: { canonical: canonicalUrl } } : {}),
    openGraph: {
      title: computedTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      ...(SITE_URL ? { images: [
        {
          url: "/brand/logo.jpg",
          width: 1024,
          height: 1024,
          alt: `${SITE_NAME} - Royal Flower Decoration & Events`,
        },
      ] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: computedTitle,
      description,
      ...(SITE_URL ? { images: ["/brand/logo.jpg"] } : {}),
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  };
}

