import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BUSINESS_DATA } from "@/data/business";

/**
 * Section 04: Our Story — Rooted in Tradition.
 * Deep royal burgundy brand storytelling section integrating the heritage-floral-swing photograph
 * within an architectural ceremonial arch frame.
 */
export function HeritageStory() {
  return (
    <section
      id="our-story"
      className="w-full py-20 sm:py-28 lg:py-36 bg-[#44091B] text-ivory relative overflow-hidden"
      aria-label="Our Story and Heritage"
    >
      {/* Background Luminous Radial Tint */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(193, 138, 55, 0.22) 0%, transparent 55%), radial-gradient(circle at 10% 80%, rgba(133, 24, 57, 0.35) 0%, transparent 60%)",
        }}
      />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Editorial Brand Narrative */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-gold-antique" aria-hidden="true" />
              <span className="font-body font-medium text-xs tracking-[0.24em] uppercase text-champagne">
                Our Story
              </span>
            </div>

            {/* Main Story Heading */}
            <h2 className="font-display font-bold text-ivory text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.12]">
              Rooted in Tradition. <br />
              <span className="text-champagne/95">Created for Celebration.</span>
            </h2>

            {/* Pinyon Script Accent Phrase */}
            <div className="pt-1">
              <span className="font-accent text-3xl sm:text-4xl text-gold-light/95 block leading-none">
                Rooted in Tradition
              </span>
            </div>

            {/* Narrative Body (Factual, No Fabricated Claims) */}
            <div className="space-y-4 font-body text-sm sm:text-base text-ivory/85 leading-relaxed pt-2">
              <p>
                Based in the heritage city of Hassan, Karnataka,{" "}
                <strong className="text-champagne font-semibold">
                  {BUSINESS_DATA.brand.name}
                </strong>{" "}
                offers floral decoration inspired by South Indian traditions. Find us at {BUSINESS_DATA.address.street}, {BUSINESS_DATA.address.landmark}, {BUSINESS_DATA.address.city}.
              </p>
              <p>
                In Indian weddings and ceremonies, flowers are not merely ornaments—they are sacred symbols of blessing, joy, and new beginnings. From fragrant jasmine garlands and vibrant marigold toranas to sculpted mandap backdrops and contemporary reception stages, each creation is tailored to honor cultural customs while delivering regal elegance.
              </p>
              <p className="text-xs sm:text-sm text-ivory/70 italic border-l-2 border-gold-antique/50 pl-4 py-1">
                Share the traditions and details that matter to you, and explore floral ideas for your family&apos;s celebration.
              </p>
            </div>

            {/* Pathway CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2.5 bg-ivory text-burgundy hover:bg-white border border-gold-antique/60 font-body font-medium text-xs tracking-[0.18em] uppercase px-8 py-4 rounded-xs shadow-royal transition-all duration-200 select-none min-h-[46px]"
              >
                <span>Learn About Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Ceremonial Arch Showcase Integrating Swing Photography */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-t-[140px] rounded-b-xs border-2 border-gold-antique/40 overflow-hidden shadow-2xl bg-[#2D0613] p-6 sm:p-8 flex flex-col justify-between items-center text-center">
              {/* Decorative Arch Background */}
              <div className="absolute inset-0 z-0">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at 50% 25%, rgba(193, 138, 55, 0.28) 0%, rgba(68, 9, 27, 0.95) 75%)",
                  }}
                />
                {/* Traditional Inner Arch Contour */}
                <div className="absolute inset-3.5 rounded-t-[125px] border border-gold-antique/25 pointer-events-none" />
              </div>

              {/* Central Royal Emblem Medallion */}
              <div className="relative z-10 pt-4 mb-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-2 border-gold-antique/60 shadow-royal">
                  <Image
                    src={BUSINESS_DATA.brand.logo.src}
                    alt={BUSINESS_DATA.brand.logo.alt}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Integrated Heritage Floral Swing Photography (Contained to preserve native resolution) */}
              <div className="relative z-10 w-full max-w-[320px] rounded-xs overflow-hidden border border-gold-antique/40 bg-[#18040C]">
                <Image
                  src="/media/hassanmba/heritage-floral-swing.webp"
                  alt="Illustrative ceremonial floral swing concept"
                  width={1370}
                  height={1148}
                  sizes="(max-width: 640px) 280px, 320px"
                  className="block h-auto w-full"
                />
              </div>

              {/* Arch Caption */}
              <div className="relative z-10 space-y-1 pt-4 pb-2">
                <span className="font-accent text-2xl text-gold-light block">
                  Artisanal Floral Craftsmanship
                </span>
                <p className="font-display text-base text-ivory tracking-wide font-medium">
                  {BUSINESS_DATA.brand.descriptor}
                </p>
                <p className="font-body text-[11px] text-champagne/80 tracking-widest uppercase">
                  {BUSINESS_DATA.brand.locationLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
