"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/data/content";
import { products } from "@/lib/data/products";
import { ContactForm } from "@/components/contact-form";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const contactTabs = ["SALES", "TECHNICAL", "AFTER-SALES"];

const hotTags = [
  { label: "Optical Emission Spectrometer", href: "/products/oes-spectrometer" },
  { label: "Handheld XRF Analyzer", href: "/products/handheld-xrf-analyzer" },
  { label: "Metal Analyzer", href: "/products/mobile-metal-analyzer" },
  { label: "High Frequency Carbon Sulfur Analyzer", href: "/products/carbon-sulfur-onh-analyzer" },
  { label: "X Ray Fluorescence Spectrometer", href: "/products/desktop-edxrf-spectrometer" },
  { label: "Alloy And Metal Analyzer", href: "/products/oes-spectrometer" },
  { label: "Oxygen Nitrogen Hydrogen Analyzer", href: "/products/carbon-sulfur-onh-analyzer" },
  { label: "ICP Analysis For Metals", href: "/products/icp-oes" },
  { label: "Mobile Metal Analyzer", href: "/products/mobile-metal-analyzer" },
  { label: "CRMs & Consumables", href: "/products/crms-consumables" },
];

const tabContact = {
  SALES: {
    company: siteConfig.name,
    manager: siteConfig.contact.ceo,
    address: siteConfig.contact.address,
    tel: siteConfig.contact.phone,
    email: siteConfig.contact.email,
  },
  TECHNICAL: {
    company: siteConfig.name,
    manager: "Technical Support Team",
    address: siteConfig.contact.address,
    tel: siteConfig.contact.phone,
    email: siteConfig.contact.email,
  },
  "AFTER-SALES": {
    company: siteConfig.name,
    manager: "After-Sales Service",
    address: siteConfig.contact.address,
    tel: siteConfig.contact.phone,
    email: siteConfig.contact.email,
  },
};

export function Footer() {
  const [activeTab, setActiveTab] = useState("SALES");
  const info = tabContact[activeTab];

  return (
    <footer
      className="text-slate-300"
      style={{ background: "linear-gradient(135deg, #0d3b80 0%, #1a5fad 60%, #1565c0 100%)" }}
    >
      <div className="container mx-auto px-4 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── Column 1: Contact Us ── */}
          <div>
            <h3 className="text-white text-sm font-extrabold tracking-[0.2em] uppercase mb-5">
              Contact Us
            </h3>

            {/* Tab buttons */}
            <div className="flex mb-6 border border-white/20 rounded-sm overflow-hidden w-fit">
              {contactTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-bold tracking-wider transition-colors border-r border-white/20 last:border-r-0 ${
                    activeTab === tab
                      ? "bg-white text-primary"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Contact details */}
            <div className="space-y-3 text-sm">
              <p className="font-bold text-white text-base">{info.company}</p>
              <p className="text-slate-300">
                <span className="text-slate-400">Manager:</span> {info.manager}
              </p>
              <p className="text-slate-300 leading-relaxed">
                <span className="text-slate-400">Address:</span> {info.address}
              </p>
              <p className="text-slate-300">
                <span className="text-slate-400">Tel:</span>{" "}
                <a
                  href={`tel:${info.tel.replace(/[^+\d]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {info.tel}
                </a>
              </p>
              <p className="text-slate-300">
                <span className="text-slate-400">Email:</span>{" "}
                <a
                  href={`mailto:${info.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {info.email}
                </a>
              </p>
            </div>

            {/* Follow us */}
            <div className="mt-8">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-3">
                Follow Us :
              </p>
              <div className="flex gap-3">
                {[
                  { icon: FaFacebookF, href: siteConfig.social.facebook, label: "Facebook" },
                  { icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram" },
                  { icon: FaTiktok, href: siteConfig.social.tiktok, label: "TikTok" },
                  { icon: FaYoutube, href: siteConfig.social.youtube, label: "YouTube" },
                  { icon: FaLinkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-sm border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-primary transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Column 2: Hot Tags ── */}
          <div>
            <h3 className="text-white text-sm font-extrabold tracking-[0.2em] uppercase mb-5">
              Hot Tags
            </h3>
            <ul className="space-y-2.5">
              {hotTags.map((tag) => (
                <li key={tag.label}>
                  <Link
                    href={tag.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors hover:underline underline-offset-2"
                  >
                    {tag.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Leave a Message ── */}
          <div>
            <h3 className="text-white text-sm font-extrabold tracking-[0.2em] uppercase mb-5">
              Leave A Message
            </h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              If you are interested in our products and want to know more
              details, please leave a message here, we will reply you as soon as
              we can.
            </p>
            <div className="[&_input]:bg-white/10 [&_input]:border-white/20 [&_input]:text-white [&_input]:placeholder:text-white/40 [&_input]:focus:border-white/60 [&_textarea]:bg-white/10 [&_textarea]:border-white/20 [&_textarea]:text-white [&_textarea]:placeholder:text-white/40 [&_textarea]:focus:border-white/60 [&_label]:text-white/70 [&_label]:text-xs [&_[data-slot='form-message']]:text-red-300 [&_button[type='submit']]:bg-white [&_button[type='submit']]:text-primary [&_button[type='submit']]:font-bold [&_button[type='submit']]:hover:bg-slate-100 [&_button[type='submit']]:rounded-none">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10 py-5" style={{ background: "rgba(0,0,0,0.25)" }}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Bottom Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-1 text-xs text-white/60 font-semibold tracking-wider uppercase">
            {[
              { label: "HOME", href: "/" },
              { label: "PRODUCTS", href: "/products" },
              { label: "APPLICATION", href: "/application" },
              { label: "ABOUT US", href: "/about" },
              { label: "SOLUTION", href: "/solutions" },
              { label: "CONTACT US", href: "/contact" },
            ].map((item, idx, arr) => (
              <React.Fragment key={item.label}>
                <Link href={item.href} className="hover:text-white transition-colors px-2">
                  {item.label}
                </Link>
                {idx < arr.length - 1 && <span className="text-white/20">|</span>}
              </React.Fragment>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-white/40 text-center">
            © Copyright © {new Date().getFullYear()} {siteConfig.name} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
