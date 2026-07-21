"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  MessageSquare,
  Phone,
  Mail,
  ArrowRight,
  Search,
  Shield,
  Zap,
  Layers,
  Activity,
  FileText,
  Building,
  Wrench,
  Cpu,
  Clock,
  Compass,
  FileSpreadsheet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contactComponents/contact-form";

export function ProductDetailInteractive({ product, allProducts }) {
  const [activeModel, setActiveModel] = useState(
    product.models.length > 0 ? product.models[0] : null,
  );
  const [specSearch, setSpecSearch] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");

  const specsSectionRef = useRef(null);
  const inquirySectionRef = useRef(null);

  // Set initial inquiry message
  useEffect(() => {
    setInquiryMessage(
      `Hello, I would like to request technical documentation and a quote for the ${product.name}${
        activeModel ? ` - Model ${activeModel.name}` : ""
      }. Please get in touch with me.`,
    );
  }, [product.name, activeModel]);

  const handleViewSpecs = (model) => {
    setActiveModel(model);
    specsSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleEnquireNow = (model) => {
    if (model) {
      setActiveModel(model);
      setInquiryMessage(
        `Hello, I would like to request technical documentation and a quote for the ${product.name} - Model ${model.name}. Please get in touch with me.`,
      );
    } else {
      setInquiryMessage(
        `Hello, I would like to request technical documentation and a quote for the ${product.name}. Please get in touch with me.`,
      );
    }
    inquirySectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Helper to filter specs based on search term
  const getFilteredSpecs = (specs) => {
    if (!specs) return {};
    if (!specSearch.trim()) return specs;

    const filtered = {};
    const searchLower = specSearch.toLowerCase();

    Object.entries(specs).forEach(([category, fields]) => {
      const matchingFields = {};
      Object.entries(fields).forEach(([paramName, paramVal]) => {
        if (
          paramName.toLowerCase().includes(searchLower) ||
          paramVal.toLowerCase().includes(searchLower)
        ) {
          matchingFields[paramName] = paramVal;
        }
      });

      if (
        category.toLowerCase().includes(searchLower) ||
        Object.keys(matchingFields).length > 0
      ) {
        filtered[category] =
          Object.keys(matchingFields).length > 0 ? matchingFields : fields;
      }
    });

    return filtered;
  };

  const filteredSpecs = activeModel ? getFilteredSpecs(activeModel.specs) : {};

  // Industry-specific icon mappings helper
  const getIndustryIcon = (appText) => {
    const text = appText.toLowerCase();
    if (text.includes("foundry") || text.includes("smelting"))
      return <Building className="w-5 h-5" />;
    if (text.includes("steel") || text.includes("refining"))
      return <Layers className="w-5 h-5" />;
    if (text.includes("quality") || text.includes("inspection"))
      return <Shield className="w-5 h-5" />;
    if (text.includes("aerospace") || text.includes("automotive"))
      return <Cpu className="w-5 h-5" />;
    if (text.includes("recycling") || text.includes("scrap"))
      return <Activity className="w-5 h-5" />;
    if (text.includes("petrochemical") || text.includes("pipeline"))
      return <Wrench className="w-5 h-5" />;
    return <Compass className="w-5 h-5" />;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dynamic Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap py-4">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary transition-colors">
          Products
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">{product.name}</span>
      </nav>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Category Navigation & Support widgets */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Categories Navigation Widget */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              Categories
            </h3>
            <ul className="space-y-2">
              {allProducts.map((p) => {
                const isActive = p.slug === product.slug;
                return (
                  <li key={p.id}>
                    <Link
                      href={`/products/${p.slug}`}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-white font-semibold shadow-sm"
                          : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                      }`}
                    >
                      <span className="line-clamp-1">{p.name}</span>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-transform ${isActive ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Support Widget */}
          {/* <div className="bg-gradient-to-br from-slate-900 to-primary text-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              Direct Support
            </h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Have questions about system custom configurations or calibrations?
              Talk to our specialists today.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/923234385933"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors border border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                  <MessageSquare className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">WhatsApp / Tel</p>
                  <p className="font-semibold text-white">+92-323-4385933</p>
                </div>
              </a>

              <a
                href="mailto:info.spectratechsolution@gmail.com"
                className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors border border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Address</p>
                  <p className="font-semibold text-white break-all">
                    info.spectratechsolution@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div> */}
        </aside>

        {/* Main Content Column */}
        <main className="lg:col-span-3 space-y-12">
          {/* Product Category Hero/Overview */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-10">
            <div className="max-w-3xl">
              <Badge className="bg-primary/10 text-primary border-none hover:bg-primary/20 mb-4 px-3 py-1 text-xs font-semibold">
                Analytical Solution
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                {product.name}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {product.longDescription || product.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-6 mt-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  onClick={() => handleEnquireNow(null)}
                  className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-5 rounded-lg shadow-sm"
                >
                  Inquire Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                {product.models.length > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => handleViewSpecs(product.models[0])}
                    className="border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-5 rounded-lg"
                  >
                    View Technical Specifications
                  </Button>
                )}
              </div>
            </div>
          </section>

          {/* Models Grid Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-primary" />
                Available Models & Configurations
              </h2>
            </div>

            {product.models.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.models.map((model) => (
                  <div
                    key={model.name}
                    className={`bg-white rounded-xl shadow-sm border overflow-hidden flex flex-col group transition-all duration-300 ${
                      activeModel?.name === model.name
                        ? "border-primary/50 shadow-md ring-1 ring-primary/20"
                        : "border-slate-100 hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    {/* Model Image container */}
                    <div className="relative h-64 bg-slate-50 p-6 flex items-center justify-center overflow-hidden">
                      <Image
                        src={model.image}
                        alt={`${product.name} ${model.name}`}
                        fill
                        className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-100 text-xs font-semibold text-slate-700 shadow-xs">
                        Model {model.name}
                      </div>
                    </div>

                    {/* Model Details */}
                    <div className="p-6 flex flex-col flex-grow border-t border-slate-50">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                        Model {model.name}
                      </h3>
                      <p className="text-xs text-primary font-medium mb-3">
                        {model.tagline}
                      </p>
                      <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                        {model.description}
                      </p>

                      {/* Model specific features */}
                      <div className="space-y-2 mb-6">
                        {model.features.map((feat, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-xs text-slate-600"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <Button
                          onClick={() => handleViewSpecs(model)}
                          variant="outline"
                          size="sm"
                          className="w-full text-slate-700 border-slate-200 hover:bg-slate-50 text-xs font-semibold"
                        >
                          <FileSpreadsheet className="w-3.5 h-3.5 mr-1.5" />
                          Specs Details
                        </Button>
                        <Button
                          onClick={() => handleEnquireNow(model)}
                          size="sm"
                          className="w-full bg-primary hover:bg-secondary text-white text-xs font-semibold"
                        >
                          Enquire Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 text-center rounded-xl border border-slate-100 shadow-xs">
                <h3 className="text-lg font-medium text-slate-600">
                  Detailed models and configurations will be added soon.
                </h3>
              </div>
            )}
          </section>

          {/* Interactive Specifications Table Section */}
          {product.models.length > 0 && activeModel && (
            <section
              ref={specsSectionRef}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden scroll-mt-24"
            >
              {/* Table header with tabs */}
              <div className="bg-slate-900 text-white px-8 py-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <FileSpreadsheet className="w-5 h-5 text-accent" />
                      Technical Specifications
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Compare parameters for the selected model.
                    </p>
                  </div>

                  {/* Model Tab Selectors */}
                  <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700/50 self-start md:self-auto overflow-x-auto max-w-full">
                    {product.models.map((model) => (
                      <button
                        key={model.name}
                        onClick={() => setActiveModel(model)}
                        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                          activeModel.name === model.name
                            ? "bg-primary text-white shadow-xs"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Model {model.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specs Table Actions Bar */}
              <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Active Spec:
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-bold"
                  >
                    Model {activeModel.name}
                  </Badge>
                </div>

                {/* Spec Search bar */}
                <div className="relative max-w-xs w-full">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search specifications..."
                    value={specSearch}
                    onChange={(e) => setSpecSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Table Data */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/50 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                      <th className="px-6 py-4 w-1/3">Parameter</th>
                      <th className="px-6 py-4 w-2/3">Specification Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {Object.keys(filteredSpecs).length > 0 ? (
                      Object.entries(filteredSpecs).map(([category, items]) => (
                        <React.Fragment key={category}>
                          {/* Category Header Row */}
                          <tr className="bg-slate-50/60 font-semibold text-slate-900 border-t border-slate-200">
                            <td
                              colSpan="2"
                              className="px-6 py-3 text-xs uppercase tracking-wider text-primary font-bold"
                            >
                              {category}
                            </td>
                          </tr>
                          {/* Parameter rows */}
                          {Object.entries(items).map(
                            ([paramName, paramVal]) => (
                              <tr
                                key={paramName}
                                className="hover:bg-slate-50/40 transition-colors"
                              >
                                <td className="px-6 py-3.5 text-sm font-medium text-slate-700 border-r border-slate-100">
                                  {paramName}
                                </td>
                                <td className="px-6 py-3.5 text-sm text-slate-600 leading-relaxed font-sans">
                                  {paramVal}
                                </td>
                              </tr>
                            ),
                          )}
                        </React.Fragment>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="2"
                          className="px-6 py-12 text-center text-slate-500 text-sm"
                        >
                          {specSearch
                            ? "No parameters matched your search term."
                            : "No specifications specified for this model."}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Industry Applications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-6 h-6 text-primary" />
              Industry Applications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.applications.map((appText, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xs border border-slate-100 p-5 flex items-start gap-4 hover:border-primary/20 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {getIndustryIcon(appText)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">
                      {appText}
                    </h4>
                    <p className="text-xs text-slate-500 leading-snug">
                      Fully qualified calibrations and specialized adapters
                      available.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Request Quote Form Section */}
          <section
            ref={inquirySectionRef}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden scroll-mt-24"
          >
            <div className="bg-primary text-white p-8">
              <div className="max-w-2xl">
                <Badge className="bg-white/20 text-white border-none hover:bg-white/30 mb-3 font-semibold px-2 py-0.5 text-xs">
                  RFQ - Request for Quote
                </Badge>
                <h3 className="text-2xl font-bold">
                  Request a Formal Quote & Configuration
                </h3>
                <p className="text-slate-200 text-sm mt-2 leading-relaxed">
                  Our application engineers are standing by to design a
                  calibration package suitable for your materials. Fill out the
                  form and receive pricing details within 24 hours.
                </p>
              </div>
            </div>

            <div className="p-8 max-w-3xl">
              <ContactForm defaultMessage={inquiryMessage} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
