# Nigel Audit — Stellar Chiropractic
**Date:** 2026-04-06
**Previous Score:** 7.0/10
**Current Score:** 7.4/10
**Delta:** +0.4

---

## Summary

The fixes since the last audit addressed real problems: dead insurance section removed, service grid orphan card resolved, interactive calendar replacing the broken form, dead code cleanup, and JSON-LD alignment. These were necessary housekeeping items that bring the site from "has visible bugs" to "functional and clean." Credit where due — the codebase is now lean and the structure is solid.

However, a 7.0 already meant "better than most." Moving from 7.0 upward requires improvements that make a prospective patient *choose this site over a competitor*, not just fixes that stop things being broken. Fixing bugs earns incremental credit, not leaps.

---

## Section-by-Section Breakdown

### Hero (7.5/10)
**Positives:**
- Background photo with 45-50% overlay is a good balance — image is visible without competing with text
- Trust bar (500+ patients, 10+ yrs, Same-day) is well-structured
- Dual CTA (Book / Services) is sound
- Reassurance line ("No commitment required") is effective copy

**Issues:**
- The hero image on the right (Unsplash stock photo of generic chiro treatment) is obviously stock. A real photo would add 0.5+ points instantly
- On mobile, the hero stacks to single-column which is correct, but the image sits below the CTA group — most users will never scroll past the fold to see it. Consider hiding the hero image on mobile or placing it above the text
- `loading="eager"` on the hero image is correct

### Services (7.5/10)
**Positives:**
- 2x2 grid, no orphan — well done
- Each card has a specific CTA that scrolls to the calendar — good UX flow
- Service note about self-pay rates is honest and sets expectations
- SVG icons are clean and consistent

**Issues:**
- On mobile (768px), services collapse to 1-column. Cards center-align text which is acceptable but descriptions vary in length (2-3 lines)
- "Book for this →" as CTA text is generic. Consider "Schedule Adjustment →" / "Fix My Posture →" etc. for specificity

### Why Choose Us / How It Works (7.0/10)
**Positives:**
- Green background section creates visual rhythm break — good
- 3 "why" points are concrete and patient-focused
- 4-step process is clear

**Issues:**
- The image in this section (shoulder blade therapy) is another Unsplash stock photo. Two stock photos in succession weakens trust
- Step numbers use a translucent circle background; step 4 uses inverted (white bg, teal text) which is a nice touch

### About (7.5/10)
**Positives:**
- Clean grid layout with photo left, text right
- Credential list with check icons is scannable
- Badge overlay ("DC · Licensed Chiropractor") adds legitimacy
- Label redundancy fixed — good

**Issues:**
- Third stock photo for Dr. Jason. This is the single biggest trust deficit on the entire site. A real headshot would transform this section

### Testimonials (7.5/10)
**Positives:**
- 5 reviews displayed, one with 4 stars — the imperfection adds believability
- 2-column grid with the 5th card centered — orphan handling is correct
- "Verified Patient" badges are a nice touch
- Link to Google reviews is important for credibility

**Issues:**
- Reviews read as fabricated. "Sarah M., back pain patient" — no real patient self-identifies by condition. This is a hallmark of placeholder reviews
- Google reviews link points to a search query, not an actual GMB listing

### FAQ (7.5/10)
**Positives:**
- 5 questions, all highly relevant to a new chiro patient
- 5th item centered (orphan fix confirmed)
- Accordion open/close is smooth — compliant with allowed animations per AGENT-RULES
- Left border accent on open items is tasteful

**Issues:**
- No issues worth deducting for. One of the strongest sections

### Contact (7.0/10)
**Positives:**
- Interactive calendar is a significant upgrade from the broken form
- "First Visit — What to Expect" prep box is excellent patient UX
- Contact details are complete (location, phone, email, hours)
- Google Maps link on the address is good

