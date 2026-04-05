# Stellar Chiropractic — Nigel Audit
**Date:** 2026-04-04  
**Auditor:** Nigel (strict patient-perspective scoring)  
**URL:** https://zed0minat0r.github.io/chiro-site/  
**Overall Score: 6.2 / 10**

---

## Scoring Reference
- 5.0 = average/basic chiropractic site
- 6.0 = generic template — competent but indistinct
- 7.0 = genuinely better than most chiro sites (a patient would notice)
- 8.0 = patient would choose this practice over competitors based on the website alone

---

## Section Scores

| Category | Score | Notes |
|---|---|---|
| Visual Design | 6.8 | Clean and coherent, but relies on a grey silhouette where a real photo should be |
| Mobile UX (375px) | 6.5 | Solid mechanics; hero visual correctly hidden on mobile; trust bar wraps awkwardly |
| Trust Signals | 5.0 | All three key trust signals are placeholders — kills credibility entirely |
| Content Quality | 6.5 | Copy is warm and patient-focused; FAQ is genuinely useful |
| Contact / Booking UX | 6.0 | Form UI is good but FormSpree placeholder means it literally cannot deliver submissions |
| Services Presentation | 6.8 | Six services with icon + copy + CTA per card — better than average |
| FAQ | 7.0 | Six real questions, PA-specific referral answer, honest timeline messaging |
| Overall Feel | 6.5 | Professional and modern; held back entirely by placeholder infrastructure |

---

## Detailed Findings

### 1. Visual Design — 6.8

The color palette (teal `#2d7d62`, warm cream, white) is tasteful and medically appropriate. The typography pairing (Lora display / Nunito body) is warm but professional — a good choice. The hero layout with floating info cards is a step above most chiro sites, which default to stock photo + h1. Scroll-reveal animations are subtle and well-timed (80ms stagger per card). The sticky nav with blur backdrop is polished detail work.

**Issues:**
- The hero right column (floating cards) is hidden entirely on mobile. On desktop it adds visual interest; on mobile you lose that structure with nothing replacing it.
- The overall aesthetic reads "well-made template" rather than a distinctive practice identity. There is no real photography anywhere — only SVG icons and a grey silhouette placeholder.
- The doctor photo section is a grey gradient rectangle with a generic SVG silhouette. This is the single biggest visual liability on the page. It signals unfinished work to every visitor.

---

### 2. Mobile UX (375px) — 6.5

- Burger menu opens smoothly with overlay dismiss and Escape key — correct behavior.
- Hero heading at `2.2rem` is readable at 375px.
- CTA buttons stack vertically at <480px — correct.
- Trust bar wraps to flex-wrap with dividers hidden — functional but the items feel untethered without the dividers.
- Services, testimonials, FAQ, and contact form all drop to single column appropriately.
- Contact form padding reduces to `28px 20px` — still comfortable to fill out.

**Issues:**
- The hero section on mobile contains: badge → heading → subhead → two CTAs → trust bar → scroll hint. This is substantial vertical length before reaching any content. The `margin-bottom: 52px` on the CTA group pushes the trust bar far down; the hero feels very long on a 375px screen.
- The about section photo placeholder caps at `max-width: 320px` — fine for a real photo, but the grey silhouette is even more jarring at mobile size where it dominates the viewport.
- No prominent tap-to-call anywhere in the mobile header or as a sticky element. The phone number exists in the contact section but a patient on their phone has to scroll the entire page to reach it.

---

### 3. Trust Signals — 5.0

This is the most critical failure category. Three of the four core trust signals are confirmed placeholders.

**Placeholder phone — (610) 555-0100:** This is a non-working number. It appears in: the contact section, the footer, and in the `main.js` error fallback copy (line 100: "call us directly at (610) 555-0100"). A patient who calls gets nothing; a patient who triggers a form error is told to call a fake number.

**Placeholder email — hello@stellarchiropractic.com:** The domain may not exist. If a patient emails and bounces, the practice appears nonexistent.

**Placeholder FormSpree ID — `action="https://formspree.io/f/placeholder"`:** All form submissions will fail. The JS handles the error state with a red error message, but a patient who fills out the form and hits an error will not try again. This is a broken conversion path.

