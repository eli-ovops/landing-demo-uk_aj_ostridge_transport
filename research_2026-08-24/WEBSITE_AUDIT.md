# Website audit — A. J. Ostridge Transport Limited

**URL:** https://www.ajostridgetransport.co.uk/  
**Method/date:** no-login headed Chromium via Playwright, 2026-08-24. This is a real-browser observation, not an HTTP-only check. Screenshots: `evidence/desktop.png`, `evidence/mobile.png`.

## Viewport results

| Check | 1440 × 900 | 390 × 844 |
|---|---|---|
| Page identity | Title `A J Ostridge Transport Limited`; official HTTPS URL remained unchanged. | Same title and URL. |
| Width | `innerWidth=1440`, `clientWidth=1425`, `scrollWidth=1425`: no document-level horizontal overflow. | `innerWidth=390`, `clientWidth=375`, `scrollWidth=375`: homepage has no document-level horizontal overflow. |
| Hero | Large truck image with very large red/black outlined business name and subtitle. The literal visual identity is visible but readability/brand finish are weak. | Name wraps into four very large lines and subtitle continues below the captured viewport; neither core offer nor CTA is visible in the first 844px. |
| Navigation | Six links: About Us, GDPR, Privacy Statement, Commercial Vehicle Repairs, Our Community, Contact. | Collapsed hamburger is visible. Snapshot exposes no menu text until opened; no form submission or account action was used. |
| Core content | About statement, CTA, image carousel, GDPR block, repair list, charity section, contact. | Same DOM order. GDPR appears before repair content, making a 2018 legal explainer a major early mobile reading burden. |
| Trust/proof | Website claims 25 years, CPC training and family operation; visible galleries, but no captions, case studies, independently verified reviews or current operating proof on the owned page. | Same substantive limitation. |
| CTA/contact | `Get in Touch` anchors to the contact block. Contact exposes address, phone and two emails as plain text. | CTA is below the initial viewport; contact is far down-page. |
| Images | The browser loaded truck, garage and charity image assets from the owned domain. Image `alt` values were empty in the DOM. | Same asset set; no download or reuse occurred. |

## Link and technical observations

- In-page nav/CTA targets observed: `#about`, `#gdpr`, `#commercial`, `#charity`, `#contact`; visual browser snapshot associated them with existing page sections.
- `privacystatement.html` opens successfully in the browser, but at mobile size measured `clientWidth=375`, `scrollWidth=530`: **horizontal overflow on the linked privacy page**. This is a real responsive defect, separate from the overflow-free homepage.
- Browser console logged one resource error: `https://www.ajostridgetransport.co.uk/favicon.ico` returned 404. No other console error was observed in this limited session.
- No self-hosted form, booking, payment, inventory, checkout, login or client portal was observed.
- A functioning page and anchor links do not prove conversion, lead quality or business performance.

## Material opportunity statement

The business has more verifiable capability than the homepage makes easy to evaluate. The strongest customer-impacting issue is the content hierarchy: an obsolete dated GDPR explainer occupies a central early route while the two core offer lines, repair categories, current operating context and direct contact path do not form a clear commercial story—especially on mobile. That is a static presentation problem. It should not be phrased to the client as criticism, and it does not create a Demo or outreach authorisation.

## Audit limits

This was a homepage-plus-linked-privacy-page audit, not a penetration test or exhaustive accessibility audit. The carousels were not manually cycled and no external ICO link was followed. No form was submitted and no email was sent.

