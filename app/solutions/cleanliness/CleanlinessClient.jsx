"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Layers,
  Cpu,
  ScanLine,
  HelpCircle,
  FileSpreadsheet,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function CleanlinessClient() {
  const analysisTypes = [
    {
      title: "Standard Analysis: Gravimetric & Size",
      desc: "Fundamental parameters to establish initial cleanliness levels per ISO 16232 and VDA 19.",
      items: [
        "Gravimetric Analysis: Determines the total dry weight of residual particles extracted from the component's surface.",
        "Particle Length & Width: Measures the maximum size of individual particles. Length identifies 'worst-case lethal particles' capable of bridging critical gaps, while width determines if particles can pass through fluid channels.",
      ],
    },
    {
      title: "In-Depth Analysis: Height & Composition",
      desc: "Advanced metrics to evaluate the true hazard potential and trace contaminant sources.",
      items: [
        "Particle Height Analysis: Critical for metallic particles to determine if their 3D thickness poses mechanical blockage risks.",
        "Elemental Identification (LIBS/SEM): Determines the chemical composition of particles to determine if they are steel, aluminum, brass, or organic fibers, helping pinpoint the exact contaminant source.",
      ],
    },
  ];

  const leicaPrograms = [
    {
      name: "Leica Stereo Microscope M165C Program",
      desc: "An automated stereo microscope configuration optimized for rapid, standard cleanliness analysis.",
      features: [
        "Automated particle detection down to 5 µm",
        "Automatic particle height measurement capabilities",
        "Differentiation between particulate contaminants and fibers",
        "Automatic discrimination of reflective (metallic) and non-reflective particles",
        "High scan speeds with coded zoom lens for repeatable calibration",
      ],
    },
    {
      name: "Leica Material Microscope DM4M Program",
      desc: "Research-grade materials microscope solution for advanced cleanliness testing and metallography.",
      features: [
        "Patented polarized light path specifically designed for cleanliness inspection",
        "Coded stage and focus for automated high-speed multi-field scanning",
        "Apochromatic optical path suitable for high-magnification metallographic inspections",
        "Accurate classification of reflective/non-reflective particles and fibers down to 5 µm",
        "Excellent reproducibility across multiple laboratory operators",
      ],
    },
    {
      name: "Leica DM6M LIBS Spectrometer Program",
      desc: "The ultimate cleanliness solution combining optical inspection and chemical analysis in one system.",
      features: [
        "Integrated Laser-Induced Breakdown Spectroscopy (LIBS) for instant chemical analysis",
        "Determines the elemental composition of target contaminants within 2 seconds",
        "Eliminates the need for expensive and slow SEM/EDX system transfers",
        "Full motorization of stage, nosepiece, and light settings for 1-click inspection",
        "Identifies contaminant source (e.g. tool wear, packing material, casting slag)",
      ],
    },
  ];

  const systems = [
    {
      name: "DJ-CA100 Cleanliness Analyser",
      desc: "High-resolution optical particle counting and measurement system equipped with automated analysis software complying with VDA 19 / ISO 16232 standards.",
      specs: [
        "Resolution down to 5 µm",
        "Full automated stage scanning",
        "ISO 16232 compliance certification",
      ],
      image:
        "https://picsum.photos/seed/spectratech-cleanliness-analyzer/600/400",
    },
    {
      name: "DJ-CC767 Cleanliness Cabinets",
      desc: "Controlled extraction cabinets designed for component washing and residue collection. Offers a laminar flow clean environment to eliminate external ambient dust contamination.",
      specs: [
        "Integrated fluid extraction and filtration",
        "Self-cleaning cabinet functions",
        "HEPA air filtration system",
      ],
      image:
        "https://picsum.photos/seed/spectratech-cleanliness-cabinet/600/400",
    },
    {
      name: "DJ-CTS Cleanliness Testing Solution",
      desc: "Complete turn-key packages including extraction cabinets, vacuum filtration units, drying ovens, analytical balances, and automated microscope systems.",
      specs: [
        "End-to-end testing workflow setup",
        "Pre-loaded ISO & VDA evaluation templates",
        "Saves up to 40% lab footprint",
      ],
      image:
        "https://picsum.photos/seed/spectratech-cleanliness-solution/600/400",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 to-slate-900/60 z-10" />
          <Image
            src="https://picsum.photos/seed/spectratech-clean-sol/1920/1080"
            alt="ISO or VDA 19 Technical Cleanliness Solutions"
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
                ISO & VDA 19 Cleanliness
              </span>
            </nav>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              >
                Technical Cleanliness (ISO 16232 / VDA 19)
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-xl text-slate-200 leading-relaxed font-medium max-w-3xl"
              >
                Comprehensive contamination extraction, particle sizing, and
                elemental source identification solutions for precision
                automotive and hydraulic components.
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

      {/* The Danger of Component Contamination */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-red-500/5 rounded-3xl transform -rotate-3 scale-105"></div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://picsum.photos/seed/spectratech-part-fail/600/450"
                  alt="Microscopic particle contaminants"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wider">
                <ShieldAlert className="w-5 h-5" />
                <span>The Technical Cleanliness Challenge</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Small Particles, Big Hazards: Contamination Risks
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Technical cleanliness is an essential quality index that
                indicates the quantity and nature of particulate dirt remaining
                on the active surfaces of a component after cleaning. Component
                residue and lethal particles are responsible for **over 80% of
                early mechanical system failures** and warranty claims.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 text-sm">
                    <strong className="text-slate-900">
                      High-pressure Hydraulics & Powertrains:
                    </strong>{" "}
                    Micro-particles block fluid channels or scratch cylinders,
                    leading to rapid pressure drops or engine failures.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 text-sm">
                    <strong className="text-slate-900">
                      Precision Bearings & Turbines:
                    </strong>{" "}
                    Particles trapped in high-speed bearings (spinning at
                    thousands of RPM) result in extreme thermal fatigue and
                    catastrophic fractures.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2.5 shrink-0"></div>
                  <p className="text-slate-600 text-sm">
                    <strong className="text-slate-900">
                      Electronics & EV Circuits:
                    </strong>{" "}
                    Conductive metal particles bridging microscopic traces cause
                    immediate short circuits, leading to controller failures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Parameters */}
      <section className="py-20 bg-white border-t border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Analysis Scope
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Cleanliness Testing Parameters
            </h2>
            <p className="text-slate-600 text-lg">
              Understand the difference between standard gravimetric checks and
              in-depth chemical particle characterizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {analysisTypes.map((type, idx) => (
              <div
                key={idx}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200/50 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6">{type.desc}</p>
                  <div className="space-y-4">
                    {type.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-1 bg-primary w-20 rounded-full mt-8"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leica Microscopy Configurations */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Optical Inspection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Automated Leica Microscopy Solutions
            </h2>
            <p className="text-slate-600 text-lg">
              Leverage automated scanning solutions powered by Leica optics to
              automatically size and analyze thousands of particles.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {leicaPrograms.map((prog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row gap-8 items-start"
              >
                <div className="lg:w-1/3 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {idx === 0 ? (
                      <Layers className="w-6 h-6" />
                    ) : idx === 1 ? (
                      <Cpu className="w-6 h-6" />
                    ) : (
                      <ScanLine className="w-6 h-6" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                    {prog.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                <div className="lg:w-2/3">
                  <h4 className="font-bold text-slate-950 mb-4 text-sm uppercase tracking-wider">
                    Key Program Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prog.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex gap-2 items-start text-slate-700 text-sm font-medium"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleanliness Extraction Cabinets & Systems */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Extraction & Hardware
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Complete Cleanliness Extraction & Analysis Systems
            </h2>
            <p className="text-slate-600 text-lg">
              We provide localized turn-key hardware packages for washing,
              filtering, and scanning components.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {systems.map((sys, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/50 flex flex-col h-full hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src={sys.image}
                    alt={sys.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900 text-white font-bold text-xs uppercase px-3 py-1 rounded-full">
                    Testing Hardware
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      {sys.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {sys.desc}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-slate-950 font-bold text-xs uppercase tracking-wider mb-2">
                        Technical Features
                      </h4>
                      <ul className="space-y-1">
                        {sys.specs.map((spec, sIdx) => (
                          <li
                            key={sIdx}
                            className="flex items-center text-xs text-slate-700 font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-5 py-3 mt-6 bg-slate-900 hover:bg-primary text-white rounded-xl font-bold transition-colors text-sm group"
                  >
                    Inquire Specifications
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
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/spectratech-pattern/1000/1000')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a complete technical cleanliness laboratory setup?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            From extraction cabinets to automated particle sizing microscopes,
            our engineering team in Lahore provides complete installations,
            methods setup, calibration disks matching, and ongoing training
            support across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:scale-105"
            >
              Contact Our Cleanliness Experts
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
