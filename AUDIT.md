# Nigel Audit — Stellar Chiropractic
**Date:** 2026-04-09
**Previous Score:** 7.4/10
**Current Score:** 7.6/10
**Delta:** +0.2

---

## Summary

This audit reflects the most substantial round of UX improvements the site has received. The green Why/How section, accordion service cards, testimonial carousel, credentials toggle, offset photo frame, and booking card redesign collectively push the site noticeably past the generic local-business template. The interactive patterns are well-executed and feel proportionate — not over-engineered. Animation remains restrained, which earns credit under the AGENT-RULES rules.

The reason the score does not cross 7.7 is structural: the booking widget still leads to a phone call rather than a real booking, three testimonials is a thin pool even for a local practice, the Why section accordion items are all collapsed by default on a green background that real users may simply scroll past, and the hero photo is entirely hidden on mobile (the single most important visual impression for a new patient). These are solvable problems that would push the site to 8.0 territory.

Placeholder contact data is noted separately — per audit rules it is not a score ceiling.

---

## Section Scores

### 1. Navigation — 8.2 / 10
Clean, restrained. Fixed nav with frosted glass. Phone icon in mobile nav is excellent for a healthcare audience. Burger animates correctly. Active link highlighting via IntersectionObserver works well. Skip-to-content link present and functional. No complaints.

### 2. Hero — 7.2 / 10
The split-gradient overlay is a genuine design decision — it differentiates the hero from the stock full-bleed approach. The Lora serif heading paired with teal italic em tag is the strongest typographic moment on the page. Trust bar (500+, 10yr, Same-Day) is compact and credible. The scroll hint is tasteful.

**Issues:**
- Hero photo is hidden at both 768px and 1024px breakpoints. This means every mobile user — likely 60%+ of traffic — lands on a background-only hero with no human face. Healthcare conversion is heavily driven by seeing a real practitioner. This is the single highest-priority fix on the site.
- The hero background image (Unsplash generic medical) is almost entirely masked by the gradient overlay on desktop. The photo investment is wasted.
- "You Deserve to Feel Good Again" is solid. But the eyebrow italic ("Chiropractic care that actually listens.") duplicates the h1 theme and loses impact by appearing before the heading rather than after.

### 3. Services (Accordion) — 7.8 / 10
The accordion approach is genuinely better than a static 4-card grid — it creates engagement and implies there is more to discover. First card open by default (Spinal Adjustment) is the right UX decision. Per-card CTAs with specific reasons ("Schedule Adjustment", "Fix My Posture") are a meaningful conversion improvement. Icon hover state (teal fill) is polished. The accordion toggle uses + / − correctly and respects ARIA expanded state.

**Issues:**
- On mobile, only one card is visible at a time in the single-column layout. A user who doesn't notice the + toggle may leave thinking the practice only does spinal adjustments. Consider a brief hint text below the heading: "Tap any card to learn more."
- The service-card__body max-height is hardcoded at 200px, which would clip longer descriptions if copy is ever expanded.

### 4. Why Choose Us + How It Works (Green Section) — 7.0 / 10
Visually bold and distinguishes the page from competitors. The frosted-glass card approach on the green teal background is tasteful. How It Works process strip inside the same section is an efficient layout decision.

**Issues:**
- All three Why items are collapsed by default. A user scanning quickly sees three clickable rows with labels but no content. The most important trust messages ("We Listen Before We Treat", "No Open-Ended Commitments") are hidden at first glance. At minimum, the first item should open by default, mirroring what was done with the service cards.
- The toggle icon rotates 45 degrees (+ → ×) when expanded, which is slightly confusing — × typically signals "close" or "remove", not "collapse". The service cards use − for expanded, which is clearer.
- "How It Works" heading is uppercase tracked in small-caps style on a green section — sits slightly disconnected from the Why list above it. A subtle divider is present but the visual hierarchy of the two sub-sections (Why list vs. Process steps) could be sharper.
- Process step descriptions use `white-space: nowrap` on desktop, which is fine at 1160px but wraps awkwardly at 900–1024px range.

