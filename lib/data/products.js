/**
 * @typedef {Object} SubModel
 * @property {string} name
 * @property {string} image
 */

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} description
 * @property {string} image
 * @property {SubModel[]} models
 */

/** @type {Product[]} */
export const products = [
  {
    id: "oes-spectrometer",
    name: "Optical Emission Spectrometer",
    slug: "oes-spectrometer",
    description: "High-precision OES spectrometers for elemental analysis in metals and alloys.",
    image: "https://picsum.photos/seed/spectratech-oes-1/600/400",
    models: [
      { name: "W4", image: "https://picsum.photos/seed/spectratech-oes-w4/600/400" },
      { name: "W5", image: "https://picsum.photos/seed/spectratech-oes-w5/600/400" },
      { name: "W6", image: "https://picsum.photos/seed/spectratech-oes-w6/600/400" }
    ]
  },
  {
    id: "mobile-metal-analyzer",
    name: "Mobile Metal Analyzer",
    slug: "mobile-metal-analyzer",
    description: "Portable metal analysis for fast on-site grade identification.",
    image: "https://picsum.photos/seed/spectratech-mobile-1/600/400",
    models: [
      { name: "SP6", image: "https://picsum.photos/seed/spectratech-mobile-sp6/600/400" }
    ]
  },
  {
    id: "handheld-xrf-analyzer",
    name: "Handheld XRF Analyzer",
    slug: "handheld-xrf-analyzer",
    description: "Fast, accurate non-destructive elemental analysis anywhere.",
    image: "https://picsum.photos/seed/spectratech-xrf-1/600/400",
    models: [
      { name: "JX5", image: "https://picsum.photos/seed/spectratech-xrf-jx5/600/400" },
      { name: "JX6", image: "https://picsum.photos/seed/spectratech-xrf-jx6/600/400" }
    ]
  },
  {
    id: "carbon-sulfur-onh-analyzer",
    name: "Elemental Analysis (Carbon Sulfur / ONH)",
    slug: "carbon-sulfur-onh-analyzer",
    description: "Determine Carbon, Sulfur, Oxygen, Nitrogen, and Hydrogen content with precision.",
    image: "https://picsum.photos/seed/spectratech-cs-1/600/400",
    models: [
      { name: "CS-8820S", image: "https://picsum.photos/seed/spectratech-cs-8820s/600/400" },
      { name: "CS-8820T", image: "https://picsum.photos/seed/spectratech-cs-8820t/600/400" },
      { name: "CS-8800S", image: "https://picsum.photos/seed/spectratech-cs-8800s/600/400" },
      { name: "ONH-2018", image: "https://picsum.photos/seed/spectratech-onh-2018/600/400" }
    ]
  },
  {
    id: "desktop-edxrf-spectrometer",
    name: "XRF Spectrometer (Desktop)",
    slug: "desktop-edxrf-spectrometer",
    description: "Desktop energy-dispersive X-ray fluorescence spectrometers.",
    image: "https://picsum.photos/seed/spectratech-desktop-1/600/400",
    models: [
      { name: "TY-9800", image: "https://picsum.photos/seed/spectratech-desktop-ty9800/600/400" },
      { name: "P9800", image: "https://picsum.photos/seed/spectratech-desktop-p9800/600/400" },
      { name: "JXT-6800", image: "https://picsum.photos/seed/spectratech-desktop-jxt6800/600/400" },
      { name: "JXT6", image: "https://picsum.photos/seed/spectratech-desktop-jxt6/600/400" }
    ]
  },
  {
    id: "icp-oes",
    name: "ICP-OES/AES",
    slug: "icp-oes",
    description: "Inductively coupled plasma optical emission spectroscopy for trace elements.",
    image: "https://picsum.photos/seed/spectratech-icp-1/600/400",
    models: [] // Placeholder for future additions
  },
  {
    id: "crms-consumables",
    name: "CRMs & Consumables",
    slug: "crms-consumables",
    description: "Certified Reference Materials and essential consumables for daily operations.",
    image: "https://picsum.photos/seed/spectratech-crms-1/600/400",
    models: [] // Placeholder for future additions
  }
];
