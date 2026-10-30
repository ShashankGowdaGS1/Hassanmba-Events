import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { DecorativeDivider } from "@/components/ui/decorative-divider";
import { BUSINESS_DATA } from "@/data/business";

export const metadata = constructMetadata({
  title: `Privacy Policy | ${BUSINESS_DATA.brand.name}`,
  description:
    `Privacy Policy for ${BUSINESS_DATA.brand.name} — how your information is handled when you enquire via our website or WhatsApp.`,
  path: "/privacy-policy",
});

const SECTIONS = [
  {
    title: "Information You Provide",
    body: [
      "The enquiry form asks for your name, phone number and event type, with optional event date, location and requirements. It uses these details to prepare a WhatsApp message on your device.",
      "The website has no enquiry form submission backend. The prepared message is included in a link to WhatsApp when you choose to open it. You decide whether to send the message in WhatsApp.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "Information you send through WhatsApp or share by phone helps us respond to your enquiry and discuss your event requirements. Details of the business's handling and retention practices require client review.",
    ],
  },
  {
    title: "WhatsApp Communications",
    body: [
      'The enquiry form opens a WhatsApp link containing your prepared message. Your enquiry is sent to the business only when you choose "Send" in WhatsApp.',
      `WhatsApp communications are governed by WhatsApp's own Privacy Policy and Terms of Service, which are independent of this website and ${BUSINESS_DATA.brand.name}.`,
    ],
  },
  {
    title: "Cookies and Analytics",
    body: [
      "The current website code does not include a third-party analytics or advertising integration. Hosting services and linked third-party platforms may have their own practices; these should be checked before launch.",
    ],
  },
  {
    title: "Third-Party Links",
    body: [
      `This website contains links to third-party platforms including WhatsApp, Instagram, and Google Maps. ${BUSINESS_DATA.brand.name} is not responsible for the privacy practices of these platforms. We encourage you to review their respective privacy policies.`,
    ],
  },
  {
    title: "Policy Updates",
    body: [
      "This draft should be reviewed and updated if the website's features or data-handling practices change.",
    ],
  },
  {
    title: "Questions About Privacy",
    body: [
      `If you have any questions about how your information is handled, you may contact us via WhatsApp or phone at ${BUSINESS_DATA.contact.phonePrimaryDisplay}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-ivory pt-14 pb-12 md:pt-20 md:pb-16">
        <Container size="narrow" className="text-center">
          <p className="font-accent text-xl md:text-2xl text-gold-antique mb-2">
            Your Trust Matters
          </p>
          <h1 className="font-display font-bold text-burgundy text-3xl md:text-4xl tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-body text-xs tracking-widest uppercase text-gold-dark font-medium mb-6">
            {BUSINESS_DATA.brand.name}
          </p>
          <DecorativeDivider />

          {/* Draft disclaimer */}
          <div className="mt-8 bg-amber-50 border border-amber-300/60 rounded-xs p-4 text-left">
            <p className="font-body text-xs font-semibold text-amber-800 mb-1 uppercase tracking-wide">
              Draft Document — Pending Client Review
            </p>
            <p className="font-body text-xs text-amber-700 leading-relaxed">
              This Privacy Policy is a draft prepared for informational purposes
              during website development. It must be reviewed, verified, and
              approved by {BUSINESS_DATA.brand.name} and, if required, a legal
              professional before this website is published publicly.
            </p>
          </div>
        </Container>
      </section>

      {/* Policy body */}
      <section className="bg-white py-16 md:py-20">
        <Container size="narrow">
          <p className="font-body text-xs text-charcoal/50 mb-10">
            Draft awaiting review
          </p>
          <div className="space-y-10">
            {SECTIONS.map((section, i) => (
              <div key={i}>
                <h2 className="font-display font-semibold text-burgundy text-xl mb-3">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.body.map((para, j) => (
                    <p key={j} className="font-body text-sm text-charcoal/75 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                {i < SECTIONS.length - 1 && (
                  <DecorativeDivider variant="simple" className="mt-10" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gold-antique/15 text-center space-y-4">
            <p className="font-body text-xs text-charcoal/45 italic">
              This is a draft policy. Please contact us with any questions or
              concerns.
            </p>
            <Link
              href="/contact"
              className="font-body text-sm font-medium text-burgundy hover:text-gold-dark underline decoration-gold-antique/50"
            >
              Contact {BUSINESS_DATA.brand.name} →
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
