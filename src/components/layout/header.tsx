"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/ui/brand-logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { PrimaryCta } from "./primary-cta";
import { cn } from "@/lib/utils";
import { scrollHomeOnCurrentPage } from "./home-logo";

export interface HeaderProps {
  /**
   * Set to true when a cinematic hero overlay is mounted on the page.
   * Enabled for the homepage hero, transitioning to solid sticky upon scroll.
   */
  hasHeroOverlay?: boolean;
  className?: string;
}

/**
 * Royal Navigation Header for Hassanmba Events.
 * Coordinates DesktopNav, MobileNav, BrandLogo, and Primary CTA.
 *
 * Supports two distinct modes:
 * Mode A (Hero Overlay): Activated only on homepage when a cinematic hero is mounted and un-scrolled.
 * Mode B (Solid Sticky): Active on all inner pages and fallback after scrolling.
 */
export function Header({ hasHeroOverlay = true, className }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll offset for sticky solid transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial scroll check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mode A is active ONLY on homepage when hero is enabled AND not scrolled past threshold
  const isOverlayMode = pathname === "/" && hasHeroOverlay && !isScrolled;

  const isCompact = pathname === "/" && isScrolled;

  return (
    <header className={cn("sticky top-0 z-40 h-[68px] w-full pointer-events-none sm:h-[76px] lg:h-24", className)}>
      <div
        className={cn(
        "pointer-events-auto w-full transition-[height,background-color,box-shadow,border-color] duration-300 ease-in-out h-[68px] sm:h-[76px]",
        isCompact ? "lg:h-[76px]" : "lg:h-24",
        isOverlayMode
          ? "bg-gradient-to-b from-charcoal/80 to-transparent text-ivory border-b border-ivory/10 shadow-none"
          : "bg-ivory text-charcoal border-b border-gold-antique/25 shadow-ceremonial",
      )}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-full flex items-center justify-between">
        {/* LEFT REGION: Brand Logo & Wordmark */}
        <div className="flex items-center shrink-0">
          <BrandLogo
            variant="full"
            isOverlay={isOverlayMode}
            onClick={scrollHomeOnCurrentPage}
          />
        </div>

        {/* CENTER REGION: Desktop Navigation Links (Visible on lg: 1024px+) */}
        <div className="hidden xl:flex items-center justify-center flex-1 px-6">
          <DesktopNav isOverlay={isOverlayMode} />
        </div>

        {/* RIGHT REGION: Primary Enquiry CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Primary CTA (Desktop) */}
          <div className="hidden xl:block">
            <PrimaryCta isOverlay={isOverlayMode} />
          </div>

          {/* Mobile Navigation Trigger & Drawer */}
          <MobileNav isOverlay={isOverlayMode} />
        </div>
      </div>
      </div>
    </header>
  );
}
