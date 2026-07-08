"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";

const showcaseItems = [
  { id: 1, title: "Steel Mill Installation — Lahore", image: "https://picsum.photos/seed/spectratech-show-1/800/600" },
  { id: 2, title: "OES Calibration Session", image: "https://picsum.photos/seed/spectratech-show-2/800/600" },
  { id: 3, title: "Foundry Testing Lab — Karachi", image: "https://picsum.photos/seed/spectratech-show-3/800/600" },
  { id: 4, title: "XRF Field Analysis", image: "https://picsum.photos/seed/spectratech-show-4/800/600" },
  { id: 5, title: "Metal Sorting Facility — Faisalabad", image: "https://picsum.photos/seed/spectratech-show-5/800/600" },
];

export function CustomerShowcase() {
  return (
    <section className="py-16 bg-[#f5f6fa] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header row with left arrow on right — jinyibo style */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="w-14 h-1 bg-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Customer Is Our Brand
            </h2>
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {showcaseItems.map((photo) => (
              <CarouselItem
                key={photo.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="overflow-hidden rounded-sm h-[260px] md:h-[320px] relative group border border-slate-200 bg-slate-100">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay with title */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex items-end">
                    <p className="text-white font-semibold text-sm px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {photo.title}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Left arrow only — jinyibo style (right side of heading) */}
          <div className="flex justify-end mt-6">
            <CarouselPrevious className="relative left-0 right-0 top-0 translate-y-0 h-10 w-10 bg-white border border-slate-300 hover:bg-primary hover:text-white hover:border-primary text-slate-600 transition-colors rounded-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
