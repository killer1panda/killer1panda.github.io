#!/bin/bash

echo "Image Audit Report"
echo "=================="
echo ""

for file in assets/*.{png,jpg,jpeg,webp,gif}; do
    if [ -f "$file" ]; then
        echo "File: $file"
        echo "Size: $(du -h "$file" | cut -f1)"
        echo "Format: $(file -b "$file")"
        dimensions=$(identify -format "%wx%h" "$file" 2>/dev/null)
        if [ $? -eq 0 ]; then
            echo "Dimensions: $dimensions"
        else
            echo "Dimensions: Unable to determine"
        fi
        echo ""
    fi
done