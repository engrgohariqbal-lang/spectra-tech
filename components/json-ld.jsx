import React from "react";
import { siteConfig } from "@/lib/data/content";

export function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": "https://www.spectratech.com.pk", // Actual domain here
    "logo": "https://www.spectratech.com.pk/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.phone,
      "contactType": "sales",
      "email": siteConfig.contact.email,
      "availableLanguage": ["English", "Urdu"]
    },
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.youtube
    ].filter(link => link !== "#")
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}
