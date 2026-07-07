import React from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data/products";

export const metadata = {
  title: "Products",
  description: "Explore our range of analytical instruments including OES, XRF, EDXRF and Carbon-Sulfur analyzers.",
};

export default function ProductsIndexPage() {
  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Products</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Comprehensive analytical solutions from Wuxi Jinyibo Instrument Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group flex h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group-hover:border-primary/30 flex flex-col w-full">
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden flex-shrink-0">
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
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-slate-600 text-sm flex-grow mb-6 line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    {product.models.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.models.slice(0, 3).map((model) => (
                          <span key={model.name} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                            {model.name}
                          </span>
                        ))}
                        {product.models.length > 3 && (
                          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                            +{product.models.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                    <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                      View Details
                      <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
