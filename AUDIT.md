# Stellar Chiropractic — Nigel Audit (Wave 3)
**Date:** 2026-04-06
**Previous Audit:** 2026-04-06 (Wave 2) — scored 6.3/10
**Auditor:** Nigel (strict patient-perspective scoring)
**URL:** https://zed0minat0r.github.io/chiro-site/
**Scale:** 5.0 = average chiro site · 6.0 = functional but generic · 7.0 = genuinely better than most · 8.0 = patient would choose over competitors

---

## SCORE: 6.7 / 10

Delta: +0.4 from Wave 2 (6.3).

This is a meaningful improvement. Three things moved the needle:

1. **Animation cleanup.** The previous audit noted Spark's creative additions — shimmer, glow, pulse, rotate, lift, bounce, slide-in — and praised them as "tasteful." I was too generous. For a healthcare site, many of those animations crossed the line from polish into distraction. They have now been systematically stripped. The comments in the CSS tell the story: "CTA glow removed," "Badge shimmer removed," "Journey step hover glow removed," "Service card icon rotate removed," "Value strip CTA hover lift removed," and more. What remains is exactly what should remain: scroll-reveal fade-ins, FAQ accordion animation, and functional UI transitions (burger, nav scroll). This is correct. The site now feels calm and professional, which is what a patient in pain wants when they land on a chiropractor's page. This cleanup alone is worth +0.2.

2. **Sticky mobile CTA bar.** Scout recommended this, and it has been well-implemented. The bar appears after the hero CTAs scroll out of view, hides when the contact section is in view, and provides two actions: Call and Book Your Visit. The `env(safe-area-inset-bottom)` handling for notched phones is a detail most chiro sites miss. The footer has compensating bottom padding so content is not obscured. This is a genuine conversion improvement for mobile patients. +0.1.

3. **Simplified contact form.** The form has been streamlined to four fields: Name, Phone, Email, and a Reason dropdown. No free-text message textarea. For a first-visit booking form, this is the right call — patients do not want to write an essay to book a chiropractor. The per-field validation from Wave 2 remains. The "Prefer to call?" fallback with phone link is a good safety valve. Scout's recommendation was correct and the implementation is clean. +0.1.

Better whitespace throughout the sections is noticeable but incremental — the section padding was already reasonable. The mobile breakpoints at 768px, 480px, and 375px all show thoughtful spacing adjustments.

However, the same three structural deficiencies that have blocked every previous audit remain untouched. The contact layer is still non-functional. There is still no photo of the doctor. There is still no verified Google Business Profile. These are not code problems — they are content/data problems — but they are what patients see. The site cannot score above 7.0 while a patient who tries to call, email, or submit the form reaches nothing.

---

## Changes Since Last Audit (6.3 -> 6.7)

### Improved

1. **Animation cleanup (major).** All Spark decorative animations have been removed:
   - CTA glow pulse: removed
   - Badge shimmer: removed
   - Journey step hover glow: removed
   - Insurance pill hover scale: removed
   - Footer link slide-in underline: removed
   - Contact form glow: removed
   - Hero CTA glow: removed
   - Service card icon rotate on hover: removed
   - Wellness tips box hover lift: removed
   - Hero trust hover lift: removed
   - About photo breathing glow: removed
   - Ring pulse: removed
   - Nav CTA micro-bounce: removed
   - Value strip CTA hover lift: removed
   - Testimonial hover accent bar: removed
   - Decorative open-quote on testimonials: removed
   
   Only two `@keyframes` remain: `fadeInUp` (hero entrance) and `faqReveal` (FAQ accordion). Both are in the allowed animation list per AGENT-RULES. The scroll-reveal system (`IntersectionObserver` + `.reveal` class) is the right pattern for progressive disclosure. This is a textbook cleanup. **(+0.2 to overall feel)**

