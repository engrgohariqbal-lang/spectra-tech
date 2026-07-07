import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/data/products";

// We specifically map the 4 featured products from the brief
const featuredSlugs = [
  "oes-spectrometer",
  "handheld-xrf-analyzer",
  "desktop-edxrf-spectrometer",
  "carbon-sulfur-onh-analyzer"
];

export function ExploreProducts() {
  const featuredProducts = featuredSlugs.map(slug => 
    products.find(p => p.slug === slug)
  ).filter(Boolean);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Explore Our Products
            </h2>
            <p className="text-lg text-slate-600">
              SpectraTech Solutions is the authorized Pakistan distributor for Wuxi Jinyibo Instrument Technology, supplying OES Spectrometers, XRF Analyzers, EDXRF Spectrometers and Carbon-Sulfur/ONH Analyzers.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
            <Link href="/products">
              EXPLORE MORE
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="group h-full">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border group-hover:border-primary/30 flex flex-col">
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute text-slate-300 text-sm font-medium opacity-50 select-none">
                      Image Placeholder
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col justify-between">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="mt-4 flex items-center text-sm font-semibold text-accent">
                    Learn more
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
