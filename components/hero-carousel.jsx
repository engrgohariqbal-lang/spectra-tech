"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/id/1018/1600/800",
    alt: "Industrial facility - SpectraTech Solutions Pakistan",
    title: "Materials Analysis & Technical\nCleanliness Inspection",
    subtitle:
      "We manufacture analytical instruments and services that make the invisible accessible, so you can make the impossible come true.",
    cta: { label: "THIS IS OUR STORY", href: "/about" },
  },
  {
    id: 2,
    image: "https://picsum.photos/id/1040/1600/800",
    alt: "Precision analytical instruments - OES Spectrometer Pakistan",
    title: "Advanced OES & XRF\nTechnology For Pakistan",
    subtitle:
      "SpectraTech Solutions is Pakistan's authorized distributor for Wuxi Jinyibo Instrument Technology, delivering precision to every lab.",
    cta: { label: "EXPLORE PRODUCTS", href: "/products" },
  },
  {
    id: 3,
    image: "https://picsum.photos/id/1062/1600/800",
    alt: "Engineers working on OES machines - SpectraTech after-sales service",
    title: "Dedicated After-Sales\nService & Support",
    subtitle:
      "Engineer-led installation, calibration, training, and maintenance — ensuring your instruments perform at their best, every day.",
    cta: { label: "CONTACT US", href: "/contact" },
  },
];

export function HeroCarousel() {
  const [plugin] = React.useState(() =>
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );
  const [current, setCurrent] = React.useState(0);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-slate-900">
      <Carousel
        plugins={[plugin]}
        className="w-full h-full"
        opts={{ loop: true, duration: 40 }}
        setApi={(api) => {
          if (!api) return;
          api.on("select", () => setCurrent(api.selectedScrollSnap()));
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative h-full basis-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                className="object-cover z-0"
              />
              {/* Dark gradient overlay from left */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
            />
          ))}
        </div>
      </Carousel>

      {/* Persistent Overlay Text */}
      <div className="absolute inset-0 flex items-center pointer-events-none z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl space-y-5 pointer-events-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] drop-shadow-lg whitespace-pre-line">
              {slides[current]?.title || slides[0].title}
            </h1>
            <p className="text-base md:text-lg text-slate-200 max-w-xl leading-relaxed">
              {slides[current]?.subtitle || slides[0].subtitle}
            </p>
            <div className="pt-4">
              <Link
                href={slides[current]?.cta.href || "/about"}
                className="inline-block border-2 border-white text-white font-bold tracking-widest text-sm px-8 py-3.5 hover:bg-white hover:text-primary transition-all duration-300"
              >
                {slides[current]?.cta.label || "THIS IS OUR STORY"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
