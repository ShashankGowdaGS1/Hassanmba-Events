"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FEATURED_CELEBRATIONS, CelebrationItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ShowcaseCardProps {
  item: CelebrationItem;
  className?: string;
}

function ShowcaseCard({ item, className }: ShowcaseCardProps) {
  return (
    <Link
      href="/our-work"
      className={cn("group relative block min-w-0 min-h-[250px] overflow-hidden rounded-xl bg-burgundy shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-burgundy focus-visible:outline-offset-4", className)}
    >
      <Image src={item.imageSrc} alt={`${item.title} - illustrative concept`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 50vw" className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#18060e]/95 via-[#18060e]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
        <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne">{item.category}</p>
        <h3 className="font-display text-xl sm:text-2xl font-semibold leading-tight text-white">{item.title}</h3>
        <p className="mt-2 mb-0 max-w-md font-body text-xs leading-relaxed text-white/85">{item.accentNote}</p>
      </div>
    </Link>
  );
}

/**
 * Section 02: Selected Celebrations.
 * Asymmetrical editorial showcase integrating supplied concept photography.
 */
export function SelectedCelebrations() {

  return (
    <section
      id="selected-celebrations"
      className="w-full py-20 sm:py-24 lg:py-32 bg-ivory text-charcoal scroll-mt-20 border-t border-gold-antique/20"
      aria-label="Selected Celebrations Inspiration Gallery"
    >
      <Container size="default">
        {/* Section Header Composition */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-gold-antique/20">
          <div className="max-w-2xl text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-gold-antique" aria-hidden="true" />
              <span className="font-body font-medium text-xs tracking-[0.22em] uppercase text-gold-dark">
                Celebration Inspiration
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12]">
              Ideas for <br />
              <span className="text-burgundy">Beautiful Celebrations</span>
            </h2>
          </div>

          {/* Accent Script Detail & Inspiration Note */}
          <div className="text-left md:text-right shrink-0">
            <span className="font-accent text-3xl sm:text-4xl text-gold-dark block">
              Inspired by Tradition
            </span>
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/60 mt-1 block">
              Thoughtfully Created for You
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[250px]">
          {FEATURED_CELEBRATIONS.map((item, index) => (
            <ShowcaseCard
              key={item.id}
              item={item}
              className={cn(
                index === 0 && "min-h-[360px] sm:col-span-2 lg:row-span-2",
                index === 1 && "sm:col-span-2",
                index >= 4 && "lg:col-span-2"
              )}
            />
          ))}
        </div>

        <p className="mt-6 text-center font-body text-xs text-charcoal/65">Images are illustrative decoration concepts.</p>

        {/* Bottom Section Pathway CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/our-work"
            className="group inline-flex items-center justify-center gap-2 font-body font-medium text-xs tracking-[0.18em] uppercase px-8 py-4 bg-burgundy text-ivory hover:bg-burgundy-hover rounded-xs shadow-sm transition-all duration-200 select-none min-h-[46px]"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
