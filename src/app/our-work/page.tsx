import { constructMetadata } from "@/lib/seo";
import OurWorkClient from "./client";
import { BUSINESS_DATA } from "@/data/business";

export const metadata = constructMetadata({
  title: `Floral Decoration Gallery | ${BUSINESS_DATA.brand.name}`,
  description:
    `Browse decoration inspiration images from ${BUSINESS_DATA.brand.name} — wedding mandaps, reception stages, temple events, baby showers, and floral detail concepts.`,
  path: "/our-work",
});

export default function OurWorkPage() {
  return <OurWorkClient />;
}
