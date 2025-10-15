const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const iconsDir = path.join(publicDir, 'icons');
const desktopBuildDir = path.join(__dirname, '../apps/desktop/build');
const logoPath = path.join(iconsDir, 'logo-square.svg');

async function generateAllLogos() {
  try {
    console.log('🎨 Starting logo generation...\n');
    const svgBuffer = fs.readFileSync(logoPath);
    
    // 1. Web App Icons
    console.log('📱 Generating web app icons...');
    const webIcons = [
      { name: 'icon-192x192.png', size: 192 },
      { name: 'icon-512x512.png', size: 512 },
      { name: 'icon-192x192.maskable.png', size: 192 },
      { name: 'icon-512x512.maskable.png', size: 512 }
    ];
    
    for (const { name, size } of webIcons) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(iconsDir, name));
      console.log(`  ✓ ${name}`);
    }
    
    // 2. Favicons
    console.log('\n🌐 Generating favicons...');
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.ico'));
    console.log('  ✓ favicon-32x32.ico');
    
    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('  ✓ favicon.ico');
    
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('  ✓ apple-touch-icon.png');
    
    // 3. Desktop App Icons
    console.log('\n🖥️  Generating desktop app icons...');
    const variants = ['', '-beta', '-dev', '-nightly'];
    
    for (const variant of variants) {
      await sharp(svgBuffer)
        .resize(1024, 1024)
        .png()
        .toFile(path.join(desktopBuildDir, `icon${variant}.png`));
      console.log(`  ✓ icon${variant}.png`);
      
      await sharp(svgBuffer)
        .resize(256, 256)
        .png()
        .toFile(path.join(desktopBuildDir, `icon${variant}.ico`));
      console.log(`  ✓ icon${variant}.ico`);
    }
    
    console.log('\n✨ All logos generated successfully!');
    console.log('\n📝 Note: .icns and .Assets.car files need to be generated on macOS');
    console.log('   Run: iconutil -c icns icon.iconset (after preparing iconset)');
    
  } catch (error) {
    console.error('\n❌ Error generating logos:', error);
    process.exit(1);
  }
}

generateAllLogos();
