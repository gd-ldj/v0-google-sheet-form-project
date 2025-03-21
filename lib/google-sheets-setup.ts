/**
 * Google Sheets Setup Guide
 *
 * Follow these steps to set up your Google Sheets integration:
 *
 * 1. Go to the Google Cloud Console (https://console.cloud.google.com/)
 * 2. Create a new project or select an existing one
 * 3. Enable the Google Sheets API for your project
 *    - In the sidebar, navigate to "APIs & Services" > "Library"
 *    - Search for "Google Sheets API" and enable it
 *
 * 4. Create a service account:
 *    - In the sidebar, navigate to "APIs & Services" > "Credentials"
 *    - Click "Create Credentials" and select "Service Account"
 *    - Fill in the service account details and click "Create"
 *    - Skip the optional steps and click "Done"
 *
 * 5. Create a key for your service account:
 *    - Find your service account in the list and click on it
 *    - Go to the "Keys" tab
 *    - Click "Add Key" > "Create new key"
 *    - Choose JSON as the key type and click "Create"
 *    - The key file will be downloaded to your computer
 *
 * 6. Create a new Google Sheet or use an existing one
 *    - Share the sheet with the service account email (it looks like: service-account-name@project-id.iam.gserviceaccount.com)
 *    - Give it "Editor" permissions
 *
 * 7. Set up environment variables in your .env.local file:
 *    GOOGLE_SHEET_ID=your-spreadsheet-id
 *    GOOGLE_CLIENT_EMAIL=your-service-account-email
 *    GOOGLE_PRIVATE_KEY=your-private-key
 *
 * 8. The spreadsheet ID is found in the URL of your Google Sheet:
 *    https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit
 *
 * 9. Create a sheet tab named "FormResponses" in your spreadsheet
 *    - Add headers in the first row: Timestamp, Name, Email, Phone, Message
 */

// This file is for documentation purposes only
export {}

