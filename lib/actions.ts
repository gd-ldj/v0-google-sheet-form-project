"use server"

import { google } from "googleapis"
import { JWT } from "google-auth-library"

// Google Sheets API configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
// 修改这里的工作表名称为您实际的工作表名称
// 例如，如果您的工作表名称是 "Sheet1"，则将其更改为 "Sheet1"
const SHEET_NAME = "Sheet1" // 修改为您的工作表名称

export async function submitFormData(formData: FormData) {
  if (!SPREADSHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
    console.error("Missing environment variables:", {
      hasSpreadsheetId: !!SPREADSHEET_ID,
      hasClientEmail: !!CLIENT_EMAIL,
      hasPrivateKey: !!PRIVATE_KEY,
    })
    throw new Error("Google Sheets credentials are not properly configured")
  }

  try {
    // Create JWT client for authentication
    const client = new JWT({
      email: CLIENT_EMAIL,
      key: PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    // Initialize Google Sheets API
    const sheets = google.sheets({ version: "v4", auth: client })

    // Format the data for Google Sheets
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string
    const timestamp = new Date().toISOString()

    // Append data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, name, email, phone, message]],
      },
    })

    return { success: true }
  } catch (error) {
    // 更详细的错误日志
    console.error("Error details:", error)

    if (error instanceof Error) {
      throw new Error(`Failed to submit form data: ${error.message}`)
    }

    throw new Error("Failed to submit form data to Google Sheets")
  }
}

