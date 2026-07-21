"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/data/content";
import { cn } from "@/lib/utils";

export function ContactSlidePanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleInteraction = (type) => {
    if (type === "enter" && !isTouchDevice) setIsOpen(true);
    if (type === "leave" && !isTouchDevice) setIsOpen(false);
    if (type === "click" && isTouchDevice) setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(
        "fixed right-0 top-1/2 -translate-y-1/2 z-50 flex shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
      onMouseEnter={() => handleInteraction("enter")}
      onMouseLeave={() => handleInteraction("leave")}
    >
      {/* Sliding Content */}
      <div className="bg-white/95 backdrop-blur-xl border border-white/40 border-r-0 rounded-l-2xl p-8 flex flex-col gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] w-80 relative overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="mb-6">
            <h3 className="font-extrabold text-slate-900 text-2xl tracking-tight mb-2">
              Let's Connect
            </h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Have a question or need assistance? Reach out to us directly.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
              className="group flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-2.5 rounded-full text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shadow-sm border border-slate-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-primary font-bold uppercase tracking-wider mb-0.5">
                    Call us
                  </span>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">
                    {siteConfig.contact.phone}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="group flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-orange-400/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="bg-white p-2.5 rounded-full text-slate-400 group-hover:bg-orange-400 group-hover:text-white transition-all duration-300 border border-slate-100 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[11px] text-orange-500 font-bold uppercase tracking-wider mb-0.5">
                    Email us
                  </span>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-orange-400 transition-colors truncate">
                    {siteConfig.contact.email}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-orange-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
            </a>

            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-[#25D366]/5 transition-all duration-300 mt-2"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-2.5 rounded-full text-emerald-500 group-hover:bg-[#25D366] group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-[#25D366]/30 transition-all duration-300 shadow-sm border border-emerald-100 relative">
                  <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <FaWhatsapp className="w-5 h-5 relative z-10" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-emerald-600/70 font-bold uppercase tracking-wider mb-0.5">
                    Live Chat
                  </span>
                  <span className="text-sm font-bold text-emerald-700 group-hover:text-[#25D366] transition-colors">
                    WhatsApp Us
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Persistent Tab Handle */}
      <button
        onClick={() => handleInteraction("click")}
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-primary text-white rounded-l-xl shadow-lg cursor-pointer flex flex-col items-center justify-center gap-6 py-6 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl",
          "w-12 h-40 overflow-hidden border border-r-0 border-white/20",
          "group",
        )}
        aria-label="Toggle Contact Panel"
      >
        <span className="-rotate-90 font-bold tracking-[0.25em] text-sm whitespace-nowrap">
          CONTACT
        </span>
      </button>
    </div>
  );
}
