import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function buttonStyles({ variant = "primary", size = "md", className }: Pick<ButtonProps, "variant" | "size" | "className"> = {}) {
  return cn(
    "inline-flex min-h-[44px] max-w-full items-center justify-center font-body font-medium transition-all duration-200 tracking-wider uppercase text-xs text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy disabled:opacity-50 disabled:pointer-events-none rounded-xs select-none",
    variant === "primary" && "bg-burgundy text-ivory hover:bg-burgundy-hover shadow-sm active:translate-y-[1px]",
    variant === "secondary" && "bg-champagne/40 text-charcoal border border-gold-antique/60 hover:bg-champagne/80 hover:border-gold-antique active:translate-y-[1px]",
    variant === "gold" && "bg-gold-antique text-charcoal hover:bg-gold-dark hover:text-ivory shadow-sm active:translate-y-[1px]",
    variant === "outline" && "border border-burgundy/80 text-burgundy hover:bg-burgundy/5 active:translate-y-[1px]",
    variant === "ghost" && "text-charcoal hover:bg-champagne/30 active:bg-champagne/50",
    size === "sm" && "px-4 py-2 text-[11px]",
    size === "md" && "px-6 py-3 text-xs tracking-widest",
    size === "lg" && "px-8 py-4 text-sm tracking-widest",
    className
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={buttonStyles({ variant, size, className })} {...props} />
  )
);
Button.displayName = "Button";
