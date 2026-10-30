"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BUSINESS_DATA, getWhatsAppEnquiryUrl } from "@/data/business";

export function EventCTA() {
  const whatsappEnquiryUrl = getWhatsAppEnquiryUrl();

  return (
    <section
      id="plan-your-celebration"
      className="relative overflow-hidden bg-[#2B0512] py-20 text-ivory sm:py-24 lg:py-32"
      aria-label="Event Planning and Consultation Call to Action"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,rgba(193,138,55,0.17),transparent_48%),radial-gradient(ellipse_at_5%_95%,rgba(133,24,57,0.3),transparent_45%)]" />
      <Container size="default" className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-antique" aria-hidden="true" />
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne">Plan Your Celebration</span>
            </div>
            <p className="mb-3 font-accent text-3xl text-gold-light sm:text-4xl">A Beautiful Beginning</p>
            <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ivory sm:text-5xl lg:text-6xl">
              Let&apos;s Make Your <span className="text-champagne">Celebration Unforgettable.</span>
            </h2>
            <p className="mt-6 max-w-lg font-body text-sm leading-relaxed text-ivory/80 sm:text-base">
              Tell us about your special occasion and let&apos;s discuss how to bring your decoration ideas to life.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={whatsappEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xs bg-ivory px-7 py-4 font-body text-xs font-semibold uppercase tracking-[0.14em] text-burgundy transition-colors hover:bg-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
              >
                <MessageCircle className="h-4 w-4 shrink-0 fill-current" aria-hidden="true" />
                Enquire on WhatsApp
              </a>
              <Link
                href="/contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xs border border-champagne/50 px-7 py-4 font-body text-xs font-medium uppercase tracking-[0.14em] text-champagne transition-colors hover:border-champagne hover:bg-champagne/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
              >
                Contact Us <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 border-t border-gold-antique/25 pt-6 font-body text-xs leading-6 text-ivory/65">
              <span className="mr-3 uppercase tracking-[0.16em] text-champagne/80">Call us</span>
              <a href={BUSINESS_DATA.contact.phonePrimaryTel} className="text-ivory/90 hover:text-white hover:underline">{BUSINESS_DATA.contact.phonePrimaryDisplay}</a>
              <span className="mx-2 text-gold-antique/70" aria-hidden="true">/</span>
              <a href={BUSINESS_DATA.contact.phoneSecondaryTel} className="text-ivory/90 hover:text-white hover:underline">{BUSINESS_DATA.contact.phoneSecondaryDisplay}</a>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-sm lg:max-w-none lg:pl-3">
            <div aria-hidden="true" className="absolute inset-x-3 -top-3 bottom-3 rounded-t-[180px] border border-gold-antique/40 lg:left-6 lg:right-3" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[180px] border border-gold-antique/40 bg-burgundy">
              <Image
                src="/images/cta-floral-jasmine-detail.webp"
                alt="Illustrative jasmine and rose garlands"
                fill
                sizes="(min-width: 1024px) 35vw, (min-width: 640px) 384px, 90vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#260711]/80 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-center font-body text-[10px] uppercase tracking-[0.2em] text-champagne/90">
                Illustrative floral concept
              </figcaption>
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}
