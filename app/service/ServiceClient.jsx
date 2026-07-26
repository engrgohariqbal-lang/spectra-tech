"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Wrench,
  Settings,
  HelpCircle,
  FileText,
  ChevronDown,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const servicesContent = {
  faq: {
    id: "faq",
    title: "FAQs",
    icon: FileText,
    faqs: [
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
            spectrum analyzer Oxygen and water vapor will absorb the spectrum in
            the far ultraviolet region, its analysis results will be unstable.
            Argon gas has an effect on the air in the spak chamber. It
            contributes to creating a vacuum environment and reduces the
            absorption of special element lines by the air. In addition, the
            pressure and flow of argon also determine the firing ability. Just
            like “friend dishes”, it is necessary to control the size of the
            heat, the heat is too large, the post loss is large, the heat is too
            small, the time becomes longer, and some special problems occur. At
            this time, the impact capability of argon on the discharge surface
            determined these factors, when the spark ability is low, the oxide
            condenses on the surface of the sample, which affects the continued
            excitation of the sample.{"\n\n"}
            <strong>Point 2:</strong> Temperature, don&apos;t let your Optical
            Emission Spectrometer heat stroke. Optical Emission Spectrometers
            are delicate precision instruments. The indoor temperature actually
            affects many instruments because the machine itself generate heat.
            It is not just the OES Analyzer that gets hot, it is also hot behind
            the TV.{"\n\n"}
            <strong>Point 3:</strong> Sample preparation, this is the reason for
            the error of the Optical Emission Spectrometer. No matter how good
            the instrument is, the final result will be poor if the sample is
            prepared improperly. The main reason is that there are surface
            defects or uneven internal structure on the surface of the sample
            after sampling.
          </>
        ),
      },
    ],
  },
  installation: {
    id: "installation",
    title: "Installation & Training",
    icon: Wrench,
    image:
      "https://www.jinyibo.com/js/tinymce/demo/images/202202/10/a145d090ba1fc06ec4a4d0a4a1c0187f.jpg",
    content: [
      "Your scientific instrument investment pays even greater dividends when it is put to skillful and safe use. With our operator training programs and safety e-learning, you elevate your operators to higher levels of proficiency and realize the full potential of the spend. Our emphasis on comprehensive service training provides our dealers with confidence and our customers with peace of mind.",
      "The installation including installation video and installation guide, normally can be installed without our service engineer in some special circumstances.",
      "The training courses cover basic knowledge as well as the installation guide, operation instruction, trouble-shooting, contents of instrument, usage environment, matters needing attention. After training, the trainee can gain more information of products for the better direction of the scientific instrument operation of our end-users.",
      "Please fill in acceptance report and confirm installation, debugging, and training can be finished successfully.",
    ],
  },
  parts: {
    id: "parts",
    title: "Parts & Maintenance",
    icon: Settings,
    image:
      "https://www.jinyibo.com/uploadfile/202504/01/e4ca594931a45e02e57c8033cabb9441_small.jpg",
    content: [
      "Supply of original spare parts and routine maintenance services to minimize downtime and extend the lifespan of your analytical equipment.",
      "We keep a comprehensive inventory of essential spare parts locally in Pakistan to ensure rapid replacement and minimal disruption to your operations.",
      "Preventative maintenance contracts are available to keep your instruments calibrated and running at peak performance year-round.",
    ],
  },
  support: {
    id: "support",
    title: "Technical Support",
    icon: HelpCircle,
    image:
      "https://www.jinyibo.com/js/tinymce/demo/images/202202/19/cab73ab7dce778c8b7fe2eecd72530f9.jpg",
    content: [
      "For services applications, SpectraTech offers a broad range of advanced analytical support.",
      "Chemical and physical elemental analyses are frequently critical to your production. Our dedicated remote and on-site troubleshooting assistance is led by experienced engineers to ensure you can rely on your instruments.",
      "For metallic samples, testing facilities, and independent material laboratories, our technical support ensures that your stationary metal analyzers, like the W5 OES or TY-9000 OES, are properly configured and verified with the respective reference materials.",
    ],
  },
};

const serviceKeys = Object.keys(servicesContent);

