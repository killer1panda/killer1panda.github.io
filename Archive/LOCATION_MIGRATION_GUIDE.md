# Location Migration Guide
## Enschede, Netherlands → Gurugram, India

**Date:** April 14, 2026  
**Status:** Ready for Implementation

---

## Current State Analysis

### Search Results
The current `index4.html` file does **not** contain hardcoded location references. However, the following should be checked in related files:

- Portfolio/About pages
- Contact forms
- Footer sections
- Metadata/Schema markup
- CMS/Backend configuration

---

## Location Details Update

### New Location Information
| Field | Value |
|-------|-------|
| **City** | Gurugram (Gurgaon) |
| **State/Region** | Haryana |
| **Country** | India |
| **Country Code** | IN |
| **Timezone** | IST (UTC+5:30) |
| **Coordinates** | 28.4595° N, 77.0266° E |

---

## Implementation Checklist

### 1. **Meta Tags & Schema Markup**
- [ ] Update Schema.org `Organization` markup:
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vivek Yadav Design & Code",
    "url": "https://www.vivekklaassens.com",
    "logo": "https://www.vivekklaassens.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/vivekklaassens",
      "https://www.instagram.com/vivekklaassens",
      "https://www.linkedin.com/in/vivekklaassens"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+91-9599241801"
    }
  }
  </script>
  ```

- [ ] Update meta tags for location:
  ```html
  <!-- geo-location meta tags -->
  <meta name="geo.placename" content="Gurugram, Haryana, India">
  <meta name="geo.position" content="28.4595;77.0266">
  <meta name="geo.region" content="IN-HR">
  <meta name="ICBM" content="28.4595, 77.0266">
  ```

### 2. **Contact Information**
- [ ] Update phone number to Indian dialing code (+91)
- [ ] Update business hours if applicable
- [ ] Update contact form headers/labels if region-specific

### 3. **Payment & Localization**
- [ ] Configure currency for Indian market (INR ₹)
- [ ] Update payment methods:
  - Stripe India
  - PayU
  - Razorpay
  - UPI options


### 4. **Analytics & Tracking**
- [ ] Update Google Analytics:
  - Primary location: India
  - Timezone: IST (UTC+5:30)
  - Currency: INR

- [ ] Update Google Search Console:
  - Change country targeting to India
  - Update primary location

### 5. **Legal & Compliance**
- [ ] Update Privacy Policy with Indian data protection references
  - Mention DPDP Act compliance
  - Indian contact address
  
- [ ] Update Terms of Service with Indian jurisdiction
- [ ] Ensure GST compliance if applicable

### 6. **Social Media & Branding**
- [ ] Update all social media profiles:
  - Instagram bio
  - LinkedIn location
  - Twitter location
  - Facebook about section

### 7. **Email & Communication**
- [ ] Update email signature with new location
- [ ] Update automated emails with location reference
- [ ] Update support contact page

### 8. **Images & Visual Assets**
- [ ] Update flag icons/location badges to India
- [ ] Update office location map (if applicable)

---

## SEO Considerations

### What to Update for Better Local SEO

1. **Meta Description**
   ```html
   <!-- Before -->
   <meta name="description" content="Portfolio of digital designer & developer based in Enschede, Netherlands">
   
   <!-- After -->
   <meta name="description" content="Portfolio of digital designer & developer based in Gurugram, India">
   ```

2. **Title Tags**
   - Include location in title for local search intent
   - Example: "Vivek Yadav Design & Code — Freelance Designer in Gurugram, India"

3. **Content Updates**
   - Mention Gurugram in "About" section
   - Update service area descriptions
   - Include local keywords

4. **Backlinks**
   - Request Indian business directory listings
   - Register on local directories:
     - Google My Business
     - Justdial
     - IndiaStack
     - Local chamber of commerce

---

## Technical Changes Required

### Database Updates (if applicable)
```sql
-- Update user location
UPDATE users SET 
  location = 'Gurugram, Haryana',
  country = 'India',
  country_code = 'IN',
  timezone = 'Asia/Kolkata',
  latitude = 28.4595,
  longitude = 77.0266
