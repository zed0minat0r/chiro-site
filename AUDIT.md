# Nigel Audit — Stellar Chiropractic (Wave 5)
**Date:** 2026-04-06
**Previous Score:** 6.9/10
**Current Score:** 7.0/10 (+0.1)
**Auditor:** Nigel (strict patient-perspective scoring)

---

## Executive Summary

Right, let me be blunt. The recent round of changes — structured data, Twitter cards, canonical URL, form trust signals, FAQ focus styles, 3 new testimonials, journey reassurance text, inputmode on form fields, spacing refinements, dead code cleanup, footer contrast fixes — are all technically competent. They tick boxes. But from a real patient's perspective on their phone, almost none of them are *visible*. A patient does not see JSON-LD. A patient does not notice `inputmode="tel"`. A patient does not care about your BreadcrumbList.

The score moves from 6.9 to 7.0, but only just. The structured data and SEO metadata genuinely help discoverability (which matters for getting patients to the page in the first place), and the 6 testimonials feel more credible than 3. That is the meaningful delta. The rest is infrastructure polish that was already priced into the previous score's trajectory.

We are now firmly in diminishing-returns territory for code-only improvements. The same three real-data blockers I have flagged before remain the single biggest gap between this site and an 8.0.

---

## Section-by-Section Audit

### 1. Navigation (Score: 7.5/10)
- Clean, minimal, professional. Fixed header with blur backdrop works well.
- Mobile burger + slide-down menu is solid. Escape-key close, overlay dismiss — good.
- Phone icon appears on mobile — correct behaviour.
- Tap targets on mobile are 44px minimum — compliant.
- "Book Appointment" CTA in nav is visible and well-placed on desktop.
- **Issue:** Nav links include "Tips" which scrolls to the wellness section — slightly confusing label. "Wellness" or "Advice" would be clearer.
- **Issue:** The phone number (610) 555-0100 is obviously a placeholder. Real patients will notice immediately.

### 2. Hero (Score: 7.0/10)
- Headline "You Deserve to Feel Good Again" is emotionally resonant and patient-centred. Good.
- Eyebrow "Chiropractic care that actually listens" — effective differentiator.
- Reassurance line "No commitment required. No surprise bills. Most patients seen within 24 hours." — strong.
- Trust bar (Hundreds / 10+ yrs / Same-day) is a good pattern.
- Visual cards on the right (desktop) with "Most Insurance", "Root Cause", "No Upsells" — smart information design.
- Mobile: hero visual cards become a horizontal scroll strip. Works, but the scroll affordance is invisible — a patient may not know to swipe.
- **Issue:** "Hundreds" of patients helped is vague. A real number (even approximate like "500+") would be far more credible.
- **Issue:** No real photo. The gradient background with geometric shapes is pleasant but generic. A photo of the actual office or doctor would be transformative.

### 3. Services (Score: 7.2/10)
- 6 service cards, each with icon, description, and "Book for this" CTA that pre-populates the contact form reason dropdown. Genuinely useful interaction design.
- Card descriptions are patient-centred, not clinical jargon. Good.
- Mobile: stacks to single column, centred. Clean.
- Insurance note at the bottom with link to contact — smart.
- **Issue:** All icons are custom SVG line art. They are well-made but lack warmth. Real photos of treatment in action would be far more persuasive.
- **No over-animation detected.** Hover states are colour changes only. Compliant with AGENT-RULES.

### 4. Patient Journey (Score: 7.5/10)
- 4-step process (Book / Consult / Plan / Results) with numbered badges, icons, and time estimates. This is one of the strongest sections on the page.
- "Takes 2 minutes", "About 30 minutes", "Same day as consultation", "Most patients: 3-6 visits" — concrete, honest, reassuring. Excellent.
- Step 4 copy "Back to sleeping through the night. Back to running, lifting, or just picking up your kids without wincing" — emotionally specific and effective.
- Connectors switch from horizontal arrows (desktop) to vertical arrows (mobile). Good responsive handling.
- Guarantee line: "We explain everything before we begin. No surprises, no pressure." — well placed.

