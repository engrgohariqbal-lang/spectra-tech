const https = require('https');
const fs = require('fs');
const file = 'd:\\Projects\\spectra-tech\\spectra-tech\\lib\\data\\products.js';

const fileMapping = {
  "SUS Certified Reference Materials": "https://www.jinyibo.com/sus-certified-reference-materials_p59.html",
  "MBH Certified Reference Materials": "https://www.jinyibo.com/mbh-certified-reference-materials_p58.html",
  "BS Certified Reference Materials": "https://www.jinyibo.com/bs-certified-reference-materials_p57.html",
  "ARMI Certified Reference Materials": "https://www.jinyibo.com/armi-certified-reference-materials_p56.html",
  "ALCOA Certified Reference Materials": "https://www.jinyibo.com/alcoa-certified-reference-materials_p55.html",
  "ALCAN Certified Reference Materials": "https://www.jinyibo.com/alcan-certified-reference-materials_p54.html"
};

const results = {};

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

function processHTML(name, content) {
  const tableRegex = /<table[^>]*>([\s\S]*?)<\/table>/gi;
  let tableMatch;
  let tables = [];
  
  while ((tableMatch = tableRegex.exec(content)) !== null) {
    tables.push(tableMatch[1]);
  }
  
  const categories = {};
  
  for (const tableHtml of tables) {
    const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let trMatch;
    
    let currentCategory = null;
    
    while ((trMatch = trRegex.exec(tableHtml)) !== null) {
      const trHtml = trMatch[1];
      const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;
      let tdMatch;
      const cells = [];
      
      while ((tdMatch = tdRegex.exec(trHtml)) !== null) {
        let text = tdMatch[1]
          .replace(/<[^>]+>/g, ' ')
          .replace(/&nbsp;/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        cells.push(text);
      }
      
      let validCells = cells.filter(c => c !== '');
      if (validCells.length === 1 && trHtml.includes('colspan')) {
        currentCategory = validCells[0];
        if (!categories[currentCategory]) categories[currentCategory] = [];
      } else if (validCells.length === 1 && cells.length === 1) {
        currentCategory = validCells[0];
        if (!categories[currentCategory]) categories[currentCategory] = [];
      } else if (validCells.length > 1) {
        if (!currentCategory) {
          currentCategory = "General";
          if (!categories[currentCategory]) categories[currentCategory] = [];
        }
        categories[currentCategory].push(cells.map(c => c.trim()));
      }
    }
  }
  
  results[name] = categories;
}

function updateFile() {
  let content = fs.readFileSync(file, 'utf8');
  for (const [crmName, specs] of Object.entries(results)) {
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
}

let pending = Object.keys(fileMapping).length;

for (const [name, url] of Object.entries(fileMapping)) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      processHTML(name, data);
      pending--;
      if (pending === 0) updateFile();
    });
  }).on('error', (err) => {
    console.log(`Error: ${err.message}`);
    pending--;
    if (pending === 0) updateFile();
  });
}
