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

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1: Contact Us */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 border-b border-slate-700 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <p className="font-semibold text-white">
                Company: {siteConfig.name}
              </p>
              <div className="bg-primary/20 text-primary-foreground inline-block px-3 py-1 rounded text-xs font-bold mb-2">
                SALES
              </div>
              <p>
                <span className="text-slate-400">Designation:</span>{" "}
                {siteConfig.contact.ceo}
              </p>
              <p>
                <span className="text-slate-400">Address:</span>{" "}
                {siteConfig.contact.address}
              </p>
              <p>
                <span className="text-slate-400">Tel:</span>{" "}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <span className="text-slate-400">Email:</span>{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href={siteConfig.social.facebook}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Hot Tags */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 border-b border-slate-700 pb-2 inline-block">
              Hot Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="bg-slate-800 hover:bg-primary text-xs px-3 py-1.5 rounded transition-colors"
                >
                  {product.name}
                </Link>
              ))}
              {/* Extra tags from the brief */}
              <Link
                href="/products/mobile-metal-analyzer"
                className="bg-slate-800 hover:bg-primary text-xs px-3 py-1.5 rounded transition-colors"
              >
                Mobile Metal Analyzer
              </Link>
              <Link
                href="/products/oes-spectrometer"
                className="bg-slate-800 hover:bg-primary text-xs px-3 py-1.5 rounded transition-colors"
              >
                Alloy And Metal Analyzer
              </Link>
              <Link
                href="/products/icp-oes"
                className="bg-slate-800 hover:bg-primary text-xs px-3 py-1.5 rounded transition-colors"
              >
                ICP Analysis For Metals
              </Link>
            </div>
          </div>

          {/* Column 3: Leave a Message */}
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-white text-xl font-bold mb-6">
              Leave a Message
            </h3>
            <div className="text-slate-900">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-[#051c42] py-6 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-primary flex items-center justify-center font-bold text-sm rounded">
              ST
            </div>
            <span className="font-bold text-white tracking-tight">
              SpectraTech
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-400 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-white transition-colors"
            >
              Products
            </Link>
            <Link
              href="/service"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link href="/video" className="hover:text-white transition-colors">
              Videos
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="text-slate-500 text-xs text-center md:text-right">
            <p>© Copyright 2026 {siteConfig.name}. All Rights Reserved.</p>
            <div className="mt-1 flex justify-center md:justify-end gap-2">
              <Link
                href="/sitemap.xml"
                className="hover:text-white transition-colors"
              >
                Sitemap
              </Link>
              <span>|</span>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
