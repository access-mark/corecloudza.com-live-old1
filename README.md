# CoreCloudZA RB2.0 Static Advisory Capture Build

Static website build based on the approved RB1.6 visual language with the RB1.9 advisory-platform layer and RB2.0 zero-cost capture workflow added.

## Deployment Model

This build is designed for GitHub Pages.

- Website hosting: GitHub Pages
- Backend: none required for Phase 1
- Lead capture: Google Sheets + Google Apps Script
- Fallback: browser localStorage for testing
- Future upgrade path: CoreCloud Advisory Engine or CRM connector

## Included

### RB1.9 Advisory Platform

- Partner expansion: LSD Open, RentWorks, ReWorks
- Marketplace retained
- Advisory Hub: `advisory.html`
- Executive Guides Library: `guides.html`
- Assessment Centre: `assessments.html`
- Mutual NDA Request workflow: `request-nda.html`
- Interactive assessment routes:
  - `assess-workload-venue.html`
  - `assess-sovereignty.html`
  - `assess-ai-readiness.html`

### RB2.0 Static Capture Layer

- `assets/js/corecloud-config.js`
- `assets/js/lead-capture.js`
- Updated `assets/js/forms.js`
- Updated `assets/js/assessments.js`
- Google Apps Script example: `integrations/google-apps-script/Code.gs`
- Setup guide: `docs/STATIC-LEAD-CAPTURE.md`
- Lightweight guide assets in `assets/guides/`

## Lead Capture Types

- `GUIDE_DOWNLOAD`
- `NDA_REQUEST`
- `ASSESSMENT`

## Setup Instructions

1. Deploy the website to GitHub Pages.
2. Create a Google Sheet named `CoreCloud Leads`.
3. Paste `integrations/google-apps-script/Code.gs` into Apps Script.
4. Deploy the Apps Script as a Web App.
5. Paste the Web App URL into `assets/js/corecloud-config.js`.
6. Test guide download, NDA request and assessment result capture.

If no Apps Script URL is configured, submissions are stored in localStorage for testing.

## Future CRM Integration

Do not rewrite the website when CRM is selected. Replace the Apps Script endpoint with:

- HubSpot connector
- Zoho connector
- Dynamics connector
- Pipedrive connector
- CoreCloud Advisory Engine API

The frontend payload model is already vendor-neutral.

## Audit Notes Retained

- Marketplace retained in navigation and footer.
- Homepage partner proof grid supports 8 partners.
- Linked cards have gold-highlight treatment and full-card click behaviour.
- Card-level buttons are removed where the card itself is the click target.
- Sitemap includes all public HTML pages.
