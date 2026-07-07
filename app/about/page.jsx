import React from "react";
import Image from "next/image";
import { features } from "@/lib/data/content";

export const metadata = {
  title: "About Us",
  description: "Authorized Pakistan distributor for Wuxi Jinyibo Instrument Technology — bringing precision analytical instruments and reliable local support to industries across Pakistan.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About SpectraTech</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-700 leading-relaxed font-medium">
            Authorized Pakistan distributor for Wuxi Jinyibo Instrument Technology — bringing precision analytical instruments and reliable local support to industries across Pakistan.
          </p>
        </div>

        {/* Founding & Experience */}
        <div className="max-w-4xl mx-auto mb-20 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Founded in 2026, built on years of hands-on engineering experience
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            SpectraTech Solutions Pvt Ltd was founded in 2026 by an electrical engineer with 7+ years of hands-on OES and analytical instrumentation experience, including direct service work on Spectro OES (Germany) systems. We supply, install and service elemental analysis instruments — OES, XRF, EDXRF and Carbon-Sulfur analyzers — for Pakistan&apos;s steel, foundry, metal, mining, power and chemical industries, backed by original parts and dependable after-sales support.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded-full"></div> {/* Placeholder icon */}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Video Block & Logos */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 pb-10 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary text-white flex items-center justify-center font-bold text-2xl rounded shadow-md">
                ST
              </div>
              <div>
                <span className="font-bold text-2xl text-primary block leading-tight">SpectraTech</span>
              </div>
            </div>
            
            <div className="hidden md:block h-16 w-px bg-slate-300"></div>
            
            <div className="flex items-center gap-6">
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Authorized Distributor of</span>
              <a href="https://www.jinyibo.com/" target="_blank" rel="noopener noreferrer">
                <div className="h-12 w-36 bg-gray-200 flex items-center justify-center font-bold text-gray-500 rounded shadow-sm hover:bg-gray-300 transition-colors">
                  JINYIBO
                </div>
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer">
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg pl-1">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
             </div>
             <span className="text-white/30 font-bold text-xl tracking-widest z-0">COMPANY VIDEO PLACEHOLDER</span>
          </div>
        </div>

      </div>
    </div>
  );
}
