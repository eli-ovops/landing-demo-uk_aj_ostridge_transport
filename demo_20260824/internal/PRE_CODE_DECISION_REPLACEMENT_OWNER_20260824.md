# PRE-CODE DECISION | Replacement owner | 2026-08-24

## Scope and authority

- **Role:** replacement local L0 concept-demo execution owner, not final reviewer.
- **User direction:** combine Essex Commercial's documentary, recent-work photography treatment with HB Commercial's mature B2B service hierarchy.
- **Authorised work:** local static HTML/CSS and limited progressive-enhancement JavaScript only. No deployment, upload, external contact, form submission, account access, payment, install, deletion, or Git operation.
- **Customer authorisation:** `NOT VERIFIED`. This remains an independent local concept and must not be described as customer-approved.
- **Client-showability:** `FAIL — awaiting implementation and independent visual acceptance`.

## 1. Authority + skill route

| Skill / authority | Read receipt | Produced decision or artifact | Direct implementation mapping |
|---|---|---|---|
| `AGENTS.md` and `PROJECT_CORE.md` | Read 2026-08-24. Demo Production v1.1 §§14.3D, 14.4, 14.4A and 14.6 applied. | This owner-specific decision record and the no-deploy L0 boundary. | Static `index.html`; internal records stay outside customer navigation. |
| `website-delivery-sop` + DS-002B | Read 2026-08-24. DS-002B SHA-256 `5b70133e7a155a713c130d07d883afffbd1f57eaa7bfc7c2e2c3dfc9f9bb926a`; mtime `2026-08-09T16:00:52Z`. | L0-only scope, source/rights ledger and two-viewport browser-QA plan. | `internal/IMAGE_LEDGER.md`, `internal/QA_REPLACEMENT_OWNER.md`, static-only page. |
| `design-taste-frontend` | Read for redesign pre-flight. | Design Read, three dials, two non-equivalent directions and anti-template constraints below. | New `ostride-operations.css`, service hierarchy, no reused `rebuild.css` selectors. |
| `media-use` | Read for real asset selection and reuse discipline; no provider, download, generation or treatment is authorised. | Official-site-only asset inventory and one-placement-per-photo ledger entries. | Four distinct official image URLs receive unique documentary roles. |
| `motion-design` | Read because the user requested UI motion. | Corporate motion personality and reduced-motion rules below. | New CSS reveal/hover rules and optional IntersectionObserver, with a non-motion fallback. |

**Skill status before implementation:** all four are `ARTIFACT MAPPED, IMPLEMENTATION PENDING`; none may be reported as `USED` until final page and QA evidence exist.

## 2. Customer asset and fact coverage

| Item | Status | Verified source | Customer-visible treatment / boundary |
|---|---|---|---|
| Name and Maldon location | USE | Official homepage, 2026-08-24 | Header and introduction. |
| General haulage, container movements, road transport | USE | Official homepage and current Business News Wales report recorded in `BUSINESS_FIDELITY_MAP.md` | Transport service section only; no geography, volume or timing claims. |
| Commercial servicing, inspections, MOT preparation, diagnostics, ABS/EBS, fabrication and trailer work | USE | Official Commercial Vehicle Repairs page, recorded in fidelity map | Workshop service hierarchy only; no booking, response or guarantee claim. |
| 25 years, experienced drivers, CPC training, family business | USE | Official About copy, recorded in fidelity map | Proof strip. Exact, qualified wording only. |
| Public phone, emails and Maldon address | USE | Official contact block, recorded in fidelity map | One telephone-led conversion path; supporting email/address only. |
| Fleet sizes, hours, territory, rates, reviews, certificates, current ownership | DO NOT USE | Not verified for this concept | Omitted. |
| Official photographs `lorry13`, `lorry14`, `lorry15`, `lorry16` | USE, minimum necessary | Each direct official image URL was visibly opened from the official homepage on 2026-08-24. Rights and customer authorisation remain `NOT VERIFIED`. | Unique page placement only; no source UI, third-party-brand photo or generated replacement. |

## 3. Reference board | current UK sites opened in browser, 2026-08-24

| Reference | Principle adopted | Application | Not copied |
|---|---|---|---|
| https://www.essex-commercial.co.uk/ | Let documentary work photos act as proof of a physical operation, then connect them to practical repair categories. | Photo-led proof rail and workshop service treatment. | Its photos, wording, layout, services, brand and contact approach. |
| https://hbcommercial.com/service/ | Make the hierarchy read as a mature service operation: first broad service family, then practical capability clusters. | Transport vs workshop hierarchy and workshop subgroups. | Its fleet-scale claims, accreditations, navigation, copy and design. |
| https://www.ajostridgetransport.co.uk/ | Preserve the business’s actual dual operation and its own lorry imagery. | Customer facts and image sources. | Existing site UI, copy blocks and carousel treatment. |
| https://www.simmondstransport.co.uk/ | Use plain operational language and a direct route to discuss a requirement. | Phone-led enquiry language. | 24/7, warehousing, promises, layout and any visual asset. |

