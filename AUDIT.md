# Stellar Chiropractic — Nigel Audit (Wave 2)
**Date:** 2026-04-06
**Previous Audit:** 2026-04-04 — scored 6.1/10
**Auditor:** Nigel (strict patient-perspective scoring)
**URL:** https://zed0minat0r.github.io/chiro-site/
**Scale:** 5.0 = average chiro site · 6.0 = functional but generic · 7.0 = genuinely better than most · 8.0 = patient would choose over competitors

---

## SCORE: 6.3 / 10

Wave 1 addressed four technical/UX deficiencies identified in the previous audit: `prefers-reduced-motion` accessibility, FAQPage JSON-LD schema, service-card-to-form wiring, per-field form validation, value strip contrast, value strip CTA, og:image PNG, and value strip layout balance. These were the right fixes and they were implemented correctly. However, none of them address the three critical trust and conversion failures that account for the bulk of the score penalty: the entire contact layer remains non-functional (fake phone, fake email, placeholder form endpoint), there is still no real photo of the doctor, and the Google reviews link still points to a generic search query rather than a verified Business Profile. The score moves from 6.1 to 6.3 — the improvements are real but they polished the edges of a site whose foundation is still broken from a patient's perspective.

A real patient landing on this page today would see a genuinely attractive, well-written chiropractic site. They would try to call or submit the form. Both would fail. They would leave. That experience has not changed.

---

## Changes Since Last Audit (6.1 → 6.3)

