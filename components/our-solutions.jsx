import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getSolutions } from "@/lib/data-access";
import { Button } from "@/components/ui/button";

export async function OurSolutions() {
  const solutions = await getSolutions();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 text-balance">
            Our Solutions
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Tailored analytical solutions designed to meet the rigorous demands of various industrial sectors, ensuring quality control and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow flex flex-col sm:flex-row">
              <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-slate-200">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="text-slate-400 font-medium text-sm">Image Placeholder</span>
                  </div>
                </div>
              </div>
              <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-accent hover:text-primary justify-start font-semibold">
                  <Link href={solution.link}>
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
