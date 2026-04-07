# Nigel Audit — Stellar Chiropractic (Wave 4)
**Date:** 2026-04-06
**Previous Score:** 6.7/10
**Current Score: 6.9/10 (+0.2)**
**Auditor:** Nigel (strict patient-perspective scoring)
**URL:** https://zed0minat0r.github.io/chiro-site/

---

## Overall Verdict

The recent changes are real but incremental. The site is measurably cleaner than the last audit — animations have been properly stripped, spacing is tighter, FAQ is more comprehensive, and mobile tap targets are now compliant. However, none of these changes address the three fundamental credibility blockers that keep the score below 7.0. A real patient landing on this page on their phone would see a polished layout but immediately clock the fake phone number, placeholder photo, and lack of any external trust signal (Google reviews, real GBP link). The site looks like a template demo, not a real practice. That is the ceiling until real data arrives.

---

## Section-by-Section Audit

### 1. Navigation (Score: 7.5)
- **Good:** Clean fixed nav with blur backdrop, appropriate scrolled state. Mobile burger with ARIA attributes. Phone icon tap target correctly sized at 44px on mobile. Skip-to-content link present.
- **Good:** Mobile menu links have proper 48px min-height tap targets.
- **Minor:** Nav call icon links to fake number `tel:6105550100`. A patient tapping this gets nothing.
- **Verdict:** Technically sound. Fake phone number is the only blocker.

### 2. Hero (Score: 7.0)
- **Good:** Strong headline with clear emotional hook. Reassurance line ("No commitment required. No surprise bills. Most patients seen within 24 hours.") is excellent — exactly what a nervous first-time patient needs.
- **Good:** Trust bar (Hundreds / 10+ yrs / Same-day) is well-structured. No animation clutter.
- **Good:** Visual cards on desktop provide nice supporting points (Most Insurance, Root Cause, No Upsells).
- **Good:** Mobile hero cards are a horizontal scroll strip — sensible for small screens.
- **Issue:** "Hundreds" is vague. Real practices say "500+" or a real number. This reads as filler.
- **Issue:** Hero visual cards on mobile (160px wide) may feel cramped on 375px — 3 cards at 160px = 480px requiring scroll. Functional but the scroll affordance is invisible (no indicators).
- **Verdict:** Strong copy, good structure. Needs real numbers.

### 3. Services (Score: 7.2)
- **Good:** Six well-defined services with clear descriptions. Each card has a "Book for this" CTA that pre-populates the form reason dropdown — smart interaction.
- **Good:** Pricing note at bottom: "Most insurance plans accepted · Self-pay rates available · Ask us about pricing" — transparency hint is appropriate.
- **Good:** On mobile, cards stack single-column and center-align. Tap targets on "Book for this" CTAs are 44px min-height with pill-style border.
- **Good:** No animation beyond scroll reveal. Cards have subtle hover shadow — not over-done.
- **Minor:** "Book for this" arrow is a text character, not an icon. Looks fine but inconsistent with other CTAs which have no arrows.
- **Verdict:** Solid section. One of the strongest parts of the site.

### 4. Patient Journey (Score: 6.8)
- **Good:** Four clear steps with time estimates. Step numbering is clean. Connectors switch from horizontal arrows (desktop) to vertical arrows (mobile).
- **Good:** Time estimates ("Takes 2 minutes", "About 30 minutes", "Same day as consultation", "Most patients: 3-6 visits") are concrete and reassuring.
- **Issue:** On mobile at 375px, journey step icons shrink to 56px. The step text has `max-width: 100%` which is fine, but paragraphs can feel long on narrow screens.
- **Verdict:** Functional and clear. Time estimates are a nice addition since last audit.

### 5. Value Strip (Score: 6.5)
- **Good:** Three value props in teal band. Clean layout with no over-animation. Scroll-reveal entrance is the only animation.
- **Issue:** On mobile, stacking to single-column makes this section very tall (3 full-width value blocks). Each has icon + title + description. Could feel repetitive.
- **Issue:** The section below it (Value Strip CTA) is a separate full-width teal-pale band with just one button. That is a lot of vertical real estate for one CTA. On mobile this means: teal band with 3 items then pale band with 1 button then white band (about). Heavy.
- **Verdict:** Content is fine, structure is slightly bloated.

### 6. About / Meet Dr. Jason (Score: 5.8)
- **Critical blocker:** Placeholder silhouette instead of a real photo. "Dr. Jason" with no last name. On mobile, the placeholder graphic is 300px wide with a gradient background and SVG circles — it looks overtly fake. A real patient would immediately lose trust.
- **Good:** Copy is well-written ("honest, effective care"). Credentials list is clean.
- **Good:** Badge overlay "DC - Licensed Chiropractor" is positioned well.
- **Issue:** No last name, no real photo, no NPI number, no link to any verifiable credential.
- **Verdict:** The single biggest credibility gap on the entire site. This section actively hurts conversion.

