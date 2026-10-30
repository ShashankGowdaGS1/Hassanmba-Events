import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_DATA } from "@/data/business";
import { cn } from "@/lib/utils";

export interface BrandLogoProps {
  variant?: "full" | "horizontal" | "emblem" | "wordmark" | "compact";
  className?: string;
  isLink?: boolean;
  priority?: boolean;
  isOverlay?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function BrandLogo({ variant = "full", className, isLink = true, priority = false, isOverlay = false, onClick }: BrandLogoProps) {
  const content = (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      {variant !== "wordmark" && (
        <Image src={BUSINESS_DATA.brand.logo.src} alt="" width={52} height={52} priority={priority} className={cn("shrink-0 rounded-full border border-gold-antique/50 object-cover", variant === "compact" ? "w-10 h-10" : "w-12 h-12 lg:w-[52px] lg:h-[52px]")} />
      )}
      {variant !== "emblem" && <div className="flex flex-col">
      <span className={cn("font-display font-bold tracking-tight leading-none", variant === "compact" ? "text-lg sm:text-xl" : "text-xl sm:text-2xl", isOverlay ? "text-ivory" : "text-burgundy")}>
        {BUSINESS_DATA.brand.name}
      </span>
      <span className={cn("font-body text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-medium mt-1", isOverlay ? "text-champagne" : "text-gold-dark")}>
        {BUSINESS_DATA.brand.descriptor}
      </span>
      </div>}
    </div>
  );
  return isLink ? <Link href="/" onClick={onClick} className="inline-block transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy" aria-label={`${BUSINESS_DATA.brand.name} - Home`}>{content}</Link> : content;
}
