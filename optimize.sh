#!/bin/bash

# Image Optimization Script
# Requires: imagemagick, webp

echo "Optimizing images..."

mkdir -p optimized_assets

for img in assets/*.png assets/*.jpg assets/*.jpeg; do
  if [ -f "$img" ]; then
    filename=$(basename "$img")
    name="${filename%.*}"
    ext="${filename##*.}"
    echo "Processing $filename"
    # Convert to WebP
    cwebp -q 80 "$img" -o "optimized_assets/${name}.webp"
    # Optimize original
    convert "$img" -quality 80 "optimized_assets/${name}.${ext}"
  fi
done

echo "Backing up and replacing assets..."
mv assets assets_backup
mv optimized_assets assets

echo "Image optimization complete. Original files are in assets_backup."