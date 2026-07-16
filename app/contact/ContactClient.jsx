"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data/content";
import { ContactForm } from "@/components/contactComponents/contact-form";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function ContactClient({ mapUrl }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-800/60 z-10" />
          <Image
            src="https://picsum.photos/seed/spectratech-contact-hero/1920/1080"
            alt="Contact SpectraTech"
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
                Get In Touch
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Let&apos;s Start a <br className="hidden md:block" /> Conversation
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              We&apos;re here to answer any questions you have about our
              products, support, or customized analytical solutions.
            </motion.p>
          </motion.div>
        </div>

        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="relative hidden xl:block w-full h-[50px] md:h-[100px]"
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

      {/* Main Content */}
      <section className="py-20 md:py-28 relative z-30 -mt-10 md:-mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
            {/* Contact Details & Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="w-full lg:w-5/12 space-y-8"
            >
              <motion.div
                variants={fadeIn}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5 group/item">
                    <div className="w-14 h-14 bg-slate-50 text-primary rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Head Office
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group/item">
                    <div className="w-14 h-14 bg-slate-50 text-primary rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shadow-sm">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Phone / WhatsApp
                      </h3>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                        className="text-slate-600 text-lg hover:text-primary transition-colors block font-medium"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group/item">
                    <div className="w-14 h-14 bg-slate-50 text-primary rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shadow-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Email Address
                      </h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-slate-600 text-lg hover:text-primary transition-colors block font-medium break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group/item">
                    <div className="w-14 h-14 bg-slate-50 text-primary rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shadow-sm">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Business Hours
                      </h3>
                      <p className="text-slate-600 text-lg font-medium">
                        Mon - Fri: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden h-[350px] relative p-2"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <iframe
                    title="Google Map Location"
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="w-full lg:w-7/12"
            >
              <div className="bg-white p-8 md:p-14 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-full -z-10"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Send a Message
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Fill out the form below and our technical sales team will get
                  back to you within 24 hours.
                </p>
                <div className="relative">
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
