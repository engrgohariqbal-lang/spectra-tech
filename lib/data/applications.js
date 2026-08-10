import {
  Cpu,
  Car,
  Flame,
  Wrench,
  Pickaxe,
  Train,
  Zap,
  Factory,
  Beaker,
  PlugZap,
  Shield,
  Building2,
  Mountain,
  Activity,
} from "lucide-react";

export const applicationsData = [
  {
    slug: "liquid-cooling",
    name: "Liquid Cooling",
    shortDesc:
      "Analysis of coolants and liquid cooling systems in advanced AI servers and data centers.",
    icon: "Zap",
    image: "/images/applications/liquid-cooling.webp",
    content:
      "Technical Cleanliness Inspection System plays a crucial role in the liquid cooling industry, impacting the cooling efficiency, operational stability, and service life of liquid cooling systems. The details are as follows:\n\n1. Sources and Hazards of Contaminants\nLiquid cooling system contaminants can originate from a wide range of sources, including manufacturing and installation residues, coolant impurities, corrosion products, biological growth, and external intrusion. These contaminants can lead to flow blockage, reduced flow, decreased heat exchange efficiency, increased corrosion, pump wear and failure, and loss of coolant chemical stability, severely impacting system performance and lifespan.\n\n2. Cleanliness Testing Standard\nTo ensure stable operation of liquid cooling systems, cleanliness testing of components is required. Component cleanliness testing is typically performed in accordance with international standards VDA 19.1 and ISO 16232.\n\n3. Applications of JYBO CleanTech Cleanliness Testing Equipment in Liquid Cooling Industry\n3.1\nJYBO CleanTech Technical Cleanliness Cabinet can use different cleanliness methods to wash components, including pressure rinsing, perfusion rinsing, ultrasonic, air blow and so on, and can customize technical cleanliness flushing cabinet according to customer’s requirements. For example, during the manufacturing process of liquid cooling plates, high-pressure rinsing can be used to flush the flow channel and then dried to ensure a clean installation environment and operating specifications.\n3.2 In general, components in the liquid cooling industry are cleaned more by perfusion rinsing. The customized perfusion rinsing system of the JYBO CleanTech Technical Cleanliness Cabinet can clean components such as liquid cooling pipes and connectors. The cleaning solution completely fills the interior of the component, utilizing turbulent flow rather than laminar flow to more effectively separate impurities from the component.\nThe instrument features a pre-installed pipe access port for perfusion and flushing of components. The perfusion return port is located within the instrument cavity, rather than directly connected to the filter sample preparation port. This eliminates the chamber vacuum caused by direct connection of the liquid inlet and outlet ports to the filter sample preparation port, as well as the flow resistance caused by the filter pore size, thus preventing incomplete particle collection.\nTo calculate the turbulent flow through the tube, the Reynolds Number Re>4000, which is defined via the equation Re=w*d/v,(w: velocity of the flow, d: tube diameter, v: kinematic viscosity) is used. The turbulent volume flow (dV/dt) for other liquids can be calculated on covering this to dV/dt=Re*d*π*v/4.\n3.3 JYBO CleanTech Automatic Particle Analysis System can also analyze the contaminants in the extracted components to ensure and monitor cleanliness.\nJYBO CleanTech Automatic Particle Analysis System can not only automatically identify particle properties, quantity and size; but also generate cleanliness test reports with one click. Related equipment complies with international standards such as VDA19 and ISO16232.",
    benefits: [],
    relatedProducts: ["icp-oes", "desktop-edxrf-spectrometer"],
  },
  {
    slug: "electronics-semiconductor",
    name: "Electronics & Semiconductor",
    shortDesc:
      "High-precision analysis for semiconductor manufacturing, RoHS compliance, and electronic components.",
    icon: "Cpu",
    image: "/images/applications/electronics-semiconductor.webp",
    content:
      "In the electronics and semiconductor industry, technical cleanliness is a critical factor in ensuring product quality, performance, and reliability. Its application spans the entire process, from raw material processing to finished product packaging. The details are as follows:\n\n1. Sources and Hazards of Contamination\n1.1 Silicon Wafer Manufacturing\n- Silicon wafers, the fundamental material of semiconductor devices, can be contaminated by particles, metallic impurities, or organic matter on their surfaces. This can cause pattern transfer defects during subsequent photolithography and etching processes, compromising the integrity of the chip's circuitry.\n1.2 Photolithography and Thin Film Deposition\n- During the photolithography process, tiny contaminants on the mask, photoresist, or wafer surface can cause distortion of the lithographic pattern and even short circuits or open circuits. For example, a single micron-sized speck of dust can cause transistor failure on a chip.\n- During thin film deposition (such as chemical vapor deposition (CVD) and physical vapor deposition (PVD), contaminants can be incorporated into the thin film layer, leading to abnormal resistivity and structural defects, thus affecting the device's electrical performance.\n1.3 Packaging and Testing\n- During the packaging process, contamination in the wire bonding area can reduce bond strength, leading to poor connection between the chip and external circuitry and even signal transmission failures.\n- During the testing phase, contaminants can cause poor contact between the probe and the chip test points, resulting in erroneous test results. Contaminated probes can also cross-contaminate other chips.\n\n2. JYBO CleanTech Cleanliness Testing Equipment Application in Electronics and Semiconductor Industry\n2.1\nJYBO CleanTech Technical Cleanliness Cabinets can extract impurities from component surfaces using various extraction methods, including pressure rinsing, ultrasonic, shaking cleaning, perfusion rinsing, and air purging. These extraction methods can all be applied to electronic semiconductor components to ensure they meet specified cleanliness test standards.\nAir purging plays a crucial role in electronic semiconductor components. Air purging uses clean, oil-free compressed air to purge the test component, removing particles from the component. Generally, air purge startup parameters include nozzle shape: full-flow circular nozzle; nozzle diameter: 1.5mm; pressure: 1.5 bar; nozzle-part distance: maximum 10cm; and purge time/part area: 1 second/cm².\nDuring qualification testing/attenuation testing, the total purge time for each part surface depends on the number of extractions required to meet the attenuation standard. If the attenuation standard is not met using these startup parameters, or if other more suitable parameters are available with documented proof, these startup parameters can be adjusted.\n2.2 JYBO CleanTech Automatic Particle Analysis System includes two different models. Featuring scanning microscope for particle measurement with different specifications, such as objective magnification, pixels, and optical magnification, both are manufactured by Olympus in Japan, and their different specifications exhibit different performance characteristics. Other inspection system components, including cameras, light sources, computers, and software, which all offer excellent performance. Notably, the light sources and software are both manufactured in-house, possessing unique features and capabilities, and are continuously improved.\nJYBO CleanTech Automatic Particle Analysis System provides a detailed analysis of particle type, size, and quantity. The system automatically generates a comprehensive cleanliness inspection report with a single click and saves this data automatically. As cleanliness data accumulates, companies can effectively trace the source of contamination, enable targeted optimization of production processes and improve product quality and efficiency.\n2.3 The component cleanliness cabinet is designed and maintained in strict accordance with high-grade cleanliness test standards. Specifically, it meets Class 1 cleanliness requirements, meaning that the number of particles 0.5 microns or larger is strictly controlled to less than 1 per cubic foot of air. This high-standard clean environment provides excellent cleaning operating conditions for component cleanliness testing, effectively isolating the various tiny particles and contaminants that may be present in the external environment, significantly reducing potential interference with the accuracy and reliability of test results, and ensuring the authenticity and scientific nature of the test data.\n\nIn short, technical cleanliness analysis system is directly related to the yield (percentage of qualified products) and service life of semiconductor devices. The industry's demanding cleanliness standards (from the micron to the nanometer level) are one of the key drivers of the continuous advancement of semiconductor manufacturing technology.",
    benefits: [],
    relatedProducts: ["desktop-edxrf-spectrometer", "icp-oes"],
  },
  {
    slug: "automotive-components",
    name: "Automotive Components",
    shortDesc:
      "Quality control and material verification for critical automotive parts and structural components.",
    icon: "Car",
    image: "/images/applications/automotive-components.webp",
    content:
      "Technical cleanliness inspection is a core element in ensuring product quality, reliability, and safety in the automotive industry. Its application spans the entire process, from component production and vehicle assembly to critical system operation and after-sales maintenance. This is reflected in the following aspects:\n\n1. Sources and Hazards of Contaminants\n1.1. Quality Control in Core Component Production\nCore automotive components (such as engine blocks, pistons, transmission gears, fuel injectors, and bearings) require extremely high cleanliness standards. Impurities such as metal debris, oil, and abrasive particles remaining on or within the components can lead to:\n- Accelerated wear of components after assembly (e.g., debris between gears causing misalignment);\n- Seizing of precision components (e.g., clogged fuel injectors leading to poor fuel atomization and affecting engine performance);\n- Seal failure (e.g., impurities in hydraulic system components damaging sealing surfaces and causing leaks).\nTherefore, component cleanliness testing (e.g., flushing, filtration weighing, and particle counting) is essential during component production to ensure that impurity size and quantity meet industry standards (e.g., ISO 16232 and VDA 19) to eliminate defects at the source.\n1.2 Ensuring the Reliability of Key Systems\nThe technical cleanliness of key systems such as a vehicle's fuel system, lubrication system, braking system, and steering system directly impacts their operational safety:\n- Fuel system: Impurities can clog fuel filters and injectors, leading to reduced engine power, unstable idling, or even stalling;\n- Lubrication system: Particles in the engine oil can exacerbate internal engine wear and shorten service life;\n- Braking system: Impurities in the brake lines or calipers can cause brake lag, unusual noise, and, in severe cases, brake failure;\n- Electronic systems: Oil or dust contamination in sensors and wiring harness connectors can cause signal transmission failures, impacting functions like autonomous driving and ABS.\nBy monitoring the technical cleanliness practices of these system components and media (fuel, oil, brake fluid), systemic failures can be avoided.\n1.3 Pollution Prevention and Control During the Vehicle Assembly Process\nThe vehicle assembly process involves the assembly of thousands of parts, and the technical cleanliness inspection management must cover:\n- Assembly Environment: Workshop air cleanliness (e.g., dust level) and work surface cleanliness to prevent dust and fibers from entering the vehicle body or components;\n- Assembly Tools: Oily or metal shavings on tools such as wrenches and clamps can contaminate components during operation;\n- Logistics: Damaged packaging during component transportation and storage can easily introduce contaminants (e.g., rainwater and mud).\nTesting of technical cleanliness (e.g., spot checks of pre-assembly parts and regular monitoring of ambient particle concentrations) can prevent secondary contamination and ensure stable vehicle performance after assembly.\n\n2. Applications of JYBO CleanTech Cleanliness Testing Equipment in Automotive Components\n2.1 JYBO CleanTech Technical Cleanliness Cabinets can use various component extraction methods, including pressure rinsing, ultrasonics, perfusion rinsing, shaking, and air blowing. Different extraction methods can be selected based on the specific component. For small parts, ultrasound can be used to effectively extract contaminant particles; for larger parts, pressure rinsing can more effectively separate contaminants from the parts; and for parts with internal structure, perfusion rinsing can be highly effective.\nAgitation cleaning also plays a significant role. The required configuration for the agitation step depends on the shape, size, and weight of the components. This method is suitable for parts with recessed cavities, at least one opening, and whose size and weight ensure sufficient agitation of the liquid in the test area. However, this method is not suitable for parts with confined internal structures.\n2.2 The JYBO CleanTech Automatic (Motorized) Particle Analysis System features highly automated functions, enabling precise identification and analysis of various contaminants in samples. The device automatically distinguishes and analyzes different types of contaminants, including metallic particles, non-metallic particles, and fibers, accurately determining not only particle size but also particle count. Furthermore, the instrument features a one-click cleanliness test report generation function, significantly improving test efficiency and accuracy. With simple operation, users can obtain a detailed cleanliness test report, providing a strong guarantee for product quality control.\n2.3 The automotive industry has established strict standards for technical cleanliness inspection (such as the international standard ISO 16232 and the German VDA 19). Products that meet high cleanliness standards not only reduce after-sales failure rates (such as reducing warranty claims due to impurities), but also enhance brand reputation and market competitiveness.\nJYBO CleanTech technical cleanliness inspection system is certified by international standards and complies with the requirements of VDA19 and ISO16232 and is strictly implemented.\n\nIn summary, technical cleanliness inspection and analysis is not an isolated quality indicator in the automotive industry, but a core control factor throughout the entire industry chain, directly related to the performance and safety of the vehicle, as well as the company's production efficiency and market reputation.",
    benefits: [],
    relatedProducts: ["oes-spectrometer", "carbon-sulfur-onh-analyzer"],
  },
  {
    slug: "foundry",
    name: "Foundry",
    shortDesc:
      "Rapid elemental analysis to optimize melt chemistry and ensure high-quality casting.",
    icon: "Flame",
    image: "/images/applications/foundry.webp",
    content:
      "Jinyibo provides a comprehensive portfolio of advanced analytical instruments for foundries\nProduction processes in steel and non-ferrous foundries are frequently controlled and monitored with stationary metal analyzers. The W5 OES metal analyzer as well as the W6 OES metal analyzer can be employed depending on the specialization, the number of casting processes and the semi-finished and finished products being produced. The W4 OES metal analyzer is generally used by small companies with low budget.\nThe CS8820S Carbon Sulfur Analyzer used to analysis the C and S in the foundry parts, these two elements are playing very important role in the metal. Some special foundry like brass, pure copper, titanium alloy also needs ONH-2018 Oxygen Nitrogen Hydrogen Analyzer to determine Oxygen, Nitrogen, Hydrogen.\nTrace analysis of industrial waste water and liquids from production processes, e.g., of electrolyte and coating baths, is a typical application for the ICP spectrometers, such as the TY-9900 ICP-AES with detection limits in ppb/ppm ranges making them excellently suited to this task. But even for the analysis of the main components, ICP achieves highest precision using the “nesting procedure.” The technology can be easily automated, making a high sample throughput and even unattended operation realizable.\n\nApplicable Products：\n- W5 Optical Emission Spectrometer\n- CS8820S Carbon Sulfur Analyzer\n- TY9900 ICP-OES AES",
    benefits: [],
    relatedProducts: ["oes-spectrometer", "carbon-sulfur-onh-analyzer"],
  },
  {
    slug: "metal",
    name: "Metal",
    shortDesc:
      "Precise elemental analysis for various metal grades, steelmaking, and general metallurgy.",
    icon: "Factory",
    image: "/images/applications/metal.webp",
    content:
      "In metal analyzer instruments, Jinyibo offers a full range of solutions for the entire metals industry\nJinyibo metal analyzer instruments carry out a wide diversity of analytical tasks for metals analysis.\nJinyibo metal analyzers are used to identify, sort, and analyze metals for incoming inspections, during production processes and before delivery. And that’s not all: Jinyibo metal analyzer instruments also play a major role in scrap yards, for internal recycling, at building sites and in chemical plants.\nBecause of their high accuracy, stationary metal analyzers are used for process control in the metal producing industry and for quality control during metal processing as well as in laboratories for research and development.\nFor copper alloy analysis, such as cupronickel, brass, bronze, tin bronze, aluminum bronze, phosphor bronze, beryllium bronze, tungsten bronze, because of the self-etching linearity of Zn element in copper alloy detected by direct reading spectrometer, so we suggest the desktop X-ray fluorescence spectrometer for your accuracy copper alloy analysis. Jinyibo XRF spectrometers are also well suited to many other metals analysis tasks, such as for coatings, the automatic detection of inclusions and impurities or the examination of furnace slag.\n\nApplicable Products：\n- W4 Optical Emission Spectrometer\n- Handheld LIBS Analyzer\n- TY9800 XRF Spectrometer",
    benefits: [],
    relatedProducts: ["oes-spectrometer", "mobile-metal-analyzer"],
  },
  {
    slug: "machine",
    name: "Machine",
    shortDesc:
      "Material testing for heavy machinery, industrial equipment, and precision machining.",
    icon: "Wrench",
    image: "/images/applications/machine.webp",
    content:
      "For the machine industry, Jinyibo offers a complete range of XRF, Stationary Arc/Spark Analyzers, Handheld LIBS Analyzer.\nThe machine industry expects seamless documentation of the parts and components used. From the first melt to the installed sheet metal, screw, etc., the individual production steps must be traceable. The W6 and W5 stationary metal analyzers can be found at all relevant points in this chain for the verification, assurance, and documentation of each process.\nIn addition to ensuring the use of suitable metal grades and excluding material mix-ups, the Expert-1 LIBS metal analyzers are used in the machine supply industry to ensure heat fidelity in the production of, e.g., metal sheets.\nX-ray fluorescence analysis is excellently suited to the determination of coatings on aluminum and steel sheets. Depending on the application, the TY-9800 EDXRF is employed here. In addition to the analysis of coatings, the concentration of coating baths can be monitored with XRF. XRF is also well suited to the analysis of lubricants and fuels.\n\nApplicable Products：\n- W5 Optical Emission Spectrometer\n- TY9800 XRF Spectrometer\n- Handheld LIBS Analyzer",
    benefits: [],
    relatedProducts: ["mobile-metal-analyzer", "handheld-xrf-analyzer"],
  },
  {
    slug: "mining",
    name: "Mining",
    shortDesc:
      "On-site analysis of ores, minerals, and geological samples for efficient resource extraction.",
    icon: "Pickaxe",
    image: "/images/applications/mining.webp",
    content:
      "In the world of mining and soil, Jinyibo's advanced analyzers are required\nElemental analysis is one of the most important investigative tools in exploration and during the mining extraction process. X-ray fluorescence (EDXRF) spectrometry provides a convenient, rapid method of analysis for rocks, exploration samples, minerals, ores, concentrates and tailings, usually with far less sample preparation than that required for other techniques.\nWhen facing large numbers of samples, requirements for short analysis times and low detection limits, especially for the light elements, TY-9900 ICP-AES provide the necessary performance. Both techniques are easily automated, enable detection limits in sub-ppm and ppb range and analyze a sample in less than 10 minutes.\nWhen we say ore trade, the grade of the ore determines the price, so the accuracy grades will help seller or buyer each other on fair trade. Our up-illuminated X-ray fluorescence spectrometer solves the matrix effect and particle size effect very well, and does not contaminate the XRF probe in the case of vacuuming, which provides an effective guarantee for the service life of XRF.\n\nApplicable Products：\n- P9800 XRF Spectrometer\n- TY9900 ICP-AES\n- CS8800S Carbon Sulfur Analyzer",
    benefits: [],
    relatedProducts: ["handheld-xrf-analyzer", "desktop-edxrf-spectrometer"],
  },
  {
    slug: "transportation",
    name: "Transportation",
    shortDesc:
      "Material certification for railways, shipbuilding, and mass transit infrastructure.",
    icon: "Train",
    image: "/images/applications/transportation.webp",
    content:
      "High performance spectrometers for the exacting requirements of the transportation industry\nThe powerful spectrometers from Jinyibo are ideal for the determination of the elemental contents of many different materials and components for the enormous demands in the transport industry.\nThe stationary metal analyzers ensure that the correct grades are used and that there is no material mix-up. They are also indispensable in research for the development of new metal materials and the analysis of material defects. Whereas the portable analyzer and handheld LIBS metal analyzer are designed especially for location-independent operation, the stationary instruments, W6 OES and W5 OES are suitable for the highest of analytical requirements.\nTY-9800 XRF spectrometer is used for tasks such as the detection and identification of inclusions in metals or for the analysis of plastics, fabrics or coatings. The TY9800 EDXRF is also as a standard analytical method for the analysis of fuels, lubricants, wear metals in used oil or other liquid operating materials.\n\nApplicable Products：\n- W6 Optical Emission Spectrometer\n- LIBS Analyzer\n- TY9800 XRF Spectrometer",
    benefits: [],
    relatedProducts: ["mobile-metal-analyzer", "oes-spectrometer"],
  },
  {
    slug: "chemical",
    name: "Chemical",
    shortDesc:
      "Advanced analytical testing for chemical processing and industrial compound verification.",
    icon: "Beaker",
    image: "/images/applications/chemical.webp",
    content:
      "ICP-AES and X-ray fluorescence instruments for the elemental analysis of materials and chemicals\nICP-AES and XRF spectrometers from Jinyibo are as versatile as the industrial infrastructure and the analytical applications of the entire chemical industry.\nDuring production, they are used to determine the elemental composition of raw materials and additives, for the monitoring and control of production processes, for quality control of stored materials and shipments and many other applications. But which instrument is best suited to your needs? When selecting the right instrument, the requirements for accuracy and speed of the analysis are of key importance. Jinyibo, with its comprehensive range of ICP-AES and X-ray fluorescence spectrometers, offers the optimum solution for every application.\nWhen we face the elements like O,N,H,C are not available on ICP or EDXRF, we have more choice on our oxygen nitrogen hydrogen analyzer and carbon sulfur analyzer.\n\nApplicable Products：\n- TY9900 ICP-AES\n- CS8820S Carbon Sulfur Analyzer\n- ONH Analyzer",
    benefits: [],
    relatedProducts: ["icp-oes", "desktop-edxrf-spectrometer"],
  },
  {
    slug: "electric-power",
    name: "Electric Power",
    shortDesc:
      "Material inspection for power generation infrastructure, transformers, and renewable energy.",
    icon: "PlugZap",
    image: "/images/applications/electric-power.webp",
    content:
      "Jinyibo’s ICP-AES and XRF analyzers are the right choice for the analysis of electric power\nDuring the production of batteries, pure cooper, both the exact elemental composition and examination for contamination of the materials used is extremely important, because they decidedly influence the performance and lifetime of the battery. It is necessary to analyze trace elements in graphite, the anode material, main and minor components and traces in the cathode material, consisting of lithium metal oxides, as well as lithium salts, which are used as source materials but also as electrolytes. With the Jinyibo’s ICP-AES spectrometer and the TY-9800, X-ray fluorescence spectrometer, SPECTRO offers the right analytical instruments for this application. With high detection sensitivity and precision but also analytical speed and user-friendliness, they are ideally suited to use in the battery industry.\nFor the battery raw materials, our CS8820S carbon sulfur analyzer and P9800 EDXRF have excellent performance on it.\n\nApplicable Products：\n- TY9900 ICP-AES\n- CS8820S Carbon Sulfur Analyzer\n- TY9800 XRF Spectrometer",
    benefits: [],
    relatedProducts: ["mobile-metal-analyzer", "handheld-xrf-analyzer"],
  },
  {
    slug: "services",
    name: "Services",
    shortDesc:
      "Versatile analytical testing tailored for independent inspection and testing services.",
    icon: "Shield",
    image: "/images/applications/services.webp",
    content:
      "For services applications, Jinyibo offers a broad range of advanced analyzers\nChemical and physical elemental analyses are frequently outsourced to external service providers. These companies must be able to rely on the fact that their samples have been professionally analyzed, neutrally tested and completely independently verified. The contract laboratories require cutting-edge and reliable analytical technology. For non-metal or unknown samples, ICP-AES instruments, such as the TY-9900 ICP-AES is frequently used. It provides universal elemental analysis procedures, many application possibilities, standardized sample preparation for numerous applications and are easily automated, which enables a sample throughput of up to 1,000 samples per day. ED-XRF spectrometers, like the TY-9800 EDXRF, P9800 EDXRF, P9800S EDXRF are also excellently suited to a wide range of applications.\nFor metallic samples, testing facilities and independent material laboratories generally employ stationary metal analyzers like the W5 OES or the TY-9000 OES. In combination with mechanical testing procedures, the determination of the chemical composition of the given test sample provides an exact account as to the specification. Mainly multi-base configurations, verified with the respective reference materials, are employed in this sector. For this very complicated application, easy operation of the instrument is a major advantage.\nThe handheld LIBS analyzers are designed especially for location-independent operation. The handheld industrial spectrometers are ideally suited to material services companies requiring widely differing contract testing at customer sites. Examples include the analysis and identification of metals to prevent grade mix-ups.\n\nApplicable Products：\n- W5 Optical Emission Spectrometer\n- Handheld LIBS Analyzer\n- TY9800 XRF Spectrometer",
    benefits: [],
    relatedProducts: ["oes-spectrometer", "icp-oes"],
  },
  {
    slug: "cement",
    name: "Cement",
    shortDesc:
      "Quality control for raw meal, clinker, and finished cement production processes.",
    icon: "Building2",
    image: "/images/applications/cement.webp",
    content:
      "Jinyibo supply multi-element analysis of raw meal, clinker, cement\nCement production enterprises have extremely strict product quality control. Raw meal batching and clinker calcination are the two-core links in the entire production process. Generally speaking, in the new dry process cement production technology, in order to ensure the stability of the calcination process and improve the clinker output and quality of the kiln, the requirements for the uniformity (stability) of the raw meal and the control requirements for the content of each element are far more than other kilns. The model is much stricter; a lot of practical experience has also proved that only in this way can the advanced nature of the new dry process cement production technology be fully exerted and reflected.\nIn order to meet the requirements of the new dry process cement production process conditions, it is necessary to timely and accurately analyze and control the chemical composition of the raw fuel in the production process. The traditional chemical analysis methods can no longer meet the needs of the production process; in order to achieve good quality control index needs to be configured with an X-ray fluorescence analyzer. Due to the limitation of the analysis speed of chemical analysis methods, in fact, the use of chemical analysis methods has only the meaning of post-event monitoring for the production process, but not the meaning of control. Often when we find a problem in a control link, it has already caused serious problems as a result, it brought great losses to the factory.\n\nApplicable Products：\n- P9800S XRF Spectrometer\n- TY9900 ICP-AES\n- CS8800S Carbon Sulfur Analyzer",
    benefits: [],
    relatedProducts: ["desktop-edxrf-spectrometer"],
  },
  {
    slug: "geology",
    name: "Geology",
    shortDesc:
      "Comprehensive geochemical analysis for earth sciences, soil testing, and environmental monitoring.",
    icon: "Mountain",
    image: "/images/applications/geology.webp",
    content:
      "Jinyibo offers a full range of X-Ray Fluorescence, ICP-AES, and CS Analyzer optimized for geological applications\nElemental analysis is one of the most important investigative tools in geology and environmental studies. Geological samples often contain a wide range of elements at vastly differing concentrations.\nThe Jinyibo instrument catalog includes a full range of Carbon Sulfur Analyzer, X-ray fluorescence, ICP-AES with characteristics optimized for geological fieldwork. Energy Dispersive X-Ray Fluorescence (ED-XRF) spectrometers like TY-9800, P9800 provide a convenient, rapid method of analysis for rocks, exploration samples, minerals, ores, concentrates and tailings, usually with far less sample preparation than that required for other techniques. The small portable spectrometer that can deliver fast, dependable, true lab-quality results anywhere in the field.\nICP-AES spectrometers like the TY-9900 have been used for a long time in geological applications. With a large number of samples, requirements for short analysis times, low detection limits, especially for the light elements, ICP-AES provides the looked-for performance. Both techniques are easy to automate, enable detection limits in sub-ppm and ppb ranges and analyze a sample in less than 10 minutes.\n\nApplicable Products：\n- CS8820S Carbon Sulfur Analyzer\n- TY9800 XRF Spectrometer\n- TY9900 ICP-AES",
    benefits: [],
    relatedProducts: ["handheld-xrf-analyzer", "desktop-edxrf-spectrometer"],
  },
];
