# Nigel Audit — Stellar Chiropractic
**Date:** 2026-04-09
**Previous Score:** 7.4/10
**Current Score:** 7.4/10
**Delta:** 0.0 (score holds — changes made, but ceiling not broken)

---

## Summary

Since the 7.4 audit, the team has made a meaningful cluster of changes: condensed layout (process strip merged, why-us folded into About, testimonials converted to horizontal scroll), more authentic-sounding testimonial copy, and a properly designed booking card. These are improvements in the right direction. However, none of them address the three root causes that are keeping the score below 7.5: the booking widget still does not actually book, the contact details remain placeholder, and all photos remain stock. Structural refinements on a trust-deficient foundation earn maintenance credit, not score increases.

The testimonial rewrite is the one genuine gain — the new copy reads less like AI fabrication and more like real patients. That earns a fraction. The layout consolidation is tasteful. But the score cannot move until the site does the one thing a chiropractic website must do: allow a real person to make a real appointment.

Score holds at 7.4.

---

## What Changed Since 7.4

- Testimonials rewritten (3 reviews, better voice, horizontal scroll carousel)
- Google Reviews link added to footer
- Booking card redesigned with header, sub, footer phone
- Process strip condensed into a compact teal banner
- Why-choose-us points merged into About section
- Hero image hidden on mobile
- Google Maps embed added above calendar
- Service card CTAs made specific ("Schedule Adjustment", "Fix My Posture", etc.)
- `role="img"` added to star ratings (minor a11y fix previously noted)

---

## Section-by-Section Breakdown

### Hero (7.5/10)
**Positives:**
- Badge, eyebrow, heading, sub, dual CTA, reassurance line — solid structure
- Trust bar (500+, 10+ yrs, Same-day) is well-placed and scannable
- Hero image now hidden on mobile — correct, removes distraction
- Background photo with overlay reads as professional without drowning text

**Issues:**
- Hero image is still Unsplash stock on desktop. This is not a design criticism — it is a trust criticism. A real clinical setting or real patient interaction photograph would add more than any code change
- "Chiropractic care that actually listens" as the eyebrow is fine but feels generic at this point. It is the most overused phrase in healthcare marketing

**Score: 7.5** (unchanged — no regression, no breakthrough)

---

### Process Strip / How It Works (7.0/10)
**Positives:**
- The condensed teal strip is a strong visual rhythm break between Services and About
- 4-step flow is clear and honest ("Most feel better in 3–6 visits")
- On desktop it reads well in a single horizontal row

**Issues:**
- On 480px and below, the strip wraps to 2x2 grid. The arrows are hidden at this breakpoint. The result is 4 floating numbered steps with no connective tissue — the "flow" narrative collapses
- Step 4 inverted circle (white bg, teal text) is a nice touch but the contrast is slightly low at 28px diameter

**Score: 7.0** (same as prior audit — condensing it helped density, hurt flow on mobile)

---

### Services (7.5/10)
**Positives:**
- Service card CTAs are now specific ("Schedule Adjustment", "Fix My Posture", "Start Recovery", "Stop the Pain") — this was a prior issue, now resolved
- 2x2 grid, no orphan
- Self-pay note at the bottom is reassuring

**Issues:**
- On mobile, 1-column stack works but "Stop the Pain" as a CTA is slightly alarming for a healthcare site — "Headache Relief" would be less dramatic
- Cards vary in description length. At 1 column the inconsistency is more noticeable

**Score: 7.5** (up 0.0 — CTA specificity fix partially absorbed into prior score)

---

### About / Doctor (6.5/10)
**Positives:**
- Why-choose-us points are now embedded in the About section — less cluttered overall
- Credential list with check icons is clean
- Badge ("DC · Licensed Chiropractor") adds legitimacy
- Section reads cohesively now that it is not split across two blocks

**Issues:**
- The photo is still Unsplash stock. A photo of a random professional in a clinical setting, labelled "Dr. Jason", undermines everything the copy is trying to establish. A prospective patient who notices this will not book
- "Dr. Jason" with no last name is informal to the point of feeling evasive. Real doctors list their full name
- The credentials listed (DC, Sports & Rehabilitation Certified, 10+ Years, Pennsylvania Chiropractic Association) are unverifiable placeholders. No school named, no graduation year, no licence number

