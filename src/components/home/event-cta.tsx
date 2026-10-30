"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BUSINESS_DATA, getWhatsAppEnquiryUrl } from "@/data/business";

/**
 * Section 07: Plan Your Celebration.
 * Full-width dramatic royal finale closing CTA integrating the cta-floral-jasmine-detail
 * as a refined ceremonial medallion above the main headline.
 */
export function EventCTA() {
  const whatsappEnquiryUrl = getWhatsAppEnquiryUrl();

  return (
    <section
      id="plan-your-celebration"
      className="relative w-full py-20 sm:py-24 lg:py-32 bg-[#2B0512] text-ivory overflow-hidden select-none"
      aria-label="Event Planning and Consultation Call to Action"
    >
      {/* Background Royal Floral Canvas with Luminous Glow */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 45%, rgba(193, 138, 55, 0.28) 0%, rgba(70, 10, 28, 0.6) 45%, rgba(20, 4, 9, 0.95) 85%)",
          }}
        />

        {/* Subtle Decorative Arch Motif in Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[680px] h-[520px] sm:h-[680px] opacity-10 pointer-events-none text-gold-antique">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full stroke-current fill-none stroke-[1]"
            aria-hidden="true"
          >
            <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="60" />
            <path d="M100 5 C115 50, 150 75, 195 100 C150 125, 115 150, 100 195 C85 150, 50 125, 5 100 C50 75, 85 50, 100 5 Z" />
          </svg>
        </div>
      </div>

      <Container size="default" className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Artisanal Floral Detail Medallion (Jasmine Craftsmanship) */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-2 border-gold-antique/60 shadow-royal bg-[#18040C]">
            <Image
              src="/media/hassanmba/cta-floral-jasmine-detail.webp"
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>

          {/* Eyebrow Accent with fine gold rules */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="w-8 sm:w-12 h-px bg-gold-antique/70" aria-hidden="true" />
            <span className="font-accent text-2xl sm:text-3xl text-gold-light tracking-wide">
              A Beautiful Beginning
            </span>
            <span className="w-8 sm:w-12 h-px bg-gold-antique/70" aria-hidden="true" />
          </div>

          {/* Main Closing Heading */}
          <h2 className="font-display font-bold text-ivory text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            Let&apos;s Make Your <br />
            <span className="text-champagne/95">Celebration Unforgettable.</span>
          </h2>

          {/* Supporting Statement */}
          <p className="font-body text-sm sm:text-base md:text-lg text-ivory/85 leading-relaxed max-w-xl mx-auto pt-2">
            Tell us about your special occasion and let&apos;s discuss how to bring your decoration ideas to life.
          </p>

          {/* Direct Actions */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Primary Action: Direct WhatsApp Chat */}
            <a
              href={whatsappEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-[#103b24] hover:bg-[#20ba5a] font-body font-semibold text-xs tracking-[0.16em] uppercase px-8 py-4 rounded-xs shadow-lg hover:shadow-xl transition-all duration-200 active:translate-y-[1px] min-h-[48px] w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" aria-hidden="true" />
              <span>Enquire on WhatsApp</span>
            </a>

            {/* Secondary Action: Contact Studio Page */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 border border-champagne/50 text-champagne hover:text-white hover:border-gold-antique hover:bg-champagne/10 font-body font-medium text-xs tracking-[0.16em] uppercase px-8 py-4 rounded-xs transition-all duration-200 active:translate-y-[1px] min-h-[48px] w-full sm:w-auto"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Verified Quick Phone Numbers */}
          <p className="pt-6 font-body text-xs text-ivory/60 tracking-wider">
            Direct Line:{" "}
            <a
              href={BUSINESS_DATA.contact.phonePrimaryTel}
              className="text-champagne hover:underline"
            >
              {BUSINESS_DATA.contact.phonePrimaryDisplay}
            </a>{" "}
            /{" "}
            <a
              href={BUSINESS_DATA.contact.phoneSecondaryTel}
              className="text-champagne hover:underline"
            >
              {BUSINESS_DATA.contact.phoneSecondaryDisplay}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
