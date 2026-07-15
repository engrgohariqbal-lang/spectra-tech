"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Search,
  Globe,
  Layers,
  Sparkles,
  Coins,
  Cpu,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function GeologicalClient() {
  const materials = [
    {
      name: "Rocks & Soils",
      desc: "Detailed trace mineral mapping and heavy metal quantification for geo-surveys.",
    },
    {
      name: "Cement & Limestone",
      desc: "Precision oxide analysis (CaO, SiO2, Al2O3, Fe2O3) to control kiln operations.",
    },
    {
      name: "Clinker",
      desc: "Rapid phase composition checks to guarantee mineral consistency.",
    },
    {
      name: "Fly Ash",
      desc: "Analysis of combustion residues to ensure environmental safety and construction reuse standard.",
    },
    {
      name: "Coal & Coke",
      desc: "Determining ash content, sulfur percentages, and volatile elements.",
    },
    {
      name: "Vegetation & Biomass",
      desc: "Trace elemental analysis for agricultural nutrients, soil health, and organic fuels.",
    },
  ];

  const benefits = [
    {
      title: "40+ Trace Elements",
      desc: "Simultaneous trace element analysis down to single-digit ppm levels or lower, handling challenging geological interference.",
    },
    {
      title: "200+ International CRMs",
      desc: "Pre-calibrated setup samples and blank specimens referenced against more than 200 certified reference materials.",
    },
    {
      title: "Advanced Algorithms",
      desc: "Unique software with embedded expert knowledge that covers the 'what to measure' and 'how to measure' details.",
    },
    {
      title: "Drastic Cost Savings",
      desc: "Avoid buying hundreds of expensive reference disks. Our pre-loaded library gives you a turn-key solution on day one.",
    },
  ];

  const products = [
    {
      name: "P9800 XRF Spectrometer",
      tagline: "Heavy metal & RoHS screening desktop spectrometer",
      desc: "Highly optimized desktop energy-dispersive XRF (EDXRF) system. Specially calibrated for heavy metals screening and geological trace analysis.",
      features: [
        "High-efficiency Si-PIN detector",
        "40kV / 50W Tungsten anode tube",
        "Automated collimator & filter changers",
        "NIST-traceable calibration algorithms",
      ],
      image: "https://picsum.photos/seed/spectratech-desktop-p9800/600/400",
      link: "/products/desktop-edxrf-spectrometer",
    },
    {
      name: "TY-9800 EDXRF Spectrometer",
      tagline: "Advanced research-grade desktop EDXRF system",
      desc: "Our top-of-the-line desktop EDXRF system featuring a high-flux 50W X-ray tube and large area SDD detector. Supports full vacuum operation.",
      features: [
        "Thermoelectrically cooled Fast-SDD detector",
        "50W Rhodium or Silver anode tube",
        "Dual-vacuum/helium gas purge pathways",
        "12-position automatic sample carousel",
      ],
      image: "https://picsum.photos/seed/spectratech-desktop-ty9800/600/400",
      link: "/products/desktop-edxrf-spectrometer",
    },
    {
      name: "JX6 Handheld XRF Analyzer",
      tagline: "Premium SDD handheld for ore & trace analysis",
      desc: "Provides completely non-destructive testing (NDT) in the palm of your hand. Check minerals, soil, and ores instantly in the field.",
      features: [
        "Lightweight 1.6kg point-and-shoot design",
        " thermoelectric cooled large-area SDD",
        "GPS integrated for geochemical mapping",
        "Inbuilt camera for measurement spot alignment",
      ],
      image: "https://picsum.photos/seed/spectratech-xrf-jx6/600/400",
      link: "/products/handheld-xrf-analyzer",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-slate-900/40 z-10" />
          <Image
            src="https://picsum.photos/seed/spectratech-geol-sol/1920/1080"
            alt="Geological and Organic Materials Analysis"
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
                Geological & Organic Materials
              </span>
            </nav>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              >
                Geological & Organic Materials
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-xl text-slate-200 leading-relaxed font-medium max-w-3xl"
              >
                Turnkey solutions for trace element quantification in mining,
                cement, agriculture, and environmental science using advanced
                Energy Dispersive XRF (EDXRF).
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

      {/* Overview & Trace Analysis Challenges */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary font-bold text-sm uppercase tracking-wider block">
                Trace Analysis Challenges
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Quantifying Low Concentrations Down to ppm Levels
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Geological exploration, mining operations, and organic
                agricultural research demand extremely reliable trace element
                quantification. With increasing worldwide legislation to control
                environmental pollution, many industries now require accurate
                detection of low elemental concentrations to satisfy stringent
                compliance laws.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                However, trace element analysis is notoriously challenging.
                Optimizing X-ray tubes and detectors, setting up robust matrix
                correction formulas, and correcting background spectral noise
                are major obstacles. Furthermore, obtaining the hundreds of rare
                Certified Reference Materials (CRMs) needed for proper
                calibration is a massive financial and logistics burden.
              </p>

              <div className="flex gap-4 items-start pt-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    Our Integrated Calibration Library
                  </h4>
                  <p className="text-sm text-slate-600">
                    The P9800XRF trace element solution resolves these
                    challenges by pre-packaging a suite of calibration setup
                    standards and blank specimens calibrated against over 200
                    international reference materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://picsum.photos/seed/spectratech-geol-sample/600/450"
                  alt="Geological samples and trace minerals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept & Benefits */}
      <section className="py-20 bg-white border-t border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Concept Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Why Choose Our XRF Trace Analysis Concept?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our geological analytical solution is unique in the XRF
              marketplace, delivering lab-grade results at a fraction of the
              cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200/50 flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                  {idx === 0 ? (
                    <Globe className="w-6 h-6" />
                  ) : idx === 1 ? (
                    <Layers className="w-6 h-6" />
                  ) : idx === 2 ? (
                    <Sparkles className="w-6 h-6" />
                  ) : (
                    <Coins className="w-6 h-6" />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Analyzed */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Analytical Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Target Sample Materials
            </h2>
            <p className="text-slate-600 text-lg">
              Pre-built methods are optimized for trace and elemental analysis
              in the following matrices:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {materials.map((mat, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {mat.name}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {mat.desc}
                  </p>
                </div>
                <div className="w-8 h-1 bg-primary rounded-full mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applicable Products */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Applicable Hardware
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Our XRF & LIBS Instruments
            </h2>
            <p className="text-slate-600 text-lg">
              Explore the instruments that host our pre-calibrated trace
              analysis databases.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((prod, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/50 flex flex-col h-full hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white font-bold text-xs uppercase px-3 py-1 rounded-full">
                    Analytical Device
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {prod.name}
                    </h3>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                      {prod.tagline}
                    </p>
                    <p className="text-slate-600 text-xs mb-6 leading-relaxed">
                      {prod.desc}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {prod.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start text-xs text-slate-700 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mr-2 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={prod.link}
                    className="inline-flex items-center justify-center w-full px-5 py-3 bg-slate-900 hover:bg-primary text-white rounded-xl font-bold transition-colors text-sm group"
                  >
                    View Device Details
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
            Need help analyzing geological or organic ores?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Our Pakistan-based technical support team offers calibration setup
            matching, blank specimen configurations, sample preparation
            consultations, and complete laboratory commissioning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:scale-105"
            >
              Consult Our Mining Experts
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
