/**
 * Application Constants
 */

import { BUSINESS_DATA } from "@/data/business";
import { parseSiteUrl } from "./site-url";

export const SITE_URL = parseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const SITE_NAME = BUSINESS_DATA.brand.name;

export const SITE_TAGLINE = "Flower & Event Decoration in Hassan";

export const SITE_DESCRIPTION =
  `Explore floral decorations for weddings, traditional ceremonies and special occasions with ${SITE_NAME} in Hassan, Karnataka.`;