**Testimonials — no source attribution:** Three reviews with first name + last initial and condition. They are plausible but have no platform attribution (Google, Healthgrades, Yelp). A skeptical patient will read them as written by the site builder. No star count, no date, no review platform logo.

**Doctor credentials — incomplete:** "Sports & Rehabilitation Certified" names no certifying body. Which certification? CCSP, ART, GRASTON? "Doctor of Chiropractic (DC)" is accurate but the chiropractic school and graduation year are absent. No Pennsylvania license number, no NPI. These are public records that add instant, verifiable credibility.

**No Google Business link.** In 2026, a patient's first move after landing on a chiro site is to check the Google Business profile for real reviews. There is no link, no rating badge, no pathway to verification.

---

### 4. Content Quality — 6.5

The copy is genuinely better than the typical chiro site template. Phrases like "Listens first, treats second," "No pressure, no upsells — just honest, effective care," and "No open-ended treatment plans" directly address real patient anxieties. The FAQ answer about referrals includes the Pennsylvania-specific detail ("No referral is needed in Pennsylvania") — a good touch showing local awareness.

**Issues:**
- "Dr. Jason" has no last name anywhere on the site. Patients Google their healthcare providers before booking. There is no full name to search and no result to find.
- The About bio reads like a template with a first name inserted. No mention of where Dr. Jason trained, why he opened in Phoenixville, what drew him to chiropractic. Nothing specific.
- "Sports & Rehabilitation Certified" names no institution. Patients cannot verify this.
- No new patient preparation info: what to bring, what to wear, how long the first visit takes. This information removes friction that prevents bookings.
- "Most Insurance Plans Accepted" appears twice but no specific insurers are named. A patient with Blue Cross or Aetna cannot confirm coverage without calling — and the phone number is a placeholder.

---

### 5. Contact / Booking UX — 6.0

The form structure is well-designed: name, phone, email, reason dropdown (6 sensible options), and free-text message. The reason dropdown is a good touch. The JS form handler provides loading, success, and error states — this is more than most chiro sites implement.

**Issues:**
- The FormSpree `placeholder` ID makes the form completely non-functional. Zero submissions will be received.
- The error fallback references the placeholder phone number — a patient who gets a form error is directed to call a disconnected line.
- No real-time booking. The CTA says "Book Your Appointment" but the flow is: fill form → wait for callback. In 2026 patients expect live scheduling (Jane App, Calendly, ChiroTouch portal).
- Each service card CTA links to `#contact` but does not pre-populate the reason dropdown. A patient who clicks "Book for Headache & Migraine Relief →" arrives at a blank form. Small JS change (URL parameter → pre-select option) that meaningfully reduces drop-off.
- No embedded map. The address links to Google Maps (correct) but a visible map embed builds local confidence on the contact section.
- Saturday hours listed but no note on whether Saturday requires advance booking vs. walk-in.

---

### 6. Services Presentation — 6.8

Six services in a 3-column grid with icon, heading, description, and per-service CTA link is a solid implementation. The hover state (icon background flips to solid teal) is a good micro-interaction. Descriptions use patient language, not clinical jargon.

**Issues:**
- Service card CTAs do not pre-populate the contact form dropdown — see Contact section.
- "Massage Therapy" description frames it as preparation for chiropractic care, not as an independent service. This may confuse patients seeking massage-only.
- No pricing or "starting from" indication anywhere. Complete cost opacity is a friction point for uninsured patients and those comparing options.
- The spinal adjustment and headache relief icons are visually similar at a glance (both vertical line motifs). They don't clearly differentiate the services on a quick scan.

---

### 7. FAQ — 7.0

The FAQ is one of the stronger sections. Six relevant questions with honest, specific answers. Notable highlights:
- "No open-ended treatment plans, no pressure to commit upfront" — directly counters a known patient fear.
- Pennsylvania-specific referral answer is accurate and locally useful.
- The `<details>/<summary>` implementation with `+` → rotated `×` is accessible and clean.

**Issues:**
- Two-column desktop layout shows mismatched item heights when multiple FAQs are open simultaneously — visually uneven.
- No question about cancellation, rescheduling, or late arrival policy — real patient anxieties.
- No question about parking, building accessibility, or wheelchair access — common for a suburban PA practice.

---

### 8. Overall Feel — 6.5

The site is polished in execution — visibly built with care. Typography, color system, spacing, and microinteractions are above the average chiropractic site. A first-time patient would think: "This looks professional."

