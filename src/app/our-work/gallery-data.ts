export type GalleryCategory = "Weddings" | "Reception" | "Temple Events" | "Family Celebrations" | "Floral Details" | "Corporate Events";

export interface GalleryItem {
  src: string;
  title: string;
  category: GalleryCategory;
  width: number;
  height: number;
  position: string;
}

// Dimensions and focal positions are kept with each asset so genuine photos can be substituted later.
export const GALLERY: GalleryItem[] = [
  { src: "/images/gallery-royal-mandap-wide.webp", title: "Wedding Mandap", category: "Weddings", width: 1672, height: 941, position: "center 48%" },
  { src: "/images/gallery-grand-entry.webp", title: "Grand Floral Entrance", category: "Weddings", width: 1024, height: 1536, position: "center 48%" },
  { src: "/images/gallery-wedding-mandap.webp", title: "Traditional Wedding Mandap", category: "Weddings", width: 1536, height: 1024, position: "center 48%" },
  { src: "/images/gallery-wedding-aisle.webp", title: "Floral Wedding Aisle", category: "Weddings", width: 1536, height: 1024, position: "center 52%" },
  { src: "/images/gallery-temple-entrance.webp", title: "Temple Entrance", category: "Temple Events", width: 1254, height: 1254, position: "center 48%" },
  { src: "/images/gallery-reception-stage.webp", title: "Reception Stage", category: "Reception", width: 1536, height: 1024, position: "center 50%" },
  { src: "/images/gallery-outdoor-floral-arch.webp", title: "Outdoor Floral Arch", category: "Reception", width: 1536, height: 1024, position: "center 45%" },
  { src: "/images/service-naming-ceremony.webp", title: "Naming Ceremony", category: "Family Celebrations", width: 1024, height: 1536, position: "center 53%" },
  { src: "/images/service-baby-shower.webp", title: "Baby Shower", category: "Family Celebrations", width: 1536, height: 1024, position: "center 50%" },
  { src: "/images/heritage-floral-swing.webp", title: "Traditional Floral Swing", category: "Family Celebrations", width: 1370, height: 1148, position: "center 45%" },
  { src: "/images/service-housewarming-entrance.webp", title: "Housewarming Entrance", category: "Family Celebrations", width: 1536, height: 1024, position: "center 50%" },
  { src: "/images/service-temple-flower-garlands.webp", title: "Temple Flower Garlands", category: "Temple Events", width: 1536, height: 1024, position: "center 38%" },
  { src: "/images/service-housewarming-pooja.webp", title: "Housewarming Pooja", category: "Family Celebrations", width: 1370, height: 1148, position: "center 45%" },
  { src: "/images/service-flower-closeup.webp", title: "Jasmine and Rose", category: "Floral Details", width: 1024, height: 1536, position: "center 50%" },
  { src: "/images/service-flower-arrangement.webp", title: "Fresh Flower Arrangement", category: "Floral Details", width: 1024, height: 1536, position: "center 50%" },
  { src: "/images/service-lotus-arrangement.webp", title: "Lotus Arrangement", category: "Floral Details", width: 1351, height: 1164, position: "center 55%" },
  { src: "/images/service-brass-lamp-detail.webp", title: "Ceremonial Brass Lamp", category: "Floral Details", width: 1312, height: 1199, position: "center 48%" },
  { src: "/images/cta-floral-jasmine-detail.webp", title: "Jasmine Garland Detail", category: "Floral Details", width: 1536, height: 1024, position: "center 50%" },
  { src: "/images/service-corporate-event.webp", title: "Corporate Event Stage", category: "Corporate Events", width: 1536, height: 1024, position: "center 50%" },
  { src: "/images/service-event-banquet.webp", title: "Banquet Floral Arrangement", category: "Corporate Events", width: 1370, height: 1148, position: "center 50%" },
];

export const CATEGORIES = ["All", "Weddings", "Reception", "Temple Events", "Family Celebrations", "Floral Details", "Corporate Events"] as const;
