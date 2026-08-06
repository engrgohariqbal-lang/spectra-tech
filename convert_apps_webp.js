const sharp = require('sharp');
const { readdirSync, readFileSync, statSync } = require('node:fs');
const { join, extname, basename } = require('node:path');

const ABS_DIR = join(__dirname, 'public', 'images', 'applications');

async function convertDir(dirPath) {
  const entries = readdirSync(dirPath);
  let converted = 0;
  
  for (const entry of entries) {
    const fullPath = join(dirPath, entry);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) continue;
    
    const ext = extname(entry).toLowerCase();
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') continue;
    
    const webpName = basename(entry, ext) + '.webp';
    const webpPath = join(dirPath, webpName);
    
    try {
      const inputBuffer = readFileSync(fullPath);
      await sharp(inputBuffer).webp({ quality: 82 }).toFile(webpPath);
      console.log(`Converted: ${entry} -> ${webpName}`);
      converted++;
    } catch (e) {
      console.error(`Failed to convert ${entry}: ${e.message}`);
    }
  }
  return converted;
}

convertDir(ABS_DIR).then(count => console.log(`Total converted: ${count}`));
