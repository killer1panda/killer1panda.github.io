#!/usr/bin/env python3
import os
import re
import sys

# Directory constants
ROOT_DIR = "/Users/ajay/teamwork_projects/sota_wishes_templates"

def check_file_existence_and_naming():
    """
    Checks that exactly 80 files matching naming convention exist in root.
    Returns:
        dict: {filename: exists_boolean}
    """
    expected_files = []
    for i in range(1, 41):
        style_str = f"style_{i:02d}"
        expected_files.append(f"{style_str}_head_core.html")
        expected_files.append(f"{style_str}_executive.html")
    
    results = {}
    for filename in expected_files:
        filepath = os.path.join(ROOT_DIR, filename)
        results[filename] = os.path.exists(filepath)
    
    return results

def analyze_html_file(filename):
    """
    Statically analyzes an HTML file for all constraints.
    Returns a dictionary of check name -> (status, detail).
    """
    filepath = os.path.join(ROOT_DIR, filename)
    checks = {}
    
    if not os.path.exists(filepath):
        return {"existence": (False, "File does not exist")}
        
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception as e:
        return {"read": (False, f"Failed to read file: {e}")}
        
    # Check 1: Valid HTML Structure
    has_doctype = bool(re.search(r"<!DOCTYPE\s+html", content, re.IGNORECASE))
    has_html_start = "<html" in content.lower()
    has_html_end = "</html>" in content.lower()
    has_head_start = "<head" in content.lower()
    has_head_end = "</head>" in content.lower()
    has_body_start = "<body" in content.lower()
    has_body_end = "</body>" in content.lower()
    
    html_structure_ok = (has_doctype and has_html_start and has_html_end and 
                         has_head_start and has_head_end and has_body_start and has_body_end)
    missing_elements = []
    if not has_doctype: missing_elements.append("DOCTYPE")
    if not (has_html_start and has_html_end): missing_elements.append("html")
    if not (has_head_start and has_head_end): missing_elements.append("head")
    if not (has_body_start and has_body_end): missing_elements.append("body")
    
    checks["html_structure"] = (
        html_structure_ok, 
        "Valid HTML structure" if html_structure_ok else f"Missing structural elements: {', '.join(missing_elements)}"
    )
    
    # Extract head content for sub-checks
    head_content = ""
    head_match = re.search(r"<head[^>]*>(.*?)</head>", content, re.DOTALL | re.IGNORECASE)
    if head_match:
        head_content = head_match.group(1)
        
    # Check 2: Google Fonts in head
    has_google_fonts = "fonts.googleapis.com" in head_content or "fonts.gstatic.com" in head_content
    checks["google_fonts"] = (
        has_google_fonts,
        "Google Fonts imported in head" if has_google_fonts else "Google Fonts import not found in head"
    )
    
    # Check 3: Responsive meta viewport tag
    has_viewport = False
    if head_content:
        viewport_match = re.search(r'<meta\s+name=["\']viewport["\']\s+content=["\']width=device-width,\s*initial-scale=1(\.0)?["\']', head_content, re.IGNORECASE)
        if viewport_match:
            has_viewport = True
        else:
            has_viewport = bool(re.search(r'<meta[^>]*name=["\']viewport["\'][^>]*content=["\'][^"\']*width=device-width[^"\']*["\']', head_content, re.IGNORECASE) or
                                re.search(r'<meta[^>]*content=["\'][^"\']*width=device-width[^"\']*["\'][^]*name=["\']viewport["\']', head_content, re.IGNORECASE))
                            
    checks["meta_viewport"] = (
        has_viewport,
        "Responsive meta viewport tag found" if has_viewport else "Viewport meta tag missing or invalid in head"
    )
    
    # Check 4: Aspect-ratio container (1:1 or 9:16)
    aspect_ratio_match = re.search(r'aspect-ratio\s*:\s*(1\s*/\s*1|9\s*/\s*16)', content, re.IGNORECASE)
    has_aspect_ratio = bool(aspect_ratio_match)
    checks["aspect_ratio_container"] = (
        has_aspect_ratio,
        f"Aspect ratio container found ({aspect_ratio_match.group(1) if has_aspect_ratio else 'none'})" if has_aspect_ratio else "Aspect-ratio container (1:1 or 9:16) not found"
    )
    
    # Check 5: At least three inline SVG elements near the top representing logo placeholders
    svg_tags = re.findall(r'<svg[^>]*>.*?</svg>', content, re.DOTALL | re.IGNORECASE)
    has_three_svgs = len(svg_tags) >= 3
    
    branding_found = False
    if has_three_svgs:
        content_lower = content.lower()
        has_ieee = "ieee" in content_lower
        has_upes = "upes" in content_lower
        tech_societies = ["cis", "sps", "wie", "computer society", "cs", "pes", "ras", "comsoc", "society"]
        has_tech_soc = any(soc in content_lower for soc in tech_societies)
        branding_found = has_ieee and has_upes and has_tech_soc
        
    checks["branding_svgs"] = (
        has_three_svgs and branding_found,
        f"Found {len(svg_tags)} inline SVGs with appropriate branding placeholders" if (has_three_svgs and branding_found) else
        f"Found {len(svg_tags)} SVGs. Branding elements (IEEE, UPES, Tech Society) missing or insufficient."
    )
    
    # Check 6: Wishing headers
    has_wishing_header = bool(re.search(r'(happy\s+birthday|wishes\s+happy\s+birthday)', content, re.IGNORECASE))
    checks["wishing_headers"] = (
        has_wishing_header,
        "Wishing header found" if has_wishing_header else "Wishing header ('HAPPY BIRTHDAY' or similar) not found"
    )
    
    # Check 7: Profile photo frame, placeholder name, title matching variant, quote, footer handles
    has_photo_frame = bool(re.search(r'(profile|photo|avatar|frame|img)', content, re.IGNORECASE))
    has_name = bool(re.search(r'(john\s+doe|jane\s+doe|placeholder\s+name|\[name\]|\bname\b)', content, re.IGNORECASE))
    
    is_head_core = "head_core" in filename
    title_matches = False
    if is_head_core:
        title_matches = bool(re.search(r'(chairperson|secretary|editorial\s+head|treasurer|vice\s+chairperson|webmaster)', content, re.IGNORECASE))
        expected_title_desc = "Chairperson/Secretary/Editorial Head/etc."
    else:
        title_matches = bool(re.search(r'(executive\s+committee|advisory\s+board|committee\s+member|volunteer)', content, re.IGNORECASE))
        expected_title_desc = "Executive Committee Member/Advisory Board Member/etc."
        
    has_quote = bool(re.search(r'(quote|wishes|message|blockquote|\bquote\b)', content, re.IGNORECASE))
    has_socials = bool(re.search(r'(@ieeeupes|instagram|facebook|linkedin|twitter|x\.com|social)', content, re.IGNORECASE))
    
    profile_check_ok = has_photo_frame and has_name and title_matches and has_quote and has_socials
    profile_fail_reasons = []
    if not has_photo_frame: profile_fail_reasons.append("photo frame")
    if not has_name: profile_fail_reasons.append("placeholder name")
    if not title_matches: profile_fail_reasons.append(f"title matching variant ({expected_title_desc})")
    if not has_quote: profile_fail_reasons.append("quote")
    if not has_socials: profile_fail_reasons.append("social handles")
    
    checks["profile_section"] = (
        profile_check_ok,
        "Profile elements validated successfully" if profile_check_ok else f"Missing: {', '.join(profile_fail_reasons)}"
    )
    
    return checks

