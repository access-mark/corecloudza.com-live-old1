# CoreCloud RB2.0 Static Lead Capture

This build is designed for GitHub Pages with no paid backend.

## What is included

- Static guide download capture.
- Static NDA request capture.
- Static assessment scoring.
- Assessment result capture.
- Google Apps Script integration point.
- localStorage fallback for testing.

## Setup

1. Create a Google Sheet called `CoreCloud Leads`.
2. Open Extensions -> Apps Script.
3. Paste `integrations/google-apps-script/Code.gs`.
4. Deploy as Web App.
5. Copy the Web App URL.
6. Edit `assets/js/corecloud-config.js`:

```js
window.CORECLOUD_CONFIG = {
  GOOGLE_APPS_SCRIPT_URL: "YOUR_WEB_APP_URL_HERE",
  ...
};
```

## Testing locally

If `GOOGLE_APPS_SCRIPT_URL` is blank, submissions are saved to browser localStorage under `corecloud_static_leads`.

Open DevTools -> Application -> Local Storage to inspect records.

## Captured lead types

- `GUIDE_DOWNLOAD`
- `NDA_REQUEST`
- `ASSESSMENT`

## Future upgrade path

When CRM is selected, replace the Apps Script endpoint with a CRM connector or the CoreCloud Advisory Engine API. The frontend payload model stays the same.
