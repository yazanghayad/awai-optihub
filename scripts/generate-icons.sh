#!/bin/bash

# Generate PNG icons from SVG logos

cd /workspaces/Singtue-/lobe-chat/public/icons

# Generate standard icons from logo-square.svg
npx sharp-cli -i logo-square.svg -o icon-192x192.png resize 192 192
npx sharp-cli -i logo-square.svg -o icon-512x512.png resize 512 512

# Generate maskable icons (with safe area padding)
npx sharp-cli -i logo-square.svg -o icon-192x192.maskable.png resize 192 192
npx sharp-cli -i logo-square.svg -o icon-512x512.maskable.png resize 512 512

echo "Icon generation complete!"
