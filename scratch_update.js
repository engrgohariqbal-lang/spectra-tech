const fs = require("fs");

const file = "d:\\Projects\\spectra-tech\\spectra-tech\\lib\\data\\products.js";
let content = fs.readFileSync(file, "utf8");

const mapping = {
  "SUS Certified Reference Materials": "sus-certified-reference-materials.webp",
  "MBH Certified Reference Materials": "mbh-certified-reference-materials.webp",
  "BS Certified Reference Materials": "bs-certified-reference-materials.webp",
  "ARMI Certified Reference Materials":
    "armi-certified-reference-materials.webp",
  "ALCOA Certified Reference Materials":
    "alcoa-certified-reference-materials.webp",
  "ALCAN Certified Reference Materials":
    "alcan-certified-reference-materials.webp",
  "Polishing Cloth for Metallographic Polishing":
    "polishing-cloth-for-metallographic-polishing.webp",
  "Metallographic Grinding Sandpaper For Sample Preparation":
    "metallographic-grinding-sandpaper-for-sample-preparation.webp",
  "Sharp Fast Cutting Wheel for Metal and Inox":
    "sharp-fast-cutting-wheel-for-metal-and-inox.webp",
  "Diamond Compound Abrasive Lapping Compound Polishing Paste":
    "diamond-compound-abrasive-lapping-compound-polishing-paste.webp",
  "Single crystal diamond polishing slurry":
    "single-crystal-diamond-polishing-slurry.webp",
  "Diamond spray polish Metallographic Polishing Consumables":
    "diamond-spray-polish-metallographic-polishing-consumables.webp",
};

for (const [name, imgFile] of Object.entries(mapping)) {
  const nameStr = `name: "${name}",`;
  const nameIndex = content.indexOf(nameStr);
  if (nameIndex === -1) {
    console.error("Could not find", name);
    continue;
  }

  const imgUrl = `/images/products/crms/${imgFile}`;

  // Find the next image: and gallery: and replace them
  const imgRegex = /image:\s*"[^"]+"/;
  const galleryRegex = /gallery:\s*\[\s*"[^"]+"\s*\]/;

  const afterName = content.slice(nameIndex);

  // Replace the FIRST occurrence of image and gallery after the name
  let newAfterName = afterName.replace(imgRegex, `image: "${imgUrl}"`);
  newAfterName = newAfterName.replace(galleryRegex, `gallery: ["${imgUrl}"]`);

  content = content.slice(0, nameIndex) + newAfterName;
}

fs.writeFileSync(file, content, "utf8");
console.log("Updated products.js");
