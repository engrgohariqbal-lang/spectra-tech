const fs = require('fs');
const content = fs.readFileSync('d:\\Projects\\spectra-tech\\spectra-tech\\lib\\data\\products.js', 'utf8');

const nameMatches = content.match(/name:\s*["']([^"']+)["']/g);
console.log("Names:", nameMatches);
