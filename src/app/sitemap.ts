import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];
  const routes = [
    "",
    "/about",
    "/services",
    "/our-work",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