WHERE user_id = 1;

-- Update organization settings
UPDATE organization_settings SET
  primary_location = 'Gurugram',
  primary_country = 'India',
  updated_at = NOW()
WHERE org_id = 1;
```

### Example File Structure to Update
```
📁 Portfolio
├── 📄 index4.html ✅ (Already updated)
├── 📄 about.html ← Location reference
├── 📄 contact.html ← Address field
├── 📄 footer.html ← Copyright/location info
├── 📁 components
│   ├── 📄 hero.html ← Background image
│   └── 📄 contact-form.html ← Country selector
├── 📁 locales
│   └── 📄 en-IN.json ← India-specific strings
└── 📁 assets
    └── 📄 schema.ld ← JSON-LD schema
```

---

## Migration Timeline

| Task | Timeline | Priority |
|------|----------|----------|
| Update meta tags & schema | Day 1 | 🔴 High |
| Update contact info | Day 1 | 🔴 High |
| Update about/footer | Day 2 | 🔴 High |
| Update analytics | Day 2 | 🟡 Medium |
| Social media update | Day 3 | 🟡 Medium |
| Legal docs update | Day 4 | 🟡 Medium |
| Backlinks/directories | Week 2 | 🟢 Low |
| SEO monitoring | Ongoing | 🔴 High |

---

## Testing Checklist

- [ ] Verify all location references updated
- [ ] Test on mobile (location services)
- [ ] Validate geo markup with Google's Structured Data Tester
- [ ] Check Google Search Console for location signals
- [ ] Verify timezone settings in analytics
- [ ] Test currency display if applicable
- [ ] Confirm email footer shows correct address
- [ ] Validate phone number format includes +91

---

## Monitoring Post-Migration

### What to Track
1. **Search Ranking Changes**
   - Monitor keywords with location intent
   - Track "Vivek Yadav Gurugram" searches

2. **Traffic Patterns**
   - Check if India-based traffic increases
   - Monitor bounce rates by region

3. **Conversion Metrics**
   - Track inquiries from India
   - Monitor client acquisition shift

4. **Technical Health**
   - Monitor crawl errors in GSC
   - Check for broken redirects
   - Verify 301 redirects if URL structure changed

### Tools to Use
- Google Search Console
- Google Analytics 4
- Semrush/Ahrefs
- Schema Validator
- Google My Business Insights

---

## Quick Reference: Files to Update

```bash
# Essential files
index4.html (✅ COMPLETED - No location references found)
about.html (Likely contains "based in...")
contact.html (Address field)
footer.html (Copyright/location info)

# Schema/Meta files
_document.html or head.html (Meta tags)
schema.ld or schema.json (JSON-LD markup)
robots.txt (May need country-specific sitemaps)

# Backend files
config/location.js (or similar)
api/location.js (API endpoints)
database/seeds/location.sql (Database seed data)

# Content files
content/pages/about.md
content/pages/contact.md
content/pages/services.md
```

---

## Notes & Questions

- **Note 1:** No hardcoded location found in `index4.html` itself
- **Note 2:** Ensure all services can be delivered from Gurugram
- **Question 1:** Will the business hours change?
- **Question 2:** Will phone number change to Indian number?
- **Question 3:** Is this a permanent location move or seasonal?

---

## Support & Resources

### Useful Google Resources
- [Google My Business Help](https://support.google.com/business)
- [Geo Tagging Guide](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Search Console Help](https://support.google.com/webmasters)

### Indian Business Registration
- [DPIIT Portal](https://www.startupindia.gov.in/)
- [IndiaStack](https://indianstackfoundation.org/)
- [GST Portal](https://www.gst.gov.in/)

---

**Last Updated:** April 14, 2026  
**Next Review:** After location change implementation
