"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ArrowRight, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { DecorativeDivider } from "@/components/ui/decorative-divider";
import { buttonStyles } from "@/components/ui/button";
import { BUSINESS_DATA } from "@/data/business";
import { cn } from "@/lib/utils";
import { CATEGORIES, GALLERY, type GalleryItem } from "./gallery-data";
import styles from "./gallery.module.css";

type Category = (typeof CATEGORIES)[number];

type GalleryRow = { items: GalleryItem[]; startIndex: number };

function makeRows(items: GalleryItem[]): GalleryRow[] {
  const rows: GalleryRow[] = [];
  let startIndex = 0;
  while (startIndex < items.length) {
    const remaining = items.length - startIndex;
    let count: number;
    if (remaining <= 3) count = remaining;
    else if (remaining === 4) count = 2;
    else if (remaining === 6) count = 3;
    else count = rows.length % 2 === 0 ? 2 : 3;
    rows.push({ items: items.slice(startIndex, startIndex + count), startIndex });
    startIndex += count;
  }
  return rows;
}

function GalleryLightbox({ items, index, onClose, onPrevious, onNext }: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const item = items[index];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") { event.preventDefault(); onClose(); }
      if (event.key === "ArrowLeft") { event.preventDefault(); onPrevious(); }
      if (event.key === "ArrowRight") { event.preventDefault(); onNext(); }
      if (event.key === "Tab" && dialogRef.current) {
        const controls = Array.from(dialogRef.current.querySelectorAll<HTMLButtonElement>("button:not([disabled])"));
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, onPrevious, onNext]);

  if (!item) return null;
  const controlClass = "inline-flex h-11 w-11 shrink-0 items-center justify-center text-ivory transition-colors hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne disabled:opacity-30";

  return (
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="gallery-dialog-title" className="fixed inset-0 z-[200] flex flex-col bg-[#180e10]/95 p-3 sm:p-6" onClick={onClose}>
      <div className="flex items-center justify-between gap-4" onClick={(event) => event.stopPropagation()}>
        <span className="font-body text-xs uppercase tracking-[0.16em] text-champagne/80">{index + 1} / {items.length}</span>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close image viewer" className={controlClass}><X className="h-6 w-6" /></button>
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center gap-1 sm:gap-4" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onPrevious} disabled={items.length < 2} aria-label="Previous image" className={controlClass}><ArrowLeft className="h-5 w-5" /></button>
        <figure className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center">
          <Image src={item.src} alt={`${item.title} - illustrative decoration concept`} width={item.width} height={item.height} sizes="(max-width: 640px) 75vw, 85vw" className="h-auto max-h-[calc(100dvh-12rem)] w-auto max-w-full object-contain" style={{ maxWidth: `min(100%, ${item.width}px)` }} />
          <figcaption className="mt-3 text-center">
            <p className="mb-1 font-body text-[10px] uppercase tracking-[0.2em] text-champagne/80">{item.category}</p>
            <p id="gallery-dialog-title" className="mb-0 font-display text-lg text-ivory sm:text-xl">{item.title}</p>
            <p className="mb-0 mt-1 font-body text-xs text-champagne/70">Illustrative decoration concept</p>
          </figcaption>
        </figure>
        <button type="button" onClick={onNext} disabled={items.length < 2} aria-label="Next image" className={controlClass}><ArrowRight className="h-5 w-5" /></button>
      </div>
    </div>
  );
}

