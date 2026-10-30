"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { BUSINESS_DATA } from "@/data/business";
import { cn } from "@/lib/utils";

export interface HeroProps {
  imageDesktop?: string;
  imageMobile?: string;
  imageAlt?: string;
  className?: string;
}

/**
 * Premium Cinematic Homepage Hero for Hassanmba Events.
 *
 * Theme: Royal Indian Heritage × Floral Elegance
 * Features:
 * - Responsive art direction: dedicated desktop & mobile portrait assets
 * - Full-bleed edge-to-edge layout extending behind transparent navbar
 * - Left-aligned editorial composition (600–740px max width)
 * - Three locked fonts: Bodoni Moda (H1), Jost (body & buttons), Pinyon Script (accent)
 * - Directional cinematic overlay with high-contrast warm ivory typography
 * - Coordinated entrance animations with reduced-motion support
 */
export function Hero({
  imageDesktop = "/images/hero-desktop.webp",
  imageMobile = "/images/hero-mobile.webp",
  imageAlt = "Illustrative wedding floral stage",
  className,
}: HeroProps) {
  // Use centralized business naming data for the eyebrow
  const eyebrowLocation = `${BUSINESS_DATA.brand.name.toUpperCase()} · ${BUSINESS_DATA.address.city.toUpperCase()}`;

  const handleScrollCueClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("selected-celebrations") || document.getElementById("overview");
    if (target) {
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  };

  return (
    <section
      data-hero-overlay="true"
      className={cn(
        "relative w-full min-h-[100svh] min-h-[100dvh] flex flex-col justify-between overflow-hidden select-none",
        /* Negate header height so hero background extends behind transparent navbar */
        "-mt-[68px] sm:-mt-[76px] lg:-mt-24 pt-[100px] sm:pt-[112px] lg:pt-[120px] pb-8 sm:pb-10 lg:pb-8",
        className
      )}
      aria-label={`Welcome to ${BUSINESS_DATA.brand.name}`}
    >
      {/* ===================================================================
          1. BACKGROUND LAYER: RESPONSIVE PHOTOGRAPH WITH ART DIRECTION
          =================================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#18060E]">
        <picture className="block h-full w-full">
          <source media="(max-width: 767px)" srcSet={imageMobile} />
          <img src={imageDesktop} alt={imageAlt} fetchPriority="high" className="h-full w-full object-cover object-center" />
        </picture>
        {/* Directional Cinematic Overlays (Darker on Left Text Area, Softer on Right Mandap) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(14, 3, 7, 0.94) 0%, rgba(24, 6, 12, 0.84) 40%, rgba(45, 10, 22, 0.42) 75%, rgba(45, 10, 22, 0.2) 100%)",
          }}
        />

        {/* Bottom subtle vignette to ensure mobile and desktop text legibility */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(14, 3, 7, 0.88) 0%, rgba(14, 3, 7, 0.4) 30%, transparent 65%)",
          }}
        />
      </div>

      {/* ===================================================================
          2. MAIN EDITORIAL CONTENT (Left-Aligned, 600–740px Max Width)
          =================================================================== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 my-auto">
        <div className="max-w-xl md:max-w-2xl lg:max-w-[700px] xl:max-w-[740px] text-left">
          {/* Eyebrow Label with fine gold rule */}
          <div className="animate-hero-eyebrow flex items-center gap-3 mb-3 sm:mb-4">
            <span className="w-8 sm:w-12 h-px bg-gold-antique/80" aria-hidden="true" />
            <span className="font-body font-medium text-[11px] sm:text-xs tracking-[0.24em] uppercase text-champagne drop-shadow-sm">
              {eyebrowLocation}
            </span>
          </div>

          {/* Primary Editorial Headline (H1 — Bodoni Moda) */}
          <h1 className="animate-hero-headline font-display font-bold text-ivory tracking-tight text-[clamp(2rem,9.5vw,2.875rem)] sm:text-[56px] md:text-[64px] lg:text-[clamp(68px,6vw,88px)] leading-[1.06] mb-3 drop-shadow-sm">
            <span className="block">Celebrations,</span>
            <span className="block text-champagne/95">Beautifully Adorned.</span>
          </h1>

          {/* Locked Accent Font Treatment (Pinyon Script) */}
          <div className="animate-hero-accent mb-4 sm:mb-5">
            <span className="font-accent text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-gold-light/95 leading-none block drop-shadow-sm">
              With Love & Tradition
            </span>
          </div>

          {/* Supporting Description (Jost) */}
          <p className="animate-hero-desc font-body text-sm sm:text-base md:text-lg text-ivory/90 font-normal leading-relaxed max-w-lg mb-6 sm:mb-7 drop-shadow-sm">
            Thoughtfully crafted floral decorations for weddings, traditional ceremonies, and life&apos;s most meaningful occasions.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="animate-hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2.5 bg-ivory text-burgundy border border-gold-antique/60 hover:bg-white hover:border-gold-antique font-body font-medium text-xs tracking-[0.16em] uppercase px-7 py-4 rounded-xs shadow-royal transition-all duration-200 active:translate-y-[1px] min-h-[48px] select-none"
            >
              <span>Plan Your Event</span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1 shrink-0"
                aria-hidden="true"
              />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/our-work"
              className="group inline-flex items-center justify-center border border-champagne/55 text-champagne hover:text-white hover:border-gold-antique hover:bg-champagne/15 font-body font-medium text-xs tracking-[0.16em] uppercase px-7 py-4 rounded-xs transition-all duration-200 active:translate-y-[1px] min-h-[48px] select-none backdrop-blur-xs"
            >
              <span>Explore Inspiration</span>
            </Link>
          </div>
        </div>
      </div>

      <p className="relative z-10 mt-5 mb-0 text-center font-body text-xs text-champagne/80">Illustrative decoration concept</p>

      {/* ===================================================================
          3. RESTRAINED SCROLL CUE
          =================================================================== */}
      <div className="relative z-10 w-full flex justify-center pt-3">
        <a
          href="#selected-celebrations"
          onClick={handleScrollCueClick}
          aria-label="Scroll down to explore celebrations"
          className="animate-hero-scroll group flex flex-col items-center gap-2 text-champagne/80 hover:text-champagne transition-colors outline-none focus-visible:ring-1 focus-visible:ring-gold-antique rounded-xs p-1"
        >
          <span className="font-body text-[10px] tracking-[0.26em] uppercase font-medium drop-shadow-sm">
            Scroll to Explore
          </span>
          <ChevronDown
            className="w-4 h-4 text-gold-antique/90 animate-hero-float"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