export default function ServiceClient() {
  const [activeTab, setActiveTab] = useState("faq");
  const [openFaq, setOpenFaq] = useState(0);

  const currentContent = servicesContent[activeTab];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://www.jinyibo.com/uploadfile/bannerimg/16454208990999.jpg"
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
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-wide uppercase"
            >
              {currentContent.title}
            </motion.h1>
            <motion.div
              variants={fadeIn}
              className="flex items-center justify-center gap-2 text-sm text-slate-300 font-medium tracking-wider uppercase"
            >
              <span className="hover:text-white cursor-pointer transition-colors">
                Home
              </span>
              <span className="text-primary">/</span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Service
              </span>
              <span className="text-primary">/</span>
              <span className="text-white">{currentContent.title}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-7xl mx-auto">
            {/* Left Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/4 shrink-0"
            >
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-44">
                <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
                  <span className="font-bold text-lg italic tracking-wider">
                    Service
                  </span>
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl leading-none">+</span>
                  </div>
                </div>
                <ul className="flex flex-col">
                  {serviceKeys.map((key) => {
                    const tab = servicesContent[key];
                    const isActive = activeTab === key;
                    return (
                      <li
                        key={key}
                        className="border-b border-slate-100 last:border-0"
                      >
                        <button
                          onClick={() => setActiveTab(key)}
                          className={`w-full cursor-pointer text-left p-5 flex items-center justify-between transition-all duration-300 ${isActive ? "bg-slate-200 text-primary font-bold" : "bg-white text-slate-700 hover:text-primary hover:bg-slate-50"}`}
                        >
                          <span className="flex items-center gap-3 text-[15px]">
                            {isActive && (
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            )}
                            {tab.title}
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform duration-300 ${isActive ? "translate-x-1 text-primary" : "text-slate-400"}`}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-3/4"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                <div className="flex flex-col gap-8">
                  {/* Title Header */}
                  <div className="border-b border-slate-200 pb-6 flex items-center justify-between">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {currentContent.title}
                    </h2>
                    {/* <span className="text-sm text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full">
                      {new Date().toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span> */}
                  </div>

                  {/* Dynamic Content */}
                  <div className="text-slate-600 leading-relaxed text-lg">
                    {activeTab === "faq" ? (
                      <div className="space-y-4">
                        {currentContent.faqs.map((faq, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden transition-shadow"
                          >
                            <button
                              onClick={() =>
                                setOpenFaq(openFaq === idx ? null : idx)
                              }
                              className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                            >
                              <h3
                                className={`font-semibold text-base pr-8 transition-colors ${openFaq === idx ? "text-primary" : "text-slate-800"}`}
                              >
                                {faq.question}
                              </h3>
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === idx ? "bg-primary text-white" : "bg-white text-slate-400 border border-slate-200"}`}
                              >
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
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
                                  <div className="text-base px-6 pb-6 text-slate-600 border-t border-slate-200/50 mt-2 pt-4 whitespace-pre-line">
                                    {faq.answer}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {currentContent.image && (
                          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden shadow-md mb-8">
                            <Image
                              src={currentContent.image}
                              alt={currentContent.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        {currentContent.content.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}

                        {/* Example related items for Support tab */}
                        {activeTab === "support" && (
                          <div className="mt-12 pt-8 border-t border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase">
                              Applicable Products:
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {[
                                {
                                  name: "W5 Optical Emission Spectrometer",
                                  img: "https://www.jinyibo.com/uploadfile/202211/02/05f18243ff29c9ea5bbe117f0b74c73f_medium.jpg",
                                },
                                {
                                  name: "Handheld LIBS Analyzer",
                                  img: "https://www.jinyibo.com/js/tinymce/demo/images/202202/22/e34e185dcf1194d4a404b647061e338b.jpg",
                                },
                                {
                                  name: "TY9800 XRF Spectrometer",
                                  img: "https://www.jinyibo.com/js/tinymce/demo/images/202202/22/20b483fb3999c733c5080c8073632a69.jpg",
                                },
                              ].map((item, i) => (
                                <div
                                  key={i}
                                  className="text-center group cursor-pointer"
                                >
                                  <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-100 mb-4 group-hover:border-primary/50 transition-colors">
                                    <Image
                                      src={item.img}
                                      alt={item.name}
                                      fill
                                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                  </div>
                                  <p className="font-semibold text-slate-800 text-sm group-hover:text-primary transition-colors">
                                    {item.name}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
