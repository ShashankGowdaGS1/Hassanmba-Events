"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CORE_SERVICE_CATEGORIES } from "@/data/services";
import { cn } from "@/lib/utils";

/**
 * Section 03: Our Decoration Services.
 * Desktop: Interactive editorial service index (hover & keyboard focus updates preview image).
 * Mobile: Dedicated clean vertical cards with individual photography.
 */
export function DecorationServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = CORE_SERVICE_CATEGORIES[activeIndex];

  return (
    <section
      id="decoration-services"
      className="w-full py-20 sm:py-24 lg:py-32 bg-ivory-soft text-charcoal border-t border-gold-antique/20"
      aria-label="Our Decoration Services"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-gold-antique" aria-hidden="true" />
            <span className="font-body font-medium text-xs tracking-[0.22em] uppercase text-gold-dark">
              What We Create
            </span>
          </div>

          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.14]">
            Every Occasion Deserves <br />
            <span className="text-burgundy">Something Beautiful</span>
          </h2>
        </div>

        {/* DESKTOP EDITORIAL SERVICE INDEX (Visible on lg: 1024px+) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left Column: Numbered Service Titles */}
          <div className="col-span-7 flex flex-col divide-y divide-gold-antique/20 border-y border-gold-antique/20">
            {CORE_SERVICE_CATEGORIES.map((service, index) => {
              const isCurrent = index === activeIndex;
              const formattedNumber = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={cn(
                    "group relative transition-all duration-200 py-5 px-4 cursor-pointer select-none",
                    isCurrent ? "bg-champagne/25 pl-6" : "hover:bg-champagne/10 hover:pl-5"
                  )}
                >
                  <Link
                    href={`/services#${service.id}`}
                    onFocus={() => setActiveIndex(index)}
                    className="flex items-baseline justify-between focus-visible:outline focus-visible:outline-2 focus-visible:outline-burgundy focus-visible:outline-offset-4"
                  >
                    <div className="flex items-baseline gap-6">
                      {/* Editorial Numeral */}
                      <span
                        className={cn(
                          "font-display text-lg tracking-wider font-semibold transition-colors duration-200",
                          isCurrent ? "text-burgundy" : "text-gold-dark/60 group-hover:text-gold-dark"
                        )}
                      >
                        {formattedNumber}
                      </span>

                      {/* Service Title */}
                      <span
                        className={cn(
                          "font-display text-2xl tracking-tight font-semibold transition-colors duration-200",
                          isCurrent ? "text-burgundy" : "text-charcoal group-hover:text-burgundy"
                        )}
                      >
                        {service.title}
                      </span>
                    </div>

                    <ArrowRight
                      className={cn(
                        "w-4 h-4 text-gold-antique transition-all duration-200 shrink-0",
                        isCurrent
                          ? "opacity-100 translate-x-0 text-burgundy"
                          : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      )}
                      aria-hidden="true"
                    />
                  </Link>

                  {/* Supporting phrase for active service */}
                  {isCurrent && (
                    <div className="mt-2.5 pl-12 pr-4 animate-in fade-in-0 duration-200">
                      <span className="font-accent text-lg text-gold-dark block mb-1">
                        {service.accentPhrase}
                      </span>
                      <p className="font-body text-xs text-charcoal/75 leading-relaxed max-w-lg">
                        {service.shortDescription}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Photographic Display Showcase */}
          <div className="col-span-5 sticky top-32">
            <div className="w-full bg-[#1D0811] text-ivory shadow-royal">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-burgundy">
                {CORE_SERVICE_CATEGORIES.map((service, index) => (
                  <div key={service.id} aria-hidden={index !== activeIndex} className={cn("absolute inset-0 transition-opacity duration-300 motion-reduce:transition-none", index === activeIndex ? "opacity-100" : "opacity-0")}>
                    <Image src={service.imageSrc} alt={index === activeIndex ? service.imageAlt : ""} fill sizes="(min-width: 1024px) 38vw, 100vw" className={cn("object-cover", service.id === "flower-decorations" || service.id === "naming-ceremonies" ? "object-center" : "object-[center_45%]")} />
                  </div>
                ))}
              </div>
              {/* Service Metadata Card Content */}
              <div className="p-6 space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-body text-[10px] uppercase tracking-[0.22em] text-champagne bg-burgundy/80 backdrop-blur-sm border border-gold-antique/30 px-3 py-1 rounded-xs font-semibold">
                    {activeService.accentPhrase}
                  </span>
                  <span className="font-display text-xl font-bold text-gold-antique/70">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-ivory tracking-tight leading-snug">
                  {activeService.title}
                </h3>

                <p className="font-body text-xs text-ivory/80 leading-relaxed">
                  {activeService.shortDescription}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/services#${activeService.id}`}
                    className="inline-flex min-h-[44px] items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-champagne underline decoration-gold-antique underline-offset-4 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE DEDICATED VERTICAL CARDS (Visible on < lg: 1024px) */}
        <div className="lg:hidden flex flex-col space-y-5">
          {CORE_SERVICE_CATEGORIES.map((service, index) => {
            const formattedNumber = String(index + 1).padStart(2, "0");

            return (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group block py-5 border-b border-gold-antique/25 hover:border-gold-antique/60 transition-colors text-left"
              >
                <Image src={service.imageSrc} alt={service.imageAlt} width={service.width} height={service.height} sizes="(max-width: 640px) 100vw, 80vw" className="aspect-[16/7] max-h-64 w-full object-cover mb-4" />
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-display text-sm font-semibold text-gold-dark">
                    {formattedNumber}
                  </span>
                  <span className="font-accent text-base text-gold-dark">
                    {service.accentPhrase}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="font-body text-xs text-charcoal/75 leading-relaxed mb-3.5">
                  {service.shortDescription}
                </p>

                <span className="inline-flex items-center gap-1.5 font-body text-[11px] font-semibold uppercase tracking-widest text-burgundy">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA to all services */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2 font-body font-medium text-xs tracking-[0.18em] uppercase px-8 py-4 bg-burgundy text-ivory hover:bg-burgundy-hover rounded-xs shadow-sm transition-all duration-200 select-none min-h-[46px]"
          >
            <span>Discover Our Services</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
