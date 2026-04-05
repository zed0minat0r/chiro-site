# Stellar Chiropractic — Nigel Audit
**Date:** 2026-04-04
**Auditor:** Nigel (strict patient-perspective scoring)
**URL:** https://zed0minat0r.github.io/chiro-site/
**Scale:** 5.0 = average chiro site · 7.0 = genuinely better than most · 8.0 = patient would choose this over competitors

---

## SCORE: 6.1 / 10

The design craft, copy tone, and responsive implementation are all operating at a 7–7.5 level. The site is dragged down to 6.1 by three categories of critical failure: an entirely non-functional contact layer (fake phone, fake email, FormSpree placeholder endpoint), no real photo of Dr. Jason anywhere on the page, and a broken Google reviews link backed by only three self-labelled testimonials. One session of real-data replacement separates this from a genuinely competitive 7.5+ patient acquisition site.

---

## Section-by-Section Audit

### 1. Navigation — 7.5/10

- Fixed nav with blur-backdrop and scroll-triggered border/shadow: professional behavior.
- Logo SVG (custom spinal column motif) is distinctive and loads inline — no broken image risk.
- "Book Appointment" CTA pill in nav: correctly prominent on desktop.
- Mobile: burger menu with animated X-transform, overlay dismiss, and Escape key dismiss — well-executed.
- Phone-icon button appears on mobile nav and links directly to `tel:` — good UX for mobile patients.
- Active nav link highlight via IntersectionObserver: polished detail.
- **FAIL:** The `tel:6105550100` number is a 555 fake number. A patient who taps the phone icon gets a dead line. This is a trust-breaking failure on the very first interaction for mobile users.

### 2. Hero — 6.8/10

- "You Deserve to Feel *Good Again*" — emotionally resonant and patient-centered. Correct tone.
- Italic eyebrow "Chiropractic care that actually listens." directly addresses patient fears about feeling rushed.
- Trust bar (Hundreds / 10+ yrs / Same-day) is compact and credible.
- Dual CTA (primary + outline) is the standard high-conversion pattern.
- Three floating info cards (Most Insurance / Root Cause / No Upsells) serve as a photo stand-in — smart.
- Bouncing scroll-hint animation is tasteful.
- **ISSUE:** "Hundreds of patients helped" is vague. Competitors with specific counts ("1,200+ patients" or "500+ Google reviews") look more credible. If the real number is known, use it.
- **ISSUE:** No human face in the hero. Chiropractic patients compare practices visually. The floating SVG cards are a good design solution for a placeholder site but are not a permanent substitute for a treatment photo or a photo of Dr. Jason.

### 3. Services — 7.2/10

- Six services (Spinal Adjustment, Posture Correction, Sports & Injury Rehab, Massage Therapy, Headache & Migraine, Wellness Plans) — the right scope for a generalist practice.
- Each card: custom SVG icon + heading + description + "Book for this →" CTA. Pattern is complete.
- Hover lift + icon color-flip micro-interaction: well-polished.
- All CTAs anchor to `#contact` — no broken links.
- **ISSUE:** All "Book for this →" links land on the same generic contact form. A motivated patient would expect their service selection to pre-populate in the form's reason dropdown. That wiring is absent.
- **ISSUE:** No pricing signals anywhere on the page. Chiropractic pricing is opaque and a known booking barrier. Even "Self-pay rates available — ask at booking" would reduce drop-off.

### 4. Patient Journey — 7.8/10

- Four-step flow (Book → Consult → Plan → Get Back to Your Life) is best-practice structure.
- Step 4 copy is the best writing on the page: "Back to sleeping through the night. Back to running, lifting, or just picking up your kids without wincing. That's the real goal — and most patients get there within a few visits." Specific, emotional, real.
- Horizontal connectors on desktop → vertical on mobile — responsive swap is correctly implemented.
- "About 30 minutes" in Step 2 is a good specificity signal.
- "Real timeline, not an open-ended commitment" directly addresses the #1 patient fear about chiro practices. Strong.
- **ISSUE:** "Dr. Jason listens first — really listens" — with no last name and no photo anywhere, "Dr. Jason" reads as an informal holding name, not a verified professional. Steps 2–3 would be strengthened by a real name.

### 5. Value Strip — 7.0/10

