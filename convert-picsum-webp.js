const sharp = require('sharp');
const { readdirSync, readFileSync, writeFileSync, statSync, existsSync } = require('node:fs');
const { join, extname, basename } = require('node:path');

// Convert only newly added files (misc and newly added banner files)
const dirs = [
  join(__dirname, 'public', 'images', 'products', 'misc'),
];

// Also check banners for new files
const bannersDir = join(__dirname, 'public', 'images', 'products', 'banners');

async function convertNewFiles() {
  const allDirs = [...dirs, bannersDir];
  let converted = 0;
  
  for (const dir of allDirs) {
    if (!existsSync(dir)) continue;
    const entries = readdirSync(dir);
    
    for (const entry of entries) {
      const ext = extname(entry).toLowerCase();
      if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') continue;
      
      const webpName = basename(entry, ext) + '.webp';
      const webpPath = join(dir, webpName);
      
      // Skip if already converted
      if (existsSync(webpPath)) {
        console.log(`Skipping (already exists): ${webpName}`);
        continue;
      }
      
      const fullPath = join(dir, entry);
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
  }
  
  console.log(`\nConverted ${converted} additional images.`);
  
  // Update picsum mapping to use webp
  const picsumMapping = JSON.parse(readFileSync(join(__dirname, '..', 'scraps', 'picsum-mapping.json'), 'utf-8'));
  const webpMapping = {};
  for (const [url, path] of Object.entries(picsumMapping)) {
    webpMapping[url] = path.replace(/\.jpg$/i, '.webp');
  }
  writeFileSync(join(__dirname, '..', 'scraps', 'picsum-mapping-webp.json'), JSON.stringify(webpMapping, null, 2));
  console.log('WebP mapping saved to picsum-mapping-webp.json');
}

convertNewFiles();
