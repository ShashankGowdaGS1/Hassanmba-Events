import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { DecorativeDivider } from "@/components/ui/decorative-divider";
import { buttonStyles } from "@/components/ui/button";
import { BUSINESS_DATA } from "@/data/business";
import { CORE_SERVICE_CATEGORIES } from "@/data/services";

export const metadata = constructMetadata({
  title: `About ${BUSINESS_DATA.brand.name} | Floral Decoration Heritage`,
  description:
    `${BUSINESS_DATA.brand.name} brings sacred Indian floral tradition and royal craftsmanship to weddings, receptions, and family celebrations across Hassan, Karnataka.`,
  path: "/about",
});

const CRAFT_POINTS = [
  {
    label: "Jasmine & Marigold",
    detail:
      "Jasmine garlands and marigold decorations can bring colour and fragrance to mandaps, entrances and ceremonial spaces.",
  },
  {
    label: "Temple Artisanal Tradition",
    detail:
      "Our floral design language is rooted in sacred temple decoration practices, translating devotional artistry into contemporary celebratory spaces.",
  },
  {
    label: "Seasonal & Fresh",
    detail:
      "Floral varieties and arrangements can be discussed to suit the occasion, season and venue.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-ivory pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Subtle corner ornament */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 opacity-[0.06] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top left, #C18A37 0%, transparent 70%)",
          }}
        />
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — editorial text block */}
            <div>
              <p className="font-accent text-2xl md:text-3xl text-gold-antique mb-3 leading-tight">
                Every Celebration Has a Story.
              </p>
              <h1 className="font-display font-bold text-burgundy text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-5">
                Rooted in Tradition,{" "}
                <span className="text-gold-dark">Crafted with Care.</span>
              </h1>
              <p className="font-body text-xs tracking-widest uppercase text-gold-dark font-medium mb-8">
                {BUSINESS_DATA.brand.descriptor} ·{" "}
                {BUSINESS_DATA.brand.locationLabel}
              </p>
              <DecorativeDivider />
              <p className="font-body text-sm md:text-base text-charcoal/80 leading-relaxed mt-8 max-w-lg">
                {BUSINESS_DATA.brand.name} is a Hassan-based floral decoration
                business offering traditional South Indian ceremonial
                aesthetics for weddings, sacred milestones, and cultural
                gatherings in Hassan.
              </p>
              <div className="mt-8">
                <Link href="/contact" className={buttonStyles({ variant: "primary", size: "md" })}>
                Plan Your Event
              </Link>
              </div>
            </div>

            <figure>
              <Image src="/images/gallery-wedding-mandap.webp" alt="Illustrative wedding mandap floral decoration" width={1536} height={1024} sizes="(min-width: 1024px) 45vw, 100vw" className="w-full h-auto" />
              <figcaption className="mt-2 text-xs text-charcoal/70">Illustrative decoration concept</figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* ─── OUR STORY ────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container size="narrow">
          <div className="text-center mb-12">
            <p className="font-accent text-xl md:text-2xl text-gold-antique mb-2">
              The Art of Meaningful Celebrations
            </p>
            <h2 className="font-display font-bold text-burgundy text-3xl md:text-4xl tracking-tight mb-4">
              Our Story
            </h2>
            <DecorativeDivider />
          </div>
          <div className="space-y-5 font-body text-sm md:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            <p>
              {BUSINESS_DATA.brand.name} is based on {BUSINESS_DATA.address.street},
              {" "}{BUSINESS_DATA.address.landmark} in {BUSINESS_DATA.address.city}. Our floral decoration is
              inspired by South Indian ceremonial traditions.
            </p>
            <p>
              We offer flower and event decoration for weddings, traditional
              family ceremonies, temple events, and corporate gatherings.
              Flowers, colour and arrangement help set the atmosphere for each occasion.
            </p>
            <p>
              Our work is rooted in the traditional floral aesthetics of
              Karnataka — the language of jasmine strings, marigold curtains,
              lotus arrangements, and ceremonial brass lamp surrounds — brought
              alive with contemporary composition and an eye for proportion,
              colour harmony, and fragrance.
            </p>
            <p>
              Every celebration we decorate is a trust placed in us. We honour
              each occasion with care and attention to the details that matter to you.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── TRADITION & CRAFT ────────────────────────────── */}
      <section className="bg-burgundy py-20 md:py-28 overflow-hidden">
        <Container size="wide">
          <div className="max-w-3xl mx-auto">
            {/* Text */}
            <div className="order-1 lg:order-2">
              <p className="font-accent text-xl md:text-2xl text-gold-antique mb-3">
                A Living Art Form
              </p>
              <h2 className="font-display font-bold text-champagne text-3xl md:text-4xl tracking-tight mb-6 leading-tight">
                Tradition &amp; Craft
              </h2>
              <p className="font-body text-sm text-champagne/75 leading-relaxed mb-8">
                South Indian celebrations often bring together jasmine
                garlands, marigold decorations, floral arrangements and
                ceremonial stages. These details can be adapted to the traditions
                and atmosphere of each occasion.
              </p>
              <div className="space-y-6">
                {CRAFT_POINTS.map((point) => (
                  <div key={point.label} className="flex gap-4">
                    <div
                      aria-hidden="true"
                      className="w-px bg-gold-antique/40 shrink-0 mt-1"
                      style={{ minHeight: "100%" }}
                    />
                    <div>
                      <p className="font-body font-semibold text-gold-antique text-sm mb-1">
                        {point.label}
                      </p>
                      <p className="font-body text-xs text-champagne/70 leading-relaxed">
                        {point.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── OCCASIONS WE DECORATE ────────────────────────── */}
      <section className="bg-ivory py-20 md:py-28">
        <Container size="wide">
          <div className="text-center mb-14">
            <p className="font-accent text-xl md:text-2xl text-gold-antique mb-2">
              From Sacred to Celebratory
            </p>
            <h2 className="font-display font-bold text-burgundy text-3xl md:text-4xl tracking-tight mb-4">
              Occasions We Decorate
            </h2>
            <DecorativeDivider />
          </div>

          <div className="max-w-3xl mx-auto">
            <div>
              <p className="font-body text-sm text-charcoal/75 leading-relaxed mb-6">
                From wedding ceremonies to family milestones and professional gatherings,
                explore decoration ideas for your occasion.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 border-t border-gold-antique/25">
                {CORE_SERVICE_CATEGORIES.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services#${service.id}`}
                    className="font-display text-lg text-burgundy py-3 border-b border-gold-antique/25 hover:text-gold-dark transition-colors"
                  >
                    {service.title} <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
              <Link href="/services" className={`${buttonStyles({ variant: "secondary", size: "md" })} mt-8`}>
                Explore Our Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 border-t border-gold-antique/15">
        <Container size="narrow" className="text-center">
          <p className="font-accent text-2xl md:text-3xl text-gold-antique mb-3">
            Your Vision. Our Craft.
          </p>
          <h2 className="font-display font-bold text-burgundy text-3xl md:text-4xl tracking-tight mb-4">
            Let&apos;s Bring Your Vision to Life.
          </h2>
          <p className="font-body text-sm text-charcoal/65 max-w-lg mx-auto mb-8 leading-relaxed">
            Share your celebration with us. We&apos;ll listen, design, and
            execute a floral concept that honours your occasion with beauty and
            sincerity.
          </p>
          <DecorativeDivider />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className={buttonStyles({ variant: "primary", size: "md" })}>
                Get in Touch
              </Link>
            <Link href="/services" className={buttonStyles({ variant: "secondary", size: "md" })}>
                Explore Services
              </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
