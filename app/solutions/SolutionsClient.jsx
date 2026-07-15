"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { solutions } from "@/lib/data/content";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function SolutionsClient() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-800/60 z-10" />
          <Image
            src="https://picsum.photos/seed/spectratech-solutions-hero/1920/1080"
            alt="Analytical Solutions"
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
                Industry Solutions
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Tailored Analytical <br className="hidden md:block" /> Solutions
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-slate-100 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              Designed for accuracy, operational efficiency, and strict quality
              control across the most demanding industries.
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

      {/* Solutions List */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="space-y-24 md:space-y-32 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  className={`w-full md:w-1/2 relative ${index % 2 !== 0 ? "md:order-2" : ""}`}
                >
                  {/* Decorative background shape */}
                  <div
                    className={`absolute inset-0 bg-primary/5 rounded-3xl transform scale-105 ${index % 2 !== 0 ? "-rotate-3" : "rotate-3"} transition-transform duration-500 ease-in-out`}
                  ></div>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={stagger}
                  className="w-full md:w-1/2"
                >
                  <motion.div
                    variants={fadeIn}
                    className="flex items-center gap-4 mb-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="h-px bg-slate-200 flex-1"></div>
                  </motion.div>
                  <motion.h2
                    variants={fadeIn}
                    className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight"
                  >
                    {solution.title}
                  </motion.h2>
                  <motion.p
                    variants={fadeIn}
                    className="text-lg text-slate-600 leading-relaxed mb-8"
                  >
                    {solution.description}
                  </motion.p>

                  <motion.ul variants={stagger} className="space-y-4 mb-10">
                    {[
                      "High precision elemental and trace analysis",
                      "Rapid analysis times ensuring high throughput",
                      "Robust industrial design for continuous operation",
                    ].map((item, i) => (
                      <motion.li
                        variants={fadeIn}
                        key={i}
                        className="flex items-start text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-4" />
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div variants={fadeIn}>
                    <Link
                      href={solution.link || "#"}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-primary transition-colors shadow-lg hover:shadow-xl group"
                    >
                      Explore Solution
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/spectratech-pattern/1000/1000')] opacity-5 mix-blend-overlay"></div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10"
            >
              Need a Custom Analytical Solution?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto relative z-10"
            >
              Our engineering team is ready to consult with you to find the
              perfect instrumentation tailored for your specific material
              testing requirements.
            </motion.p>
            <motion.div variants={fadeIn} className="relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(var(--primary),0.4)]"
              >
                Contact Our Experts
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
