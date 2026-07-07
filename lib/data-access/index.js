import { products } from "@/lib/data/products";
import { siteConfig, testimonials, solutions } from "@/lib/data/content";
import { navigation } from "@/lib/data/navigation";

/**
 * Data Access Layer
 * 
 * Currently, these functions return static data wrapped in Promises to simulate 
 * asynchronous database queries. When wiring up Supabase later, you will modify 
 * these functions to query the database using the Supabase client, keeping the 
 * rest of the application completely unaware of the underlying data source.
 * 
 * Example future implementation:
 * import { createClient } from '@/lib/supabase/server';
 * 
 * export async function getProducts() {
 *   const supabase = createClient();
 *   const { data, error } = await supabase.from('products').select('*');
 *   if (error) throw error;
 *   return data;
 * }
 */

export async function getProducts() {
  // Simulate network delay if desired: await new Promise(res => setTimeout(res, 100));
  return products;
}

export async function getProductBySlug(slug) {
  const product = products.find((p) => p.slug === slug);
  return product || null;
}

export async function getTestimonials() {
  return testimonials;
}

export async function getSolutions() {
  return solutions;
}
