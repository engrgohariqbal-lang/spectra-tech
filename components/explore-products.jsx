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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10">
          <div className="w-14 h-1 bg-primary mb-4" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Explore Our Products
              </h2>
              <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
                Jinyibo is leading manufacturer of Optical Emission Spectrometer,
                Carbon Sulfur Analyzer, XRF Spectrometers, LIBS Analyzer, ICP
                Spectrometers, Technical Cleanliness Cabinet and more. SpectraTech
                Solutions is Pakistan&apos;s authorized distributor.
              </p>
            </div>
            <Link
              href="/products"
              className="shrink-0 inline-block border border-primary text-primary font-bold tracking-widest text-xs px-8 py-3 hover:bg-primary hover:text-white transition-all duration-300 uppercase whitespace-nowrap"
            >
              Explore More
            </Link>
          </div>
        </div>

        {/* Products Grid — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block bg-[#f5f6fa] rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Category Label */}
              <div className="px-5 pt-5 pb-2">
                <span className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
                  {categoryLabels[product.slug] || product.name}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative h-52 mx-5 mb-5 bg-white overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Name */}
              <div className="px-5 pb-4">
                <h3 className="font-bold text-slate-800 text-base leading-snug text-center group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </div>

              {/* MORE + pill */}
              <div className="flex justify-center pb-6">
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                  <span className="text-[10px] font-bold tracking-widest text-slate-500 group-hover:text-white transition-colors uppercase leading-tight">
                    MORE
                  </span>
                  <span className="text-slate-400 group-hover:text-white transition-colors text-lg font-light leading-none">
                    +
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
