"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Settings, HelpCircle, ChevronDown } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const services = [
  {
    icon: Wrench,
    title: "Installation & Training",
    description:
      "Professional setup of your instruments at your facility, followed by comprehensive operator training to ensure correct and safe usage from day one.",
    images: [
      "https://picsum.photos/seed/spectratech-svc-inst1/600/400",
      "https://picsum.photos/seed/spectratech-svc-inst2/600/400",
      "https://picsum.photos/seed/spectratech-svc-inst3/600/400",
    ],
  },
  {
    icon: Settings,
    title: "Parts & Maintenance",
    description:
      "Supply of original spare parts and routine maintenance services to minimize downtime and extend the lifespan of your analytical equipment.",
    images: [
      "https://picsum.photos/seed/spectratech-svc-parts1/600/400",
      "https://picsum.photos/seed/spectratech-svc-parts2/600/400",
      "https://picsum.photos/seed/spectratech-svc-parts3/600/400",
    ],
  },
  {
    icon: HelpCircle,
    title: "Technical Support",
    description:
      "Dedicated remote and on-site troubleshooting assistance led by experienced engineers.",
    images: [
      "https://picsum.photos/seed/spectratech-svc-tech1/600/400",
      "https://picsum.photos/seed/spectratech-svc-tech2/600/400",
      "https://picsum.photos/seed/spectratech-svc-tech3/600/400",
    ],
  },
];

const faqs = [
  {
    question: "What is the typical response time for service calls?",
    answer:
      "We aim to respond to all service inquiries within 24 hours, with on-site visits scheduled promptly based on urgency and location within Pakistan.",
  },
  {
    question: "Do you provide original spare parts?",
    answer:
      "Yes, as an authorized distributor, we supply only original, certified spare parts for all our supported analytical instruments.",
  },
  {
    question: "Is remote troubleshooting available?",
    answer:
      "Absolutely. Our expert engineers provide dedicated remote support to quickly diagnose and resolve software or configuration issues without needing an on-site visit.",
  },
];

export default function ServiceClient() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-800/60 z-10" />
          <Image
            src="https://picsum.photos/seed/spectratech-service-hero/1920/1080"
            alt="Service and Support"
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
                Service & Support
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Expert Care for Your <br className="hidden md:block" /> Analytical
              Instruments
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              Committed to keeping your operations running smoothly with
              comprehensive installation, maintenance, and expert after-sales
              support.
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

      {/* Services Grid */}
      <section className="py-20 relative z-30 -mt-10 md:-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={stagger}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 group hover:shadow-2xl hover:border-primary/20 transition-all duration-500`}
                >
                  {/* Text Content */}
                  <motion.div
                    variants={fadeIn}
                    className="flex-1 space-y-6 lg:max-w-xl"
                  >
                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Icon className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </motion.div>

                  {/* Images Gallery */}
                  <motion.div variants={fadeIn} className="flex-1 w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-3xl -m-4 -z-10 blur-xl"></div>
                    <div className="grid grid-cols-2 gap-3 h-[300px] md:h-[400px]">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md">
                        <Image
                          src={service.images[0]}
                          alt={`${service.title} working image 1`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="grid grid-rows-2 gap-3 h-full">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md">
                          <Image
                            src={service.images[1]}
                            alt={`${service.title} working image 2`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md">
                          <Image
                            src={service.images[2]}
                            alt={`${service.title} working image 3`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div
                  variants={fadeIn}
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between focus:outline-none"
                  >
                    <h3
                      className={`font-bold text-lg md:text-xl pr-8 transition-colors ${openFaq === idx ? "text-primary" : "text-slate-800"}`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === idx ? "bg-primary text-white" : "bg-white text-slate-400 border border-slate-200"}`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-0 text-slate-600 leading-relaxed text-lg border-t border-slate-200/50 mt-2 pt-6">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
