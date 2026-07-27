const sharp = require('sharp');
const { readdirSync, readFileSync, writeFileSync, statSync } = require('node:fs');
const { join, extname, basename } = require('node:path');

const BASE_DIR = join(__dirname, 'public', 'images', 'products');
const MAPPING_FILE = join(__dirname, '..', 'scraps', 'url-mapping.json');
const OUTPUT_MAPPING = join(__dirname, '..', 'scraps', 'url-mapping-webp.json');

async function convertDir(dirPath) {
  const entries = readdirSync(dirPath);
  let converted = 0;
  
  for (const entry of entries) {
    const fullPath = join(dirPath, entry);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      converted += await convertDir(fullPath);
      continue;
    }
    
    const ext = extname(entry).toLowerCase();
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') continue;
    
    const webpName = basename(entry, ext) + '.webp';
    const webpPath = join(dirPath, webpName);
    
    try {
      const inputBuffer = readFileSync(fullPath);
      const originalSize = inputBuffer.length;
      
      await sharp(inputBuffer)
        .webp({ quality: 82 })
        .toFile(webpPath);
      
      const webpSize = statSync(webpPath).size;
      const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
      
      console.log(`Converted: ${entry} -> ${webpName} (${(originalSize/1024).toFixed(0)}KB -> ${(webpSize/1024).toFixed(0)}KB, ${savings}% smaller)`);
      converted++;
    } catch (e) {
      console.error(`Failed to convert ${entry}: ${e.message}`);
    }
  }
  
  return converted;
}

async function updateMapping() {
  const mapping = JSON.parse(readFileSync(MAPPING_FILE, 'utf-8'));
  const webpMapping = {};
  
  for (const [url, localPath] of Object.entries(mapping)) {
    const webpPath = localPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    webpMapping[url] = webpPath;
  }
  
  writeFileSync(OUTPUT_MAPPING, JSON.stringify(webpMapping, null, 2));
  console.log('\nWebP URL mapping saved to url-mapping-webp.json');
}

async function main() {
  console.log('Converting images to WebP format...\n');
  const count = await convertDir(BASE_DIR);
  console.log(`\nTotal converted: ${count} images`);
  
  await updateMapping();
}

main();
