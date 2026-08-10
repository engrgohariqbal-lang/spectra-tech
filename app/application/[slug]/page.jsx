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
            <Link
              href="/application"
              className="hover:text-primary transition-colors"
            >
              Application
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-900 font-medium">
              {application.name}
            </span>
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
          <div className="max-w-none text-[#555] text-[17px] leading-[1.8] mb-12 font-sans">
            <h2 className="text-2xl font-bold text-center text-[#555] mb-8 mt-4">
              Technical Cleanliness Inspection Application in the {application.name === "Electronics & Semiconductor" ? "Electronics and Semiconductor" : application.name} {(application.name.includes("Appliance") || application.name.includes("Industry") || application.name.includes("Foundry")) ? "" : "Industry"}
            </h2>

            <div className="space-y-0">
              {application.content.split('\n').map((line, idx) => {
                if (!line.trim()) return <div key={idx} className="h-6"></div>;
                const isHeading = /^\d+(\.\d+)?\.?\s/.test(line);
                if (isHeading) {
                  return (
                    <div key={idx} className="font-bold text-[#555] mt-6 mb-1">
                      {line}
                    </div>
                  );
                }
                if (line.trim().startsWith('-')) {
                  return (
                    <div key={idx} className="pl-4 text-[#666]">
                      {line}
                    </div>
                  );
                }
                return (
                  <p key={idx} className="text-[#666]">
                    {line}
                  </p>
                );
              })}
            </div>

            {application.benefits && application.benefits.length > 0 && (
              <div className="mt-8">
                <p>
                  <strong>Benefits of {application.name} applications:</strong>
                </p>
                <ul className="list-disc pl-5 mt-2">
                  {application.benefits.map((benefit, idx) => (
                    <li key={idx} className="mb-2 text-[#666]">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