### 5. Value Strip (Score: 6.8/10)
- 3 value propositions on teal background. Text is clear and well-written.
- Mobile: stacks to single column, centred. Fine.
- The CTA below ("Ready to feel better? Book your first visit") is a good mid-page conversion point.
- **Issue:** The value strip repeats messaging already in the hero (same-day appointments, listening, no commitments). Some redundancy. Not a dealbreaker, but it dilutes impact.

### 6. About / Meet Dr. Jason (Score: 6.0/10)
- This is the weakest section on the page. The placeholder silhouette where a doctor photo should be is the single most damaging element on the entire site.
- A patient landing here thinks: "They couldn't be bothered to put up a photo of the doctor?" It undermines every trust signal elsewhere.
- The copy is good — personal, warm, not boilerplate. Credentials list is clean.
- The "DC - Licensed Chiropractor" badge pinned to the bottom of the photo placeholder is a nice detail, but it is decorating an empty frame.
- **Critical blocker:** Real photo of Dr. Jason needed. This alone could move the overall score by 0.3-0.5 points.

### 7. Wellness Tips (Score: 7.5/10)
- "A note from Dr. Jason" framing is smart — positions the doctor as a helpful expert, not a salesperson.
- 3 actionable tips with numbered badges and icons. Each tip is genuinely useful, not filler.
- The footer quote gives it a personal touch.
- Well-styled card with subtle top accent bar.
- This section adds real value and differentiates from competitors who have nothing like it.

### 8. Testimonials (Score: 6.5/10)
- 6 testimonials now, up from 3. Better. The variety of conditions mentioned (neck pain, migraines, sports injury, sciatica, posture, general) covers most patient concerns.
- Aggregate rating display (4.9/5 based on 6 reviews) with link to Google — good pattern.
- "Verified Patient" badges on each card — nice trust signal.
- One 4-star review (Rachel W.) — actually adds credibility. All-5-star sets feel fake.
- **Issue:** 6 reviews is still thin. Competitors have dozens or hundreds. The "6 patient reviews" text actually draws attention to how few there are.
- **Issue:** These testimonials read as fabricated. "Sarah M., back pain patient" — real Google reviews have full names and specific details. Until these are real verified reviews pulled from Google/Yelp, they undercut the "Verified Patient" badge claim.
- **Critical blocker:** Real testimonials from real patients needed. Even 3 genuine ones would outperform 6 invented ones.

### 9. Insurance Strip (Score: 7.0/10)
- Clean pill-style layout with major carriers listed. "Most PPO Plans" highlighted.
- Note offering to verify benefits before first visit — reduces friction.
- Self-pay mentioned — good for uninsured patients.
- Mobile: wraps naturally. No issues.

### 10. FAQ (Score: 7.5/10)
- 8 questions covering the most common patient concerns. Well-written, patient-centred answers.
- 2-column grid on desktop, single column on mobile. Accordion pattern with + icon.
- Focus styles present. Open state has left teal accent border. Smooth reveal animation (allowed per AGENT-RULES).
- FAQPage JSON-LD for Google rich results — good SEO.
- Answers are honest and specific ("3-6 visits", "no referral needed in Pennsylvania").
- This is a strong section.

### 11. Contact Form (Score: 7.0/10)
- Two-column layout: info + form on desktop, stacked on mobile.
- "What to Expect" prep box is excellent — reduces first-visit anxiety.
- Form has name, phone, email, reason dropdown. Per-field validation with error messages. Good.
- Trust signals below submit: "Your info stays private", "Response within 2 hours", "No commitment required". Good.
- "Prefer to call?" fallback with phone number. Good.
- **Issue:** Form action is `https://formspree.io/f/placeholder` — this form does not actually work. A patient who tries to book will hit a wall. This is a critical functional blocker.
- **Issue:** Phone number is still placeholder (610) 555-0100.
- **Issue:** Email is hello@stellarchiropractic.com — if this is not real, another placeholder that erodes trust.

