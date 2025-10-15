const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const iconsDir = path.join(publicDir, 'icons');
const logoPath = path.join(iconsDir, 'logo-square.svg');

async function generateFavicons() {
  try {
    const svgBuffer = fs.readFileSync(logoPath);
    
    // Generate favicon.ico (32x32 PNG first, then convert)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.ico'));
    console.log('Generated favicon-32x32.ico');
    
    // Generate favicon.ico (16x16)
    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('Generated favicon.ico');
    
    // Generate apple-touch-icon
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('Generated apple-touch-icon.png');
    
    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
