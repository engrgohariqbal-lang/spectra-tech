"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Mail, Phone, Search, ChevronDown, X } from "lucide-react";
import { siteConfig } from "@/lib/data/content";
import { navigation } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/public/images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 shadow-md">
      {/* ── Row 1: Logo | Search | Contact ── */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 flex items-center justify-between h-[72px] gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 transition-transform hover:scale-105 duration-300">
            <Image
              src={Logo}
              alt="SpectraTech Solutions"
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Search Bar — desktop only */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="hidden md:flex flex-1 max-w-md mx-6 items-center border border-slate-300 rounded overflow-hidden"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search info"
              className="flex-1 px-4 py-2 text-sm outline-none bg-white text-slate-700 placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="bg-primary px-4 py-2 text-white hover:bg-primary/90 transition-colors shrink-0"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Contact Info — desktop */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">{siteConfig.contact.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">{siteConfig.contact.email}</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="relative z-50 text-slate-800 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu — slides down from the top */}
      <div
        className={cn(
          "absolute left-0 w-full bg-white border-t border-slate-200/80 shadow-2xl z-40 transition-all duration-500 ease-in-out transform origin-top md:hidden overflow-hidden",
          isOpen
            ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto max-h-[85vh] overflow-y-auto"
            : "opacity-0 -translate-y-4 scale-y-95 pointer-events-none max-h-0"
        )}
        style={{ top: "72px" }}
      >
        <div className="px-6 py-6 space-y-6">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-1">
            {navigation.map((item, idx) => (
              <div
                key={item.name}
                className={cn(
                  "transform transition-all duration-500 ease-out",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                {item.children ? (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={item.name} className="border-b border-slate-100">
                      <AccordionTrigger className="py-3.5 hover:no-underline text-base font-bold text-slate-800 hover:text-primary">
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-1 pl-4 pb-3 pt-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="text-sm font-semibold text-slate-600 hover:text-primary py-2.5 border-l-2 border-transparent hover:border-primary pl-3 transition-all"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3.5 text-base font-bold text-slate-800 hover:text-primary border-b border-slate-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Contact & WhatsApp Actions */}
          <div
            className={cn(
              "space-y-4 pt-4 border-t border-slate-100 transform transition-all duration-500 ease-out delay-150",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            <h4 className="text-xs font-black tracking-widest text-slate-400 uppercase">
              Get In Touch
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center justify-center gap-2.5 bg-slate-50 hover:bg-primary hover:text-white transition-colors duration-300 py-3.5 px-4 rounded-xl border border-slate-200 text-sm font-bold text-slate-700"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center justify-center gap-2.5 bg-slate-50 hover:bg-primary hover:text-white transition-colors duration-300 py-3.5 px-4 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 break-all"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="truncate">{siteConfig.contact.email}</span>
              </a>
            </div>

            {siteConfig.contact.whatsapp && (
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white transition-colors duration-300 py-3.5 px-4 rounded-xl text-sm font-bold shadow-md shadow-green-500/10"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.002-5.037-2.825-6.865C16.685 2.183 14.252 1.18 11.66 1.18c-5.442 0-9.87 4.372-9.872 9.735 0 1.711.464 3.382 1.344 4.867l-.98 3.578 3.738-.971-1.243.69zM17.65 14.88c-.318-.16-.1.884-.318-.884-.318-.16-1.883-.925-2.183-1.033-.3-.108-.518-.162-.736.162-.218.324-.846 1.033-1.037 1.25-.19.216-.38.243-.7.082-.319-.16-1.343-.495-2.56-1.579-.947-.843-1.586-1.885-1.772-2.203-.186-.318-.02-.49.14-.648.144-.143.318-.372.477-.558.159-.186.212-.318.318-.53.106-.212.053-.4-.027-.558-.079-.16-.736-1.772-1.009-2.43-.267-.643-.539-.556-.736-.566-.19-.01-.409-.01-.628-.01-.218 0-.573.082-.873.407-.3.324-1.147 1.12-1.147 2.729s1.173 3.16 1.336 3.38c.164.218 2.308 3.513 5.59 4.926.78.336 1.39.537 1.865.688.784.248 1.498.213 2.062.129.629-.094 1.884-.77 2.156-1.474.273-.703.273-1.3.19-1.422-.083-.122-.3-.19-.618-.35z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop blur overlay behind mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[72px] bg-slate-900/40 backdrop-blur-sm z-30 transition-all duration-500 ease-in-out md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Row 2: Blue Nav Bar ── */}
      <nav
        ref={dropdownRef}
        className="hidden md:block bg-primary"
        style={{ background: "linear-gradient(to right, #1a5fad 85%, #00b09b)" }}
      >
        <div className="container mx-auto px-4">
          <ul className="flex items-stretch">
            {navigation.map((item) => (
              <li key={item.name} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      }
                      className={cn(
                        "flex items-center gap-1 px-5 py-4 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors h-full whitespace-nowrap",
                        activeDropdown === item.name && "bg-white/10 text-white border-b-2 border-white"
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180"
                        )}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 z-50 bg-white border border-slate-200 shadow-xl min-w-[220px] rounded-b-md overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-5 py-3 text-sm text-slate-700 hover:bg-primary hover:text-white transition-colors border-b border-slate-100 last:border-0"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center px-5 py-4 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors h-full whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
