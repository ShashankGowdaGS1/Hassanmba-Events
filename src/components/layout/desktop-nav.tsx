"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { ServicesDropdown } from "./services-dropdown";
import { cn } from "@/lib/utils";

export interface DesktopNavProps {
  isOverlay?: boolean;
  className?: string;
}

/**
 * Desktop Navigation component for Hassanmba Events.
 * Implements animated thin gold underlines, route awareness,
 * and an editorial Services dropdown with seamless hover bridging.
 */
export function DesktopNav({ isOverlay = false, className }: DesktopNavProps) {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      if (!servicesRef.current?.contains(document.activeElement)) {
        setIsServicesOpen(false);
      }
    }, 150);
  };

  return (
    <nav
      className={cn("flex items-center gap-7 lg:gap-9", className)}
      aria-label="Primary Navigation"
    >
      {MAIN_NAVIGATION.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        if (item.hasDropdown) {
          return (
            <div
              key={item.href}
              ref={servicesRef}
              className="relative flex items-center group py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setIsServicesOpen(false);
                }
              }}
            >
              {/* Clickable Main Services Link */}
              <Link
                href={item.href}
                className={cn(
                  "font-body text-[14px] lg:text-[15px] tracking-wide transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-burgundy rounded-xs py-1",
                  isOverlay
                    ? isActive
                      ? "text-white font-semibold drop-shadow-sm"
                      : "text-ivory/95 hover:text-white drop-shadow-sm"
                    : isActive
                      ? "text-burgundy font-semibold"
                      : "text-charcoal/80 hover:text-burgundy"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative pb-1">
                  {item.title}
                  {/* Refined thin gold underline under actual text characters */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 ease-out",
                      isOverlay ? "bg-gold-light" : "bg-gold-antique",
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    )}
                    aria-hidden="true"
                  />
                </span>
              </Link>

              {/* Accessible Dropdown Toggle Chevron */}
              <button
                type="button"
                id="services-menu-trigger"
                aria-expanded={isServicesOpen}
                aria-controls={isServicesOpen ? "services-dropdown-panel" : undefined}
                aria-label="Toggle Services submenu"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={cn(
                  "p-1 ml-0.5 rounded-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-burgundy",
                  isOverlay
                    ? "text-ivory/80 hover:text-white"
                    : "text-charcoal/70 hover:text-burgundy"
                )}
              >
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200 ease-out",
                    isServicesOpen && "rotate-180 text-gold-antique"
                  )}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown Panel with Hover Bridge */}
              <ServicesDropdown
                isOpen={isServicesOpen}
                onClose={() => setIsServicesOpen(false)}
                triggerId="services-menu-trigger"
              />
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group font-body text-[14px] lg:text-[15px] tracking-wide transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-burgundy rounded-xs py-1",
              isOverlay
                ? isActive
                  ? "text-white font-semibold drop-shadow-sm"
                  : "text-ivory/95 hover:text-white drop-shadow-sm"
                : isActive
                  ? "text-burgundy font-semibold"
                  : "text-charcoal/80 hover:text-burgundy"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            <span className="relative pb-1">
              {item.title}
              {/* Refined thin gold underline under actual text characters */}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 ease-out",
                  isOverlay ? "bg-gold-light" : "bg-gold-antique",
                  isActive
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                )}
                aria-hidden="true"
              />
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

