#!/usr/bin/env python3
"""
SOTA Birthday Card Premium Template Generator
Generates all remaining templates with full premium features:
- Aspect ratio controller (9:16, 1:1, 4:5, 16:9)
- Chapter switcher (CIS/SPS)
- Download as PNG/JPG (html2canvas)
- Real logo images
- Floating particles, micro-animations, glassmorphism
- Proper social handles
"""

import os
import re

OUTPUT_DIR = "/Users/ajay/teamwork_projects/sota_wishes_templates"
STYLES_DIR = "/Users/ajay/.gemini/config/skills/sota-style-card-designer/references/styles"

# ─── STYLE CONFIGURATIONS ─── #
# Each style: (number, slug, display_name, colors_dict, fonts, decorative_elements, particles_config, extra_css)

STYLES = {
    4: {
        "name": "Bold Maximalist Pop",
        "slug": "style_04",
        "bg": "#FF3366",
        "bg_secondary": "#FFDD00",
        "accent1": "#00CCFF",
        "accent2": "#FF6600",
        "text_primary": "#FFFFFF",
        "text_muted": "rgba(255,255,255,0.7)",
        "fonts": "Bungee&family=Inter:wght@400;700;800",
        "font_display": "'Bungee', cursive",
        "font_body": "'Inter', sans-serif",
        "font_accent": "'Inter', sans-serif",
        "card_bg": "linear-gradient(135deg, #FF3366, #FF6600, #FFDD00)",
        "card_border": "6px solid #FFFFFF",
        "texture": "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)",
        "header_shadow": "4px 4px 0px #00CCFF",
        "frame_shadow": "6px 6px 0px #FFDD00",
        "frame_border": "4px solid #FFFFFF",
        "frame_bg": "rgba(255,255,255,0.2)",
        "frame_radius": "50%",
        "avatar_bg": "#FFDD00",
        "avatar_fill": "#FF3366",
        "particle_colors": ["#00CCFF", "#FFDD00", "#FFFFFF"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 80 80" width="70" height="70" xmlns="http://www.w3.org/2000/svg" style="top:15%;right:5%;"><polygon points="40,5 50,30 80,35 55,55 65,80 40,65 15,80 25,55 0,35 30,30" fill="#FFDD00" opacity="0.3"/></svg>
<svg class="deco-squiggle" viewBox="0 0 60 60" width="55" height="55" xmlns="http://www.w3.org/2000/svg" style="bottom:18%;left:4%;"><circle cx="30" cy="30" r="28" fill="none" stroke="#00CCFF" stroke-width="4" stroke-dasharray="8 6" opacity="0.4"/></svg>
<svg class="deco-squiggle" viewBox="0 0 40 40" width="35" height="35" xmlns="http://www.w3.org/2000/svg" style="top:50%;left:8%;"><rect x="5" y="5" width="30" height="30" fill="#FFFFFF" opacity="0.1" transform="rotate(45 20 20)"/></svg>''',
        "header_transform": "rotate(0deg) scale(1)",
        "logo_filter": "brightness(0) invert(1)",
        "social_color": "#FFFFFF",
        "social_bg": "rgba(255,255,255,0.15)",
        "btn_accent": "#FF3366",
        "glass_bg": "rgba(255,255,255,0.12)",
        "glass_border": "rgba(255,255,255,0.2)",
    },
    5: {
        "name": "Botanical Greenery",
        "slug": "style_05",
        "bg": "#FFFFFF",
        "accent1": "#2D5A3D",
        "accent2": "#8FBC8F",
        "text_primary": "#2D3B2D",
        "text_muted": "#5A7A5A",
        "fonts": "Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700",
        "font_display": "'Playfair Display', serif",
        "font_body": "'Lato', sans-serif",
        "font_accent": "'Playfair Display', serif",
        "card_bg": "linear-gradient(180deg, #F5F9F0, #E8F5E2, #F5F9F0)",
        "card_border": "2px solid #C5D8B8",
        "texture": "radial-gradient(rgba(45,90,61,0.03) 1px, transparent 0)",
        "header_shadow": "none",
        "frame_shadow": "0 8px 30px rgba(45,90,61,0.15)",
        "frame_border": "3px solid #2D5A3D",
        "frame_bg": "rgba(255,255,255,0.8)",
        "frame_radius": "50%",
        "avatar_bg": "#E8F5E2",
        "avatar_fill": "#2D5A3D",
        "particle_colors": ["#2D5A3D", "#8FBC8F", "#C5D8B8"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 100 150" width="80" height="120" xmlns="http://www.w3.org/2000/svg" style="top:10%;right:2%;"><path d="M50 10 Q30 40 50 60 Q70 80 50 110 Q30 130 50 145" fill="none" stroke="#8FBC8F" stroke-width="2" opacity="0.4"/><ellipse cx="35" cy="35" rx="12" ry="8" fill="#2D5A3D" opacity="0.08" transform="rotate(-30 35 35)"/><ellipse cx="65" cy="75" rx="12" ry="8" fill="#2D5A3D" opacity="0.08" transform="rotate(30 65 75)"/></svg>
<svg class="deco-squiggle" viewBox="0 0 100 150" width="70" height="100" xmlns="http://www.w3.org/2000/svg" style="bottom:12%;left:2%;"><path d="M50 140 Q70 110 50 90 Q30 70 50 40 Q70 20 50 5" fill="none" stroke="#C5D8B8" stroke-width="2" opacity="0.5"/><ellipse cx="65" cy="110" rx="10" ry="7" fill="#8FBC8F" opacity="0.1" transform="rotate(25 65 110)"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "none",
        "social_color": "#2D5A3D",
        "social_bg": "rgba(45,90,61,0.06)",
        "btn_accent": "#2D5A3D",
        "glass_bg": "rgba(255,255,255,0.6)",
        "glass_border": "rgba(45,90,61,0.1)",
    },
    8: {
        "name": "Scandinavian Hygge",
        "slug": "style_08",
        "bg": "#FAF6F1",
        "accent1": "#C4A882",
        "accent2": "#8B7355",
        "text_primary": "#3D3327",
        "text_muted": "#7A6B5A",
        "fonts": "DM+Sans:wght@400;500;700&family=Crimson+Pro:wght@400;600",
        "font_display": "'DM Sans', sans-serif",
        "font_body": "'Crimson Pro', serif",
        "font_accent": "'Crimson Pro', serif",
        "card_bg": "linear-gradient(180deg, #FAF6F1, #F0E8DC)",
        "card_border": "1px solid #E0D5C5",
        "texture": "radial-gradient(rgba(61,51,39,0.02) 1px, transparent 0)",
        "header_shadow": "none",
        "frame_shadow": "0 6px 20px rgba(61,51,39,0.08)",
        "frame_border": "2px solid #C4A882",
        "frame_bg": "#FFFFFF",
        "frame_radius": "50%",
        "avatar_bg": "#F0E8DC",
        "avatar_fill": "#8B7355",
        "particle_colors": ["#C4A882", "#E0D5C5", "#8B7355"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 60 60" width="40" height="40" xmlns="http://www.w3.org/2000/svg" style="top:12%;left:6%;"><circle cx="30" cy="30" r="8" fill="none" stroke="#C4A882" stroke-width="1.5" opacity="0.3"/><circle cx="30" cy="30" r="16" fill="none" stroke="#C4A882" stroke-width="1" opacity="0.2"/></svg>
<svg class="deco-squiggle" viewBox="0 0 80 20" width="70" height="18" xmlns="http://www.w3.org/2000/svg" style="bottom:22%;right:8%;"><line x1="0" y1="10" x2="80" y2="10" stroke="#E0D5C5" stroke-width="1" opacity="0.5"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "none",
        "social_color": "#3D3327",
        "social_bg": "rgba(196,168,130,0.08)",
        "btn_accent": "#C4A882",
        "glass_bg": "rgba(255,255,255,0.5)",
        "glass_border": "rgba(196,168,130,0.15)",
    },
    9: {
        "name": "Tropical Summer",
        "slug": "style_09",
        "bg": "#FFF8E7",
        "accent1": "#FF6B35",
        "accent2": "#00BFA5",
        "text_primary": "#1A3A2A",
        "text_muted": "#3A6A4A",
        "fonts": "Fredoka+One&family=Nunito:wght@400;600;800",
        "font_display": "'Fredoka One', cursive",
        "font_body": "'Nunito', sans-serif",
        "font_accent": "'Nunito', sans-serif",
        "card_bg": "linear-gradient(160deg, #FFF8E7, #FFECD2, #E0F7FA)",
        "card_border": "3px solid #FF6B35",
        "texture": "radial-gradient(rgba(255,107,53,0.04) 1px, transparent 0)",
        "header_shadow": "3px 3px 0px #00BFA5",
        "frame_shadow": "5px 5px 0px #FF6B35",
        "frame_border": "3px solid #1A3A2A",
        "frame_bg": "rgba(255,255,255,0.7)",
        "frame_radius": "16px",
        "avatar_bg": "#FFECD2",
        "avatar_fill": "#FF6B35",
        "particle_colors": ["#FF6B35", "#00BFA5", "#FFD93D"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 100 100" width="80" height="80" xmlns="http://www.w3.org/2000/svg" style="top:8%;right:3%;"><path d="M50 10 C30 10 15 25 20 45 C25 65 40 50 50 70 C60 50 75 65 80 45 C85 25 70 10 50 10Z" fill="#00BFA5" opacity="0.08"/></svg>
<svg class="deco-squiggle" viewBox="0 0 60 60" width="50" height="50" xmlns="http://www.w3.org/2000/svg" style="bottom:15%;left:5%;"><circle cx="30" cy="30" r="25" fill="#FF6B35" opacity="0.06"/><circle cx="30" cy="30" r="15" fill="#FFD93D" opacity="0.08"/></svg>''',
        "header_transform": "rotate(-2deg)",
        "logo_filter": "none",
        "social_color": "#1A3A2A",
        "social_bg": "rgba(0,191,165,0.06)",
        "btn_accent": "#FF6B35",
        "glass_bg": "rgba(255,255,255,0.5)",
        "glass_border": "rgba(255,107,53,0.15)",
    },
    10: {
        "name": "Celestial Starry Night",
        "slug": "style_10",
        "bg": "#0B1026",
        "accent1": "#FFD700",
        "accent2": "#7B68EE",
        "text_primary": "#F0E6D3",
        "text_muted": "rgba(240,230,211,0.6)",
        "fonts": "Cinzel:wght@400;700;900&family=Raleway:wght@300;400;600",
        "font_display": "'Cinzel', serif",
        "font_body": "'Raleway', sans-serif",
        "font_accent": "'Cinzel', serif",
        "card_bg": "linear-gradient(180deg, #0B1026, #1A1A3E, #0B1026)",
        "card_border": "1px solid rgba(255,215,0,0.2)",
        "texture": "radial-gradient(rgba(255,215,0,0.02) 1px, transparent 0)",
        "header_shadow": "0 0 20px rgba(255,215,0,0.3), 0 0 40px rgba(123,104,238,0.1)",
        "frame_shadow": "0 0 25px rgba(255,215,0,0.2), 0 0 50px rgba(123,104,238,0.1)",
        "frame_border": "2px solid rgba(255,215,0,0.4)",
        "frame_bg": "rgba(255,255,255,0.05)",
        "frame_radius": "50%",
        "avatar_bg": "rgba(123,104,238,0.2)",
        "avatar_fill": "#FFD700",
        "particle_colors": ["#FFD700", "#7B68EE", "#FFFFFF"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 100 100" width="80" height="80" xmlns="http://www.w3.org/2000/svg" style="top:10%;left:5%;"><circle cx="15" cy="20" r="1.5" fill="#FFD700" opacity="0.8"/><circle cx="45" cy="10" r="1" fill="#FFFFFF" opacity="0.6"/><circle cx="75" cy="25" r="2" fill="#7B68EE" opacity="0.7"/><circle cx="85" cy="50" r="1" fill="#FFD700" opacity="0.5"/><circle cx="25" cy="60" r="1.5" fill="#FFFFFF" opacity="0.4"/><circle cx="60" cy="70" r="1" fill="#7B68EE" opacity="0.6"/><circle cx="90" cy="80" r="1.5" fill="#FFD700" opacity="0.7"/></svg>
<svg class="deco-squiggle" viewBox="0 0 40 40" width="30" height="30" xmlns="http://www.w3.org/2000/svg" style="top:35%;right:8%;"><path d="M20 2 L23 15 L36 18 L23 21 L20 34 L17 21 L4 18 L17 15 Z" fill="#FFD700" opacity="0.15"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "brightness(0) invert(1)",
        "social_color": "#F0E6D3",
        "social_bg": "rgba(255,215,0,0.06)",
        "btn_accent": "#FFD700",
        "glass_bg": "rgba(255,255,255,0.05)",
        "glass_border": "rgba(255,215,0,0.12)",
    },
    13: {
        "name": "Candy Color Gradient",
        "slug": "style_13",
        "bg": "#FFF0F5",
        "accent1": "#FF69B4",
        "accent2": "#87CEEB",
        "text_primary": "#4A154B",
        "text_muted": "#7B3A7C",
        "fonts": "Quicksand:wght@400;600;700&family=Poppins:wght@300;400;700",
        "font_display": "'Quicksand', sans-serif",
        "font_body": "'Poppins', sans-serif",
        "font_accent": "'Quicksand', sans-serif",
        "card_bg": "linear-gradient(135deg, #FFDEE9, #B5FFFC, #FFF0F5)",
        "card_border": "3px solid rgba(255,105,180,0.3)",
        "texture": "radial-gradient(rgba(255,105,180,0.03) 1px, transparent 0)",
        "header_shadow": "2px 2px 0px #87CEEB",
        "frame_shadow": "0 8px 25px rgba(255,105,180,0.2)",
        "frame_border": "3px solid #FF69B4",
        "frame_bg": "rgba(255,255,255,0.6)",
        "frame_radius": "50%",
        "avatar_bg": "#FFDEE9",
        "avatar_fill": "#FF69B4",
        "particle_colors": ["#FF69B4", "#87CEEB", "#FFB6C1"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 60 60" width="50" height="50" xmlns="http://www.w3.org/2000/svg" style="top:15%;right:6%;"><circle cx="30" cy="30" r="25" fill="none" stroke="#FF69B4" stroke-width="2" stroke-dasharray="4 6" opacity="0.3"/></svg>
<svg class="deco-squiggle" viewBox="0 0 40 40" width="35" height="35" xmlns="http://www.w3.org/2000/svg" style="bottom:20%;left:5%;"><circle cx="20" cy="20" r="15" fill="#87CEEB" opacity="0.08"/></svg>''',
        "header_transform": "rotate(-1deg)",
        "logo_filter": "none",
        "social_color": "#4A154B",
        "social_bg": "rgba(255,105,180,0.06)",
        "btn_accent": "#FF69B4",
        "glass_bg": "rgba(255,255,255,0.5)",
        "glass_border": "rgba(255,105,180,0.15)",
    },
    14: {
        "name": "Art Deco Glamour",
        "slug": "style_14",
        "bg": "#0D0D0D",
        "accent1": "#D4AF37",
        "accent2": "#1A1A2E",
        "text_primary": "#F5E6C8",
        "text_muted": "rgba(245,230,200,0.6)",
        "fonts": "Poiret+One&family=Raleway:wght@300;400;600;700",
        "font_display": "'Poiret One', cursive",
        "font_body": "'Raleway', sans-serif",
        "font_accent": "'Poiret One', cursive",
        "card_bg": "linear-gradient(180deg, #0D0D0D, #1A1A2E, #0D0D0D)",
        "card_border": "2px solid rgba(212,175,55,0.4)",
        "texture": "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(212,175,55,0.03) 20px, rgba(212,175,55,0.03) 21px)",
        "header_shadow": "0 0 15px rgba(212,175,55,0.3)",
        "frame_shadow": "0 0 20px rgba(212,175,55,0.2)",
        "frame_border": "2px solid #D4AF37",
        "frame_bg": "rgba(212,175,55,0.05)",
        "frame_radius": "0px",
        "avatar_bg": "rgba(212,175,55,0.1)",
        "avatar_fill": "#D4AF37",
        "particle_colors": ["#D4AF37", "#F5E6C8", "#8B7D3C"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 100 200" width="40" height="100" xmlns="http://www.w3.org/2000/svg" style="top:5%;left:3%;"><path d="M20 0 L20 200 M30 0 L30 200" stroke="#D4AF37" stroke-width="0.5" opacity="0.15"/><path d="M15 50 L35 30 L15 10 M15 110 L35 90 L15 70 M15 170 L35 150 L15 130" fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.12"/></svg>
<svg class="deco-squiggle" viewBox="0 0 100 200" width="40" height="100" xmlns="http://www.w3.org/2000/svg" style="top:5%;right:3%;"><path d="M80 0 L80 200 M70 0 L70 200" stroke="#D4AF37" stroke-width="0.5" opacity="0.15"/><path d="M85 50 L65 30 L85 10 M85 110 L65 90 L85 70 M85 170 L65 150 L85 130" fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.12"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "brightness(0) invert(1)",
        "social_color": "#F5E6C8",
        "social_bg": "rgba(212,175,55,0.06)",
        "btn_accent": "#D4AF37",
        "glass_bg": "rgba(255,255,255,0.03)",
        "glass_border": "rgba(212,175,55,0.15)",
    },
    15: {
        "name": "Doodle & Sketch",
        "slug": "style_15",
        "bg": "#FFFEF5",
        "accent1": "#333333",
        "accent2": "#FF4757",
        "text_primary": "#2C2C2C",
        "text_muted": "#666666",
        "fonts": "Architects+Daughter&family=Inter:wght@400;600;700",
        "font_display": "'Architects Daughter', cursive",
        "font_body": "'Inter', sans-serif",
        "font_accent": "'Architects Daughter', cursive",
        "card_bg": "#FFFEF5",
        "card_border": "3px dashed #333333",
        "texture": "repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0,0,0,0.04) 24px, rgba(0,0,0,0.04) 25px)",
        "header_shadow": "2px 2px 0px #FF4757",
        "frame_shadow": "4px 4px 0px #333333",
        "frame_border": "3px solid #333333",
        "frame_bg": "#FFFFFF",
        "frame_radius": "8px",
        "avatar_bg": "#F0F0E8",
        "avatar_fill": "#333333",
        "particle_colors": ["#333333", "#FF4757", "#666666"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 100 40" width="90" height="35" xmlns="http://www.w3.org/2000/svg" style="top:20%;left:3%;"><path d="M5 20 Q15 5 25 20 T45 20 T65 20 T85 20 T100 20" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-dasharray="1 4" opacity="0.3"/></svg>
<svg class="deco-squiggle" viewBox="0 0 40 40" width="30" height="30" xmlns="http://www.w3.org/2000/svg" style="bottom:22%;right:8%;"><path d="M10 10 L30 10 L30 30 L10 30 Z" fill="none" stroke="#FF4757" stroke-width="2" stroke-dasharray="4 3" opacity="0.3" transform="rotate(8 20 20)"/></svg>''',
        "header_transform": "rotate(-2deg)",
        "logo_filter": "none",
        "social_color": "#2C2C2C",
        "social_bg": "rgba(0,0,0,0.03)",
        "btn_accent": "#FF4757",
        "glass_bg": "rgba(255,255,255,0.6)",
        "glass_border": "rgba(0,0,0,0.08)",
    },
    18: {  # only executive missing
        "name": "Industrial Modern",
        "slug": "style_18",
        "bg": "#1A1A1A",
        "accent1": "#FF5722",
        "accent2": "#78909C",
        "text_primary": "#E0E0E0",
        "text_muted": "rgba(224,224,224,0.6)",
        "fonts": "Oswald:wght@400;600;700&family=Roboto+Mono:wght@400;500",
        "font_display": "'Oswald', sans-serif",
        "font_body": "'Roboto Mono', monospace",
        "font_accent": "'Oswald', sans-serif",
        "card_bg": "#1A1A1A",
        "card_border": "2px solid #333333",
        "texture": "repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.01) 4px, rgba(255,255,255,0.01) 5px)",
        "header_shadow": "none",
        "frame_shadow": "0 4px 15px rgba(255,87,34,0.15)",
        "frame_border": "2px solid #FF5722",
        "frame_bg": "rgba(255,255,255,0.03)",
        "frame_radius": "0px",
        "avatar_bg": "rgba(255,87,34,0.1)",
        "avatar_fill": "#FF5722",
        "particle_colors": ["#FF5722", "#78909C", "#444444"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 100 100" width="60" height="60" xmlns="http://www.w3.org/2000/svg" style="top:12%;right:5%;"><line x1="0" y1="0" x2="100" y2="100" stroke="#333" stroke-width="1" opacity="0.2"/><line x1="100" y1="0" x2="0" y2="100" stroke="#333" stroke-width="1" opacity="0.2"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "brightness(0) invert(1)",
        "social_color": "#E0E0E0",
        "social_bg": "rgba(255,87,34,0.06)",
        "btn_accent": "#FF5722",
        "glass_bg": "rgba(255,255,255,0.03)",
        "glass_border": "rgba(255,87,34,0.12)",
    },
    19: {
        "name": "Fairy Tale Storybook",
        "slug": "style_19",
        "bg": "#FFF8F0",
        "accent1": "#9B59B6",
        "accent2": "#F1948A",
        "text_primary": "#4A2040",
        "text_muted": "#7B4070",
        "fonts": "Cormorant+Garamond:wght@400;600;700&family=Nunito:wght@400;600",
        "font_display": "'Cormorant Garamond', serif",
        "font_body": "'Nunito', sans-serif",
        "font_accent": "'Cormorant Garamond', serif",
        "card_bg": "linear-gradient(180deg, #FFF8F0, #F8E8F0, #FFF0E8)",
        "card_border": "2px solid rgba(155,89,182,0.2)",
        "texture": "radial-gradient(rgba(155,89,182,0.02) 1px, transparent 0)",
        "header_shadow": "2px 2px 0px rgba(155,89,182,0.2)",
        "frame_shadow": "0 6px 20px rgba(155,89,182,0.12)",
        "frame_border": "3px solid #9B59B6",
        "frame_bg": "rgba(255,255,255,0.7)",
        "frame_radius": "50%",
        "avatar_bg": "#F8E8F0",
        "avatar_fill": "#9B59B6",
        "particle_colors": ["#9B59B6", "#F1948A", "#DDA0DD"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 40 40" width="30" height="30" xmlns="http://www.w3.org/2000/svg" style="top:10%;right:8%;"><path d="M20 5 L23 15 L33 18 L23 21 L20 31 L17 21 L7 18 L17 15 Z" fill="#9B59B6" opacity="0.12"/></svg>
<svg class="deco-squiggle" viewBox="0 0 30 30" width="25" height="25" xmlns="http://www.w3.org/2000/svg" style="bottom:15%;left:6%;"><path d="M15 3 L17 11 L25 13 L17 15 L15 23 L13 15 L5 13 L13 11 Z" fill="#F1948A" opacity="0.15"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "none",
        "social_color": "#4A2040",
        "social_bg": "rgba(155,89,182,0.05)",
        "btn_accent": "#9B59B6",
        "glass_bg": "rgba(255,255,255,0.5)",
        "glass_border": "rgba(155,89,182,0.12)",
    },
    20: {
        "name": "Monochrome Elegance",
        "slug": "style_20",
        "bg": "#FFFFFF",
        "accent1": "#000000",
        "accent2": "#888888",
        "text_primary": "#111111",
        "text_muted": "#666666",
        "fonts": "Bodoni+Moda:wght@400;700;900&family=Inter:wght@300;400;600",
        "font_display": "'Bodoni Moda', serif",
        "font_body": "'Inter', sans-serif",
        "font_accent": "'Bodoni Moda', serif",
        "card_bg": "#FFFFFF",
        "card_border": "2px solid #111111",
        "texture": "none",
        "header_shadow": "none",
        "frame_shadow": "0 8px 30px rgba(0,0,0,0.08)",
        "frame_border": "2px solid #111111",
        "frame_bg": "#F8F8F8",
        "frame_radius": "50%",
        "avatar_bg": "#F0F0F0",
        "avatar_fill": "#111111",
        "particle_colors": ["#000000", "#888888", "#CCCCCC"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 100 2" width="80" height="2" xmlns="http://www.w3.org/2000/svg" style="top:30%;left:10%;"><line x1="0" y1="1" x2="100" y2="1" stroke="#111" stroke-width="1" opacity="0.1"/></svg>
<svg class="deco-squiggle" viewBox="0 0 100 2" width="60" height="2" xmlns="http://www.w3.org/2000/svg" style="bottom:30%;right:10%;"><line x1="0" y1="1" x2="100" y2="1" stroke="#111" stroke-width="1" opacity="0.1"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "grayscale(1)",
        "social_color": "#111111",
        "social_bg": "rgba(0,0,0,0.02)",
        "btn_accent": "#111111",
        "glass_bg": "rgba(255,255,255,0.8)",
        "glass_border": "rgba(0,0,0,0.06)",
    },
    24: {
        "name": "Distorted Cut Collage (Zine Punk)",
        "slug": "style_24",
        "bg": "#F5F0E8",
        "accent1": "#E74C3C",
        "accent2": "#2C3E50",
        "text_primary": "#1A1A1A",
        "text_muted": "#555555",
        "fonts": "Special+Elite&family=Inter:wght@400;700;900",
        "font_display": "'Special Elite', cursive",
        "font_body": "'Inter', sans-serif",
        "font_accent": "'Special Elite', cursive",
        "card_bg": "#F5F0E8",
        "card_border": "none",
        "texture": "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 0)",
        "header_shadow": "3px 3px 0px #E74C3C",
        "frame_shadow": "5px 5px 0px #2C3E50",
        "frame_border": "3px solid #1A1A1A",
        "frame_bg": "#FFFFFF",
        "frame_radius": "2px",
        "avatar_bg": "#E8E0D5",
        "avatar_fill": "#1A1A1A",
        "particle_colors": ["#E74C3C", "#2C3E50", "#1A1A1A"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 80 80" width="60" height="60" xmlns="http://www.w3.org/2000/svg" style="top:12%;right:4%;"><rect x="10" y="10" width="40" height="40" fill="#E74C3C" opacity="0.06" transform="rotate(12 30 30)"/><rect x="25" y="25" width="40" height="40" fill="#2C3E50" opacity="0.06" transform="rotate(-8 45 45)"/></svg>''',
        "header_transform": "rotate(-3deg)",
        "logo_filter": "grayscale(1) contrast(1.2)",
        "social_color": "#1A1A1A",
        "social_bg": "rgba(0,0,0,0.04)",
        "btn_accent": "#E74C3C",
        "glass_bg": "rgba(255,255,255,0.5)",
        "glass_border": "rgba(0,0,0,0.08)",
    },
    25: {
        "name": "Memphis Milano Pop",
        "slug": "style_25",
        "bg": "#FFE4E1",
        "accent1": "#FF6384",
        "accent2": "#36A2EB",
        "text_primary": "#2D2D2D",
        "text_muted": "#555555",
        "fonts": "Rubik:wght@400;700;900&family=Space+Mono:wght@400;700",
        "font_display": "'Rubik', sans-serif",
        "font_body": "'Space Mono', monospace",
        "font_accent": "'Rubik', sans-serif",
        "card_bg": "#FFE4E1",
        "card_border": "4px solid #2D2D2D",
        "texture": "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 0)",
        "header_shadow": "4px 4px 0px #36A2EB",
        "frame_shadow": "5px 5px 0px #FF6384",
        "frame_border": "3px solid #2D2D2D",
        "frame_bg": "#FFFFFF",
        "frame_radius": "12px",
        "avatar_bg": "#FFD4CC",
        "avatar_fill": "#FF6384",
        "particle_colors": ["#FF6384", "#36A2EB", "#FFCE56"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 80 80" width="65" height="65" xmlns="http://www.w3.org/2000/svg" style="top:12%;right:4%;"><circle cx="20" cy="20" r="15" fill="#36A2EB" opacity="0.12"/><rect x="45" y="10" width="25" height="25" fill="#FF6384" opacity="0.1" transform="rotate(15 57 22)"/></svg>
<svg class="deco-squiggle" viewBox="0 0 60 60" width="50" height="50" xmlns="http://www.w3.org/2000/svg" style="bottom:15%;left:5%;"><polygon points="30,5 55,50 5,50" fill="none" stroke="#FFCE56" stroke-width="3" opacity="0.2"/></svg>''',
        "header_transform": "rotate(-1.5deg)",
        "logo_filter": "none",
        "social_color": "#2D2D2D",
        "social_bg": "rgba(255,99,132,0.06)",
        "btn_accent": "#FF6384",
        "glass_bg": "rgba(255,255,255,0.4)",
        "glass_border": "rgba(255,99,132,0.15)",
    },
    28: {
        "name": "Acid Graphic (Liquid Metal)",
        "slug": "style_28",
        "bg": "#0A0A0A",
        "accent1": "#00FF88",
        "accent2": "#FF00AA",
        "text_primary": "#E0FFE0",
        "text_muted": "rgba(224,255,224,0.5)",
        "fonts": "Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;600",
        "font_display": "'Space Grotesk', sans-serif",
        "font_body": "'JetBrains Mono', monospace",
        "font_accent": "'Space Grotesk', sans-serif",
        "card_bg": "linear-gradient(160deg, #0A0A0A, #0A1A10, #0A0A1A)",
        "card_border": "1px solid rgba(0,255,136,0.2)",
        "texture": "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,136,0.01) 3px, rgba(0,255,136,0.01) 4px)",
        "header_shadow": "0 0 20px rgba(0,255,136,0.4), 0 0 40px rgba(255,0,170,0.15)",
        "frame_shadow": "0 0 15px rgba(0,255,136,0.2)",
        "frame_border": "1px solid rgba(0,255,136,0.4)",
        "frame_bg": "rgba(0,255,136,0.03)",
        "frame_radius": "4px",
        "avatar_bg": "rgba(0,255,136,0.05)",
        "avatar_fill": "#00FF88",
        "particle_colors": ["#00FF88", "#FF00AA", "#00CCFF"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 100 100" width="70" height="70" xmlns="http://www.w3.org/2000/svg" style="top:10%;right:3%;"><circle cx="50" cy="50" r="40" fill="none" stroke="#00FF88" stroke-width="0.5" opacity="0.15"/><circle cx="50" cy="50" r="25" fill="none" stroke="#FF00AA" stroke-width="0.5" opacity="0.1"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "brightness(0) invert(1) hue-rotate(100deg)",
        "social_color": "#E0FFE0",
        "social_bg": "rgba(0,255,136,0.04)",
        "btn_accent": "#00FF88",
        "glass_bg": "rgba(0,255,136,0.03)",
        "glass_border": "rgba(0,255,136,0.1)",
    },
    29: {
        "name": "Cyberpunk Tech",
        "slug": "style_29",
        "bg": "#0A0E17",
        "accent1": "#00F0FF",
        "accent2": "#FF2D6A",
        "text_primary": "#E0F0FF",
        "text_muted": "rgba(224,240,255,0.5)",
        "fonts": "Orbitron:wght@400;700;900&family=Share+Tech+Mono",
        "font_display": "'Orbitron', sans-serif",
        "font_body": "'Share Tech Mono', monospace",
        "font_accent": "'Orbitron', sans-serif",
        "card_bg": "linear-gradient(180deg, #0A0E17, #111827, #0A0E17)",
        "card_border": "1px solid rgba(0,240,255,0.15)",
        "texture": "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.008) 2px, rgba(0,240,255,0.008) 3px)",
        "header_shadow": "0 0 20px rgba(0,240,255,0.4), 0 0 40px rgba(255,45,106,0.15)",
        "frame_shadow": "0 0 20px rgba(0,240,255,0.15), inset 0 0 10px rgba(0,240,255,0.05)",
        "frame_border": "1px solid rgba(0,240,255,0.3)",
        "frame_bg": "rgba(0,240,255,0.03)",
        "frame_radius": "2px",
        "avatar_bg": "rgba(0,240,255,0.05)",
        "avatar_fill": "#00F0FF",
        "particle_colors": ["#00F0FF", "#FF2D6A", "#7B61FF"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 120 120" width="80" height="80" xmlns="http://www.w3.org/2000/svg" style="top:8%;right:2%;"><polygon points="60,10 110,35 110,85 60,110 10,85 10,35" fill="none" stroke="#00F0FF" stroke-width="0.5" opacity="0.1"/><polygon points="60,25 95,42 95,78 60,95 25,78 25,42" fill="none" stroke="#FF2D6A" stroke-width="0.5" opacity="0.08"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "brightness(0) invert(1)",
        "social_color": "#E0F0FF",
        "social_bg": "rgba(0,240,255,0.04)",
        "btn_accent": "#00F0FF",
        "glass_bg": "rgba(0,240,255,0.02)",
        "glass_border": "rgba(0,240,255,0.08)",
    },
    30: {
        "name": "Bauhaus Modern",
        "slug": "style_30",
        "bg": "#FFFEF5",
        "accent1": "#E63946",
        "accent2": "#457B9D",
        "text_primary": "#1D3557",
        "text_muted": "#457B9D",
        "fonts": "DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;600;700",
        "font_display": "'Space Grotesk', sans-serif",
        "font_body": "'DM Sans', sans-serif",
        "font_accent": "'Space Grotesk', sans-serif",
        "card_bg": "#FFFEF5",
        "card_border": "3px solid #1D3557",
        "texture": "none",
        "header_shadow": "none",
        "frame_shadow": "4px 4px 0px #E63946",
        "frame_border": "3px solid #1D3557",
        "frame_bg": "#F1FAEE",
        "frame_radius": "50%",
        "avatar_bg": "#F1FAEE",
        "avatar_fill": "#1D3557",
        "particle_colors": ["#E63946", "#457B9D", "#F1FAEE"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 80 80" width="60" height="60" xmlns="http://www.w3.org/2000/svg" style="top:8%;right:5%;"><circle cx="40" cy="40" r="30" fill="#E63946" opacity="0.06"/><rect x="25" y="25" width="30" height="30" fill="#457B9D" opacity="0.06"/></svg>
<svg class="deco-squiggle" viewBox="0 0 60 60" width="45" height="45" xmlns="http://www.w3.org/2000/svg" style="bottom:12%;left:5%;"><polygon points="30,5 55,50 5,50" fill="#1D3557" opacity="0.04"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "none",
        "social_color": "#1D3557",
        "social_bg": "rgba(29,53,87,0.04)",
        "btn_accent": "#E63946",
        "glass_bg": "rgba(255,255,255,0.6)",
        "glass_border": "rgba(29,53,87,0.08)",
    },
    33: {
        "name": "Mid Century Modern (Atomic)",
        "slug": "style_33",
        "bg": "#EFECE7",
        "accent1": "#CC5500",
        "accent2": "#008080",
        "text_primary": "#8B5A2B",
        "text_muted": "#556B2F",
        "fonts": "Shrikhand&family=Montserrat:wght@400;700&family=Pacifico",
        "font_display": "'Shrikhand', cursive",
        "font_body": "'Montserrat', sans-serif",
        "font_accent": "'Pacifico', cursive",
        "card_bg": "#EFECE7",
        "card_border": "6px solid #8B5A2B",
        "texture": "linear-gradient(90deg, rgba(139,90,43,0.02) 1px, transparent 1px), linear-gradient(rgba(139,90,43,0.02) 1px, transparent 1px)",
        "header_shadow": "4px 4px 0px #E1AD01",
        "frame_shadow": "4px 4px 0px #CC5500",
        "frame_border": "3px solid #8B5A2B",
        "frame_bg": "rgba(255,255,255,0.4)",
        "frame_radius": "4px",
        "avatar_bg": "#EFECE7",
        "avatar_fill": "#8B5A2B",
        "particle_colors": ["#CC5500", "#008080", "#E1AD01"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 80 80" width="60" height="60" xmlns="http://www.w3.org/2000/svg" style="top:10%;right:5%;"><path d="M40 5 L43 35 L73 38 L43 41 L40 71 L37 41 L7 38 L37 35 Z" fill="#008080" opacity="0.12"/></svg>
<svg class="deco-squiggle" viewBox="0 0 60 60" width="45" height="45" xmlns="http://www.w3.org/2000/svg" style="bottom:18%;left:6%;"><ellipse cx="30" cy="30" rx="25" ry="10" fill="none" stroke="#CC5500" stroke-width="2" opacity="0.15" transform="rotate(-20 30 30)"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "none",
        "social_color": "#8B5A2B",
        "social_bg": "rgba(139,90,43,0.06)",
        "btn_accent": "#CC5500",
        "glass_bg": "rgba(255,255,255,0.4)",
        "glass_border": "rgba(139,90,43,0.12)",
    },
    34: {
        "name": "8-Bit Pixel Art (Arcade)",
        "slug": "style_34",
        "bg": "#1A1A2E",
        "accent1": "#E94560",
        "accent2": "#0F3460",
        "text_primary": "#E0E0E0",
        "text_muted": "rgba(224,224,224,0.6)",
        "fonts": "Press+Start+2P&family=VT323&family=Inter:wght@400;700",
        "font_display": "'Press Start 2P', cursive",
        "font_body": "'VT323', monospace",
        "font_accent": "'Press Start 2P', cursive",
        "card_bg": "#1A1A2E",
        "card_border": "4px solid #E94560",
        "texture": "none",
        "header_shadow": "3px 3px 0px #0F3460",
        "frame_shadow": "4px 4px 0px #E94560",
        "frame_border": "3px solid #E94560",
        "frame_bg": "rgba(255,255,255,0.05)",
        "frame_radius": "0px",
        "avatar_bg": "rgba(233,69,96,0.1)",
        "avatar_fill": "#E94560",
        "particle_colors": ["#E94560", "#0F3460", "#16C79A"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 80 20" width="70" height="18" xmlns="http://www.w3.org/2000/svg" style="top:25%;left:5%;"><rect x="0" y="0" width="8" height="8" fill="#E94560" opacity="0.3"/><rect x="12" y="0" width="8" height="8" fill="#0F3460" opacity="0.3"/><rect x="24" y="0" width="8" height="8" fill="#16C79A" opacity="0.3"/><rect x="36" y="0" width="8" height="8" fill="#E94560" opacity="0.2"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "brightness(0) invert(1)",
        "social_color": "#E0E0E0",
        "social_bg": "rgba(233,69,96,0.06)",
        "btn_accent": "#E94560",
        "glass_bg": "rgba(255,255,255,0.03)",
        "glass_border": "rgba(233,69,96,0.15)",
    },
    35: {
        "name": "Folk Art Whimsy",
        "slug": "style_35",
        "bg": "#FFF8F0",
        "accent1": "#D35400",
        "accent2": "#2980B9",
        "text_primary": "#2C1810",
        "text_muted": "#6B4226",
        "fonts": "Amatic+SC:wght@400;700&family=Nunito:wght@400;600;700",
        "font_display": "'Amatic SC', cursive",
        "font_body": "'Nunito', sans-serif",
        "font_accent": "'Amatic SC', cursive",
        "card_bg": "linear-gradient(180deg, #FFF8F0, #FFF0E0)",
        "card_border": "3px solid #2C1810",
        "texture": "radial-gradient(rgba(44,24,16,0.03) 1px, transparent 0)",
        "header_shadow": "2px 2px 0px #D35400",
        "frame_shadow": "4px 4px 0px #2980B9",
        "frame_border": "3px solid #2C1810",
        "frame_bg": "rgba(255,255,255,0.6)",
        "frame_radius": "50%",
        "avatar_bg": "#FFF0E0",
        "avatar_fill": "#D35400",
        "particle_colors": ["#D35400", "#2980B9", "#F39C12"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 80 80" width="60" height="60" xmlns="http://www.w3.org/2000/svg" style="top:12%;right:5%;"><circle cx="40" cy="40" r="8" fill="#D35400" opacity="0.08"/><circle cx="40" cy="40" r="16" fill="none" stroke="#2980B9" stroke-width="1.5" opacity="0.12"/><circle cx="40" cy="40" r="24" fill="none" stroke="#D35400" stroke-width="1" opacity="0.08" stroke-dasharray="3 3"/></svg>''',
        "header_transform": "rotate(-1deg)",
        "logo_filter": "none",
        "social_color": "#2C1810",
        "social_bg": "rgba(211,84,0,0.05)",
        "btn_accent": "#D35400",
        "glass_bg": "rgba(255,255,255,0.5)",
        "glass_border": "rgba(44,24,16,0.08)",
    },
    38: {
        "name": "Desert Boho",
        "slug": "style_38",
        "bg": "#F5E6D3",
        "accent1": "#C1440E",
        "accent2": "#8B6914",
        "text_primary": "#3D2B1F",
        "text_muted": "#7A5C3F",
        "fonts": "Cormorant+Garamond:wght@400;600;700&family=Lato:wght@300;400;700",
        "font_display": "'Cormorant Garamond', serif",
        "font_body": "'Lato', sans-serif",
        "font_accent": "'Cormorant Garamond', serif",
        "card_bg": "linear-gradient(180deg, #F5E6D3, #EDD9C0)",
        "card_border": "2px solid rgba(61,43,31,0.2)",
        "texture": "radial-gradient(rgba(61,43,31,0.03) 1px, transparent 0)",
        "header_shadow": "none",
        "frame_shadow": "0 6px 20px rgba(193,68,14,0.1)",
        "frame_border": "2px solid #C1440E",
        "frame_bg": "rgba(255,255,255,0.4)",
        "frame_radius": "50%",
        "avatar_bg": "#EDD9C0",
        "avatar_fill": "#C1440E",
        "particle_colors": ["#C1440E", "#8B6914", "#D4A76A"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 80 80" width="60" height="60" xmlns="http://www.w3.org/2000/svg" style="top:10%;right:5%;"><circle cx="40" cy="40" r="20" fill="none" stroke="#C1440E" stroke-width="1" opacity="0.12"/><line x1="40" y1="15" x2="40" y2="65" stroke="#C1440E" stroke-width="0.5" opacity="0.1"/><line x1="15" y1="40" x2="65" y2="40" stroke="#C1440E" stroke-width="0.5" opacity="0.1"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "sepia(0.3)",
        "social_color": "#3D2B1F",
        "social_bg": "rgba(193,68,14,0.05)",
        "btn_accent": "#C1440E",
        "glass_bg": "rgba(255,255,255,0.4)",
        "glass_border": "rgba(193,68,14,0.1)",
    },
    39: {
        "name": "Steampunk Chrono",
        "slug": "style_39",
        "bg": "#1A1410",
        "accent1": "#CD853F",
        "accent2": "#8B4513",
        "text_primary": "#DEB887",
        "text_muted": "rgba(222,184,135,0.6)",
        "fonts": "Cinzel:wght@400;700;900&family=Playfair+Display:wght@400;700",
        "font_display": "'Cinzel', serif",
        "font_body": "'Playfair Display', serif",
        "font_accent": "'Cinzel', serif",
        "card_bg": "linear-gradient(180deg, #1A1410, #2A201A, #1A1410)",
        "card_border": "2px solid rgba(205,133,63,0.3)",
        "texture": "radial-gradient(rgba(205,133,63,0.02) 1px, transparent 0)",
        "header_shadow": "0 0 12px rgba(205,133,63,0.3)",
        "frame_shadow": "0 0 15px rgba(205,133,63,0.2)",
        "frame_border": "2px solid #CD853F",
        "frame_bg": "rgba(205,133,63,0.05)",
        "frame_radius": "50%",
        "avatar_bg": "rgba(205,133,63,0.1)",
        "avatar_fill": "#CD853F",
        "particle_colors": ["#CD853F", "#DEB887", "#8B4513"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 100 100" width="70" height="70" xmlns="http://www.w3.org/2000/svg" style="top:10%;right:4%;"><circle cx="50" cy="50" r="40" fill="none" stroke="#CD853F" stroke-width="1" opacity="0.1"/><circle cx="50" cy="50" r="30" fill="none" stroke="#CD853F" stroke-width="0.5" opacity="0.08"/><line x1="50" y1="15" x2="50" y2="35" stroke="#CD853F" stroke-width="1" opacity="0.15"/><line x1="50" y1="50" x2="65" y2="35" stroke="#CD853F" stroke-width="1" opacity="0.12"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "sepia(0.5) brightness(1.2)",
        "social_color": "#DEB887",
        "social_bg": "rgba(205,133,63,0.06)",
        "btn_accent": "#CD853F",
        "glass_bg": "rgba(205,133,63,0.03)",
        "glass_border": "rgba(205,133,63,0.12)",
    },
    40: {
        "name": "Holographic Foil (Iridescent)",
        "slug": "style_40",
        "bg": "#FAF9F6",
        "accent1": "#FFB7D5",
        "accent2": "#B5FFFC",
        "text_primary": "#232B2B",
        "text_muted": "#555555",
        "fonts": "Space+Grotesk:wght@400;600;700&family=Montserrat:wght@300;400;600",
        "font_display": "'Space Grotesk', sans-serif",
        "font_body": "'Montserrat', sans-serif",
        "font_accent": "'Space Grotesk', sans-serif",
        "card_bg": "linear-gradient(135deg, #FFB7D5, #B5FFFC, #D8B5FF, #FFB7D5)",
        "card_border": "1px solid rgba(200,200,200,0.3)",
        "texture": "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 0)",
        "header_shadow": "0 0 15px rgba(255,183,213,0.3)",
        "frame_shadow": "0 0 20px rgba(181,255,252,0.2), 0 0 40px rgba(216,181,255,0.1)",
        "frame_border": "1px solid rgba(200,200,200,0.4)",
        "frame_bg": "rgba(255,255,255,0.5)",
        "frame_radius": "16px",
        "avatar_bg": "rgba(216,181,255,0.2)",
        "avatar_fill": "#232B2B",
        "particle_colors": ["#FFB7D5", "#B5FFFC", "#D8B5FF"],
        "deco_svg": '''<svg class="deco-squiggle" viewBox="0 0 40 40" width="25" height="25" xmlns="http://www.w3.org/2000/svg" style="top:15%;right:10%;"><path d="M20 2 L23 15 L36 18 L23 21 L20 34 L17 21 L4 18 L17 15 Z" fill="#FFFFFF" opacity="0.5"/></svg>
<svg class="deco-squiggle" viewBox="0 0 30 30" width="20" height="20" xmlns="http://www.w3.org/2000/svg" style="bottom:20%;left:8%;"><path d="M15 2 L17 12 L27 14 L17 16 L15 26 L13 16 L3 14 L13 12 Z" fill="#FFFFFF" opacity="0.4"/></svg>
<svg class="deco-squiggle" viewBox="0 0 25 25" width="15" height="15" xmlns="http://www.w3.org/2000/svg" style="top:45%;left:6%;"><path d="M12 1 L14 10 L23 12 L14 14 L12 23 L10 14 L1 12 L10 10 Z" fill="#FFFFFF" opacity="0.35"/></svg>''',
        "header_transform": "rotate(0deg)",
        "logo_filter": "none",
        "social_color": "#232B2B",
        "social_bg": "rgba(216,181,255,0.08)",
        "btn_accent": "#D8B5FF",
        "glass_bg": "rgba(255,255,255,0.4)",
        "glass_border": "rgba(255,255,255,0.5)",
    },
}

# ─── NAMES AND QUOTES ─── #
HEAD_CORE_DATA = [
    ("Priya Sharma", "Chairperson, IEEE CIS UPES", "May every challenge you face become a stepping stone towards remarkable achievements — cheers to another brilliant year!"),
    ("Arjun Mehta", "Vice Chairperson, IEEE CIS UPES", "Your dedication lights the path for everyone around you — wishing you a birthday as extraordinary as your spirit!"),
    ("Sneha Patel", "Secretary, IEEE CIS UPES", "Here's to celebrating you — may this new year bring innovation, joy, and endless possibilities!"),
    ("Rohan Gupta", "Technical Lead, IEEE CIS UPES", "Wishing you a year of breakthroughs and brilliance — your passion inspires the whole team!"),
    ("Ananya Singh", "Editorial Head, IEEE CIS UPES", "May your creativity continue to soar and your vision lead us to new heights — happy birthday!"),
    ("Vikram Reddy", "Chairperson, IEEE CIS UPES", "Another year of excellence begins — may it be filled with discovery, growth, and wonderful memories!"),
    ("Isha Kapoor", "Vice Chairperson, IEEE CIS UPES", "Your energy and dedication are truly inspiring — wishing you all the happiness on your special day!"),
    ("Dev Malhotra", "Secretary, IEEE CIS UPES", "To a leader who makes every day brighter — may your birthday be as wonderful as you are!"),
    ("Kavya Nair", "Technical Lead, IEEE CIS UPES", "Wishing you innovation in every step and joy in every moment — here's to an amazing year ahead!"),
    ("Aditya Joshi", "Editorial Head, IEEE CIS UPES", "May your birthday mark the beginning of incredible adventures and achievements — shine on!"),
    ("Meera Iyer", "Chairperson, IEEE CIS UPES", "Your leadership and warmth inspire us all — wishing you a spectacular birthday celebration!"),
    ("Kunal Verma", "Vice Chairperson, IEEE CIS UPES", "Here's to another year of making the impossible possible — happy birthday, innovator!"),
    ("Riya Choudhury", "Secretary, IEEE CIS UPES", "May your day be filled with laughter and your year with groundbreaking success!"),
    ("Sahil Bhatt", "Technical Lead, IEEE CIS UPES", "To a mind that never stops exploring — wishing you a birthday full of wonder and excitement!"),
    ("Tanya Mishra", "Editorial Head, IEEE CIS UPES", "Your creativity knows no bounds — may this birthday bring fresh inspiration and endless joy!"),
    ("Aryan Saxena", "Chairperson, IEEE CIS UPES", "Wishing you a birthday as brilliant and impactful as everything you do — keep shining!"),
    ("Nisha Agarwal", "Vice Chairperson, IEEE CIS UPES", "May every moment of your special day remind you how valued and amazing you truly are!"),
    ("Rahul Tiwari", "Secretary, IEEE CIS UPES", "Your dedication makes our community stronger — wishing you joy and success in the year ahead!"),
    ("Simran Kaur", "Technical Lead, IEEE CIS UPES", "Here's to celebrating the spark of genius in you — may your birthday light up the world!"),
    ("Varun Pandey", "Editorial Head, IEEE CIS UPES", "To a visionary who turns ideas into reality — wishing you the happiest birthday yet!"),
]

EXECUTIVE_DATA = [
    ("Dr. Rajesh Kumar", "Executive Committee Member, IEEE CIS UPES", "May your wisdom and leadership continue to illuminate the path forward — warmest birthday wishes!"),
    ("Prof. Neelam Srivastava", "Faculty Advisor, IEEE CIS UPES", "Your guidance shapes futures — wishing you a birthday filled with appreciation and joy!"),
    ("Dr. Suresh Rajan", "Advisory Board Member, IEEE CIS UPES", "To a pillar of strength and knowledge — may this year bring you everything your heart desires!"),
    ("Prof. Anita Bose", "Senior Executive, IEEE CIS UPES", "Your vision and dedication are the foundation of our success — happiest birthday to you!"),
    ("Dr. Manish Thakur", "Executive Committee Member, IEEE CIS UPES", "Wishing you a birthday that reflects the excellence you bring to everything you touch!"),
    ("Prof. Deepa Mathur", "Faculty Advisor, IEEE CIS UPES", "May your birthday be a celebration of the incredible impact you've made — here's to many more years!"),
    ("Dr. Vivek Sharma", "Advisory Board Member, IEEE CIS UPES", "Your mentorship inspires generations — wishing you a truly memorable birthday celebration!"),
    ("Prof. Sunita Rao", "Senior Executive, IEEE CIS UPES", "To a leader whose grace and intellect inspire us all — may your birthday be as remarkable as you!"),
    ("Dr. Amit Chandra", "Executive Committee Member, IEEE CIS UPES", "Wishing you a year of new discoveries and continued excellence — happy birthday!"),
    ("Prof. Kavitha Menon", "Faculty Advisor, IEEE CIS UPES", "Your passion for education lights the way — may your special day be filled with warmth and gratitude!"),
    ("Dr. Rakesh Agarwal", "Advisory Board Member, IEEE CIS UPES", "To an extraordinary mentor — may every wish you make today come beautifully true!"),
    ("Prof. Leela Krishnan", "Senior Executive, IEEE CIS UPES", "Your contributions are immeasurable — wishing you a birthday overflowing with happiness and recognition!"),
    ("Dr. Nikhil Pande", "Executive Committee Member, IEEE CIS UPES", "May this milestone birthday mark the beginning of your most rewarding chapter yet!"),
    ("Prof. Shalini Das", "Faculty Advisor, IEEE CIS UPES", "Your steady guidance and warmth make all the difference — happiest birthday wishes to you!"),
    ("Dr. Pradeep Misra", "Advisory Board Member, IEEE CIS UPES", "Here's to celebrating a life dedicated to knowledge and service — may your birthday shine bright!"),
    ("Prof. Rekha Devi", "Senior Executive, IEEE CIS UPES", "Wishing you a birthday as graceful and impactful as your incredible journey!"),
    ("Dr. Sanjay Gupta", "Executive Committee Member, IEEE CIS UPES", "May the new year of your life bring fresh perspectives and extraordinary achievements — happy birthday!"),
    ("Prof. Meenakshi Iyer", "Faculty Advisor, IEEE CIS UPES", "To a guiding light in our community — wishing you joy, health, and endless inspiration!"),
    ("Dr. Ajay Deshpande", "Advisory Board Member, IEEE CIS UPES", "Your legacy of excellence inspires us daily — may your birthday be truly special!"),
    ("Prof. Rama Sundaram", "Senior Executive, IEEE CIS UPES", "Celebrating you today and every day — may your birthday be as wonderful as your contributions!"),
]


def generate_template(style_num, style_cfg, variant, person_data):
    name, title, quote = person_data
    is_dark = style_cfg["bg"].startswith("#0") or style_cfg["bg"].startswith("#1")
    body_bg = "#0a0a0f" if is_dark else "#f0f0f0"
    ctrl_bg = "rgba(15, 15, 25, 0.85)" if is_dark else "rgba(240, 240, 245, 0.9)"
    ctrl_text = "rgba(255,255,255,0.5)" if is_dark else "rgba(0,0,0,0.5)"
    ctrl_text_active = "#FFFFFF" if is_dark else "#000000"
    ctrl_label = "rgba(255,255,255,0.4)" if is_dark else "rgba(0,0,0,0.35)"
    ctrl_border = "rgba(255,255,255,0.08)" if is_dark else "rgba(0,0,0,0.08)"
    ctrl_btn_border = "rgba(255,255,255,0.12)" if is_dark else "rgba(0,0,0,0.1)"
    ctrl_btn_bg = "rgba(255,255,255,0.04)" if is_dark else "rgba(0,0,0,0.03)"
    ctrl_btn_hover = "rgba(255,255,255,0.08)" if is_dark else "rgba(0,0,0,0.06)"
    
    accent = style_cfg["btn_accent"]
    p1, p2, p3 = style_cfg["particle_colors"]
    style_num_str = f"{style_num:02d}"

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{style_cfg["name"]} — Happy Birthday | IEEE CIS UPES</title>
  <link href="https://fonts.googleapis.com/css2?family={style_cfg["fonts"]}&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
  <style>
    *, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      font-family: {style_cfg["font_body"]};
      background: {body_bg};
      min-height: 100vh; display: flex; flex-direction: column; align-items: center;
      padding: 20px 10px 60px; color: {style_cfg["text_primary"]};
    }}
    .controls-bar {{
      position: sticky; top: 0; z-index: 1000; width: 100%; max-width: 600px;
      display: flex; justify-content: space-between; align-items: center;
      padding: 12px 20px; margin-bottom: 24px;
      background: {ctrl_bg}; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      border: 1px solid {ctrl_border}; border-radius: 16px; gap: 12px; flex-wrap: wrap;
    }}
    .control-group {{ display: flex; align-items: center; gap: 6px; }}
    .control-label {{ font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: {ctrl_label}; font-weight: 700; margin-right: 4px; }}
    .ratio-btn, .chapter-btn {{
      padding: 6px 14px; border: 1px solid {ctrl_btn_border};
      background: {ctrl_btn_bg}; color: {ctrl_text};
      font-family: 'Inter', {style_cfg["font_body"]}; font-size: 11px; font-weight: 600;
      border-radius: 8px; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }}
    .ratio-btn:hover, .chapter-btn:hover {{ background: {ctrl_btn_hover}; color: {ctrl_text_active}; }}
    .ratio-btn.active {{ background: {accent}22; border-color: {accent}; color: {accent}; box-shadow: 0 0 12px {accent}25; }}
    .chapter-btn.active {{ background: rgba(0,98,155,0.2); border-color: #00629B; color: #5bb8f5; box-shadow: 0 0 12px rgba(0,98,155,0.15); }}
    .download-btn {{
      padding: 8px 18px; border: none; border-radius: 10px;
      font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700;
      cursor: pointer; transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
      display: flex; align-items: center; gap: 6px;
    }}
    .download-btn.png {{ background: linear-gradient(135deg, {accent}, {style_cfg["accent2"]}); color: {"#fff" if is_dark else "#fff"}; }}
    .download-btn.jpg {{ background: linear-gradient(135deg, {style_cfg["accent2"]}, {accent}); color: #fff; }}
    .download-btn:hover {{ transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }}
    :root {{ --card-ratio: 9 / 16; }}
    .card-canvas {{
      position: relative; width: 100%; max-width: 450px;
      aspect-ratio: var(--card-ratio, 9 / 16); overflow: hidden; border-radius: 4px;
      box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);
      transition: aspect-ratio 0.5s cubic-bezier(0.4,0,0.2,1), max-width 0.5s cubic-bezier(0.4,0,0.2,1);
      display: flex; flex-direction: column;
      background: {style_cfg["card_bg"]}; border: {style_cfg["card_border"]};
      color: {style_cfg["text_primary"]}; font-family: {style_cfg["font_body"]}; padding: 0;
    }}
    .texture-overlay {{
      position: absolute; inset: 0; pointer-events: none; z-index: 50;
      mix-blend-mode: overlay; opacity: 0.4;
      background-image: {style_cfg["texture"]};
      background-size: 4px 4px;
    }}
    .particles {{ position: absolute; inset: 0; pointer-events: none; z-index: 1; overflow: hidden; }}
    .particle {{
      position: absolute; border-radius: 50%; opacity: 0;
      animation: floatUp var(--dur, 8s) var(--delay, 0s) infinite ease-in-out;
    }}
    @keyframes floatUp {{
      0% {{ transform: translateY(100%) scale(0); opacity: 0; }}
      20% {{ opacity: var(--max-opacity, 0.6); }}
      80% {{ opacity: var(--max-opacity, 0.6); }}
      100% {{ transform: translateY(-120%) scale(1.2) rotate(180deg); opacity: 0; }}
    }}
    .particle:nth-child(1) {{ left: 10%; width: 6px; height: 6px; background: {p1}; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }}
    .particle:nth-child(2) {{ left: 25%; width: 4px; height: 4px; background: {p2}; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }}
    .particle:nth-child(3) {{ left: 45%; width: 8px; height: 8px; background: {p1}; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }}
    .particle:nth-child(4) {{ left: 65%; width: 5px; height: 5px; background: {p3}; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }}
    .particle:nth-child(5) {{ left: 80%; width: 7px; height: 7px; background: {p2}; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }}
    .particle:nth-child(6) {{ left: 55%; width: 3px; height: 3px; background: {p3}; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }}
    .logo-header {{
      display: flex; justify-content: space-between; align-items: center;
      width: 100%; padding: 14px 18px 8px; z-index: 10; position: relative;
      background: {style_cfg["glass_bg"]}; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      border-bottom: 1px solid {style_cfg["glass_border"]};
    }}
    .logo-img {{ height: 32px; width: auto; object-fit: contain; filter: {style_cfg["logo_filter"]}; transition: transform 0.3s ease; }}
    .logo-img:hover {{ transform: scale(1.05); }}
    .content-area {{ flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 16px 24px; position: relative; z-index: 5; }}
    .club-wishes-header {{
      font-family: {style_cfg["font_body"]}; font-weight: 800; font-size: 0.65rem;
      letter-spacing: 0.25em; text-transform: uppercase; text-align: center;
      color: {style_cfg["text_primary"]}; margin-bottom: 4px; opacity: 0.8;
    }}
    .main-wishing-header {{
      font-family: {style_cfg["font_display"]}; font-size: clamp(2.2rem, 8vw, 3.5rem);
      letter-spacing: 0.05em; text-transform: uppercase; text-align: center;
      margin: 6px 0 12px; color: {style_cfg["text_primary"]};
      text-shadow: {style_cfg["header_shadow"]}; transform: {style_cfg["header_transform"]};
      line-height: 0.95; animation: headerPulse 4s ease-in-out infinite;
    }}
    @keyframes headerPulse {{
      0%, 100% {{ text-shadow: {style_cfg["header_shadow"]}; }}
      50% {{ text-shadow: {style_cfg["header_shadow"]}, 0 0 8px {accent}20; }}
    }}
    .profile-photo-frame {{
      width: 120px; height: 120px; margin: 8px auto;
      border: {style_cfg["frame_border"]}; border-radius: {style_cfg["frame_radius"]};
      box-shadow: {style_cfg["frame_shadow"]};
      overflow: hidden; background: {style_cfg["frame_bg"]};
      backdrop-filter: blur(6px); position: relative; z-index: 2;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: frameFloat 6s ease-in-out infinite;
    }}
    @keyframes frameFloat {{ 0%, 100% {{ transform: translateY(0); }} 50% {{ transform: translateY(-4px); }} }}
    .avatar-silhouette {{ width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }}
    .avatar-svg {{ width: 100%; height: 100%; }}
    .member-details {{ text-align: center; margin: 8px 0; z-index: 2; position: relative; }}
    .member-name {{
      font-family: {style_cfg["font_display"]}; font-size: clamp(1.4rem, 5vw, 2.2rem);
      margin: 0; letter-spacing: 0.03em; color: {style_cfg["text_primary"]}; line-height: 1.1;
    }}
    .member-title {{
      font-family: {style_cfg["font_body"]}; font-size: 0.7rem; font-weight: 700;
      color: {style_cfg["text_muted"]}; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 0.08em;
    }}
    .birthday-quote {{
      font-family: {style_cfg["font_accent"]}; font-size: clamp(0.8rem, 2.8vw, 0.95rem);
      text-align: center; padding: 0 18px; margin: 10px 0;
      color: {style_cfg["text_primary"]}; z-index: 2; position: relative; line-height: 1.5;
      font-style: italic; opacity: 0.85;
    }}
    .deco-squiggle {{ position: absolute; z-index: 1; opacity: 0.7; animation: drift 12s ease-in-out infinite; }}
    @keyframes drift {{
      0%, 100% {{ transform: translate(0, 0) rotate(0deg); }}
      25% {{ transform: translate(4px, -6px) rotate(2deg); }}
      50% {{ transform: translate(-3px, -3px) rotate(-1deg); }}
      75% {{ transform: translate(2px, 4px) rotate(1.5deg); }}
    }}
    .deco-squiggle:nth-of-type(2) {{ animation-delay: -3s; }}
    .deco-squiggle:nth-of-type(3) {{ animation-delay: -6s; }}
    .footer-socials {{
      display: flex; justify-content: center; align-items: center;
      gap: 14px; padding: 10px 16px 12px; font-size: 0.58rem; font-weight: 700;
      z-index: 10; position: relative; background: {style_cfg["social_bg"]};
      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
      border-top: 1px solid {style_cfg["glass_border"]}; flex-wrap: wrap;
    }}
    .social-item {{ display: flex; align-items: center; gap: 4px; color: {style_cfg["social_color"]}; opacity: 0.7; text-decoration: none; transition: opacity 0.2s; }}
    .social-item:hover {{ opacity: 1; }}
    .social-icon {{ width: 11px; height: 11px; fill: {style_cfg["social_color"]}; }}
    @media (max-width: 480px) {{
      .controls-bar {{ padding: 10px 14px; gap: 8px; }}
      .ratio-btn, .chapter-btn {{ padding: 5px 10px; font-size: 10px; }}
      .download-btn {{ padding: 6px 14px; font-size: 11px; }}
    }}
  </style>
</head>
<body>
  <div class="controls-bar" id="controls">
    <div class="control-group">
      <span class="control-label">Ratio</span>
      <button class="ratio-btn active" data-ratio="9 / 16" data-maxw="450">9:16</button>
      <button class="ratio-btn" data-ratio="1 / 1" data-maxw="500">1:1</button>
      <button class="ratio-btn" data-ratio="4 / 5" data-maxw="480">4:5</button>
      <button class="ratio-btn" data-ratio="16 / 9" data-maxw="700">16:9</button>
    </div>
    <div class="control-group">
      <span class="control-label">Chapter</span>
      <button class="chapter-btn active" data-chapter="cis" data-logo="logos/ieee_cis_upes.png" data-name="IEEE CIS">CIS</button>
      <button class="chapter-btn" data-chapter="sps" data-logo="logos/ieee_sps_upes.png" data-name="IEEE SPS">SPS</button>
    </div>
    <div class="control-group">
      <button class="download-btn png" onclick="downloadCard('png')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        PNG
      </button>
      <button class="download-btn jpg" onclick="downloadCard('jpeg')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        JPG
      </button>
    </div>
  </div>
  <div class="card-canvas" id="card-capture">
    <div class="texture-overlay"></div>
    <div class="particles"><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div></div>
    {style_cfg["deco_svg"]}
    <div class="logo-header">
      <img src="logos/ieee_logo.png" alt="IEEE" class="logo-img" style="height:28px;">
      <img src="logos/ieee_cis_upes.png" alt="IEEE CIS UPES Chapter" class="logo-img chapter-logo" id="chapterLogo" style="height:36px;">
      <img src="logos/upes_logo.png" alt="UPES" class="logo-img" style="height:30px;">
    </div>
    <div class="content-area">
      <div class="club-wishes-header" id="clubHeader">THE IEEE CIS FAMILY WISHES</div>
      <h1 class="main-wishing-header">Happy<br>Birthday</h1>
      <div class="profile-photo-frame">
        <div class="avatar-silhouette">
          <svg class="avatar-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="{style_cfg["avatar_bg"]}"/>
            <circle cx="50" cy="38" r="16" fill="{style_cfg["avatar_fill"]}"/>
            <path d="M22 82 c0 -22, 13 -28, 28 -28 s28 6, 28 28 z" fill="{style_cfg["avatar_fill"]}"/>
          </svg>
        </div>
      </div>
      <div class="member-details">
        <h2 class="member-name">{name}</h2>
        <p class="member-title">{title}</p>
      </div>
      <div class="birthday-quote">"{quote}"</div>
    </div>
    <div class="footer-socials">
      <a class="social-item" href="#"><svg class="social-icon" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg><span>IEEE Computational Intelligence Society UPES</span></a>
      <a class="social-item" href="#"><svg class="social-icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg><span>@upes.ieee.cis</span></a>
      <a class="social-item" href="#"><svg class="social-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg><span>ieee.cis.sbc@stu.upes.ac.in</span></a>
    </div>
  </div>
  <script>
    document.querySelectorAll('.ratio-btn').forEach(btn => {{
      btn.addEventListener('click', () => {{
        document.querySelectorAll('.ratio-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const card = document.getElementById('card-capture');
        card.style.setProperty('--card-ratio', btn.dataset.ratio);
        card.style.maxWidth = btn.dataset.maxw + 'px';
      }});
    }});
    document.querySelectorAll('.chapter-btn').forEach(btn => {{
      btn.addEventListener('click', () => {{
        document.querySelectorAll('.chapter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('chapterLogo').src = btn.dataset.logo;
        document.getElementById('chapterLogo').alt = btn.dataset.name + ' UPES Chapter';
        document.getElementById('clubHeader').textContent = 'THE ' + btn.dataset.name + ' FAMILY WISHES';
      }});
    }});
    async function downloadCard(format) {{
      const card = document.getElementById('card-capture');
      const controls = document.getElementById('controls');
      controls.style.display = 'none';
      try {{
        const canvas = await html2canvas(card, {{ scale: 3, useCORS: true, allowTaint: true, backgroundColor: null, logging: false }});
        const link = document.createElement('a');
        const ratioLabel = document.querySelector('.ratio-btn.active')?.textContent.replace(':', 'x') || '9x16';
        link.download = `{style_cfg["slug"]}_{variant}_${{ratioLabel}}.${{format === 'jpeg' ? 'jpg' : 'png'}}`;
        link.href = canvas.toDataURL(`image/${{format}}`, format === 'jpeg' ? 0.95 : undefined);
        link.click();
      }} catch (err) {{ alert('Export failed: ' + err.message); }}
      finally {{ controls.style.display = ''; }}
    }}
  </script>
</body>
</html>'''
    return html


def main():
    # Find which files need upgrading (<=15KB = old templates)
    needs_upgrade = []
    for style_num in STYLES:
        for variant in ["head_core", "executive"]:
            filepath = os.path.join(OUTPUT_DIR, f"style_{style_num:02d}_{variant}.html")
            if os.path.exists(filepath):
                size = os.path.getsize(filepath)
                if size <= 15000:
                    needs_upgrade.append((style_num, variant))
            else:
                needs_upgrade.append((style_num, variant))
    
    print(f"Found {len(needs_upgrade)} templates to upgrade")
    
    generated = 0
    for style_num, variant in needs_upgrade:
        if style_num not in STYLES:
            print(f"  SKIP: Style {style_num} not in config")
            continue
        
        style_cfg = STYLES[style_num]
        idx = (style_num - 1) % len(HEAD_CORE_DATA)
        
        if variant == "head_core":
            person_data = HEAD_CORE_DATA[idx]
        else:
            person_data = EXECUTIVE_DATA[idx]
        
        html = generate_template(style_num, style_cfg, variant, person_data)
        filepath = os.path.join(OUTPUT_DIR, f"style_{style_num:02d}_{variant}.html")
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(html)
        
        generated += 1
        print(f"  ✅ Generated: style_{style_num:02d}_{variant}.html ({len(html)} bytes)")
    
    print(f"\nDone! Generated {generated} templates.")


if __name__ == "__main__":
    main()
