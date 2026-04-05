# Stellar Chiropractic — Nigel Audit
**Date:** 2026-04-04
**Auditor:** Nigel (strict patient-perspective scoring)
**URL:** https://zed0minat0r.github.io/chiro-site/
**Scale:** 5.0 = average chiro site · 7.0 = genuinely better than most · 8.0 = patient would choose this over competitors

---

## Overall Score: 6.3 / 10

This site is meaningfully better than most local chiropractic practices — the copy is warm and patient-first, the layout is clean, and the UX polish (animations, mobile menu, form states) is well above template-level work. But from a real patient's perspective, several trust-breaking issues prevent it from cracking 7.0. The biggest problems are unresolved placeholders that destroy confidence the moment a patient tries to act.

---

## Section-by-Section Audit

### Navigation — 7/10
- Fixed nav with scroll-triggered border/shadow: correct behavior.
- "Book Appointment" CTA visible on desktop — right placement.
- Mobile: burger + call-icon pattern is smart; patients who land on mobile can tap to call instantly.
- **FAIL:** The nav call button links `tel:6105550100` — a 555 number. A patient who taps it gets a dead line. Trust-destroying on first interaction.
- Logo inline SVG (spine motif) loads instantly, no broken-image risk, tasteful.

### Hero Section — 6.5/10
- Headline "You Deserve to Feel Good Again" is emotionally resonant and patient-centered.
- Copy hierarchy (badge → italic eyebrow → h1 → sub-headline) is well-structured.
- Trust bar ("Hundreds · 10+ yrs · Same-day") is credible without being overblown.
- Dual CTA (primary + outline) is the correct pattern.
- **ISSUE:** The three floating visual cards (Insurance Accepted / Root Cause / No Upsells) are hidden at ≤768px via `display:none`. Mobile patients — likely the majority — never see these differentiators. The hero on mobile is pure text + trust bar, which is fine but loses visual interest.
- Hero background is pure CSS gradient — no image dependency, instant load. Good.

### Services Section — 7/10
- 6 services is the right scope for a generalist practice.
- Each card: icon + title + description + CTA anchor. Pattern is complete.
- All "Book for this →" CTAs anchor to `#contact` — no broken links.
- Icons are hand-crafted SVGs, not library icons — feels intentional.
- **ISSUE:** Massage Therapy icon is a generic rectangle/lines shape that reads as a "document." A patient scanning icons quickly will not register what it represents.
- 6 single-column cards on mobile is a long scroll — consider grouping or a carousel in a future build.

### Patient Journey (How It Works) — 7.5/10
- 4-step numbered flow is best-practice for chiro sites.
- Specific copy ("about 30 minutes," "Dr. Jason listens first — really listens") feels real, not templated.
- "Real timeline, not an open-ended commitment" directly addresses the #1 patient fear about chiro. Excellent.
- Horizontal arrow connectors work on desktop.
- **ISSUE:** On mobile the horizontal arrows rotate 90° and stack vertically, but they look misaligned between steps. A simple vertical dotted line or small down-arrow icon would read more naturally.
- Step icons have `aria-hidden="true"` — correct; text carries the meaning.

### Value Strip (Why Choose Us) — 6.5/10
- Teal full-width band with 3 value props provides strong visual break in the page.
- "No Open-Ended Commitments" and "We Listen Before We Treat" are the two most differentiated messages on the page. Smart placement.
- Stagger entrance animation on scroll is polished.
- **ISSUE:** At ≤1024px the 3-column collapses to 2-column with the third item spanning full width (`grid-column: 1 / -1`). "Same-Day Appointments" floats alone on its own row — visually lopsided.
- **ACCESSIBILITY ISSUE:** `value-strip__desc` is `rgba(255,255,255,0.75)` on #2d7d62 teal. Approximate contrast ratio ~3.7:1 — fails WCAG AA for normal text (requires 4.5:1). The 0.9rem font at this contrast is borderline unreadable for low-vision users.

