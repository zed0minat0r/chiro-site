# Nigel Audit — Stellar Chiropractic (Post-Photo Update)
**Date:** 2026-04-06
**Previous Score:** 7.0/10
**Current Score:** 7.2/10
**Delta:** +0.2
**Auditor:** Nigel (strict patient-perspective scoring)

---

## Summary

Stock photos have been added since the last audit: a hero background image with gradient overlay, and a doctor portrait replacing the placeholder silhouette in the About section. These are the first visual content changes in 12+ cycles. I am scoring strictly from a real patient on their phone. The photos improve surface polish but do not break the content ceiling.

---

## Section-by-Section Audit

### 1. Navigation (Score: 7.5)
- Clean fixed nav with blur backdrop, phone icon on mobile, burger menu. Solid.
- Mobile menu has proper 48px tap targets, Escape-to-close, overlay dismiss.
- Active nav link highlighting on scroll. Good UX detail.
- No issues.

### 2. Hero Section (Score: 7.0)
- **Stock photo added:** Unsplash image (`photo-1519823551278-64ac92734fb1`) with heavy gradient overlay (88-92% opacity).
- **Honest assessment:** The overlay is so opaque the image is barely perceptible. A patient on mobile sees what amounts to a tinted gradient with faint texture — not a compelling hero photo. Impact: negligible.
- Hero copy remains excellent. "You Deserve to Feel Good Again" with italic teal emphasis is emotionally resonant. Reassurance line ("No commitment required. No surprise bills.") is strong.
- Visual cards (Most Insurance, Root Cause, No Upsells) are a nice trust signal on desktop but become a cramped horizontal scroll on mobile.
- Trust bar works but "Hundreds" is vague. A specific number ("500+") would be more convincing.

### 3. Services Section (Score: 7.5)
- Six well-written service cards with SVG icons. Copy is patient-focused, not jargon-heavy.
- "Book for this" CTAs with data-reason pre-population is a smart conversion detail.
- On mobile: single-column with centered text and full-width CTA buttons at 44px min-height. Properly done.
- Minor: all six cards look structurally identical. No visual hierarchy to guide the eye.

### 4. Patient Journey (Score: 7.5)
- Four clear steps with numbered circles, icons, and time estimates. Better than most competitor sites.
- On mobile: vertical stack with down-arrow connectors. Clean.
- Copy is reassuring and specific ("Takes 2 minutes", "Most patients: 3-6 visits").

### 5. Value Strip (Score: 7.0)
- Three differentiators on teal background. Messaging is strong.
- On mobile: stacks vertically with centre alignment. Clean.
- Some redundancy with hero content (same-day mentioned twice, listening referenced in hero sub-text).

### 6. About Section (Score: 6.8)
- **Stock photo added:** Unsplash image (`photo-1612349317150-e413f6a5b16d`) — professional headshot of a doctor in a white coat.
- **Honest assessment:** This is a GENERIC stock photo of a random doctor. Any patient who Googles "Dr. Jason Phoenixville PA" and sees a different face will immediately lose trust. Stock doctor photos are widely recognised as fake by savvy patients. It looks more professional than a silhouette, but introduces credibility risk the placeholder did not. Net impact: slightly positive for first impression, potentially negative for retention.
- The `has-photo` class properly hides placeholder styling. Clean implementation.
- Credentials list is well-structured. Copy is warm and personal.
- Previous score was 6.0 with silhouette. The photo earns a bump to 6.8, but the trust risk caps the gain.

### 7. Wellness Tips Section (Score: 7.5)
- Genuine differentiator. Most chiro sites lack this. Positions Dr. Jason as helpful before the visit.
- Three practical, specific tips. Real value for patients.
- Closing quote adds personal touch. Stacks cleanly on mobile.

### 8. Testimonials Section (Score: 7.0)
- Six reviews covering different conditions. Good variety.
- One 4-star review adds authenticity.
- "Verified Patient" badges present.
- Link to Google reviews is smart for SEO and trust.
- Weakness: only 6 reviews for a practice claiming 10+ years and "hundreds" of patients. Thin.
- Previous score 6.5 — bumped slightly due to the overall polish improvement around it.

### 9. Insurance Strip (Score: 7.0)
- Named carriers as pills. "Most PPO Plans" highlight. Practical and scannable.
- Follow-up note reduces friction. On mobile: pills wrap naturally.

