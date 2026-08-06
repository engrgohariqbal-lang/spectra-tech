const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const slugs = ['chemical_n22', 'electric-power_n33', 'services_n34', 'cement_n35', 'geology_n36'];
const imgDir = path.join(__dirname, 'public', 'images', 'applications');

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function downloadImage(url, destWebp) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', async () => {
        const buffer = Buffer.concat(chunks);
        try {
          await sharp(buffer).webp({ quality: 82 }).toFile(destWebp);
          console.log(`Saved: ${destWebp}`);
          resolve();
        } catch (e) {
          console.error("Error processing image: ", e);
          resolve();
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const slug of slugs) {
    const html = await fetchHtml(`https://www.jinyibo.com/${slug}`);
    
    // Find first image in tinymce or news that is not small
    let match = html.match(/src="(\/js\/tinymce\/demo\/images\/[^"]+\.jpg)"/i);
    if (!match) {
        match = html.match(/src="(\/uploadfile\/news\/[^"]*(?<!_small)\.jpg)"/i);
    }
    
    if (match && match[1]) {
      const imgUrl = 'https://www.jinyibo.com' + match[1];
      const name = slug.split('_')[0];
      const dest = path.join(imgDir, `${name}.webp`);
      await downloadImage(imgUrl, dest);
    } else {
      console.log(`No image found for ${slug}`);
    }
  }
}

run();