### Improved
1. **prefers-reduced-motion** — Comprehensive reduced-motion media query added. All animations, scroll hints, badge shimmer, CTA glow, trust-pop, and reveal transitions are disabled. Properly covers the universal `*` selector plus individual component overrides. Previous audit flagged WCAG 2.1 SC 2.3.3 failure — now resolved. **(+0.3 to CSS quality)**
2. **FAQPage JSON-LD** — Full FAQPage structured data added with all six questions. Correctly formatted. Google can now surface rich FAQ snippets in search results. Previous audit flagged this as a miss. **(+0.2 to FAQ score)**
3. **Service card → form wiring** — `data-reason` attributes on service card CTAs now pre-populate the contact form reason dropdown via JS. Previous audit noted "All CTAs land on the same generic form." This is fixed — a patient clicking "Book for this →" on Headache & Migraine Relief will see "Headaches or migraines" pre-selected. Good conversion detail. **(+0.2 to Services score)**
4. **Per-field form validation** — Inline error messages with `.form-group--error` state, `aria-invalid` attribute, blur/input event listeners, and visual red border + error text. Replaces the bare `novalidate` approach. Well-implemented. **(+0.3 to Contact/Form score)**
5. **Value strip text contrast** — Description text changed from `rgba(255,255,255,0.92)` to `#ffffff` (full white). AA contrast on teal (#2d7d62) is now ~4.9:1 at the rendered size. Previous audit flagged this as an accessibility fail — now resolved. **(+0.2 to Value Strip score)**
6. **Value strip CTA** — New "Ready to feel better? Book your first visit →" button added after the value strip. Directly addresses previous audit observation that patients read three strong reasons to book with no immediate action. Good addition. **(+0.2 to Value Strip score)**
7. **og:image PNG** — Real 1200x630 PNG replaces the SVG that Facebook/LinkedIn/iMessage could not render. Shared links will now display a preview image. **(+0.1 to HTML quality)**
8. **Value strip layout at 1024px** — Mid-tablet breakpoint added (900px–769px) to stack value strip items vertically instead of the cramped 3-column with imbalanced third item. 768px and below also stacks correctly. Previous visual imbalance is resolved. **(+0.1 to CSS quality)**

### Spark Creative Additions (new)
- Decorative open-quote mark on testimonial cards with teal accent
- Testimonial card left-border accent on hover
- Hero badge shimmer animation (with reduced-motion respect)
- Journey step number glow on hover
- Insurance pill scale on hover
- Footer link underline slide-in animation
- Contact form top accent bar (gradient)
- Hero CTA glow pulse (with reduced-motion respect)
- Service card icon rotate on hover
- Wellness tips numbered badges via CSS counter
- Section label decorative dashes (before/after)
- Form select custom dropdown arrow
- Value strip CTA hover lift

These are all tasteful micro-interactions. None are distracting. They collectively move the site from "clean template" toward "designed with care." The reduced-motion variants are properly handled. Good work.

### Not Changed (Critical Issues Remain)
1. **Phone number** — Still `(610) 555-0100` everywhere (4x HTML, 1x JS error fallback, 1x JSON-LD schema). Dead line.
2. **Form endpoint** — Still `formspree.io/f/placeholder`. Zero form submissions succeed.
3. **Email** — Still `hello@stellarchiropractic.com`. Likely unmonitored.
4. **Doctor photo** — Still CSS-generated "DJ" initials placeholder in About section and Wellness Tips avatar.
5. **Doctor last name** — Still "Dr. Jason" with no surname throughout all copy and schema.
6. **Google reviews link** — Changed from the `0x0:0x0,1` place ID to a Google Search query (`?q=Stellar+Chiropractic+Phoenixville+PA+reviews`). This is marginally better — at least it does not 404 — but it is not a direct link to a verified Google Business Profile. A patient clicking "See our reviews on Google →" gets a search results page, not a reviews panel. If the business has a real GBP, this should link directly to it.

### Regressions
- **QA Report documents body overflow at 375px** — the value-strip-cta button overflows to 420px wide. CSS fixes were partially applied (`max-width: 100%`, `white-space: normal`, `word-break: break-word`) but the QA report still recorded overflow. This may be resolved now but needs verification.
- **Hero visual cards contribute to horizontal scroll at 375px** — QA flagged this. The horizontal scroll strip approach with `margin: 0 -20px` plus three 160px cards exceeds 375px. Partially mitigated with `overflow-x: auto` but body-level overflow was still detected.

---

## Section-by-Section Audit

### 1. Navigation — 7.5/10 (unchanged)

- Fixed nav with blur-backdrop, scroll shadow: professional.
- Logo SVG is distinctive. Desktop CTA pill is prominent.
- Mobile: burger with X-transform, overlay dismiss, Escape dismiss — well-executed.
- Phone-icon on mobile links to `tel:` — correct pattern.
- Active nav link highlight via IntersectionObserver.
- **STILL BROKEN:** `tel:6105550100` is a 555 fake number. Every mobile user who taps the phone icon reaches nothing.

### 2. Hero — 6.9/10 (was 6.8)

- Copy remains strong. "You Deserve to Feel *Good Again*" is patient-centered.
- Trust bar, dual CTA, floating info cards — all solid.
- New: hero badge shimmer animation adds visual interest (disabled for reduced-motion). +0.1
- New: CTA glow pulse draws attention to the primary action.
- **STILL:** No human face. Vague "Hundreds" stat. These are content issues, not code issues.

### 3. Services — 7.4/10 (was 7.2)

- Six service cards with SVG icons, descriptions, and CTAs.
- **IMPROVED:** "Book for this →" CTAs now pre-populate the form's reason dropdown. A patient clicking the Headache card will see "Headaches or migraines" selected when they reach the form. This is a genuine conversion improvement. +0.2
- New: icon rotate on hover — subtle polish.
- **STILL:** No pricing signals. No self-pay rate mention.

### 4. Patient Journey — 7.8/10 (unchanged)

- Four-step flow is well-structured.
- Step 4 copy remains the best writing on the page.
- New: step number glow on hover — minor polish, does not change score.
- **STILL:** "Dr. Jason" with no surname weakens credibility.

### 5. Value Strip — 7.4/10 (was 7.0)

- **IMPROVED:** Text contrast fixed — full `#ffffff` on teal. AA compliance restored. +0.2
- **IMPROVED:** CTA button added after the strip. Patients now have an immediate action after reading the value props. +0.2
- **IMPROVED:** Layout balance fixed at mid-tablet widths.
- Staggered entrance animation and hover states remain polished.
- **CONCERN:** QA flagged the new CTA button overflowing at 375px. CSS fixes are present but QA measured 420px body width. Needs live verification.

### 6. About / Dr. Jason — 5.5/10 (unchanged)

- Copy quality is strong. Credential list is appropriate.
- **STILL CRITICAL:** CSS-generated "DJ" initials placeholder. No photo of the doctor. This is the #1 trust gap on the site for patients. Unchanged since last audit.
- **STILL CRITICAL:** No last name. Patients cannot verify credentials on the PA state board, Healthgrades, or Google.
- **STILL:** "Sports & Rehabilitation Certified" names no certifying body.

### 7. Wellness Tips — 7.6/10 (was 7.5)

- Three actionable tips, personal framing, closing quote — all remain strong.
- New: numbered badges on tip icons via CSS counter. Adds visual hierarchy and scannability. +0.1
- **STILL:** Second "DJ" initials avatar compounds the no-photo problem.

### 8. Testimonials — 5.9/10 (was 5.8)

- Three testimonials covering key conditions. Outcomes are specific.
- New: decorative open-quote, left-border accent on hover — minor visual upgrade. +0.1
- **PARTIALLY IMPROVED:** Google reviews link changed from broken `0x0:0x0,1` to a Google Search query. No longer 404s, but a search results page is not the same as a verified Google Business Profile with a star rating. Patients clicking "See our reviews on Google →" get search results, which may or may not show the practice.
- **STILL:** Only three testimonials for "hundreds of patients." No external verification. Self-applied "Verified Patient" badges.

### 9. Insurance Strip — 7.8/10 (unchanged)

- Named carriers, benefit-verification copy, pill design — all correct.
- New: pill scale on hover — minor touch.
- **STILL:** "Call us" directs to the fake 555 number.

### 10. FAQ — 8.2/10 (was 8.0)

- Six well-chosen questions addressing real patient anxieties.
- **IMPROVED:** FAQPage JSON-LD schema added. Google can now surface rich FAQ snippets. This is a material SEO improvement for a local practice. +0.2
- Accordion interaction, two-column grid — all working.

### 11. Contact / Form — 4.8/10 (was 4.5)

- **IMPROVED:** Per-field validation with inline error messages, red border, `aria-invalid` attribute. Blur validation + live clearing on input. Well-implemented code. +0.3
- **STILL CRITICAL:** Form action is `formspree.io/f/placeholder`. Every submission fails.
- **STILL CRITICAL:** Phone `(610) 555-0100` appears in contact info and JS error fallback.
- **STILL CRITICAL:** Email `hello@stellarchiropractic.com` is likely inactive.
- The form validation improvement is genuinely good code — but it validates submissions that go nowhere.

### 12. Footer — 7.0/10 (unchanged)

- Dark footer with logo, nav links, contact info.
- New: link underline slide-in animation — polish.
- **STILL:** Fake phone number. No social media links. No Google Business Profile link.

---

## Technical & Code Quality

### HTML — 7.7/10 (was 7.5)

- Semantic structure unchanged and correct.
- **IMPROVED:** FAQPage JSON-LD added — Google rich results eligible. +0.1
- **IMPROVED:** og:image now a proper 1200x630 PNG. Social sharing previews will work. +0.1
- Per-field form validation adds `aria-invalid` and `aria-describedby` — correct accessibility pattern.
- **STILL:** JSON-LD MedicalBusiness schema contains fake phone number.
- **STILL:** No BreadcrumbList schema.

### CSS — 7.9/10 (was 7.5)

- **IMPROVED:** `prefers-reduced-motion` comprehensive coverage. Universal `*` selector plus individual overrides. WCAG 2.1 SC 2.3.3 compliance restored. +0.2
- **IMPROVED:** Value strip text contrast to `#ffffff`. +0.1
- **IMPROVED:** Value strip layout balance at mid-tablet. +0.1
- Spark creative additions (shimmer, glow, counters, accent bars) are all well-implemented and tasteful.
- Form validation error states (`.form-group--error`) with red border and shadow — correct visual pattern.
- Custom select arrow via inline SVG data URL — nice detail.
- **CONCERN:** QA-reported 375px overflow from value-strip-cta button. CSS fixes present but measured overflow persists — needs live testing.
- File is now ~2340 lines. Getting large for a single-page site but still manageable.

### JavaScript — 7.2/10 (was 7.0)

- **IMPROVED:** Service card CTA → form reason pre-population. Clean event delegation on `[data-reason]` attributes. +0.1
- **IMPROVED:** Per-field form validation with `validateField()`, blur/input listeners, `aria-invalid` management. +0.1
- No new dependencies. Still pure vanilla JS.
- **STILL:** No analytics (GA4, Plausible, etc.). Cannot measure anything.
- **STILL:** Form async fetch targets the placeholder endpoint.

---

## Known Placeholders — Impact Summary

| Placeholder | Count | Patient Impact | Changed? |
|---|---|---|---|
| `(610) 555-0100` | 4x HTML, 1x JS, 1x JSON-LD | All calls fail; every call CTA is dead | No |
| `formspree.io/f/placeholder` | 1x form action | All form submissions error; zero leads | No |
| `hello@stellarchiropractic.com` | 1x contact info | Direct emails likely undelivered | No |
| "DJ" initials photo | 2x (About + Wellness Tips) | Major personal trust deficit | No |
| No doctor last name | Throughout all copy + schema | Cannot verify credentials | No |
| Google reviews link | 1x testimonials | Now a search query, not a verified GBP | Partially improved |

**Placeholder impact on score:** These six issues account for approximately 1.5–1.8 points of suppression. If all were resolved with real data, the site would score in the 7.8–8.0 range without any additional design or code work.

---

## Top 3 Priorities

### Priority 1 — Fix the entire contact layer (P0 blocker, unchanged)
The phone, email, and form endpoint are all still non-functional. A patient who calls gets a dead 555 number. A patient who submits the form gets a FormSpree error, which directs them to the same dead number. A patient who emails reaches an unmonitored inbox. There is zero path from this website to the practice. The new per-field validation makes the form look more professional — but submissions still fail. Every other improvement is meaningless while this remains broken.
**Required:** Real phone number, real email, real FormSpree endpoint (or alternative form backend), and update the number in the JS error fallback and JSON-LD schema.

### Priority 2 — Real photo of Dr. Jason + full professional name (unchanged)
The About section and Wellness Tips section both display CSS-generated "DJ" initials on a gradient background. Two initials-circles on the same page signals an incomplete, possibly fake practice. Chiropractic is personal care — patients choose providers based on whether the doctor appears trustworthy. Additionally, "Dr. Jason" with no surname prevents independent credential verification on the PA state board or Healthgrades.
**Required:** Professional headshot in About section. Full name "Dr. Jason [Last Name], DC" in About heading, schema, and all copy.

### Priority 3 — Real Google Business Profile link + more testimonials (unchanged)
The reviews link was improved from a broken place ID to a Google Search query, but it still does not link to a verified Business Profile. Three self-labelled testimonials for "hundreds of patients" is not credible. Real practices display 6–9 testimonials minimum and embed live Google review counts.
**Required:** Direct Google Business Profile URL (not a search query). Add 3–6 more testimonials or embed live Google reviews widget. Display actual review count.

---

## What Is Working Well — Do Not Change

- Copy tone throughout: warm, direct, avoids chiro industry cliches
- "No open-ended commitments" + "3-6 visits" specificity — genuinely differentiated positioning
- Insurance strip benefit-verification offer — exceptional conversion copy
- Patient Journey Step 4 ("picking up your kids without wincing") — best copy on the page
- FAQ content quality and question selection — above average for the category
- Mobile responsive implementation — thorough down to 375px edge cases
- Custom SVG icon system — consistent visual language
- "First Visit — What to Expect" checklist in contact section — real friction-reducer
- Service card → form reason pre-population (new) — good conversion detail
- Per-field form validation with inline errors (new) — professional form UX
- prefers-reduced-motion support (new) — proper accessibility
- FAQPage JSON-LD (new) — SEO-ready
- Spark micro-interactions (shimmer, glow, counters, accents) — tasteful without being distracting

---

## Score Breakdown

| Section | Previous | Current | Delta |
|---|---|---|---|
| Navigation | 7.5 | 7.5 | — |
| Hero | 6.8 | 6.9 | +0.1 |
| Services | 7.2 | 7.4 | +0.2 |
| Patient Journey | 7.8 | 7.8 | — |
| Value Strip | 7.0 | 7.4 | +0.4 |
| About / Dr. Jason | 5.5 | 5.5 | — |
| Wellness Tips | 7.5 | 7.6 | +0.1 |
| Testimonials | 5.8 | 5.9 | +0.1 |
| Insurance Strip | 7.8 | 7.8 | — |
| FAQ | 8.0 | 8.2 | +0.2 |
| Contact / Form | 4.5 | 4.8 | +0.3 |
| Footer | 7.0 | 7.0 | — |
| HTML Quality | 7.5 | 7.7 | +0.2 |
| CSS Quality | 7.5 | 7.9 | +0.4 |
| JS Quality | 7.0 | 7.2 | +0.2 |

**Overall: 6.3 / 10** (was 6.1)

The design, copy, code quality, and accessibility are now at a 7.5+ level across the board. The score is held back by the same three fundamental failures: non-functional contact layer, no real doctor photo or full name, and no verified Google Business Profile. These are content/data issues, not code issues. One session of real data replacement would move this site to 7.8–8.0.

---
*Audit by Nigel — scored strictly from the perspective of a new patient landing on this page for the first time on their phone.*
