export interface ServiceCategory {
  id: string;
  title: string;
  accentPhrase: string;
  shortDescription: string;
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
}

/**
 * The 7 locked service categories for Hassanmba Events.
 * Mapped to the supplied illustrative decoration concept photography.
 */
export const CORE_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "wedding-decorations",
    title: "Wedding Decorations",
    accentPhrase: "Sacred Muhurtham",
    shortDescription:
      "Grand traditional floral mandaps, auspicious flower arrangements, and ceremonial stage backdrops.",
    imageSrc: "/images/gallery-royal-mandap-wide.webp",
    imageAlt: "Royal Wedding Mandap Floral Architecture Concept",
    width: 1672,
    height: 941,
  },
  {
    id: "flower-decorations",
    title: "Flower Decorations",
    accentPhrase: "Artisanal Flora",
    shortDescription:
      "Bespoke fresh floral backdrops, temple garland artistry, and signature ceremonial floral arches.",
    imageSrc: "/images/service-flower-arrangement.webp",
    imageAlt: "Artisanal Fresh Flower Arrangement Concept",
    width: 1024,
    height: 1536,
  },
  {
    id: "temple-opening-events",
    title: "Temple Opening Events",
    accentPhrase: "Devotional Splendor",
    shortDescription:
      "Sacred temple sanctum adornments, festive floral pillars, and ceremonial pravesha decoration.",
    imageSrc: "/images/service-temple-flower-garlands.webp",
    imageAlt: "Sacred Temple Flower Garlands & Adornment Concept",
    width: 1536,
    height: 1024,
  },
  {
    id: "baby-shower-decorations",
    title: "Baby Shower Decorations",
    accentPhrase: "Joyful Beginnings",
    shortDescription:
      "Traditional Seemantha setups, blossom swings, and pastel floral backgrounds for cherished blessings.",
    imageSrc: "/images/service-baby-shower.webp",
    imageAlt: "Traditional Baby Shower Floral Swing & Backdrop Concept",
    width: 1536,
    height: 1024,
  },
  {
    id: "naming-ceremonies",
    title: "Naming Ceremonies",
    accentPhrase: "Sacred Namakarana",
    shortDescription:
      "Auspicious floral cradle styling, cradle backdrops, and fragrant jasmine arrangements.",
    imageSrc: "/images/service-naming-ceremony.webp",
    imageAlt: "Auspicious Naming Ceremony Floral Cradle Concept",
    width: 1024,
    height: 1536,
  },
  {
    id: "housewarming-events",
    title: "Housewarming Events",
    accentPhrase: "Gruhapravesha Grace",
    shortDescription:
      "Grand main entrance toranas, traditional marigold hangings, and pooja room floral sanctums.",
    imageSrc: "/images/service-housewarming-entrance.webp",
    imageAlt: "Traditional Gruhapravesha Entrance Floral Torana Concept",
    width: 1536,
    height: 1024,
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    accentPhrase: "Refined Assemblies",
    shortDescription:
      "Sophisticated stage installations, inauguration backdrops, and formal celebratory assemblies.",
    imageSrc: "/images/service-corporate-event.webp",
    imageAlt: "Sophisticated Corporate Event Stage & Banquet Floral Concept",
    width: 1536,
    height: 1024,
  },
];

export const EVENT_TYPES = [
  "Wedding Decorations",
  "Flower Decorations",
  "Reception Decoration",
  "Temple / Religious Event",
  "Baby Shower (Seemantha)",
  "Naming Ceremony (Namakarana)",
  "Housewarming (Gruhapravesha)",
  "Corporate Event",
  "Other Celebration",
];

