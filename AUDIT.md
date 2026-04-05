# Stellar Chiropractic — Site Audit
**Auditor:** Nigel (strict audit mode)
**Date:** 2026-04-04
**URL:** https://zed0minat0r.github.io/chiro-site/
**Overall Score: 6.2 / 10**

---

## Scoring Context
- 5.0 = average/basic chiro site
- 6.0 = generic template feel
- 7.0 = genuinely better than most chiro sites
- 8.0 = patient would choose this practice over competitors just from the website

This site is better-than-average in layout and copy, but is held back by three unresolved placeholder issues that a real patient would immediately notice and distrust. The design system is polished and the copy is far above average for the niche. If the placeholders are resolved and a real photo is added, this could push to 7.2–7.5.

---

## Section-by-Section Audit

### Hero
**Score: 6.8/10**

**Strengths:**
- Headline "You Deserve to Feel Good Again" is patient-centric and emotionally resonant — much better than the typical "Experienced Chiropractic Care in [City]" boilerplate.
- Eyebrow line ("Chiropractic care that actually listens.") differentiates on personality, not just service.
- Trust bar (500+ patients / 10+ yrs / Same-day) is clean and credible-looking in isolation.
- Badge "Accepting New Patients" is a smart friction-reducer.
- The three floating info cards (Most Insurance / Root Cause / No Upsells) address the biggest patient objections upfront.
- Scroll hint animation is a tasteful detail.

**Weaknesses:**
- No actual photo or image in the hero. The right column is entirely SVG icon cards — it functions as a decorative placeholder. A patient arriving from a Google search expects to see the clinic or the doctor, not abstract icon panels. This reads as "site under construction" even if polished.
- "500+ Patients helped" is vague and potentially self-undermining. 500 patients over 10+ years implies roughly 50 new patients per year — not impressive for a busy practice. Either remove or rephrase (e.g., "Hundreds of patients across Chester County").
- The hero visual column is hidden on mobile (`display: none` at 768px) — the right panel disappears entirely. The mobile hero is pure text plus the trust bar, with no visual warmth.

---

### Value Strip (Why Patients Choose Us)
**Score: 7.0/10**

**Strengths:**
- The three pillars directly address what anxious chiro patients fear most: being rushed, being trapped in endless visits, and not being able to get an appointment fast.
- "Most patients see meaningful improvement in 3–6 visits" is a genuine trust-builder — most chiro sites hide this number.
- Design is clean: teal background, icon + title + description, hover effects.
- Stagger entrance animations are a nice polish detail.

**Weaknesses:**
- This section appears after the hero but before Services — a patient has to scroll past hero before hitting this critical differentiation. Consider anchoring one value point inside the hero itself.
- On 375px mobile, three stacked full-width blocks with top-border dividers feel visually heavy.

---

### Services
**Score: 6.5/10**

**Strengths:**
- Good selection of five services covering core demand areas.
- Patient-friendly descriptions — no jargon.
- "Book for this →" micro-CTA on each card is a smart conversion nudge.
- Hover animation (icon flips to teal fill, card lifts) is polished.
- Grid collapses cleanly to 1 column on mobile.

**Weaknesses:**
- No pricing, even a range. Patients often leave a site specifically to check cost. Even "most visits covered by insurance" per card would help.
- The service icon for Massage Therapy (a rectangle with lines) resembles a clipboard/document, not a massage. The Posture Correction icon uses a person-silhouette that echoes the greyed-out doctor placeholder — confusing visual repeat.
- Descriptions are all the same length and follow the same sentence structure. They read as template fill-ins rather than genuinely specific content. No session duration, no expected outcomes per treatment, no differentiation from what any other chiro offers.
- **Five cards in a 3-column grid creates an unbalanced last row:** 2 cards + 1 empty slot on desktop. This looks incomplete. Add a 6th service or switch to a 2-column grid for 5 items.

---

### Patient Journey
**Score: 7.2/10**

**Strengths:**
- The 4-step flow (Book → Consult → Plan → Feel Better) is clear and confidence-building.
- "Dr. Jason listens first — really listens" in step 2 is a standout line. Patients who have had rushed chiro visits elsewhere will read this closely.
- "A clear, honest plan...with a real timeline, not an open-ended commitment" in step 3 directly tackles the industry's biggest trust problem.
- Arrow connectors rotate 90 degrees on mobile — works well.
- CTA at the bottom of the journey section is well-placed.

**Weaknesses:**
- Step 4 ("Feel Better") is vague. "Most patients notice real improvement within their first few visits" repeats the value strip copy verbatim. Step 4 should close the emotional loop: what does life look like after? Back to running, sleeping through the night, back at work without pain? The journey ends on a cliche instead of a vivid outcome.
- The connector arrow SVG shrinks and feels incidental at small breakpoints.

---

