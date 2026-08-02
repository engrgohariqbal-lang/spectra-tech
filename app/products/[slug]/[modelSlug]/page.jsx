import React from "react";
import { notFound } from "next/navigation";
import { getProducts, getProductBySlug } from "@/lib/data-access";
import { ProductDetailInteractive } from "@/components/productComponents/product-detail-interactive";

export async function generateStaticParams() {
  const products = await getProducts();
  const params = [];
  
  for (const product of products) {
    if (product.models && product.models.length > 0) {
      for (const model of product.models) {
        params.push({
          slug: product.slug,
          modelSlug: model.name.toLowerCase().replace(/\s+/g, "-"),
        });
      }
    }
  }
  
  return params;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);
  
  if (!product) {
    return { title: "Product Not Found - Spectra-Tech" };
  }

  const activeModel = product.models?.find(
    (m) => m.name.toLowerCase().replace(/\s+/g, "-") === resolvedParams.modelSlug
  );

  if (!activeModel) {
    return { title: "Model Not Found - Spectra-Tech" };
  }
  
  return {
    title: `${product.name} - Model ${activeModel.name} | Spectra-Tech`,
    description: activeModel.description || product.description,
  };
}

export default async function ModelPage({ params }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);
  const allProducts = await getProducts();

  if (!product) {
    notFound();
  }

  const activeModel = product.models?.find(
    (m) => m.name.toLowerCase().replace(/\s+/g, "-") === resolvedParams.modelSlug
  );

  if (!activeModel) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <ProductDetailInteractive 
        key={`${product.id}-${resolvedParams.modelSlug}`} 
        product={product} 
        allProducts={allProducts} 
        modelSlug={resolvedParams.modelSlug} 
      />
    </div>
  );
}