def check_dashboard():
    """
    Verifies index.html dashboard.
    """
    filepath = os.path.join(ROOT_DIR, "index.html")
    checks = {}
    
    if not os.path.exists(filepath):
        return {"existence": (False, "index.html does not exist")}
        
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception as e:
        return {"read": (False, f"Failed to read index.html: {e}")}
        
    # Check 1: Links to all 80 HTML files correctly
    expected_files = []
    for i in range(1, 41):
        style_str = f"style_{i:02d}"
        expected_files.append(f"{style_str}_head_core.html")
        expected_files.append(f"{style_str}_executive.html")
        
    missing_links = []
    for filename in expected_files:
        if filename not in content:
            missing_links.append(filename)
            
    links_ok = len(missing_links) == 0
    checks["dashboard_links"] = (
        links_ok,
        "Links to all 80 files are present" if links_ok else f"Missing links to {len(missing_links)} files"
    )
    
    # Check 2: Responsive layout (viewport and CSS styles)
    has_viewport = bool(re.search(r'<meta[^>]*name=["\']viewport["\'][^>]*content=["\'][^"\']*width=device-width[^"\']*["\']', content, re.IGNORECASE))
    has_responsive_layout = has_viewport and bool(re.search(r'(grid|flex|@media)', content, re.IGNORECASE))
    
    checks["dashboard_layout"] = (
        has_responsive_layout,
        "Dashboard is responsive with grid/flex layout" if has_responsive_layout else "Dashboard missing responsive layout details"
    )
    
    return checks

