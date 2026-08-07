const fs = require('fs');
const content = fs.readFileSync('d:\\Projects\\spectra-tech\\spectra-tech\\lib\\data\\products.js', 'utf8');

// Find the category names
const matches = content.match(/category:\s*["']([^"']+)["']/g);
console.log("Categories found:", matches);

// Let's also check the title/name of the CRM category
const nameMatches = content.match(/name:\s*["']([^"']+)["']/g);
console.log("First few names:", nameMatches ? nameMatches.slice(0, 10) : null);
