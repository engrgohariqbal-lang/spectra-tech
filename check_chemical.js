const https = require('https');
https.get('https://www.jinyibo.com/chemical_n22', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const match = data.match(/src="([^"]+\.jpg)"/gi);
    console.log(match);
  });
});
