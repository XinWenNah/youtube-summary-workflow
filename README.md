# 📺 YouTube Summary Automation (n8n + Gemini Pro)

This project is an n8n automation workflow that tracks the YouTube videos you watch, generates summaries using Gemini Pro (Google’s LLM), and stores them in Google Sheets.It can send a daily email report.

---

## 🧩 Features

- Receives YouTube video data via Webhook
- Summarizes video content using Gemini Pro (PaLM API)
- Stores summaries in Google Sheets
- Sends optional daily email summaries

---

## 🛠 Requirements

- [n8n](https://n8n.io/) installed and running (self-hosted or desktop app)
- Google API credentials for:
  - Sheets API (OAuth2)
  - Gemini Pro API (Generative Language API)
- Gmail SMTP (or other SMTP) credentials for email reports

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/youtube-summary-n8n.git
cd youtube-summary-n8n
```
### 2. Setup Environment Variables
-copy the example file
```bash
cp .env.example .env
```
-fill in .env with your actual credentials

### 3. Import the Workflow into n8n

### 4. Install the Chrome Extension

1. Click on the **Webhook** node in your n8n workflow.
2. Copy the **Production URL**.
3. Open the `config.js` file inside the `chrome-extension` folder.
4. Paste the URL into the appropriate field in `config.js`.
5. Go to `chrome://extensions/` in your Chrome browser.
6. Enable **Developer mode**.
7. Click **Load unpacked** and select the `chrome-extension` folder.
