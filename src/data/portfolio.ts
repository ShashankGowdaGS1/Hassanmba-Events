export interface CelebrationItem {
  id: string;
  category: string;
  title: string;
  accentNote: string;
  imageSrc: string;
  width: number;
  height: number;
}

/**
 * Curated celebration inspiration gallery for Hassanmba Events.
 * Uses supplied concept photography with honest occasion descriptors.
 */
export const FEATURED_CELEBRATIONS: CelebrationItem[] = [
  {
    id: "royal-mandap-wide",
    category: "Wedding Mandap",
    title: "Wedding Mandap Inspiration",
    accentNote: "Traditional Marigold, Jasmine & Temple Pillars",
    imageSrc: "/media/hassanmba/gallery-royal-mandap-wide.webp",
    width: 1672,
    height: 941,
  },
  {
    id: "reception-stage",
    category: "Reception Stage",
    title: "Reception Stage Inspiration",
    accentNote: "Bespoke Rose Architecture & Ambient Lighting",
    imageSrc: "/media/hassanmba/gallery-reception-stage.webp",
    width: 1536,
    height: 1024,
  },
  {
    id: "temple-entrance",
    category: "Temple & Festivities",
    title: "Temple Entrance Inspiration",
    accentNote: "Auspicious Torana & Hand-Woven Garlands",
    imageSrc: "/media/hassanmba/gallery-temple-entrance.webp",
    width: 1254,
    height: 1254,
  },
  {
    id: "wedding-mandap",
    category: "Muhurtham Mandap",
    title: "Muhurtham Mandap Inspiration",
    accentNote: "Sacred Blossom Canopy & Ceremonial Accents",
    imageSrc: "/media/hassanmba/gallery-wedding-mandap.webp",
    width: 1536,
    height: 1024,
  },
  {
    id: "wedding-aisle",
    category: "Floral Aisle",
    title: "Floral Aisle Inspiration",
    accentNote: "Floral Pillar Border & Auspicious Blossom Runners",
    imageSrc: "/media/hassanmba/gallery-wedding-aisle.webp",
    width: 1536,
    height: 1024,
  },
  {
    id: "outdoor-floral-arch",
    category: "Ceremonial Gateway",
    title: "Floral Gateway Inspiration",
    accentNote: "Bespoke Blossom Arches for Celebratory Milestones",
    imageSrc: "/media/hassanmba/gallery-outdoor-floral-arch.webp",
    width: 1536,
    height: 1024,
  },
];
