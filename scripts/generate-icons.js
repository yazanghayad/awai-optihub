const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../public/icons');
const logoPath = path.join(iconsDir, 'logo-square.svg');

async function generateIcons() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(logoPath);
    
    // Generate different sizes
    const sizes = [
      { name: 'icon-192x192.png', size: 192 },
      { name: 'icon-512x512.png', size: 512 },
      { name: 'icon-192x192.maskable.png', size: 192 },
      { name: 'icon-512x512.maskable.png', size: 512 }
    ];
    
    for (const { name, size } of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(iconsDir, name));
      console.log(`Generated ${name}`);
    }
    
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