### About / Dr. Jason — 5.5/10
- Copy quality is strong: "no pressure, no upsells — just honest, effective care" is exactly what anxious new patients need.
- Credentials list (DC, Sports Certified, 10+ yrs, PA Association) is credible.
- **KNOWN PLACEHOLDER:** Photo is a "DJ" initials placeholder on a teal gradient. This is the most damaging trust element on the page. Chiropractic is hands-on, personal care — patients weight "does this doctor seem trustworthy" heavily from a photo. A placeholder signals the practice is unfinished.
- **ISSUE:** Dr. Jason has no last name anywhere on the page. A patient cannot Google the doctor, check credentials on the PA Chiropractic Association board, or look up reviews by name. "Dr. Jason" reads as a holding name, not a real professional identity.
- "Sports & Rehabilitation Certified" lists no certifying body. A skeptical patient will wonder if this is a real credential.
- "DC · Licensed Chiropractor" badge on the photo placeholder is redundant with the credentials list directly beside it.

### Wellness Tips Section — 6.5/10
- "A note from Dr. Jason" framing adds personality and demonstrates expertise without a photo.
- Three tips are genuinely useful and specific. This section differentiates from the majority of chiro sites.
- Quote at the bottom is a nice personal touch.
- **ISSUE:** The wellness tips section uses another "DJ" initials circle. Two initials-avatars on the same page compounds the "no real doctor photo" problem.
- Mobile layout (header collapses to centered column) works well.

### Testimonials — 5.5/10
- "See our reviews on Google →" links to Google Maps address search, not a Google Business Profile review page. A patient who clicks to verify reviews gets a map, not reviews.
- Three testimonials cover good variety: neck pain, migraines, sports injury.
- **ISSUE:** All three are first name + last initial only, with no date, no platform source, no "verified patient" badge. Every chiropractic site has cards that look exactly like this. Without attribution, patients will discount them.
- "Real Results, Real People" heading is an oversell when nothing on the card proves these are real.
- No aggregate review count visible. "Rated 5.0" with no denominator (e.g., "47 reviews") is less convincing than a real count would be.
- Only 3 testimonials for a practice claiming "hundreds of patients helped." Thin.

### Insurance Strip — 7.5/10
- Naming Aetna, BCBS, Cigna, UnitedHealth, Humana, Medicare as visual pills is clear and reassuring.
- "We'll verify your benefits before your first visit — no surprises." — exceptional copy. Addresses the #1 financial anxiety before the patient even has to ask.
- **FAIL:** "Call us" points patients to (610) 555-0100 — the fake number. Patient who calls gets nothing.

### FAQ — 7.5/10
- 6 FAQs cover the most-asked chiro questions at above-average quality.
- "Dr. Jason will give you an honest timeline — no open-ended treatment plans, no pressure to commit upfront" is trust-building and differentiated.
- `details`/`summary` accordion with `+` → rotated `×` animation is clean and accessible.
- FAQ answer fade-in via JS `animation` reset + reflow trigger works correctly.
- 2-column grid on desktop is sensible for 6 items.

### Contact Section — 5.5/10
- Info-left / form-right layout is standard and correct.
- "Your First Visit — What to Expect" prep box is excellent. Patients arrive less anxious knowing what to bring.
- Form fields are well-labeled. The reason dropdown is a smart patient qualification step.
- JS form handling covers loading, success, and error states — professional.
- **KNOWN PLACEHOLDER — CRITICAL:** `action="https://formspree.io/f/placeholder"` — form is not connected to a real endpoint. Any submission returns an error. The form then tells patients to call (610) 555-0100 — the fake number. Both fallback channels fail simultaneously.
- **KNOWN PLACEHOLDER:** Email `hello@stellarchiropractic.com` — almost certainly not a live inbox.
- **KNOWN PLACEHOLDER:** Phone `(610) 555-0100` appears 4 times in HTML (nav, contact info, footer, JS error fallback).
- Hours listed without timezone — minor for a local practice.

### Footer — 7/10
- Dark footer with logo, nav links, address/phone — clean execution.
- Address links to Google Maps — correct.
- Copyright 2026 — current year.
- **ISSUE:** No social media links (Facebook, Instagram, Google Business). Local health practices live on neighborhood word-of-mouth and social proof. Missing socials is a material gap for local discovery.
- Footer phone is still (610) 555-0100.

---

