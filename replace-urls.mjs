import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const mapping = JSON.parse(readFileSync(join('..', 'scraps', 'url-mapping-webp.json'), 'utf-8'));

const SRC_DIR = '.';
const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.mjs'];
const EXCLUDE_DIRS = ['node_modules', '.next', '.git', 'public', 'scraps'];

function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  let modified = false;
  
  for (const [oldUrl, newPath] of Object.entries(mapping)) {
    if (content.includes(oldUrl)) {
      content = content.replaceAll(oldUrl, newPath);
      modified = true;
      console.log(`  Replaced: ${oldUrl.substring(0, 60)}... -> ${newPath}`);
    }
  }
  
  if (modified) {
    writeFileSync(filePath, content);
    return true;
  }
  return false;
}

function walkDir(dirPath) {
  let count = 0;
  const entries = readdirSync(dirPath);
  
  for (const entry of entries) {
    if (EXCLUDE_DIRS.includes(entry)) continue;
    
    const fullPath = join(dirPath, entry);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      count += walkDir(fullPath);
    } else if (EXTENSIONS.includes(extname(entry).toLowerCase())) {
      const wasModified = processFile(fullPath);
      if (wasModified) {
        console.log(`Modified: ${fullPath}`);
        count++;
      }
    }
  }
  
  return count;
}

console.log('Replacing external image URLs with local WebP paths...\n');
const modifiedCount = walkDir(SRC_DIR);
console.log(`\nDone! Modified ${modifiedCount} files.`);
