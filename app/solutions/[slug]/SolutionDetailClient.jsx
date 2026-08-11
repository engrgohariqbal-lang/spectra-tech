"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
  ChevronRight
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function SolutionDetailClient({ solution }) {
  if (!solution) return null;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-slate-900/30 z-10" />
          <Image
            src={solution.heroImage || "/images/products/banners/hero-banner.webp"}
            alt={solution.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/solutions"
                className="hover:text-white transition-colors"
              >
                Solutions
              </Link>
              <span>/</span>
              <span className="text-primary-foreground font-semibold">
                {solution.title}
              </span>
            </nav>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              >
                {solution.heroTitle || solution.title}
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-xl text-slate-200 leading-relaxed font-medium max-w-3xl"
              >
                {solution.heroSubtitle || solution.metaDescription}
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="relative hidden xl:block w-full h-[50px] md:h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,112.44,189.2,92.83,233.15,78,277.1,67.31,321.39,56.44Z"
              className="fill-slate-50"
            ></path>
          </svg>
        </div>
      </section>

      {/* Dynamic Content Sections */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {solution.sections?.map((section, idx) => (
              <div key={idx} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      {paragraph.startsWith("-") || paragraph.match(/^\d+\./) ? (
                        <span className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-primary shrink-0 mr-2 mt-1" />
                          <span>{paragraph.replace(/^-\s*/, '').replace(/^\d+\.\s*/, '')}</span>
                        </span>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applicable Products Section */}
      {solution.applicableProducts && solution.applicableProducts.length > 0 && (
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">
                Applicable Hardware
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Recommended Systems for this Solution
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {solution.applicableProducts.map((prod, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-8 rounded-3xl border border-slate-200/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                      <Activity className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{prod.name}</h3>
                  </div>
                  <Link
                    href={prod.link || "/products"}
                    className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors group mt-8"
                  >
                    View Product Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need assistance setting up your testing program?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Our expert engineers are based locally in Pakistan, providing quick
            setup and complete on-site spectrometer maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:scale-105"
            >
              Contact Our Engineers
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white hover:bg-white/20 rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
            >
              All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
