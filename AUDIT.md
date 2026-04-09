# Nigel Audit — Stellar Chiropractic
**Date:** 2026-04-09
**Previous Score:** 7.6/10
**Current Score:** 7.9/10
**Delta:** +0.3

---

## Summary

Three substantive improvements have been delivered since the 7.6 audit, and all three are confirmed present in the code: the mobile hero image strip is implemented and renders on screens below 1024px; the first Why Choose Us item opens by default (data-expanded="true" in HTML, JS respects it); and the booking flow now surfaces the call CTA immediately with the calendar as an optional toggle behind a "Pick a preferred day (optional)" disclosure. Eleven additional Refiner fixes are visible in the CSS — tap targets at 44px minimum, text floors at 12px, mobile alignment consistency, accessibility improvements, and swipe hints. This is a meaningful round of work and the score reflects that.

The site now sits in the upper band of what a local chiropractic practice website typically delivers. Reaching 8.0 requires closing three remaining gaps: the booking flow still terminates in a phone call rather than a real booking mechanism; the testimonial pool is thin at three reviews; and the hero background photo is almost entirely obscured by its gradient overlay on desktop, making the image investment largely invisible.

---

## Section Scores

### 1. Navigation — 8.2 / 10
Fixed frosted-glass nav, phone icon visible in mobile nav, escape-key close, skip-to-content link, active link highlighting via IntersectionObserver. No regressions from previous audit. Remains the strongest section.

### 2. Hero — 7.5 / 10
The mobile image strip is now present and implemented correctly. It sits below the hero content, is full-width, uses `object-position: center 28%` to frame the subject, and has gradient fades at top and bottom blending into the section backgrounds. This is a real fix — a mobile patient now sees a human image, not just text on a gradient. The desktop hero retains the split-gradient background with the photo element in the grid layout.

**Remaining issues:**
- On desktop, the `hero__bg` background image is nearly invisible. The overlay gradient runs from 97% opacity teal-green on the left to 20% on the right. The photo bleeds through only on the far right edge. At 1160px the `hero__image` element (420px wide, rounded, shadowed) renders correctly in the grid, but the background image serves mostly as a subtle texture. This is a design choice — it keeps text readable — but the background photo investment is largely wasted.
- The hero eyebrow ("Chiropractic care that actually listens.") duplicates the h1 theme and loses impact by appearing before the heading. It works in Lora italic but competes with the heading rather than supporting it.
- Scroll hint is hidden on mobile (correct, given the strip replaces the space), but the scroll hint is also the only affordance pointing users to continue below the trust bar. On desktop it is visible; on mobile there is nothing.

### 3. Services (Accordion) — 8.0 / 10
The accordion pattern remains the best feature on the site. First card open by default. Per-card CTAs with specific reasons. Icon hover state. The "Tap any card to learn more" hint is now present below the section heading on mobile — this was identified as a gap last audit and is now addressed. Tap targets are 44px minimum as confirmed in the CSS fix block. No regressions.

**Remaining issues:**
- `service-card__body` max-height is 260px (up from 200px, presumably expanded in a prior pass). Adequate for current copy. If descriptions lengthen materially, this will clip. Minor.

### 4. Why Choose Us + How It Works — 7.6 / 10
First item now opens by default. This was Priority 2 from the previous audit. On load, "We Listen Before We Treat" with its body text "Full consultation, not a rushed exam. We explain what we find in plain language." is immediately visible. This substantially improves the section — a scanner now reads actual trust content rather than three blank accordion rows.

**Remaining issues:**
- The expanded toggle symbol is still + / − (minus character). In the previous audit I noted the toggle rotated a + by 45 degrees to form an ×, which was semantically confusing. That has been corrected: the JS sets textContent to '−' on expand and '+' on collapse. This matches the service cards. Resolved.
- Only three Why items. The section would benefit from a fourth: something around pricing transparency or insurance, which is a top patient anxiety not covered in this section (it appears later in FAQ).
- Process strip arrows become `display: none` at 480px, replaced by a connector line approach using pseudo-elements. The left-column pseudo-element runs from 28% to 72% horizontally at top: 22px; the right-column vertical line runs from top: 22px for half the strip height. This is clever but relies on percentage positioning that could misalign at intermediate widths. Low priority cosmetic risk.

### 5. About — 7.5 / 10
No changes from previous audit. Offset photo frame (::before translate 10px/10px) remains distinctive. Credentials toggle works. Stock photo is a Unsplash premium image of a doctor — adequate stand-in. Score held.

**Remaining issues (unchanged):**
- No doctor last name. Noted as placeholder — limited weight per rules.
- About intro text is functional but impersonal. No philosophy, no origin story. The section could connect more emotionally.
- On mobile at 300px max-width, the offset frame pseudo-element (translate 10px, 10px) extends outside the parent boundary. `overflow: hidden` is not set on the wrap, so the border accent may clip at viewport edges on very small screens. `padding-right: 12px` is set on `.about__photo-wrap` at mobile, which partially mitigates this but does not fully contain the 10px transform.

### 6. Testimonials (Carousel) — 7.3 / 10
No changes from previous audit. Carousel, arrows, dots, swipe hint all functional. The swipe hint ("Swipe to read more →") is present and shows on mobile via the media query. Score held.

**Remaining issues (unchanged):**
- Three reviews. Thin for a practice claiming 500+ patients helped.
- "Rated 4.9/5 based on patient reviews" is not linked to an external source. The Google Reviews link is present in the section but the aggregate number lacks an anchor.
- "Verified Patient" badge has no external verification mechanism. Noted.

### 7. FAQ — 8.0 / 10
Unchanged from previous audit. Five genuine patient questions, 2-column grid, open-state teal left border accent, FAQPage JSON-LD. This remains the strongest content section. Score held.

