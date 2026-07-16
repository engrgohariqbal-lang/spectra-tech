import ContactClient from "./ContactClient";
import { siteConfig } from "@/lib/data/content";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SpectraTech Solutions for inquiries, sales, and service.",
};

export default function ContactPage() {
  const addressQuery = encodeURIComponent(
    siteConfig.contact.address + "(SpectraTech Solutions Pvt Ltd)",
  );
  const mapUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${addressQuery}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return <ContactClient mapUrl={mapUrl} />;
}
