"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why Use Tungsten Accelerator in Carbon & Sulfur Analyzer?",
    answer:
      "Why Use Tungsten Accelerator in Carbon & Sulfur Analyzer Tungsten accelerator as a normal additives in Carbon&Sulfur Analyzer, its features are: 1. Tungsten is the most difficult metal to melt, its melting point is 3380℃. The temperature of electronic arc can melt",
  },
  {
    question:
      "X-ray Fluorescence Spectrometer Has Higher Energy Level, Is there Radiation",
    answer:
      "Many people ask whether the radiation of the X-ray fluorescence spectrometer affects the human body? See below for how X-rays cause radiation. Electromagnetic radiation Electromagnetic radiation is divided into ionizing radiation and non-ionizing radiation.",
  },
  {
    question: "Types of Aluminum Alloys",
    answer:
      "Types of Aluminum Alloys 1. How many types of Aluminum alloys? 1 series:1000 series aluminum alloys represent the 1050, 1060, and 1100 series. Series 1000 is one of the series with the highest aluminum content of all series. Its purity can reach more than 99.00%.",
  },
  {
    question: "Classification of Non-ferrous Metals",
    answer:
      "Non-ferrous metals are the general term for all metals except iron, chromium and manganese. We usually refer to copper, aluminum, lead, zinc, rickel, tin, antimony, mercury, magnesium, and titanium as ten common nonferrous metals. Classification of Non-ferrous Metals The international market usually divides non-ferrous metals into base metals, precious metals and small metals. Base metals include copper, aluminum, lead, zinc, nickel,tin, And the precious metals are the platinum group metals and gold and silver that we commonly use jewelry, and the small metals are other metals except basic metals and precious metals. In practical applications, we usually divide non-ferrous metals into 5 categories.",
  },
  {
    question: "The Acknowledgement of Carbon & Sulfur Analyzer",
    answer:
      "The Acknowledgement of Carbon & Sulfur Analyzer About Carbon & Sulfur Analyzer, in simple terms, it is to determine the content of carbon and sulfur in the sample. Take our CS-8820S Carbon & Sulfur Analyzer as an example, it is a type of All-in-one.",
  },
  {
    question: "Solve the 80% Error of the Optical Emission Spectrometer",
    answer: (
      <>
        Solve the 80% error of the optical emission spectrometer, please pay
        attention to 3 points.{"\n\n"}
        <strong>Point 1:</strong> argon, prepare the correct argon for the
        spectrum analyzer Oxygen and water vapor will absorb the spectrum in the
        far ultraviolet region, its analysis results will be unstable. Argon gas
        has an effect on the air in the spak chamber. It contributes to creating
        a vacuum environment and reduces the absorption of special element lines
        by the air. In addition, the pressure and flow of argon also determine
        the firing ability. Just like “friend dishes”, it is necessary to
        control the size of the heat, the heat is too large, the post loss is
        large, the heat is too small, the time becomes longer, and some special
        problems occur. At this time, the impact capability of argon on the
        discharge surface determined these factors, when the spark ability is
        low, the oxide condenses on the surface of the sample, which affects the
        continued excitation of the sample.{"\n\n"}
        <strong>Point 2:</strong> Temperature, don&apos;t let your Optical
        Emission Spectrometer heat stroke. Optical Emission Spectrometers are
        delicate precision instruments. The indoor temperature actually affects
        many instruments because the machine itself generate heat. It is not
        just the OES Analyzer that gets hot, it is also hot behind the TV.
        {"\n\n"}
        <strong>Point 3:</strong> Sample preparation, this is the reason for the
        error of the Optical Emission Spectrometer. No matter how good the
        instrument is, the final result will be poor if the sample is prepared
        improperly. The main reason is that there are surface defects or uneven
        internal structure on the surface of the sample after sampling.
      </>
    ),
  },
];

const SpectraFAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-20 bg-slate-200 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-24 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Spectra Tech FAQs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Frequently asked questions about our analytical instruments and
            services.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className={`mb-4 rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-primary/20 shadow-lg shadow-primary/5"
                    : "bg-white border-slate-200 hover:border-primary/30"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between focus:outline-none"
                >
                  <span
                    className={`text-left font-semibold text-base md:text-lg pr-4 transition-colors ${
                      isOpen ? "text-primary" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-180"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 text-slate-600 leading-relaxed text-base md:text-lg whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpectraFAQs;