### 12. Footer (Score: 7.0/10)
- Clean, dark background. Logo, nav links, address, phone.
- Google Maps link on address — good.
- Copyright 2026 — correct.
- Footer contrast: links at rgba(255,255,255,0.6) on dark background — could be slightly higher for WCAG AA, but passable.
- Mobile: stacked and centred. Fine.

### 13. Sticky Mobile CTA Bar (Score: 7.5/10)
- Appears after hero CTAs scroll out of view, hides when contact section is visible. Smart behaviour.
- "Call" button + "Book Your Visit" button. Both with 48px min-height tap targets.
- Safe area inset handling for notched phones. Good.
- This is well-implemented and genuinely useful for mobile conversion.

### 14. Technical / SEO / Accessibility (Score: 7.5/10)
- Skip-to-content link present and functional.
- `<main>` landmark wrapping content. Good.
- Structured data: MedicalBusiness, FAQPage, BreadcrumbList, AggregateRating, OfferCatalog. Comprehensive.
- Open Graph + Twitter cards with image references. Good (though og-image.png may not exist yet).
- Canonical URL set. Good.
- `prefers-reduced-motion` media query disables all animations. Good.
- `noscript` fallback makes content visible without JS. Good.
- aria-labels on interactive elements. aria-expanded/aria-hidden on mobile menu. Good.
- **Issue:** og-image.png is referenced but may not exist. If missing, social shares will have no preview image.

### 15. Animation Compliance (Score: PASS)
- Animations present: scroll-reveal fade-in, FAQ accordion, value strip entrance stagger.
- All are subtle, functional, and explicitly allowed by AGENT-RULES.
- No glows, pulses, shimmers, bounces, lifts, or transforms on hover. Clean.
- **Verdict:** Compliant. No penalty.

---

## The Three Real-Data Blockers (Unchanged)

These have been flagged in previous audits. They remain the only path to 8.0:

1. **Real doctor photo.** The placeholder silhouette is the single biggest credibility gap. A professional headshot of Dr. Jason in the About section (and ideally the hero) would be transformative. Estimated impact: +0.3 to +0.5.

2. **Real patient testimonials.** The current 6 testimonials read as written by the site builder, not actual patients. Real Google/Yelp reviews with full names and genuine detail would be far more persuasive. Estimated impact: +0.2 to +0.3.

3. **Real contact data and working form.** Phone number is placeholder. Form action is placeholder. Email may be placeholder. A patient who tries to book will hit a wall. Estimated impact: +0.2 to +0.3.

**Combined estimated impact of resolving all three: +0.7 to +1.1, bringing the site to 7.7-8.1.**

---

## Minor Code-Level Recommendations (Low Priority)

These would not meaningfully move the score but are worth noting:

1. Verify og-image.png exists and is a real 1200x630 image.
2. Consider lazy-loading any images added in future (doctor photo, office photos).
3. The "Tips" nav link label could be "Wellness" for clarity.
4. AggregateRating reviewCount should match actual verified review count, not fabricated testimonial count.

---

## Score Breakdown

| Section | Score |
|---|---|
| Navigation | 7.5 |
| Hero | 7.0 |
| Services | 7.2 |
| Patient Journey | 7.5 |
| Value Strip | 6.8 |
| About | 6.0 |
| Wellness Tips | 7.5 |
| Testimonials | 6.5 |
| Insurance | 7.0 |
| FAQ | 7.5 |
| Contact | 7.0 |
| Footer | 7.0 |
| Sticky CTA | 7.5 |
| Technical/SEO | 7.5 |
| Animation Compliance | PASS |
| **Overall** | **7.0** |

---

## Verdict

The site has crossed the 7.0 threshold, which means it is now genuinely better than most chiropractic websites a patient would find in a local search. The copy is strong, the structure is logical, the mobile experience is clean, and the technical foundations are solid.

But the ceiling for code-only improvements has been reached. Every future point of progress depends on real content: a real photo, real testimonials, and real contact information. No amount of CSS refinement, structured data, or accessibility polish will substitute for those three things.

The agents should stop iterating on code until the real-data blockers are resolved.

**Score: 7.0/10 (+0.1 from 6.9)**
