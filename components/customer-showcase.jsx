"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const showcasePhotos = [
  { id: 1, src: "/showcase/placeholder-1.jpg", alt: "Installation 1" },
  { id: 2, src: "/showcase/placeholder-2.jpg", alt: "Installation 2" },
  { id: 3, src: "/showcase/placeholder-3.jpg", alt: "Installation 3" },
  { id: 4, src: "/showcase/placeholder-4.jpg", alt: "Installation 4" }
];

export function CustomerShowcase() {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Customer Is Our Brand
            </h2>
            <div className="w-20 h-1 bg-accent mb-6 rounded-full"></div>
            <p className="text-lg text-slate-300">
              A glimpse into our successful installations and satisfied clients across the nation.
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {showcasePhotos.map((photo) => (
              <CarouselItem key={photo.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="overflow-hidden rounded-xl h-[300px] md:h-[400px] relative group border border-slate-700 bg-slate-800">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback label */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                    <span className="font-bold text-lg uppercase tracking-widest text-white drop-shadow-md">
                      PHOTO {photo.id}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-end gap-4 mt-8">
            <CarouselPrevious className="relative left-0 right-0 top-0 translate-y-0 h-12 w-12 bg-white/10 hover:bg-primary text-white border-none transition-colors" />
            <CarouselNext className="relative left-0 right-0 top-0 translate-y-0 h-12 w-12 bg-white/10 hover:bg-primary text-white border-none transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
