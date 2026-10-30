import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { DecorativeDivider } from "@/components/ui/decorative-divider";
import { buttonStyles } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full py-24 md:py-32 flex items-center justify-center">
      <Container size="narrow" className="text-center">
        <p className="font-accent text-3xl md:text-4xl text-gold-antique mb-2">
          Page Not Found
        </p>
        <h1 className="font-display font-bold text-burgundy tracking-tight text-5xl md:text-7xl mb-4">
          404
        </h1>
        <p className="font-body text-xs md:text-sm tracking-widest uppercase text-gold-dark font-medium mb-6">
          The requested celebratory page cannot be found
        </p>

        <DecorativeDivider />

        <p className="font-body text-xs md:text-sm text-charcoal/70 max-w-md mx-auto mb-8">
          The link you followed may be outdated, or the ceremonial showcase may have moved. Please return to the homepage or explore our decoration services.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className={buttonStyles({ variant: "primary", size: "md" })}>
                Return Home
              </Link>
          <Link href="/services" className={buttonStyles({ variant: "secondary", size: "md" })}>
                Our Services
              </Link>
        </div>
      </Container>
    </div>
  );
}