- Full-width teal band with three value props provides a strong visual break in the page.
- "No Open-Ended Commitments" with a "3–6 visits" specificity claim is genuinely differentiated.
- "We Listen Before We Treat" directly addresses rushed-exam anxiety.
- "Same-Day Appointments" with "call in the morning" instruction is actionable.
- Staggered entrance animation on scroll: polished.
- **ACCESSIBILITY FAIL:** `value-strip__desc` uses `rgba(255,255,255,0.92)` on teal (#2d7d62). Approximate contrast: ~4.3:1 at full opacity, but the 0.9rem font size means this barely passes AA and fails AAA. Low-vision users will struggle.
- **ISSUE:** No CTA after the three differentiators. A patient reads three strong reasons to book and has no immediate action available — they must keep scrolling to the contact form.

### 6. About / Dr. Jason — 5.5/10

- Copy quality is strong: "no pressure, no upsells — just honest, effective care."
- Credential list (DC, Sports & Rehab Certified, 10+ Years, PA Chiropractic Association) is appropriate.
- **CRITICAL — KNOWN PLACEHOLDER:** Photo area is a green-gradient with initials "DJ" and text "Dr. Jason / Doctor of Chiropractic." This is the single largest trust gap on the site. Patients booking a new chiropractor weight a doctor's photo very heavily — it answers "is this a real person I'd feel comfortable with." An initials placeholder signals an incomplete, possibly fake practice page.
- **CRITICAL:** No last name. "Dr. Jason" appears across the entire site without a surname. A patient cannot Google the doctor, verify licensure on the PA state board, find Healthgrades reviews, or independently confirm credentials. Trust requires verifiability.
- "Sports & Rehabilitation Certified" lists no certifying body. Which certification? CCSP? ART? Without the body name, skeptical patients will assume it is self-awarded.
- "DC · Licensed Chiropractor" badge on the photo placeholder is redundant with the credentials list immediately beside it — wastes design real estate.

### 7. Wellness Tips — 7.5/10

- "A note from Dr. Jason" framing adds personality and demonstrates expertise without a photo.
- Three tips are specific and actionable: feet flat / pillow between knees / 5-minute walk every hour. Not generic "exercise more" advice. This differentiates the page from most chiro sites.
- Closing quote + cite formatting is a nice personal touch.
- Mobile layout (column, center-aligned header) works correctly at 768px and 480px.
- **ISSUE:** Second "DJ" initials avatar on this page compounds the no-photo problem. Two initials-circles on a single page makes the absence of a real photo feel deliberate, which reads as suspicious.
- **ISSUE:** This section has no nav anchor. Patients on mobile cannot jump to it via the menu. Good content that not all visitors will discover.

### 8. Testimonials — 5.8/10

- Three testimonials cover the key condition categories: neck pain, migraines, sports injury. Outcomes are specific and plausible ("three visits," "two months," "four weeks").
- "Verified Patient" badge provides marginal social proof.
- **CRITICAL:** "See our reviews on Google →" link uses `0x0:0x0,1` as the Google Maps place ID — a null value that does not resolve to any real business profile. A patient who clicks to independently verify reviews gets a broken Google Maps result. This is an active credibility killer.
- **ISSUE:** Only three testimonials for a practice claiming "hundreds of patients helped." Proportion is deeply suspicious. Real practices that have helped hundreds of patients display 6–9 testimonials minimum, and most embed live Google review counts.
- **ISSUE:** No photos, no last names, no review dates, and a self-applied "Verified Patient" badge with no external link. Every chiro site uses cards like these. They are not convincing to skeptical new patients without an authentic third-party source.

### 9. Insurance Strip — 7.8/10

- Naming Aetna, BCBS, Cigna, UnitedHealth, Humana, Medicare is clear and covers the main carriers.
- "Not sure if you're covered? Call us and we'll verify your benefits before your first visit — no surprises." — this is exceptional copy. It directly addresses the top financial anxiety before the patient asks. Strong conversion line.
- Pill design is clean, accessible, and scannable.
- **FAIL:** "Call us" directs to (610) 555-0100 — the fake number. Patient who calls gets nothing.

### 10. FAQ — 8.0/10

- Six questions address real patient anxiety (adjustment pain, visit count, insurance, first visit, referral, timing) — correctly chosen.
- "Dr. Jason will give you an honest timeline — no open-ended treatment plans, no pressure to commit upfront" is strong and consistent with the value strip messaging.
- "No referral needed in Pennsylvania" — locally specific and useful for patients who don't know state rules.
- `<details>/<summary>` accordion with `+` → rotated `×` animation: accessible, correct.
- FAQ answer fade-in via JS animation reset + `getBoundingClientRect()` reflow trick: works.
- Two-column grid on desktop, single-column on mobile — correct layout choice.
- **MISS:** No FAQPage JSON-LD structured data. Google can surface FAQ items directly in search results. Missing schema means missed rich-result real estate.

### 11. Contact / Form — 4.5/10

- Form design is professional: clear labels, focus-ring on teal, proper label/input association.
- "First Visit — What to Expect" prep checklist is a genuine friction-reducer. Patients arrive less anxious.
- The "reason" select dropdown qualifies the patient visit type — smart.
- JS form handling covers loading, success, and error states — well-built code.
- **CRITICAL #1:** Form action is `https://formspree.io/f/placeholder` — literally the string "placeholder." Every form submission returns an error. The catch block then tells patients to call the fake phone number. Both recovery paths fail simultaneously. Zero leads are captured.
- **CRITICAL #2:** Phone is `(610) 555-0100` — appears four times in the HTML and once in the JS error fallback. No patient can actually reach the practice.
- **CRITICAL #3:** Email `hello@stellarchiropractic.com` — likely inactive placeholder inbox.
- The combination of all three means the entire conversion layer of this site is non-functional. This is the most important fix on the site.
- `novalidate` on the form with no per-field error messaging — if a patient mis-types their email, the only feedback is a button-state change. No field-level error is shown.

### 12. Footer — 7.0/10

- Dark footer with logo, nav links, contact info: standard and correct.
- Address links to Google Maps. Copyright 2026 — current year.
- "The Byrne Building, Phoenixville, PA" adds local specificity and identity.
- **ISSUE:** Footer phone is still (610) 555-0100.
- **ISSUE:** No social media links. Local health practices rely on Facebook/Instagram for neighborhood word-of-mouth. The absence is notable for a Phoenixville-area business.
- **ISSUE:** No Google Business Profile link in the footer — a critical local SEO anchor.

---

## Technical & Code Quality

### HTML — 7.5/10
- Semantic: `<header>`, `<nav>`, `<section>`, `<footer>`, `<details>/<summary>`, `<blockquote>`, `<cite>` — correct throughout.
- ARIA: `aria-expanded` and `aria-hidden` dynamically toggled — correct. All decorative SVGs marked `aria-hidden="true"`.
- Skip-to-content link: present, functional (uses `top: -100%` → `:focus` reveal).
- Open Graph meta tags present. JSON-LD MedicalBusiness schema present — but telephone in schema is `(610) 555-0100` (fake number will mislead any scraper that indexes it).
- **MISS:** No FAQPage schema, no BreadcrumbList schema.
- **MISS:** `og:image` points to an SVG. Facebook, LinkedIn, WhatsApp, and iMessage do not render SVG og:images. Shared links will show no preview image — damaging for local referral sharing.
- Form `novalidate` with no per-field error messaging — incomplete validation UX.

### CSS — 7.5/10
- CSS custom properties (design tokens) used throughout: excellent maintainability.
- Responsive breakpoints at 1024px, 900px, 768px, 480px, 375px — thorough coverage, unusually detailed for a chiro site.
- Mobile hero visual cards implemented as horizontal scroll strip — good touch-friendly solution.
- Value strip responsive collapse: at ≤1024px, three items → third item spans full-width row, creating visual imbalance.
- `font-size: 16px` base on `html` element: accessibility baseline met.
- Line heights 1.65–1.75 on body copy: readable.
- Teal (#2d7d62) on white: ~4.9:1 contrast — meets WCAG AA for normal text.
- **ACCESSIBILITY FAIL:** No `prefers-reduced-motion` media query anywhere. The site runs bouncing scroll-hint animation, staggered reveal keyframes, trust-pop animations, and FAQ fade-in unconditionally — regardless of user's accessibility settings. Fails WCAG 2.1 SC 2.3.3. Causes issues for users with vestibular disorders.

### JavaScript — 7.0/10
- No frameworks or external dependencies. Pure vanilla JS. Lightweight.
- IntersectionObserver for scroll reveals with `unobserve` after trigger: performant.
- Mobile menu: Escape dismiss, overlay-click dismiss, link-click dismiss — complete coverage.
- Active nav link tracking via sectionObserver: UX polish.
- Form async fetch with loading/success/error state management: well-structured code — entirely wasted on a placeholder FormSpree endpoint.
- `passive: true` on scroll event: correct performance flag.
- **MISS:** No analytics. No GA4, Plausible, Fathom, or Meta Pixel. Cannot measure traffic, bounce rate, form conversion, or CTA clicks — even when the form is live.

---

## Known Placeholders — Impact Summary

| Placeholder | Count in Code | Patient Impact |
|---|---|---|
| `(610) 555-0100` | 4× in HTML, 1× in JS | All calls fail; every call CTA is dead |
| `formspree.io/f/placeholder` | 1× form action | All form submissions error; zero leads captured |
| `hello@stellarchiropractic.com` | 1× contact info | Direct emails likely undelivered |
| "DJ" initials photo | 2× (About + Wellness Tips) | Major personal trust deficit across two key sections |
| No doctor last name | Throughout all copy | Patients cannot verify credentials or search independently |
| `0x0:0x0,1` Google Places ID | 1× testimonials link | Broken Google reviews link — active credibility damage |

---

## Top 3 Priorities

### Priority 1 — Fix the entire contact layer (P0 blocker)
The phone, email, and form endpoint are all non-functional simultaneously. A patient who calls gets a dead 555 number. A patient who submits the form gets a FormSpree error, which then directs them to the same dead phone number. A patient who emails likely reaches an unmonitored inbox. There is no working path from this website to the practice. Every other improvement is worthless while this is unresolved.
**Required:** Real phone number, real email, real FormSpree endpoint (or alternative form backend), and update the number in the JS error fallback too.

### Priority 2 — Real photo of Dr. Jason + full professional name
The About section and Wellness Tips section both display "DJ" initials on a gradient background. Chiropractic is personal care — patients choose providers based heavily on whether the doctor appears trustworthy. An initials placeholder is the fastest way to lose a hesitant patient's confidence. Additionally, "Dr. Jason" with no surname prevents independent credential verification. This is not a cosmetic issue — it is a fundamental trust gap that costs real bookings.
**Required:** Professional headshot in About (and optionally Wellness Tips avatar). Full name "Dr. Jason [Last Name], DC" in About section heading and meta/schema.

### Priority 3 — Fix the Google reviews link + add more testimonials
The current "See our reviews on Google →" URL uses place ID `0x0:0x0,1` — a null value that opens a broken Maps result. Any patient who clicks to verify the 5.0 star rating will immediately distrust it. Three self-labelled "Verified Patient" cards with no external source is well below the threshold for credibility on a site claiming hundreds of patients helped.
**Required:** Correct Google Business Profile URL. Add 3–6 more testimonials or embed live Google reviews. If the practice has a real Google Business Profile, display the actual review count ("Rated 5.0 · 84 reviews").

---

## What Is Working Well — Do Not Change

- Copy tone throughout: warm, direct, avoids chiro industry clichés
- "No open-ended commitments" + "3–6 visits" specificity — genuinely differentiated positioning
- Insurance strip benefit-verification offer — exceptional conversion copy
- Patient Journey Step 4 ("picking up your kids without wincing") — best copy on the page
- FAQ content quality and question selection — above average for the category
- Mobile responsive implementation — thorough down to 375px edge cases
- Animations: staggered reveals, trust-pop, FAQ fade-in — tasteful and purposeful
- Custom SVG icon system — consistent visual language
- "First Visit — What to Expect" checklist in contact section — real friction-reducer

---

## Score Breakdown

| Section | Score |
|---|---|
| Navigation | 7.5 |
| Hero | 6.8 |
| Services | 7.2 |
| Patient Journey | 7.8 |
| Value Strip | 7.0 |
| About / Dr. Jason | 5.5 |
| Wellness Tips | 7.5 |
| Testimonials | 5.8 |
| Insurance Strip | 7.8 |
| FAQ | 8.0 |
| Contact / Form | 4.5 |
| Footer | 7.0 |
| HTML Quality | 7.5 |
| CSS Quality | 7.5 |
| JS Quality | 7.0 |

**Overall: 6.1 / 10**

The design, copy, and code are at 7+ quality. Contact layer failure + no real photo + broken reviews link pull the score down. Fix those three and this site re-scores at 7.4–7.6 with no additional design work required.

---
*Audit by Nigel — scored strictly from the perspective of a new patient landing on this page for the first time.*
