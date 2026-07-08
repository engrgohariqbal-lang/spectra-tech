import React from "react";
import Link from "next/link";
import { getSolutions } from "@/lib/data-access";

export async function OurSolutions() {
  const solutions = await getSolutions();

  return (
    <section className="py-16 bg-[#f5f6fa]">
      <div className="container mx-auto px-4">
        {/* Section Header — left aligned like jinyibo */}
        <div className="mb-10">
          <div className="w-14 h-1 bg-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Our Solution
          </h2>
          <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
            Improving everything from the ores we explore to the materials we
            build with, from the components to the automobile we drive, from the
            seed to the foods we enjoy.
          </p>
        </div>

        {/* 3-column text-only cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group border-b-2 border-transparent hover:border-primary"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                {solution.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-4">
                {solution.description}
              </p>
              <Link
                href={solution.link}
                className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all duration-200"
              >
                Read More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
