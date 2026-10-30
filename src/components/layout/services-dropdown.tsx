"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { SERVICES_DROPDOWN_ITEMS } from "@/data/navigation";
import { cn } from "@/lib/utils";

export interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  triggerId?: string;
  className?: string;
}

/**
 * Editorial Services Dropdown for Hassanmba Events.
 * Features warm ivory styling, subtle gold accents, and zero-gap hover bridge.
 */
export function ServicesDropdown({
  isOpen,
  onClose,
  triggerId = "services-menu-trigger",
  className,
}: ServicesDropdownProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !document.getElementById(triggerId)?.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        document.getElementById(triggerId)?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerId]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      id="services-dropdown-panel"
      aria-labelledby={triggerId}
      className={cn(
        "absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 w-72 animate-in fade-in-0 zoom-in-95 duration-150 select-none",
        /* Invisible hover bridge to eliminate any gap between trigger and panel */
        "before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:bg-transparent",
        className
      )}
    >
      <div className="bg-ivory border border-gold-antique/30 rounded-xs shadow-royal py-2.5 overflow-hidden">
        {/* Subtle decorative top accent bar */}
        <div className="px-4 pt-1 pb-2 border-b border-gold-antique/15 flex items-center justify-between">
          <span className="font-accent text-base text-gold-dark tracking-wide">
            Sacred Celebrations
          </span>
          <span className="w-1.5 h-1.5 rotate-45 bg-burgundy/70" />
        </div>

        {/* Services List */}
        <div className="py-1">
          {SERVICES_DROPDOWN_ITEMS.map((service, index) => (
            <Link
              key={service.slug}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              href={service.href}
              onClick={onClose}
              className="group flex items-center justify-between px-4 py-2.5 text-[13px] font-body text-charcoal/85 tracking-wide hover:text-burgundy hover:bg-champagne/25 transition-all duration-150 outline-none focus-visible:bg-champagne/30 focus-visible:text-burgundy"
            >
              <span className="transition-transform duration-150 group-hover:translate-x-1">
                {service.title}
              </span>
              <span className="w-1 h-1 rounded-full bg-gold-antique/0 group-hover:bg-gold-antique transition-all duration-150" />
            </Link>
          ))}
        </div>

        {/* View all services prompt */}
        <div className="mt-1 pt-2 px-4 border-t border-gold-antique/15 bg-champagne/10">
          <Link
            href="/services"
            onClick={onClose}
            className="block text-center text-[11px] font-body uppercase tracking-[0.18em] text-gold-dark hover:text-burgundy font-semibold py-1 transition-colors"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </div>
  );
}

