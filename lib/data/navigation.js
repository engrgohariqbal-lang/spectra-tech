import { products } from "./products";

export const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Products", 
    href: "/products",
    children: products.map(p => ({ name: p.name, href: `/products/${p.slug}` }))
  },
  { name: "Application", href: "/application" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Service", href: "/service" },
  { name: "Video", href: "/video" },
  { name: "Contact Us", href: "/contact" }
];
