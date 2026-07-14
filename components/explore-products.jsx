import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/data-access";

const featuredSlugs = [
  "oes-spectrometer",
  "handheld-xrf-analyzer",
  "carbon-sulfur-onh-analyzer",
  "desktop-edxrf-spectrometer",
  "mobile-metal-analyzer",
  "icp-oes",
];

const categoryLabels = {
  "oes-spectrometer": "Optical Emission Spectrometer",
  "handheld-xrf-analyzer": "Handheld XRF Analyzer",
  "carbon-sulfur-onh-analyzer": "Elemental Analysis",
  "desktop-edxrf-spectrometer": "Desktop EDXRF Spectrometer",
  "mobile-metal-analyzer": "Mobile Metal Analyzer",
  "icp-oes": "ICP-OES / AES",
};

export async function ExploreProducts() {
  const products = await getProducts();
  const featuredProducts = featuredSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="w-14 h-1 bg-primary mb-4 rounded-full" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Explore Our Products
              </h2>
              <p className="text-slate-500 max-w-2xl text-sm md:text-base leading-relaxed">
                Jinyibo is a leading global manufacturer of Optical Emission
                Spectrometers, Carbon/Sulfur Analyzers, XRF systems, and more.
                SpectraTech Solutions is Pakistan's premier authorized partner.
              </p>
            </div>
            <Link
              href="/products"
              className="shrink-0 inline-block border-2 border-primary text-primary font-bold tracking-widest text-xs px-8 py-3.5 hover:bg-primary hover:text-white transition-all duration-300 uppercase whitespace-nowrap rounded-sm"
            >
              Explore All Products
            </Link>
          </div>
        </div>

        {/* Products Grid — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Product Image Container */}
              <div className="relative h-60 bg-gradient-to-b from-slate-50/50 to-white overflow-hidden p-6 flex items-center justify-center border-b border-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Floating pill badge for model count */}
                {product.models?.length > 0 && (
                  <div className="absolute top-4 right-4 bg-primary/70 backdrop-blur-md text-white font-bold text-[10px] px-3 py-1.5 rounded-full tracking-wider uppercase border border-primary/25">
                    {product.models.length}{" "}
                    {product.models.length === 1 ? "Model" : "Models"}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Label */}
                  <span className="inline-block text-[10px] font-extrabold tracking-widest text-[#1a5fad] uppercase mb-2">
                    {categoryLabels[product.slug] || "Precision Analyzer"}
                  </span>

                  {/* Product Name */}
                  <h3 className="font-extrabold text-slate-900 text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Product Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* VIEW SPECIFICATIONS button style */}
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800 group-hover:text-primary transition-colors mt-auto">
                  <span className="tracking-wider uppercase text-xs">
                    View Specifications
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
