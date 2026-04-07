# Nigel Audit — Stellar Chiropractic (Post-Overhaul)
**Date:** 2026-04-06
**Previous Score:** 7.2/10
**Current Score:** 7.0/10
**Delta:** -0.2
**Auditor:** Nigel (strict patient-perspective scoring)

---

## Summary

The overhaul was ambitious and directionally correct — cutting 670+ lines of bloat, trimming sections, adding chiropractic-specific photos, and introducing the teal "Why Choose Us" split section. However, execution introduced new layout issues that offset the gains. The photos now load (all four return HTTP 200 — the earlier 404 issue is confirmed fixed), the content is tighter, and the page feels shorter and more focused. But loose ends prevent this from being a clear upgrade from the patient's perspective.

---

## What Improved

1. **Photos actually load.** All four Unsplash images (hero bg, hero treatment side image, shoulder therapy in why-us, chiropractor portrait in about) return HTTP 200. The 404 issue from earlier is resolved. This was critical.

2. **Content trimming.** Wellness tips removed, FAQ trimmed from 8 to 5, services from 6 to 4, about condensed. The page is meaningfully shorter. A patient scanning on mobile reaches the contact form faster.

3. **"Why Choose Us" teal section.** The split layout with check-mark points and the 4-step "How It Works" row is a strong trust-building addition. The teal background breaks up the page visually and creates clear section hierarchy. This is the best new element in the overhaul.

4. **Hero side-by-side layout.** The treatment image alongside the hero copy is more engaging than a text-only block. On desktop, this gives the site genuine visual weight above the fold.

5. **Testimonial cards.** White cards on warm background is correct contrast. "Verified Patient" badges and star ratings add credibility. The 5th odd card auto-centering is a nice grid touch.

6. **Reduced hero overlay.** Background photo more visible at 80-85% overlay vs near-opaque before. Still subtle, but adds texture.

---

## What Regressed or Needs Work

### P1 — Service Cards Grid Orphan (Layout Bug)
The services grid uses `grid-template-columns: repeat(3, 1fr)` but there are only 4 cards. This means 3 cards on row 1, and 1 orphaned card sitting alone on the left of row 2. This looks unfinished and asymmetric. A patient sees this and thinks "did they forget something?"

**Fix:** Switch to `repeat(2, 1fr)` for a clean 2x2 grid, or restore 2 services to fill the 3-column layout.

**Impact:** -0.3

### P2 — Hero Background Photo Still Barely Visible
The overlay is at 80-85% opacity. The hero background image — specifically added as part of this overhaul — contributes almost nothing visually. You are loading a 1400px-wide image that most patients cannot consciously perceive. Either reduce the overlay to 60-70% so the photo contributes atmosphere, or remove it and save the bandwidth.

**Impact:** -0.1

### P3 — JSON-LD FAQPage Schema Lists 8 Questions, Page Shows 5
The FAQPage structured data in `<head>` still contains 8 questions, but only 5 are visible on the page. The 3 hidden questions (same-day appointments, cost without insurance, safety for children/seniors) must either be removed from the schema or restored to the page. Google may flag this mismatch and withhold rich results.

**Impact:** -0.1

### P4 — JSON-LD MedicalBusiness Schema Lists 6 Services, Page Shows 4
The `hasOfferCatalog` in structured data still lists Massage Therapy and Wellness Plans, which no longer appear on the page. Same schema/content mismatch issue.

**Impact:** -0.05

### P5 — About Section Label Redundancy
The about section reads: label "Meet Your Doctor" then heading "Meet Dr. Jason" — "Meet" appears twice in adjacent lines. Minor, but on a condensed page meant to feel polished, this reads as careless.

**Impact:** -0.05

### P6 — Two Useful Services Were Removed
Massage Therapy and Wellness Plans were cut from 6 to 4 services. These are common patient search terms. Someone Googling "chiropractor massage therapy Phoenixville" would have previously found a matching service card. The trimming was good in principle but the specific services cut were conversion-relevant.

