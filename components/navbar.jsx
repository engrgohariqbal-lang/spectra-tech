"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/content";
import { navigation } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/public/images";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-2"
          : "bg-white/95 backdrop-blur-md border-b border-transparent py-4",
      )}
    >
      {/* Top Bar for Contact Info */}
      <div className="container mx-auto px-4 hidden md:flex justify-end gap-6 text-sm text-muted-foreground mb-2">
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Mail className="h-4 w-4" />
          {siteConfig.contact.email}
        </a>
        <a
          href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Phone className="h-4 w-4" />
          {siteConfig.contact.phone}
        </a>
      </div>

      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logos */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform hover:scale-105 duration-300"
          >
            <Image
              src={Logo}
              alt="SpectraTech Solutions"
              className="w-[180px] md:w-[200px]"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-4 border-l-2 pl-5 border-slate-200 ml-4">
            <span className="text-xs text-slate-500 max-w-[80px] leading-tight font-medium">
              Authorized Distributor of
            </span>
            <a
              href="https://www.jinyibo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition-transform hover:scale-105"
            >
              <div className="h-9 w-28 bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold tracking-wider text-slate-600 rounded shadow-sm">
                JINYIBO
              </div>
            </a>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="bg-white">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none bg-white transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {child.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      asChild
                      className={cn(navigationMenuTriggerStyle(), "bg-white")}
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button
            asChild
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 transition-all rounded-full px-6 py-5"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <Accordion type="single" collapsible>
                        <AccordionItem value={item.name} className="border-b-0">
                          <AccordionTrigger className="py-2 hover:no-underline text-lg font-medium">
                            {item.name}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-2 pl-4 mt-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="text-muted-foreground hover:text-primary py-1"
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
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
