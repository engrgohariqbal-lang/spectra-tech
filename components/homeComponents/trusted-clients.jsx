"use client";

import React from "react";
import Image from "next/image";

const clientNames = [
  "PakSteel", "FoundryTech", "MetalWorks", "PrimeAlloys", 
  "GlobalMining", "PowerChem", "IronForge", "CrescentSteel", 
  "AlphaMetals", "AtlasFoundry"
];

const clientLogos = clientNames.map((name, i) => ({
  id: i + 1,
  name: name
}));

export function TrustedClients() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-balance">Trusted by 200+ Clients Across Pakistan</h2>
        <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group py-4">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 md:gap-16 px-4 md:px-8 group-hover:pause-animation">
          {clientLogos.map((logo, index) => (
            <div key={`logo-set1-${index}`} className="flex-shrink-0 relative transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-40 h-16 bg-white border border-slate-200 shadow-sm rounded-xl flex items-center justify-center overflow-hidden hover:shadow-md hover:border-primary/30 transition-all">
                <span className="text-lg font-extrabold text-slate-400 tracking-wider uppercase">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate for seamless infinite scrolling */}
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex items-center gap-8 md:gap-16 px-4 md:px-8 group-hover:pause-animation">
          {clientLogos.map((logo, index) => (
            <div key={`logo-set2-${index}`} className="flex-shrink-0 relative transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-40 h-16 bg-white border border-slate-200 shadow-sm rounded-xl flex items-center justify-center overflow-hidden hover:shadow-md hover:border-primary/30 transition-all">
                <span className="text-lg font-extrabold text-slate-400 tracking-wider uppercase">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
