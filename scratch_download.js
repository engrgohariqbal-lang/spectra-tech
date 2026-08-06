const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  '/sus-certified-reference-materials_p59.html',
  '/mbh-certified-reference-materials_p58.html',
  '/bs-certified-reference-materials_p57.html',
  '/armi-certified-reference-materials_p56.html',
  '/alcoa-certified-reference-materials_p55.html',
  '/alcan-certified-reference-materials_p54.html',
  '/polishing-cloth-for-metallographic-polishing_p120.html',
  '/metallographic-grinding-sandpaper-for-sample-preparation_p121.html',
  '/sharp-fast-cutting-wheel-for-metal-and-inox_p122.html',
  '/diamond-compound-abrasive-lapping-compound-polishing-paste_p123.html',
  '/single-crystal-diamond-polishing-slurry_p125.html',
  '/diamond-spray-polish-metallographic-polishing-consumables_p124.html'
];

const fetchHtml = (urlPath) => new Promise((resolve, reject) => {
  https.get(`https://www.jinyibo.com${urlPath}`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => resolve(data));
  }).on('error', reject);
});

const downloadImage = (url, filepath) => new Promise((resolve, reject) => {
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      res.pipe(fs.createWriteStream(filepath))
         .on('error', reject)
         .once('close', () => resolve(filepath));
    } else {
      res.resume();
      reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
    }
  });
});

async function main() {
  const outDir = path.join(__dirname, 'public', 'images', 'products', 'crms');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const mapping = {};

  for (const url of urls) {
    console.log(`Processing ${url}...`);
    try {
      const html = await fetchHtml(url);
      
      let imgMatch = html.match(/<meta property="og:image" content="([^"]+)"/is);
      if (imgMatch) {
        let imgUrl = imgMatch[1];
        if (!imgUrl.startsWith('http')) imgUrl = 'https://www.jinyibo.com' + imgUrl;
        
        // Sometimes the og:image is a generic logo if the product image is missing.
        // Let's also check if there is a main product image.
        let bodyImgMatch = html.match(/<div class="pro_img"[^>]*>.*?<img[^>]+src="([^"]+)"/is) || 
                           html.match(/<div class="sp-wrap[^>]*>.*?<a href="([^"]+)"/is) ||
                           html.match(/class="imagezoom"[^>]*href="([^"]+)"/is);
        
        if (bodyImgMatch) {
            let bUrl = bodyImgMatch[1];
            if (!bUrl.startsWith('http')) bUrl = 'https://www.jinyibo.com' + bUrl;
            imgUrl = bUrl;
        }

        const ext = path.extname(imgUrl.split('?')[0]) || '.jpg';
        const basename = path.basename(url, '.html').replace(/_p\d+$/, '');
        const localName = basename + ext;
        const localPath = path.join(outDir, localName);
        
        await downloadImage(imgUrl, localPath);
        console.log(`Downloaded ${imgUrl} to ${localPath}`);
        
        mapping[basename] = { original: imgUrl, local: `/images/products/crms/${localName}` };
      }
    } catch (e) {
      console.log(`Error on ${url}: ${e.message}`);
    }
  }
  fs.writeFileSync(path.join(__dirname, 'scratch', 'crm_downloaded.json'), JSON.stringify(mapping, null, 2));
  console.log('Done downloading.');
}
main();
