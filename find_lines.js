const fs = require('fs');
const lines = fs.readFileSync('d:\\Projects\\spectra-tech\\spectra-tech\\lib\\data\\products.js', 'utf8').split('\n');

let startLine = -1;
let endLine = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('name: "ALCAN Certified Reference Materials"')) {
    console.log("ALCAN found at line:", i + 1);
  }
  if (lines[i].includes('name: "Polishing Cloth for Metallographic Polishing"')) {
    console.log("Polishing Cloth found at line:", i + 1);
    startLine = i + 1; // 1-indexed
  }
  if (lines[i].includes('name: "Diamond spray polish Metallographic Polishing Consumables"')) {
    console.log("Diamond spray found at line:", i + 1);
  }
}
