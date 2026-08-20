/* CoreCloud Static Lead Capture - Google Apps Script
 * 1. Create a Google Sheet named CoreCloud Leads.
 * 2. Extensions -> Apps Script.
 * 3. Paste this file.
 * 4. Deploy -> New deployment -> Web app.
 * 5. Execute as: Me. Who has access: Anyone.
 * 6. Copy the Web App URL into assets/js/corecloud-config.js.
 */
const SHEET_NAME = 'Leads';
const HEADERS = [
  'createdAt','id','page','source','type','firstName','lastName','company','title','email','phone',
  'asset','assessmentType','assessmentLabel','score','classification','engagementType','notes','insights','userAgent'
];

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const sheet = getSheet_();
    ensureHeaders_(sheet);
    sheet.appendRow(HEADERS.map(h => payload[h] || ''));
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
}
