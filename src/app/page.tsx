import React from "react";
import { Hero } from "@/components/home/hero";
import { SelectedCelebrations } from "@/components/home/selected-celebrations";
import { DecorationServices } from "@/components/home/decoration-services";
import { HeritageStory } from "@/components/home/heritage-story";
import { OurProcess } from "@/components/home/our-process";
import { FAQ } from "@/components/home/faq";
import { EventCTA } from "@/components/home/event-cta";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 01. Royal Cinematic Hero */}
      <Hero />

      {/* 02. Selected Celebrations (Asymmetrical Editorial Gallery) */}
      <SelectedCelebrations />

      {/* 03. Our Decoration Services (Editorial Service Index) */}
      <DecorationServices />

      {/* 04. Our Story — Rooted in Tradition (Deep Royal Burgundy Storytelling) */}
      <HeritageStory />

      {/* 05. From Vision to Celebration (3-Step Editorial Planning Timeline) */}
      <OurProcess />

      {/* 06. Frequently Asked Questions (Accessible 2-Column Accordion) */}
      <FAQ />

      {/* 07. Plan Your Celebration (Dramatic Full-Width Closing CTA) */}
      <EventCTA />
    </div>
  );
}
