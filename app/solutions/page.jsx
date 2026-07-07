import React from "react";
import Image from "next/image";
import { solutions } from "@/lib/data/content";

export const metadata = {
  title: "Solutions",
  description: "Specialized analytical solutions for Metals and Geological materials.",
};

export default function SolutionsPage() {
  return (
    <div className="py-12 md:py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Analytical Solutions</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Tailored solutions designed for accuracy and operational efficiency.
          </p>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-video bg-slate-200 rounded-xl overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="text-slate-400 font-medium text-sm">Image Placeholder</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{solution.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {solution.description} 
                  Additional detailed information regarding the methodologies, equipment used, and specific benefits to the industry goes here. This section can be expanded later with more specific technical details.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    High precision results
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Rapid analysis times
                  </li>
                  <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Robust industrial design
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