### 5. About — 7.5 / 10
The offset photo frame (::before pseudo-element shifted 10px/10px) is a genuinely distinctive design touch — it reads professional without being fussy. The teal badge ("DC · Licensed Chiropractor") anchored below the photo is well-executed. Credentials toggle is a clean pattern: it de-clutters the section for scanners while rewarding curious users.

**Issues:**
- "Meet Dr. Jason" — still no last name. For a real patient considering care, a first-name-only doctor raises questions. Noted as placeholder data, limited weight per audit rules.
- The about intro text ("Over a decade of experience helping 500+...") is strong. But there is no personal voice — no philosophy sentence, no origin story, nothing that makes Dr. Jason feel like a specific human rather than a role. This is copy-level, not design-level, but it caps the section's trust ceiling.
- On mobile the photo is constrained to 300px max-width and centered, which works. However the offset frame accent disappears visually at small sizes because the pseudo-element extends 10px outside the natural boundary — at 300px the overhang is proportionally large and may clip at viewport edges.

### 6. Testimonials (Carousel) — 7.3 / 10
The horizontal carousel with arrows + dots is a meaningful improvement over a static grid. Snap scrolling works correctly. Active dot uses a pill shape (width expands to 22px) — a nice micro-detail. Three reviews are credible in content and voice: Sarah M., James R., Kevin T. read like actual patients.

**Issues:**
- Three reviews is genuinely sparse for a practice claiming 500+ patients. Even a fourth and fifth review would strengthen the pool substantially.
- "Rated 4.9/5 based on patient reviews" is unlinked aggregate data. There is a Google Reviews link present, which is good. But the aggregate rating carries little weight when it's not sourced to an external platform most users trust.
- The carousel arrows are hidden on mobile (display:none below 769px). Swipe is the intended interaction, which is fine, but there is no affordance text or swipe indicator for users who don't know to swipe. The dots alone are easy to miss.
- The "Verified Patient" badge (green pill) is a design detail without substance — there is no verification mechanism. Sophisticated patients may notice.

### 7. FAQ — 8.0 / 10
One of the strongest sections on the page. Five questions cover genuine patient anxieties. The 2-column grid (with last-item full-width centering) is clean. Open state gets a left teal border accent — a tasteful detail. FAQ answer fade-in animation is subtle and purposeful. Structured data (FAQPage JSON-LD) is present and correctly formatted.

