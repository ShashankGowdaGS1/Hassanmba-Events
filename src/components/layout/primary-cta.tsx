import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PrimaryCtaProps {
  isOverlay?: boolean;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

/**
 * Primary CTA Button for Hassanmba Events Navigation.
 * Links to /contact with the text "Plan Your Event" and restrained arrow hover.
 */
export function PrimaryCta({
  isOverlay = false,
  className,
  onClick,
  fullWidth = false,
}: PrimaryCtaProps) {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 font-body font-medium text-xs tracking-[0.16em] uppercase rounded-xs transition-all duration-200 select-none min-h-[44px] px-5 py-2.5 sm:px-6 outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2",
        isOverlay
          ? "bg-ivory text-burgundy border border-gold-antique/60 hover:bg-white hover:border-gold-antique shadow-md active:translate-y-[1px]"
          : "bg-burgundy text-ivory hover:bg-burgundy-hover border border-burgundy shadow-sm active:translate-y-[1px]",
        fullWidth && "w-full",
        className
      )}
    >
      <span>Plan Your Event</span>
      <ArrowRight
        className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1 shrink-0"
        aria-hidden="true"
      />
    </Link>
  );
}