def run_all_checks():
    print("=" * 60)
    print("SOTA Birthday Wishes Templates Verification Tool")
    print("=" * 60)
    
    # 1. Check File Count & Naming
    print("\n[1/3] Checking File Existence & Naming Conventions...")
    existence_results = check_file_existence_and_naming()
    total_expected = len(existence_results)
    existing_count = sum(1 for name, exists in existence_results.items() if exists)
    
    print(f"-> Expected files: {total_expected}")
    print(f"-> Found files   : {existing_count}")
    
    missing_files = [name for name, exists in existence_results.items() if not exists]
    if missing_files:
        print(f"-> Missing {len(missing_files)} file(s):")
        # Print a small subset if there are too many
        for name in missing_files[:5]:
            print(f"   - {name}")
        if len(missing_files) > 5:
            print(f"   - ... and {len(missing_files) - 5} more.")
            
    existence_ok = (existing_count == total_expected)
    
    # 2. Branding & Structure in HTML Templates
    print("\n[2/3] Analyzing Brand & Structural Requirements in Templates...")
    template_failures = {}
    total_checks_run = 0
    total_checks_passed = 0
    
    for filename, exists in existence_results.items():
        if not exists:
            continue
        
        file_checks = analyze_html_file(filename)
        failed_checks = {}
        for check_name, (status, detail) in file_checks.items():
            total_checks_run += 1
            if status:
                total_checks_passed += 1
            else:
                failed_checks[check_name] = detail
                
        if failed_checks:
            template_failures[filename] = failed_checks
            
    if existing_count > 0:
        print(f"-> Analysed {existing_count} existing template files.")
        print(f"-> Total template checks run  : {total_checks_run}")
        print(f"-> Total template checks passed: {total_checks_passed}")
        
        if template_failures:
            print(f"-> Found issues in {len(template_failures)} file(s):")
            for filename, issues in list(template_failures.items())[:3]:
                print(f"   - {filename}:")
                for check, desc in issues.items():
                    print(f"     * {check}: {desc}")
            if len(template_failures) > 3:
                print(f"   - ... and {len(template_failures) - 3} more files with issues.")
        else:
            print("-> All existing templates passed all structural and branding checks!")
    else:
        print("-> No templates found to analyze.")
        
    # 3. Check Dashboard index.html
    print("\n[3/3] Verifying Dashboard (index.html)...")
    dashboard_checks = check_dashboard()
    dashboard_ok = True
    for check_name, (status, detail) in dashboard_checks.items():
        print(f"-> {check_name}: {'PASS' if status else 'FAIL'} - {detail}")
        if not status:
            dashboard_ok = False
            
    # Final Verdict
    print("\n" + "=" * 60)
    print("VERDICT SUMMARY")
    print("=" * 60)
    
    overall_success = existence_ok and (len(template_failures) == 0) and dashboard_ok and (existing_count == 80)
    
    print(f"1. File Existence & Naming: {'PASS' if existence_ok else 'FAIL'}")
    print(f"2. Template Checks         : {'PASS' if (existing_count == 80 and not template_failures) else 'FAIL'}")
    print(f"3. Dashboard Validation    : {'PASS' if dashboard_ok else 'FAIL'}")
    print("-" * 60)
    
    if overall_success:
        print("SUCCESS: All templates and dashboard meet the specification!")
        return 0
    else:
        print("FAILURE: One or more verification checks failed.")
        return 1

if __name__ == "__main__":
    sys.exit(run_all_checks())
