"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Mail, Phone, Search, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/data/content";
import { navigation } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[380px] bg-white p-0">
                <div className="bg-primary px-6 py-5">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Image src={Logo} alt="SpectraTech" className="h-10 w-auto brightness-0 invert" />
                  </Link>
                </div>
                <nav className="flex flex-col gap-1 mt-4 px-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <Accordion type="single" collapsible>
                          <AccordionItem value={item.name} className="border-b border-slate-100">
                            <AccordionTrigger className="py-3 hover:no-underline text-base font-semibold text-slate-800 hover:text-primary">
                              {item.name}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-1 pl-4 pb-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className="text-sm text-slate-600 hover:text-primary py-1.5 border-l-2 border-transparent hover:border-primary pl-3 transition-all"
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
                          className="block py-3 text-base font-semibold text-slate-800 hover:text-primary border-b border-slate-100 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="px-4 mt-6 space-y-2">
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone className="w-4 h-4 text-primary" />
                    {siteConfig.contact.phone}
                  </a>
                  <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm text-slate-600 break-all">
                    <Mail className="w-4 h-4 text-primary" />
                    {siteConfig.contact.email}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

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
