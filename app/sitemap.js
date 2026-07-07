import { getProducts } from "@/lib/data-access";

export default async function sitemap() {
  const baseUrl = "https://www.spectratech.com.pk"; // Replace with actual domain once known

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/application",
    "/solutions",
    "/service",
    "/video",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const products = await getProducts();

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
