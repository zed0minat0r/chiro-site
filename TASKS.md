# Tasks — Stellar Chiropractic

## Wave 1 (Builder + Spark)

### Builder Tasks
- [x] Add `prefers-reduced-motion` media query — disable all animations/transitions when user prefers reduced motion (bouncing scroll hint, staggered reveals, trust-pop, FAQ fade-in)
- [x] Add FAQPage JSON-LD structured data schema for Google rich results — extract Q&A from the existing FAQ section
- [x] Wire service card "Book for this" CTAs to pre-populate the contact form's "reason" dropdown when clicked
- [x] Add per-field form validation with inline error messages (email format, required fields) — replace the `novalidate` approach

### Spark Tasks
- [x] Fix value strip text contrast — change `rgba(255,255,255,0.92)` to full `#fff` or ensure AA contrast on teal background
- [x] Add a CTA button after the value strip section ("Ready to feel better? Book your first visit →" linking to #contact)
- [x] Fix og:image — create a proper PNG/JPG fallback or use a canvas-rendered image instead of SVG (Facebook/LinkedIn/iMessage don't render SVG og:images)
- [x] Fix value strip 3rd item layout imbalance at ≤1024px breakpoint — all three items should remain visually balanced

## Wave 2 (Refiner + Nigel) — after Wave 1 completes
- [ ] Refiner: QA all Wave 1 changes, fix any mobile center-alignment issues, polish
- [ ] Nigel: Full re-audit, update AUDIT.md with new score

## Wave 3 (Builder)
- [x] Rewrite testimonials to sound authentic — removed "condition patient" labels, added casual voice
- [x] Add Google Reviews link to footer
- [x] Redesign calendar section into booking card with header/footer
- [x] Fix service card CTAs to specific copy
- [x] Add role="img" to star ratings
- [ ] Replace stock photos with real ones (needs client photos)
- [ ] Replace placeholder phone (555) with real number (needs client)
- [ ] Replace placeholder email with real one (needs client)