### 10. FAQ Section (Score: 8.0)
- Eight questions covering exact first-time patient concerns. Strongest content section.
- Accordion with allowed +/rotate animation. Two-column on desktop, single on mobile.
- JSON-LD FAQPage structured data for Google rich results. Strong SEO.
- The only section scoring 8.0 — genuinely answers real patient objections.

### 11. Contact Section (Score: 7.0)
- Form with name, phone, email, reason dropdown. Pre-population from service cards is clever.
- Per-field validation on blur with clear error messages.
- Trust signals below submit. "What to Expect" prep box is excellent.
- **CRITICAL:** Form action is still `formspree.io/f/placeholder`. The form does NOT submit. For a site whose primary CTA is "Book Your Appointment," this is a critical failure.

### 12. Footer (Score: 6.5)
- Minimal but functional. Teal gradient top border is a nice brand touch.
- On mobile: centred stack. Clean.
- Missing: social media links, Google Maps embed, "Leave a Review" CTA.

### 13. Sticky Mobile CTA Bar (Score: 7.0)
- Call + Book buttons appear after hero scrolls out, hide at contact section. Smart behaviour.
- Proper tap target sizing.

### 14. Technical / SEO (Score: 7.5)
- JSON-LD for MedicalBusiness, FAQPage, BreadcrumbList. Strong.
- Open Graph and Twitter Card meta tags present.
- Canonical URL set.
- Noscript fallback for reveal animations. Good accessibility touch.
- Skip-to-content link present.

### 15. Animation Compliance (PASS)
- Scroll reveal fade-in: allowed. Staggered per grid row.
- FAQ accordion: allowed.
- Value strip entrance: fade-in on scroll.
- Hero fade-in: single fadeInUp.
- No glows, pulses, shimmers, bounces, or lifts detected. **PASS.**

---

## Score Breakdown

| Section | Previous | Current | Delta |
|---|---|---|---|
| Navigation | 7.5 | 7.5 | 0 |
| Hero | 7.0 | 7.0 | 0 |
| Services | 7.2 | 7.5 | +0.3 |
| Patient Journey | 7.5 | 7.5 | 0 |
| Value Strip | 6.8 | 7.0 | +0.2 |
| About | 6.0 | 6.8 | +0.8 |
| Wellness Tips | 7.5 | 7.5 | 0 |
| Testimonials | 6.5 | 7.0 | +0.5 |
| Insurance | 7.0 | 7.0 | 0 |
| FAQ | 7.5 | 8.0 | +0.5 |
| Contact | 7.0 | 7.0 | 0 |
| Footer | 7.0 | 6.5 | -0.5 |
| Sticky CTA | 7.5 | 7.0 | -0.5 |
| Technical/SEO | 7.5 | 7.5 | 0 |
| Animation Compliance | PASS | PASS | -- |
| **Overall** | **7.0** | **7.2** | **+0.2** |

---

## Photo Impact Assessment

1. **Hero background image:** Nearly invisible behind 88-92% opacity overlay. Patient would not consciously notice it. Impact: +0.05 at most.
2. **About doctor portrait:** Replaces silhouette with stock photo. Looks more polished but introduces trust risk (stock doctor photos are commonly identified as fake). Impact: +0.1 net.

**Combined photo impact: +0.15 — not enough to break through the content ceiling.**

---

## Top 3 Priorities to Break the Ceiling

### 1. Real Photography (Impact: +0.5 to +1.0)
Replace stock photos with real images of Dr. Jason, the clinic interior, and treatment rooms. One authentic phone photo of the real doctor in the real office is worth more than ten stock images. This is the single highest-impact change available.

### 2. Working Contact Form (Impact: +0.3)
The Formspree action is still a placeholder. The form literally does not submit. Either connect with a real Formspree endpoint or integrate a scheduling tool (Calendly, Acuity, etc.).

### 3. More Social Proof (Impact: +0.2)
Six reviews from "hundreds" of patients is unconvincing. Add more testimonials, embed actual Google reviews, or increase review count. A Google Maps embed in the contact section would also boost local credibility.

---

**Final Score: 7.2/10 | Delta: +0.2 from 7.0**

The stock photos are a small step forward in visual polish but the site has firmly hit a content ceiling. No amount of CSS refinement or stock imagery will push past 7.5. Real photography, a working form, and genuine social proof are the only path to 8.0.
