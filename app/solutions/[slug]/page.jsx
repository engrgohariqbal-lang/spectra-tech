import React from "react";
import { notFound } from "next/navigation";
import SolutionDetailClient from "./SolutionDetailClient";
import { getSolutionBySlug, getSolutions } from "@/lib/data-access";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);
  
  if (!solution) {
    return {
      title: "Solution Not Found | SpectraTech",
    };
  }

  return {
    title: solution.metaTitle || `${solution.title} | SpectraTech`,
    description: solution.metaDescription || `Learn more about ${solution.title} solutions at SpectraTech.`,
  };
}

export async function generateStaticParams() {
  const solutions = await getSolutions();
  // Ensure we also include the new solutions if getSolutions is not fully populated yet
  // Actually, we imported solutionsData directly in data-access so it has all 11
  
  // To be safe, we will just use the hardcoded list from content.js or solutions.js
  // Let's import solutionsData directly here for generateStaticParams since we know it
  const { solutionsData } = await import("@/lib/data/solutions");
  
  return solutionsData.map((solution) => ({
    slug: solution.slug,
  }));
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return <SolutionDetailClient solution={solution} />;
}
