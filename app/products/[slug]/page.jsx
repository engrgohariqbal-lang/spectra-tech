import React from "react";
import { notFound } from "next/navigation";
import { getProducts, getProductBySlug } from "@/lib/data-access";
import { ProductDetailInteractive } from "@/components/product-detail-interactive";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);
  
  if (!product) {
    return { title: "Product Not Found - Spectra-Tech" };
  }
  
  return {
    title: `${product.name} | Spectra-Tech`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);
  const allProducts = await getProducts();

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <ProductDetailInteractive product={product} allProducts={allProducts} />
    </div>
  );
}
