import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { applicationsData } from "@/lib/data/applications";
import { products } from "@/lib/data/products";
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Activity,
  Cpu,
  Gauge,
} from "lucide-react";

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
    title: `${application.name} Applications | Spectra Tech`,
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
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={application.image}
            alt={application.name}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/60 to-transparent"></div>
          {/* Decorative blur */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-10">
          <Link
            href="/application"
            className="inline-flex items-center text-accent hover:text-white font-medium mb-8 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Industries
          </Link>
          <div className="max-w-2xl animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
              {application.name}
            </h1>
            <p className="text-lg md:text-xl text-white font-light leading-relaxed border-l-4 border-accent pl-6">
              {application.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Content Split Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="prose prose-lg prose-slate max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-10 h-1 bg-primary mr-4 rounded-full"></span>
                Industry Overview
              </h2>
              <p className="text-slate-600 leading-loose text-lg mb-8">
                {application.content}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div className="text-center p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-accent transition-all duration-300 hover:scale-105">
                <Gauge className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-slate-900">High Precision</h4>
                <p className="text-sm text-slate-500 mt-2">
                  Accurate down to trace levels
                </p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-accent transition-all duration-300 hover:scale-105">
                <Activity className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-slate-900">Fast Results</h4>
                <p className="text-sm text-slate-500 mt-2">
                  Real-time analysis output
                </p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-accent transition-all duration-300 hover:scale-105">
                <Cpu className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-slate-900">Smart Tech</h4>
                <p className="text-sm text-slate-500 mt-2">
                  Automated calibration
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100 relative overflow-hidden group hover:shadow-primary/20 transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                Key Benefits
              </h3>

              <ul className="space-y-6 relative z-10">
                {application.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start bg-slate-50 p-4 rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-0.5" />
                    <span className="text-slate-700 font-medium leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-4">
                  Ready to upgrade your workflow?
                </p>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center px-6 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-primary transition-all duration-300 group/btn"
                >
                  Consult Our Experts
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProductData.length > 0 && (
        <section className="bg-slate-50 py-20 md:py-28 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Recommended Solutions
              </h2>
              <div className="w-16 h-1.5 bg-accent mx-auto mb-6 rounded-full"></div>
              <p className="text-slate-600 text-lg">
                Instruments perfectly suited for the demands of the{" "}
                {application.name} industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedProductData.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/products/${prod.slug}`}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden group transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {prod.description}
                    </p>
                    <div className="inline-flex items-center text-primary font-semibold text-sm">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
