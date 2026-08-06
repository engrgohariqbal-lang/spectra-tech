import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { applicationsData } from "@/lib/data/applications";
import { products } from "@/lib/data/products";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const application = applicationsData.find(
    (app) => app.slug === resolvedParams.slug,
  );

  if (!application) {
    return {
      title: "Application Not Found",
    };
  }

  return {
    title: `${application.name} - SpectraTech Solutions Pvt Ltd`,
    description: application.shortDesc,
  };
}

export default async function ApplicationDetailPage({ params }) {
  const resolvedParams = await params;
  const application = applicationsData.find(
    (app) => app.slug === resolvedParams.slug,
  );

  if (!application) {
    notFound();
  }

  // Get related products data
  const relatedProductData = application.relatedProducts
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs - Following Reference Website Style */}
      <div className="bg-[#f5f5f5] py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <Link href="/application" className="hover:text-primary transition-colors">
              Application
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-900 font-medium">{application.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Application Image */}
          <div className="mb-10 text-center">
            <div className="relative inline-block w-full max-w-[800px] aspect-[16/9]">
              <Image
                src={application.image}
                alt={application.name}
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Application Content / Description */}
          <div className="prose prose-lg prose-slate max-w-none text-[#555] leading-loose mb-12">
            <p className="mb-6">{application.content}</p>
            
            <p><strong>Benefits of {application.name} applications:</strong></p>
            <ul className="list-disc pl-5 mt-2">
              {application.benefits.map((benefit, idx) => (
                <li key={idx} className="mb-2">{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Applicable Products Section */}
          {relatedProductData.length > 0 && (
            <div className="mt-16 border-t border-gray-200 pt-10">
              <h3 className="text-[18px] font-bold text-gray-900 mb-8 pb-2 border-b-2 border-primary inline-block">
                Applicable Products：
              </h3>
              
              {/* Table/Grid layout simulating reference website's table approach */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedProductData.map((prod) => (
                  <div key={prod.slug} className="text-center p-4 border border-gray-100 hover:border-gray-300 transition-colors bg-white shadow-sm">
                    <Link href={`/products/${prod.slug}`} className="block">
                      <div className="relative w-full aspect-square mb-4 bg-gray-50 flex items-center justify-center p-4">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          className="object-contain p-2"
                          unoptimized
                        />
                      </div>
                      <h4 className="text-[15px] font-semibold text-gray-800 hover:text-primary transition-colors">
                        {prod.name}
                      </h4>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
