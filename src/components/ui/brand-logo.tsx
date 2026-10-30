import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_DATA } from "@/data/business";
import { cn } from "@/lib/utils";

export interface BrandLogoProps {
  variant?: "full" | "horizontal" | "emblem" | "wordmark" | "compact";
  className?: string;
  isLink?: boolean;
  priority?: boolean;
  isOverlay?: boolean;
  onClick?: () => void;
}

/**
 * Brand Logo component for Hassanmba Events.
 * Pairs the royal emblem with the Bodoni Moda brand wordmark.
 * Supports both solid (ivory background) and hero overlay (transparent) modes.
 */
export function BrandLogo({
  variant = "full",
  className,
  isLink = true,
  priority = false,
  isOverlay = false,
  onClick,
}: BrandLogoProps) {
  const titleColor = isOverlay
    ? "text-ivory drop-shadow-sm"
    : "text-burgundy";

  const subtitleColor = isOverlay
    ? "text-champagne drop-shadow-sm"
    : "text-gold-dark";

  const emblemBorder = isOverlay
    ? "border-gold-light/60 shadow-md"
    : "border-gold-antique/50 shadow-sm";

  const content = (
    <div
      className={cn(
        "inline-flex items-center gap-3 select-none transition-colors duration-300",
        className
      )}
    >
      {variant === "wordmark" ? (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300",
              titleColor
            )}
          >
            {BUSINESS_DATA.brand.name}
          </span>
          <span
            className={cn(
              "font-body text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-medium mt-0.5 transition-colors duration-300",
              subtitleColor
            )}
          >
            {BUSINESS_DATA.brand.descriptor}
          </span>
        </div>
      ) : variant === "emblem" ? (
        <div
          className={cn(
            "relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full border shrink-0 transition-colors duration-300",
            emblemBorder
          )}
        >
          <Image
            src={BUSINESS_DATA.brand.logo.src}
            alt={BUSINESS_DATA.brand.logo.alt}
            fill
            sizes="48px"
            className="object-cover"
            priority={priority}
          />
        </div>
      ) : variant === "compact" ? (
        /* Mobile-optimized compact layout */
        <div className="flex items-center gap-2.5">
          <div
            className={cn(
              "relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden rounded-full border shrink-0 transition-colors duration-300",
              emblemBorder
            )}
          >
            <Image
              src={BUSINESS_DATA.brand.logo.src}
              alt={BUSINESS_DATA.brand.logo.alt}
              fill
              sizes="40px"
              className="object-cover"
              priority={priority}
            />
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-display text-lg sm:text-xl font-bold tracking-tight leading-none transition-colors duration-300",
                titleColor
              )}
            >
              {BUSINESS_DATA.brand.name}
            </span>
            <span
              className={cn(
                "font-body text-[8px] sm:text-[9px] tracking-[0.18em] uppercase font-medium mt-0.5 transition-colors duration-300",
                subtitleColor
              )}
            >
              {BUSINESS_DATA.brand.descriptor}
            </span>
          </div>
        </div>
      ) : (
        /* Full Desktop Composition: Emblem + Wordmark */
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "relative w-11 h-11 sm:w-12 sm:h-12 lg:w-[52px] lg:h-[52px] overflow-hidden rounded-full border shrink-0 transition-colors duration-300",
              emblemBorder
            )}
          >
            <Image
              src={BUSINESS_DATA.brand.logo.src}
              alt={BUSINESS_DATA.brand.logo.alt}
              fill
              sizes="(max-width: 768px) 44px, 52px"
              className="object-cover"
              priority={priority}
            />
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-display text-xl sm:text-2xl font-bold tracking-tight leading-none transition-colors duration-300",
                titleColor
              )}
            >
              {BUSINESS_DATA.brand.name}
            </span>
            <span
              className={cn(
                "font-body text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-medium mt-1 transition-colors duration-300",
                subtitleColor
              )}
            >
              {BUSINESS_DATA.brand.descriptor}
            </span>
          </div>
        </div>
      )}
    </div>
  );

  if (isLink) {
    return (
      <Link
        href="/"
        onClick={onClick}
        className="inline-block transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded-xs"
        aria-label={`${BUSINESS_DATA.brand.name} - Home`}
      >
        {content}
      </Link>
    );
  }

  return content;
}
