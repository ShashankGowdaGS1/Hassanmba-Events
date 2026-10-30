"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { DecorativeDivider } from "@/components/ui/decorative-divider";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BUSINESS_DATA } from "@/data/business";

// ─── Types & Data ─────────────────────────────────────────────────────────────

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g01",
    src: "/media/hassanmba/gallery-royal-mandap-wide.webp",
    alt: "Royal Wedding Mandap Full Floral Architecture",
    category: "Weddings",
    width: 1672,
    height: 941,
  },
  {
    id: "g02",
    src: "/media/hassanmba/gallery-wedding-mandap.webp",
    alt: "Traditional Wedding Mandap with Fresh Flowers",
    category: "Weddings",
    width: 1536,
    height: 1024,
  },
  {
    id: "g03",
    src: "/media/hassanmba/gallery-wedding-aisle.webp",
    alt: "Wedding Aisle with Floral Arch and Petal Path",
    category: "Weddings",
    width: 1536,
    height: 1024,
  },
  {
    id: "g04",
    src: "/media/hassanmba/gallery-grand-entry.webp",
    alt: "Grand Floral Entry Gate and Reception Entrance",
    category: "Weddings",
    width: 1024,
    height: 1536,
  },
  {
    id: "g05",
    src: "/media/hassanmba/gallery-reception-stage.webp",
    alt: "Reception Stage with Floral Backdrop and Lighting",
    category: "Reception",
    width: 1536,
    height: 1024,
  },
  {
    id: "g06",
    src: "/media/hassanmba/gallery-outdoor-floral-arch.webp",
    alt: "Outdoor Floral Arch for Reception",
    category: "Reception",
    width: 1536,
    height: 1024,
  },
  {
    id: "g07",
    src: "/media/hassanmba/gallery-temple-entrance.webp",
    alt: "Temple Entrance with Sacred Flower Garlands",
    category: "Temple Events",
    width: 1254,
    height: 1254,
  },
  {
    id: "g08",
    src: "/media/hassanmba/service-temple-flower-garlands.webp",
    alt: "Sacred Temple Flower Garlands and Adornment",
    category: "Temple Events",
    width: 1536,
    height: 1024,
  },
  {
    id: "g09",
    src: "/media/hassanmba/service-baby-shower.webp",
    alt: "Traditional Baby Shower Floral Swing Decoration",
    category: "Family Celebrations",
    width: 1536,
    height: 1024,
  },
  {
    id: "g10",
    src: "/media/hassanmba/service-naming-ceremony.webp",
    alt: "Floral Namakarana Naming Ceremony Setup",
    category: "Family Celebrations",
    width: 1024,
    height: 1536,
  },
  {
    id: "g11",
    src: "/media/hassanmba/heritage-floral-swing.webp",
    alt: "Traditional Floral Heritage Swing",
    category: "Family Celebrations",
    width: 1370,
    height: 1148,
  },
  {
    id: "g12",
    src: "/media/hassanmba/service-housewarming-entrance.webp",
    alt: "Gruhapravesha Entrance Torana and Marigold Decoration",
    category: "Family Celebrations",
    width: 1536,
    height: 1024,
  },
  {
    id: "g13",
    src: "/media/hassanmba/service-flower-closeup.webp",
    alt: "Fresh Flower Close-up Artisanal Detail",
    category: "Floral Details",
    width: 1024,
    height: 1536,
  },
  {
    id: "g14",
    src: "/media/hassanmba/service-flower-arrangement.webp",
    alt: "Artisanal Fresh Flower Arrangement",
    category: "Floral Details",
    width: 1024,
    height: 1536,
  },
  {
    id: "g15",
    src: "/media/hassanmba/service-lotus-arrangement.webp",
    alt: "Lotus Flower Sacred Arrangement",
    category: "Floral Details",
    width: 1351,
    height: 1164,
  },
  {
    id: "g16",
    src: "/media/hassanmba/service-brass-lamp-detail.webp",
    alt: "Ceremonial Brass Lamp with Floral Surround",
    category: "Floral Details",
    width: 1312,
    height: 1199,
  },
  {
    id: "g17",
    src: "/media/hassanmba/cta-floral-jasmine-detail.webp",
    alt: "Jasmine Floral Detail Ceremonial",
    category: "Floral Details",
    width: 1536,
    height: 1024,
  },
  {
    id: "g18",
    src: "/media/hassanmba/service-corporate-event.webp",
    alt: "Sophisticated Corporate Event Stage Floral Installation",
    category: "Corporate Events",
    width: 1536,
    height: 1024,
  },
  {
    id: "g19",
    src: "/media/hassanmba/service-event-banquet.webp",
    alt: "Formal Corporate Banquet Table Floral Centrepiece",
    category: "Corporate Events",
    width: 1370,
    height: 1148,
  },
];

