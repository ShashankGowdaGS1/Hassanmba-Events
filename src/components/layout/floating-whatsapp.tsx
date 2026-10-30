"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
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
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="font-body text-xs font-semibold tracking-wide hidden sm:inline">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}