But the moment they try to act — call the number, submit the form, look up the doctor — they hit a wall. The site is a well-designed shell with no working infrastructure. The higher the production quality, the more jarring the placeholder phone number and grey silhouette are. Trust is built or destroyed in those moments of action.

In its current state, this site cannot convert a single patient.

---

## Top 3 Priorities (Must Fix Before Launch)

### PRIORITY 1 — Replace All Placeholder Contact Info (Blocking)
The site cannot function as a patient acquisition tool until this is done.

- Replace `(610) 555-0100` with the real phone number. It appears in three places: contact section HTML, footer HTML, and `main.js` line 100 (error fallback copy).
- Replace `hello@stellarchiropractic.com` with a real, actively monitored email address.
- Replace `https://formspree.io/f/placeholder` in the form `action` attribute with the real FormSpree form ID. Then test end-to-end: submit the form, confirm the submission arrives. Only then can the form generate patient inquiries.

**Estimated impact if fixed:** Enables all form and call conversions. Without this, the site generates zero leads.

---

### PRIORITY 2 — Add Real Doctor Identity and Photo (Trust)
The grey silhouette placeholder is the most visible signal that this site is unfinished.

- Replace the `about__photo-placeholder` SVG with a real headshot of Dr. Jason. A professional-quality photo shot on a phone is vastly better than the current placeholder.
- Add the doctor's full last name throughout. "Dr. Jason" is unsearchable. Patients Google their healthcare providers before booking. A full name enables them to find licensure records, reviews, and background information.
- Name the certifying body for "Sports & Rehabilitation Certified." If this is a CCSP, ART, or Graston certification, say so. These are verifiable credentials that build real trust.
- Consider adding the Pennsylvania chiropractic license number and/or NPI number. Both are publicly searchable and add instant, unambiguous credibility that no placeholder stat can match.

**Estimated impact if fixed:** Moves the trust signal score from 5.0 toward 6.5+. A real photo alone typically increases time-on-page and inquiry rate significantly.

---

### PRIORITY 3 — Fix the Booking Flow and Add Click-to-Call on Mobile (Conversion)
The site promises booking but delivers a contact form with a callback promise.

- Integrate a real scheduling tool (Jane App, Calendly with appointment types, or ChiroTouch patient portal). If real-time booking is not yet feasible, at minimum make the form functional (Priority 1) and set response time expectations clearly.
- Add a prominent tap-to-call button in the mobile header or as a floating element on mobile screens. At 375px, a patient has to scroll the entire page to find the phone number. A sticky "Call Us" button on mobile is standard for any healthcare site expecting walk-in or same-day requests.
- Pre-populate the "What brings you in?" dropdown when a patient clicks a service card CTA. This is a small JS change: each service card CTA appends `?reason=X` to the URL, and on load the contact section reads the parameter and pre-selects the dropdown option.

**Estimated impact if fixed:** Reduces drop-off between intent and action — the most common conversion failure on service-based local business sites.

---

## Secondary Issues (Fix Post-Launch)

- Link to or embed the Google Business profile / review count. Patients need a path to verified reviews.
- Name specific insurance plans accepted (Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, etc.).
- Add new patient prep information: what to bring, what to wear, how long the first visit takes, parking.
- Add an accessible parking / building access FAQ entry.
- Add a cancellation/reschedule policy FAQ entry.
- Tighten the mobile hero layout — reduce `margin-bottom` on `.hero__cta-group` from `52px` to ~`32px` to shorten the fold on 375px screens.
- Consider whether the "Massage Therapy" card should be reframed as an independent offering rather than chiropractic preparation.
- Add some form of self-pay pricing range or "call for pricing" language to address cost concerns upfront.

---

## Summary

Stellar Chiropractic's site is visually and structurally above average for the chiropractic category. The FAQ is genuinely good. The copy addresses real patient anxieties. The mobile mechanics work correctly. But the site is entirely non-operational: the form cannot send, the phone is disconnected, the email may bounce, and the doctor has no verifiable identity. Fix the three priority items and the score should rise from **6.2 to approximately 7.2–7.5**. Add real-time booking, verified reviews, and a named doctor with real credentials, and it could reach **7.8**.

**Overall Score: 6.2 / 10**
