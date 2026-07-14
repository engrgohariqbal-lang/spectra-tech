import { Flame, Factory, Rocket, ShieldCheck, Recycle, Layers } from "lucide-react";

export const applicationsData = [
  {
    slug: "foundry",
    name: "Foundry & Metallurgy",
    shortDesc: "Rapid elemental analysis to optimize melt chemistry, ensuring high-quality casting and reducing material waste.",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    content: "In the foundry and metallurgy sector, maintaining the correct chemical composition is critical. Our spectrometers deliver highly accurate results within seconds, allowing operators to make real-time decisions before the metal is poured. This minimizes the risk of off-spec heats, reduces scrap, and lowers operational costs by saving expensive alloying elements.",
    benefits: [
      "Real-time melt chemistry analysis",
      "Prevention of off-spec heats",
      "Optimization of expensive alloying elements",
      "Consistent casting quality"
    ],
    relatedProducts: ["oes-spectrometer", "carbon-sulfur-onh-analyzer"]
  },
  {
    slug: "steel",
    name: "Steel & Iron",
    shortDesc: "Precise carbon, sulfur, and nitrogen analysis for steelmaking quality control and grade verification.",
    icon: "Factory",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    content: "Steel manufacturing demands precise control over carbon, sulfur, and nitrogen content. Our analytical instruments are engineered for the harsh environment of steel plants, offering robust, high-precision detection of trace elements and dissolved gases. From the blast furnace to the rolling mill, we ensure that every batch of steel meets international standards and customer specifications.",
    benefits: [
      "Precise C, S, O, N, H determination",
      "High throughput for 24/7 production environments",
      "Accurate grade identification",
      "Robust hardware designed for harsh industrial settings"
    ],
    relatedProducts: ["oes-spectrometer", "desktop-edxrf-spectrometer"]
  },
  {
    slug: "aerospace",
    name: "Aerospace & Automotive",
    shortDesc: "Strict compliance testing for critical components, ensuring durability and safety under extreme conditions.",
    icon: "Rocket",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
    content: "Safety and durability are non-negotiable in aerospace and automotive engineering. Our spectrometers provide trace-level elemental analysis to verify the purity of superalloys and high-strength steels. By ensuring materials can withstand extreme stress and temperature fluctuations, we help manufacturers build safer, more reliable vehicles and aircraft.",
    benefits: [
      "Verification of high-performance superalloys",
      "Trace element analysis for material fatigue prevention",
      "Compliance with strict aerospace standards (e.g., AS9100)",
      "Non-destructive testing options"
    ],
    relatedProducts: ["mobile-metal-analyzer", "handheld-xrf-analyzer"]
  },
  {
    slug: "quality-inspection",
    name: "Quality Inspection",
    shortDesc: "Accurate grade identification, PMI testing, and alloy verification for incoming materials and outgoing products.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    content: "Positive Material Identification (PMI) is essential across various supply chains to prevent material mix-ups. Our handheld and portable analyzers empower QA/QC teams to perform rapid on-site inspections of incoming raw materials, in-process components, and finished goods, ensuring 100% material traceability and compliance.",
    benefits: [
      "Rapid on-site Positive Material Identification (PMI)",
      "Elimination of material mix-ups",
      "Comprehensive material traceability",
      "Easy-to-use interfaces for non-laboratory personnel"
    ],
    relatedProducts: ["handheld-xrf-analyzer", "mobile-metal-analyzer"]
  },
  {
    slug: "metal-recycling",
    name: "Metal Recycling",
    shortDesc: "Fast sorting and analysis of scrap metals, maximizing profitability and ensuring correct alloy segregation.",
    icon: "Recycle",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
    content: "In the scrap metal recycling industry, time is money. Our analyzers offer ultra-fast sorting capabilities to accurately separate mixed scrap into distinct alloy categories. Whether you are dealing with stainless steels, aluminum alloys, or precious metals, our instruments maximize the resale value of your scrap by ensuring correct alloy segregation.",
    benefits: [
      "Ultra-fast scrap sorting (seconds per sample)",
      "High accuracy for light elements (Mg, Al, Si, P, S)",
      "Maximization of scrap resale value",
      "Durable devices designed for scrapyard environments"
    ],
    relatedProducts: ["handheld-xrf-analyzer", "desktop-edxrf-spectrometer"]
  },
  {
    slug: "non-ferrous",
    name: "Non-ferrous Metals",
    shortDesc: "Trace element detection for copper, aluminum, and zinc alloys to meet stringent purity requirements.",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1974&auto=format&fit=crop",
    content: "Non-ferrous metals like aluminum, copper, and zinc require precise analysis of tramp elements that can dramatically alter their physical properties. Our analytical solutions offer exceptional limits of detection for trace elements, ensuring that your non-ferrous alloys meet the stringent purity requirements demanded by modern electronics and manufacturing.",
    benefits: [
      "Exceptional limits of detection for tramp elements",
      "Optimized calibration bases for Cu, Al, Zn, Pb, etc.",
      "High stability for long-term analytical precision",
      "Comprehensive analysis of both major and trace elements"
    ],
    relatedProducts: ["oes-spectrometer", "icp-oes"]
  }
];
