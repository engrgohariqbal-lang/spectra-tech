import React from "react";
import { Wrench, Settings, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Service & Support",
  description: "Installation, training, parts, and maintenance services for your analytical instruments.",
};

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Installation & Training",
    description: "Professional setup of your instruments at your facility, followed by comprehensive operator training to ensure correct and safe usage from day one."
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Parts & Maintenance",
    description: "Supply of original spare parts and routine maintenance services to minimize downtime and extend the lifespan of your analytical equipment."
  },
  {
    icon: <HelpCircle className="w-8 h-8" />,
    title: "Technical Support",
    description: "Dedicated remote and on-site troubleshooting assistance led by experienced engineers."
  }
];

export default function ServicePage() {
  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Service & Support</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Committed to keeping your operations running smoothly with expert after-sales support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* FAQ Section Placeholder */}
        <div className="max-w-4xl mx-auto mt-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                <h3 className="font-bold text-lg text-slate-800 mb-2">What is the typical response time for service calls?</h3>
                <p className="text-slate-600">We aim to respond to all service inquiries within 24 hours, with on-site visits scheduled promptly based on urgency and location within Pakistan.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
