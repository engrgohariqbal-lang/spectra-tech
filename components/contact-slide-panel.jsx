"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
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
        "fixed left-0 top-1/2 -translate-y-1/2 z-50 flex shadow-lg transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
      onMouseEnter={() => handleInteraction("enter")}
      onMouseLeave={() => handleInteraction("leave")}
    >
      {/* Sliding Content */}
      <div className="bg-white border border-border border-l-0 rounded-r-lg p-6 flex flex-col gap-6 shadow-xl w-72">
        <h3 className="font-bold text-primary text-lg border-b pb-2">Contact Us</h3>
        
        <a 
          href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium">{siteConfig.contact.phone}</span>
        </a>

        <a 
          href={`mailto:${siteConfig.contact.email}`}
          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium break-all">{siteConfig.contact.email}</span>
        </a>

        <a 
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-muted-foreground hover:text-[#25D366] transition-colors group"
        >
          <div className="bg-[#25D366]/10 p-2 rounded-full group-hover:bg-[#25D366] group-hover:text-white text-[#25D366] transition-colors">
            <MessageCircle className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium">WhatsApp Us</span>
        </a>
      </div>

      {/* Persistent Tab Handle */}
      <button
        onClick={() => handleInteraction("click")}
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 translate-x-full bg-primary text-white rounded-r-lg shadow-md cursor-pointer flex items-center justify-center p-2 transition-all hover:bg-primary/90",
          "w-12 h-32"
        )}
        aria-label="Toggle Contact Panel"
      >
        <span className="writing-vertical-lr rotate-180 font-bold tracking-widest text-sm">
          CONTACT
        </span>
      </button>
    </div>
  );
}
