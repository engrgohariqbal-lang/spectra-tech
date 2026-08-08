/**
 * @typedef {Object} SpecDetail
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef {Object} ModelSpecs
 * @property {Record<string, SpecDetail[]>} categories
 */

/**
 * @typedef {Object} SubModel
 * @property {string} name
 * @property {string} tagline
 * @property {string} image
 * @property {string} description
 * @property {string[]} features
 * @property {Record<string, string>} specs
 */

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} description
 * @property {string} longDescription
 * @property {string} image
 * @property {string[]} features
 * @property {string[]} applications
 * @property {string[]} [gallery]
 * @property {{title: string, description: string}[]} [benefits]
 * @property {Object} [additionalInfo]
 * @property {SubModel[]} models
 */

/** @type {Product[]} */
export const products = [
  {
    id: "oes-spectrometer",
    name: "Optical Emission Spectrometer",
    slug: "oes-spectrometer",
    description:
      "High-precision OES spectrometers for elemental analysis in metals and alloys.",
    longDescription:
      "Our Optical Emission Spectrometers (OES) utilize state-of-the-art spark discharge technology and high-resolution optical detectors to deliver ultra-fast, multi-element analysis. Designed for metallurgical applications, foundry control, and strict incoming quality checks, these systems analyze up to 30+ elements simultaneously with sub-ppm detection levels.",
    image: "/images/products/oes/m5-oes-main.webp",
    features: [
      "CMOS-based high-resolution spark discharge analysis",
      "Vacuum-purged optical chambers for rapid stabilization",
      "Argon jet flow technology for small sample and wire analysis",
      "Automated wavelength calibration and diagnostic routines",
      "Robust construction suitable for 24/7 furnace-side industrial operations",
    ],
    applications: [
      "Foundries & Metal Smelting Plants",
      "Steel & Iron Refining Facilities",
      "Incoming Quality Control (IQC)",
      "Aerospace & Automotive Manufacturing",
      "Scrap Metal Recycling & Verification",
    ],
    gallery: [
      "/images/products/oes/m5-oes-main.webp",
      "/images/products/oes/m5-oes-angle.webp",
      "/images/products/oes/m5-oes-detail.webp",
      "/images/products/oes/m5-oes-screen.webp",
    ],
    benefits: [
      {
        title: "Maximum Precision",
        description:
          "Achieve sub-ppm detection limits ensuring top-tier quality control for critical metallurgical processes.",
      },
      {
        title: "Rapid Results",
        description:
          "Obtain full elemental composition within seconds, drastically reducing production downtime.",
      },
      {
        title: "Robust Reliability",
        description:
          "Engineered for 24/7 continuous operation in harsh industrial environments with minimal maintenance.",
      },
      {
        title: "Cost Efficiency",
        description:
          "Low gas consumption and optimized standby modes significantly lower the total cost of ownership.",
      },
    ],
    additionalInfo: {
      brochureUrl: "#",
      manualUrl: "#",
      warranty: "2 Years Standard Industry Warranty",
      certifications: ["ISO 9001", "CE Certified", "ASTM E415 Compliant"],
    },
    models: [
      {
        name: "W4",
        tagline: "Compact spark OES with optimized cost-of-ownership",
        image: "/images/products/oes/m5-oes-main.webp",
        gallery: [
          "/images/products/oes/m5-oes-main.webp",
          "/images/products/oes/m5-oes-angle.webp",
          "/images/products/oes/m5-oes-detail.webp",
          "/images/products/oes/m5-oes-screen.webp",
        ],
        description:
          "An entry-level, highly stable CMOS-readout OES spectrometer designed for small-to-medium foundries. Low argon gas consumption combined with highly accurate calibration database makes it the best-selling model in its class.",
        features: [
          "Compact benchtop form-factor",
          "Low cost of ownership & maintenance",
          "Ferrous and non-ferrous matrix calibrations",
          "Modular electronics for easy support",
        ],
        specs: {
          "Optical System": {
            "Optical Structure": "Paschen-Runge vacuum optical system",
            "Wavelength Range": "130nm - 800nm",
            "Focal Length": "400mm",
            "Grating Lines": "2400 l/mm",
            "Detector Type": "Multi-block high-performance linear CMOS array",
            Resolution: "10 pm/pixel",
          },
          "Spark Table": {
            "Argon Gas Requirement": "99.999% purity",
            "Argon Flow Rate": "Sparking: 3.5 L/min, Standby: 0.1 L/min",
            "Electrode Type": "Tungsten electrode (3.4mm analysis gap)",
          },
          "Spark Source": {
            Frequency: "100Hz - 1000Hz (HEPS type)",
            "Discharge Current": "1A - 400A",
            Control: "Automatic optimization of discharge parameters",
          },
          "Physical & Environmental": {
            Dimensions: "860mm (L) x 680mm (W) x 438mm (H)",
            Weight: "Approx. 100 kg",
            "Power Consumption": "Maximum: 750W, Standby: 40W",
            "Working Temperature": "10°C - 35°C (Fluctuation < 5°C/h)",
          },
        },
      },
      {
        name: "W5",
        tagline: "4th Generation high-performance metal analyzer",
        image: "/images/products/oes/w4-oes-main.webp",
        gallery: [
          "/images/products/oes/w4-oes-main.webp",
          "/images/products/oes/m5-oes-angle.webp",
          "/images/products/oes/m5-oes-detail.webp",
          "/images/products/oes/m5-oes-screen.webp",
        ],
        description:
          "The W5 integrates high-speed data acquisition with a thermally insulated vacuum chamber. It is optimized for detecting light elements such as Nitrogen, Carbon, Phosphorus, and Sulfur in ultra-low concentrations.",
        features: [
          "Ultra-low limits of detection (sub-ppm)",
          "High Nitrogen analysis capability (0.03% - 0.9%)",
          "Standardized parameter auto-correction",
          "Intelligent argon-saving standby mode",
        ],
        specs: {
          "Optical System": {
            "Optical Structure":
              "Thermally stabilized Paschen-Runge vacuum optics",
            "Wavelength Range": "130nm - 800nm",
            "Focal Length": "400mm (Double grating support)",
            "Grating Lines": "2400 l/mm",
            "Detector Type":
              "Linear CCD/CMOS array with dynamic temperature control",
            Resolution: "8 pm/pixel",
          },
          "Spark Table": {
            "Argon Gas Requirement": "99.999% purity (dual stage regulator)",
            "Argon Flow Rate": "Sparking: 4.0 L/min, Standby: 0.05 L/min",
            "Electrode Type": "Self-cleaning tungsten electrode (3.4mm gap)",
          },
          "Spark Source": {
            Frequency: "100Hz - 1000Hz (High Energy Pre-Spark support)",
            "Discharge Current": "1A - 500A",
            Control: "Fully programmable current pulse generation",
          },
          "Physical & Environmental": {
            Dimensions: "900mm (L) x 700mm (W) x 480mm (H)",
            Weight: "Approx. 115 kg",
            "Power Consumption": "Maximum: 800W, Standby: 35W",
            "Working Temperature":
              "10°C - 35°C (Internal thermo-regulation to 35°C ±0.5°C)",
          },
        },
      },
      {
        name: "W6",
        tagline: "The absolute standard for research-grade metallurgy",
        image: "/images/products/oes/w5-oes-main.webp",
        gallery: [
          "/images/products/oes/w5-oes-main.webp",
          "/images/products/oes/m5-oes-angle.webp",
          "/images/products/oes/m5-oes-detail.webp",
        ],
        description:
          "Our flagship vertical OES spectrometer, designed for high-end laboratories. It offers absolute precision across a wide wavelength spectrum, measuring trace impurities in high-purity copper, aluminum, nickel, and steel alloys with unmatched repeatability.",
        features: [
          "Vertical optical alignment for optimal gas dynamics",
          "Real-time vacuum state digital monitoring",
          "Supports up to 12 base calibrations (Fe, Cu, Al, Ni, Ti, etc.)",
          "High-energy pre-combustion technology (HEPS)",
        ],
        specs: {
          "Optical System": {
            "Optical Structure":
              "Vertical Paschen-Runge double optical chamber system",
            "Wavelength Range": "120nm - 800nm (covers VUV region)",
            "Focal Length": "500mm",
            "Grating Lines": "3600 l/mm (high resolution)",
            "Detector Type":
              "Scientific-grade deep-cooled back-thinned CCD array",
            Resolution: "5 pm/pixel",
          },
          "Spark Table": {
            "Argon Gas Requirement": "99.9999% ultra-pure argon recommended",
            "Argon Flow Rate": "Sparking: 4.5 L/min, Standby: 0.05 L/min",
            "Electrode Type": "Specially coated tungsten alloy electrode",
          },
          "Spark Source": {
            Frequency: "Up to 1500Hz digital control",
            "Discharge Current": "Digital HEPS, up to 600A peak",
            Control: "Real-time spark monitoring and bad spark deletion",
          },
          "Physical & Environmental": {
            Dimensions: "1020mm (L) x 750mm (W) x 580mm (H)",
            Weight: "Approx. 140 kg",
            "Power Consumption": "Maximum: 1000W, Standby: 50W",
            "Working Temperature":
              "15°C - 30°C (Internal chamber kept at 38°C ±0.1°C)",
          },
        },
      },
    ],
  },
  {
    id: "mobile-metal-analyzer",
    name: "Mobile Metal Analyzer",
    slug: "mobile-metal-analyzer",
    description:
      "Portable metal analysis for fast on-site grade identification.",
    longDescription:
      "Get the power of a lab-grade OES spectrometer on wheels. Our Mobile Metal Analyzers are designed for steel yards, pipelines, petrochemical plants, and scrapyards where bringing the analyzer to the sample is the only option. Equipped with flexible fiber-optic probes and long-life batteries, it makes PMI (Positive Material Identification) fast and easy.",
    image: "/images/products/mobile/sp6-mobile-main.webp",
    features: [
      "Rugged trolley design with high-durability rubber tires",
      "Flexible 3-meter or 5-meter fiber optic spark probe",
      "Quick PMT/CCD/CMOS hybrid detector option for carbon analysis",
      "Lithium-battery powered for up to 8 hours of standalone field use",
      "Automatic calibration update utilizing standard reference samples",
    ],
    applications: [
      "PMI (Positive Material Identification)",
      "Steel Stockyard Sorting & Checking",
      "Pipeline Quality Assurance & Welding Inspection",
      "Petrochemical Plant Maintenance Verification",
      "Large-scale Scrap Recycling Operations",
    ],
    gallery: [
      "/images/products/mobile/sp6-mobile-main.webp",
      "/images/products/mobile/sp6-mobile-angle.webp",
      "/images/products/mobile/sp6-mobile-detail.webp",
      "/images/products/mobile/sp6-mobile-screen.webp",
    ],
    benefits: [
      {
        title: "Maximum Precision",
        description:
          "Achieve sub-ppm detection limits ensuring top-tier quality control for critical metallurgical processes.",
      },
      {
        title: "Rapid Results",
        description:
          "Obtain full elemental composition within seconds, drastically reducing production downtime.",
      },
      {
        title: "Robust Reliability",
        description:
          "Engineered for 24/7 continuous operation in harsh industrial environments with minimal maintenance.",
      },
      {
        title: "Cost Efficiency",
        description:
          "Low gas consumption and optimized standby modes significantly lower the total cost of ownership.",
      },
    ],
    additionalInfo: {
      brochureUrl: "#",
      manualUrl: "#",
      warranty: "2 Years Standard Industry Warranty",
      certifications: ["ISO 9001", "CE Certified", "ASTM E415 Compliant"],
    },
    models: [
      {
        name: "SP6",
        tagline: "Ultra-mobile PMI analyzer with spark probe",
        image: "/images/products/mobile/sp6-mobile-main.webp",
        gallery: [
          "/images/products/mobile/sp6-mobile-main.webp",
          "/images/products/mobile/sp6-mobile-angle.webp",
          "/images/products/mobile/sp6-mobile-detail.webp",
          "/images/products/mobile/sp6-mobile-screen.webp",
        ],
        description:
          "The SP6 is a top-tier mobile analyzer offering rapid steel sorting and carbon analysis in the field. It features a lightweight hand probe, high-brightness touchscreen, and intuitive grade database matching.",
        features: [
          "Lightweight 1.2kg spark/arc hand probe",
          "Touchscreen operation with Windows-based software",
          "Database containing over 500 global metal grade specifications",
          "Quick-connect gas fittings",
        ],
        specs: {
          "Optical System": {
            "Optical Structure": "Ruggedized flat-field spectrometer system",
            "Wavelength Range": "170nm - 670nm",
            "Detector Type": "High-durability linear CCD array",
          },
          "Probe & Cable": {
            "Standard Cable Length": "3 meters (Optional 5 meters)",
            "Probe Types": "Spark probe (argon purged) or Arc probe (air)",
          },
          "Power & Battery": {
            "Battery Type": "High-capacity LiFePO4 battery pack",
            "Battery Life": "Up to 500 spark analyses per charge",
            "Power Supply": "110V/220V AC charging (usable during charging)",
          },
          Physical: {
            Dimensions: "620mm (L) x 410mm (W) x 480mm (H)",
            Weight: "Approx. 32 kg (excluding trolley)",
            "Operating Temperature": "-10°C to 45°C",
          },
        },
      },
    ],
  },
  {
    id: "handheld-xrf-analyzer",
    name: "Handheld XRF Analyzer",
    slug: "handheld-xrf-analyzer",
    description: "Fast, accurate non-destructive elemental analysis anywhere.",
    longDescription:
      "Our Handheld XRF (X-ray Fluorescence) Analyzers provide completely non-destructive elemental testing in the palm of your hand. Instantly check alloys, minerals, soil, jewelry, and RoHS compliance. Point-and-shoot operation yields results in under 3 seconds, backed by advanced Silicon Drift Detector (SDD) technology.",
    image: "/images/products/handheld-xrf/jx5-xrf-main.webp",
    features: [
      "True non-destructive testing (NDT) - no sample damage",
      "Ergonomic, balanced, and lightweight design (under 1.6kg)",
      "High-performance Silicon Drift Detector (SDD) with excellent resolution",
      "Inbuilt camera for precise measurement spot alignment",
      "IP54 rated dust-proof and splash-proof housing",
    ],
    applications: [
      "Scrap Alloy Sorting & Precious Metal Testing",
      "Geological Exploration & Ore Quality Assessment",
      "RoHS Compliance & Consumer Product Safety Screening",
      "Soil Heavy Metal Environmental Monitoring",
      "Art History & Archaeological Analysis",
    ],
    gallery: [
      "/images/products/handheld-xrf/jx5-xrf-main.webp",
      "/images/products/handheld-xrf/jx5-xrf-angle.webp",
      "/images/products/handheld-xrf/jx5-xrf-detail.webp",
      "/images/products/handheld-xrf/jx5-xrf-screen.webp",
    ],
    benefits: [
      {
        title: "Maximum Precision",
        description:
          "Achieve sub-ppm detection limits ensuring top-tier quality control for critical metallurgical processes.",
      },
      {
        title: "Rapid Results",
        description:
          "Obtain full elemental composition within seconds, drastically reducing production downtime.",
      },
      {
        title: "Robust Reliability",
        description:
          "Engineered for 24/7 continuous operation in harsh industrial environments with minimal maintenance.",
      },
      {
        title: "Cost Efficiency",
        description:
          "Low gas consumption and optimized standby modes significantly lower the total cost of ownership.",
      },
    ],
    additionalInfo: {
      brochureUrl: "#",
      manualUrl: "#",
      warranty: "2 Years Standard Industry Warranty",
      certifications: ["ISO 9001", "CE Certified", "ASTM E415 Compliant"],
    },
    models: [
      {
        name: "JX5",
        tagline: "Affordable SDD-based handheld alloy tester",
        image: "/images/products/handheld-xrf/jx5-xrf-main.webp",
        gallery: [
          "/images/products/handheld-xrf/jx5-xrf-main.webp",
          "/images/products/handheld-xrf/jx5-xrf-angle.webp",
          "/images/products/handheld-xrf/jx5-xrf-detail.webp",
          "/images/products/handheld-xrf/jx5-xrf-screen.webp",
        ],
        description:
          "The JX5 is an optimized handheld XRF for fast sorting of common stainless steels, tool steels, and copper/bronze alloys. Standard software covers over 25 elemental channels.",
        features: [
          "High performance-to-price ratio",
          "Standard pin-diode/SDD detector",
          "Built-in GPS for geochemical mapping",
          "Hot-swappable dual batteries",
        ],
        specs: {
          "Excitation Source": {
            "X-Ray Tube":
              "Miniature 40kV silver (Ag) or tungsten (W) anode tube",
            Power: "Max 4W, current up to 100 uA",
          },
          "Detector System": {
            "Detector Type": "High-resolution SDD (Silicon Drift Detector)",
            "Energy Resolution": "< 145 eV FWHM at Mn-Ka line",
          },
          "Element Analysis": {
            "Analytical Range": "Magnesium (Mg) to Uranium (U)",
            "Measurement Time":
              "3 - 10 seconds for standard alloy identification",
          },
          "Physical & Safety": {
            Weight: "1.5 kg (with battery)",
            Display: "4.3 inch color transflective touchscreen",
            "Radiation Safety":
              "Automatic tube shutoff when no sample is detected",
          },
        },
      },
      {
        name: "JX6",
        tagline: "Premium SDD handheld for light elements & trace analysis",
        image: "/images/products/handheld-xrf/jx6-xrf-main.webp",
        gallery: [
          "/images/products/handheld-xrf/jx6-xrf-main.webp",
          "/images/products/handheld-xrf/jx5-xrf-angle.webp",
          "/images/products/handheld-xrf/jx5-xrf-detail.webp",
          "/images/products/handheld-xrf/jx5-xrf-screen.webp",
        ],
        description:
          "Our premium handheld XRF analyzer. The JX6 features a larger area SDD detector, enabling extreme sensitivity to light elements like Magnesium, Aluminum, Silicon, Phosphorus, and Sulfur without vacuum or helium purging.",
        features: [
          "Ultra-fast light element analysis (Mg, Al, Si)",
          "Highest resolution SDD detector",
          "Advanced fundamental parameters (FP) software algorithm",
          "Reinforced housing with impact-absorbing rubber bumpers",
        ],
        specs: {
          "Excitation Source": {
            "X-Ray Tube": "Premium 50kV gold (Au) or rhodium (Rh) anode tube",
            Power: "Max 5W, multiple auto-selected filter wheels",
          },
          "Detector System": {
            "Detector Type":
              "Large-area scientific SDD with thermoelectric cooling",
            "Energy Resolution": "< 125 eV FWHM at Mn-Ka line",
          },
          "Element Analysis": {
            "Analytical Range": "Sodium (Na) to Uranium (U)",
            "Measurement Time": "1.5 - 5 seconds for complete alloy chemistry",
          },
          "Physical & Safety": {
            Weight: "1.6 kg (with battery)",
            Display: "5.0 inch industrial grade high-res screen",
            Communication:
              "Wi-Fi, Bluetooth, USB interface for report generation",
          },
        },
      },
    ],
  },
  {
    id: "carbon-sulfur-onh-analyzer",
    name: "Elemental Analysis (Carbon Sulfur / ONH)",
    slug: "carbon-sulfur-onh-analyzer",
    description:
      "Determine Carbon, Sulfur, Oxygen, Nitrogen, and Hydrogen content with precision.",
    longDescription:
      "Our Combustion Carbon/Sulfur Analyzers and Inert Gas Fusion ONH Analyzers are specialized systems for quantitative determination of carbon, sulfur, oxygen, nitrogen, and hydrogen in solid inorganic materials. Employing high-frequency induction furnaces or impulse furnaces, they achieve rapid thermal decomposition and highly sensitive infrared/thermal conductivity detection.",
    image: "/images/products/elemental/cs8800c-main.webp",
    features: [
      "High-frequency induction furnace (2.5kW to 3.0kW)",
      "High-precision non-dispersive infrared (NDIR) detection cells",
      "Automatic furnace cleaning and dust extraction systems",
      "Low blank level gas purification reagents",
      "Compliance with ASTM, ISO, and DIN standard analytical methods",
    ],
    applications: [
      "Foundries and Steel Casting Quality Assurance",
      "Ceramics & Refractory Materials Quality Control",
      "Advanced Metal Powders (Additive Manufacturing / 3D Printing)",
      "Aerospace Alloys and Specialized Titanium Testing",
      "Chemical Reagent and Catalyst Grade Verification",
    ],
    gallery: ["/images/products/elemental/cs8800c-main.webp"],
    benefits: [
      {
        title: "Maximum Precision",
        description:
          "Achieve sub-ppm detection limits ensuring top-tier quality control for critical metallurgical processes.",
      },
      {
        title: "Rapid Results",
        description:
          "Obtain full elemental composition within seconds, drastically reducing production downtime.",
      },
      {
        title: "Robust Reliability",
        description:
          "Engineered for 24/7 continuous operation in harsh industrial environments with minimal maintenance.",
      },
      {
        title: "Cost Efficiency",
        description:
          "Low gas consumption and optimized standby modes significantly lower the total cost of ownership.",
      },
    ],
    additionalInfo: {
      brochureUrl: "#",
      manualUrl: "#",
      warranty: "2 Years Standard Industry Warranty",
      certifications: ["ISO 9001", "CE Certified", "ASTM E415 Compliant"],
    },
    models: [
      {
        name: "CS-8820S",
        tagline:
          "Infrared Carbon-Sulfur analyzer with high-frequency combustion",
        image: "/images/products/elemental/cs8800c-main.webp",
        gallery: ["/images/products/elemental/cs8800c-main.webp"],
        description:
          "The CS-8820S is designed for precise carbon and sulfur analysis in steel, iron, ores, alloys, and other inorganic materials. It features a dual carbon and dual sulfur NDIR detection setup for covering both high and low concentration ranges.",
        features: [
          "High-frequency induction heating",
          "Ultra-sensitive NDIR absorption cells",
          "Software controlled automatic calibration",
          "Integrated electronic mass flow controllers",
        ],
        specs: {
          "Analytical Range": {
            "Carbon Channel": "0.0001% - 10.0% (extendable to 99.9%)",
            "Sulfur Channel": "0.0001% - 5.0% (extendable to 99.9%)",
          },
          "Precision & Sensitivity": {
            Sensitivity: "0.01 ppm (0.000001%)",
            "Repeatability (RSD)": "Carbon: < 0.5%, Sulfur: < 1.0%",
          },
          "Combustion System": {
            "Furnace Type": "High Frequency Induction Furnace (20MHz, 2.5kW)",
            "Carrier Gas": "Oxygen (99.5% purity minimum)",
            "Pneumatic Gas": "Compressed air or nitrogen",
          },
          Physical: {
            Dimensions: "650mm (W) x 600mm (D) x 800mm (H)",
            Weight: "Approx. 95 kg",
            "Power Requirements": "220V AC ±10%, 50Hz, 16A max",
          },
        },
      },
      {
        name: "CS-8820T",
        tagline: "Dual-furnace CS analyzer for organic & inorganic materials",
        image: "/images/products/elemental/cs8800c-main.webp",
        gallery: ["/images/products/elemental/cs8800c-main.webp"],
        description:
          "A dual-furnace carbon and sulfur analyzer combining a resistance furnace and high-frequency induction furnace in one unit. Designed for labs requiring testing on both metallurgical alloys and organic solids like coal, coke, soil, and oil.",
        features: [
          "Dual combustion chambers (Resistance + Induction)",
          "Wide sample applicability (coal, ash, minerals, metals)",
          "Touchscreen control panel with diagnostic graphs",
          "Advanced halogen traps to prevent cell degradation",
        ],
        specs: {
          "Analytical Range": {
            "Carbon Channel": "0.005% - 100.0%",
            "Sulfur Channel": "0.002% - 50.0%",
          },
          Furnaces: {
            "Resistance Furnace": "Programmatic control up to 1450°C",
            "Induction Furnace": "High frequency 20MHz, max 3.0kW",
          },
          "Cycle Time": {
            "Combustion time":
              "Approx. 40 - 120 seconds (dependent on sample type)",
          },
          Physical: {
            Dimensions: "750mm (W) x 650mm (D) x 850mm (H)",
            Weight: "Approx. 120 kg",
          },
        },
      },
      {
        name: "CS-8800S",
        tagline: "Standard industrial carbon & sulfur determination unit",
        image: "/images/products/elemental/cs8800c-main.webp",
        gallery: ["/images/products/elemental/cs8800c-main.webp"],
        description:
          "Reliable workhorse for daily production QC in steel mills. Built with high-durability solenoid valves, an easily accessible dust trap, and a heavy-duty NDIR cell block.",
        features: [
          "Robust construction for harsh foundry environments",
          "Low cost of daily operational reagents",
          "Integrated scales interface for auto-weight input",
        ],
        specs: {
          "Analytical Range": {
            "Carbon Channel": "0.0005% - 5.0%",
            "Sulfur Channel": "0.0005% - 2.0%",
          },
          "Cycle Time": {
            "Analysis Time": "45 - 60 seconds",
          },
          Physical: {
            Dimensions: "600mm (W) x 580mm (D) x 780mm (H)",
            Weight: "Approx. 85 kg",
          },
        },
      },
      {
        name: "ONH-2018",
        tagline: "Inert gas fusion Oxygen, Nitrogen & Hydrogen analyzer",
        image: "/images/products/elemental/cs8800c-main.webp",
        gallery: ["/images/products/elemental/cs8800c-main.webp"],
        description:
          "Uses impulse furnace heating to melt specimens in a graphite crucible. Under high temperature, Oxygen forms CO, Nitrogen is released as N2, and Hydrogen as H2. Detected via highly sensitive IR and thermal conductivity cells.",
        features: [
          "Electrode impulse furnace up to 3000°C",
          "Non-dispersive infrared (NDIR) detection for Oxygen",
          "Thermal Conductivity Detector (TCD) for Nitrogen and Hydrogen",
          "Interchangeable furnace tip for different crucible sizes",
        ],
        specs: {
          "Analytical Range": {
            Oxygen: "0.1 ppm - 0.1%",
            Nitrogen: "0.1 ppm - 2.0%",
            Hydrogen: "0.01 ppm - 0.1%",
          },
          "Impulse Furnace": {
            Power: "Max 8.0 kW (Programmable current)",
            Temperature: "Up to 3000°C",
          },
          "Carrier Gas": {
            Helium: "99.999% purity (for N/O carrier)",
            Argon: "99.999% purity (alternative carrier for Nitrogen)",
          },
          Physical: {
            Dimensions: "700mm (W) x 620mm (D) x 900mm (H)",
            Weight: "Approx. 135 kg",
          },
        },
      },
    ],
  },
  {
    id: "desktop-edxrf-spectrometer",
    name: "XRF Spectrometer",
    slug: "desktop-edxrf-spectrometer",
    description: "Desktop energy-dispersive X-ray fluorescence spectrometers.",
    longDescription:
      "Energy Dispersive X-ray Fluorescence (EDXRF) benchtop spectrometers are perfect for laboratory research and production QC. Delivering rapid chemical composition verification for solids, liquids, and powders, EDXRF bridges the gap between handheld point-and-shoot analysis and large scale OES labs.",
    image: "/images/products/xrf/p9800-xrf-main.webp",
    features: [
      "Large sample chamber accommodating irregular items",
      "Advanced vacuum or helium purging option for light elements",
      "Silicon Drift Detector (SDD) with thermoelectrical cooling",
      "Automatic filter and collimator changer (up to 8 slots)",
      "High power X-ray tubes (up to 50W / 50kV)",
    ],
    applications: [
      "Cement and Construction Raw Material Verification",
      "Mining Exploration & Mineral Concentration Testing",
      "Petrochemical sulfur-in-oil testing (ASTM D4294 compliance)",
      "Automotive Catalyst Recycling and Reclamation",
      "Plating and Metal Coating Thickness Determination",
    ],
    gallery: [
      "/images/products/xrf/p9800-xrf-main.webp",
      "/images/products/xrf/p9800s-xrf-main.webp",
      "/images/products/xrf/ty9800-xrf-main.webp",
    ],
    benefits: [
      {
        title: "Maximum Precision",
        description:
          "Achieve sub-ppm detection limits ensuring top-tier quality control for critical metallurgical processes.",
      },
      {
        title: "Rapid Results",
        description:
          "Obtain full elemental composition within seconds, drastically reducing production downtime.",
      },
      {
        title: "Robust Reliability",
        description:
          "Engineered for 24/7 continuous operation in harsh industrial environments with minimal maintenance.",
      },
      {
        title: "Cost Efficiency",
        description:
          "Low gas consumption and optimized standby modes significantly lower the total cost of ownership.",
      },
    ],
    additionalInfo: {
      brochureUrl: "#",
      manualUrl: "#",
      warranty: "2 Years Standard Industry Warranty",
      certifications: ["ISO 9001", "CE Certified", "ASTM E415 Compliant"],
    },
    models: [
      {
        name: "TY-9800",
        tagline: "Advanced research-grade desktop EDXRF system",
        image: "/images/products/xrf/p9800-xrf-main.webp",
        gallery: [
          "/images/products/xrf/p9800-xrf-main.webp",
          "/images/products/xrf/p9800s-xrf-main.webp",
          "/images/products/xrf/ty9800-xrf-main.webp",
        ],
        description:
          "Our top-of-the-line desktop EDXRF system featuring a high-flux 50W X-ray tube and large area SDD detector. The system supports full vacuum sample chamber operation to analyze light elements (F to Mg) with outstanding sensitivity.",
        features: [
          "50W Rhodium or Silver anode X-ray tube",
          "Dual-vacuum/helium gas purge pathways",
          "Multi-position automatic sample carousel (up to 12 cups)",
          "Unparalleled software for matching unknown alloy signatures",
        ],
        specs: {
          "Excitation System": {
            "X-Ray Tube": "50W high-power Rhodium (Rh) target tube",
            Voltage: "5kV - 50kV adjustable",
            Filters: "8 positions automatic filter wheel",
          },
          "Detection System": {
            "Detector Type": "Thermoelectrically cooled Fast-SDD detector",
            "Active Area": "25 mm²",
            Resolution: "< 129 eV FWHM at 5.9 keV",
          },
          "Sample Chamber": {
            "Chamber Type":
              "Large vacuum chamber (air, vacuum, or helium atmosphere)",
            "Sample Changer":
              "10-position or 12-position motor driven carousel",
          },
          Physical: {
            Dimensions: "680mm (W) x 520mm (D) x 420mm (H)",
            Weight: "Approx. 65 kg",
          },
        },
      },
      {
        name: "P9800",
        tagline: "Heavy metal and RoHS screening desktop spectrometer",
        image: "/images/products/xrf/p9800s-xrf-main.webp",
        gallery: [
          "/images/products/xrf/p9800s-xrf-main.webp",
          "/images/products/xrf/p9800-xrf-main.webp",
          "/images/products/xrf/ty9800-xrf-main.webp",
        ],
        description:
          "Specifically calibrated for RoHS (Lead, Cadmium, Mercury, Chromium, Bromine) screening and heavy metals testing in consumer goods, plastics, and electronics.",
        features: [
          "Optimized filters for RoHS elements",
          "Built-in optical camera for small parts alignment",
          "Automated PDF report generator",
          "Pass/Fail quick display mode",
        ],
        specs: {
          "Excitation System": {
            "X-Ray Tube": "40kV / 50W Tungsten (W) anode tube",
            Collimator: "1.0mm, 2.0mm, 4.0mm automatic selectors",
          },
          "Detection System": {
            "Detector Type": "High-efficiency Si-PIN detector",
            Resolution: "< 165 eV FWHM",
          },
          Physical: {
            Dimensions: "580mm (W) x 480mm (D) x 380mm (H)",
            Weight: "Approx. 45 kg",
          },
        },
      },
      {
        name: "JXT-6800",
        tagline: "Compact precious metals & gold purity analyzer",
        image: "/images/products/xrf/ty9800-xrf-main.webp",
        gallery: [
          "/images/products/xrf/ty9800-xrf-main.webp",
          "/images/products/xrf/p9800-xrf-main.webp",
          "/images/products/xrf/p9800s-xrf-main.webp",
        ],
        description:
          "Widely used in jewelry stores, pawnshops, and refineries for non-destructive karats evaluation (Au, Ag, Pt, Pd, Cu, Zn). Points out gold coatings and under-karat items instantly.",
        features: [
          "Pre-calibrated for Gold, Platinum, Silver, and Palladium matrices",
          "Takes up minimal counter space",
          "Front-loading security glass lid",
          "Results displayed in Carats (K) and percentage (%)",
        ],
        specs: {
          "Detection System": {
            "Detector Type": "Proportional counter or Si-PIN detector",
            "Analysis range": "1% - 99.99% purity detection",
          },
          Physical: {
            Dimensions: "420mm (W) x 350mm (D) x 320mm (H)",
            Weight: "Approx. 28 kg",
          },
        },
      },
      {
        name: "JXT6",
        tagline: "Industrial plating thickness and alloy composition analyzer",
        image: "/images/products/xrf/p9800s-xrf-main.webp",
        gallery: [
          "/images/products/xrf/p9800s-xrf-main.webp",
          "/images/products/xrf/p9800-xrf-main.webp",
          "/images/products/xrf/ty9800-xrf-main.webp",
        ],
        description:
          "Designed for plating line thickness analysis. Measures multi-layer platings (e.g., Gold over Nickel over Copper) on PCB boards, screws, electrical connectors, and auto parts.",
        features: [
          "Measures plating thickness down to nanometer scale",
          "Laser distance sensor for focal height auto-alignment",
          "XY motorized stage with joystick control",
        ],
        specs: {
          "Excitation System": {
            Collimator: "Micro-collimator down to 0.1mm",
          },
          "Measurement Capabilities": {
            "Plating Layers":
              "Up to 5 layer thickness and alloy percentage tracking",
            Software: "Thick-coat fundamental parameters standard",
          },
          Physical: {
            Dimensions: "650mm (W) x 600mm (D) x 580mm (H)",
            Weight: "Approx. 55 kg",
          },
        },
      },
    ],
  },
  {
    id: "icp-oes",
    name: "ICP-OES/AES",
    slug: "icp-oes",
    description:
      "Inductively coupled plasma optical emission spectroscopy for trace elements.",
    longDescription:
      "Our Inductively Coupled Plasma Optical Emission Spectrometers (ICP-OES / ICP-AES) represent the pinnacle of liquid elemental analysis. By heating a sample mist to 10,000K inside an argon plasma, it atomizes and excites almost the entire periodic table. Perfect for high-sensitivity trace testing in environmental water, acid digests, food, and pharmaceuticals.",
    image: "/images/products/icp/ty9900-icp-main.webp",
    features: [
      "High-efficiency RF generator (Solid-state design, 700W - 1600W power)",
      "High-resolution echelle spectrometer optics with prism cross-disperser",
      "Simultaneous detection of light elements (Li, Na, K) and heavy metals (As, Pb, Cd)",
      "Automatic mass-flow gas controller for Nebulizer, Auxiliary, and Plasma gas",
      "Peristaltic pump with adjustable speeds and auto-blank switching",
    ],
    applications: [
      "Environmental Water (Drinking, Waste, Sea) Testing",
      "Agricultural Soil & Organic Fertilizers Trace Analysis",
      "Food Safety, Toxins, and Heavy Metal Contaminants Monitoring",
      "Petrochemical Fuel Oils & Lubricant Wear Metals",
      "Pharmaceutical Impurities Analysis (USP <232>/<233> compliance)",
    ],
    gallery: ["/images/products/icp/ty9900-icp-main.webp"],
    benefits: [
      {
        title: "Maximum Precision",
        description:
          "Achieve sub-ppm detection limits ensuring top-tier quality control for critical metallurgical processes.",
      },
      {
        title: "Rapid Results",
        description:
          "Obtain full elemental composition within seconds, drastically reducing production downtime.",
      },
      {
        title: "Robust Reliability",
        description:
          "Engineered for 24/7 continuous operation in harsh industrial environments with minimal maintenance.",
      },
      {
        title: "Cost Efficiency",
        description:
          "Low gas consumption and optimized standby modes significantly lower the total cost of ownership.",
      },
    ],
    additionalInfo: {
      brochureUrl: "#",
      manualUrl: "#",
      warranty: "2 Years Standard Industry Warranty",
      certifications: ["ISO 9001", "CE Certified", "ASTM E415 Compliant"],
    },
    models: [
      {
        name: "ICP-7000",
        tagline: "Simultaneous dual-view ICP-OES system",
        image: "/images/products/icp/ty9900-icp-main.webp",
        gallery: ["/images/products/icp/ty9900-icp-main.webp"],
        description:
          "The ICP-7000 is a dual-view (Axial + Radial) system. Axial view offers the lowest limits of detection for trace elements (ppb levels), while Radial view prevents detector saturation for major minerals (ppm/percentage levels).",
        features: [
          "Dual plasma viewing configurations (Axial/Radial)",
          "Solid-state RF generator with automatic matching network",
          "Low argon consumption torch design",
          "Echelle optical path with high-efficiency scientific CCD",
        ],
        specs: {
          "Optical System": {
            "Optical Structure": "Echelle cross-dispersion optical system",
            "Wavelength Range": "165nm - 900nm",
            Resolution: "< 0.007nm at 200nm",
            "Detector Type":
              "Scientific megapixel Charge Injection Device (CID)",
          },
          "RF Generator": {
            Type: "Solid State RF Generator (27.12 MHz)",
            "Power Output": "700W - 1500W computer controlled",
          },
          "Sample Introduction": {
            Nebulizer: "Glass concentric nebulizer with cyclonic spray chamber",
            "Peristaltic Pump":
              "3-channel or 4-channel speed variable software-controlled pump",
          },
          "Physical & Utility": {
            Dimensions: "1150mm (L) x 780mm (W) x 750mm (H)",
            Weight: "Approx. 165 kg",
            "Argon Purge Gas": "99.999% purity argon required",
          },
        },
      },
      {
        name: "ICP-AES 9000",
        tagline: "High-throughput laboratory atomic emission spectrometer",
        image: "/images/products/icp/ty9900-icp-main.webp",
        gallery: ["/images/products/icp/ty9900-icp-main.webp"],
        description:
          "Designed for contract testing laboratories processing hundreds of samples daily. Equipped with high-speed sample autosamplers, rapid-flush spray chambers, and intelligent background subtraction software.",
        features: [
          "Pre-integrated high capacity autosampler (up to 180 tubes)",
          "Optimized for high total dissolved solids (TDS) sample matrices",
          "Complete automatic software control with pre-loaded standards library",
        ],
        specs: {
          "Optical System": {
            "Optical Structure": "Echelle grating spectrometer",
            "Wavelength Range": "160nm - 950nm",
            Resolution: "< 0.005nm at 200nm",
            "Detector Type": "Back-illuminated cooled CCD detector",
          },
          "RF Generator": {
            Type: "High-stability RF Generator (40.68 MHz)",
            "Power Output": "800W - 1700W digital control",
          },
          "Utility Requirements": {
            Exhaust: "Two exhaust ports for plasma heat and acid vapors",
            "Cooling Water":
              "Recirculating water chiller (cooling capacity > 2kW)",
          },
          Physical: {
            Dimensions: "1250mm (L) x 820mm (W) x 800mm (H)",
            Weight: "Approx. 190 kg",
          },
        },
      },
    ],
  },
  {
    id: "crms-consumables",
    name: "CRMs & Consumables",
    slug: "crms-consumables",
    description:
      "Certified Reference Materials and essential consumables for daily operations.",
    longDescription:
      "Ensure analytical confidence and equipment longevity with our range of Certified Reference Materials (CRMs) and genuine parts. We supply high-purity single-element standards, multi-element calibration disks, quartz torches, tungsten electrodes, combustion crucibles, and replacement filters for all analytical brands.",
    image: "/images/products/elemental/cs8800c-main.webp",
    features: [
      "ISO 17034 certified reference materials with trace certificate",
      "Calibration standards for Fe, Cu, Al, Ni, and Zn base alloys",
      "High-purity consumables (Quartz torches, graphite crucibles)",
      "Excellent batch-to-batch consistency preventing baseline drift",
      "Global shipping and temperature-controlled storage packaging",
    ],
    applications: [
      "Analytical Equipment Calibration & Standardization",
      "Daily Quality Control Audits & Verification",
      "ISO 17025 Accredited Laboratory Auditing",
      "Spare Parts Routine Preventive Maintenance",
      "Consumable Replenishments for OES, XRF, CS, and ICP",
    ],
    gallery: ["/images/products/elemental/cs8800c-main.webp"],
    benefits: [
      {
        title: "Maximum Precision",
        description:
          "Achieve sub-ppm detection limits ensuring top-tier quality control for critical metallurgical processes.",
      },
      {
        title: "Rapid Results",
        description:
          "Obtain full elemental composition within seconds, drastically reducing production downtime.",
      },
      {
        title: "Robust Reliability",
        description:
          "Engineered for 24/7 continuous operation in harsh industrial environments with minimal maintenance.",
      },
      {
        title: "Cost Efficiency",
        description:
          "Low gas consumption and optimized standby modes significantly lower the total cost of ownership.",
      },
    ],
    additionalInfo: {
      brochureUrl: "#",
      manualUrl: "#",
      warranty: "2 Years Standard Industry Warranty",
      certifications: ["ISO 9001", "CE Certified", "ASTM E415 Compliant"],
    },
    models: [
      {
        name: "SUS Certified Reference Materials",
        tagline: "High-quality standard reference materials for SUS alloys",
        image: "/images/products/crms/sus-certified-reference-materials.webp",
        gallery: [
          "/images/products/crms/sus-certified-reference-materials.webp",
        ],
        description:
          "Premium SUS Certified Reference Materials designed to provide accurate calibration and quality control for your analytical instruments. These standards are carefully manufactured and certified to ensure the highest level of precision for elemental analysis.",
        features: [
          "Rigorous certification process matching international standards",
          "Excellent homogeneity and long-term stability",
          "Comprehensive certificate of analysis included",
        ],
        specs: {
          "table_type": "grid",
          "categories": {
            "Cu-Based SUS Certified Reference Materials": [
              ["RC33", "RC11", "RC14", "RC38"],
              ["RC36", "RC12", "RC32", ""]
            ],
            "Mg-Based SUS Certified Reference Materials": [
              ["RMg11", "RMg13", "166X MG SUS2", "166X MG SUS4"],
              ["RMg14", "RMg16", "166X MG SUS3", ""]
            ],
            "Zn-Based SUS Certified Reference Materials": [
              ["RZn11", "RZn12", "RZn13", "RZn14"],
              ["RZn15", "RZn16", "", ""]
            ],
            "Fe-Based SUS Certified Reference Materials": [
              ["RH12", "RH31", "RN19", "RE12"],
              ["RE19", "SUS5", "", ""]
            ],
            "Al-Based SUS Certified Reference Materials": [
              ["RA10", "RA18", "RA19", "RA16"],
              ["RA20", "R Al Ce/3", "IARM 220F", "IARM 221A"],
              ["IARM 221B", "IARM 221C", "IARM 221C", ""]
            ],
            "Sn-Based SUS Certified Reference Materials": [
              ["RSn10", "RSn11", "RSn12", "RSn13"],
              ["RSn14", "RSn15", "RSn20", "RSn21"]
            ]
          }
        },
      },
      {
        name: "MBH Certified Reference Materials",
        tagline: "Industry-standard reference blocks for precise calibration",
        image: "/images/products/crms/mbh-certified-reference-materials.webp",
        gallery: [
          "/images/products/crms/mbh-certified-reference-materials.webp",
        ],
        description:
          "MBH Analytical reference materials are globally recognized for their reliability in optical emission and X-ray fluorescence spectroscopy. Ideal for verifying equipment performance and routine quality control.",
        features: [
          "Wide range of base metals and alloys",
          "Strict compositional accuracy",
          "Suitable for OES, XRF, and ICP applications",
        ],
        specs: {
          "table_type": "grid",
          "categories": {
            "Fe-based standard samples: high-phosphorus pig iron, low-alloy, wear-resistant cast iron, corrosion-resistant cast iron, chromium plating, residues in low-carbon steel, low-alloy steel, austenitic stainless steel, martensitic steel, martensite stainless steel, special stainless steel, precipitation hardening steel, high nitrogen stainless steel, high speed steel, high manganese steel, free cutting steel, high nickel steel calibration series.": [
              ["11X 0331-3H", "11X C4S", "11X HPC5A", "12X 12747V", "12X 15256Q"],
              ["11X C1R", "11X C5Y", "11X S/1 Cr3J", "12X 12749X", "12X 15258P"],
              ["11X C10D", "11X C6W", "12X 10180B", "12X 12750U", "12X 15259Q"],
              ["11X C2V", "11X C7P", "12X 10180C", "12X 14072A", "12X 15261X"],
              ["11X 15294W", "11X C8V", "12X 10400A", "12X 15180A", "12X 15266V"],
              ["11X C3AD", "11X C9D", "12X 10550A", "12X 15217R", "12X 15CDV6A"],
              ["11X 20001J", "11X HPC1H", "12X 11572A", "12X 15240A", "12X 16604A"],
              ["11X 20002J", "11X HPC2L", "12X 12700A", "12X 15251U", "12X 19965A"],
              ["11X AR5K", "11X HPC3K", "12X 12701A", "12X 15253T", "12X 19MNVS6A"],
              ["11X 20003K", "11X HPC4Q", "12X 12746V", "12X 15255R", "12X 21590A"],
              ["12X 24065A", "12X 41300A", "12X 722M24A", "131X AGP4B", "132X AGB 85C"],
              ["12X 356D", "12X 41400B", "12X 826M40A", "131X AgSe1A", "132X AGB 87B"],
              ["12X 357D", "12X 41450A", "12X 835M30A", "131X AgSe2A", "132X AGB 88B"],
              ["12X 40CDV12A", "12X 4330VA", "12X 93106A", "131X PAG1A", "132X AGB 90A"],
              ["12X 32550A", "12X 43400A", "12X LA1B", "131X PAG2A", "132X AGB 90B"],
              ["12X 349E", "12X 44220A", "12X LA3C", "132X 925Zn1B", "132X AGB 93B"],
              ["12X 350C", "12X 46150A", "12X LA4C", "132X 925Zn3B", "133X AGA 1A"],
              ["12X 352E", "12X 52986A", "12X LA6D", "132X AGB 100B", "133X AGA 2A"],
              ["12X 354B", "12X 605M36A", "131X AGP2B", "132X AGB 75B", "133X AGA 3A"],
              ["12X 355C", "12X 61500A", "131X AGP3B", "132X AGB 75C", "133X AGQ1 C"],
              ["13X 12853L", "13X 14215L", "13X 15023W", "13X 18003C", "13X 31400A"],
              ["13X 12549L", "13X 14216P", "13X 15024X", "13X 18004B", "13X 31603D"],
              ["13X 12854M", "13X 14219K", "13X 15035U", "13X 19003C", "13X 31635A"],
              ["13X 12538J", "13X 14418A", "13X 17001C", "13X 19004B", "13X 31726A"],
              ["13X 12855N", "13X 14713A", "13X 17002E", "13X 19004C", "13X 32100A"],
              ["13X 14122A", "13X 14742A", "13X 17003A", "13X 21800A", "13X 32101A"],
              ["13X 12540M", "13X 14762A", "13X 17004B", "13X 30300A", "13X 32900A"],
              ["13X 14207L", "13X 14775S", "13X 17005E", "13X 30403B", "13X 34700A"],
              ["13X 14211R", "13X 14828A", "13X 18001B", "13X 30600A", "13X 40900A"],
              ["13X 14212S", "13X 14923A", "13X 18002D", "13X 31008A", "13X 40930A"],
              ["13X PH2S143A", "13X 41001A", "13X 43100A", "13X NSA12A", "13X NSB3G"],
              ["13X PH3", "13X 41008A", "13X 44004B", "13X NSA13A", "13X NSC2Q"],
              ["14X 11170", "13X 41008B", "13X 45500A", "13X NSA2J", "13X NSC4G"],
              ["13X PH7", "13X 41500A", "13X 46500A", "13X NSA4B", "13X NSC5C"],
              ["13X PH4", "13X 41600A", "13X 64152A", "13X NSA7A", "13X NSC6A"],
              ["14X 11390", "13X 41800A", "13X 66286A", "13X NSA7B", "13X NSC7B"],
              ["14X 12144", "13X 42000A", "13X 90901A", "13X NSA8B", "13X PH13800A"],
              ["14X 12130", "13X 42027A", "13X FV520BA", "13X NSA9B", "13X PH17400A"],
              ["14X 14946", "13X 42200A", "13X NSA10A", "13X NSB1D", "13X PH17700A"],
              ["14X 14948", "13X 43020A", "13X NSA11A", "13X NSB2D", "13X PH2M"],
              ["14X FeNi40C", "14X 606M36TA", "14X HS1C", "14X FeNi45C", "14X MSFM 1L"],
              ["14X MN5U", "14X 72305A", "14X MN1AL", "14X FeNi50C", "14X MSFM 3G"],
              ["14X FeNi10A", "14X 93603A", "14X MN2S", "14X FeNi6A", "14X MN5V"],
              ["14X FeNi8A", "14X 94100A", "14X MN3U", "", ""]
            ],
            "Ni-based Certified Reference Materials: nickel residues, nickel-chromium alloys (Nimonic Type), nickel-chromium-iron alloys (Incoloy Type), nickel-chromium-cobalt-molybdenum alloys, Waspalloy alloys, nickel-chromium-niobium-molybdenum alloys, nickel-chromium-molybdenum alloys, nickel-chromium alloys Molybdenum-cobalt alloy, nickel-chromium-iron alloy (Inconel Type), nickel-cobalt-chromium-aluminum-titanium alloy, nickel-chromium-aluminum alloy, nickel-copper alloy (Monel Type), nickel-cobalt-chromium-iron-molybdenum alloy (Hastelloy Type), various nickel alloys, wear-resistant nickel Boron Alloy.": [
              ["212X 04400A", "212X 05500A", "23X DS5E", "28X 6003E", "22X 806"],
              ["215X HC4", "215X HC2", "24X 07001C", "28X 6004E", "215X HC5"],
              ["219X 20004", "212X 4007", "25X 10221F", "28X 6005E", "22X 1052"],
              ["219X 08825A", "22X 904", "26X 11384E", "28X 6251M", "28X 6002F"],
              ["219X 20500C", "23X 08811A", "27X 14184F", "28X 6252Q", "23X DS4"],
              ["215X HB4", "215X HC2", "27X 14188D", "28X 6255M", "215X HB4"],
              ["28X 6001G", "215X 10276A", "27X 14387E", "28X 6256A", "28X 7186K"]
            ],
            "Cu-Based Reference Materials: high-phosphorus pig iron, low-alloy, wear-resistant cast iron, corrosion-resistant cast iron, chromium plating, residues in low-carbon steel, low-alloy steel, austenitic stainless steel, martensitic steel, martensitic stainless steel, Special stainless steel, precipitation hardening steel, high nitrogen stainless steel, highspeed steel, high manganese steel, free cutting steel, high nickel steel calibration series.": [
              ["31X 7835-10A", "31X B23D", "31X HT37A", "32X ALB13A", "32X PB16A"],
              ["31X 7835-9B", "31X B24D", "31X MNB3F", "32X ALB3S", "32X PB20A"],
              ["31X B10M", "31X B29A", "31X MNB5R", "32X ALB5K", "32X SEB1D"],
              ["31X B11M", "31X B3M", "31X MNB6C", "32X ALB6K", "32X SEB2D"],
              ["31X B12G", "31X B3N", "31X NB1H", "32X ALB8F", "32X SEB3E"],
              ["31X B14G", "31X B4N", "31X NB2H", "32X ALB9C", "32X SEB4E"],
              ["31X B13G", "31X B5L", "31X NB3J", "32X CA12A", "32X SEB4F"],
              ["31X B15H", "31X B6K", "31X NB4J", "32X CA7A", "32X SEB5C"],
              ["31X B18K", "31X B7L", "31X TB2J", "32X CSN1", "32X SN1F"],
              ["31X B16H", "31X B8J", "31X TB3L", "32X LB10G", "32X SN3G"],
              ["31X B1Q", "31X B9L", "31X TB4G", "32X LB12E", "32X SN4B"],
              ["31X B21E", "31X BIB2E", "31X TB5B", "32X LB13D", "32X SN6B"],
              ["31X 7835-6A", "31X BIB3C", "31X WSB6F", "32X LB14H", "32X SN7B"],
              ["31X 7835-7A", "31X CZ112A", "32X 51000A", "32X LB15F", "33X 54400A"],
              ["31X 7835-8B", "31X CZ114A", "32X 52100A", "32X LB16A", "33X GM20B"],
              ["31X 7835-3", "31X CZ115A", "32X 52480A", "32X PB11H", "33X GM21B"],
              ["31X 7835-4", "31X CZ121A", "32X 61400A", "32X PB12F", "33X GM24A"],
              ["31X 7835-11A", "31X CZ122A", "32X 93700A", "32X PB13F", "33X GM29A"],
              ["31X 7835-5A", "31X CZ132A", "32X ALB10B", "32X PB14E", "33X GM4AD"],
              ["31X 7835-2", "31X HT31B", "32X ALB12A", "32X PB15A", "33X GM5P"],
              ["37X 218B", "36X CN4L", "36X CN12A", "36X CBC2F", "33X GM7K"],
              ["38X C1B", "36X CN5P", "36X CN13A", "36X CBC3D", "33X GM8H"],
              ["39X 17866AH", "36X CN6J", "36X CN1P", "36X CBC4E", "33X GM9A"],
              ["38X C1C", "36X CN7F", "36X CN21A", "36X CBC5B", "33X RB2B"],
              ["39X 17867AD", "36X CN8J", "36X CN22A", "36X CBC6A", "34X 79830A"],
              ["39X 17868AH", "36X CN9K", "36X CN23A", "36X CCR1E", "36X 274B"],
              ["37X 65500A", "36X SP1A", "36X CN24A", "36X CN10C", "36X 70600A"],
              ["39X 17869AG", "36X SP2A", "36X CN2K", "36X CN11A", "36X 71500A"],
              ["39X 17870AJ", "39X 17871D", "39X 27866A", "39X 27869A", ""]
            ],
            "Zinc-Based Certified Reference Materials: pure zinc residues, impurity zinc, galvanized alloys, zinc manganese, zinc magnesium, zinc nickel &amp; zinc antimony alloys, special alloys, RoHS testing, zinc aluminum alloy, zinc aluminum copper alloy, high Zinc alloy, zinc aluminum alloy coating.": [
              ["41X ZMA4.0A", "41X 0336 Zn1L", "41X 4380 Zn3C", "41X GLV12A", "41X GLV7A"],
              ["41X ZMA5.0A", "41X 0336 Zn2N", "41X 4380 Zn4D", "41X GLV13A", "41X GLV7B"],
              ["41X ZMA3.0A", "41X 0336 Zn3K", "41X 4380 Zn5C", "41X GLV1E", "41X GLV9B"],
              ["41X ZMA2.5", "41X 2951 Zn1A", "41X 4380 Zn6D", "41X GLV2C", "41X Z11A"],
              ["41X ZMA2.0A", "41X 2951 Zn2A", "41X 4380 Zn7D", "41X GLV3C", "41X Z3M"],
              ["41X ZMA1.0A", "41X 2951 Zn3A", "41X CGLF", "41X GLV4F", "41X Z4L"],
              ["41X ZMA1.5", "41X 4380 Zn1D", "41X GLV10A", "41X GLV5B", "41X Z5N"],
              ["41X ZMA0.5A", "41X 4380 Zn2C", "41X GLV11A", "41X GLV6B", "41X Z6A"],
              ["43X GALF4A", "41X ZMn1A", "41X ZSC4A", "42X Z16A", "42X Z7D"],
              ["43X GALF5A", "41X ZNi2A", "41X ZSC6A", "42X Z1J", "42X Z8A"],
              ["43X SC1", "41X ZSb1A", "42X Z10A", "42X Z3K", "42X Z9A"],
              ["43X SC2", "41X ZSC1A", "42X Z11A", "42X Z4J", "43X GALF1A"],
              ["43X SC3", "41X ZSC2A", "42X Z12A", "42X Z7B", "43X GALF2A"],
              ["43X SC4", "41X ZSC3A", "42X Z15A", "42X Z7C", "43X GALF3A"],
              ["44X ZSn15A", "43X Z10A", "43X Z15C", "43X Z2P", "43X Z7A"],
              ["45X ZnAl 7C", "43X Z11F", "43X Z15D", "43X Z3M", "43X Z8A"],
              ["44X ZAl2", "43X Z12E", "43X Z1L", "43X Z4C", "43X Z9A"],
              ["43X Z6", "43X Z13E", "43X Z21D", "43X Z5B", "44X Z5A"],
              ["43X Z23", "43X Z14F", "", "", ""]
            ],
            "Al-Based Certified Reference Sample: Al&amp;Si alloy, Al,Si,Cu alloy, Al&amp;Cu alloy, Al,Cu,Ag alloy, Al,Cu,Si alloy, Al&amp;Zn alloy, Al,Zn,Mg,Cu alloy, Al&amp;Mg alloy, Al&amp;Mn alloy, Al&amp;Sr alloy.": [
              ["54X G06H 4R", "59X G7020", "511X G5083A", "54X G25D 2K 40mm", "56X G250J 2D 40mm"],
              ["54X G231 H3", "59X G7068", "511X G6012", "54X GS20J 1E 40mm", "56X G250J 2D 50mm"],
              ["55X A30J 1J", "59X G77J 6", "511X G6012A", "54X GS20J 1E 50mm", "56X G250J 3C 40mm"],
              ["55X G26H 4D", "51X G00H 2E 50mm", "511X G6023A", "54X GS20J 2E 40mm", "56X G250J 3C 50mm"],
              ["56X G2007A", "511X G10H 4C 40mm", "511X G6026A", "54X GS20J 2E 50mm", "56X G250J 5D 40mm"],
              ["56X G2014A", "514X 9091-1C 40mm", "511X G6065A", "54X GS20J 3D 40mm", "57X G12H 1C 40mm"],
              ["56X G2024A", "511X G3000B 1C 40mm", "511X G6082A", "54X GS20J 3D 50mm", "57X G12H 5G 50mm"],
              ["55X G04H 8K", "511X G3000B 1C 50mm", "511X G6082B", "54X GS20J 4D 40mm", "58X G40H 10C"],
              ["56X G2011A", "511X G3000B 2B 40mm", "511X G6262A", "55X A30J 4G 40mm", "58X G40H 7B 40mm"],
              ["57X AlCu28A", "511X G3000B 4C 50mm", "511X G6262B", "55X A30J 4G 50mm", "58X G40H 7B 50mm"],
              ["56X G2618A", "54X G06H 5L 40mm", "54X G13H 4Q", "55X G02D 10L 50mm", "58X G40H 8B 40mm"],
              ["55X G26H 5E", "54X G13H 1N 40mm", "54X G13H 4R", "55X G02D 6K 50mm", "51X G00H1D 40m"],
              ["57X AlCu25A", "54X G13H 1N 50mm", "55X G02D 8M", "55X G28J 3U 50mm", "55X G04H 6E 40mm"],
              ["57X G12H 2C", "54X G13H 2M 40mm", "55X G02D XB", "55X G28J 5Y 40mm", "55X G04H 6E 50mm"],
              ["57X G12H 3C", "54X G13H 2M 50mm", "55X G02D YA", "55X G900J 1F 50mm", "55X G04H 7E 40mm"],
              ["57X G12H 6A", "54X G06H 3P 50mm", "56X A201.1A", "55X G900J 2G 50mm", "55X G04H 9E 50mm"],
              ["57X G12H 6A", "54X G231 H2C 50mm", "56X G14H 4C", "55X G900J 3F 40mm", "55X G26H 1F 40mm"],
              ["58X G40H 9C", "54X G25D 1L 40m", "55X G04H XA", "55X G900J 3F 50mm", "55X G26H 2F 40mm"],
              ["55X G02D 5", "55X G26H 3F 40mm", "51X G00H 4C", "55X G900J 4F 40mm", "59X G77J 1G 50mm"],
              ["55X A30J 5", "55X G26H 3F 50mm", "51X G00H 5B", "55X G900J 5E 40mm", "59X G77J 2E 50mm"],
              ["54X G13H 4", "55X G28J 1Z 40mm", "54X G25D 3T", "55X G900J 5E 50mm", "59X G77J 3F 50mm"],
              ["54X G231 H1", "55X G28J 1Z 50mm", "54X G25D 4P", "56X G2000J 1C 40mm", "59X G77J 4E 40mm"],
              ["54X G13H 5", "55X G28J 2T 50mm", "54X G25D 6A", "56X G2000J 1C 50mm", "59X G77J 4E 50mm"],
              ["54X G13H 5", "55X G28J 3U 40mm", "55X G02D 7P", "56X G2000J 3C 40mm", "59X G77J 5E 50mm"],
              ["51X G00H 3D", "56X G2000J 5C 40mm", "511X G10H 5B", "56X G2000J 3C 50mm", "51X G00H 2E 40"],
              ["51X A1350A", "56X G2000J 5C 50mm", "511X G05H 2H", "56X G2000J 4C 40mm", "59X G705"],
              ["511X G05H5G", "56X G250J 1C 40mm", "511X G05H 1J", "56X G2000J 4C 50mm", "59X G7"],
              ["59X G7075B", "511X G05H 4F 40m", "", "", ""]
            ],
            "Mg-Based Certified Reference Materials: Residues in pure Mg, Mg&amp;Mn alloy, Mg, Al, Zn alloy, Mg&amp;Al alloy, Mg&amp;Zn alloy, rare earth Mg, Mg&amp;Ag rare earth element alloy, Mg&amp;Y rare earth element alloy.": [
              ["61X MgP2A", "61X MgP5A 40mm", "64X MgQ1A 40mm", "64X MgQ8A 40mm", "65X MgA14B 50mm"],
              ["61X MgP3A", "61X MgP5A 50mm", "64X MgQ1A 50mm", "64X MgQ8A 50mm", "65X MgA15A 40mm"],
              ["61X MgP4A", "61X MgP6A 40mm", "64X MgQ2A 40mm", "64X MgQ9A 40mm", "65X MgA15A 50mm"],
              ["65X MgA1J", "61X MgP6A 50mm", "64X MgQ3A 40mm", "64X MgQ9A 50mm", "65X MgA16A 40mm"],
              ["65X MgA19A 40mm", "63X MgE1E 40mm", "64X MgQ3A 50mm", "65X MgA11B 40mm", "65X MgA16A 50mm"],
              ["65X MgA19A 50mm", "63X MgE1E 50mm", "64X MgQ4A 40mm", "65X MgA12A 40mm", "65X MgA17A 40mm"],
              ["65X MgA20A 40mm", "63X MgE2B 40mm", "64X MgQ6A 40mm", "65X MgA12A 50mm", "65X MgA17A 50mm"],
              ["65X MgA20A 50mm", "63X MgE2B 50mm", "64X MgQ6A 50mm", "65X MgA13A 40mm", "65X MgA18A 40mm"],
              ["65X MgA21A 40mm", "63X MgE3C 40mm", "64X MgQ7A 40mm", "65X MgA13A 50mm", "65X MgA18A 50mm"],
              ["67X MgK3A 40mm", "65X MgA21A 50mm", "65X MgB2D 50mm", "66X MgC4C 50mm", "66X MgD5A 40mm"],
              ["67X MgK3A 50mm", "65X MgB1E 40mm", "65X MgB3C 40mm", "66X MgC5A 40mm", "66X MgD5A 50mm"],
              ["66X MgD1B 50m", "65X MgB1E 50mm", "65X MgB3C 50mm", "66X MgC5A 50mm", "67X MgK2A 40mm"],
              ["66X MgC4C 40m", "65X MgB2C 40mm", "65X MgB4C 40mm", "66X MgD1B 40mm", "67X MgK2A 50mm"]
            ],
            "Sn-Based Certified Reference Sample: Impurity Sn, antimony Sn, Sn-based white alloy, lead-free Sn solder": [
              ["74X CA5B", "71X PB3A", "73X SC12B", "73X SC6A", "74X AMF"],
              ["74X CA7B", "71X PB4A", "73X SC13A", "73X SC7B", "74X BZ1A"],
              ["74X CA8B", "71X SR0D", "73X SC2B", "73X SC8B", "74X CA2C"],
              ["74X CA9A", "71X SR1F", "73X SC4B", "73X SC9B", "74X CA3C"],
              ["74X E", "73X SC11C", "73X SC5A", "74X AB1A", "74X CA4D"],
              ["74X GE1A", "74X HAG", "74X HNE", "74X OAA", "74X WSA"],
              ["74X GE2A", "74X HBG", "74X HNF", "74X TCF", ""]
            ],
            "Pb-based Certified Reference sample: Pb-Sb &amp; Pb-As alloys, Pb-Ag alloys, Pb with impurities, Pb babbitt alloy.": [
              ["85X 0494 Pb2C", "81X PA0.5C", "82X PAG0.9A", "83X PR5H", "84X BA20B"],
              ["85X 0494 Pb3D", "81X PA1.0C", "82X PAG2.5RD", "83X PR5J", "84X BA21B"],
              ["85X 0616 Pb1C", "81X PA10.0C", "83X CU06A", "83X PR7C", "84X BA22B"],
              ["85X CADHC", "81X PA12.5D", "83X PR11A", "83X PR8D", "84X BA23C"],
              ["85X 0616 Pb1D", "81X PA3.5E", "83X PR12B", "84X BA11B", "84X BA2D"],
              ["85X ANTHG", "81X PAs1A", "83X PR1K", "84X BA12D", "84X BA3D"],
              ["85X 2.5LAA", "81X PMg1A", "83X PR2G", "84X BA13B", "84X BA4D"],
              ["85X CADLA", "81X PMg2A", "83X PR3G", "84X BA14A", "84X BA7B"],
              ["85X A16A", "81X PMg3A", "83X PR4H", "84X BA15A", "84X BA8E"],
              ["85X CADLA", "82X PAG0.7A", "83X PR4J", "84X BA1L", "84X BA9C"],
              ["85X CADLA", "81X PA0.5C", "82X PAG0.9A", "83X PR5H", "84X BA20B"],
              ["85X M2", "85X PSb28A", "85X PSn2D", "85X YUMA", "91X S10PD"],
              ["85X MS2X", "85X PSb33A", "85X S744A", "86X PSS1B", "91X S10PR1C"],
              ["85X N35", "85X PSb5G", "85X SASHA", "86X PSS2B", "91X S30PR2C"],
              ["85X PSb10", "85X PSb60A", "85X SB28A", "86X PSS2C", "91X S40PR2D"],
              ["85X PSb12", "85X PSb6A", "85X SM31A", "86X PSS3B", "93X S30APR1C"],
              ["85X PSb24", "85X PSb8B", "85X SSBCA", "86X PSS4C", "93X S30APR3C"],
              ["85X SSCHA ~11mm", "85X SSCHA ~12mm", "85X SSCHA ~13mm", "91X S30PR3C ~10mm", "91X S40PD"],
              ["91X S50PE", "91X S63PJ", "91X S62AG2A", "91X S63PR1G", "91X S63PR2K"],
              ["91X S50PR4", "91X S63PR0C", "91X S63Bi1A", "", ""]
            ]
          }
        },
      },
      {
        name: "BS Certified Reference Materials",
        tagline:
          "Brammer Standard reference materials for metallurgical analysis",
        image: "/images/products/crms/bs-certified-reference-materials.webp",
        gallery: [
          "/images/products/crms/bs-certified-reference-materials.webp",
        ],
        description:
          "Brammer Standard (BS) Certified Reference Materials are essential for establishing the analytical traceability of solid metal analyses. Our supply covers various matrices to suit your testing requirements.",
        features: [
          "Broad matrix applicability",
          "High confidence interval in certified values",
          "Durable physical form for repeated sparking",
        ],
        specs: {
          "table_type": "grid",
          "categories": {
            "BS Certified Reference Sample": [
              ["BS 180B XRF", "BS 173", "BS 171D", "BS 161A XRF", "BS 155"],
              ["BS 180B", "BS 173 XRF", "BS 172A", "BS 161B", "BS 155 XRF"],
              ["BS 180A XRF", "BS 17-4PHA XRF", "BS 172A 10mm", "BS 161B XRF", "BS 156"],
              ["BS 179A XRF", "BS 17-4PHB", "BS 172A 14mm", "BS 17 (U)", "BS 156 XRF"],
              ["BS 1762", "BS 17-4PHB XRF", "BS 172B", "BS 171B", "BS 15A"],
              ["BS 180A ~10mm", "BS 17-4PHC", "BS 172Be-1 ~10mm", "BS 171B ~10mm", "BS 160A"],
              ["BS 180A ~12mm", "BS 17-4PHC XRF", "BS 172Be-1 ~11mm", "BS 171B ~13mm", "BS 160A XRF"],
              ["BS 179B", "BS 17500 10mm", "BS 172Be-1 XRF", "BS 171B ~17mm", "BS 160B"],
              ["BS 180A ~45mm", "BS 17500 12mm", "BS 172Be-2", "BS 171B ~41mm", "BS 160B XRF"],
              ["BS 17510A XRF", "BS 17510", "BS 172Be-2 XRF", "BS 171C", "BS 161A"],
              ["BS 179C", "BS 173", "BS 171D", "BS 161A XRF", "BS 155"],
              ["BS 17A", "BS 173 XRF", "BS 172A", "BS 161B", "BS 155 XRF"],
              ["BS 179C XRF", "BS 17-4PHA XRF", "BS 172A 10mm", "BS 161B XRF", "BS 156"],
              ["BS 101/2", "BS 0021", "BS 0022 XRF", "BS 1005", "BS 1009 XRF"],
              ["BS 101/3", "BS 0021 XRF", "BS 02H", "BS 1005 XRF", "BS 100A"],
              ["BS 101/4", "BS 0022", "BS 03D", "BS 1009", "BS 101/1"],
              ["BS 150", "BS 130/2", "BS 10V XRF", "BS 1030 ~15mm", "BS 101/5"],
              ["BS 150 XRF", "BS 130/3", "BS 110B XRF", "BS 1030 ~17mm", "BS 1016"],
              ["BS 151", "BS 140/1", "BS 110C", "BS 1030 XRF", "BS 1016 XRF"],
              ["BS 151 XRF", "BS 140/2", "BS 110C XRF", "BS 1035", "BS 1018"],
              ["BS 152", "BS 140/3", "BS 1144", "BS 1035 XRF", "BS 1018 XRF"],
              ["BS 152 XRF", "BS 140/4", "BS 1144 ~16mm", "BS 104", "BS 1020"],
              ["BS 153", "BS 14500", "BS 1144A", "BS 1045", "BS 1020 XRF"],
              ["BS 153 XRF", "BS 14500 XRF", "BS 1144A XRF", "BS 1045 XRF", "BS 1026"],
              ["BS 154", "BS 14500A", "BS 119", "BS 104A", "BS 1026 XRF"],
              ["BS 154 XRF", "BS 14500A XRF", "BS 130/1", "BS 105", "BS 1030"],
              ["BS 20G", "BS 197A XRF", "BS 189A", "BS 185A", "BS 18150"],
              ["BS 2507", "BS 197B", "BS 189A XRF", "BS 185A XRF", "BS 18150 XRF"],
              ["BS 20R", "BS 197B XRF", "BS 190", "BS 186A", "BS 18150A"],
              ["BS 224", "BS 1982", "BS 190 XRF", "BS 186A ~12mm", "BS 18150A XRF"],
              ["BS 2205A XRF", "BS 1982 XRF", "BS 191", "BS 186A XRF", "BS 181A XRF"],
              ["BS 2205A", "BS 199B", "BS 191 XRF", "BS 186B", "BS 181B"],
              ["BS 2017", "BS 199B XRF", "BS 192", "BS 186B XRF", "BS 181B XRF"],
              ["BS 2205 XRF", "BS 19A", "BS 192 XRF", "BS 187A XRF", "BS 182 XRF"],
              ["BS 214", "BS 200-1", "BS 192A", "BS 187B", "BS 183A"],
              ["BS 20P", "BS 200-2", "BS 192A XRF", "BS 187B XRF", "BS 183A XRF"],
              ["BS 213", "BS 200-3", "BS 193", "BS 187C 12mm", "BS 183B"],
              ["BS 2024", "BS 200-4", "BS 193 XRF", "BS 187D", "BS 183B XRF"],
              ["BS 207", "BS 200A", "BS 1931 XRF", "BS 187D XRF", "BS 183C"],
              ["BS 20E", "BS 200A XRF", "BS 1962 XRF", "BS 188B", "BS 183C XRF"],
              ["BS 20W", "BS 2011", "BS 197A", "BS 188B XRF", "BS 184A"],
              ["BS 2507 XRF", "BS 291FD", "BS 316F", "BS 34D XRF", "BS 38C XRF"],
              ["BS 253", "BS 291FE", "BS 316F XRF", "BS 355", "BS 3931 XRF"],
              ["BS 253 XRF", "BS 291FF", "BS 317L", "BS 355 XRF", "BS 3932 XRF"],
              ["BS 254", "BS 291FG", "BS 317L XRF", "BS 35D", "BS 3941"],
              ["BS 254 XRF", "BS 291FH", "BS 321D", "BS 35D XRF", "BS 3941 XRF"],
              ["BS 285BD", "BS 2932 XRF", "BS 321D XRF", "BS 360A XRF", "BS 3942"],
              ["BS 285BE", "BS 2971", "BS 32C XRF", "BS 360B", "BS 3942 XRF"],
              ["BS 285BF", "BS 2971 XRF", "BS 32D", "BS 360B XRF", "BS 3952"],
              ["BS 285BG", "BS 300", "BS 32D XRF", "BS 360C", "BS 3952 XRF"],
              ["BS 285BH", "BS 300 XRF", "BS 3310", "BS 360C XRF", "BS 3961"],
              ["BS 286CA", "BS 300A", "BS 33D", "BS 360D", "BS 3961 XRF"],
              ["BS 286CB", "BS 300A XRF", "BS 33E", "BS 360D XRF", "BS 3962"],
              ["BS 286CC", "BS 303", "BS 33E XRF", "BS 36C XRF", "BS 3962 XRF"],
              ["BS 286CD", "BS 303 XRF", "BS 33F", "BS 36D", "BS 3993"],
              ["BS 286CE", "BS 304B", "BS 33F XRF", "BS 36D XRF", "BS 3993 XRF"],
              ["BS 286CE", "BS 304B XRF", "BS 347A", "BS 37D", "BS 39B"],
              ["BS 286CG", "BS 309", "BS 347B", "BS 37D XRF", "BS 39B XRF"],
              ["BS 286CH", "BS 309 XRF", "BS 347B XRF", "BS 37G", "BS 400-1"],
              ["BS 286CI", "BS 30D", "BS 347C", "BS 37G XRF", "BS 400-2"],
              ["BS 291FC", "BS 30D XRF", "BS 347C XRF", "BS 38C", "BS 400-3"],
              ["BS 400C", "BS 4140C", "BS 431A XRF", "BS 46B XRF", "BS 4942"],
              ["BS 4140B ~12mm", "BS 4140C XRF", "BS 4330MOD", "BS 47A", "BS 4942 XRF"],
              ["BS 4140A XRF", "BS 4150MOD XRF", "BS 4330MOD XRF", "BS 47A XRF", "BS 4942A"],
              ["BS 400C XRF", "BS 4150MOD-A", "BS 4340", "BS 47B", "BS 4942A XRF"],
              ["BS 4140A ~12mm", "BS 4150MOD-A XRF", "BS 4340 XRF", "BS 47B XRF", "BS 500E"],
              ["BS 4130 XRF", "BS 416", "BS 4340A", "BS 4820 XRF", "BS 500E XRF"],
              ["BS 4130", "BS 416 XRF", "BS 4340A XRF", "BS 4820A", "BS 50D"],
              ["BS 400D", "BS 41A", "BS 4340M XRF", "BS 4820A XRF", "BS 50D XRF"],
              ["BS 410C", "BS 41A XRF", "BS 43A", "BS 482A", "BS 50F XRF"],
              ["BS 410C XRF", "BS 42", "BS 43A XRF", "BS 482A XRF", "BS 50G"],
              ["BS 405", "BS 42 XRF", "BS 450", "BS 485A", "BS 510A"],
              ["BS 41", "BS 422", "BS 45B", "BS 485A XRF", "BS 510A XRF"],
              ["BS 405A", "BS 422 XRF", "BS 45B XRF", "BS 48B", "BS 510B"],
              ["BS 41 XRF", "BS 42A", "BS 4620", "BS 48B XRF", "BS 510B XRF"],
              ["BS 400D XRF", "BS 42A XRF", "BS 4620 XRF", "BS 49", "BS 510C"],
              ["BS 400-SS-16", "BS 430", "BS 464A", "BS 49 XRF", "BS 510C XRF"],
              ["BS 40B XRF", "BS 430 XRF", "BS 464A XRF", "BS 4931 XRF", "BS 51E XRF"],
              ["BS 40B", "BS 431", "BS 464B", "BS 4932 XRF", "BS 51F"],
              ["BS 405A XRF", "BS 431 XRF", "BS 464B XRF", "BS 4941", "BS 51F XRF"],
              ["BS 405 XRF", "BS 431A", "BS 46B", "BS 4941 XRF", "BS 52D ~ 15mm"],
              ["BS 52D ~ 16mm", "BS 56E XRF", "BS 624", "BS 642C XRF", "BS 675A"],
              ["BS 52D ~ 17mm", "BS 57F XRF", "BS 624 XRF", "BS 642D", "BS 675A ~12mm"],
              ["BS 52D ~ 18mm", "BS 58C", "BS 6255", "BS 642D XRF", "BS 675A XRF"],
              ["BS 52D XRF", "BS 58D XRF", "BS 6255 XRF", "BS 64C", "BS 675B"],
              ["BS 53E XRF", "BS 58E", "BS 625D XRF", "BS 64C XRF", "BS 675B XRF"],
              ["BS 53G", "BS 58E XRF", "BS 625E", "BS 655A", "BS 67B XRF"],
              ["BS 53G XRF", "BS 600-2", "BS 625E XRF", "BS 655A 12mm", "BS 67C"],
              ["BS 53MOD", "BS 600-2 ~12mm", "BS 625F", "BS 655A XRF", "BS 67C XRF"],
              ["BS 53MOD XRF", "BS 600-3", "BS 625F XRF", "BS 655B", "BS 68B"],
              ["BS 544A XRF", "BS 600-4", "BS 630A XRF", "BS 655B XRF", "BS 68B 15mm"],
              ["BS 544B", "BS 600-5", "BS 630B", "BS 655C", "BS 68B 18mm"],
              ["BS 544B XRF", "BS 600-5 XRF", "BS 630B XRF", "BS 655C XRF", "BS 68C XRF"],
              ["BS 544C", "BS 600-6", "BS 630C", "BS 65C XRF", "BS 68E"],
              ["BS 544C XRF", "BS 600-6 XRF", "BS 630C XRF", "BS 66B", "BS 68E XRF"],
              ["BS 54H", "BS 6061", "BS 6418", "BS 66B XRF", "BS 690A"],
              ["BS 55E XRF", "BS 60E XRF", "BS 6418 XRF", "BS 66L", "BS 690A XRF"],
              ["BS 55F XRF", "BS 617", "BS 642A XRF", "BS 66L XRF", "BS 690B"],
              ["BS 55G", "BS 623", "BS 642B", "BS 675", "BS 690B XRF"],
              ["BS 55G XRF", "BS 623A", "BS 642B XRF", "BS 642C XRF", "BS 69B"],
              ["BS 56E", "BS 623A XRF", "BS 642C", "BS 642D", "BS 69B XRF"],
              ["BS 932G XRF", "BS 706A", "BS 73C XRF", "BS 836B XRF", "BS 8822 XRF"],
              ["BS 932H", "BS 706A XRF", "BS 74B XRF", "BS 836C", "BS 903B XRF"],
              ["BS 932H XRF", "BS 706B", "BS 74C", "BS 836C XRF", "BS 903D"],
              ["BS 936", "BS 706B XRF", "BS 74C XRF", "BS 836D", "BS 903E"],
              ["BS 936 XRF", "BS 706C", "BS 74D", "BS 836D XRF", "BS 903E XRF"],
              ["BS 937C", "BS 706C XRF", "BS 74D XRF", "BS 83G", "BS 905A-1"],
              ["BS 937C XRF", "BS 7075", "BS 74E XRF", "BS 83G XRF", "BS 905A-2"],
              ["BS 938-1", "BS 70B", "BS 750A XRF", "BS 857B-1", "BS 905A-3"],
              ["BS 93E XRF", "BS 70B XRF", "BS 750C", "BS 857B-2", "BS 905A-4"],
              ["BS 93F", "BS 70C", "BS 750C XRF", "BS 857B-3", "BS 90F"],
              ["BS 93F XRF", "BS 70C XRF", "BS 750D", "BS 857B-4", "BS 90F XRF"],
              ["BS 9-4-30", "BS 715A", "BS 750D XRF", "BS 85D", "BS 91E XRF"],
              ["BS 9-4-30 XRF", "BS 715A XRF", "BS 75F XRF", "BS 85D XRF", "BS 922B-1"],
              ["BS 94C", "BS 715B", "BS 75G", "BS 8620A XRF", "BS 922B-2"],
              ["BS 94C XRF", "BS 715B XRF", "BS 75G XRF", "BS 8620F", "BS 922B-4"],
              ["BS 955B", "BS 715C", "BS 800A", "BS 8620F XRF", "BS 922B-5"],
              ["BS 954A XRF", "BS 715C XRF", "BS 800A XRF", "BS 8630", "BS 925"],
              ["BS 955C XRF", "BS 718D", "BS 800B", "BS 863A XRF", "BS 925 XRF"],
              ["BS 955C", "BS 718D XRF", "BS 800B XRF", "BS 863B", "BS 925A"],
              ["BS 954C", "BS 725", "BS 81P XRF", "BS 863B XRF", "BS 929"],
              ["BS 954C XRF", "BS 725 XRF", "BS 825E XRF", "BS 86F", "BS 929 XRF"],
              ["BS 954B", "BS 72B", "BS 825F", "BS 86F XRF", "BS 92B XRF"],
              ["BS 954B XRF", "BS 72B XRF", "BS 825F XRF", "BS 8740", "BS 9325 XRF"],
              ["BS 932G", "BS 73B", "BS 82E", "BS 8740 XRF", "BS 9325A"],
              ["BS 95A XRF", "BS 73B ~17mm", "BS 82E XRF", "BS 87F", "BS 932F"],
              ["BS 9621", "BS 73C", "BS 836B", "BS 87F XRF", "BS 932F ~11mm"],
              ["BS 9621 XRF", "BS BOX", "BS CSN 2-2", "BS H1B XRF", "BS LC-7B"],
              ["BS 9622 XRF", "BS C-2000", "BS CSN A", "BS H1C", "BS LC-7C SUS"],
              ["BS 9621 XRF", "BS C-2000 XRF", "BS CSN-2C", "BS H1C XRF", "BS LF2B"],
              ["BS 96A XRF", "BS CA304-1 XRF", "BS CU-22", "BS H230", "BS LF2B XRF"],
              ["BS 96A XRF", "BS CA304-4", "BS Cu997", "BS H230 XRF", "BS LF3"],
              ["BS 98 XRF", "BS CC-11", "BS D-6", "BS H230A", "BS LF3 XRF"],
              ["BS 9811", "BS CC-11A", "BS D-6 XRF", "BS H230A XRF", "BS M-47"],
              ["BS 9812", "BS CC-11B", "BS D-6A", "BS H2C", "BS M-47 XRF"],
              ["BS 9841", "BS CC-23", "BS D-6A XRF", "BS H2C XRF", "BS M-50"],
              ["BS 9841 XRF", "BS CC954", "BS DNR-1", "BS H2D ~15mm", "BS M-50 XRF"],
              ["BS 9842 XRF", "BS CD4MCU", "BS DNR-2", "BS H2E", "BS MOLY-5"],
              ["BS 9905A", "BS CD4MCU-A", "BS FeTi-1", "BS H2E XRF", "BS MP35N"],
              ["BS 9905A XRF", "BS CE 206", "BS FeTi-2", "BS H3C", "BS NI-18"],
              ["BS 9941", "BS CE 207", "BS FeV 42", "BS H3C XRF", "BS PB-BI-7"],
              ["BS 9941 XRF", "BS CE 208", "BS FeV 45", "BS H6B", "BS PM15"],
              ["BS 9942", "BS CE 209", "BS G30", "BS H6B XRF", "BS PP20"],
              ["BS 9942 XRF", "BS CE 216", "BS G30 XRF", "BS H8 XRF", "BS PP20 XRF"],
              ["BS A-10", "BS CE 217", "BS H-13A", "BS HAS-12", "BS RESUL-4"],
              ["BS A-10 XRF", "BS CE 219", "BS H-13A XRF", "BS HICAL-1", "BS SiMn-1"],
              ["BS A-11", "BS CE 24", "BS H-19", "BS HON-U", "BS SLAG 2"],
              ["BS A-11 XRF", "BS CE 26", "BS H-19 XRF", "BS HPN-1", "BS SP-5"],
              ["BS A485-1", "BS CS-10", "BS H1B", "BS LAS-24", "BS SP-A"],
              ["BS A485-1 XRF", "BS CSN 2-1", "BS H1B ~12mm", "BS LC-7A", "BS SP-A (Disc)"],
              ["BS SP-C", "BS SU 1018F", "BS SU 750", "BS SU LAS-13/2", "BS TRM-4"],
              ["BS SP-B", "BS SU 11L17", "BS SU 8620 MOD", "BS SU LAS-14", "BS TS15"],
              ["BS SP-D", "BS SU 2507", "BS SU 8620 MOD BAR", "BS SU LF-1", "BS TS15 XRF"],
              ["BS SS-17", "BS SU 304", "BS SU 8620A", "BS SU LF-2", "BS TS-18"],
              ["BS SS1961", "BS SU 304 BAR", "BS SU 8620A BAR", "BS SU LF-2A", "BS TS-7 XRF"],
              ["BS SS1962", "BS SU 309", "BS SU 863", "BS SU LF-3", "BS TS-7A"],
              ["BS SS1962 XRF", "BS SU 316L-A", "BS SU 8740", "BS T-22 10mm", "BS WI-1"],
              ["BS SS3951", "BS SU 321", "BS SU 9310", "BS T-22 12mm", "BS WI-2"],
              ["BS SS3951 ~14mm", "BS SU 321A", "BS SU 9310A", "BS T-22 16mm", "BS XCAS"],
              ["BS SS4951", "BS SU 321B", "BS SU 932", "BS T-24", "BS XCCS-2"],
              ["BS SS4951 ~12mm", "BS SU 347", "BS SU 932A", "BS T-24A", "BS XCCT"],
              ["BS SS4951 ~16mm", "BS SU 410", "BS SU 932B", "BS T-24A ~12mm", "BS XCCT XRF"],
              ["BS SS4951 XRF", "BS SU 4130A", "BS SU 936", "BS T-4A", "BS XCCV"],
              ["BS SS4952", "BS SU 41L40", "BS SU 936A", "BS T-4A 12mm", "BS XCCV XRF"],
              ["BS SS4952 XRF", "BS SU 420", "BS SU 936B", "BS TH-11 XRF", "BS TRM-3"],
              ["BS SU 1018C", "BS SU 4340", "BS SU CCD", "BS TH-12 XRF", "BS SU H230"],
              ["BS SU 1018C ~80mm", "BS SU 4620", "BS SU Cu1", "BS TM1 XRF", "BS SU 625"],
              ["BS SU 1018", "BS SU 464", "BS SU D2", "BS TRM-1", "BS SU 1018E ~40m"],
              ["BS SU 1018", "BS SU 4820", "BS SU E52100", "BS TRM-2A", "BS TRM-2A ~5 INCH"],
              ["BS SU 1018E ~25m", "BS SU 4942", "BS SU E52100 BAR", "", ""]
            ]
          }
        },
      },
      {
        name: "ARMI Certified Reference Materials",
        tagline: "Advanced reference standards for accurate metal testing",
        image: "/images/products/crms/armi-certified-reference-materials.webp",
        gallery: [
          "/images/products/crms/armi-certified-reference-materials.webp",
        ],
        description:
          "ARMI Certified Reference Materials provide highly accurate elemental compositions. These standards are crucial for laboratories seeking to maintain strict quality assurance and control over their metallurgical processes.",
        features: [
          "Extensive inter-laboratory testing",
          "Detailed compositional breakdown",
          "Ideal for checking instrument drift",
        ],
        specs: {
          "table_type": "grid",
          "categories": {
            "General": [
              ["1S CAF/CAI", "462 AI/AA", "2017 AC/CAB", "3104 AR"],
              ["161 CAH", "1050 AJ", "2018 AB/CAC", "3105 AG/AH/CAI"],
              ["354.0 CAB", "1100 AK/AY", "2024 AF/CAE", "3203 AG/CAX"],
              ["356.2 AW/CAU/DAO", "1145 AE", "2219 AC/CAB", "3204 AA"],
              ["356.2 CAB", "1170 AM", "2618 AC/CAB", "4002 AB/AD/CAC"],
              ["385.1 AB/CAC", "1188 AD/AE", "3003 AJ/AI/AIC", "4007 AA"],
              ["425 AI/AA", "1200 AJ", "3004 AO/CAN", "4104 AE/CAD"],
              ["443.2 AC/CAB", "2007 CAB", "3005 AC/AD/CAF", "4145 AB"],
              ["339.0 AD/CAB", "2011 AC/CAB", "3102 AD/CAF", "4147 AA"],
              ["332.0 AB/CAC", "2014 AE/CAC", "3104 AT/CAP/DAS", "4343 AF/CAG"],
              ["6365 AB", "4643 AD/CAC", "5082 AA/CAB", "6066 AA"],
              ["6392 AC", "5000 CAB", "5083 AF/CAE", "6052 CAE"],
              ["6201 AD", "5001 BI/CBG", "5251 AF/CAE", "6061 AR/CAS/DAO"],
              ["6363 AC", "5005 AG/CAF", "5454 AC/CAD", "5063 BD/CBB/CBF"],
              ["6351 AM/CAC", "5010 AE/CAF", "5457 AB", "6066 AF/CAG"],
              ["6348 AC/CAD", "5016 AA", "5754 CAF", "6070 AC/CAB"],
              ["6252 AE/CAC", "5017 AB/CAC/CAD", "6005 AB", "6082 AA"],
              ["6205 AA", "5042 AC/CAF", "6006 AB/AC/CAD", "6111 AE"],
              ["6261 AD/CAB", "5052 AD/CAD/DAK", "6008 AA", "6151 AE/AB"],
              ["6295 AB", "5056 AD/CAC", "6012 AF", "6195 AE"],
              ["HP FL/FK", "6463 AC", "8079 CAE/AF", "CDA 510"],
              ["LIM G/E", "6475 CAB", "8081 CAB", "CDA 655"],
              ["PROC BI/AL", "7010 CAD/AC", "8112 AA", "CDA 903"],
              ["PROF AI/BL/CI/D1", "7004 AA", "8280 CAC", "CDA 955"],
              ["X332.0 AC", "7003 CAB/AC", "A320 CAB/AC", "Ferrochromium Powder"],
              ["X1100 AH", "7018 CAB", "A333.0 CAH/AI", "Ferromanganese Powder"],
              ["X1120 AC", "7019 AA", "A355.0 CAA", "Ferrosilicon Powder"],
              ["X3003 AD/CAE", "7021 CAB/AA", "A380.2 CAC/AD", "Ferroboron Powder"],
              ["X3005 AB/CAC", "7022 AC", "A390.1 AA", "Leaded Brass"],
              ["X3012 AA", "7031 CAB/AA", "A413.2 CAE/AD", "Lead with Impurities"],
              ["X4002 AA/CAB", "7075 CAE/CAD/AE", "A535.0 CAX/AA", "Lead with Impurities"],
              ["X4045 AC/CAB", "7079AA", "A1200 AA", "Lead Alloy"],
              ["X4343 AA", "7146 CAE/CAD/AA", "A5154 CAB/AA", "Lead/Antimony Alloy"],
              ["X5754 AE", "8006 CAF", "A6005 CAF/AG", "Lead/Tin Alloy"],
              ["X5754 CAF", "8007 CAF", "A6181 CAB/AA", "Precipitation Hardening Steel"],
              ["AISI86L20 G86200", "8008 CAD/AC", "A8011 AC", "Nitrogen Stainless Steel"],
              ["Alloy 718 N07718", "8015 CAB/AA", "B206 AA", "Monel 450-CDA715"],
              ["Alloy N-155 R30155", "8018 AB", "B319.1 CAG/AF", "Si BronzeCDA 647 type"],
              ["Alloy S,N06635", "8021 AA", "B320 CAB/AA", "M-2 Tool Steel"],
              ["CDA 360", "8030 AC", "F35 AA", "S-7 Tool Steel"],
              ["AA A319.0", "Low Alloy Steel", "High N Stainless", "F9 Steel,9Cr1Mo"],
              ["Lead-free Tin Solder", "Austenitic Stainless Steel", "Precipitation Hardening Steel", "Stainless AISI15-5PH"],
              ["Cast lron 11XCo", "Stainless Steel", "Copper,Magnolia B1,C89320", "Carbon Steel AISI1020"],
              ["High P Cast lron", "High N Stainless", "CDA/15", "Carbon Steel AISI1050"],
              ["Zn Alloy", "High Purity Al SUS", "CDA486", "Tin with impurities"],
              ["Pb&amp;Sb Alloy", "Al SUS", "CDA 954", "Al/Slicon/Copper alloy"],
              ["CDA 642", "Leaded Bronze", "Chromium Steel", "Zinc/Aluminum alloy"],
              ["CDA 172", "Sebiloy-Envirobrass", "Lead Babbitt", "Leaded brass"],
              ["Cast lron", "Naval Brass-CDA485", "Lead/Antimony alloy", "Residuals in Mild Steel"],
              ["Nitrogen Steel Brass", "P/Bronze B-2-CDA 544", "Lead/Antimony alloy", "Low Alloy Steel"],
              ["Pb Brass Gun Metal", "Bearing Bronze-CDA932", "Lead/Antimony alloy", "Ferritic Stainless Steel"],
              ["Residuals in Copper", "SUS Pure lron", "Lead/Calcium", "Manganese Steel"],
              ["Aluminum/Silicon", "Hiduron 130", "Lead/Calcium", "Lead with Impurities"],
              ["Mg Al Zn alloy", "Hiduron 191", "Lead battery alloy", "High-Ni Stainless steel"],
              ["Mg Grade AZ91D", "Ni alloy 617", "AISI 303", "Titanium 6-4"],
              ["Sn-Base Pb Free Solder", "AM powder Ti6-/4", "AISI 304L", "Titanium 6-4 ELI"],
              ["AISI M62", "AM powder Ni718", "AISI 316L", "Alloy 725"],
              ["Low Alloy T23", "AM powder Fe316L", "Zeron 100", "Stellite 6B"],
              ["Grade P92", "Kovar", "Alloy B-2", "Elgiloy"],
              ["Grade 91", "AISI 17-4PH", "Haynes 230", "Alloy 825"],
              ["Aermet 100", "E9310", "Alloy 601", "Alloy 244H"],
              ["Dual Phase 1080", "Tool Steel T-1", "CLA6", "AISI 17-7PH"],
              ["Ni Alloy 925", "Aluminum 6061", "CLA7", "AISI 410"],
              ["AISI 5140H", "Hastelloy B3", "AISI 1118", "Nitronic 50"],
              ["AISI 4820", "Alloy 214", "Grade A615-75", "Greek Ascoloy"],
              ["AISI 8620", "Ni Alloy", "Nitronic 60", "AIS1304H"],
              ["Ti 6-6-2", "Waspaloy", "PH13-8Mo", "Alloy 945X"],
              ["Ti4-2.5-1.5", "Ni 690", "A286", "Alloy 740"],
              ["Zircadyne 702", "Ni 282", "Grade A706-80", "Alloy 686"],
              ["Zircadyne 705", "Ni 25-6Mo", "Grade A706-60", "Alloy 693"],
              ["Ni alloy PE16", "Titanium 6-2-4-2", "AISI H-11", "Alloy 028"],
              ["Ni alloy 909", "Titanium 10-2-", "AISI8740", "Alloy 2205"],
              ["Ni alloy C-276", "Ni alloy 617", "AIS18740", "Titanium 6-4"],
              ["Mg Grade AZ91D", "AM powder Ti6-/4", "Alloy K500", "Titanium 6-4 ELI"],
              ["Alloy 20", "AISI 1045", "AISI347", "AISI 4140"],
              ["AL 6XN", "AISI4820", "AISI321", "Custom 450"],
              ["Haynes 230", "AISI4130", "Custom 465", "AISI 430FS"],
              ["Alloy X750", "AISI4330M", "Alloy 255", "AISI 420FS"],
              ["Alloy 718", "AISIE52100", "AISI321", "AISI 1141"],
              ["Alloy 625", "5Cr %Mo", "AISI 44OF Se", "AISI 1118"],
              ["Alloy 600", "AISI4340", "AISI 301", "CDA 976"],
              ["Alloy 400", "AISI4140", "AISI 303Se", "Alloy C-22HS"],
              ["Ni 200", "CPIron", "CDA 630", "CDA 482"],
              ["A36", "AISI347", "AISI D-2", "CDA 110"],
              ["Ti Grade 12", "AL6XN", "AISI 310", "Grade 11/4Cr1/2Mo"],
              ["Ti 15-3-3-3", "QA 10 SUS", "Ti 5-2.5", "Grade 1018"],
              ["Ti Grade 7", "Grade 21/4 Cr1Mo", "Aloy 625", "AISI 310"],
              ["Ti6-7", "Grade 11/4Cr1/2Mo", "Ti 2-1.5", "Ti 5-2.5"],
              ["AISI 8740", "Grade 1018", "Grade 21/4Cr,1Mo", "Alloy 625"],
              ["Haynes HR-120 Alloy", "Ti 2-1.5", "Ti6-7", "AIS1310"],
              ["Ti 8-1-1", "TiCP4", "", ""]
            ]
          }
        },
      },
      {
        name: "ALCOA Certified Reference Materials",
        tagline: "Specialized reference materials for aluminum alloys",
        image: "/images/products/crms/alcoa-certified-reference-materials.webp",
        gallery: [
          "/images/products/crms/alcoa-certified-reference-materials.webp",
        ],
        description:
          "ALCOA Certified Reference Materials are specifically developed for the aluminum industry. They offer precise calibration standards for testing primary aluminum and aluminum-based alloys.",
        features: [
          "Tailored for aluminum matrices",
          "High precision for trace elements in Al alloys",
          "Trusted by major aluminum manufacturers",
        ],
        specs: {
          "table_type": "grid",
          "categories": {
            "ALCOA Certified Reference Materials": [
              ["AA Alu-H2", "AA AN-1", "AA AN-11", "AA AN-12", "AA AN-2"],
              ["AA AN-3", "AA AN-4", "AA BE-1", "AA BE-2", "AA BN-1"],
              ["AA BN-11", "AA BN-2", "AA C7489", "AA C7639", "AA C8095"],
              ["AA BN-12", "AA BN-3", "AA C7510", "AA C7641", "AA C8096"],
              ["AA BN-13", "AA BN-4", "AA C7514", "AA C7857", "AA C8209"],
              ["AA BN-14", "AA BN-5", "AA C7548", "AA C8016", "AA CA-1"],
              ["AA CA-11", "AA CA-4", "AA Chip Regular", "AA CU-3", "AA E1273"],
              ["AA CA-12", "AA CA-4", "AA Chip Setup", "AA CU-7", "AA FE-10"],
              ["AA CA-13", "AA CD-1", "AA Chip SS-390", "AA Custom 1-10", "AA FE-11"],
              ["AA CA-14", "AA CD-2", "AA CO-1", "AA D1072", "AA FE-12"],
              ["AA CA-15", "AA CD-3", "AA CO-2", "AA D1073", "AA FE-4"],
              ["AA CA-2", "AA CD-4", "AA CU-1", "AA D1074", "AA FE-6"],
              ["AA CA-3", "AA Chip Binary", "AA CU-2", "AA D1075", "AA FE-7"],
              ["AA KB-319", "AA KA-518", "AA KA-380", "AA KA-319", "AA FE-8"],
              ["AA KB-354", "AA KA-520", "AA KA-383", "AA KA-354", "AA FE-9"],
              ["AA KB-355", "AA KA-A332", "AA KA-390", "AA KA-355", "AA KA-213"],
              ["AA KB-356", "AA KB-213", "AA KA-413", "AA KA-356", "AA KA-222"],
              ["AA KB-360", "AA KB-242", "AA KA-443", "AA KA-358", "AA KA-242"],
              ["AA KB-380", "AA KB-295", "AA KA-514", "AA KA-360", "AA KA-295"],
              ["AA NA-14", "AA LI-2397", "AA LI-1", "AA KC-413", "AA KB-413"],
              ["AA NA-15", "AA LI-3", "AA LI-2", "AA KC-443", "AA KB-443"],
              ["AA NA-2", "AA LI-4", "AA LI-2055", "AA KD-360", "AA KB-514"],
              ["AA NA-3", "AA LI-5", "AA LI-2060", "AA KD-380", "AA KB-520"],
              ["AA NA-4", "AA LI-6", "AA LI-2090", "AA KE-360", "AA KC-319"],
              ["AA NA-5", "AA LI-8090", "AA LI-2095", "AA KE-380", "AA KC-354"],
              ["AA NI-4", "AA NA-1", "AA LI-2097", "AA KF-380", "AA KC-355"],
              ["AA NI-5", "AA NA-11", "AA LI-2099", "AA KG-380", "AA KC-356"],
              ["AA P-1", "AA NA-12", "AA LI-2195", "AA KH-380", "AA KC-360"],
              ["AA SI-1", "AA NA-13", "AA LI-2199", "AA KJ-380", "AA KC-380"],
              ["AA SS-3004 XRF", "AA SS-2055 XRF", "AA SS-1050", "AA SMD3A", "AA SI-2"],
              ["AA SS-300", "AA SS-206", "AA SS-1075", "AA SQ-10", "AA SI-3"],
              ["AA SS-30", "AA SS-208", "AA SS-1100", "AA SQ-11", "AA SI-4"],
              ["AA SS-310", "AA SS-2117", "AA SS-1100 XRF", "AA SQ-12", "AA SI-5"],
              ["AA SS-310", "AA SS-2219", "AA SS-1188", "AA SQ-13", "AA SI-6"],
              ["AA SS-310", "AA SS-2324", "AA SS-201", "AA SQ-14", "AA SI-7"],
              ["AA SS-31", "AA SS-238", "AA SS-2011", "AA SQ-15", "AA SI-8"],
              ["AA SS-33", "AA SS-242", "AA SS-2014", "AA SQ-16", "AA SI-9"],
              ["AA SS-33", "AA SS-2618", "AA SS-2017", "AA SQ-17", "AA SM175"],
              ["AA SS-35", "AA SS-295", "AA SS-2018", "AA SQ-18", "AA SM176"],
              ["AA SS-35", "AA SS-296", "AA SS-2024", "AA SQ-19", "AA SM183-B"],
              ["AA SS-35", "AA SS-3003", "AA SS-2024 XRF", "AA SS-1000", "AA SM183-C"],
              ["AA SS-356 XR", "AA SS-3004", "AA SS-2025", "AA SS-1020", "AA SI-2"],
              ["AA SS-36", "AA SS-5050", "AA SS-535", "AA SS-6061 XRF", "AA SS-7010"],
              ["AA SS-36", "AA SS-5052", "AA SS-5357", "AA SS-6063", "AA SS-7021"],
              ["AA SS-38", "AA SS-5052 XRF", "AA SS-5454", "AA SS-6063 XRF", "AA SS-7029"],
              ["AA SS-380 XR", "AA SS-5056", "AA SS-5456", "AA SS-6066", "AA SS-7039"],
              ["AA SS-38", "AA SS-5082", "AA SS-5657", "AA SS-6070", "AA SS-7046"],
              ["AA SS-383 XRF", "AA SS-5083", "AA SS-5754", "AA SS-6111", "AA SS-7047"],
              ["AA SS-38", "AA SS-5086", "AA SS-6005", "AA SS-6151", "AA SS-7050"],
              ["AA SS-39", "AA SS-513", "AA SS-6010", "AA SS-6201", "AA SS-7050 XRF"],
              ["AA SS-390 XR", "AA SS-514", "AA SS-6014", "AA SS-6253", "AA SS-7055"],
              ["AA SS-404", "AA SS-5154", "AA SS-6016", "AA SS-6262", "AA SS-7072"],
              ["AA SS-41", "AA SS-5182", "AA SS-6022", "AA SS-6351", "AA SS-7075"],
              ["AA SS-44", "AA SS-5182 XRF", "AA SS-6022 XRF", "AA SS-6951", "AA SS-7075 XRF"],
              ["AA SS-500", "AA SS-520", "AA SS-6053", "AA SS-7001", "AA SS-7076"],
              ["AA SS-504", "AA SS-5252", "AA SS-6061", "AA SS-7005", "AA SS-7079"],
              ["AA ST2-3104", "AA ST1-6000", "AA SS-SI3001", "AA SS-852", "AA SS-7085"],
              ["AA ST2-505", "AA ST1-6063", "AA SS-SI4001", "AA SS-A242", "AA SS-711"],
              ["AA ST2-6063", "AA ST1-7000", "AA ST1-1050", "AA SS-A2800", "AA SS-712"],
              ["AA ST2-7000", "AA ST1-8079", "AA ST1-300", "AA SS-A357", "AA SS-713"],
              ["AA ST2-8000", "AA ST2-2000", "AA ST1-3000", "AA SS-A444", "AA SS-7178"],
              ["AA ST2-8079", "AA ST2-300", "AA ST1-3003", "AA SS-SI2001", "AA SS-8011"],
              ["AA ST3-8079", "AA ST2-3000", "AA ST1-5000", "AA SS-SI2101", "AA SS-850"],
              ["AA TI-2", "AA ST2-3003", "AA ST1-5052", "AA SS-SI2401", "AA SS-851"],
              ["AA WC-1000", "AA WB-2024", "AA WA-6000", "AA WA-3003", "AA TI-3"],
              ["AA WC-5056", "AA WB-3003", "AA WA-6014", "AA WA-3004", "AA Ti64-150"],
              ["AA WC-6000", "AA WB-3004", "AA WA-6061", "AA WA-5005", "AA WA-1000"],
              ["AA WC-7075", "AA WB-5052", "AA WA-6063", "AA WA-5052", "AA WA-1100"],
              ["AA WD-1000", "AA WB-5056", "AA WA-7075", "AA WA-5056", "AA WA-1199"],
              ["AA WD-6000", "AA WB-5182", "AA WB-1000", "AA WA-5182", "AA WA-2011"],
              ["AA WD-7075", "AA WB-6000", "AA WB-1100", "AA WA-5454", "AA WA-2017"],
              ["AA WE-1000", "AA WB-7075", "AA WB-2011", "AA WA-5456", "AA WA-2024"],
              ["AA ZN-2", "AA WU-6000", "AA WG-7075", "AA WM-6000", "AA WE-7075"],
              ["AA ZN-4", "AA WV-6000", "AA WH-6000", "AA WP-6000", "AA WF-2024"],
              ["AA ZN-5", "AA WW-6000", "AA WH-7075", "AA WR-6000", "AA WF-6000"],
              ["AA ZN-6", "AA WX-6000", "AA WJ-6000", "AA WS-6000", "AA WF-7075"],
              ["AA ZN-7", "AA WZ-6000", "AA WK-6000", "AA WT-6000", "AA WG-6000"],
              ["AA ZR-1", "AA ZR-11", "AA ZR-13", "AA ZN-1", "AA WL-6000"],
              ["AA ZR-14", "AA ZR-15", "AA ZR-2", "AA ZR-3", ""]
            ]
          }
        },
      },
      {
        name: "ALCAN Certified Reference Materials",
        tagline: "Precision aluminum standards for spectrochemical analysis",
        image: "/images/products/crms/alcan-certified-reference-materials.webp",
        gallery: [
          "/images/products/crms/alcan-certified-reference-materials.webp",
        ],
        description:
          "ALCAN Certified Reference Materials ensure your spectrometers are perfectly calibrated for aluminum analysis. These standards represent a wide array of aluminum alloy grades.",
        features: [
          "Comprehensive aluminum alloy coverage",
          "Certified for major and minor alloying elements",
          "Consistent metallurgical structure",
        ],
        specs: {
          "table_type": "grid",
          "categories": {
            "1 series aluminum": [
              ["ALC-1050-AK", "ALC-1100-AY", "ALC-1170-AN", "ALC-1200-AJ", "ALC-125-AQ"],
              ["ALC-1100-AK", "ALC-1145-AE", "ALC-1188-AE", "ALC-123-CAM", "ALC-127-AB"],
              ["ALC-135-AQ", "ALC-160-DD", "ALC-161-CAH", "ALC-16S-AR", "ALC-17S-BE"]
            ],
            "2 series aluminum": [
              ["ALC-2007-CAB", "ALC-2011-AC", "ALC-2011-CAB", "ALC-2014-AE", "ALC-2017-AC"],
              ["ALC-2018-AB", "ALC-2024-A", "ALC-218-AR", "ALC-220-AD", "ALC-220-AF"],
              ["ALC-2219-AC", "ALC-224-AC", "ALC-226-AD", "ALC-236-AE", ""]
            ],
            "3 series aluminum": [
              ["ALC-3002-AB", "ALC-3003-AK", "ALC-3004-AO", "ALC-3004-CAN", "ALC-3005-AD"],
              ["ALC-3102-AD", "ALC-3102-CAF", "ALC-3103-DAQ", "ALC-3104-AT", "ALC-3104-CAP"],
              ["ALC-3104-DAQ", "ALC-3105-AH", "ALC-319-AA", "ALC-3203-CAX", "ALC-3204-AA"],
              ["ALC-339.0-AD", "ALC-350CAU", "ALC-356.2-AW", "ALC-356.2-AX", "ALC-356.2-CAU"],
              ["ALC-356.2-DAO", "ALC-383.1-CAC", "ALC-3916-AA", "", ""]
            ],
            "4 series aluminum": [
              ["ALC-4002-AD", "ALC-4007-AA", "ALC-4104-AE", "ALC-4145-AB", "ALC-420-AA"],
              ["ALC-4343-AF", "ALC-443.2-AC", "ALC-443.2-CAB", "ALC-462A1-AA", "ALC-4643-AD"]
            ],
            "5 series aluminum": [
              ["ALC-5001-BI", "ALC-5005-AG", "ALC-5005-CAF", "ALC-5010-AA", "ALC-5016-AA"],
              ["ALC-5017-AA", "ALC-5017-AB", "ALC-5017-CAD", "ALC-5017-CAD", "ALC-5052-AN"],
              ["ALC-5052-CAO", "ALC-5052-DAK", "ALC-5056-CAC", "ALC-5083-AG", "ALC-5100-BS"],
              ["ALC-5182-BE", "ALC-5182-CBB", "ALC-5182-DAU", "ALC-5251-AF", "ALC-5454-AC"],
              ["ALC-5454-CAD", "ALC-5457-AB", "ALC-5657-AA", "ALC-5754-AE", "ALC-5856-AA"]
            ],
            "6 series aluminum": [
              ["ALC-6005-AB", "ALC-6005-CAF", "ALC-6006-AC", "ALC-6006-CAD", "ALC-6008-AA"],
              ["ALC-6012-AF", "ALC-6016-AA", "ALC-6052-CAE", "ALC-6061-AT", "ALC-6061-CAS"],
              ["ALC-6063-CBF", "ALC-6063-DAZ", "ALC-6066-AF", "ALC-6066-CAG", "ALC-6070-AC"],
              ["ALC-6082-AB", "ALC-6111-AE", "ALC-6151-AB", "ALC-6195-AE", "ALC-6201-AD"],
              ["ALC-6205-AA", "ALC-6235-AB", "ALC-6252-AE", "ALC-6261-AD", "ALC-6348-AC"],
              ["ALC-6351-AM", "ALC-6351-CAL", "ALC-6392-AC", "ALC-6463-AC", "ALC-6490-AC"]
            ],
            "7 series aluminum": [
              ["ALC-7003-AC", "ALC-7018-AC", "ALC-7021-AA", "ALC-7022-AC", "ALC-7031-AA"],
              ["ALC-7050-AE", "ALC-7075-CAE", "ALC-7079-AA", "ALC-7146-AA", "ALC-7146-CAE"]
            ],
            "8 series aluminum": [
              ["ALC-8006-AH", "ALC-8006-CAF", "ALC-8007-AE", "ALC-8007-AG", "ALC-8008-AC"],
              ["ALC-8015-AA", "ALC-8018-AB", "ALC-8021-AA", "ALC-8030-AD", "ALC-8079-AF"],
              ["ALC-8079-CAE", "ALC-8112-AA", "", "", ""]
            ]
          }
        },
      },
    ],
  },
];
