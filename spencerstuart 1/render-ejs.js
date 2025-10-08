const ejs = require('ejs');
const fs = require('fs');

// No dynamic data needed since we hardcoded the variables
const data = {};

// Render index.ejs
ejs.renderFile('index.ejs', data, (err, html) => {
  if (err) {
    console.error('Error rendering index.ejs:', err);
    return;
  }
  fs.writeFileSync('index.html', html);
  console.log('index.html generated');
});

// Render calendly-verify.ejs
ejs.renderFile('calendly-verify.ejs', data, (err, html) => {
  if (err) {
    console.error('Error rendering calendly-verify.ejs:', err);
    return;
  }
  fs.writeFileSync('calendly-verify.html', html);
  console.log('calendly-verify.html generated');
});