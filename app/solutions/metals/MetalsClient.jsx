"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Database,
  Settings,
  ShieldCheck,
  Activity,
  Flame,
  TrendingUp,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function MetalsClient() {
  const steelTypes = [
    {
      name: "High-Strength Low Alloy (HSLA)",
      desc: "Optimized for high yield strength and exceptional atmospheric corrosion resistance.",
    },
    {
      name: "Chromium-Molybdenum Steel",
      desc: "Engineered for high heat resistance, high pressure, and extreme durability applications.",
    },
    {
      name: "Nickel Steels",
      desc: "Perfectly calibrated for cryogenic and ultra-low temperature structural applications.",
    },
    {
      name: "Weathering Steels",
      desc: "Corrosion-resistant steel designed to eliminate the need for painting.",
    },
    {
      name: "High Tensile Strength Steels",
      desc: "Optimized for heavy automotive, aerospace, and crane structures.",
    },
    {
      name: "Specialty Cast Iron & High Mn Steel",
      desc: "Tailored elemental calibration databases for foundry casting and wear-resistant applications.",
    },
  ];

  const spectrometers = [
    {
      name: "W4 OES Spectrometer",
      tagline: "Compact spark OES with optimized cost-of-ownership",
      desc: "An entry-level, highly stable CMOS-readout OES spectrometer designed for small-to-medium foundries.",
      features: [
        "Compact benchtop form-factor",
        "Paschen-Runge vacuum optical system",
        "Ferrous and non-ferrous matrix calibrations",
        "Low cost of ownership & maintenance",
      ],
      image: "https://picsum.photos/seed/spectratech-oes-w4/600/400",
      link: "/products/oes-spectrometer",
    },
    {
      name: "W5 OES Spectrometer",
      tagline: "4th Generation high-performance metal analyzer",
      desc: "Integrates high-speed data acquisition with a thermally insulated vacuum chamber. Optimized for detecting light elements in ultra-low concentrations.",
      features: [
        "Ultra-low limits of detection (sub-ppm)",
        "High Nitrogen analysis capability (0.03% - 0.9%)",
        "Standardized parameter auto-correction",
        "Intelligent argon-saving standby mode",
      ],
      image: "https://picsum.photos/seed/spectratech-oes-w5/600/400",
      link: "/products/oes-spectrometer",
    },
    {
      name: "W6 OES Spectrometer",
      tagline: "The absolute standard for research-grade metallurgy",
      desc: "Flagship vertical OES spectrometer, designed for high-end laboratories. Offers absolute precision across a wide wavelength spectrum.",
      features: [
        "Vertical Paschen-Runge double optical chamber",
        "Deep-cooled back-thinned CCD array (120nm - 800nm)",
        "Supports up to 12 base calibrations (Fe, Cu, Al, Ni, Ti)",
        "High-energy pre-combustion technology (HEPS)",
      ],
      image: "https://picsum.photos/seed/spectratech-oes-w6/600/400",
      link: "/products/oes-spectrometer",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 to-slate-900/30 z-10" />
          <Image
            src="https://picsum.photos/seed/spectratech-metals-sol/1920/1080"
            alt="Metals - Low Alloy Steels Analysis"
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
                Metals - Low Alloy Steels
              </span>
            </nav>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              >
                Metals - Low Alloy Steels
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-xl text-slate-200 leading-relaxed font-medium max-w-3xl"
              >
                Comprehensive quality control and element analysis solutions for
                low alloy steels using master-calibrated Optical Emission
                Spectrometry (OES).
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

      {/* Overview & Science Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary font-bold text-sm uppercase tracking-wider block">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Accurate Elemental Analysis for Quality Control
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Low alloy steels, typically containing less than 10% alloying
                elements (such as Carbon, Manganese, Chromium, Nickel,
                Molybdenum, Vanadium, and Silicon combined), are widely used to
                produce high-integrity pipes, automotive and aerospace bodies,
                railway lines, and complex offshore and onshore structural
                engineering plates.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                High-strength low alloy steel is highly valued for its enhanced
                mechanical properties and superior atmospheric corrosion
                resistance. Accurate and fast elemental analysis is a critical
                requirement during steel production and casting to prevent
                quality deviations, satisfy international standards, and
                guarantee safety.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="flex gap-4 items-start p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <Flame className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Fast & Reliable
                    </h4>
                    <p className="text-sm text-slate-600">
                      Simultaneous determination of up to 30+ elements in under
                      30 seconds.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Standard Compliance
                    </h4>
                    <p className="text-sm text-slate-600">
                      Perfectly compliant with ASTM, ISO, and global metal grade
                      databases.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://picsum.photos/seed/spectratech-steel-refinery/600/450"
                  alt="Steel manufacturing quality control"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Calibration Program & Materials Covered */}
      <section className="py-20 bg-white border-t border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Calibration & Database
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Low Alloy Steel (LAS) Master Program
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our OES solutions utilize an extensive master calibration database
              developed using hundreds of Certified Reference Materials (CRMs)
              to cover all types of carbon steels, alloy steels, cast iron, and
              stainless steels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steelTypes.map((type, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 hover:bg-slate-900 hover:text-white rounded-2xl border border-slate-200/60 transition-all duration-300 group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold text-sm group-hover:bg-primary/20 group-hover:text-white transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-white mb-2">
                    {type.name}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed">
                    {type.desc}
                  </p>
                </div>
                <div className="h-1 w-12 bg-primary group-hover:bg-white rounded-full mt-6 transition-colors"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-slate-950 text-white rounded-3xl max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none"></div>
            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                <span className="text-primary font-bold text-sm tracking-wider uppercase">
                  CRM Integration
                </span>
              </div>
              <h3 className="text-2xl font-bold">
                Built-in Calibration Standard Library
              </h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Ready-to-use programs for cast iron, high Mn steels, tool
                steels, and low alloy compositions pre-loaded into the
                spectrometers to minimize installation and calibration startup
                times.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap shadow-lg flex items-center gap-2 group relative z-10"
            >
              Request Specs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Applicable Products Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Applicable Hardware
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Our High-Performance Spectrometers
            </h2>
            <p className="text-slate-600 text-lg">
              Select the optimal Optical Emission Spectrometer (OES)
              configuration for your factory or laboratory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {spectrometers.map((spec, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg flex flex-col h-full hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src={spec.image}
                    alt={spec.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white font-bold text-xs uppercase px-3 py-1 rounded-full shadow-md">
                    OES System
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {spec.name}
                    </h3>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                      {spec.tagline}
                    </p>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {spec.desc}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {spec.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start text-xs text-slate-700 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={spec.link}
                    className="inline-flex items-center justify-center w-full px-5 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-primary transition-colors text-sm group"
                  >
                    View Spectrometer Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/spectratech-pattern/1000/1000')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need assistance setting up your steel QC program?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Our expert engineers are based locally in Pakistan, providing quick
            setup, calibration standard disk matching, and complete on-site
            spectrometer maintenance.
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
