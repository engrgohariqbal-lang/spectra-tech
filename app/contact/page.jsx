import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data/content";
import { ContactForm } from "@/components/contactComponents/contact-form";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SpectraTech Solutions for inquiries, sales, and service.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-300">
              We're here to answer any questions you have about our products or
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 -mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Contact Details & Map */}
            <div className="w-full lg:w-5/12 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Head Office
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Phone / WhatsApp
                      </h3>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                        className="text-slate-600 text-sm hover:text-primary transition-colors block"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-slate-600 text-sm hover:text-primary transition-colors block"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden h-[300px] relative">
                {/* 
                  Real implementation would use an iframe:
                  <iframe src="..." width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                */}
                <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-500">
                  <MapPin className="w-12 h-12 mb-2 text-slate-400" />
                  <span className="font-medium text-lg">
                    Map View Placeholder
                  </span>
                  <span className="text-sm">Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100 h-full">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  Leave a Message
                </h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and our team will get back to you
                  shortly.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
