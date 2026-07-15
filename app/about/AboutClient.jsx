"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Target, Play } from "lucide-react";
import { features } from "@/lib/data/content";
import { SpectraTechLogo } from "../../public/images";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function AboutClient() {
  const icons = [ShieldCheck, Users, Target];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/70 z-10" />
          <Image
            src="https://picsum.photos/seed/spectratech-hero/1920/1080"
            alt="SpectraTech Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="flex justify-center mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-bold tracking-widest uppercase backdrop-blur-sm">
                About SpectraTech
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Precision Instruments. <br className="hidden md:block" /> Reliable
              Local Support.
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              Authorized Pakistan distributor for Wuxi Jinyibo Instrument
              Technology — bringing world-class analytical instrumentation to
              industries across Pakistan.
            </motion.p>
          </motion.div>
        </div>

        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="relative block w-full h-[50px] md:h-[100px]"
            data-name="Layer 1"
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

      {/* Founding & Experience */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] w-full border-8 border-white">
                <Image
                  src="https://picsum.photos/seed/spectratech-about-exp/800/800"
                  alt="Engineering Experience"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    4+
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg leading-tight">
                      Years of
                      <br />
                      Experience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="lg:w-1/2 space-y-6"
            >
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
              >
                Built on years of hands-on{" "}
                <span className="text-primary">engineering experience</span>
              </motion.h2>
              <motion.div
                variants={fadeIn}
                className="w-20 h-1.5 bg-accent rounded-full"
              ></motion.div>
              <motion.p
                variants={fadeIn}
                className="text-lg text-slate-600 leading-relaxed"
              >
                SpectraTech Solutions Pvt Ltd was founded in 2026 by an
                electrical engineer with 4+ years of hands-on OES and analytical
                instrumentation experience, including direct service work on
                Spectro OES (Germany) systems.
              </motion.p>
              <motion.p
                variants={fadeIn}
                className="text-lg text-slate-600 leading-relaxed"
              >
                We supply, install and service elemental analysis instruments —
                OES, XRF, EDXRF and Carbon-Sulfur analyzers — for
                Pakistan&apos;s steel, foundry, metal, mining, power and
                chemical industries, backed by original parts and dependable
                after-sales support.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {features.map((feature, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  className="bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Video & Distributorship */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] aspect-square rounded-full bg-primary blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] aspect-square rounded-full bg-accent blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-5xl mx-auto"
          >
            {/* Logos & Trust */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 pb-12 border-b border-white/10"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={SpectraTechLogo}
                  alt="SpectraTech Solutions"
                  className="h-32 w-auto"
                  priority
                />
              </div>

              <div className="hidden md:block h-16 w-px bg-white/20"></div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest text-center md:text-left">
                  Authorized Distributor of
                </span>
                <a
                  href="https://www.jinyibo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="h-16 px-8 bg-white flex items-center justify-center rounded-xl shadow-lg group-hover:scale-105 transition-all duration-300">
                    <span className="font-black text-2xl text-slate-800 tracking-wider">
                      JINYIBO
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Video Placeholder */}
            <motion.div
              variants={fadeIn}
              className="relative w-full aspect-video bg-slate-800 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer border border-white/10"
            >
              <Image
                src="https://picsum.photos/seed/spectratech-video/1200/600"
                alt="Company Video"
                fill
                className="object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-white/20">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg pl-1.5 group-hover:bg-white transition-colors duration-300">
                    <Play
                      className="w-8 h-8 text-white group-hover:text-primary transition-colors"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
