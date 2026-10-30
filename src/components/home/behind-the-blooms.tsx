import { Container } from "@/components/ui/container";

export function BehindTheBlooms() {
  return (
    <section id="behind-the-blooms" className="bg-champagne-soft py-20 sm:py-24 lg:py-28 text-charcoal" aria-labelledby="behind-the-blooms-heading">
      <Container size="default">
        <div className="grid gap-7 md:grid-cols-12 md:items-end md:gap-12">
          <div className="md:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-antique" aria-hidden="true" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.22em] text-gold-dark">Behind the Blooms</span>
            </div>
            <h2 id="behind-the-blooms-heading" className="font-display text-3xl font-bold leading-[1.14] tracking-tight text-burgundy sm:text-4xl md:text-5xl">
              Every Detail,<br />Beautifully Considered.
            </h2>
          </div>
          <div className="border-l border-gold-antique/50 pl-6 md:col-span-5 md:mb-1">
            <p className="mb-0 max-w-md font-body text-sm leading-relaxed text-charcoal/80 sm:text-base">
              From carefully chosen floral details to thoughtfully arranged decorations, every celebration begins with a vision.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
