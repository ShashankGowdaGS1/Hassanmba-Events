import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

interface ProcessStep {
  number: string;
  title: string;
  accentNote: string;
  description: string;
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Share Your Occasion",
    accentNote: "Initial Conversation",
    description:
      "Tell us about the event, preferred date, location, and decoration requirements.",
  },
  {
    number: "02",
    title: "Plan the Details",
    accentNote: "Floral Curation",
    description:
      "Discuss the preferred decoration style, floral arrangements, and event needs.",
  },
  {
    number: "03",
    title: "Bring It to Life",
    accentNote: "Pristine Execution",
    description:
      "Coordinate the agreed decoration details for the celebration.",
  },
];

/**
 * Section 05: From Vision to Celebration.
 * Refined editorial timeline explaining the simple, reliable 3-step planning journey.
 */
export function OurProcess() {
  return (
    <section
      id="our-process"
      className="w-full py-20 sm:py-24 lg:py-32 bg-ivory text-charcoal border-t border-gold-antique/20"
      aria-label="How We Work - Planning Process"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-gold-antique" aria-hidden="true" />
            <span className="font-body font-medium text-xs tracking-[0.22em] uppercase text-gold-dark">
              How We Work
            </span>
          </div>

          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.14]">
            From Your Vision to a <br />
            <span className="text-burgundy">Beautiful Celebration</span>
          </h2>
        </div>

        {/* DESKTOP TIMELINE (Visible on lg: 1024px+) */}
        <div className="hidden lg:grid grid-cols-3 gap-12 relative">
          {/* Subtle Horizontal Connecting Gold Line */}
          <div
            className="absolute top-10 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold-antique/50 to-transparent z-0"
            aria-hidden="true"
          />

          {STEPS.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col text-left">
              {/* Step Numeral & Marker */}
              <div className="flex items-baseline justify-between mb-6 pb-2">
                <span className="font-display text-6xl font-bold text-gold-antique/70">
                  {step.number}
                </span>
                <span className="w-2.5 h-2.5 rotate-45 border border-gold-antique bg-ivory" />
              </div>

              {/* Accent Note */}
              <span className="font-accent text-xl text-gold-dark mb-1">
                {step.accentNote}
              </span>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-charcoal mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-charcoal/75 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* MOBILE VERTICAL TIMELINE (Visible on < lg: 1024px) */}
        <div className="lg:hidden relative pl-6 border-l border-gold-antique/30 space-y-10 text-left">
          {STEPS.map((step) => (
            <div key={step.number} className="relative">
              {/* Timeline Indicator Node */}
              <span
                className="absolute -left-[31px] top-1.5 w-3 h-3 rotate-45 bg-burgundy border border-gold-antique"
                aria-hidden="true"
              />

              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-display text-2xl font-bold text-gold-dark">
                  {step.number}
                </span>
                <span className="font-accent text-lg text-gold-dark">
                  {step.accentNote}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                {step.title}
              </h3>

              <p className="font-body text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Context Pathway */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-gold-antique/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-charcoal/70">
          <p>
            Personalized consultations available for all wedding, ceremonial, and festive decorations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold uppercase tracking-widest text-burgundy hover:text-gold-dark transition-colors shrink-0"
          >
            <span>Start Your Planning</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