## Visual Design & Polish — 7.5/10
- Palette: Teal (#2d7d62) on warm off-white (#f7f3ee) is a strong, professional healthcare combination. Not clinical-cold, not garish.
- Typography: Lora (headings/display) + Nunito (body) is a well-matched pairing — authoritative but friendly.
- Spacing is generous and consistent. 96px section padding suits the content weight.
- Reveal animations are tasteful and purposeful — not overdone.
- Responsive breakpoints (1024px, 768px, 480px, 375px) are thorough.
- The entire site is SVG + CSS, no raster images. Loads fast, no broken images. Slight downside: the page feels slightly sterile despite the warm palette because real photography adds warmth that CSS gradients cannot replicate.

---

## Accessibility — 6.5/10
- Mobile menu: `aria-hidden`, `aria-expanded` toggled correctly in JS.
- All decorative SVGs: `aria-hidden="true"` — correct.
- Form labels properly associated via `for`/`id` pairs.
- Burger button: `aria-label="Open menu"` present, `aria-expanded` updated — correct.
- Star ratings: raw Unicode ★ characters with `aria-label="5 stars"` — acceptable.
- Color contrast: `--text` (#1a1a1a) on white passes AAA. Teal on white passes AA for large text.
- **FAIL:** `value-strip__desc` rgba(255,255,255,0.75) on #2d7d62 — ~3.7:1 contrast, fails AA for normal text.
- **MISS:** No skip-to-content link. Keyboard users tab through all nav links before reaching any content.

---

## Technical / Performance — 7/10
- No external JS dependencies. Pure vanilla. Lightweight.
- `IntersectionObserver` for scroll reveals — modern, correct, no polling.
- Google Fonts loaded with `preconnect` hints — correct.
- Inline `data:` favicon — no extra HTTP request. Clever.
- Open Graph meta tags present — correct.
- `passive: true` on scroll listener — correct performance optimization.
- **MISS:** No `og:image`. When shared via iMessage or social media, the preview shows a blank card. Local referrals travel primarily through text/social — this is a real missed conversion.
- **MISS:** No structured data (JSON-LD `LocalBusiness` or `MedicalBusiness` schema). Google cannot confidently display this practice in the local search panel (address, hours, phone, map pin) without it.
- CSS is ~1838 lines in a single file — manageable now, will need splitting as the site grows.

---

## Known Placeholder Impact Summary
| Placeholder | Locations | Patient Impact |
|---|---|---|
| `(610) 555-0100` | Nav call button, contact, footer, JS error fallback | All calls fail — immediate hard trust break |
| `formspree.io/f/placeholder` | Contact form `action` | All form submissions fail silently then error |
| `hello@stellarchiropractic.com` | Contact info | Direct emails likely undelivered |
| Photo placeholder (DJ initials) | About section, wellness tips avatar | Major personal trust deficit across two sections |
| No doctor last name | About section, throughout | Cannot verify credentials or find reviews |

---

## Top 3 Priorities for Next Build

### Priority 1 — Replace all placeholder contact information
`(610) 555-0100` appears four times including the JS error fallback. The FormSpree form endpoint is unconnected. The email is likely inactive. Right now, every contact channel on this site is non-functional simultaneously. A patient who calls, submits the form, or emails hits a dead end in all three directions. This is not a polish issue — it is a fundamental operational blocker. No amount of design improvement matters while patients cannot reach the practice.

### Priority 2 — Get a real photo of Dr. Jason (with full name)
The About section photo placeholder is the most trust-damaging element on the page. Chiropractic is intimate, personal care. Patients choose a chiropractor based heavily on "does this person seem trustworthy." A gradient with initials signals an incomplete website. A professional headshot — even a high-quality phone photo in good light — transforms the About section into a genuine trust asset. Simultaneously: add Dr. Jason's last name. Patients need to be able to search the doctor's name to verify credentials. "Dr. Jason" alone reads as a holding name, not a real practitioner.

### Priority 3 — Add JSON-LD structured data and an og:image
Without `LocalBusiness` schema markup, Google cannot confidently display this practice in local search results — no phone, no hours, no address in the knowledge panel. This directly affects how many new patients find the site. An `og:image` (a 1200×630 branded card) ensures the site previews correctly when patients share the link via iMessage or social media, which is the primary referral channel for local health practices. Both are code-only changes requiring no design work.

---

## What's Working Well (preserve these)
- "No open-ended commitments" messaging is genuinely differentiated — most chiro sites do the opposite
- Insurance strip benefit-verification copy is exceptional
- FAQ content quality is above average for the category
- Patient Journey section specifics ("about 30 minutes," "Dr. Jason listens first — really listens") feel real
- Responsive CSS is thorough and detailed down to 375px breakpoints
- All animations are purposeful and tasteful — do not remove or reduce them
- The hero trust bar ("Hundreds · 10+ yrs · Same-day") is credible and well-calibrated

---

*Audit by Nigel — scored strictly from the perspective of a new patient landing on this page for the first time.*
