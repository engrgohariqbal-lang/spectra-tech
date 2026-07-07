"use client";

import React from "react";
import Image from "next/image";

// Placeholder logos for 10 clients
const clientLogos = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  // Suggesting to the user to place files like client-1.png in public/clients/
  src: `/clients/placeholder-${(i % 5) + 1}.svg`, 
  alt: `Client ${i + 1}`
}));

export function TrustedClients() {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Trusted by 200+ Clients Across Pakistan</h2>
        <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-24 px-6 md:px-12 group-hover:pause-animation">
          {clientLogos.map((logo, index) => (
            <div key={`logo-set1-${index}`} className="flex-shrink-0 relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              {/* Using a solid div fallback for missing images during dev */}
              <div className="w-full h-full bg-slate-200 rounded flex items-center justify-center overflow-hidden">
                <span className="text-xs text-slate-400 font-medium">LOGO {logo.id}</span>
                {/* 
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    fill 
                    className="object-contain" 
                  /> 
                */}
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate for seamless infinite scrolling */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 md:gap-24 px-6 md:px-12 group-hover:pause-animation">
          {clientLogos.map((logo, index) => (
            <div key={`logo-set2-${index}`} className="flex-shrink-0 relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <div className="w-full h-full bg-slate-200 rounded flex items-center justify-center overflow-hidden">
                <span className="text-xs text-slate-400 font-medium">LOGO {logo.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
