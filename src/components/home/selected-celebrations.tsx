"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FEATURED_CELEBRATIONS, CelebrationItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ShowcaseCardProps {
  item: CelebrationItem;
  className?: string;
  isPrimary?: boolean;
}

function ShowcaseCard({ item, className, isPrimary = false }: ShowcaseCardProps) {
  if (!isPrimary) {
    return (
      <Link
        href="/our-work"
        className={cn("group block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-burgundy focus-visible:outline-offset-4", className)}
        style={{ maxWidth: item.width }}
      >
        <div className="overflow-hidden bg-champagne/30">
          <Image
            src={item.imageSrc}
            alt={`${item.title} — illustrative decoration concept`}
            width={item.width}
            height={item.height}
            sizes={`(max-width: ${item.width}px) 100vw, ${item.width}px`}
            className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
        <div className="pt-3">
          <p className="mb-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-dark">
            {item.category}
          </p>
          <h3 className="font-display text-lg font-semibold leading-tight text-burgundy transition-colors group-hover:text-gold-dark">
            {item.title}
          </h3>
          <p className="mt-1 mb-0 font-body text-xs text-charcoal/70">{item.accentNote}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/our-work"
      className={cn(
        "group relative block w-full overflow-hidden rounded-xs border border-gold-antique/25 bg-[#18060E] text-ivory transition-all duration-300 hover:border-gold-antique/60 select-none",
        className
      )}
    >
      {/* Background Media with Subtle Zoom Interaction */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
        <Image
          src={item.imageSrc}
          alt={`${item.title} — illustrative decoration concept`}
          width={item.width}
          height={item.height}
          sizes="(max-width: 1023px) 100vw, 60vw"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />

        {/* Minimal Contrast Gradient (Preserves Photographic Vibrancy) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#100307]/90 via-[#100307]/20 to-transparent" />
      </div>

      {/* Card Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 lg:p-7">
        {/* Top Tag & Indicator */}
        <div className="flex items-center justify-between">
          <span className="font-body text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne bg-burgundy/75 backdrop-blur-sm border border-gold-antique/30 px-3 py-1 rounded-xs">
            {item.category}
          </span>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gold-antique/40 text-gold-antique bg-burgundy/50 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ivory group-hover:border-gold-antique">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Bottom Title & Accent Note */}
        <div>
          <h3
            className={cn(
              "font-display font-semibold text-ivory tracking-tight transition-colors duration-200 group-hover:text-champagne mb-1.5",
              isPrimary ? "text-2xl sm:text-3xl lg:text-4xl" : "text-lg sm:text-xl"
            )}
          >
            {item.title}
          </h3>
          <p className="font-body text-xs sm:text-sm text-ivory/80 max-w-md line-clamp-2">
            {item.accentNote}
          </p>
        </div>
      </div>
    </Link>
  );
}

/**
 * Section 02: Selected Celebrations.
 * Asymmetrical editorial showcase integrating supplied concept photography.
 */
export function SelectedCelebrations() {
  const dominantItem = FEATURED_CELEBRATIONS[0]; // gallery-royal-mandap-wide.webp
  const secondaryItem = FEATURED_CELEBRATIONS[1]; // gallery-reception-stage.webp
  const tertiaryItem = FEATURED_CELEBRATIONS[2]; // gallery-temple-entrance.webp
  const fourthItem = FEATURED_CELEBRATIONS[3]; // gallery-wedding-mandap.webp
  const fifthItem = FEATURED_CELEBRATIONS[4]; // gallery-wedding-aisle.webp
  const sixthItem = FEATURED_CELEBRATIONS[5]; // gallery-outdoor-floral-arch.webp

  return (
    <section
      id="selected-celebrations"
      className="w-full py-20 sm:py-24 lg:py-32 bg-ivory text-charcoal scroll-mt-20 border-t border-gold-antique/20"
      aria-label="Selected Celebrations Inspiration Gallery"
    >
      <Container size="default">
        {/* Section Header Composition */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-gold-antique/20">
          <div className="max-w-2xl text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-gold-antique" aria-hidden="true" />
              <span className="font-body font-medium text-xs tracking-[0.22em] uppercase text-gold-dark">
                Celebration Inspiration
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12]">
              A Gallery of <br />
              <span className="text-burgundy">Beautiful Celebrations</span>
            </h2>
          </div>

          {/* Accent Script Detail & Inspiration Note */}
          <div className="text-left md:text-right shrink-0">
            <span className="font-accent text-3xl sm:text-4xl text-gold-dark block">
              Inspired by Tradition
            </span>
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/60 mt-1 block">
              Illustrative Decoration Concepts
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <div className="space-y-6 sm:space-y-8">
          {/* Top Row: Dominant 7-Col Showcase + 5-Col Stacked Pair */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Dominant Featured Showcase (1672px High Res) */}
            <div className="lg:col-span-7">
              <ShowcaseCard
                item={dominantItem}
                isPrimary
                className="h-[clamp(18rem,90vw,24rem)] sm:h-[460px] lg:h-[530px]"
              />
            </div>

            {/* Two Stacked Secondary Showcases */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-5 sm:gap-8 lg:flex lg:flex-col">
              <ShowcaseCard
                item={secondaryItem}
                className="self-start"
              />
              <ShowcaseCard
                item={tertiaryItem}
                className="self-end"
              />
            </div>
          </div>

          {/* Bottom Row: 3-Column Editorial Array (Sized for smaller natural crops) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 items-start">
            <ShowcaseCard
              item={fourthItem}
            />
            <ShowcaseCard
              item={fifthItem}
              className="justify-self-end md:justify-self-center"
            />
            <ShowcaseCard
              item={sixthItem}
              className="col-span-2 justify-self-center md:col-span-1 md:justify-self-end"
            />
          </div>
        </div>

        <p className="mt-6 text-center font-body text-xs text-charcoal/65">Images are illustrative decoration concepts, not verified photographs of client events.</p>

        {/* Bottom Section Pathway CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/our-work"
            className="group inline-flex items-center justify-center gap-2 font-body font-medium text-xs tracking-[0.18em] uppercase px-8 py-4 bg-burgundy text-ivory hover:bg-burgundy-hover rounded-xs shadow-sm transition-all duration-200 select-none min-h-[46px]"
          >
            <span>Explore Inspiration Gallery</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
