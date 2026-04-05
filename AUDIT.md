# Stellar Chiropractic — Nigel Audit
**Date:** 2026-04-04  
**Auditor:** Nigel (strict patient-perspective scoring)  
**URL:** https://zed0minat0r.github.io/chiro-site/

---

## Overall Score: 6.2 / 10

*Scoring baseline: 5.0 = average/basic chiro site, 6.0 = generic competent template, 7.0 = genuinely better than most chiro sites, 8.0 = patient would choose this practice over competitors from the website alone.*

This site is a well-executed template. It's clean, modern-looking, and noticeably better than the worst chiro sites out there (WordPress themes from 2014). But a real patient comparison-shopping between 3–4 local chiropractors would not feel a decisive pull here. The placeholder photo, fake phone/email, and absence of a real doctor's last name are the most damaging issues — they directly undermine the single most important thing a patient needs: confidence that this is a real, trustworthy practice.

---

## Section Scores

### 1. Visual Design — 6.5 / 10

**What works:**
- Clean teal/warm-white palette is professional and calming — appropriate for healthcare.
- Font pairing (Lora display + Nunito body) is tasteful. Not generic Arial/Roboto chiro-site default.
- Service cards with hover state (icon fills teal, card lifts) add polish.
- Hero gradient is subtle and avoids the garish stock-photo-with-overlay cliché.
- CSS tokens/variables show organized code; consistent radius and shadow system.
- Animated scroll reveals with stagger delay on grid items are a nice touch.

**What hurts:**
- No real photography anywhere on the site. Not a single image. The entire visual experience is SVG icons and gradient backgrounds. Healthcare is a trust-based purchase — real photos of the office, the doctor, and even happy patients dramatically increase conversion. This is the single biggest visual deficit.
- The about section placeholder (a generic grey box with a person silhouette SVG) actively signals "unfinished" to a patient. It's worse than having no photo section at all — it broadcasts that the site is a template not yet completed.
- The hero section has no visual anchor — no image, no illustration beyond a soft gradient. On desktop it's a wall of left-aligned text with empty white space on the right half. That empty right side is wasted real estate screaming for a photo.
- Favicon is an SVG with a sparkle emoji character — functional but not a real logo mark. Patients rarely notice favicons, low impact.
- The inline SVG logo (circle + spine path) is fine as a placeholder but lacks distinctiveness.

---

### 2. Mobile UX (375px) — 6.5 / 10

**What works:**
- Burger menu is implemented correctly: opens/closes, overlay click dismisses, Escape key closes, aria-expanded updates. This is better than many small business sites.
- Font sizes scale reasonably with `clamp()` — no text overflow observed in CSS review.
- CTA buttons go full-width on very small screens (<480px) — good.
- Form row drops to single column on mobile — correct.
- About photo constrains to 320px max-width, centered — appropriate.
- Container padding drops from 32px to 20px — fine.
- Footer stacks cleanly.

**What hurts:**
- The hero at 375px will render as a very tall block of text: badge + large heading + subtext + two stacked buttons + trust bar. It will require significant scrolling before the user even reaches Services. No above-the-fold hook image means the first impression on mobile is purely typographic — risky for a healthcare trust purchase.
- Trust bar on mobile uses `flex-wrap` but dividers are hidden via `display: none`. The three trust stats will likely wrap into an irregular layout depending on text width. "Same-day" and "Appointments" on two lines could break the grid feel. Not tested in browser, but the CSS suggests potential misalignment.
- Hero heading at 2.2rem on mobile is fine, but "You Deserve to Feel Good Again" with `<br>` after "Feel" may not break where intended on 375px — the `<br>` is hardcoded for desktop line breaking.
- Services section at mobile shows 1 card per row — 6 cards = 6 full-width blocks. This is a lot of scrolling. No horizontal scroll / carousel considered.
- No map embed or even a map link for the address. On mobile, "200 Lincoln Ave, Suite 106" is just static text. A tap-to-navigate link (Google Maps URL) would be a basic mobile UX win for a local business.
- Phone number is not a `tel:` link — it renders as unclickable text. On mobile, patients expect to tap a phone number to call. This is a direct conversion failure.
- Email is not a `mailto:` link — same issue. Two tappable contact options that don't tap.

**Center-alignment audit (mobile):**
- Section labels, headings, and subheadings all center on mobile via the 768px breakpoint CSS — consistent.
- About credentials list items center on mobile (`justify-content: center`) — consistent with surrounding layout.
- Footer centers on mobile — consistent.
- Overall center-alignment is applied consistently across sections.

---

### 3. Trust Signals — 5.5 / 10

**What works:**
- "Accepting New Patients" badge in hero — good, patients care about this.
- Trust bar: 500+ patients, 10+ years, same-day appointments — these are the right metrics.
- Credentials list (DC, Sports Cert, 10+ years, insurance accepted) — relevant.
- "Most Insurance Plans Accepted" in credentials is a meaningful trust item.

