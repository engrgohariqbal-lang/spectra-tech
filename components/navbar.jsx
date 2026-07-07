"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/content";
import { navigation } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
          ? "bg-white shadow-md py-2"
          : "bg-white/90 backdrop-blur-md py-4",
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
          <Link href="/" className="flex items-center gap-2">
            {/* Placeholder for SpectraTech Logo */}
            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center font-bold text-xl rounded">
              ST
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-primary tracking-tight block leading-tight">
                SpectraTech
              </span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">
                Solutions
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-4 border-l pl-4 border-border ml-2">
            <span className="text-xs text-muted-foreground max-w-[80px] leading-tight">
              Authorized Distributor of
            </span>
            {/* Placeholder for Jinyibo Logo */}
            <a
              href="https://www.jinyibo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <div className="h-8 w-24 bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-500 rounded">
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
                      <NavigationMenuTrigger className="bg-transparent">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent",
                      )}
                    >
                      <Link href={item.href}>
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
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
