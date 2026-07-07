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
    image: "/products/w4.jpg", // Placeholder expected as per brief
    models: [
      { name: "W4", image: "/products/placeholder.svg" },
      { name: "W5", image: "/products/placeholder.svg" },
      { name: "W6", image: "/products/placeholder.svg" }
    ]
  },
  {
    id: "mobile-metal-analyzer",
    name: "Mobile Metal Analyzer",
    slug: "mobile-metal-analyzer",
    description: "Portable metal analysis for fast on-site grade identification.",
    image: "/products/placeholder.svg",
    models: [
      { name: "SP6", image: "/products/placeholder.svg" }
    ]
  },
  {
    id: "handheld-xrf-analyzer",
    name: "Handheld XRF Analyzer",
    slug: "handheld-xrf-analyzer",
    description: "Fast, accurate non-destructive elemental analysis anywhere.",
    image: "/products/jx5jx6.jpg",
    models: [
      { name: "JX5", image: "/products/placeholder.svg" },
      { name: "JX6", image: "/products/placeholder.svg" }
    ]
  },
  {
    id: "carbon-sulfur-onh-analyzer",
    name: "Elemental Analysis (Carbon Sulfur / ONH)",
    slug: "carbon-sulfur-onh-analyzer",
    description: "Determine Carbon, Sulfur, Oxygen, Nitrogen, and Hydrogen content with precision.",
    image: "/products/cs8820s.jpg",
    models: [
      { name: "CS-8820S", image: "/products/placeholder.svg" },
      { name: "CS-8820T", image: "/products/placeholder.svg" },
      { name: "CS-8800S", image: "/products/placeholder.svg" },
      { name: "ONH-2018", image: "/products/placeholder.svg" }
    ]
  },
  {
    id: "desktop-edxrf-spectrometer",
    name: "XRF Spectrometer (Desktop)",
    slug: "desktop-edxrf-spectrometer",
    description: "Desktop energy-dispersive X-ray fluorescence spectrometers.",
    image: "/products/ty9800.jpg",
    models: [
      { name: "TY-9800", image: "/products/placeholder.svg" },
      { name: "P9800", image: "/products/placeholder.svg" },
      { name: "JXT-6800", image: "/products/placeholder.svg" },
      { name: "JXT6", image: "/products/placeholder.svg" }
    ]
  },
  {
    id: "icp-oes",
    name: "ICP-OES/AES",
    slug: "icp-oes",
    description: "Inductively coupled plasma optical emission spectroscopy for trace elements.",
    image: "/products/placeholder.svg",
    models: [] // Placeholder for future additions
  },
  {
    id: "crms-consumables",
    name: "CRMs & Consumables",
    slug: "crms-consumables",
    description: "Certified Reference Materials and essential consumables for daily operations.",
    image: "/products/placeholder.svg",
    models: [] // Placeholder for future additions
  }
];