2. **Sticky mobile CTA bar.** New `#sticky-cta` element fixed to bottom of viewport on mobile (768px and below). Shows after hero CTAs scroll away, hides when contact section is visible. Two actions: "Call" (outline button with phone icon) and "Book Your Visit" (primary button). Implementation details:
   - `env(safe-area-inset-bottom)` padding for iPhone notch
   - `z-index: 97` (below nav at 100, above content)
   - Footer gets `padding-bottom: 80px` to prevent overlap
   - Smooth opacity/transform transition on show/hide
   - `.hidden-in-contact` class to avoid redundancy when patient is already at the form
   
   This is a Scout recommendation correctly implemented. **(+0.1 to mobile conversion)**

3. **Simplified form.** The contact form now has four fields instead of five — the free-text "Message" textarea has been removed. The dropdown pre-populates from service card clicks. For a booking form (not a general inquiry form), this reduces friction. **(+0.1 to form UX)**

### Retained From Wave 2 (Still Working)
- `prefers-reduced-motion` comprehensive coverage
- FAQPage JSON-LD structured data
- Service card -> form reason pre-population
- Per-field form validation with inline errors
- Value strip text contrast at full `#ffffff`
- Value strip CTA button
- og:image PNG for social sharing
- Value strip mid-tablet layout fix

### Not Changed (Critical Issues Remain)

1. **Phone number** — Still `(610) 555-0100` in 4x HTML locations, 1x JS error fallback, and 1x JSON-LD schema. Dead line. The sticky CTA bar's "Call" button also points to this dead number, which is actually worse than before — now there are MORE paths to failure.
2. **Form endpoint** — Still `formspree.io/f/placeholder`. Zero form submissions succeed. The sticky CTA bar's "Book Your Visit" links to `#contact`, which is the broken form.
3. **Email** — Still `hello@stellarchiropractic.com`. Likely unmonitored.
4. **Doctor photo** — Still CSS-generated "DJ" initials placeholder in About section and Wellness Tips avatar.
5. **Doctor last name** — Still "Dr. Jason" with no surname throughout all copy and schema.
6. **Google reviews link** — Still a Google Search query, not a verified Business Profile.

### Regressions
- None identified. The animation cleanup was clean — no functionality was lost.

---

## Section-by-Section Audit

### 1. Navigation — 7.5/10 (unchanged)

- Fixed nav with blur-backdrop, scroll shadow: professional.
- Logo SVG is distinctive. Desktop CTA pill is prominent.
- Mobile: burger with X-transform, overlay dismiss, Escape dismiss — well-executed.
- Phone-icon on mobile links to `tel:` — correct pattern.
- Active nav link highlight via IntersectionObserver.
- **STILL BROKEN:** `tel:6105550100` is a 555 fake number. Every mobile user who taps the phone icon reaches nothing.

### 2. Hero — 7.0/10 (was 6.9)

- Copy remains strong. "You Deserve to Feel *Good Again*" is patient-centered.
- Trust bar with three stats: clean, no unnecessary animation.
- Dual CTA (Book Your First Visit + Our Services) gives patients two paths.
- Visual cards on right (desktop) / horizontal scroll strip (mobile) communicate value without photos.
- **IMPROVED:** Badge shimmer and CTA glow pulse are gone. The hero now feels calm and confident rather than attention-seeking. +0.1
- **STILL:** No human face. Vague "Hundreds" stat. These are content issues.

### 3. Services — 7.4/10 (unchanged)

- Six service cards with SVG icons, descriptions, and CTAs.
- "Book for this ->" CTAs pre-populate the form's reason dropdown.
- **IMPROVED (Wave 2):** Icon rotate on hover was removed. Cards now have clean hover states (shadow + border color only). Appropriate for healthcare.
- **STILL:** No pricing signals. No self-pay rate mention beyond the services note.

### 4. Patient Journey — 7.8/10 (unchanged)

- Four-step flow is well-structured with numbered circles and icons.
- Horizontal layout on desktop, vertical with down-arrows on mobile.
- Step 4 copy remains the best writing on the page.
- Journey step hover glow removed — steps are now static and clear.
- **STILL:** "Dr. Jason" with no surname weakens credibility.