## 4. Design Read + two materially different directions

**Design Read:** A documentary operations overview for transport coordinators and commercial-vehicle operators: real A. J. Ostridge work imagery carries credibility, while a calm, grown-up B2B hierarchy turns the dual operation into an immediate choice.

- `DESIGN_VARIANCE = 6`: image-led composition and asymmetrical documentary cuts, but restrained interface styling.
- `MOTION_INTENSITY = 4`: purposeful observer-triggered entrances and tactile route feedback, never decorative auto-play.
- `VISUAL_DENSITY = 7`: information-rich service hierarchy, breathing room around real photographs.

### Direction A | Selected: **Working Fleet / Service Desk**

- **Hero:** full-bleed yard photo with an offset white service desk, not text over photography. The desk makes the two business lines clear immediately.
- **Rhythm:** photo-led opening → B2B capability hierarchy → documentary work rail → proof / direct call close. The images are evidence, never background filler.
- **Asset roles:** `lorry13` hero only; `lorry14` transport proof only; `lorry15` workshop evidence only; `lorry16` lower-page operations close only.
- **Bottom 40%:** a discrete factual proof strip plus a documentary close that adds public contact detail and prompts the appropriate call without duplicating a generic CTA.

### Direction B | Rejected: **Operations Journal**

- **Hero:** typographic lead with a narrow, vertically cropped lorry image alongside; transport and workshop unfold as alternating visual reportage stories.
- **Rhythm:** editorial story with image-led section transitions, then a capability index and contact close.
- **Asset roles:** images are narrative markers, with the service index carrying conversion.
- **Reason rejected:** it would make the dual operating lines feel like an editorial brand story first and a B2B decision tool second. Direction A is clearer for a commercial operator and better expresses the user-selected HB hierarchy.

### Anti-template constraints

- No equal-card grid, generic fleet-moving slogan, testimonial/rating, invented metric, map, form, booking or fake availability.
- No black/cream/red alternating-section recipe, image-overlay copy, source-site carousel UI, section numbers, decorative status dots or oversized empty final CTA.
- One light, industrial-paper theme; observed vehicle red appears only as a functional accent.
- Images are unique documentary evidence, not repeated visual texture.

## 5. Implementation and motion map | Direction A only

| Responsibility | Fact/asset | Target structure and selector | Explicitly avoids |
|---|---|---|---|
| Header and Hero | name, Maldon, `lorry13` | `.ops-hero`, `.hero-desk`, `.primary-call` | Split hero, text directly over image, generic statement. |
| Service hierarchy | verified transport and workshop scope | `.service-architecture`, `.transport-path`, `.workshop-path` | Equal cards, arbitrary service list. |
| Documentary evidence | `lorry14` and `lorry15` | `.field-proof`, `.workshop-proof` | Decorative gallery or reused crop. |
| Proof and close | 25 years stated, CPC training, family context, `lorry16`, public contacts | `.proof-band`, `.operations-close` | ratings, certificates, invented response time, generic giant CTA. |
| Motion personality | Corporate: direct, heavy, controlled | `.reveal` uses transform + opacity, 360ms `cubic-bezier(.2,0,0,1)`; route focus/hover responds under 160ms. `prefers-reduced-motion` removes transforms and automatic observer behaviour. | Parallax, spinning, bounce, full-screen transition or motion-dependent content. |

## 6. Independent pre-code reviewer check | required before customer-visible edits

**Reviewer must be a different owner.** Check customer asset coverage, source-UI absence, whether Directions A/B truly differ, A.J. Ostridge recognition, commercial-vehicle fit, and similarity against the two nearest industrial demos. Record total similarity hits out of ten and a pass/fail conclusion below.

```text
Reviewer / thread:
Review time:
Asset coverage and source-UI absence:
Direction variance:
Customer recognition:
Industry fit:
Similarity hits (0-10):
Conclusion:
Reason:
```

## Gate state

`DEMO PRE-CODE = BLOCKED — AWAITING INDEPENDENT PRE-CODE REVIEW`

No customer-visible HTML, CSS or JS has been changed by this replacement owner under this record.

