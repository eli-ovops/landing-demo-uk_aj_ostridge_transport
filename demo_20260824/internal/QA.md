# Local QA - Direction C rebuild

**Owner self-QA only. Independent visual acceptance is pending.**

| Check | Result | Evidence |
|---|---|---|
| Local real-browser desktop | PASS | `http://127.0.0.1:4177/`, 1440×900; `scrollWidth=1425`, `clientWidth=1425`, hero image `naturalWidth=1024`; `evidence/desktop-direction-c.png`. |
| Local real-browser mobile | PASS | `http://127.0.0.1:4177/`, 390×844; `scrollWidth=375`, `clientWidth=375`, hero image `naturalWidth=1024`; `evidence/mobile-direction-c.png`. |
| Image uniqueness | PASS | One displayed image only: `assets/ajo-lorry-yard-clean.png`, dedicated to `.masthead`. |
| Source UI / third-party branding | PASS | Displayed image is the clean direct-element capture registered in `internal/IMAGE_LEDGER.md`; no source navigation, carousel control, arrow or third-party-branded vehicle appears. |
| Core factual content | PASS | Transport, selected workshop scope, 25-year stated experience, CPC training, family-business statement and public contact details follow `internal/BUSINESS_FIDELITY_MAP.md`. |
| Product boundary | PASS | Static anchors, `tel:` and public `mailto:` only. No form, booking, payment, tracking, data collection or external write. |
| Client-visible internal text | PASS | Visible-page scan includes title, meta description, header, body, alt text and footer. No AI, rights, authorisation, PMO, TODO or local-path language. |
| Previous failure patterns | PASS | No source screenshot UI, no split Hero, no Hero-bottom metadata strip, no three-equal service-card row, no conventional standalone contact block. |

`CLIENT-SHOWABLE DEMO = FAIL - AWAITING INDEPENDENT VISUAL ACCEPTANCE`.

## Independent visual review - 2026-08-24

**Reviewer:** `/root/precode_reviewer`, independent from the implementation owner.  
**Desktop/mobile review:** completed against the two stable evidence files above.  

| Rubric item | Score |
|---|---:|
| Brand recognition | 8.5 |
| Asset authenticity | 9.0 |
| Hero impact | 8.0 |
| Typographic hierarchy | 8.5 |
| Rhythm / whitespace | 8.0 |
| Commercial persuasion | 8.5 |
| Mobile | 7.5 |
| Originality / anti-template quality | 8.5 |

`VISUAL QUALITY RUBRIC = PASS` - average `8.31/10`, with no item below `7.0`.

**Bottom 40% commercial QA:** `PASS`. The operating ledger adds verified trading experience, CPC training and family-business context without repeating the Hero, service navigation or a generic contact CTA.

**Independent visual acceptance:** `FAIL - REQUIRED TIME EVIDENCE MISSING`. `internal/ACTUAL_DEMO_MINUTES.md` remains `NOT VERIFIED`; no estimate, file timestamp or owner inference may replace a real duration record. The current 30-60 minute rule therefore requires `SOP COST REVIEW` before any claim of final acceptance.

`CLIENT-SHOWABLE DEMO = FAIL`.

## Direction E — final independent visual review | 2026-08-24

**Status:** `INDEPENDENT VISUAL ACCEPTANCE = PASS`  
**Independent reviewer:** `/root/precode_reviewer` (not the implementation owner).  
**Final browser evidence:** [desktop 1440×900](../evidence/direction-e-desktop-1440x900.png), SHA-256 `2a2d9a7d8f3b116fd80943ff38c8744234aeed7d4d660ad0a29e56aba5810b53`; [mobile 390×844](../evidence/direction-e-mobile-390x844.png), SHA-256 `a54d1737cff56813ed0f3c05b4d2c567204c4c647afb55d0ce6d551c8fc4e544`.

| Independent criterion | Result |
|---|---|
| Brand recognition | 9.0/10 |
| Asset authenticity | 9.0/10 |
| Hero impact | 9.0/10 |
| Typographic hierarchy | 8.5/10 |
| Rhythm / whitespace | 8.5/10 |
| Commercial persuasion | 9.0/10 |
| Mobile visual quality | 8.0/10 |
| Originality / anti-template quality | 9.0/10 |
| Owner purchase desire / £600 value | PASS: real work scene → business-context choice → factual workshop scope → fleet/telephone close is a specific commercial upgrade, not a prettier skin. |

**Purchase tests:**

- `5-second no-copy recognition = PASS`: the UI-clean warehouse photograph shows a marked A.J. Ostridge articulated lorry, cargo and working environment before the copy is read.
- `Customer Ownership = PASS`: three distinct official customer-photo derivatives/captures, Maldon and public business contact facts are visible; each photo is used once.
- `Before/after commercial upgrade = PASS`: the page turns the existing menu-led discovery into one operational decision (`On the road` / `In the workshop`) with direct `tel:` paths.
- `Would-I-reply owner perspective = PASS`: the reviewer found a credible reason to continue from the real first scene through to a direct, factual contact route.