### 5. Value Strip — 7.5/10 (was 7.4)

- Three value propositions on teal background with full-white text.
- CTA button below in pale teal background.
- **IMPROVED:** Hover lift on value items and CTA removed. The strip is now a calm, confident statement of value — not a fidgety element begging for interaction. +0.1
- Staggered scroll-reveal entrance is the one animation here, and it is appropriate.
- **STILL:** CTA button may overflow on very narrow screens (375px). CSS fixes are present (`max-width: 100%`, `white-space: normal`, `word-break: break-word`) but should be verified live.

### 6. About / Dr. Jason — 5.5/10 (unchanged)

- Copy quality is strong. Credential list is appropriate.
- About photo breathing glow removed — the placeholder is now static.
- **STILL CRITICAL:** CSS-generated "DJ" initials placeholder. No photo of the doctor. This is the #1 trust gap on the site for patients.
- **STILL CRITICAL:** No last name. Patients cannot verify credentials on the PA state board, Healthgrades, or Google.
- **STILL:** "Sports & Rehabilitation Certified" names no certifying body.

### 7. Wellness Tips — 7.6/10 (unchanged)

- Three actionable tips, personal framing, closing quote — all remain strong.
- Numbered badges on tip icons via CSS counter add visual hierarchy.
- Wellness tips box hover lift removed — the box is now static and professional.
- **STILL:** Second "DJ" initials avatar compounds the no-photo problem.

### 8. Testimonials — 6.0/10 (was 5.9)

- Three testimonials covering key conditions. Outcomes are specific.
- **IMPROVED:** Decorative open-quote and hover accent bar removed. Cards are now clean and focused on the quote content. This is the right approach — let the words speak. +0.1
- **STILL:** Google reviews link is a search query, not a verified GBP.
- **STILL:** Only three testimonials for "hundreds of patients." No external verification. Self-applied "Verified Patient" badges.

### 9. Insurance Strip — 7.8/10 (unchanged)

- Named carriers, benefit-verification copy, pill design — all correct.
- Insurance pill hover scale removed — pills now have color-only hover. Correct.
- **STILL:** "Call us" directs to the fake 555 number.

### 10. FAQ — 8.2/10 (unchanged)

- Six well-chosen questions addressing real patient anxieties.
- FAQPage JSON-LD for Google rich results.
- Two-column grid on desktop, single column on mobile.
- FAQ accordion is one of two allowed animations — clean and functional.
- This remains the strongest section on the site.

### 11. Contact / Form — 5.0/10 (was 4.8)

- **IMPROVED:** Form simplified to four fields (Name, Phone, Email, Reason). No message textarea. Lower friction for a booking form. +0.1
- **IMPROVED:** "Prefer to call?" fallback with phone link below submit button. +0.1
- Per-field validation with inline error messages remains well-implemented.
- "First Visit — What to Expect" checklist is a genuine friction-reducer.
- **STILL CRITICAL:** Form action is `formspree.io/f/placeholder`. Every submission fails.
- **STILL CRITICAL:** Phone `(610) 555-0100` appears in contact info and JS error fallback.
- **STILL CRITICAL:** Email `hello@stellarchiropractic.com` is likely inactive.
- The form UX is now genuinely good — the infrastructure behind it is still broken.

### 12. Footer — 7.0/10 (unchanged)

- Dark footer with logo, nav links, contact info.
- Footer link slide-in animation removed — links are now static with hover color. Clean.
- **STILL:** Fake phone number. No social media links. No Google Business Profile link.

### 13. Sticky Mobile CTA Bar — 7.5/10 (new)

- Clean two-button layout: Call (outline) + Book Your Visit (primary).
- Shows at the right time (after hero CTAs leave viewport).
- Hides at the right time (when contact section is in view).
- Safe-area-inset handling for notched phones.
- 48px minimum tap targets on both buttons.
- **CRITICAL FLAW:** Both buttons route to broken endpoints. "Call" dials the fake 555 number. "Book Your Visit" scrolls to the broken form. The UX pattern is correct; the destination is dead.

