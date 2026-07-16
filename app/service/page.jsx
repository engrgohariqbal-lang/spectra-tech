import ServiceClient from "./ServiceClient";

export const metadata = {
  title: "Service",
  description: "Installation, training, parts, and maintenance services for your analytical instruments.",
};

export default function ServicePage() {
  return <ServiceClient />;
}
