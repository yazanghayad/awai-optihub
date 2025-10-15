const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../public/icons');
const desktopBuildDir = path.join(__dirname, '../apps/desktop/build');
const logoPath = path.join(iconsDir, 'logo-square.svg');

async function generateDesktopIcons() {
  try {
    const svgBuffer = fs.readFileSync(logoPath);
    
    // Generate main desktop icons
    const variants = ['', '-beta', '-dev', '-nightly'];
    
    for (const variant of variants) {
      // Generate PNG (1024x1024 for high quality)
      await sharp(svgBuffer)
        .resize(1024, 1024)
        .png()
        .toFile(path.join(desktopBuildDir, `icon${variant}.png`));
      console.log(`Generated icon${variant}.png`);
      
      // Generate ICO (256x256)
      await sharp(svgBuffer)
        .resize(256, 256)
        .png()
        .toFile(path.join(desktopBuildDir, `icon${variant}.ico`));
      console.log(`Generated icon${variant}.ico`);
    }
    
    console.log('All desktop icons generated successfully!');
    console.log('Note: .icns and .Assets.car files need to be generated on macOS');
  } catch (error) {
    console.error('Error generating desktop icons:', error);
  }
}

generateDesktopIcons();