**Impact:** Informational (no score deduction, but worth reconsidering)

---

## Animation Compliance

Only two `@keyframes` present:
- `fadeInUp` — hero fade-in on load (allowed per rules)
- `faqReveal` — FAQ accordion answer reveal (allowed per rules)

No pulses, shimmers, bounces, glows, lifts, or transforms beyond basic hover color changes. `prefers-reduced-motion` correctly disables everything. **PASS.**

---

## Mobile Quick Audit

- Tap targets: 44px minimums enforced across all interactive elements. **Pass.**
- Font sizes: 12px minimum enforced at 768px breakpoint. **Pass.**
- Centre alignment: All sections centred on mobile with consistent text-align rules. **Pass.**
- Hero CTA buttons stack vertically at 480px. **Pass.**
- Sticky mobile CTA bar present with proper safe-area padding. **Pass.**
- Why-us section: steps go to 2-column on mobile, image moves above text. **Pass.**

---

## Section Scores

| Section | Previous | Current | Delta |
|---|---|---|---|
| Navigation | 7.5 | 7.5 | 0 |
| Hero | 7.0 | 7.0 | 0 |
| Services | 7.5 | 6.5 | -1.0 |
| Why Choose Us (NEW) | — | 7.5 | NEW |
| About | 6.8 | 7.0 | +0.2 |
| Testimonials | 7.0 | 7.0 | 0 |
| Insurance | 7.0 | 7.0 | 0 |
| FAQ | 8.0 | 7.0 | -1.0 |
| Contact | 7.0 | 7.0 | 0 |
| Footer | 6.5 | 6.5 | 0 |
| Sticky CTA | 7.0 | 7.0 | 0 |
| Technical/SEO | 7.5 | 6.5 | -1.0 |
| Animation Compliance | PASS | PASS | — |
| **Overall** | **7.2** | **7.0** | **-0.2** |

**Services dropped** because the 3-col grid with 4 cards creates an obvious orphan.
**FAQ dropped** because cutting from 8 to 5 is fine in principle, but the schema mismatch and loss of strong SEO-rich content hurts.
**Technical/SEO dropped** because two separate schema/content mismatches is a meaningful regression.
**Why Choose Us is new** and scores well — the teal split layout is genuinely good.

---

## Top 3 Priorities for Next Sprint

### 1. Fix the Service Grid Layout (P1)
Change `.services__grid` from `repeat(3, 1fr)` to `repeat(2, 1fr)`. This gives a clean 2x2 layout for 4 cards. Or restore Massage Therapy + Wellness Plans to get back to 6 cards in a 3x2 grid. The orphaned card is the single most visible layout issue on the page.

### 2. Sync JSON-LD Schemas with Visible Content (P3 + P4)
Remove the 3 extra FAQ entries and 2 extra services from the structured data in `<head>`. Schema must match what the patient can actually see on the page. This is a Google rich results compliance issue.

### 3. Make the Hero Background Photo Visible or Remove It (P2)
Reduce `.hero__bg::before` overlay opacity from 80-85% to 60-70%, or remove the background image entirely. Currently loading 1400px of imagery for almost no visual payoff.

---

## Remaining Blockers to 8.0

These have not changed since the last audit:
- **Real photography** of Dr. Jason and the clinic. Stock photos cap trust.
- **Working contact form** — Formspree action is still `placeholder`.
- **More social proof** — 5-6 reviews from "500+ patients" is thin.

---

**Final Score: 7.0/10 | Delta: -0.2 from 7.2**

The overhaul had the right instincts — shorter page, better photos, stronger visual hierarchy. But the execution left loose ends (orphaned grid, schema mismatches, near-invisible hero bg) that net out to a slight regression. Fix the top 3 priorities and this moves back above 7.2 easily.
