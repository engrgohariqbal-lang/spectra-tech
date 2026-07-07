import React from "react";
import { Play } from "lucide-react";

// Placeholder testimonials
const testimonials = [
  { id: 1, title: "OES Installation at local Steel Mill", videoUrl: "#" },
  { id: 2, title: "XRF Analyzer Training Session", videoUrl: "#" },
  { id: 3, title: "Service & Maintenance Review", videoUrl: "#" }
];

export function CustomersSay() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Customers Say
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Hear directly from our clients about their experiences with SpectraTech Solutions and our range of analytical instruments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-video bg-slate-800 rounded-lg overflow-hidden shadow-md mb-4 group-hover:shadow-xl transition-all">
                {/* Simulated video thumbnail placeholder */}
                <div className="absolute inset-0 bg-slate-700/80 flex items-center justify-center transition-colors group-hover:bg-slate-700/60">
                  <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <span className="text-white font-bold">VIDEO PLACEHOLDER</span>
                </div>
              </div>
              <h3 className="text-center font-bold text-lg text-slate-800 group-hover:text-primary transition-colors px-2">
                {testimonial.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