const CATEGORIES = [
  "All",
  "Weddings",
  "Reception",
  "Temple Events",
  "Family Celebrations",
  "Floral Details",
  "Corporate Events",
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  items,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[activeIndex];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => previousFocus?.focus();
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Tab" && dialogRef.current) {
        const controls = Array.from(dialogRef.current.querySelectorAll<HTMLButtonElement>("button:not([disabled])"));
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing: ${item.alt}`}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-charcoal/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        style={{ top: "max(0.5rem, env(safe-area-inset-top, 0px))", right: "max(0.5rem, env(safe-area-inset-right, 0px))" }}
        className="absolute z-10 p-3 text-champagne/80 hover:text-champagne transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-antique"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-champagne/70 hover:text-champagne transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-antique"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-champagne/70 hover:text-champagne transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-antique"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Image panel */}
      <div
        className="relative min-w-0 max-w-5xl w-[calc(100%-6rem)] max-h-[calc(100dvh-5rem)] flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className="max-h-[max(4rem,calc(100dvh-11rem))] max-w-full w-auto h-auto object-contain"
          priority
        />
        <div className="text-center">
          <p className="font-body text-xs text-champagne/80 uppercase tracking-widest mb-0">
            {item.category}
          </p>
          <p className="font-body text-xs text-champagne/80 italic mt-1 mb-0">
            Decoration Inspiration — Illustrative Concept
          </p>
          <p className="font-body text-xs text-champagne/70 mt-1 mb-0">
            {activeIndex + 1} / {items.length}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Client Component ─────────────────────────────────────────────────────

export default function OurWorkClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevItem = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i === 0 ? filtered.length - 1 : i - 1) : null
    );
  }, [filtered.length]);

  const nextItem = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i === filtered.length - 1 ? 0 : i + 1) : null
    );
  }, [filtered.length]);

  return (
    <div className="w-full">
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="bg-ivory pt-14 pb-14 md:pt-20 md:pb-20">
        <Container size="wide">
          <div className="text-center">
            <p className="font-accent text-2xl md:text-3xl text-gold-antique mb-3">
              The Art of Celebration
            </p>
            <h1 className="font-display font-bold text-burgundy text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-5">
              Moments Adorned With Beauty.
            </h1>
            <p className="font-body text-xs tracking-widest uppercase text-gold-dark font-medium mb-8">
              Decoration Inspiration Gallery ·{" "}
              {BUSINESS_DATA.brand.locationLabel}
            </p>
            <DecorativeDivider />
            <p className="font-body text-sm text-charcoal/55 max-w-xl mx-auto mt-6 leading-relaxed italic">
              The images below are illustrative decoration concepts for exploring
              possible styles, not photographs of verified client events.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── CATEGORY FILTERS ──────────────────────────────── */}
      <div className="bg-white border-b border-gold-antique/15 sticky top-[68px] sm:top-[76px] lg:top-24 z-20">
        <Container size="wide">
          <div
            role="group"
            aria-label="Filter gallery by event category"
            className="flex gap-0 overflow-x-auto overscroll-x-contain"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                aria-pressed={activeCategory === cat}
                className={cn(
                  "shrink-0 whitespace-nowrap min-h-[44px] px-4 py-3 font-body text-xs font-medium tracking-wide transition-colors duration-150 border-r border-gold-antique/10 last:border-r-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-burgundy",
                  activeCategory === cat
                    ? "text-burgundy bg-champagne/25 border-b-2 border-b-burgundy"
                    : "text-charcoal/55 hover:text-burgundy hover:bg-champagne/15"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* ─── GALLERY GRID ──────────────────────────────────── */}
      <section className="bg-ivory-soft py-14 md:py-20">
        <Container size="wide">
          {filtered.length === 0 ? (
            <p className="text-center font-body text-sm text-charcoal/45 py-20">
              No images in this category yet.
            </p>
          ) : (
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-0">
              {filtered.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="group block w-full mb-3 md:mb-4 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 break-inside-avoid"
                  aria-label={`View larger: ${item.alt}`}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 22vw"
                      className="w-full h-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ maxWidth: item.width }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/25 transition-colors duration-300">
                      <div className="absolute bottom-0 left-0 right-0 px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-charcoal/65 to-transparent">
                        <p className="font-body text-[10px] text-champagne/80 uppercase tracking-widest">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
          <p className="text-center font-body text-xs text-charcoal/70 italic mt-12 max-w-2xl mx-auto leading-relaxed">
            All images are illustrative decoration concepts, not documented
            photographs of completed client events.
          </p>
        </Container>
      </section>

      {/* ─── CTA ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 border-t border-gold-antique/15">
        <Container size="narrow" className="text-center">
          <p className="font-accent text-2xl md:text-3xl text-gold-antique mb-3">
            Inspired for Your Celebration?
          </p>
          <h2 className="font-display font-bold text-burgundy text-3xl md:text-4xl tracking-tight mb-4">
            Let&apos;s Create Something Beautiful Together.
          </h2>
          <p className="font-body text-sm text-charcoal/65 max-w-lg mx-auto mb-8 leading-relaxed">
            Share your event date and vision. We&apos;ll craft a bespoke floral
            concept for your celebration.
          </p>
          <DecorativeDivider />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className={buttonStyles({ variant: "primary", size: "md" })}>
                Plan Your Event
              </Link>
            <a
              href={BUSINESS_DATA.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
             className={buttonStyles({ variant: "secondary", size: "md" })}>
                View on Instagram
              </a>
          </div>
        </Container>
      </section>

      {/* ─── LIGHTBOX ──────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </div>
  );
}

