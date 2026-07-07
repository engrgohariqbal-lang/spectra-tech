import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Applications & Industries",
  description: "Analytical solutions for Steel, Foundry, Metal, Mining, Power, and Chemical industries.",
};

const industries = [
  { name: "Steel", desc: "Precise carbon and sulfur analysis for steelmaking quality control." },
  { name: "Foundry", desc: "Rapid elemental analysis to optimize melt chemistry." },
  { name: "Metal", desc: "Accurate grade identification and alloy verification." },
  { name: "Mining", desc: "Geological material analysis from exploration to processing." },
  { name: "Power", desc: "Component integrity and wear metal analysis." },
  { name: "Chemical", desc: "Trace element detection for process control and compliance." },
];

export default function ApplicationPage() {
  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Industries We Serve</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Our instruments deliver critical data across a wide spectrum of heavy industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((ind, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-primary transition-colors group">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="font-bold text-xl">{ind.name[0]}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{ind.name} Industry</h2>
              <p className="text-slate-600 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
