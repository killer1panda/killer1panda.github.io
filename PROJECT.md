# Project: SOTA Birthday Wishes Templates

## Architecture
- 80 HTML template files located in the root of `/Users/ajay/teamwork_projects/sota_wishes_templates/`.
- Naming convention: `style_[01-40]_head_core.html` and `style_[01-40]_executive.html`.
- A central dashboard `index.html` in the root that lists and links to all 80 files in a responsive grid.
- Inline SVG logos embedded directly in each HTML file for header branding (IEEE UPES Student Branch on left, Technical Society in center, UPES on right).
- Google Fonts imported in the `<head>` of each file.
- Clean responsive CSS styling (using aspect-ratio container and viewport).

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M0 | E2E Test Suite | Create test scripts to verify HTML files, layout, SVGs, fonts, and dashboard | None | DONE (verify_templates.py) |
| M1 | Styles 01-10 | Generate styles 01 to 10 (20 HTML templates) | M0 | DONE (20 files created) |
| M2 | Styles 11-20 | Generate styles 11 to 20 (20 HTML templates) | M0, M1 | DONE (20 files created) |
| M3 | Styles 21-30 | Generate styles 21 to 30 (20 HTML templates) | M0, M2 | DONE (20 files created) |
| M4 | Styles 31-40 | Generate styles 31 to 40 (20 HTML templates) | M0, M3 | DONE (20 files created) |
| M5 | Dashboard & Verification | Create index.html dashboard and run the test suite to verify everything | All | DONE (index.html created, 100% tests passed) |
| M6 | Fix photo upload in legacy templates | Fix profile photo upload issue in legacy templates by updating CSS/JS selectors | M5 | DONE |
| M7 | Revamp Master Creator (iframe architecture & Canva editor) | Revamp Master Creator with iframe architecture and Canva-style editor | M6 | PLANNED |
| M8 | Two-way data synchronization | Implement bidirectional sync between UI fields and template properties | M7 | PLANNED |
| M9 | Format & Export Engine | Implement high-resolution formatting and export capabilities for PDF/image/video | M8 | PLANNED |
| M10 | Verification & Forensic Audit | Complete comprehensive quality assurance, manual checks, and audit verification | M9 | PLANNED |

## Interface Contracts
- HTML Files: `/Users/ajay/teamwork_projects/sota_wishes_templates/style_[01-40]_[head_core/executive].html`
- Dashboard: `/Users/ajay/teamwork_projects/sota_wishes_templates/index.html`
- Test Runner: `python3 verify_templates.py` to validate existence, naming, fonts, SVGs, wishing headers, and links.

## Code Layout
- Root directory contains the 80 HTML files, the dashboard `index.html`, and `verify_templates.py`.
- `.agents/` directory is reserved strictly for agent coordination metadata and has no source code.
