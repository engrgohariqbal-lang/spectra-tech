import { products } from "./products";

export const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Products", 
    href: "/products",
    children: products.map(p => ({ 
      name: p.name, 
      href: `/products/${p.slug}`,
      children: p.models?.map(m => ({
        name: `${m.name} ${p.name}`,
        href: `/products/${p.slug}#${m.name.toLowerCase().replace(/\s+/g, '-')}`
      }))
    }))
  },
  { name: "Application", href: "/application" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Service", href: "/service" },
  { name: "Video", href: "/video" },
  { name: "Contact Us", href: "/contact" }
];