**Functional checks:** desktop `scrollWidth=1440`; mobile `scrollWidth=390`; all three images loaded; no client-visible internal AI/rights/governance text. At 390px, both core route tabs are 44px high. Keyboard supports `ArrowLeft`, `ArrowRight`, `Home`, and `End`; roving `tabindex`, `aria-selected` and visible tab panel remain synchronized. Reduced-motion retains immediately visible content and does not depend on GSAP.

**Scope and risk boundary:** static local concept only; no form, backend, payment, booking, deployment, upload, account action or outreach. `CUSTOMER AUTHORIZATION: NOT VERIFIED` and `Actual Demo Minutes: NOT VERIFIED` remain internal governance items; they do not change the independent visual result or authorize public release/send.

`CLIENT-SHOWABLE DEMO = PASS — LOCAL CONCEPT ONLY`.

## Direction E — 9-point final polish | 2026-08-24

**Independent reviewer:** `/root/precode_reviewer`  
**Evidence:** [desktop 1440×900](../evidence/direction-e-nine-desktop-1440x900.png), SHA-256 `2de1cda87a2d01b318d738023bd8f7dd69b3ed1cccd4e8b5cc6ef438bff5ec20`; [mobile 390×844](../evidence/direction-e-nine-mobile-390x844.png), SHA-256 `cb6de4307fefc0d5d52f848937e8b90eb922e9b2eaced50aa93a14859a978cac`.

| Criterion | Score |
|---|---:|
| Brand recognition | 9.2 |
| Customer authenticity | 9.3 |
| Hero impact / recognition | 9.2 |
| Typography / hierarchy | 9.2 |
| Page rhythm | 9.0 |
| Commercial conversion path | 9.2 |
| Mobile visual quality | 9.0 |
| Originality / anti-template | 9.1 |
| Path interaction | 9.0 |

`INDEPENDENT VISUAL ACCEPTANCE = PASS` — nine-axis average `9.1/10`.

The final Barlow Condensed Hero establishes a practical UK commercial-vehicle language; `ON THE ROAD / IN THE WORKSHOP` exposes both verified operating paths before explanatory copy. On mobile, removal of the repeated service rail restores hierarchy and the 44px CTA/route targets remain available. This result remains a local static concept only and does not change asset-rights, deployment or outreach boundaries.

## Customer-original photo expansion QA delta — 2026-08-24

| Check | Result | Evidence / boundary |
|---|---|---|
| Five-image source uniqueness | PASS | `index.html` references five distinct `assets/ajo-*.png` files, each exactly once; all files are present and non-empty. See the current final-use table in `internal/IMAGE_LEDGER.md`. |
| Static script syntax | PASS | `node --check motion.js` returned no syntax error. |
| Customer-visible fact boundary | PASS | The fifth photograph now carries only the neutral caption `A.J. Ostridge on the road`; no community, charity, event, delivery or project-result claim is visible. |
| Current 1440×900 / 390×844 rendering | NOT VERIFIED | The controlled browser rejected `file://` screenshot inspection under its URL policy after this change. Prior screenshots predate the five-image expansion and cannot be reused as final evidence. |
| Independent visual acceptance for expansion | NOT VERIFIED | Requires current browser evidence and an independent rendered-page review of image crops, photo-ledger rhythm and Bottom-40 continuity. |

`CLIENT-SHOWABLE DEMO = NOT VERIFIED AFTER PHOTO EXPANSION` — not a deployment, send or public-use authorization.

## Direction F - dual operating routes final independent review | 2026-08-25

**Independent reviewer:** `/root/precode_reviewer` (not the implementation owner)  
**Preview reviewed:** `http://127.0.0.1:4188/index.html` (local only; not a deployment)

| Criterion | Score |
|---|---:|
| Brand and 5-second recognition | 9.2 |
| Customer asset authenticity and ownership | 9.6 |
| Hero | 9.0 |
| Typography and hierarchy | 9.0 |
| Page rhythm | 9.1 |
| Commercial route and CTA | 9.2 |
| Mobile visual quality | 8.4 |
| Originality and anti-template quality | 9.2 |
| Owner purchase desire / £600 value | 9.1 |

`INDEPENDENT VISUAL ACCEPTANCE = PASS` - average `9.09/10`; all nine criteria are at least `7.0`.

**Independent validation:** real rendering at 1440×900 and 390×844; five Direction F official images loaded; no horizontal overflow; no client-visible internal text; 5-second image-only recognition, customer ownership, commercial upgrade against the existing generic/menu-led discovery, and Bottom-40 desire-to-continue all passed. Motion is restrained and reduced-motion preserves a complete static reading state.

**P0/P1:** no P0. The reviewer observed a pre-final 390px header call target below 44px. Owner post-review static verification after the CSS touch-target adjustment returned header call `44px`, both route CTAs `44px`, close call `74px`, all five images loaded, and `scrollWidth = 375 / clientWidth = 375`. This is a micro accessibility correction only; no direction, asset, copy or layout change followed the independent review.

**Boundary:** local static concept only. `CUSTOMER AUTHORIZATION: NOT VERIFIED`; no deployment, upload, send, outreach, form, booking, payment or data capture is authorized. `Actual Demo Minutes: NOT VERIFIED`.
