#!/usr/bin/env python3
import glob
import os

def main():
    root_dir = "/Users/ajay/teamwork_projects/sota_wishes_templates"
    
    # Generate list of the 80 legacy template files
    expected_files = []
    for i in range(1, 41):
        style_str = f"style_{i:02d}"
        expected_files.append(f"{style_str}_head_core.html")
        expected_files.append(f"{style_str}_executive.html")
    
    modified_count = 0
    total_replacements = 0
    
    print(f"Starting replacement process in {len(expected_files)} files...")
    
    for filename in expected_files:
        filepath = os.path.join(root_dir, filename)
        if not os.path.exists(filepath):
            print(f"Warning: Expected file {filename} does not exist!")
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Count occurrences of .profile-frame
        occurrences = content.count('.profile-frame')
        
        if occurrences > 0:
            new_content = content.replace('.profile-frame', '.profile-photo-frame')
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Modified {filename}: replaced {occurrences} instances of '.profile-frame' with '.profile-photo-frame'")
            modified_count += 1
            total_replacements += occurrences
        else:
            print(f"Skipped {filename}: no instances of '.profile-frame' found")
            
    print(f"\nReplacement completed. Modified {modified_count}/{len(expected_files)} files with a total of {total_replacements} replacements.")

if __name__ == '__main__':
    main()