---

## Technical & Code Quality

### HTML — 7.7/10 (unchanged)

- Semantic structure remains correct.
- Skip-to-content link, aria labels, aria-expanded/hidden on mobile menu.
- FAQPage + MedicalBusiness JSON-LD schemas present.
- New sticky CTA bar has appropriate `aria-label`.
- **STILL:** JSON-LD MedicalBusiness schema contains fake phone number.

### CSS — 8.1/10 (was 7.9)

- **IMPROVED:** Animation cleanup is thorough and well-documented. Every removed animation has a comment explaining what was there. This makes the CSS maintainable. +0.1
- **IMPROVED:** Only two `@keyframes` remain (both allowed by AGENT-RULES). All decorative hovers are color-only or shadow-only. The site feels like a healthcare practice, not a tech startup. +0.1
- `prefers-reduced-motion` coverage remains comprehensive.
- Sticky CTA bar CSS is well-structured with proper mobile-only display.
- File is ~2330 lines — reasonable for a single-page site with this many responsive breakpoints.

### JavaScript — 7.3/10 (was 7.2)

- **IMPROVED:** Sticky CTA bar logic with two IntersectionObservers (hero CTAs visibility + contact section visibility). Clean implementation. +0.1
- Trust pop animation and insurance pill stagger animation both removed (comments remain). JS is now lean.
- Hero scroll hint fade on scroll is passive-event optimized.
- **STILL:** No analytics. Cannot measure conversion.
- **STILL:** Form async fetch targets the placeholder endpoint.

---

## Scout's Recommendations — Evaluation

Scout recommended three changes. Here is how they landed:

| Recommendation | Implemented? | Effectiveness |
|---|---|---|
| Sticky mobile CTA bar | Yes | **High.** Correct UX pattern for mobile healthcare sites. Always-available Call + Book actions reduce scroll friction. Implementation is clean with proper show/hide logic. Would be a strong conversion driver IF the endpoints were real. |
| Simplified form | Yes | **Medium-high.** Removing the message textarea was the right call. Four fields is the sweet spot for a booking form. Combined with the reason dropdown pre-population from service cards, the form funnel is now efficient. |
| Better whitespace | Yes | **Medium.** Spacing improvements are noticeable but incremental. The section padding, card padding, and mobile breakpoint adjustments were already reasonable. The biggest whitespace win is actually the animation removal — removing visual noise creates perceived whitespace even when padding is unchanged. |

**Overall:** Scout's recommendations were sound. The sticky CTA bar is the most impactful addition. All three changes moved the site closer to what competitive local healthcare sites look like. The delta is approximately +0.3 attributable to Scout's recommendations, with the remaining +0.1 from animation cleanup.

---

## Known Placeholders — Impact Summary

| Placeholder | Count | Patient Impact | Changed? |
|---|---|---|---|
| `(610) 555-0100` | 4x HTML, 1x JS, 1x JSON-LD, + sticky CTA | All calls fail; now MORE paths to failure with sticky bar | No |
| `formspree.io/f/placeholder` | 1x form action | All form submissions error; zero leads | No |
| `hello@stellarchiropractic.com` | 1x contact info | Direct emails likely undelivered | No |
| "DJ" initials photo | 2x (About + Wellness Tips) | Major personal trust deficit | No |
| No doctor last name | Throughout all copy + schema | Cannot verify credentials | No |
| Google reviews link | 1x testimonials | Search query, not verified GBP | No |

**Placeholder impact on score:** These six issues account for approximately 1.3-1.5 points of suppression. If all were resolved with real data, the site would score 8.0-8.2 without any additional design or code work.

---

## Top 3 Priorities

### Priority 1 — Fix the entire contact layer (P0 blocker, unchanged)
The phone, email, and form endpoint are all still non-functional. The new sticky mobile CTA bar makes this worse, not better — it creates a persistent, always-visible pair of buttons that both lead to dead ends. A patient who taps "Call" from the sticky bar gets a dead 555 number. A patient who taps "Book Your Visit" scrolls to a form that errors on submit. The site now has MORE ways to fail than before. Every other improvement is meaningless while this remains broken.
**Required:** Real phone number, real email, real FormSpree endpoint (or alternative form backend). Update the number in all 4 HTML locations, the JS error fallback, the JSON-LD schema, and the sticky CTA bar's tel: link.

