import { constructMetadata } from "@/lib/seo";
import ContactClient from "./client";
import { BUSINESS_DATA } from "@/data/business";

export const metadata = constructMetadata({
  title: `Contact ${BUSINESS_DATA.brand.name} | Hassan, Karnataka`,
  description:
    `Get in touch with ${BUSINESS_DATA.brand.name} for wedding, reception, temple, and family celebration floral decoration in Hassan. WhatsApp enquiry available.`,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}