## 7. Authorised cost-review resubmission | 2026-08-24

The user explicitly instructed the project to proceed after the cost review. This is a bounded replacement submission, not a claim that the preceding review never occurred.

### Asset correction

`lorry15` and `lorry16` are removed from the candidate implementation. Their remote files were discovered from the official page, but local browser-capture/hash verification is not presently available. The selected direction uses only the two pre-existing clean, locally hashed official captures already recorded in `internal/IMAGE_LEDGER.md`:

- `ajo-lorry-yard-clean.png` / `lorry13.jpg`, SHA-256 `558c360472f8e493d30f85d5e7eacb6e8172c3b52500dc1056733601c11fe06d`.
- `ajo-lorry-lineup-clean.png` / `lorry14.jpg`, SHA-256 `135b1457da7269bf5e3ffe6d240d160ec4799af48fbdb5c7f40117391e943801`.

Both must retain a single unique placement. No remote image, synthetic visual or image variant will substitute for the removed candidates.

### Resubmitted Direction A | Selected: **Operations Ledger**

- **Opening:** a short, full-width `lorry13` documentary masthead begins the page without headline or CTA overlay. Directly below, a large typographic name block establishes Maldon and the two verified operating lines.
- **Core architecture:** instead of Hero → service cards → proof → contact, a two-column **working ledger** occupies the centre of the page. Each vertical lane starts with the visitor's job (`Moving goods` / `Maintaining commercial vehicles`) and contains a deliberately unequal set of verified capabilities. A single centre rail carries a factual call prompt and does not resemble a header action.
- **Image role:** `lorry14` is a shallow, wide documentary proof cut between the service ledger and the lower factual operating note. It is not a Hero, split section or service-card art.
- **Bottom 40%:** a small three-item operating note (25 years stated / experienced drivers with CPC training / family business) sits beside the public phone and address. The close is a location-and-contact ledger rather than a large CTA block.
- **Why this removes the six similarity hits:** no image-plus-copy split Hero, no header phone action, no large Hero title, no services immediately below the Hero, no grouped mid-page capability cards, and no fact/proof then generic phone-email-address close. The same business facts are recomposed as a single operational document.

### Resubmitted Direction B | Rejected: **Workshop Field Sheet**

- **Opening:** a left-edge portrait `lorry14` image rail and a title-only introduction, followed by a full-width workshop capability sheet; transport becomes a narrow top strip.
- **Rhythm:** workshop-first technical record, transport as a secondary route, then a minimal operating note.
- **Why rejected:** it over-weights repairs and obscures the firm’s verified transport operation. The selected ledger preserves parity while keeping an explicitly different page anatomy.

### Resubmitted motion mapping

Corporate motion remains `MOTION_INTENSITY = 4`: a single IntersectionObserver adds `.is-visible` to ledger rows when they enter the viewport; 360ms, `cubic-bezier(.2,0,0,1)`, opacity plus ≤16px translate. The centre call rail provides the secondary feedback layer via a ≤160ms colour/underline response. The documentary photography remains static as the ambient layer. `prefers-reduced-motion` prevents script-driven class changes and removes transform/transition.

### Fresh independent review required

```text
Reviewer / thread:
Review time:
Locally verifiable image assets (only lorry13/14):
Similarity hits (0-10):
Direction variance and customer recognition:
Conclusion:
Reason:
```

`DEMO PRE-CODE = BLOCKED — RESUBMISSION AWAITING INDEPENDENT REVIEW`

## 8. Resubmission independent pre-code review

- **Reviewer:** independent owner assigned by PMO, distinct from the implementation owner.
- **Result:** PASS - local L0 implementation only.
- **Asset check:** PASS. Only the two clean local captures with recorded SHA-256 values are selected; lorry15 and lorry16 are excluded.
- **Direction variance and recognisability:** PASS. The Operations Ledger recomposes the two business lines as an operational document rather than the previous hero, services and proof sequence.
- **Similarity:** PASS. The reviewer accepted the removal of the six previously flagged structural similarities.

`DEMO PRE-CODE = PASS`
`PRE-CODE GATE = PASS`

## 9. Implementation mapping realised

- design-taste-frontend: the Operations Ledger is now realised in index.html and ostride-operations.css through the documentary masthead, unequal two-lane service ledger, evidence break and contact ledger.
- media-use: only the two selected local official files are referenced, once each, in index.html.
- motion-design: IntersectionObserver reveal choreography and reduced-motion fallback are implemented in index.html and ostride-operations.css.
- website-delivery-sop: internal asset and QA records are retained; page remains a local static L0 concept.