### Priority 2 — Real photo of Dr. Jason + full professional name (unchanged)
The About section and Wellness Tips section both display CSS-generated "DJ" initials on a gradient background. Two initials-circles on the same page signals an incomplete, possibly fake practice. Chiropractic is personal care — patients choose providers based on whether the doctor appears trustworthy. "Dr. Jason" with no surname prevents credential verification.
**Required:** Professional headshot in About section. Full name "Dr. Jason [Last Name], DC" in About heading, schema, and all copy.

### Priority 3 — Real Google Business Profile link + more testimonials (unchanged)
Three self-labelled testimonials with a search-query Google link is not credible for a practice claiming hundreds of patients. Real competitive chiro sites display 6-9 testimonials and link directly to their Google Business Profile with a live star count.
**Required:** Direct Google Business Profile URL. Add 3-6 more testimonials or embed live Google reviews widget. Display actual review count.

---

## What Is Working Well — Do Not Change

- Copy tone throughout: warm, direct, avoids chiro industry cliches
- Animation discipline: only scroll reveals + FAQ accordion. Calm, professional feel.
- "No open-ended commitments" + "3-6 visits" specificity — genuinely differentiated positioning
- Insurance strip benefit-verification offer — exceptional conversion copy
- Patient Journey Step 4 ("picking up your kids without wincing") — best copy on the page
- FAQ content quality and question selection — above average for the category
- Mobile responsive implementation — thorough down to 375px edge cases
- Custom SVG icon system — consistent visual language
- "First Visit — What to Expect" checklist in contact section — real friction-reducer
- Service card -> form reason pre-population — good conversion detail
- Per-field form validation with inline errors — professional form UX
- Sticky mobile CTA bar — correct UX pattern with smart show/hide logic
- Simplified four-field booking form — low friction
- prefers-reduced-motion support — proper accessibility
- FAQPage JSON-LD — SEO-ready
- Wellness tips numbered badges via CSS counter — good visual hierarchy

---

## Score Breakdown

| Section | Wave 2 | Wave 3 | Delta |
|---|---|---|---|
| Navigation | 7.5 | 7.5 | -- |
| Hero | 6.9 | 7.0 | +0.1 |
| Services | 7.4 | 7.4 | -- |
| Patient Journey | 7.8 | 7.8 | -- |
| Value Strip | 7.4 | 7.5 | +0.1 |
| About / Dr. Jason | 5.5 | 5.5 | -- |
| Wellness Tips | 7.6 | 7.6 | -- |
| Testimonials | 5.9 | 6.0 | +0.1 |
| Insurance Strip | 7.8 | 7.8 | -- |
| FAQ | 8.2 | 8.2 | -- |
| Contact / Form | 4.8 | 5.0 | +0.2 |
| Footer | 7.0 | 7.0 | -- |
| Sticky Mobile CTA | -- | 7.5 | new |
| HTML Quality | 7.7 | 7.7 | -- |
| CSS Quality | 7.9 | 8.1 | +0.2 |
| JS Quality | 7.2 | 7.3 | +0.1 |

**Overall: 6.7 / 10** (was 6.3)

The design, code, and UX are now solidly in the 7.5+ range across the board. The animation cleanup gives the site a mature, professional feel that is appropriate for healthcare. Scout's recommendations (sticky CTA, simplified form, whitespace) were well-targeted and well-implemented. The score is held back by the same three fundamental failures: non-functional contact layer, no real doctor photo or full name, and no verified Google Business Profile. These are content/data issues, not code issues. One session of real data replacement would move this site to 8.0+.

---
*Audit by Nigel — scored strictly from the perspective of a new patient landing on this page for the first time on their phone.*
