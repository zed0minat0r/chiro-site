<!-- QA Report — Stellar Chiropractic
     Tested: 2026-04-06
     Device: 375px mobile width (iPhone SE/X equivalent)
     Tool: Playwright 1.59.1 headless Chromium
     Tester: QA Agent
-->

# QA Report — Mobile 375px

## CRITICAL Issues

### 1. Horizontal Scroll / Body Overflow
- **Body scrollWidth is 420px** on a 375px viewport — the page has 45px of horizontal overflow causing unwanted horizontal scrolling.
- **Root cause:** The `.value-strip-cta .btn` button renders at 420px wide, exceeding the viewport. The button text ("Ready to feel better? Book your first visit →") does not wrap because `.btn` has `white-space: nowrap` set globally. At 375px there is no override to allow wrapping or constrain width.
- **Secondary cause:** The `.hero__visual-card--bottom` element (third hero visual card) extends to `right: 524px`, well beyond the viewport. While `.hero__visual` has `overflow-x: auto`, the parent or body is still reporting the wider scroll width.

### 2. Form Action is a Placeholder
- The contact form action is set to `https://formspree.io/f/placeholder` — form submissions will fail. This must be replaced with a real Formspree endpoint (or equivalent) before the site goes live.

---

## HIGH Issues

### 3. Hero Visual Cards Overflow Off-Screen
- The third hero card (`.hero__visual-card--bottom`) renders with `right: 524px` (149px beyond viewport).
- The horizontal scroll strip approach works visually, but the cards extend beyond the viewport boundary, contributing to the body-level overflow. The `margin: 0 -20px` on `.hero__visual` combined with fixed-width cards (160px each x 3 = 480px + gaps + padding) exceeds 375px.

### 4. Small Text Below 12px (Readability Concern)
The following text elements render below the recommended 12px minimum for mobile readability:
- **Hero trust bar spans** (`Patients helped`, `Experience`, `Appointments`): **10.88px** — very small, hard to read
- **Section labels** (`.section__label`): **11.68px** across all sections (Services, Journey, About, Testimonials, FAQ, Contact)
- **Testimonial badges** (`.testimonial-card__badge` — "Verified Patient"): **11.2px**
- **Insurance strip label**: **11.68px**
- **Wellness tips "from" line**: **11.68px**
- **Contact prep heading** ("Your First Visit — What to Expect"): **11.68px**

### 5. Small Tap Targets (Below 44px Minimum)
Multiple interactive elements are below the 44x44px recommended minimum tap target:
- **Service card CTAs** ("Book for this →"): **95x21px** — very small, six instances
- **Nav logo**: **167x26px** (height too short)
- **Testimonial rating link** ("See our reviews on Google →"): **194x21px**
- **Contact links** (phone, email): **~115-212 x 23px**
- **Footer links** (Services, About, Reviews, FAQ, Contact): **~29-55 x 26px**
- **Footer address/phone links**: **~116-284 x 22px**
- **Reason select dropdown**: **293x43px** (1px short of 44px, borderline)

---

## MEDIUM Issues

### 6. Services Section — Nav Overlay on Scroll
- When scrolling within the services section, the fixed nav overlaps the section heading area. The section does not appear to have sufficient `scroll-margin-top` or `padding-top` to account for the 68px fixed nav height. (Note: anchor navigation to `#services` lands correctly with offset, but continuous scrolling shows the nav floating over card content.)

### 7. Journey Section — Connector Arrows Appear Faint
- The journey connector arrows between steps are very faint/subtle on mobile — nearly invisible in screenshots. The vertical connector SVGs (`.journey__connector-v`) may need stronger color or size for mobile visibility.

### 8. Value Strip — Text-on-Dark-Background Readability
- The value strip section uses white text on the teal background. The description text appears slightly low-contrast at smaller sizes. Consider verifying WCAG AA compliance for the body text on this background.

---

## LOW Issues

### 9. Footer Link Spacing
- Footer navigation links (Services, About, Reviews, FAQ, Contact) are closely spaced. On mobile, adjacent tap targets may be difficult to tap accurately given their small size (26px height) and tight spacing.

### 10. Wellness Tips — Nav Floats Over Content
- When the wellness tips section is at the top of the viewport, the fixed nav bar covers the avatar and "A note from Dr. Jason" header. This is a general consequence of the fixed nav across all sections but is most noticeable here due to the compact header area.

### 11. Contact Section — Info Items Center-Aligned Text
- At 480px and below, `.contact__info-item` is set to `text-align: center`, but the items still use a flex row layout with icon + text. The centered text alignment with left-aligned icons creates a slightly inconsistent visual.

---

## INFORMATIONAL

### 12. Reveal Animations
- All `.reveal` elements start with `opacity: 0` and rely on IntersectionObserver to become visible. The `prefers-reduced-motion` media query correctly disables animations and sets `opacity: 1`. No functional issue, but worth noting that if JavaScript fails to load, all reveal content will be invisible.

### 13. Placeholder Phone Number
- The site uses `(610) 555-0100` throughout — this is a placeholder/fictional number (555-xxxx range). Needs real number before launch.

### 14. Placeholder Email
- `hello@stellarchiropractic.com` — confirm this is a real, monitored inbox before launch.

---

## Summary

| Severity | Count |
|----------|-------|
| Critical | 2     |
| High     | 3     |
| Medium   | 3     |
| Low      | 3     |
| Info     | 3     |

**Top priority fixes:**
1. Fix the `.value-strip-cta .btn` overflow (add `white-space: normal` or `max-width: 100%` at mobile breakpoints)
2. Constrain hero visual cards so they do not contribute to body-level horizontal scroll
3. Replace Formspree placeholder with real endpoint
4. Increase tap target sizes for service card CTAs and footer links
5. Bump hero trust bar text from 10.88px to at least 12px
