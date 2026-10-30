import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { DecorativeDivider } from "@/components/ui/decorative-divider";
import { BUSINESS_DATA } from "@/data/business";

export const metadata = constructMetadata({
  title: `Terms & Conditions | ${BUSINESS_DATA.brand.name}`,
  description:
    `Terms and Conditions for the ${BUSINESS_DATA.brand.name} website — use of information, enquiry process, visual content disclaimer, and limitations.`,
  path: "/terms-and-conditions",
});

const SECTIONS = [
  {
    title: "Use of This Website",
    body: [
      `By accessing and using this website, you agree to the terms set out on this page. This website is operated by ${BUSINESS_DATA.brand.name}, a flower decoration and events service based in Hassan, Karnataka, India.`,
      `The content on this website — including text, images, and design elements — is provided for general informational purposes about ${BUSINESS_DATA.brand.name}' decoration services.`,
    ],
  },
  {
    title: "Information Accuracy",
    body: [
      `We make reasonable efforts to ensure the information on this website is accurate and up to date. However, ${BUSINESS_DATA.brand.name} makes no warranties or representations — express or implied — as to the completeness, accuracy, or reliability of any content.`,
      `Service descriptions, decoration styles, and availability are subject to change without notice. Confirmation of any decoration service is provided only through direct communication with ${BUSINESS_DATA.brand.name}.`,
    ],
  },
  {
    title: "Enquiry Process",
    body: [
      `This website provides an enquiry mechanism via WhatsApp. Submitting an enquiry through the form on this website does not constitute a booking, reservation, or contract with ${BUSINESS_DATA.brand.name}.`,
      `Availability, scope and any service terms should be discussed directly with ${BUSINESS_DATA.brand.name} before making arrangements.`,
      "We are not responsible for enquiries that are not received, delayed, or lost due to technical issues with WhatsApp or your device.",
    ],
  },
  {
    title: "Visual Content Disclaimer",
    body: [
      "Images displayed on this website are illustrative decoration inspiration concepts. They are visual references for possible decoration styles.",
      "These images are not certified photographs of specific completed client projects unless explicitly stated. They should be understood as visual references and conceptual illustrations.",
      "Actual decoration results may vary based on venue, availability of materials, specific client requirements, and other factors discussed during consultation.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      `The brand, text, design and visual materials may be subject to intellectual property rights. Please contact ${BUSINESS_DATA.brand.name} before reusing website content.`,
    ],
  },
  {
    title: "Third-Party Links",
    body: [
      `This website contains links to third-party platforms including WhatsApp, Instagram, and Google Maps. These links are provided for convenience only. ${BUSINESS_DATA.brand.name} is not responsible for the content, availability, or practices of any third-party platform.`,
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      `To the extent permitted by applicable law, ${BUSINESS_DATA.brand.name} shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information contained herein.`,
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-ivory pt-14 pb-12 md:pt-20 md:pb-16">
        <Container size="narrow" className="text-center">
          <p className="font-accent text-xl md:text-2xl text-gold-antique mb-2">
            Website & Service Terms
          </p>
          <h1 className="font-display font-bold text-burgundy text-3xl md:text-4xl tracking-tight mb-4">
            Terms &amp; Conditions
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
              These Terms &amp; Conditions are a draft prepared for informational
              purposes during website development. They must be reviewed,
              verified, and approved by {BUSINESS_DATA.brand.name} and, if
              required, a legal professional before this website is published
              publicly.
            </p>
          </div>
        </Container>
      </section>

      {/* Terms body */}
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
              This is a draft document. It does not constitute legal advice.
              Please review with appropriate professional guidance before publication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/privacy-policy"
                className="font-body text-sm font-medium text-burgundy hover:text-gold-dark underline decoration-gold-antique/50"
              >
                Privacy Policy →
              </Link>
              <Link
                href="/contact"
                className="font-body text-sm font-medium text-burgundy hover:text-gold-dark underline decoration-gold-antique/50"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
