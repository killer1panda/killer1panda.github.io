#!/bin/bash

echo "Optimizing images..."

# Create optimized directory
mkdir -p assets/optimized

for file in assets/*.{png,jpg,jpeg}; do
    if [ -f "$file" ]; then
        base=$(basename "$file" .${file##*.})
        # Convert to WebP
        cwebp -q 80 "$file" -o "assets/optimized/${base}.webp"
        echo "Converted $file to WebP"
    fi
done

echo "Optimization complete."