### 8. Contact + Booking — 7.4 / 10
The booking flow simplification is confirmed. The card now presents: title, subtitle ("Call us to schedule"), a large full-width green call button, hours, then a disclosure toggle ("Pick a preferred day (optional)") that reveals the calendar. The call CTA is immediately visible without any prerequisite interaction. This is the correct hierarchy — phone call first, calendar as supplementary. Compared to the previous three-step flow, this is a genuine improvement.

**Remaining issues:**
- The calendar, when expanded, still terminates in a phone call. Selecting a date updates the call button text to "Call (610) 555-0100 — April [date]". This is good — the date context helps the staff. The flow is now: see call button → optionally pick date → call with date in hand. Acceptable.
- No contact form. A subset of patients prefer not to call (anxiety, working hours). A simple name + phone/email form with preferred-time dropdown would capture leads that the call CTA loses. This is the single highest-value addition remaining.
- Map iframe uses generic placeholder coordinates. "Get Directions" link may not route correctly for a real patient.

### 9. Footer — 7.8 / 10
No changes from previous audit. Dark footer with gradient top border. Score held.

### 10. Mobile Experience — 7.8 / 10
Meaningful improvement. Hero image strip renders on mobile and tablet. Tap targets confirmed at 44px minimum. Text floors at 12px confirmed. Center-alignment consistency confirmed across all sections. Sticky CTA bar functions correctly and hides when contact section is in view. Reduced-motion preference is thoroughly respected.

**Remaining issues:**
- About photo offset frame may cause minor overflow on narrow viewports as noted above.
- Process strip connector pseudo-elements are fragile at intermediate breakpoints.
- No scroll affordance below the trust bar on mobile.

### 11. Code Quality + Performance — 7.6 / 10
CSS is well-organised. Design tokens used consistently. noscript fallbacks cover all collapsed sections. JS is vanilla and lightweight. The CSS is now approximately 2240 lines — it has grown with each refiner pass. The comment at line 2239 ("cal-book-btn and cal-confirm removed — booking card redesigned") confirms dead code was cleaned up. The `.form__prefer-call` block (lines 1431–1438) references a class that no longer appears in the HTML — minor dead code. The `about__photo-placeholder::before` and `.about__photo-silhouette` and `.about__photo-name` and `.about__photo-title` blocks style elements that are no longer rendered (the `has-photo` state hides the silhouette via `::before { display: none }`). These are dead code blocks that could be removed by Razor.

### 12. Trust + Conversion Signals — 7.4 / 10
Improved. Immediate call CTA in booking card removes friction. Tap-to-call in nav. Sticky mobile CTA bar. "No commitment. No surprise bills." in hero. Prep box in contact. FAQ addressing real anxieties. Structured data for Google rich results.

**Remaining gaps:**
- No online booking. The call CTA is appropriate for many healthcare contexts but excludes patients who prefer digital scheduling.
- No contact form as fallback.
- No insurance information.
- "Verified Patient" badge lacks external credibility.

---

## Placeholder Data (Limited Weight)
- Phone: (610) 555-0100 — fake
- Email: hello@stellarchiropractic.com — likely fake
- Doctor last name absent
- Stock photos (Unsplash) throughout
- Map iframe uses generic coordinates

These are noted for the record. Per audit scoring rules, they are not a ceiling on the design score.

---

## Top 3 Priorities

### Priority 1 — Add a contact form as a booking fallback
The call CTA is correctly positioned, but a meaningful percentage of patients will not call cold. A simple form (name, phone or email, preferred day/time dropdown, optional note) would capture the leads the phone number loses. This is the single highest-conversion addition remaining. It does not need to integrate with a real backend — a mailto action is sufficient at this stage.

### Priority 2 — Expand the testimonial pool to at least 5 reviews
Three reviews is thin for a practice claiming 500+ patients. Adding two or three additional reviews with specific conditions treated (sciatica, neck stiffness, posture issues) would address the spread of services and strengthen the credibility of the 4.9 aggregate rating. The carousel handles any number gracefully.

### Priority 3 — Restore the desktop hero background photo
The hero background image (clinical interior, Unsplash) is nearly invisible behind the gradient overlay which hits 97% opacity at 0% and only drops to 20% at the far right edge. Either lighten the overlay (allow more photo to show through across the full width) or replace the background image with a more intentional accent. The current state wastes a loaded image resource for minimal visual return on desktop.

---

## What's Working Well
- Mobile hero image strip — confirmed fix, real improvement
- First Why item open by default — confirmed fix, real improvement
- Simplified booking flow — confirmed fix, call CTA immediately visible
- Accordion service cards — best interactive feature on the site
- "Tap any card" hint on mobile — correctly added
- Offset photo frame on About — genuine design distinction
- FAQ section — copy, structure, and structured data all excellent
- Sticky mobile CTA bar — correct implementation, hides correctly at contact
- Animation restraint throughout — healthcare-appropriate, compliant with rules
- Tap targets at 44px minimum — confirmed in CSS
- Text floors at 12px — confirmed in CSS
- Reduced-motion support — thorough, covers all interactive elements
- noscript fallbacks — good accessibility baseline

---

## Score Justification

7.9 sits near the boundary of "better than most competitors" (7.0) and approaching "patients would choose this over alternatives" (8.0). All three priorities from the previous audit are verifiably addressed. The improvements are real, not cosmetic — a mobile user now sees a human face, the trust section shows content without requiring interaction, and the booking card leads with a direct call CTA. The site is now clearly in the top tier of local chiropractic websites from a design and UX standpoint. It does not yet reach 8.0 because a real patient wanting to book online has no option other than a phone call, and the testimonial pool is still sparse relative to the claimed patient volume. These are solvable in one more round.
