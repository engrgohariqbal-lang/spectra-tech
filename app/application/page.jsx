import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Flame,
  Rocket,
  ShieldCheck,
  Recycle,
  Layers,
  Beaker,
} from "lucide-react";
import { applicationsData } from "@/lib/data/applications";

export const metadata = {
  title: "Applications & Industries",
  description:
    "Analytical solutions for Steel, Foundry, Metal, Mining, Power, and Chemical industries.",
};

const iconMap = {
  Flame,
  Factory,
  Rocket,
  ShieldCheck,
  Recycle,
  Layers,
  Beaker,
};

export default function ApplicationPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop"
            alt="Industrial Application Hero"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/70 text-white font-bold text-sm tracking-wider uppercase mb-4 backdrop-blur-sm border border-primary animate-pulse">
            Global Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
            Industries We Serve
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Delivering critical data and precision analysis across a wide
            spectrum of heavy industries, ensuring quality, safety, and
            efficiency worldwide.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Explore Our Applications
            </h2>
            <div className="w-20 h-1.5 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 text-lg">
              From the intense heat of the foundry to the precise requirements
              of aerospace engineering, our analytical instruments provide the
              reliability you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 max-w-7xl mx-auto">
            {applicationsData.map((ind, idx) => {
              const Icon = iconMap[ind.icon] || Flame;
              return (
                <Link
                  key={idx}
                  href={`/application/${ind.slug}`}
                  className="group relative h-[380px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-end block"
                >
                  {/* Background Image */}
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Card Content */}
                  <div className="relative z-10 p-8 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30 group-hover:bg-primary transition-colors duration-500">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {ind.name}
                    </h3>

                    <div className="h-[72px] overflow-hidden">
                      <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                        {ind.shortDesc}
                      </p>
                    </div>

                    <div className="inline-flex items-center text-white group-hover:underline font-semibold text-sm group/link mt-2">
                      Discover Solutions
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Analytical Solution?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Our experts can configure spectrometers precisely tuned to your
            industry&apos;s specific materials and regulatory requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent hover:bg-accent/80 text-white font-bold rounded-lg transition-colors shadow-lg shadow-accent/20 flex items-center gap-2"
            >
              Contact Our Engineers
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors border border-white/20 backdrop-blur-sm"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
