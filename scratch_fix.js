const fs = require('fs');
const file = 'd:\\Projects\\spectra-tech\\spectra-tech\\lib\\data\\products.js';
let content = fs.readFileSync(file, 'utf8');

// Replace `specs: \n          "table_type": "grid",` with `specs: {\n          "table_type": "grid",`
content = content.replace(/specs:\s+"table_type": "grid"/g, 'specs: {\n          "table_type": "grid"');

fs.writeFileSync(file, content);
console.log('Fixed syntax error in products.js');