**What hurts:**
- Doctor's last name is missing. "Dr. Jason" reads as a first-name-only placeholder. No patient would book with a chiropractor identified only by a first name. This is critical. What is Dr. Jason's last name? Patients Google doctors. They check state licensing boards. First-name-only signals either incompleteness or a deliberate vagueness that raises suspicion.
- Placeholder photo. The about section's grey silhouette box is the most damaging single element on the site. A patient considering handing their spine care to someone wants to see who that person is. This placeholder communicates "not ready."
- Phone number (610) 555-0100 is a Hollywood fake number. Any patient who notices this (and some will) will immediately distrust everything else on the site. Fake contact info is a red flag.
- Email hello@stellarchiropractic.com — whether this is real or fake is unclear, but paired with a fake phone, the contact section inspires zero confidence.
- Testimonials are generic. Three reviews, all 5 stars, no platform attribution (Google, Yelp, Healthgrades), no last names beyond an initial, no dates. They read as written copy, not real patient reviews. There's no link to a Google Business profile or any external review source. A skeptical patient will dismiss these entirely.
- No Google Business Profile link. No Healthgrades or Zocdoc badge. No BBB or chiropractic association logo. No "verified reviews" widget. Real chiro practices that convert have external proof, not just on-site testimonials.
- No address map embed or street view — location authenticity is a trust signal for local businesses.
- The "500+ Patients helped" stat has no citation or context. How long has the practice been open? If 10+ years and only 500 patients, that's actually a low number. If it's 500 active recurring patients, that reads differently. The stat is vague.

---

### 4. Content Quality — 6.0 / 10

**What works:**
- Hero headline "You Deserve to Feel Good Again" is patient-empathy focused, not jargon-heavy. Better than "Comprehensive Chiropractic Services."
- Subhead "listens first and treats second" is differentiated positioning copy. That's a genuine value prop.
- "We don't believe in one-size-fits-all care" — patient-centric framing.
- Service descriptions are concise and benefit-oriented rather than clinical/technical.
- About copy: "No pressure, no upsells — just honest, effective care" is credible and addresses a real patient fear about chiropractic sales tactics.

**What hurts:**
- The doctor has no last name and no school/graduation year, no mention of where they trained. Healthcare consumers check credentials. "Doctor of Chiropractic (DC)" as a credential list item is table stakes — where did Dr. Jason get that DC? 
- Services section lists 6 services but zero pricing, zero "first visit" framing, zero insurance information within service cards. Patients wonder "will this be covered?" constantly.
- No FAQ section. Chiropractic has significant patient anxiety: "Will it hurt?" "How many visits will I need?" "Is cracking safe?" Addressing these would reduce friction dramatically.
- No address on the footer — patients typically look for location in the footer. The address only appears in the contact section.
- The contact section says "fill out the form and we'll get back to you within a few hours" — but the form has no backend. It submits, shows a fake "Message Sent ✓" state for 4 seconds, then resets. The message goes nowhere. Patients who submit this form and never receive a response will have a negative experience. This is a functional deception issue.
- "Same-day Appointments" is claimed in the hero but is not expanded on in the contact or booking section. What does same-day mean — call and ask? The form? It's an orphaned claim with no follow-through.

---

### 5. Contact / Booking UX — 5.0 / 10

**What works:**
- Form design is clean and usable — labels, logical field order, "what brings you in" dropdown is a smart friction-reducer.
- Contact info section is well-laid-out with iconography.
- Hours are listed (Mon–Fri 8am–6pm, Sat 9am–1pm) — essential info present.

**What hurts:**
- Form is non-functional. The submit handler calls `e.preventDefault()` and fakes a success state. There is no `fetch()`, no `mailto:` fallback, no FormSpree/Netlify endpoint. Any patient who submits this form has their inquiry silently discarded. This is the most serious functional flaw on the site.
- Phone number is not a `<a href="tel:+16105550100">` link. Untappable on mobile.
- Email is not a `<a href="mailto:hello@stellarchiropractic.com">` link. Not clickable anywhere.
- No online scheduling integration. Most competitive chiro sites (and certainly any 7.0+ site) link to Jane App, Calendly, ChiroFusion scheduling, or at minimum a simple calendar embed. "Book Your Appointment" as a CTA that leads to a contact form is a downgrade from expectations in 2026.
- No map embed. Patients navigating to a new practice for the first time want to see the location on a map. The address text alone is insufficient.
- The "Book Appointment" nav CTA scrolls to the contact form — fine — but the contact form is dead. Every "Book" CTA on the page leads to a non-functional dead end.

---

### 6. Services Presentation — 6.5 / 10

