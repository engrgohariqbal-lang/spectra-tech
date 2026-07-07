import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data/products";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Product Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{product.name}</h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-300 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Models Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {product.models.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {product.models.map((model) => (
                  <div key={model.name} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group">
                    <div className="relative h-64 bg-slate-100 p-6 flex items-center justify-center">
                      <Image
                        src={model.image}
                        alt={`${model.name} Analyzer`}
                        fill
                        className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute text-slate-300 text-sm font-medium opacity-50 select-none">
                        Model Placeholder
                      </span>
                    </div>
                    <div className="p-8 flex flex-col items-center text-center border-t border-slate-50">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{model.name}</h3>
                      <Button asChild className="w-full bg-primary hover:bg-secondary text-white">
                        <Link href="/contact">
                          Enquire Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 text-center rounded-xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-medium text-slate-600">Detailed models and specifications will be added soon.</h3>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Shared CTA Block */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need more information or a formal quote?</h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
            Our engineering team is ready to help you select the right configuration for your specific application requirements.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-100 font-bold px-8">
            <Link href="/contact">
              Request a Quote
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
