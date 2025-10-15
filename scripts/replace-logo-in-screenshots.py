#!/usr/bin/env python3
"""
Script to replace emoji logo with AWAI logo in screenshots
"""

import os
from PIL import Image, ImageDraw, ImageFont
import cairosvg
from io import BytesIO

# Paths
SCREENSHOTS_DIR = '/workspaces/Singtue-/lobe-chat/public/screenshots'
LOGO_SVG_PATH = '/workspaces/Singtue-/lobe-chat/public/icons/logo.svg'

def svg_to_png(svg_path, width, height):
    """Convert SVG to PNG with specified dimensions"""
    png_data = cairosvg.svg2png(
        url=svg_path,
        output_width=width,
        output_height=height
    )
    return Image.open(BytesIO(png_data)).convert('RGBA')

def replace_logo_and_text(image_path, logo_size, cover_area, logo_position, text_position, is_mobile=False):
    """
    Replace emoji with AWAI logo and change text
    
    Args:
        image_path: Path to screenshot
        logo_size: (width, height) for new logo
        cover_area: (x1, y1, x2, y2) area to cover old logo/text
        logo_position: (x, y) position for new logo
        text_position: (x, y) position for "AWAI" text
        is_mobile: True if mobile screenshot
    """
    # Open screenshot
    img = Image.open(image_path).convert('RGBA')
    
    # Create a white layer to cover old logo and text
    cover = Image.new('RGBA', img.size, (255, 255, 255, 0))
    draw_cover = ImageDraw.Draw(cover)
    
    # Cover the old emoji logo and old text with white/background color
    # Sample background color from area near logo
    bg_color = img.getpixel((cover_area[0] + 10, cover_area[1] + 10))
    draw_cover.rectangle(cover_area, fill=bg_color[:3] + (255,))
    
    # Composite the cover
    img = Image.alpha_composite(img, cover)
    
    # Add new AWAI logo
    logo = svg_to_png(LOGO_SVG_PATH, logo_size[0], logo_size[1])
    img.paste(logo, logo_position, logo)
    
    # Add "AWAI" text
    draw = ImageDraw.Draw(img)
    
    # Try to load a nice font, fallback to default
    try:
        # Larger font for desktop, smaller for mobile
        font_size = 24 if not is_mobile else 16
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except:
        font = ImageFont.load_default()
    
    # Draw "AWAI" text in dark color
    text_color = (82, 89, 66)  # Same as logo background color #525942
    draw.text(text_position, "AWAI", fill=text_color, font=font)
    
    # Convert back to RGB and save
    img = img.convert('RGB')
    img.save(image_path, 'PNG', optimize=True)
    print(f"✅ Updated: {image_path}")

def main():
    print("🔄 Replacing logos in screenshots...")
    
    # Desktop screenshot - shot-1.desktop.png (1280x676)
    desktop_path = os.path.join(SCREENSHOTS_DIR, 'shot-1.desktop.png')
    if os.path.exists(desktop_path):
        replace_logo_and_text(
            image_path=desktop_path,
            logo_size=(80, 80),           # Size of new logo
            cover_area=(20, 20, 200, 140), # Area to cover (x1, y1, x2, y2)
            logo_position=(30, 30),        # Where to place new logo
            text_position=(30, 120),       # Where to place "AWAI" text
            is_mobile=False
        )
    
    # Mobile screenshot - shot-1.mobile.png
    mobile_path = os.path.join(SCREENSHOTS_DIR, 'shot-1.mobile.png')
    if os.path.exists(mobile_path):
        replace_logo_and_text(
            image_path=mobile_path,
            logo_size=(48, 48),           # Smaller logo for mobile
            cover_area=(10, 10, 120, 90), # Area to cover
            logo_position=(15, 15),       # Where to place new logo
            text_position=(15, 70),       # Where to place "AWAI" text
            is_mobile=True
        )
    
    print("✨ All done!")

if __name__ == '__main__':
    main()