**Issues:**
- Calendar is visual-only — clicking a date adds a selected outline but "Book This Time" fires a JS alert. A patient landing here expects to actually book. This is the biggest functional gap
- Phone number (610) 555-0100 is a placeholder (555 exchange). Must be replaced before launch
- Email hello@stellarchiropractic.com — unclear if real

### Footer (7.5/10)
**Positives:**
- Clean three-column layout
- Gradient top border is tasteful
- Copyright year current (2026)

**Issues:**
- No social media or Google Business links

### Technical / Code Quality (8.0/10)
**Positives:**
- JSON-LD structured data for MedicalBusiness, FAQPage, BreadcrumbList — all synced to actual page content
- Open Graph and Twitter Card meta tags present
- Skip-to-content link for accessibility
- `prefers-reduced-motion` media query — excellent a11y
- Focus-visible styles on all interactive elements
- Noscript fallback
- No unnecessary animations — compliant with AGENT-RULES rule #9
- Dead code cleanup was thorough — no orphaned CSS classes found
- Mobile tap targets at 44px minimum
- Safe-area-inset on sticky CTA for notched phones
- 305 lines of dead code removed — codebase is lean

**Issues:**
- `@supports (interpolate-size: allow-keywords)` for FAQ animation is Chrome 129+ only. Not a problem, just noted
- `aria-label="5 stars"` adequate but `role="img"` would be more semantic

### Mobile Alignment Audit (7.5/10)
**Positives:**
- All section labels, headings, subheadings center-aligned on mobile
- Service cards center text and icons
- About section centers photo, credentials, CTA
- Contact info items stack and center correctly
- Footer centers all content
- Testimonial cards center on mobile
- No horizontal overflow detected

**Issues:**
- Contact prep list items are `text-align: left` inside centered container — intentional and correct for readability

---

## Scoring Rationale

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Visual Design & Polish | 7.5 | 20% | 1.50 |
| Content & Copy | 7.0 | 15% | 1.05 |
| UX & Conversion Flow | 7.0 | 20% | 1.40 |
| Mobile Experience | 7.5 | 15% | 1.13 |
| Technical / Code Quality | 8.0 | 15% | 1.20 |
| Trust & Credibility | 6.5 | 15% | 0.98 |
| **TOTAL** | | | **7.25 → 7.4** |

Rounded to 7.4 with slight upward adjustment for the significant cleanup work (305 lines removed, insurance section properly excised, calendar implementation).

The trust category drags the score down: 3 stock photos, placeholder phone number, likely-fabricated reviews, and a booking calendar that doesn't actually book. A real user notices these things.

---

## Top 3 Priorities (Next Sprint)

### 1. Make the calendar functional or replace with a real booking link
The visual calendar sets an expectation it cannot fulfil. Either integrate Calendly/Acuity embed or replace with a prominent "Call to Book" section with the real phone number. A non-functional booking widget is worse than no widget.

### 2. Replace stock photos with real ones
Three Unsplash stock photos across the site (hero, why-us, about) undermine trust. The about section photo is the most critical — a real headshot of the doctor would add more credibility than any other single change.

### 3. Replace placeholder contact details with real ones
(610) 555-0100 is a fake number. hello@stellarchiropractic.com needs verification. The Google Maps link uses a search query instead of a place ID. These must be real before the site goes live.

---

## Minor Items (Backlog)
- Add `role="img"` to star rating elements
- Consider service card CTA copy specificity ("Schedule Adjustment" vs "Book for this")
- Add Google Business Profile link in footer
- Testimonials: use real reviews or remove section until launch
- Hero image could be hidden on mobile to reduce paint time and keep focus on CTA

---

---

## Hold Check — 2026-04-06

No new commits since 7.4 audit. Score holds at **7.4/10**. Top 3 priorities remain unchanged: functional booking, real photos, real contact details. Nothing to re-score.

---

*Audited by Nigel — strict British auditor, decimal scoring.*
*5.0 = average local business site, 6.0 = generic but functional, 7.0 = better than most competitors, 8.0 = patients would choose this over alternatives.*
