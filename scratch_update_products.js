const fs = require('fs');

const file = 'd:\\Projects\\spectra-tech\\spectra-tech\\lib\\data\\products.js';
let content = fs.readFileSync(file, 'utf8');

const specsData = JSON.parse(fs.readFileSync('scratch/crm_specs.json', 'utf8'));

function formatSpecs(specs) {
  let str = '{\n';
  str += '          "table_type": "grid",\n';
  str += '          "categories": {\n';
  const categories = Object.entries(specs);
  categories.forEach(([cat, rows], catIdx) => {
    if (rows && rows.length > 0) {
      str += `            "${cat.replace(/"/g, '\\"').replace(/\n/g, ' ')}": [\n`;
      rows.forEach((row, rowIdx) => {
        str += `              [${row.map(cell => `"${cell.replace(/"/g, '\\"').replace(/\n/g, ' ')}"`).join(', ')}]${rowIdx < rows.length - 1 ? ',' : ''}\n`;
      });
      str += `            ]${catIdx < categories.length - 1 ? ',' : ''}\n`;
    }
  });
  
  if (str.endsWith(',\n')) {
      str = str.slice(0, -2) + '\n';
  }
  str += '          }\n        }';
  return str;
}

for (const [crmName, specs] of Object.entries(specsData)) {
  const searchStr = `name: "${crmName}",`;
  const nameIndex = content.indexOf(searchStr);
  if (nameIndex === -1) {
    console.error("Could not find", crmName);
    continue;
  }

  const afterName = content.slice(nameIndex);
  const specsIndex = afterName.indexOf('specs: {');
  
  if (specsIndex !== -1) {
    let braceCount = 0;
    let i = specsIndex + 7;
    let endIndex = -1;
    
    for (; i < afterName.length; i++) {
      if (afterName[i] === '{') braceCount++;
      else if (afterName[i] === '}') {
        braceCount--;
        if (braceCount === 0) {
          endIndex = i;
          break;
        }
      }
    }
    
    if (endIndex !== -1) {
      const formattedSpecs = formatSpecs(specs);
      const newAfterName = afterName.slice(0, specsIndex + 7) + formattedSpecs.substring(1) + afterName.slice(endIndex + 1);
      content = content.slice(0, nameIndex) + newAfterName;
      console.log(`Updated specs for ${crmName}`);
    }
  }
}

fs.writeFileSync(file, content);
console.log('Successfully updated products.js');
