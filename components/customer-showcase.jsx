import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const showcaseItems = [
  { id: 1, title: "Steel Mill Installation", location: "Lahore, Pakistan", image: "https://images.unsplash.com/photo-1563784462386-044fd95e9852?auto=format&fit=crop&w=800&h=600&q=80" },
  { id: 2, title: "OES Calibration Session", location: "Faisalabad, Pakistan", image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=800&h=600&q=80" },
  { id: 3, title: "Foundry Testing Lab", location: "Karachi, Pakistan", image: "https://images.unsplash.com/photo-1532187643603-ba119941d398?auto=format&fit=crop&w=800&h=600&q=80" },
  { id: 4, title: "XRF Field Analysis", location: "Sialkot, Pakistan", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&h=600&q=80" },
  { id: 5, title: "Metal Sorting Facility", location: "Gujranwala, Pakistan", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600&q=80" },
];

export function CustomerShowcase() {
  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          {/* Header row with Title and custom controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
            <div>
              <div className="w-14 h-1 bg-primary mb-4 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Our Customer Is Our Brand
              </h2>
              <p className="text-slate-500 text-sm md:text-base mt-2 max-w-xl">
                Partnering with leading industrial labs, foundries, and steel mills across Pakistan to deliver unmatched local calibration and support.
              </p>
            </div>
            
            {/* Control buttons group */}
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border border-slate-200 bg-white hover:bg-primary hover:text-white hover:border-primary text-slate-650 transition-all duration-300 shadow-sm" />
              <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border border-slate-200 bg-white hover:bg-primary hover:text-white hover:border-primary text-slate-650 transition-all duration-300 shadow-sm" />
            </div>
          </div>

          <CarouselContent className="-ml-4">
            {showcaseItems.map((photo) => (
              <CarouselItem
                key={photo.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="overflow-hidden rounded-2xl h-[300px] md:h-[350px] relative group border border-slate-200/60 bg-slate-900 shadow-md">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle static bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-all duration-300 group-hover:opacity-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-25 transition-all duration-350 transform group-hover:translate-y-4 group-hover:opacity-0">
                    <h3 className="text-white font-extrabold text-base mb-1.5 drop-shadow-sm">
                      {photo.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-slate-300 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#c8d400]" />
                      <span>{photo.location}</span>
                    </div>
                  </div>

                  {/* Gorgeous Hover overlay with brand primary gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/75 to-transparent/30 opacity-0 group-hover:opacity-100 transition-all duration-350 z-20 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-350 ease-out">
                      <span className="text-[9px] font-black tracking-[0.2em] text-[#c8d400] uppercase mb-1.5 block">
                        Verified Installation
                      </span>
                      <h3 className="text-white font-black text-xl mb-2 leading-tight">
                        {photo.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-white/80 text-sm mb-4">
                        <MapPin className="w-4 h-4 text-[#c8d400]" />
                        <span>{photo.location}</span>
                      </div>
                      <div className="w-8 h-0.5 bg-white/50 mb-3" />
                      <span className="text-xs font-bold text-white tracking-widest uppercase">
                        SpectraTech Solutions
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
