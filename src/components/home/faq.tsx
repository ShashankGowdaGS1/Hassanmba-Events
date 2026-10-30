"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BUSINESS_DATA } from "@/data/business";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "faq-types-of-events",
    question: "What types of events do you decorate?",
    answer:
      "We specialize in a comprehensive range of traditional celebrations and modern events across Hassan, including Wedding Mandaps & Muhurthams, Evening Receptions, Temple Opening Events & Festivals, Baby Showers (Seemantha), Naming Ceremonies (Namakarana), Housewarming Gatherings (Gruhapravesha), and Corporate Assemblies.",
  },
  {
    id: "faq-discuss-ideas",
    question: "Can I discuss custom decoration ideas for my event?",
    answer:
      "Yes, every celebration is unique. You can discuss your preferred floral varieties, color themes, stage backdrops, and venue layouts directly with our team. We assist in aligning the floral craftsmanship with your family's ceremonial traditions and personal aesthetic preferences.",
  },
  {
    id: "faq-enquire-date",
    question: "How can I enquire about date availability for my celebration?",
    answer: `You can reach out directly via telephone at ${BUSINESS_DATA.contact.phonePrimaryDisplay} or send us a message through our dedicated WhatsApp enquiry channel. Sharing your event date, venue location, and approximate decoration scope helps us understand your requirements.`,
  },
  {
    id: "faq-location",
    question: `Where is ${BUSINESS_DATA.brand.name} located?`,
    answer: `We are located in Hassan at ${BUSINESS_DATA.address.street}, ${BUSINESS_DATA.address.landmark}, ${BUSINESS_DATA.address.city}, ${BUSINESS_DATA.address.state} — ${BUSINESS_DATA.address.postalCode}. Please contact us to discuss your event.`,
  },
];

/**
 * Section 06: Frequently Asked Questions.
 * Elegant two-column editorial layout with accessible single-open accordion.
 */
export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="w-full py-20 sm:py-24 lg:py-32 bg-ivory-soft text-charcoal border-t border-gold-antique/20"
      aria-label="Frequently Asked Questions"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Section Header & Direct Contact Prompt */}
          <div className="lg:col-span-5 text-left space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-gold-antique" aria-hidden="true" />
              <span className="font-body font-medium text-xs tracking-[0.22em] uppercase text-gold-dark">
                Good to Know
              </span>
            </div>

            <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.14]">
              Questions Before Your <br />
              <span className="text-burgundy">Celebration?</span>
            </h2>

            <p className="font-body text-xs sm:text-sm text-charcoal/75 leading-relaxed pt-2 max-w-md">
              Here are answers to common questions about our floral decoration services and consultation process in Hassan.
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-burgundy hover:text-gold-dark transition-colors"
              >
                <span>Have a specific inquiry? Contact us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Accessible FAQ Accordion */}
          <div className="lg:col-span-7 divide-y divide-gold-antique/25 border-y border-gold-antique/25">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div key={faq.id} className="py-5 text-left">
                  <h3>
                    <button
                      type="button"
                      id={`faq-question-${faq.id}`}
                      onClick={() => toggleFAQ(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="group flex w-full items-center justify-between gap-4 text-left font-display text-lg sm:text-xl font-semibold text-charcoal hover:text-burgundy transition-colors outline-none focus-visible:ring-1 focus-visible:ring-burgundy rounded-xs py-1"
                    >
                      <span className="leading-snug">{faq.question}</span>
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-gold-antique/40 text-gold-dark group-hover:border-burgundy group-hover:text-burgundy shrink-0 transition-colors">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>

                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      hidden={!isOpen}
                      className="mt-3 pr-8 animate-in fade-in-0 duration-200"
                    >
                      <p className="font-body text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

