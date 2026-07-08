import React from "react";
import { getTestimonials } from "@/lib/data-access";

export async function CustomersSay() {
  const testimonials = await getTestimonials();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header — left aligned like jinyibo */}
        <div className="mb-10">
          <div className="w-14 h-1 bg-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Customers Say
          </h2>
          <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
            We work with many global companies, universities and research
            organizations. They choose us not only for the professional
            solutions, but also for the depth of our expertise.
          </p>
        </div>

        {/* 3-column YouTube-style thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <a
              key={testimonial.id}
              href={testimonial.videoUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Video thumbnail */}
              <div className="relative w-full aspect-video bg-slate-900 overflow-hidden rounded-sm shadow-md mb-3">
                {/* Dark thumbnail background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />

                {/* JYBO-style brand overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white text-[8px] font-black tracking-tight">ST</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold leading-none">SpectraTech Solutions</p>
                    <p className="text-white/60 text-[10px]">SpectraTech Solutions</p>
                  </div>
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* YouTube-style red play button */}
                  <div className="w-14 h-10 bg-[#FF0000] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Watch on YouTube label */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 py-2 px-3 flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="#FF0000" className="w-4 h-4 shrink-0">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="text-white text-xs font-medium">Watch on YouTube</span>
                </div>
              </div>

              {/* Video title */}
              <h3 className="text-sm font-semibold text-slate-700 text-center group-hover:text-primary transition-colors px-2 leading-snug">
                {testimonial.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