### 7. Wellness Tips (Score: 7.0)
- **Good:** Three practical tips with numbered badges on icons. Feels personal ("A note from Dr. Jason"). Footer quote adds warmth.
- **Good:** No animation beyond scroll reveal. Layout is clean.
- **Good:** Mobile stacking is well-handled. Tips collapse to centered vertical cards at 480px.
- **Minor:** The "DJ" avatar circle is a nice touch but reinforces the lack of a real photo.
- **Verdict:** Good content section. One of the better differentiators.

### 8. Testimonials (Score: 5.5)
- **Critical blocker:** "Verified Patient" badges on reviews that link to a generic Google search URL, not a real Google Business Profile. The "Rated 5.0" claim is unverifiable. These look fabricated.
- **Good:** Copy in the testimonials reads naturally (not over-polished).
- **Good:** Three-column desktop grid stacks to single-column on mobile. Center-aligned on mobile. Clean.
- **Issue:** Only 3 testimonials. Real practices with a 5.0 rating show a count ("Based on 47 reviews").
- **Verdict:** Without a real GBP link and real review count, this section damages rather than builds trust.

### 9. Insurance Strip (Score: 7.0)
- **Good:** Insurance pills are clean and wrap well on mobile. "Most PPO Plans" is highlighted. The note below offers to verify benefits — good transparency.
- **Good:** No stagger animation — pills show immediately. Correct per rule #9 cleanup.
- **Minor:** Pills at 375px shrink to 0.76rem / 5px 12px padding. Still readable but getting small.
- **Verdict:** Functional, clean, helpful.

### 10. FAQ (Score: 7.5)
- **Good:** Eight questions covering the main concerns (pain, visits, cost, insurance, children/seniors, referral, first visit, speed). The two new questions (cost without insurance, children/seniors) fill real gaps.
- **Good:** Accordion uses native `<details>` with a CSS-only smooth open animation (faqReveal keyframe at 0.28s). Plus/minus icon via `::after`. Left accent border on open state.
- **Good:** Two-column grid on desktop, single-column on mobile. Stagger delays are subtle.
- **Good:** FAQPage JSON-LD structured data matches the visible FAQ content — good for SEO.
- **Issue:** Cost question still dodges actual numbers ("affordable self-pay rates", "contact us for an estimate"). A real patient searching "how much does a chiropractor cost" wants a range. Even "$50-$100 per visit" would be more helpful.
- **Verdict:** Best section on the site. Comprehensive, clean, well-structured.

### 11. Contact Form (Score: 6.0)
- **Critical blocker:** Form action is `https://formspree.io/f/placeholder` — submissions go nowhere. A patient filling this out wastes their time and gets no response.
- **Good:** Per-field validation with blur/input events, ARIA attributes, error messages. Loading state on submit. Error recovery with timeout.
- **Good:** "Prefer to call?" fallback with phone link. "First Visit — What to Expect" prep box is excellent patient-centric content.
- **Good:** Form layout stacks properly on mobile. Inputs hit 44px min-height. Select has custom arrow.
- **Issue:** Fake email `hello@stellarchiropractic.com` in contact info.
- **Issue:** Fake phone `(610) 555-0100` (555 prefix = obviously fake to anyone who notices).
- **Verdict:** Beautiful form that does absolutely nothing. This is the most damaging element on the page.

### 12. Footer (Score: 6.8)
- **Good:** Clean dark footer with gradient top border. Three-column layout collapses centered on mobile.
- **Good:** Links, address, phone all have proper tap targets on mobile.
- **Good:** Google Maps link on address is a nice touch.
- **Issue:** Same fake phone and address.
- **Verdict:** Structurally sound.

### 13. Sticky Mobile CTA Bar (Score: 7.5)
- **Good:** Shows after hero CTAs scroll out of view, hides when contact section is visible. Smart behavior.
- **Good:** "Call" button + "Book Your Visit" button side by side. Both hit 48px min-height. Safe area inset respected.
- **Good:** No animation beyond the entrance slide-up.
- **Verdict:** Excellent mobile UX pattern. One of the best implementations on the site.

---

## Animation / Clutter Check (Rule #9)

**Status: PASS** — The site has been properly cleaned up since the animation purge.

Remaining animations (all permitted per rules):
1. Scroll reveal fade-in (`.reveal` class) — allowed
2. FAQ accordion open (`.faqReveal` keyframe) — allowed
3. Hero content fade-in (`.fade-in` class) — simple, one-time
4. Value strip entrance (opacity + translateY) — scroll-triggered, subtle
5. Sticky CTA slide-up — functional, not decorative