**Issues:**
- Minor: the FAQ section has no nav anchor in the header ("FAQ" links to #faq). It is present. No issue.
- "How much does a visit cost?" answer is intentionally vague ("Contact us before your visit"). This is likely intentional for pricing flexibility, but from a patient trust perspective, even a range ("$60–$120 for a first visit") would reduce friction. Copy-level issue, noted.

### 8. Contact + Booking — 7.0 / 10
The two-column layout (info left, booking right) is well structured. The map embed is a strong conversion signal — seeing a real street map builds credibility more than an address alone. The "Your First Visit — What to Expect" prep box is an excellent trust element. The booking card with the visual calendar is visually polished.

**Issues:**
- The booking calendar does not actually book anything. Selecting a date enables a button that says "Call to Confirm [date]" which then shows a "Call (610) 555-0100 to Book" button. This is a three-step flow to arrive back at a phone call. A patient who has already pulled out their phone to look up a chiropractor expects to either call with one tap or book online in two steps. This funnel is over-engineered for what it delivers. Consider removing the calendar entirely in favour of a bold call CTA + a simple contact form (name, phone, preferred day/time as a dropdown).
- The map iframe uses coordinates that likely don't pin to the real address (placeholder lat/long). A patient who taps "Get Directions" may be sent somewhere incorrect.
- Placeholder phone (610) 555-0100 is noted. Limited weight per rules — a real user wouldn't know it's fake.

### 9. Footer — 7.8 / 10
Dark footer with gradient top border (teal → teal-light → teal) is polished. Logo, links, and contact info are well grouped. Google Reviews link in footer is a good addition. Mobile footer stacks and centers correctly.

**Issues:**
- Footer padding-bottom: 80px on mobile to clear the sticky CTA bar is correct. No issue.
- "Stellar care. Real results." tagline is fine but generic.

### 10. Mobile Experience — 7.4 / 10
Good: sticky CTA bar is well implemented. Tap targets at 44px minimum. Font sizes meet 12px floor on mobile. Center alignment is consistent across sections. Mobile menu operates correctly with overlay and escape-key close. Reduced-motion preference is respected.

**Issues:**
- No hero image on mobile is the dominant issue (see Hero section).
- Process strip at 480px breaks into 2x2 grid — this is functional but the connector lines (pseudo-elements) are fragile and may not align correctly at intermediate widths between 375px and 480px.
- About photo offset frame (::before pseudo-element) may cause horizontal overflow on very small viewports. The transform: translate(10px, 10px) shifts the border outside the parent boundary.

### 11. Code Quality + Performance — 7.5 / 10
CSS is well-organised with clear section comments. Design tokens (CSS variables) are used consistently. The CSS file is ~2000 lines but there is minimal dead code visible — the about__why-list styles appear to be legacy from a previous layout that no longer renders on the page (no about__why-list in the current HTML). JS is vanilla, no dependencies, appropriately lightweight. noscript fallback shows all collapsed content. Reduced-motion support is thorough.

**Issues:**
- `.about__why-list` CSS block (lines 1142–1171 in style.css) appears to be dead code — no corresponding HTML element found in current index.html. Razor pass recommended.
- The CSS file has duplicate transition-delay rules for `.testimonials__grid` which don't apply (testimonials uses a carousel, not a grid). Minor.
- `@keyframes faqReveal` is defined but the `.faq-item__a` animation can be overridden to `none` in the reduced-motion block. Correct pattern — no issue.

### 12. Trust + Conversion Signals — 7.2 / 10
Strong: specific service CTAs, "No commitment required. No surprise bills." in hero, prep box, FAQ addressing real anxieties, structured data for Google rich results. The overall tone is honest and non-pushy, which is appropriate for healthcare.

**Gaps:**
- No real online booking.
- No insurance information (even "we can help with" language).
- No before/after story or specific patient outcome data beyond testimonials.
- "Verified Patient" badge has no external validator.

---

## Placeholder Data (Limited Weight)
- Phone: (610) 555-0100 — fake
- Email: hello@stellarchiropractic.com — likely fake
- Doctor last name absent
- Stock photos (Unsplash) in hero bg, hero image, and about section
- Map iframe uses generic coordinates

These are noted for the record. Per audit scoring rules, they are not a ceiling on the design score.

---

## Priorities (Ranked)

### Priority 1 — Restore a hero image on mobile
The hero shows no image at 375px–768px, which is almost certainly the majority of traffic. A mobile patient sees only text and a gradient background. Add a full-width image below the hero content on mobile — below the trust bar — or restore the hero image in a stacked layout. This is the highest-impact single change available.

### Priority 2 — Open the first Why item by default + swap toggle symbol
The three Why items start collapsed. The most important trust messages are invisible to scanners. Open the first item ("We Listen Before We Treat") by default, matching the service card pattern. Also change the expanded toggle from × (rotate 45° of +) to − for consistency with service cards and cleaner UX semantics.

### Priority 3 — Simplify the booking flow
The current flow: pick date → click "Call to Confirm" → see confirm panel → click "Call (610)..." is three interactions to reach a phone number. Replace the calendar with a simple two-field form (name + phone/email) and a preferred-day dropdown. Or, if the calendar is retained, make the book button a direct tel: link on first tap — skip the confirm panel entirely.

---

## What's Working Well
- Accordion service cards — best feature addition in this round
- Offset photo frame on About — genuine design distinction
- Hero typography (Lora heading + teal italic em) — strong
- FAQ section — copy, structure, and structured data all excellent
- Credentials toggle — tasteful de-clutter
- Sticky mobile CTA bar — correct implementation
- Animation restraint throughout — compliant with AGENT-RULES, feels healthcare-appropriate
- noscript fallbacks — good accessibility baseline
- Reduced-motion support — thorough

---

## Score Justification

7.6 sits between "generic but functional" (6.0) and "better than most competitors" (7.0) and approaching "patients would choose this over alternatives" (8.0). The site is clearly above average for a local chiropractic practice — the accordion, carousel, structured data, and overall typographic taste separate it from most competitors. It does not yet reach 8.0 because the mobile hero gap and the booking-to-phone-call friction are trust-killers that a real patient would notice and feel, even if they cannot articulate why.
