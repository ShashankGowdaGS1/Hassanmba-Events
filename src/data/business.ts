import { BusinessConfig } from "@/types/business";

const BRAND_NAME = "Hassanmba Events";

/**
 * CENTRAL BUSINESS CONFIGURATION
 * Single source of truth for Hassanmba Events.
 *
 * NOTE: The approved visual logo reads "Hassanmba Events".
 * Older materials occasionally read "Hassanamba".
 * Centralized here to ensure consistency and single-point update if verified.
 */
export const BUSINESS_DATA: BusinessConfig = {
  brand: {
    name: BRAND_NAME,
    shortName: "Hassanmba",
    legacyAlternativeName: "Hassanamba Events",
    descriptor: "Flower Decoration & Events",
    tagline: "Royal Indian Heritage × Floral Elegance",
    locationLabel: "Hassan, Karnataka",
    logo: {
      src: "/brand/logo.jpg",
      alt: `${BRAND_NAME} - Flower Decoration & Events Royal Emblem`,
      width: 1024,
      height: 1024,
    },
  },
  contact: {
    phonePrimary: "9945426076",
    phonePrimaryDisplay: "+91 99454 26076",
    phonePrimaryTel: "tel:+919945426076",
    phoneSecondary: "8660844633",
    phoneSecondaryDisplay: "+91 86608 44633",
    phoneSecondaryTel: "tel:+918660844633",
    whatsappPrimary: "+919945426076",
    whatsappLink: "https://wa.me/919945426076",
    instagramUrl: "https://www.instagram.com/hassanmba_events/",
    instagramHandle: "@hassanmba_events",
  },
  address: {
    street: "Hunsinkere Road",
    landmark: "Near Kashi Vishwanatha Temple",
    city: "Hassan",
    state: "Karnataka",
    postalCode: "573201",
    country: "India",
    formatted:
      "Hunsinkere Road, Near Kashi Vishwanatha Temple, Hassan, Karnataka 573201",
  },
};

/**
 * Generate a prefilled WhatsApp link
 */
export function getWhatsAppEnquiryUrl(serviceName?: string): string {
  const base = BUSINESS_DATA.contact.whatsappLink;
  const message = serviceName
    ? `Hello ${BUSINESS_DATA.brand.name}, I would like to enquire about ${serviceName} for an upcoming event.`
    : `Hello ${BUSINESS_DATA.brand.name}, I would like to enquire about your flower decoration and event services.`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

