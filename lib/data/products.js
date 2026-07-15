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
    image: "https://picsum.photos/seed/spectratech-oes-1/600/400",
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
    models: [
      {
        name: "W4",
        tagline: "Compact spark OES with optimized cost-of-ownership",
        image: "https://picsum.photos/seed/spectratech-oes-w4/600/400",
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
        image: "https://picsum.photos/seed/spectratech-oes-w5/600/400",
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
        image: "https://picsum.photos/seed/spectratech-oes-w6/600/400",
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
    image: "https://picsum.photos/seed/spectratech-mobile-1/600/400",
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
    models: [
      {
        name: "SP6",
        tagline: "Ultra-mobile PMI analyzer with spark probe",
        image: "https://picsum.photos/seed/spectratech-mobile-sp6/600/400",
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
    image: "https://picsum.photos/seed/spectratech-xrf-1/600/400",
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
    models: [
      {
        name: "JX5",
        tagline: "Affordable SDD-based handheld alloy tester",
        image: "https://picsum.photos/seed/spectratech-xrf-jx5/600/400",
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
        image: "https://picsum.photos/seed/spectratech-xrf-jx6/600/400",
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
    image: "https://picsum.photos/seed/spectratech-cs-1/600/400",
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
    models: [
      {
        name: "CS-8820S",
        tagline:
          "Infrared Carbon-Sulfur analyzer with high-frequency combustion",
        image: "https://picsum.photos/seed/spectratech-cs-8820s/600/400",
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
        image: "https://picsum.photos/seed/spectratech-cs-8820t/600/400",
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
        image: "https://picsum.photos/seed/spectratech-cs-8800s/600/400",
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
        image: "https://picsum.photos/seed/spectratech-onh-2018/600/400",
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
    image: "https://picsum.photos/seed/spectratech-desktop-1/600/400",
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
    models: [
      {
        name: "TY-9800",
        tagline: "Advanced research-grade desktop EDXRF system",
        image: "https://picsum.photos/seed/spectratech-desktop-ty9800/600/400",
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
        image: "https://picsum.photos/seed/spectratech-desktop-p9800/600/400",
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
        image: "https://picsum.photos/seed/spectratech-desktop-jxt6800/600/400",
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
        image: "https://picsum.photos/seed/spectratech-desktop-jxt6/600/400",
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
    image: "https://picsum.photos/seed/spectratech-icp-1/600/400",
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
    models: [
      {
        name: "ICP-7000",
        tagline: "Simultaneous dual-view ICP-OES system",
        image: "https://picsum.photos/seed/spectratech-icp7000/600/400",
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
        image: "https://picsum.photos/seed/spectratech-icpaes9000/600/400",
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
    image: "https://picsum.photos/seed/spectratech-crms-1/600/400",
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
    models: [
      {
        name: "Certified Reference Materials (CRMs)",
        tagline: "Alloy calibration disks & aqueous calibration standards",
        image: "https://picsum.photos/seed/spectratech-crm-disks/600/400",
        description:
          "Traceable reference calibration blocks (OES standard disks) and liquid multi-element standards (ICP-OES standard solutions). Every standard comes with a detailed certificate of analysis indicating exact values and uncertainties.",
        features: [
          "Accredited ISO Guide 34 & ISO 17034 certificate",
          "Wide matrix variety: Cast Iron, Low Alloy Steel, Brass, Bronze, AA series Aluminium",
          "1000 mg/L single element liquids for ICP",
        ],
        specs: {
          "Disks Specifications": {
            "Standard Size": "Diameter: 35-40mm, Thickness: 15-30mm",
            Homogeneity: "Tested via Spark OES at multiple radial spots",
          },
          "Liquid Solutions": {
            Purity: "99.999% Starting material dissolved in high-purity acids",
            Traceability: "NIST SRM traceable validation",
          },
        },
      },
      {
        name: "Spectra-Tech Analytical Consumables",
        tagline: "Genuine replacement torches, electrodes, and crucibles",
        image:
          "https://picsum.photos/seed/spectratech-consumables-tubes/600/400",
        description:
          "Maintain your analyzer's performance with premium wear parts. We manufacture carbon/sulfur ceramic crucibles, tungsten spark electrodes, ICP demountable quartz torches, and spray nebulizers matching major manufacturer specifications.",
        features: [
          "Low carbon/sulfur blank levels in combustion crucibles (< 0.5ppm C, < 0.2ppm S)",
          "Genuine grade tungsten alloy spark tips for long electrode life",
          "Highly precise dimensions avoiding sample leaks",
        ],
        specs: {
          "Ceramic Crucibles": {
            "Pack Size": "1000 pieces per box",
            "Pre-baking requirement":
              "Recommended pre-baking at 1000°C for 2 hours for ultra-low carbon testing",
          },
          Electrodes: {
            Material: "Tungsten alloy tip with copper shank",
            Angle: "90° or 120° point tip options",
          },
          "ICP Torch": {
            Material: "Synthetic high-purity quartz (type GE-124 equivalent)",
            Design: "One-piece demountable or fixed configurations",
          },
        },
      },
    ],
  },
];
