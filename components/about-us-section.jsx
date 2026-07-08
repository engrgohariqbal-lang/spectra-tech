import React from "react";
import Link from "next/link";
import { Award, Users, Target } from "lucide-react";
import { features } from "@/lib/data/content";

const iconMap = [Award, Users, Target];

export function AboutUsSection() {
  return (
    <section className="py-20 bg-[#f5f6fa]">
      <div className="container mx-auto px-4">
        {/* Section label */}
        <div className="flex justify-center mb-2">
          <div className="w-16 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video thumbnail */}
          <div className="relative rounded-lg overflow-hidden bg-slate-900 shadow-xl aspect-video flex items-center justify-center group cursor-pointer">
            {/* Thumbnail placeholder styled like jinyibo video embed */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              {/* JYBO logo style placeholder */}
              <div className="text-center">
                <div className="w-28 h-28 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-14 h-14 ml-1.5"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/70 text-sm font-medium tracking-wider uppercase">
                  Watch on YouTube
                </p>
              </div>
            </div>

            {/* Overlay brand label */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-3 px-4">
              <p className="text-white font-bold text-sm">SpectraTech Solutions</p>
              <p className="text-white/70 text-xs">Pakistan&apos;s Authorized Jinyibo Distributor</p>
            </div>
          </div>

          {/* Right: About text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              About Us
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-6" />

            <p className="text-slate-700 font-semibold text-lg mb-2">
              Founded in <span className="text-primary">2026</span> as an authorized distributor of{" "}
              <span className="text-primary font-bold">
                high performance analytical instruments.
              </span>
            </p>

            <p className="text-slate-500 mb-8 leading-relaxed">
              SpectraTech Solutions delivers advanced instruments and the best
              solutions for elemental analysis, technical cleanliness inspection,
              and more. We lead quality control in Pakistan by providing new
              standards of precision and reliability.
            </p>

            {/* Feature sub-items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, idx) => {
                const Icon = iconMap[idx] || Award;
                return (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="shrink-0 w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="inline-block border-2 border-primary text-primary font-bold tracking-widest text-xs px-8 py-3.5 hover:bg-primary hover:text-white transition-all duration-300 uppercase"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
