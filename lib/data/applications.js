import { Cpu, Car, Flame, Wrench, Pickaxe, Train, Zap, Factory, Beaker, PlugZap, Shield, Building2, Mountain } from "lucide-react";

export const applicationsData = [
  {
    slug: "liquid-cooling",
    name: "Liquid Cooling",
    shortDesc: "Analysis of coolants and liquid cooling systems in advanced AI servers and data centers.",
    icon: "Zap",
    image: "/images/applications/liquid-cooling.webp",
    content: "Advanced AI servers and computing data centers rely heavily on efficient liquid cooling systems. Our instruments help analyze the chemical composition and purity of coolants to prevent corrosion and maintain optimal thermal management in high-performance computing environments.",
    benefits: [
      "Purity analysis of cooling fluids",
      "Corrosion prevention through elemental tracking",
      "Optimized thermal management",
      "Increased server lifespan and reliability"
    ],
    relatedProducts: ["icp-oes", "desktop-edxrf-spectrometer"]
  },
  {
    slug: "electronics-semiconductor",
    name: "Electronics & Semiconductor",
    shortDesc: "High-precision analysis for semiconductor manufacturing, RoHS compliance, and electronic components.",
    icon: "Cpu",
    image: "/images/applications/electronics-semiconductor.webp",
    content: "In the rapidly advancing electronics and semiconductor industries, ensuring the purity of materials is paramount. Our spectrometers deliver high-precision analysis for RoHS compliance, trace metal detection in silicon wafers, and quality control of electronic components.",
    benefits: [
      "RoHS and WEEE compliance testing",
      "Trace metal analysis in semiconductors",
      "Quality control of solders and PCB materials",
      "High sensitivity for ultra-low detection limits"
    ],
    relatedProducts: ["desktop-edxrf-spectrometer", "icp-oes"]
  },
  {
    slug: "automotive-components",
    name: "Automotive Components",
    shortDesc: "Quality control and material verification for critical automotive parts and structural components.",
    icon: "Car",
    image: "/images/applications/automotive-components.webp",
    content: "Automotive manufacturing demands strict material verification to ensure vehicle safety, performance, and longevity. We provide comprehensive analytical solutions for inspecting steel, aluminum alloys, and specialized components used in engines, chassis, and EV batteries.",
    benefits: [
      "Verification of high-strength automotive steels",
      "Analysis of EV battery materials",
      "Positive Material Identification (PMI)",
      "Quality assurance for engine components"
    ],
    relatedProducts: ["oes-spectrometer", "carbon-sulfur-onh-analyzer"]
  },
  {
    slug: "foundry",
    name: "Foundry",
    shortDesc: "Rapid elemental analysis to optimize melt chemistry and ensure high-quality casting.",
    icon: "Flame",
    image: "/images/applications/foundry.webp",
    content: "In the foundry sector, maintaining the correct chemical composition is critical. Our spectrometers deliver highly accurate results within seconds, allowing operators to make real-time decisions before the metal is poured, minimizing the risk of off-spec heats.",
    benefits: [
      "Real-time melt chemistry analysis",
      "Prevention of off-spec heats",
      "Optimization of expensive alloying elements",
      "Consistent casting quality"
    ],
    relatedProducts: ["oes-spectrometer", "carbon-sulfur-onh-analyzer"]
  },
  {
    slug: "metal",
    name: "Metal",
    shortDesc: "Precise elemental analysis for various metal grades, steelmaking, and general metallurgy.",
    icon: "Factory",
    image: "/images/applications/metal.webp",
    content: "From general metallurgy to specialized steel manufacturing, precise control over elemental composition is required. Our robust analytical instruments are engineered for harsh environments, offering high-precision detection of trace elements in various metal matrices.",
    benefits: [
      "Precise C, S, O, N, H determination",
      "Accurate grade identification",
      "High throughput for production environments",
      "Broad matrix applicability"
    ],
    relatedProducts: ["oes-spectrometer", "mobile-metal-analyzer"]
  },
  {
    slug: "machine",
    name: "Machine",
    shortDesc: "Material testing for heavy machinery, industrial equipment, and precision machining.",
    icon: "Wrench",
    image: "/images/applications/machine.webp",
    content: "Heavy machinery and industrial equipment rely on durable, high-quality materials. Our analyzers provide critical insights into material composition, ensuring that the metals used in manufacturing can withstand extreme mechanical stress and wear.",
    benefits: [
      "Verification of wear-resistant alloys",
      "Quality control for precision machined parts",
      "Durability testing for heavy machinery",
      "Fast, non-destructive analysis"
    ],
    relatedProducts: ["mobile-metal-analyzer", "handheld-xrf-analyzer"]
  },
  {
    slug: "mining",
    name: "Mining",
    shortDesc: "On-site analysis of ores, minerals, and geological samples for efficient resource extraction.",
    icon: "Pickaxe",
    image: "/images/applications/mining.webp",
    content: "Efficient mining operations require immediate feedback on ore grade and mineral composition. Our portable and benchtop XRF analyzers deliver lab-quality results directly at the mine site, optimizing exploration, grade control, and processing.",
    benefits: [
      "Rapid on-site ore grade analysis",
      "Real-time decision making for exploration",
      "Optimization of mineral processing",
      "Rugged design for field environments"
    ],
    relatedProducts: ["handheld-xrf-analyzer", "desktop-edxrf-spectrometer"]
  },
  {
    slug: "transportation",
    name: "Transportation",
    shortDesc: "Material certification for railways, shipbuilding, and mass transit infrastructure.",
    icon: "Train",
    image: "/images/applications/transportation.webp",
    content: "The transportation sector, including railways, shipbuilding, and mass transit, requires materials that meet rigorous safety standards. We offer complete analytical solutions to verify the structural integrity and composition of metals used in critical transportation infrastructure.",
    benefits: [
      "Certification of railway and marine grade steels",
      "Traceability for critical infrastructure materials",
      "On-site PMI for large assemblies",
      "Prevention of structural failures"
    ],
    relatedProducts: ["mobile-metal-analyzer", "oes-spectrometer"]
  },
  {
    slug: "chemical",
    name: "Chemical",
    shortDesc: "Advanced analytical testing for chemical processing and industrial compound verification.",
    icon: "Beaker",
    image: "/images/applications/chemical.webp",
    content: "The chemical industry requires precise understanding of molecular and elemental structures. Our instruments provide rapid and accurate testing for raw materials, intermediates, and final products in complex chemical processing environments.",
    benefits: [
      "Purity verification of chemical compounds",
      "Trace contaminant detection",
      "In-line process control",
      "Compliance with industrial safety standards"
    ],
    relatedProducts: ["icp-oes", "desktop-edxrf-spectrometer"]
  },
  {
    slug: "electric-power",
    name: "Electric Power",
    shortDesc: "Material inspection for power generation infrastructure, transformers, and renewable energy.",
    icon: "PlugZap",
    image: "/images/applications/electric-power.webp",
    content: "Reliable power generation relies on high-quality components that can withstand extreme temperatures and environmental conditions. Our solutions inspect boiler tubes, turbine blades, and transformers to prevent catastrophic failures in power plants.",
    benefits: [
      "Inspection of high-temperature alloys",
      "Transformer oil analysis",
      "Integrity testing for renewable infrastructure",
      "On-site maintenance verification"
    ],
    relatedProducts: ["mobile-metal-analyzer", "handheld-xrf-analyzer"]
  },
  {
    slug: "services",
    name: "Services",
    shortDesc: "Versatile analytical testing tailored for independent inspection and testing services.",
    icon: "Shield",
    image: "/images/applications/services.webp",
    content: "Independent testing laboratories and service providers need versatile, reliable equipment to handle diverse sample types. We equip service agencies with advanced tools to deliver highly accurate elemental analyses to their clients across various industries.",
    benefits: [
      "Wide range of elemental detection",
      "Customizable calibration methods",
      "High sample throughput capabilities",
      "Certified reporting outputs"
    ],
    relatedProducts: ["oes-spectrometer", "icp-oes"]
  },
  {
    slug: "cement",
    name: "Cement",
    shortDesc: "Quality control for raw meal, clinker, and finished cement production processes.",
    icon: "Building2",
    image: "/images/applications/cement.webp",
    content: "Cement manufacturing demands continuous monitoring of raw materials, raw meal, and clinker to ensure a consistent, high-quality final product. Our XRF solutions are optimized for the precise analysis of oxides and trace elements critical to cement strength and durability.",
    benefits: [
      "Analysis of raw meal and clinker composition",
      "Alternative fuel elemental testing",
      "Optimization of kiln efficiency",
      "Compliance with global building standards"
    ],
    relatedProducts: ["desktop-edxrf-spectrometer"]
  },
  {
    slug: "geology",
    name: "Geology",
    shortDesc: "Comprehensive geochemical analysis for earth sciences, soil testing, and environmental monitoring.",
    icon: "Mountain",
    image: "/images/applications/geology.webp",
    content: "Geological research and environmental monitoring require detecting trace elements in highly complex matrices. Our instruments deliver precise geochemical mapping for soil analysis, earth sciences, and environmental remediation projects.",
    benefits: [
      "Trace element analysis in soils and sediments",
      "Geochemical mapping and exploration",
      "Environmental contamination detection",
      "Non-destructive sample evaluation"
    ],
    relatedProducts: ["handheld-xrf-analyzer", "desktop-edxrf-spectrometer"]
  }
];
