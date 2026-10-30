"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { MAIN_NAVIGATION, SERVICES_DROPDOWN_ITEMS } from "@/data/navigation";
import { BUSINESS_DATA } from "@/data/business";
import { BrandLogo } from "@/components/ui/brand-logo";
import { PrimaryCta } from "./primary-cta";
import { cn } from "@/lib/utils";
import { scrollHomeOnCurrentPage } from "./home-logo";

export interface MobileNavProps {
  isOverlay?: boolean;
}

/**
 * Mobile Navigation Drawer for Hassanmba Events.
 * Implements full-height luxury layout, Bodoni Moda navigation titles,
 * expandable Services sub-list, scroll locking, and accessible keyboard dismissal.
 */
export function MobileNav({ isOverlay = false }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer during render if pathname changed
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Handle body scroll lock & Escape key
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Focus close button on open
      closeButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          setIsOpen(false);
          triggerButtonRef.current?.focus();
        } else if (e.key === "Tab" && drawerRef.current) {
          const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
        }
      };
      const desktop = window.matchMedia("(min-width: 1280px)");
      const handleResize = () => { if (desktop.matches) setIsOpen(false); };
      desktop.addEventListener("change", handleResize);

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
        desktop.removeEventListener("change", handleResize);
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    triggerButtonRef.current?.focus();
  };

  return (
    <div className="xl:hidden flex items-center">
      {/* Mobile Hamburger Trigger */}
      <button
        ref={triggerButtonRef}
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? "mobile-navigation-drawer" : undefined}
        onClick={() => setIsOpen(true)}
        className={cn(
          "p-2.5 rounded-xs transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-burgundy",
          isOverlay
            ? "text-ivory hover:text-white"
            : "text-charcoal hover:text-burgundy"
        )}
      >
        <Menu className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* Backdrop & Drawer Container */}
      {isOpen && (
        <div
          ref={drawerRef}
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 flex flex-col bg-ivory text-charcoal animate-in fade-in-0 duration-200"
        >
          {/* Top Bar */}
          <div className="h-[68px] sm:h-[76px] px-4 sm:px-6 border-b border-gold-antique/25 flex items-center justify-between shrink-0 bg-ivory">
            <BrandLogo variant="compact" isLink onClick={(event) => { handleClose(); scrollHomeOnCurrentPage(event); }} />

            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close navigation menu"
              onClick={handleClose}
              className="p-2.5 text-charcoal hover:text-burgundy transition-colors rounded-xs outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 flex flex-col justify-between">
            {/* Primary Links */}
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
              {MAIN_NAVIGATION.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.href}
                      className="border-b border-gold-antique/20 pb-3 mb-2"
                    >
                      <div className="flex items-center justify-between py-2">
                        <Link
                          href={item.href}
                          onClick={handleClose}
                          className={cn(
                            "font-display text-2xl sm:text-3xl tracking-tight transition-colors",
                            isActive ? "text-burgundy font-bold" : "text-charcoal hover:text-burgundy"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.title}
                        </Link>

                        <button
                          type="button"
                          aria-label={
                            isServicesExpanded
                              ? "Collapse services menu"
                              : "Expand services menu"
                          }
                          aria-expanded={isServicesExpanded}
                          aria-controls={isServicesExpanded ? "mobile-services-list" : undefined}
                          onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                          className="p-3 text-charcoal/70 hover:text-burgundy transition-colors"
                        >
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 transition-transform duration-200",
                              isServicesExpanded && "rotate-180 text-gold-antique"
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      {/* Expandable Services List */}
                      {isServicesExpanded && (
                        <div id="mobile-services-list" className="pl-4 pt-1 pb-2 space-y-2 border-l-2 border-gold-antique/30 ml-2 animate-in fade-in-0 duration-150">
                          {SERVICES_DROPDOWN_ITEMS.map((service) => (
                            <Link
                              key={service.slug}
                              href={service.href}
                              onClick={handleClose}
                              className="flex min-h-[44px] items-center py-2 font-body text-sm sm:text-base text-charcoal/80 hover:text-burgundy transition-colors tracking-wide"
                            >
                              {service.title}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            onClick={handleClose}
                            className="inline-block pt-1 font-body text-xs uppercase tracking-widest text-gold-dark font-semibold hover:text-burgundy transition-colors"
                          >
                            Explore All Services →
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <div
                    key={item.href}
                    className="border-b border-gold-antique/20 pb-3 mb-2 flex items-center justify-between"
                  >
                    <Link
                      href={item.href}
                      onClick={handleClose}
                      className={cn(
                        "font-display text-2xl sm:text-3xl tracking-tight transition-colors py-2",
                        isActive ? "text-burgundy font-bold" : "text-charcoal hover:text-burgundy"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.title}
                    </Link>

                    {isActive && (
                      <span className="w-2 h-2 rotate-45 bg-gold-antique" aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Bottom Actions & Accent Details */}
            <div className="pt-8 space-y-6">
              {/* Decorative Accent Phrase */}
              <div className="text-center select-none">
                <p className="font-accent text-2xl sm:text-3xl text-gold-dark tracking-wide">
                  With Love & Tradition
                </p>
                <div className="w-16 h-px bg-gold-antique/40 mx-auto mt-2" />
              </div>

              {/* Main Event Planning CTA */}
              <PrimaryCta
                onClick={handleClose}
                fullWidth
                className="py-3.5 text-xs sm:text-sm tracking-widest shadow-md"
              />

              {/* Direct Communication Quick Links */}
              <div className="pt-2 grid grid-cols-1 min-[360px]:grid-cols-2 gap-3 text-xs font-body text-charcoal/80">
                <a
                  href={BUSINESS_DATA.contact.phonePrimaryTel}
                  className="flex min-h-[44px] items-center justify-center gap-2 py-2 px-3 bg-champagne/30 border border-gold-antique/30 rounded-xs hover:border-gold-antique transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                  <span className="truncate">{BUSINESS_DATA.contact.phonePrimaryDisplay}</span>
                </a>
                <a
                  href={BUSINESS_DATA.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center justify-center gap-2 py-2 px-3 bg-champagne/30 border border-gold-antique/30 rounded-xs hover:border-gold-antique transition-colors text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
