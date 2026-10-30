import { constructMetadata } from "@/lib/seo";
import OurWorkClient from "./client";
import { BUSINESS_DATA } from "@/data/business";

export const metadata = constructMetadata({
  title: `Celebration Inspiration | ${BUSINESS_DATA.brand.name}`,
  description:
    `Explore celebration and decoration ideas from ${BUSINESS_DATA.brand.name} — wedding mandaps, reception stages, temple events, baby showers, and floral detail concepts.`,
  path: "/our-work",
});

export default function OurWorkPage() {
  return <OurWorkClient />;
}