### About (Dr. Jason)
**Score: 4.5/10** — Biggest single weak point on the page.

**Strengths:**
- Copy is warm and personal: "take the time to understand what's actually going on, explain it clearly."
- "No pressure, no upsells — just honest, effective care" is a strong differentiator line.
- Credential list is clean and scannable.
- "DC · Licensed Chiropractor" badge adds credibility.

**Critical Weaknesses:**
- **Grey silhouette placeholder is live.** The `about__photo-placeholder` element renders with a greyed SVG outline of a human body and the text "Doctor photo coming soon." This is a severe trust failure. A patient reaching this section will immediately wonder: is this doctor real? Is this practice even open? No credible healthcare provider website in 2026 runs a grey silhouette in the About section. This single element may be causing more patient drop-off than any other issue on the site.
- **No last name.** "Dr. Jason" is informal to the point of being unverifiable. Patients wanting to check credentials, confirm licensure, or find reviews need a full name.
- **Credential claims lack sourcing.** "Sports & Rehabilitation Certified" — certified by whom? CCSP, ART, FAKTR? Without the certifying body, this is an unverifiable claim.
- "Most Insurance Plans Accepted" listed under credentials is a billing detail, not a clinical qualification. Move it to the insurance section.
- No school or graduation year. No mention of where Dr. Jason trained.

---

### Wellness Tips
**Score: 7.5/10**

**Strengths:**
- Genuinely above-average content for the niche. Most chiro sites offer no free education.
- The three tips (feet flat, side sleeping, hourly movement) are specific, actionable, and clinically accurate.
- The "note from Dr. Jason" framing simulates a patient-doctor relationship before the first visit.
- The closing quote is a humanizing touch.
- Box design (white card, teal top-bar, light shadow) is clean and premium.

**Weaknesses:**
- The "avatar" in the wellness tip header is the same generic SVG silhouette as in the About section — it reinforces the impression that there is no real doctor behind the site. A real headshot would make this section dramatically more trustworthy.
- No link, no blog, no "follow for more tips." The section builds engagement with nowhere to send it. A link to a Google Business Profile, Instagram, or even a second article would capitalize on the trust being built.

---

### Testimonials
**Score: 5.0/10**

**Strengths:**
- The quotes are specific (neck, migraines, sports injury) and avoid generic praise.
- Lora italic for blockquotes is a good typographic choice.
- Stars display correctly.

**Critical Weaknesses:**
- **No verification source.** No Google review badge, no platform logo, no link, no date. Sarah M., James R., and Kevin T. have no photos, no location, no external source. These read as invented. In 2026, any patient doing basic due diligence will expect to see where these reviews came from.
- **Only three reviews.** This is the minimum to have a section at all. It signals a new or unestablished practice. Most patients expect 8–15+ displayed reviews, with a "See all 47 Google reviews" link.
- **No aggregate rating.** "4.9 stars on Google (63 reviews)" would be worth more than all three anonymous testimonial cards combined.
- No Google Maps embed or Google Business Profile link anywhere on the page.

---

### Insurance Strip
**Score: 6.8/10**

**Strengths:**
- Covers the major insurers patients look for.
- "Not sure if you're covered? Call us and we'll verify your benefits before your first visit" is excellent, friction-reducing copy.
- The "Most PPO Plans" pill draws the eye correctly.
- Placement between Testimonials and FAQ is good.

**Weaknesses:**
- Text-only pills, no actual insurance logos. Real logos (Aetna wordmark, BCBS shield, etc.) would add substantially more visual credibility.
- "We accept most major insurance plans" is vague. Naming specific in-network relationships is more credible.
- No mention of Medicare Advantage, Medicaid, or HMO plans — relevant for a portion of patients.

---

### FAQ
**Score: 7.5/10**

**Strengths:**
- Six FAQs address the highest-anxiety questions pre-visit.
- Answers are specific, honest, and not hedged into meaninglessness.
- PA-specific detail ("No referral is needed in Pennsylvania") is a strong local trust signal.
- The `<details>/<summary>` accordion with `+` rotating to `×` is clean and accessible.
- Two-column desktop, single-column mobile — well handled.

**Weaknesses:**
- No FAQ about cost. "What does a visit cost?" is typically the first question any service-business patient types into Google. Even an approximate self-pay starting rate would help.
- No FAQ about parking or accessibility at the Byrne Building location.
- The form CTA doesn't reinforce the same-day promise — the FAQ says call in the morning, but the form doesn't note same-day availability.

---

### Contact / Booking
**Score: 4.8/10** — Second biggest weak point.

**Strengths:**
- Form design is clean: two-column name/phone row, reason selector, message field.
- The reason dropdown pre-qualifies the enquiry — smart.
- JS form handler correctly implements loading state, green success state, and red error state with auto-reset.
- Business hours are listed (Mon–Fri 8am–6pm, Sat 9am–1pm).
- Address links to Google Maps.

