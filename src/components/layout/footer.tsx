import React from "react";
import Link from "next/link";
import { BUSINESS_DATA } from "@/data/business";
import { MAIN_NAVIGATION, SERVICES_DROPDOWN_ITEMS, LEGAL_NAVIGATION } from "@/data/navigation";
import { BrandLogo } from "@/components/ui/brand-logo";

/**
 * Section 08: Premium Royal Footer.
 * A refined dark heritage footer with complete directory, service links,
 * verified contact details, and an oversized brand signature.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="w-full bg-[#181112] text-ivory/85 pt-12 sm:pt-16 pb-6 border-t-2 border-gold-antique/35 relative overflow-hidden select-none"
      aria-label="Footer and Directory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Main Directory Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-9 border-b border-ivory/10 pb-9 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8">
          {/* Column 1: Brand & Craftsmanship Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <BrandLogo variant="full" isOverlay className="[&_.font-display]:text-[26px] sm:[&_.font-display]:text-[28px]" />
            <p className="font-accent text-[28px] sm:text-[30px] leading-tight text-gold-light tracking-wide pt-1">
              Beautifully decorating life&apos;s meaningful celebrations.
            </p>
            <p className="font-body text-sm sm:text-[15px] text-ivory/80 leading-relaxed max-w-sm">
              Traditional South Indian floral craftsmanship and bespoke event decoration for weddings, muhurtham mandaps, receptions, and sacred ceremonies in Hassan, Karnataka.
            </p>
            <div className="pt-1 text-sm sm:text-[15px] leading-relaxed font-body text-champagne/90">
              <span className="block font-semibold uppercase tracking-wider text-[11px] text-gold-light">
                Location
              </span>
              <span className="block text-ivory/80 pt-1 leading-relaxed">
                {BUSINESS_DATA.address.formatted}
              </span>
            </div>
          </div>

          {/* Column 2: Primary Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-2 text-left">
            <h4 className="font-display text-[17px] sm:text-lg font-semibold tracking-[0.12em] uppercase text-champagne">
              Navigation
            </h4>
            <ul className="text-[15px] sm:text-base font-body leading-snug">
              {MAIN_NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ivory/90 hover:text-gold-light transition-colors min-h-[44px] py-1.5 inline-flex items-center"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Decoration Services (3 cols) */}
          <div className="lg:col-span-3 space-y-2 text-left">
            <h4 className="font-display text-[17px] sm:text-lg font-semibold tracking-[0.12em] uppercase text-champagne">
              Our Services
            </h4>
            <ul className="text-[15px] sm:text-base font-body leading-snug">
              {SERVICES_DROPDOWN_ITEMS.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-ivory/90 hover:text-gold-light transition-colors min-h-[44px] py-1.5 inline-flex items-center"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-2 text-left">
            <h4 className="font-display text-[17px] sm:text-lg font-semibold tracking-[0.12em] uppercase text-champagne">
              Connect
            </h4>
            <div className="space-y-3 text-[15px] sm:text-base leading-relaxed font-body text-ivory/90">
              <div>
                <span className="block text-xs uppercase tracking-wider text-gold-light">
                  Direct Line
                </span>
                <a
                  href={BUSINESS_DATA.contact.phonePrimaryTel}
                  className="hover:text-gold-light transition-colors underline decoration-gold-antique/40 underline-offset-2 font-medium"
                >
                  {BUSINESS_DATA.contact.phonePrimaryDisplay}
                </a>
                <span className="mx-1 text-ivory/40">/</span>
                <a
                  href={BUSINESS_DATA.contact.phoneSecondaryTel}
                  className="hover:text-gold-light transition-colors underline decoration-gold-antique/40 underline-offset-2 font-medium"
                >
                  {BUSINESS_DATA.contact.phoneSecondaryDisplay}
                </a>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-gold-light">
                  WhatsApp Support
                </span>
                <a
                  href={BUSINESS_DATA.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-colors underline decoration-gold-antique/40 underline-offset-2 font-medium"
                >
                  {BUSINESS_DATA.contact.whatsappPrimary}
                </a>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-gold-light">
                  Official Instagram
                </span>
                <a
                  href={BUSINESS_DATA.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-colors underline decoration-gold-antique/40 underline-offset-2 font-medium"
                >
                  {BUSINESS_DATA.contact.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Oversized Brand Watermark Signature */}
        <div className="pt-6 pb-3 text-center overflow-hidden">
          <span className="font-display text-[clamp(1.5rem,7vw,2.25rem)] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.14em] text-ivory/[0.08] uppercase block select-none">
            {BUSINESS_DATA.brand.name}
          </span>
        </div>

        {/* Bottom Legal & Rights Bar */}
        <div className="pt-4 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-[13px] font-body text-ivory/80 gap-4">
          <p>
            © {currentYear} {BUSINESS_DATA.brand.name}. {BUSINESS_DATA.brand.descriptor} · {BUSINESS_DATA.brand.locationLabel}. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            {LEGAL_NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-[44px] inline-flex items-center hover:text-gold-light transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
