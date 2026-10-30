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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Editorial Brand Narrative */}
          <div className="text-left space-y-6">
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
                The Art of Adornment
              </span>
            </div>

            <div className="space-y-4 font-body text-sm sm:text-base text-ivory/85 leading-relaxed pt-2">
              <p>
                {BUSINESS_DATA.brand.name} is a Hassan-based floral decoration service inspired by traditional South Indian celebrations.
              </p>
              <p>
                Floral arrangements, garlands and decorative details help create an atmosphere that feels meaningful to each occasion.
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
          <figure className="max-w-md mx-auto lg:ml-auto">
            <Image src="/images/heritage-floral-swing.webp" alt="Illustrative traditional floral swing" width={1370} height={1148} sizes="(min-width: 1024px) 40vw, 90vw" className="w-full rounded-t-[140px] border-[0.5mm] border-b-0 border-gold-antique/[0.55]" />
            <figcaption className="mt-2 text-xs text-champagne/70">Illustrative decoration concept</figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
