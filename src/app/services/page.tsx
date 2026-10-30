import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { DecorativeDivider } from "@/components/ui/decorative-divider";
import { buttonStyles } from "@/components/ui/button";
import { CORE_SERVICE_CATEGORIES } from "@/data/services";
import { SERVICE_DETAILS } from "@/data/service-details";
import { BUSINESS_DATA, getWhatsAppEnquiryUrl } from "@/data/business";

export const metadata = constructMetadata({
  title: `Flower & Event Decoration Services in Hassan | ${BUSINESS_DATA.brand.name}`,
  description:
    `Explore ${BUSINESS_DATA.brand.name}' full range of bespoke floral decoration services: Wedding Mandaps, Temple Events, Baby Showers, Naming Ceremonies, Housewarmings, and Corporate Functions.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* ─── SERVICES HERO ────────────────────────────────── */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0 bg-[#18060E]">
          <Image src="/images/gallery-royal-mandap-wide.webp" alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/10" />
        </div>

        {/* Text overlay */}
        <div className="relative z-10 w-full pb-14 pt-36">
          <Container size="wide">
            <p className="font-accent text-2xl md:text-3xl text-gold-antique mb-3">
              Made for Your Moments
            </p>
            <h1 className="font-display font-bold text-ivory text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] max-w-3xl mb-4">
              Floral Artistry for Every Occasion.
            </h1>
            <p className="font-body text-xs md:text-sm tracking-widest uppercase text-champagne/70 font-medium">
              {BUSINESS_DATA.brand.name} · {BUSINESS_DATA.brand.locationLabel}
            </p>
          </Container>
        </div>
      </section>

      {/* ─── SERVICE NAV INDEX ────────────────────────────── */}
      <nav
        aria-label="Service sections"
        className="bg-white border-b border-gold-antique/20 sticky top-[68px] sm:top-[76px] lg:top-24 z-20"
      >
        <Container size="wide">
          <div className="flex gap-0 overflow-x-auto overscroll-x-contain">
            {CORE_SERVICE_CATEGORIES.map((service, i) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="shrink-0 whitespace-nowrap min-h-[44px] flex items-center gap-1.5 px-4 py-3 font-body text-xs font-medium tracking-wide text-charcoal/75 hover:text-burgundy hover:bg-champagne/20 transition-colors duration-150 border-r border-gold-antique/10 last:border-r-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-burgundy"
              >
                <span className="text-gold-antique/50 font-body text-[10px]">
                  0{i + 1}
                </span>
                <span>{service.title}</span>
              </a>
            ))}
          </div>
        </Container>
      </nav>

      {/* ─── SERVICE DETAIL SECTIONS ──────────────────────── */}
      {CORE_SERVICE_CATEGORIES.map((service, index) => {
        const detail = SERVICE_DETAILS[service.id];
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 md:py-28 scroll-mt-36 ${
              isEven ? "bg-ivory" : "bg-white"
            }`}
          >
            <Container size="wide">
              <div
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <figure className={isEven ? "" : "lg:order-2"}>
                  <Image src={service.imageSrc} alt={service.imageAlt} width={service.width} height={service.height} sizes="(min-width: 1024px) 45vw, 100vw" className="w-full aspect-[4/3] object-cover" />
                  <figcaption className="mt-2 text-xs text-charcoal/70">Illustrative decoration concept</figcaption>
                </figure>
                {/* Text column */}
                <div>
                  <span className="font-body text-xs font-medium tracking-widest uppercase text-gold-dark/50 mb-2 block">
                    0{index + 1} of 07
                  </span>
                  <p className="font-accent text-xl md:text-2xl text-gold-antique mb-2 leading-tight">
                    {service.accentPhrase}
                  </p>
                  <h2 className="font-display font-bold text-burgundy text-3xl md:text-4xl tracking-tight mb-6 leading-tight">
                    {service.title}
                  </h2>
                  <DecorativeDivider variant="simple" className="my-5" />

                  {detail?.body.map((para, i) => (
                    <p
                      key={i}
                      className="font-body text-sm text-charcoal/75 leading-relaxed mb-4"
                    >
                      {para}
                    </p>
                  ))}

                  {/* Highlights */}
                  {detail?.highlights && (
                    <>
                    <p className="mt-6 mb-2 font-body text-xs font-semibold uppercase tracking-wider text-gold-dark">Ideas to discuss</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {detail.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 font-body text-xs text-charcoal/70"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 w-1.5 h-1.5 rotate-45 bg-gold-antique shrink-0"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                    </>
                  )}

                  {/* CTA */}
                  <div className="mt-8">
                    <a
                      href={getWhatsAppEnquiryUrl(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                     className={buttonStyles({ variant: "primary", size: "md" })}>
                Enquire About This Service
              </a>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* ─── CUSTOM CTA ───────────────────────────────────── */}
      <section className="bg-burgundy py-20 md:py-24">
        <Container size="narrow" className="text-center">
          <p className="font-accent text-2xl md:text-3xl text-gold-antique mb-3">
            Something Unique in Mind?
          </p>
          <h2 className="font-display font-bold text-ivory text-3xl md:text-4xl tracking-tight mb-4">
            Have Something Special in Mind?
          </h2>
          <p className="font-body text-sm text-champagne/70 max-w-lg mx-auto mb-8 leading-relaxed">
            Every celebration is unique. If you have a custom decoration vision
            — a theme, a colour palette, a cultural tradition we haven&apos;t
            listed — we&apos;d love to hear it and discuss the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className={buttonStyles({ variant: "gold", size: "md" })}>
                Discuss Your Event
              </Link>
            <a
              href={getWhatsAppEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
             className={buttonStyles({ variant: "outline", size: "md", className: "border-champagne/50 text-champagne hover:bg-champagne/10 hover:border-champagne" })}>
                WhatsApp Us Directly
              </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