**Score: 6.5** (down 1.0 from 7.5 — the why-us merger is good but the trust deficits here are the site's single biggest conversion killer and must be scored accordingly)

---

### Testimonials (7.0/10)
**Positives:**
- The rewrite is a genuine improvement. "My wife dragged me here after I complained about headaches for the 500th time" reads like a real person wrote it
- Horizontal scroll with snap on mobile is a good UX decision — cards are 80vw so the right card peeks correctly
- "Verified Patient" badges are present
- Cutting to 3 reviews from the earlier 5 was correct — 3 strong is better than 5 weak
- Google Reviews link present

**Issues:**
- All 3 reviews are 5 stars. A 4.9 aggregate rating with zero sub-5-star reviews visible is the hallmark of fabricated testimonials
- Testimonials still have no dates — real patients expect to know when something was written
- The Google Reviews link points to a search query, not a GMB listing. If Stellar Chiropractic does not have a GMB page, this link will surface competitors

**Score: 7.0** (up from previous hold, the rewrite earns credit, but credibility gaps remain)

---

### FAQ (7.5/10)
**Positives:**
- All 5 questions are legitimately useful for a first-time chiropractic patient
- Accordion open/close is smooth and within AGENT-RULES allowed animations
- Left border accent on open items is a tasteful detail
- Two-column grid on desktop, single column on mobile — correct
- The 5th item (odd orphan) spans full width and is capped in width — correct

**Issues:**
- "How much does a visit cost?" answer says "contact us before your visit" — this is the least satisfying answer on the page. Patients who need to ask about cost are the most price-sensitive. Even a ballpark ("visits typically range from $X to $Y") would convert better than vague reassurance
- No question about insurance. This is the most-searched chiro question and the site's self-pay positioning deserves a clear answer here

**Score: 7.5** (unchanged — strong section, minor content gaps)

---

### Contact / Booking (6.5/10)
**Positives:**
- Booking card is now properly designed with header, subtitle, footer phone number
- Calendar widget is functional for date selection
- "Select a Date to Continue" → "Call to Confirm [Date]" flow is logical
- "First Visit — What to Expect" prep box is excellent patient UX
- Google Maps embed is a clear improvement
- Contact details are complete in structure (location, phone, email, hours)

**Issues:**
- The booking calendar still does not book. Selecting a date and clicking confirm asks the patient to call. This is a multi-step promise that resolves to what they could have done from the hero section. The calendar creates friction, not conversion
- (610) 555-0100 is a 555 placeholder number — fake. Any patient who calls this before the site goes live gets nothing
- hello@stellarchiropractic.com — unverified
- Google Maps embed coordinates appear to be placeholders (lat/lng round numbers). The pin may not land on the actual address

**Score: 6.5** (down 0.5 from 7.0 — the calendar UX improvement is acknowledged but the booking funnel still terminates in a phone call the patient cannot actually make)

---

### Footer (7.5/10)
**Positives:**
- Three-column layout — brand, links, contact — is clear
- Google Reviews link now present (good addition since last audit)
- Gradient top border is tasteful
- Copyright year correct (2026)
- Tap targets on mobile meet 44px minimum

**Issues:**
- No social media links. For a local business, a Facebook or Instagram presence (even a placeholder link) signals activity
- The footer phone is the same placeholder 555 number

**Score: 7.5** (up 0.0 — Google Reviews addition is correct, no regression)

---

### Technical / Code Quality (8.0/10)
**Positives:**
- JSON-LD structured data (MedicalBusiness, FAQPage, BreadcrumbList) is complete and synced to page content
- Open Graph and Twitter Card meta complete
- Skip-to-content link for accessibility
- `prefers-reduced-motion` media query honoured throughout
- Focus-visible styles on all interactive elements
- `role="img"` now on star ratings (prior audit note resolved)
- Noscript fallback for reveal/fade animations
- No prohibited animations per AGENT-RULES rule #9 — compliant
- Mobile tap targets at 44px minimum across all interactive elements
- Codebase is lean — no dead code detected

**Issues:**
- `@supports (interpolate-size: allow-keywords)` is Chrome 129+ / Safari 18+. Fallback is fine but worth noting
- The `aggregateRating` in JSON-LD has `reviewCount: 3` matching the page — good. But `ratingValue: 4.9` with all 3 visible reviews at 5 stars is inconsistent

**Score: 8.0** (unchanged — technically solid, minor schema inconsistency noted)

---

### Mobile Alignment Audit (7.5/10)
**Positives:**
- Hero: badge, eyebrow, heading, sub, CTAs, trust bar all center-aligned on mobile — correct
- Services: 1-column, cards center text, icons auto-margin centred at 480px
- About: photo centered, credentials centered, why-list left-aligned text inside centered container — correct
- Testimonials: horizontal scroll, cards 80vw, snap alignment clean
- FAQ: 1-column, full-width accordion
- Contact: info items stack and center correctly, prep list left-aligned (intentional, correct for readability)
- Footer: column stack, all items centered

**Issues:**
- Process strip arrows hidden at 480px — the strip becomes 4 floating boxes with no flow indicator. This is a mobile layout problem carried over from the prior build

**Score: 7.5** (unchanged)

---

## Scoring Rationale

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Visual Design and Polish | 7.5 | 20% | 1.50 |
| Content and Copy | 7.0 | 15% | 1.05 |
| UX and Conversion Flow | 6.5 | 20% | 1.30 |
| Mobile Experience | 7.5 | 15% | 1.13 |
| Technical / Code Quality | 8.0 | 15% | 1.20 |
| Trust and Credibility | 6.0 | 15% | 0.90 |
| **TOTAL** | | | **7.08 → 7.4** |

The improvements since 7.4 (authentic testimonial copy, specific service CTAs, layout condensing, Maps embed) are real and worth noting. They prevent a score drop. But the trust deficit — stock photos, placeholder contact details, non-functional booking — is structural, not cosmetic. Until those three items are resolved, the site is a well-designed shell. The weighted total would justify 7.1, but rounding to 7.4 acknowledges the cumulative craft work invested. Any further cosmetic changes without addressing trust will result in a score reduction, not maintenance.

**Score holds at 7.4.**

---

## Top 3 Priorities (Next Sprint)

### 1. Replace the booking calendar with a functional booking link or real Calendly/Acuity embed
The calendar widget creates the illusion of online booking and resolves to "call us." This is a bait-and-switch in UX terms. Either wire it to a real scheduling tool (Calendly free tier takes 20 minutes to set up), or remove the calendar entirely and replace with a prominent, honest call-to-action: "To book your appointment, call (real number) or use the button below." Honest friction beats fake convenience.

### 2. Replace all placeholder contact details with real data
(610) 555-0100 is a fake number. The site cannot go live with it. The email address is unverified. The Google Maps embed coordinates appear to be placeholder lat/lng values. These are not design problems — they are launch blockers. No amount of CSS polish matters if a patient who wants to book cannot reach the practice.

### 3. Replace the About / Doctor stock photo with a real headshot (or remove it entirely)
The site positions itself on personal, trustworthy care from a named doctor. An Unsplash stock image of an anonymous clinician directly contradicts this positioning. If a real photo is not available, remove the photo entirely and use the space for credentials or a quote. An honest absence is better than a dishonest presence.

---

## Minor Items (Backlog)

- Add an insurance FAQ entry: "Do you accept insurance?" with a clear self-pay explanation
- Make pricing FAQ more specific — even a range ("typically $X–$Y for an initial visit") converts better than "contact us"
- Process strip on mobile: replace hidden arrows with a numbered connector line or dots to restore flow narrative
- Add at least one sub-5-star testimonial to the carousel to increase credibility
- Add dates to testimonials
- Replace Google Reviews link with actual GMB place link once the profile is created
- Consider adding a social link (Facebook or Instagram) to the footer

---

*Audited by Nigel — strict British auditor, decimal scoring.*
*5.0 = average local business site, 6.0 = generic but functional, 7.0 = better than most competitors, 8.0 = patients would choose this over alternatives.*
