# Replacement-owner implementation QA | 2026-08-24

## Scope and result

- Local static L0 concept only. No deployment, form submission, external contact, account operation or publication was performed.
- INDEPENDENT VISUAL ACCEPTANCE = AWAITING.
- CLIENT-SHOWABLE DEMO = FAIL - awaiting independent final review.

## Stable rendered evidence

| Viewport | Evidence | SHA-256 | Checks completed by implementation owner |
|---|---|---|---|
| Desktop 1440x900 | evidence/replacement-owner-desktop-1440x900.png | 353c973980dad0b01676f276cc68bca4dcf4c26329625019f494c689cdfe275a | Header, hero image, readable two-line headline, concept label, no error after favicon adjustment. |
| Mobile 390x844 | evidence/replacement-owner-mobile-390x844.png | b3b0708a9d143104432b871dd70f98034017ebc514fb5c0ef701dc0b92678e59 | Header, hero image, headline, content width and no horizontal overflow (scrollWidth = 390, viewport = 390). |

Rendered locally at http://127.0.0.1:4179/index.html using Playwright. This proves only local browser rendering, not deployment or independent acceptance.

## Functional and content checks

- Both customer images load from local hashed files and appear once each: hero ajo-lorry-yard-clean.png; documentary break ajo-lorry-lineup-clean.png.
- Telephone CTAs point to tel:+447850667515; emails point to the two official public mailto addresses.
- No form, booking, map, tracking, payment, review, certificate, hours, geographic coverage, response-time, fleet-size or service-result claim exists.
- IntersectionObserver only adds a reveal class once; hover is limited to route underline/translation and telephone-panel lift.
- Reduced motion removes transition/transform and the script immediately reveals content.

## Internal-text gate self-check

Customer-visible source was checked for prohibited internal governance terms. The intentional, permitted identity label is only Independent concept preview. No visible AI claim, rights statement, customer-authorization statement, source URL, internal review, PMO, draft-only, or send authorization text appears in HTML body, alt text or metadata.

## Skill use mapping

| Skill | Status | Concrete effect |
|---|---|---|
| website-delivery-sop | USED | L0 boundary, non-deploy scope, internal asset/QA evidence separation and local browser verification. |
| design-taste-frontend | USED | Operations Ledger design read translated to .operations-intro, .service-ledger, .documentary-break, and restrained one-theme tokens in ostride-operations.css. |
| media-use | USED | Only two official, locally hashed assets in internal/IMAGE_LEDGER.md; each receives one unique placement. |
| motion-design | USED | Corporate 360ms reveal choreography, under 160ms interactive response and prefers-reduced-motion fallback in the stylesheet/script. |

## Outstanding

- Independent reviewer must assess the final 1440x900 and 390x844 evidence against the 14.6 eight-part rubric.
- Customer authorisation for use of public site imagery remains NOT VERIFIED; this must not be deployed, published or sent.

## Evidence completion after final-review request

The local server was reopened only for evidence capture at http://127.0.0.1:4179/index.html and closed immediately afterwards. No design, content or interaction changed.

| Capture | Browser URL and viewport | Output | Pixel dimensions | SHA-256 |
|---|---|---|---|---|
| Full page desktop | http://127.0.0.1:4179/index.html, 1440x900 | evidence/replacement-owner-fullpage-desktop-1440x900.png | 1440x3295 | 350eb0fa2dc3c7ef0fecd15f758743e9b08257b9183cb24c67a33f2b6e721e47 |
| Full page mobile | http://127.0.0.1:4179/index.html, 390x844 | evidence/replacement-owner-fullpage-mobile-390x844.png | 390x3853 | 7ff5d6b00d3e39609fe4a77e4317531a375e6d9834774c53f7bf70ead8d470ea |
| Full page, reduced motion | http://127.0.0.1:4179/index.html, 390x844, prefers-reduced-motion: reduce | evidence/replacement-owner-reduced-motion-mobile-390x844.png | 390x3853 | b12acbf2bf72e658c0d332b9bd4efaa25f66d8ba0d7e5f8535c5eff3837b9f7b |

Reduced-motion browser evidence: media query matched true; all 12 reveal elements reported computed opacity 1 and transform none. Mobile scrollWidth was 390 at an innerWidth of 390, with scrollHeight 3853. This validates that reveal content is neither hidden nor translated in the reduced-motion state.

## Normal-motion evidence after visibility failsafe

The stylesheet now keeps reveal content visible by default if JavaScript is unavailable. JavaScript adds the js class before observer setup, enabling the normal 360ms reveal only when script runs. This is a motion-resilience fix; no layout, copy, asset or design decision changed.

| Capture | Browser URL and viewport | Output | Pixel dimensions | SHA-256 |
|---|---|---|---|---|
| Full page normal motion desktop | http://127.0.0.1:4187/index.html, 1440x900 | evidence/replacement-owner-normal-motion-fullpage-desktop-1440x900.png | 1440x3295 | 772ff92630ab397c3ec26b00c1d1d361f429d884d05aee5001c5f0ffcd3e3707 |
| Full page normal motion mobile | http://127.0.0.1:4187/index.html, 390x844 | evidence/replacement-owner-normal-motion-fullpage-mobile-390x844.png | 390x3853 | b12acbf2bf72e658c0d332b9bd4efaa25f66d8ba0d7e5f8535c5eff3837b9f7b |

For each normal-motion capture, the browser was scrolled through every reveal region before screenshotting, allowing the one-time IntersectionObserver choreography to complete. At mobile 390x844, reduced motion was false, scrollWidth was 390, and all 12 reveal elements ended with opacity 1, transform none and the is-visible class.