**Critical Weaknesses:**
- **FormSpree placeholder endpoint is live.** `action="https://formspree.io/f/placeholder"` — this form does not submit to a real endpoint. Any patient who fills this out gets a server error. The JS error handler catches it and shows "Something went wrong — try again" with the fake phone number. Every patient who tries to book is bounced. This is an active, ongoing conversion failure.
- **Phone number (610) 555-0100 is fake.** This number appears in the nav (as a tappable call button), in the contact info panel, in the footer, and in the JS error handler. Any patient who tries to call reaches a non-existent number. This is the most damaging single placeholder on the entire site.
- **Email hello@stellarchiropractic.com** — if the domain stellarchiropractic.com is not registered or not configured with a mail server, every email bounces. High probability this is a placeholder.
- No map embed. Linking out to Google Maps is acceptable but an embedded map in the contact section increases trust and reduces location friction.
- No online booking widget (Jane App, Acuity, Calendly). Form-only booking puts the practice behind competitors who offer real-time slot selection.
- "Send Message" is a weak CTA label. "Request My Appointment" converts better.
- No indication of what patients should bring to their first visit (ID, insurance card, medical history).

---

## Summary Scores by Category

| Category | Score |
|---|---|
| Visual Design & Polish | 7.5 |
| Mobile UX (375px) | 6.8 |
| Trust Signals | 4.5 |
| Content Quality | 7.0 |
| Contact / Booking UX | 4.8 |
| Overall Feel | 6.5 |
| **OVERALL** | **6.2** |

---

## Top 3 Priorities (Ordered by Patient Impact)

### Priority 1 — Fix the dead placeholders: phone, form endpoint, email
The (610) 555-0100 phone number is not a real number. The FormSpree form action is a placeholder — the form cannot submit. The email address may not be deliverable. A patient who finds this site and attempts to contact the practice cannot reach them by any channel. This is not a cosmetic issue. It is a business-operational failure that is actively losing patients right now. Every day this is live, real people are trying to book and hitting dead ends. Fix this before any design or content work.

### Priority 2 — Replace the doctor silhouette with a real photo
The "Doctor photo coming soon" grey placeholder in the About section is the single most damaging trust element on the page. The entire purpose of the About section is to make the doctor feel like a real, trustworthy human being. A grey outline achieves the opposite. Even a well-lit smartphone photo in the clinic or an office setting would be dramatically better. The same issue recurs in the Wellness Tips section avatar. Until there is a real headshot, the site reads as a demo template, not a real practice.

### Priority 3 — Replace anonymous testimonials with verifiable Google reviews
The three testimonials (Sarah M., James R., Kevin T.) have no source, no photo, no date, and no verification. A patient doing any level of due diligence will be skeptical. The fix: link to the Google Business Profile and display the aggregate star rating and review count. Embed or screenshot 3–5 real Google reviews with reviewer names and dates. Add a "Read our [X] Google reviews" button. This requires having a Google Business Profile — set one up immediately if one does not exist, as it also improves local SEO significantly.

---

## Secondary Issues (Address After Top 3)

- **5-card grid imbalance:** 5 service cards in a 3-column grid leaves an empty slot. Add a 6th service or restructure the grid.
- **No visit cost in FAQ:** Add a question about pricing/self-pay rates.
- **Insurance text-only pills:** Swap for actual insurance provider logos.
- **No Google Maps embed** in the contact section.
- **No online booking widget** — form-only booking is a conversion drag vs. practices using Jane, Acuity, or Calendly.
- **Dr. Jason needs a last name** and specific certifying body names in credentials.
- **Google review count + star rating** should appear in the hero trust bar.
- **Step 4 of Patient Journey** needs a specific, vivid outcome — not "feel better" but what that actually looks like for a patient.
- **"500+ Patients helped"** may signal a small practice to a skeptical reader. Reconsider phrasing.
- **No new patient prep info** in the contact section (what to bring, what to expect on day 1 in practical terms).

---

## What Is Working Well (Do Not Regress)

- The copy voice throughout is significantly above average for the chiropractic niche — patient-centric, honest, and specific. Preserve this.
- The design system (teal/warm palette, Lora + Nunito pairing, spacing, shadow system) is cohesive and professional.
- The value strip's three pillars directly address patient objections — this is the best section on the site.
- The FAQ answers are specific and build real trust. Do not genericize them.
- Mobile responsiveness at 375px is well-considered. Nav, hero trust bar, value strip, wellness box, and form all handle the smallest viewport correctly.
- The JS form handler has well-implemented UX states (loading, success, error) — it just needs a real endpoint.
- The Patient Journey section is a genuine differentiator — most chiro sites skip this entirely.
- Scroll animations are smooth and not gimmicky.
- The insurance pre-verification copy ("we'll verify your benefits before your first visit") is excellent.