Removed animations confirmed absent: No pulses, shimmers, bounces, glows, lifts, breathing effects, badge shimmers, icon rotations, CTA bounces, or decorative hovers. The CSS has clear comments marking each removed animation. Good discipline.

One minor note: The `service-card:hover` still changes icon background from teal-pale to teal with white color. This is a color change, not a transform/animation — acceptable.

---

## Accessibility Check

- Skip-to-content link: Present
- ARIA labels on burger, scroll hint, visual decorations: Present
- `aria-hidden="true"` on decorative SVGs: Present
- `prefers-reduced-motion`: Comprehensive media query that kills all animations/transitions
- Focus-visible outlines: Present on all interactive elements
- Form validation: `aria-invalid`, `aria-describedby` on error states
- Noscript fallback: Shows all content when JS disabled
- Color contrast: Teal on white passes WCAG AA. Muted text (#6b7280) on white is 4.6:1 — passes AA for normal text.

**Grade: Good.** Accessibility is above average for a small business site.

---

## SEO Check

- Title tag: Good ("Stellar Chiropractic — Phoenixville, PA Chiropractor")
- Meta description: Good, includes key phrases
- Open Graph tags: Present with image dimensions
- JSON-LD MedicalBusiness: Present with hours, address, phone
- FAQPage JSON-LD: Present, matches visible content
- Semantic HTML: Sections, headings hierarchy, nav landmarks
- `rel="noopener"` on external links: Present

**Grade: Good.** SEO fundamentals are solid.

---

## The Three Real-Data Blockers (Unchanged)

These are the same three issues flagged in every prior audit. They are the hard ceiling on the score:

1. **Fake contact data** — Phone (610) 555-0100, email hello@stellarchiropractic.com, Formspree placeholder. The site cannot convert a single patient. This alone caps the score.

2. **No real doctor identity** — "Dr. Jason" with no last name, no photo, no NPI, no verifiable credentials. The placeholder silhouette looks like a template demo. Trust is impossible without a real human.

3. **No Google Business Profile** — The "Rated 5.0" and "See our reviews on Google" link goes to a search results page, not a real GBP. "Verified Patient" badges are unverifiable claims. A savvy patient checks Google reviews — finding nothing would be a dealbreaker.

**Until these three are resolved, the score cannot exceed 7.0.** The UI/UX work is approaching diminishing returns.

---

## Score Breakdown

| Category | Score | Notes |
|----------|-------|-------|
| Visual Design | 7.2 | Clean, calm, professional. Good color palette. |
| Typography / Spacing | 7.0 | Nunito + Lora pairing works. Spacing refinements land well. |
| Mobile Experience | 7.0 | Tap targets fixed, alignment consistent, sticky CTA works. |
| Content Quality | 6.8 | Copy is strong. FAQ is comprehensive. Wellness tips differentiate. |
| Trust / Credibility | 4.5 | Fake data, no real photo, no GBP. The fatal flaw. |
| Conversion Potential | 4.0 | Form goes nowhere. Phone is fake. Zero conversion possible. |
| Animation Discipline | 8.0 | Properly cleaned up. Only permitted animations remain. |
| Accessibility | 7.5 | Above average for category. Reduced-motion, ARIA, focus states. |
| SEO Fundamentals | 7.0 | Structured data, meta tags, semantic HTML all present. |

**Weighted Score: 6.9/10**

---

## Delta Analysis: 6.7 to 6.9

The +0.2 reflects genuine improvements:
- Typography/spacing refinements are noticeable on careful inspection
- Hero reassurance text adds real conversion value
- Journey time estimates make the process feel concrete
- 2 new FAQ questions fill actual gaps (cost, children/seniors)
- Pricing transparency hints ("Ask us about pricing", self-pay mentions) are welcome
- Mobile tap targets now consistently hit 44px minimum
- Overflow issues resolved (value strip CTA, hero trust bar at 375px)

The reason it is only +0.2 and not more: **none of these changes move the needle on the three blockers.** The site's ceiling is credibility, not polish. Further UI/UX refinement will yield diminishing returns (0.1 or less per cycle).

---

## Top 3 Priorities for Next Cycle

1. **Replace placeholder contact data with real phone, email, and working form endpoint.** This is the #1 conversion blocker. Without it, every other improvement is cosmetic.

2. **Add real doctor photo and full name.** Replace the SVG silhouette with an actual headshot. Add last name. This single change would be worth +0.5 to the score.

3. **Create or link a real Google Business Profile.** Replace the generic search link with a direct GBP review link. Add real review count. Remove "Verified Patient" badges until reviews are verifiable.

**If all three blockers are resolved, projected score: 7.8-8.0.**

---

*Audited by Nigel — 2026-04-06*