**What works:**
- Six services is a reasonable number — not overwhelming, covers the core offering.
- Custom SVG icons for each service category — not stock icon-font, shows effort.
- Card layout with hover interaction is clean.
- Benefit-oriented descriptions rather than clinical procedure names.
- "Wellness Plans" card addresses recurring/preventive care — good for LTV signaling.

**What hurts:**
- No pricing or "starting from" indication. Chiro pricing varies wildly; patients want at least a ballpark.
- No "new patient special" or introductory offer. This is a near-universal conversion tactic on competitive chiro sites that actually convert.
- No indication of which services are covered by insurance vs. self-pay.
- Service cards have no CTA. A patient reading about Sports & Injury Rehab has no way to signal interest in that specific service — all roads lead to the same generic contact form.
- No indication of session length. 30 minutes? 60 minutes?
- Massage Therapy is listed as a service — is this in-house staff or a referral? Patients would want to know.

---

### 7. Overall Feel — 6.0 / 10

Visiting this site as a patient who just tweaked their back and is comparison-shopping 3 local chiropractors:

The site looks more polished than average. The color palette is calming, the typography is professional. It passes the "does this look like a real business" visual sniff test — barely. But 30 seconds in, you notice there's no actual photo of the doctor. You try to call the number and it's fake. You submit the form and never hear back. The testimonials have no Google link to verify. You can't tap the phone number on your phone. You don't know the doctor's last name.

This is the gap between a well-designed template and a site that actually converts patients. Visual polish without operational credibility gets a patient interested but not committed. The conversion funnel is broken at every action point: the phone doesn't dial, the email doesn't link, the form doesn't send, and the booking CTA leads nowhere real.

---

## Top 3 Priorities (Highest Impact)

### Priority 1: Fix the Contact Form + Make Phone/Email Tappable
The entire site's conversion funnel is broken. The form silently discards all submissions — this is a patient loss machine. Immediate fixes needed:
- Wire the form to a real backend: FormSpree (free tier), Netlify Forms, or EmailJS.
- Wrap the phone number in `<a href="tel:+16105550100">(610) 555-0100</a>`.
- Wrap the email in `<a href="mailto:hello@stellarchiropractic.com">hello@stellarchiropractic.com</a>`.
- Replace placeholder phone/email with real contact details.
- Consider adding an online scheduling link (Jane App, Calendly) as the primary CTA instead of or alongside the form.

### Priority 2: Replace Placeholder Photo + Complete Doctor Identity
The grey silhouette in the About section is the most trust-damaging element. A patient evaluating whether to book with a chiropractor needs to see the doctor's face. Required:
- Replace the placeholder with a real headshot of Dr. Jason.
- Add Dr. Jason's last name (and ideally school, graduation year, state license number visible or linked).
- Add at least one photo of the office/treatment room in the hero or about section.
- Real photography will do more for conversion than any CSS refinement.

### Priority 3: Add External Review Proof + Replace Fabricated Testimonials
Three unverified, unattributed 5-star reviews with no platform link read as written testimonials. They create suspicion rather than trust in a skeptical patient. Needed:
- Add a Google Business Profile and link to real Google reviews.
- Replace or supplement on-site testimonials with a Google Reviews embed/badge showing the real rating and review count.
- Even adding "See our Google Reviews →" with a link to a real profile is a massive trust improvement over the current self-referential testimonials.
- Add association memberships (ACA, state chiropractic association) as logo/badge trust signals.

---

## Secondary Issues (Fix After Top 3)

- **FAQ section missing** — Address "Is it painful?", "How many visits?", "Insurance accepted?" to reduce pre-booking anxiety.
- **No new patient offer** — A first-visit discount or free consultation offer would significantly increase form submissions.
- **Map embed absent** — Embed Google Maps iframe in the contact section for location authenticity.
- **Hero empty right column** — On desktop, the right half of the hero is entirely empty. Add a photo, illustration, or office image.
- **No online scheduling** — In 2026, patients expect to book without calling. A Calendly embed would be a significant UX upgrade.
- **Services cards lack individual CTAs** — Each service card should have a "Learn more" or "Book for [service]" link.
- **Hard-coded `<br>` in hero heading** — The line break `You Deserve to Feel<br><em>Good Again</em>` may break awkwardly on mobile screen widths.
- **Nav "Book Appointment" on mobile** — Both the nav CTA and mobile menu CTA lead to the contact form, which is non-functional. Mobile users tapping "Book" are hitting a dead end.

---

## What Would Move This to 7.0+

1. Real doctor photo and full name with verifiable credentials.
2. Functional form with real email delivery.
3. Google Reviews embed with real rating.
4. At least one real office/treatment room photo.
5. Online scheduling option (not just a form).
6. Clickable phone and email links.

Completing those six items would produce a site that genuinely outperforms most local chiro practices. The design foundation is solid — the blocking issues are operational and content-based, not structural.
