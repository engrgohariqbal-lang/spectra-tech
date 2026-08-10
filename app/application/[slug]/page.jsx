import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { applicationsData } from "@/lib/data/applications";
import { products } from "@/lib/data/products";
import { List, ChevronDown, Calendar, ArrowLeft } from "lucide-react";

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
    <div className="bg-[#f8f9fa] min-h-screen pb-12">
      {/* Breadcrumbs */}
      <div className="bg-white py-4 border-b border-gray-200 mb-8">
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
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Application Content Area */}
          <div className="w-full bg-white p-6 lg:p-10 shadow-sm border border-gray-100">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                href="/application"
                className="inline-flex items-center gap-2 text-[#106cb8] hover:underline font-medium text-[15px]"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Applications
              </Link>
            </div>

            {/* Title & Date Header */}
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                {application.name}
              </h1>
            </div>

            {/* Main Application Image */}
            <div className="mb-10 text-center">
              <div className="relative inline-block w-full max-w-[800px] aspect-[16/9]">
                <Image
                  src={application.image}
                  alt={application.name}
                  fill
                  className="object-cover rounded-lg shadow-xl shadow-gray-900/50"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Application Content / Description */}
            <div className="max-w-none text-[#555] text-[17px] leading-[1.8] mb-12 font-sans">
              <h2 className="text-[22px] font-bold text-center text-[#555] mb-10 mt-4">
                Technical Cleanliness Inspection Application in the{" "}
                {application.name === "Electronics & Semiconductor"
                  ? "Electronics and Semiconductor"
                  : application.name}{" "}
                {application.name.includes("Appliance") ||
                application.name.includes("Industry") ||
                application.name.includes("Foundry")
                  ? ""
                  : "Industry"}
              </h2>

              <div className="space-y-0">
                {application.content.split("\n").map((line, idx) => {
                  if (!line.trim())
                    return <div key={idx} className="h-6"></div>;
                  const isHeading = /^\d+(\.\d+)?\.?\s/.test(line);
                  if (isHeading) {
                    return (
                      <div
                        key={idx}
                        className="font-bold text-[#444] mt-6 mb-1"
                      >
                        {line}
                      </div>
                    );
                  }
                  if (line.trim().startsWith("-")) {
                    return (
                      <div key={idx} className="pl-4 text-[#555]">
                        {line}
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="text-[#555]">
                      {line}
                    </p>
                  );
                })}
              </div>

              {application.benefits && application.benefits.length > 0 && (
                <div className="mt-8">
                  <p>
                    <strong>
                      Benefits of {application.name} applications:
                    </strong>
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    {application.benefits.map((benefit, idx) => (
                      <li key={idx} className="mb-2 text-[#555]">
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
    </div>
  );
}
