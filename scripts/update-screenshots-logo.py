#!/usr/bin/env python3
"""
Script to update logo in screenshot images
Replaces old logo with new AWAI logo
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
    return Image.open(BytesIO(png_data))

def add_logo_to_screenshot(screenshot_path, logo_image, position='top-left', padding=40):
    """Add logo to screenshot image"""
    # Open screenshot
    screenshot = Image.open(screenshot_path).convert('RGBA')
    
    # Calculate logo position
    if position == 'top-left':
        x = padding
        y = padding
    elif position == 'top-center':
        x = (screenshot.width - logo_image.width) // 2
        y = padding
    elif position == 'top-right':
        x = screenshot.width - logo_image.width - padding
        y = padding
    
    # Composite logo onto screenshot
    screenshot.paste(logo_image, (x, y), logo_image)
    
    # Save
    screenshot.save(screenshot_path, 'PNG')
    print(f"Updated: {screenshot_path}")

def main():
    # Desktop screenshots - larger logo
    desktop_logo = svg_to_png(LOGO_SVG_PATH, 120, 120)
    
    # Mobile screenshots - smaller logo
    mobile_logo = svg_to_png(LOGO_SVG_PATH, 60, 60)
    
    # Update shot-1 images
    desktop_shot = os.path.join(SCREENSHOTS_DIR, 'shot-1.desktop.png')
    mobile_shot = os.path.join(SCREENSHOTS_DIR, 'shot-1.mobile.png')
    
    if os.path.exists(desktop_shot):
        add_logo_to_screenshot(desktop_shot, desktop_logo, position='top-left', padding=40)
    
    if os.path.exists(mobile_shot):
        add_logo_to_screenshot(mobile_shot, mobile_logo, position='top-left', padding=20)
    
    print("✅ Logo updated successfully in screenshots!")

if __name__ == '__main__':
    main()