export default function OurWorkClient() {
  const [category, setCategory] = useState<Category>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const filtered = category === "All" ? GALLERY : GALLERY.filter((item) => item.category === category);
  const rows = makeRows(filtered);
  const itemCount = filtered.length;
  const close = useCallback(() => setSelectedIndex(null), []);
  const previous = useCallback(() => setSelectedIndex((current) => current === null ? null : (current - 1 + itemCount) % itemCount), [itemCount]);
  const next = useCallback(() => setSelectedIndex((current) => current === null ? null : (current + 1) % itemCount), [itemCount]);

  return (
    <div className="w-full">
      <section className="bg-ivory pt-12 pb-9 md:pt-16 md:pb-12">
        <Container size="wide" className="text-center">
          <p className="mb-2 font-accent text-2xl text-gold-dark md:text-3xl">The Art of Celebration</p>
          <p className="mb-3 font-body text-[10px] font-medium uppercase tracking-[0.22em] text-gold-dark">Celebration Ideas · {BUSINESS_DATA.brand.locationLabel}</p>
          <h1 className="mb-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-burgundy md:text-5xl lg:text-6xl">Moments Adorned With Beauty.</h1>
          <p className="mx-auto mb-0 max-w-xl font-body text-sm leading-relaxed text-charcoal/70">Explore decoration ideas for life&apos;s meaningful occasions.</p>
        </Container>
      </section>

      <section className="bg-ivory-soft pb-16 md:pb-24" aria-label="Celebration inspiration gallery">
        <Container size="wide">
          <div className="border-y border-gold-antique/25">
            <div role="group" aria-label="Filter gallery by category" className="flex gap-x-1 overflow-x-auto overscroll-x-contain py-1 sm:justify-center">
              {CATEGORIES.map((item) => (
                <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={cn("relative min-h-[44px] shrink-0 whitespace-nowrap px-3 font-body text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-burgundy sm:px-4", category === item ? "text-burgundy after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-burgundy" : "text-charcoal/70 hover:text-burgundy")}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 pb-5 pt-7">
            <p className="mb-0 font-body text-xs uppercase tracking-[0.15em] text-gold-dark">{category === "All" ? "The Collection" : category}</p>
            <p className="mb-0 font-body text-xs text-charcoal/70" aria-live="polite">{filtered.length} {filtered.length === 1 ? "image" : "images"} · Illustrative decoration concepts</p>
          </div>
          <div key={category} className={cn("space-y-4 md:space-y-5", styles.galleryEntrance)}>
            {rows.map((row, rowIndex) => {
              // Give the wider slot to the strongest landscape source when a pair supports it.
              const landscapeScores = row.items.map((item) => item.width >= 1370 && item.width / item.height >= 1.3 ? item.width / item.height : 0);
              const featuredIndex = row.items.length === 2 && Math.max(...landscapeScores) > 0 ? (landscapeScores[0] >= landscapeScores[1] ? 0 : 1) : -1;
              return (
                <div key={row.items[0].src} className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-12", row.items.length === 1 && "lg:justify-items-stretch")}>
                  {row.items.map((item, index) => {
                    const featured = index === featuredIndex;
                    return (
                      <button
                        key={item.src}
                        type="button"
                        onClick={() => setSelectedIndex(row.startIndex + index)}
                        aria-label={`View ${item.title}, ${item.category}`}
                        className={cn("group relative block w-full min-w-0 overflow-hidden bg-burgundy text-left focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy", item.height > item.width ? "aspect-[4/5] sm:aspect-[4/3]" : "aspect-[4/3] sm:aspect-[3/2]", "lg:aspect-auto", row.items.length === 1 ? "sm:col-span-2 lg:col-span-6 lg:col-start-4" : row.items.length === 3 ? "lg:col-span-4" : featuredIndex === -1 ? "lg:col-span-6" : featured ? "lg:col-span-7" : "lg:col-span-5", row.items.length === 3 && index === 2 && "sm:col-span-2 lg:col-span-4", rowIndex % 2 === 0 ? "lg:h-[clamp(300px,29vw,420px)]" : "lg:h-[clamp(270px,25vw,360px)]")}
                      >
                        <Image src={item.src} alt="" fill sizes="(min-width: 1024px) 58vw, (min-width: 640px) 50vw, 100vw" style={{ objectPosition: item.position }} className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100" />
                        <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#18060e]/90 via-[#18060e]/15 to-transparent transition-opacity duration-300 group-hover:opacity-90 motion-reduce:transition-none" />
                        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-ivory sm:p-6 lg:p-7">
                          <span className="min-w-0">
                            <span className="mb-2 block font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne">{item.category}</span>
                            <span className={cn("block font-display font-semibold leading-tight", featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl")}>{item.title}</span>
                          </span>
                          <ArrowDownRight className="h-5 w-5 shrink-0 text-champagne transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:translate-y-1 motion-reduce:transition-none" aria-hidden="true" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <p className="mb-0 mt-7 text-center font-body text-xs leading-relaxed text-charcoal/70">Images are illustrative decoration concepts, not verified photographs of client events.</p>
        </Container>
      </section>

      <section className="border-t border-gold-antique/15 bg-white py-20 md:py-24">
        <Container size="narrow" className="text-center">
          <p className="font-accent text-2xl text-gold-antique md:text-3xl mb-3">Inspired for Your Celebration?</p>
          <h2 className="font-display font-bold text-burgundy text-3xl md:text-4xl tracking-tight mb-4">Let&apos;s Create Something Beautiful Together.</h2>
          <p className="font-body text-sm text-charcoal/65 max-w-lg mx-auto mb-8 leading-relaxed">Share your event date and vision. We&apos;ll craft a bespoke floral concept for your celebration.</p>
          <DecorativeDivider />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className={buttonStyles({ variant: "primary", size: "md" })}>Plan Your Event</Link>
            <a href={BUSINESS_DATA.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className={buttonStyles({ variant: "secondary", size: "md" })}>View on Instagram</a>
          </div>
        </Container>
      </section>
      {selectedIndex !== null && <GalleryLightbox items={filtered} index={selectedIndex} onClose={close} onPrevious={previous} onNext={next} />}
    </div>
  );
}
