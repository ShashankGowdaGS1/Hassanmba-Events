"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CORE_SERVICE_CATEGORIES } from "@/data/services";
import { cn } from "@/lib/utils";
import styles from "./mobile-floral-chapters.module.css";

export function MobileFloralChapters() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleImage, setVisibleImage] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const chaptersRef = useRef<(HTMLElement | null)[]>([]);
  const currentRef = useRef(0);
  const loadedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px) and (min-height: 651px) and (prefers-reduced-motion: no-preference)");
    function updateMode() {
      setEnhanced(media.matches && "IntersectionObserver" in window);
    }
    updateMode();
    media.addEventListener("change", updateMode);
    return () => media.removeEventListener("change", updateMode);
  }, []);

  useEffect(() => {
    const story = storyRef.current;
    const stage = stageRef.current;
    if (!enhanced || !story || !stage) return;

    const header = document.querySelector("header");
    const chapters = chaptersRef.current.filter((chapter): chapter is HTMLElement => chapter !== null);
    let observer: IntersectionObserver | undefined;
    let frame = 0;

    function selectChapter(index: number) {
      if (index === currentRef.current) return;
      currentRef.current = index;
      setActiveIndex(index);
      if (loadedRef.current.has(index)) setVisibleImage(index);
    }

    function configureObserver() {
      observer?.disconnect();
      const headerHeight = header?.getBoundingClientRect().height ?? 68;
      story?.style.setProperty("--mobile-header-height", `${headerHeight}px`);
      const activationLine = Math.min(window.innerHeight - 80, headerHeight + 8 + (stage?.getBoundingClientRect().height ?? 0) + 8);
      const bottomMargin = Math.max(0, window.innerHeight - activationLine - 60);
      observer = new IntersectionObserver(() => {
        let selected = 0;
        for (let index = 0; index < chapters.length; index++) {
          if (chapters[index].getBoundingClientRect().top <= activationLine) selected = index;
          else break;
        }
        selectChapter(selected);
      }, { rootMargin: `-${activationLine}px 0px -${bottomMargin}px 0px`, threshold: 0 });
      chapters.forEach((chapter) => observer?.observe(chapter));
    }

    function scheduleConfigure() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(configureObserver);
    }

    const resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(scheduleConfigure);
    if (header) resizeObserver?.observe(header);
    resizeObserver?.observe(stage);
    window.addEventListener("resize", scheduleConfigure);
    configureObserver();
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener("resize", scheduleConfigure);
    };
  }, [enhanced]);

  function markLoaded(index: number) {
    loadedRef.current.add(index);
    if (index === currentRef.current) setVisibleImage(index);
  }

  return (
    <div ref={storyRef} data-enhanced={enhanced} className={cn("md:hidden", styles.story)}>
      <div ref={stageRef} className={styles.stage} aria-hidden="true">
        <div className="relative h-[clamp(180px,34svh,300px)] overflow-hidden bg-burgundy">
          {CORE_SERVICE_CATEGORIES.map((service, index) => (
            <div key={service.id} className={cn("absolute inset-0 transition-opacity duration-[450ms] ease-out", visibleImage === index ? "opacity-100" : "opacity-0")}>
              <Image src={service.imageSrc} alt="" fill sizes="100vw" onLoad={() => markLoaded(index)} className={cn("object-cover", service.id === "flower-decorations" ? "object-[center_55%]" : service.id === "naming-ceremonies" ? "object-[center_58%]" : "object-center")} />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 py-3">
          <span className="shrink-0 font-body text-[11px] font-medium tracking-[0.16em] text-burgundy">{String(activeIndex + 1).padStart(2, "0")} / 07</span>
          <div className="flex flex-1 gap-1.5">
            {CORE_SERVICE_CATEGORIES.map((service, index) => <span key={service.id} className={cn("h-px flex-1 transition-colors duration-300", index === activeIndex ? "bg-burgundy" : "bg-gold-antique/35")} />)}
          </div>
        </div>
      </div>

      <div>
        {CORE_SERVICE_CATEGORIES.map((service, index) => (
          <article key={service.id} ref={(element) => { chaptersRef.current[index] = element; }} data-active={activeIndex === index} className={cn("flex flex-col justify-center border-b border-gold-antique/25 py-8", styles.chapter)}>
            <div className={cn("relative mb-6 aspect-[16/9] max-h-64 overflow-hidden bg-burgundy", styles.chapterImage)}>
              <Image src={service.imageSrc} alt={service.imageAlt} fill sizes="100vw" className="object-cover" />
            </div>
            <div className={styles.chapterContent}>
              <div className="mb-3 flex items-baseline gap-4">
                <span className="font-display text-xl font-semibold text-gold-dark">{String(index + 1).padStart(2, "0")}</span>
                <span className="h-px w-8 bg-gold-antique/60" aria-hidden="true" />
                <span className="font-accent text-2xl text-gold-dark">{service.accentPhrase}</span>
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold leading-tight text-burgundy">{service.title}</h3>
              <p className="mb-4 max-w-md font-body text-[15px] leading-relaxed text-charcoal/80">{service.shortDescription}</p>
              <Link href={`/services#${service.id}`} className="group inline-flex min-h-[44px] items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.16em] text-burgundy underline decoration-gold-antique underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy">
                Explore Service <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <p className="mb-0 mt-4 font-body text-xs text-charcoal/70">Images are illustrative decoration concepts.</p>
    </div>
  );
}
