#!/usr/bin/env python3
import os
import re
import sys

def main():
    root_dir = "/Users/ajay/teamwork_projects/sota_wishes_templates"
    
    # Generate list of the 80 legacy template files
    expected_files = []
    for i in range(1, 41):
        style_str = f"style_{i:02d}"
        expected_files.append(f"{style_str}_head_core.html")
        expected_files.append(f"{style_str}_executive.html")
        
    failed = False
    
    print(f"Verifying {len(expected_files)} legacy template files...")
    
    for filename in expected_files:
        filepath = os.path.join(root_dir, filename)
        if not os.path.exists(filepath):
            print(f"Error: {filename} does not exist!")
            failed = True
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extract style tags
        style_blocks = re.findall(r'<style[^>]*>(.*?)</style>', content, re.DOTALL | re.IGNORECASE)
        # Extract script tags
        script_blocks = re.findall(r'<script[^>]*>(.*?)</script>', content, re.DOTALL | re.IGNORECASE)
        
        # Check 1: No occurrences of '.profile-frame' exist in style tags or scripts
        # unless it is part of '.profile-photo-frame'.
        # We can search for the regex '\.profile-frame(?!-photo-frame)'
        forbidden_pattern = r'\.profile-frame(?!-photo-frame)'
        
        style_errors = []
        for idx, block in enumerate(style_blocks):
            matches = re.findall(forbidden_pattern, block)
            if matches:
                style_errors.append(f"Style block {idx+1} contains forbidden selector '.profile-frame'")
                
        script_errors = []
        for idx, block in enumerate(script_blocks):
            matches = re.findall(forbidden_pattern, block)
            if matches:
                script_errors.append(f"Script block {idx+1} contains forbidden selector '.profile-frame'")
                
        # Check 2: The string '.profile-photo-frame' is present in style tags and scripts where it replaces the old selector
        has_photo_frame_in_style = any('.profile-photo-frame' in block for block in style_blocks)
        has_photo_frame_in_script = any('.profile-photo-frame' in block for block in script_blocks)
        
        file_ok = True
        
        if style_errors or script_errors:
            print(f"[-] {filename} FAILED check 1 (forbidden '.profile-frame' found):")
            for err in style_errors:
                print(f"    - {err}")
            for err in script_errors:
                print(f"    - {err}")
            file_ok = False
            
        if not has_photo_frame_in_style:
            print(f"[-] {filename} FAILED check 2: '.profile-photo-frame' not found in any style tags.")
            file_ok = False
            
        if not has_photo_frame_in_script:
            print(f"[-] {filename} FAILED check 2: '.profile-photo-frame' not found in any script tags.")
            file_ok = False
            
        if file_ok:
            # Optionally print detail, but keep it clean
            pass
        else:
            failed = True
            
    if failed:
        print("\nVerification FAILED. Some templates do not meet the criteria.")
        sys.exit(1)
    else:
        print("\nVerification PASSED successfully! All 80 legacy template files are correct.")
        sys.exit(0)

if __name__ == '__main__':
    main()
