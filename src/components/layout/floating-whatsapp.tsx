"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BUSINESS_DATA } from "@/data/business";

/**
 * Floating WhatsApp Action.
 * Provides accessible, immediate booking and enquiry capability.
 */
export function FloatingWhatsApp() {
  const pathname = usePathname();
  const [formVisible, setFormVisible] = useState(false);
  const [overlapsControl, setOverlapsControl] = useState(false);
  const [focused, setFocused] = useState(false);
  const floatingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (pathname !== "/contact") return;
    const form = document.getElementById("event-enquiry-section");
    if (!form) return;
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting));
    observer.observe(form);
    return () => observer.disconnect();
  }, [pathname]);

  // Keep the shortcut from covering an interactive element as the page scrolls.
  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const floating = floatingRef.current?.getBoundingClientRect();
      if (!floating) return;
      const controls = document.querySelectorAll<HTMLElement>(
        "main a, main button, main input, main select, main textarea, footer a"
      );
      const overlaps = Array.from(controls).some((control) => {
        if (!control.getClientRects().length || control.closest('[aria-hidden="true"], [inert]')) return false;
        const rect = control.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 &&
          rect.left < floating.right + 4 && rect.right > floating.left - 4 &&
          rect.top < floating.bottom + 4 && rect.bottom > floating.top - 4;
      });
      setOverlapsControl(overlaps);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    const main = document.querySelector("main");
    const changes = new MutationObserver(schedule);
    if (main) changes.observe(main, { childList: true, subtree: true });
    const sizes = new ResizeObserver(schedule);
    if (main) sizes.observe(main);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("focusin", schedule);
    window.visualViewport?.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      changes.disconnect();
      sizes.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("focusin", schedule);
      window.visualViewport?.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  const hidden = !focused && ((pathname === "/contact" && formVisible) || overlapsControl);
  return (
    <aside ref={floatingRef} aria-label="Quick Communication" aria-hidden={hidden} style={{ bottom: "max(1rem, calc(env(safe-area-inset-bottom, 0px) + 0.5rem))", right: "max(1rem, calc(env(safe-area-inset-right, 0px) + 0.5rem))" }} className={`fixed z-30 transition-opacity ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <a
        href={BUSINESS_DATA.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Enquire via WhatsApp with ${BUSINESS_DATA.brand.name}`}
        tabIndex={hidden ? -1 : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="flex items-center gap-2 px-4 py-3 bg-[#25D366] text-[#103b24] rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" aria-hidden="true">
          <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.45L3.5 20.5l1.35-4.3A8.5 8.5 0 1 1 20.5 11.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8.3 7.25c-.2-.43-.4-.44-.6-.45h-.52c-.18 0-.46.07-.7.33-.24.27-.91.89-.91 2.16s.93 2.5 1.06 2.67c.13.17 1.8 2.88 4.45 3.92 2.2.86 2.65.69 3.13.65.48-.05 1.55-.64 1.77-1.26.22-.62.22-1.15.15-1.26-.07-.11-.24-.18-.5-.31s-1.55-.76-1.79-.85c-.24-.09-.41-.13-.58.13-.18.26-.67.85-.82 1.02-.15.18-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.3a7.86 7.86 0 0 1-1.46-1.82c-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.43.09-.18.04-.33-.02-.46-.07-.13-.58-1.42-.76-1.82Z" fill="currentColor" />
        </svg>
        <span className="font-body text-xs font-semibold tracking-wide hidden sm:inline">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}

