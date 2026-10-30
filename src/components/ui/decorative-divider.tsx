import React from "react";
import { cn } from "@/lib/utils";

interface DecorativeDividerProps {
  className?: string;
  variant?: "ceremonial" | "simple" | "motif";
}

export function DecorativeDivider({
  className,
  variant = "ceremonial",
}: DecorativeDividerProps) {
  if (variant === "simple") {
    return (
      <div
        className={cn("w-full border-t border-gold-antique/20 my-6", className)}
        role="separator"
      />
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full my-8 select-none",
        className
      )}
      role="separator"
      aria-hidden="true"
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-antique/40 to-gold-antique/70" />
      <div className="mx-4 flex items-center gap-1.5 text-gold-antique">
        <span className="w-1.5 h-1.5 rotate-45 border border-gold-antique/60 bg-ivory" />
        <span className="w-2.5 h-2.5 rotate-45 bg-burgundy/80" />
        <span className="w-1.5 h-1.5 rotate-45 border border-gold-antique/60 bg-ivory" />
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold-antique/40 to-gold-antique/70" />
    </div>
  );
}

