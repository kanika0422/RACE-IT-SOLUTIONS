const express = require("express"); 
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

// Allow requests from Netlify and localhost
app.use(cors({
  origin: ["http://localhost:3000", "https://race-it-solutions.netlify.app"]
}));

app.use(express.json());

const csvFilePath = path.join(process.cwd(), "contactData.csv");

// Create CSV file with headers if it doesn't exist
if (!fs.existsSync(csvFilePath)) {
  fs.writeFileSync(csvFilePath, "Name,Email,Message,Date\n", "utf8");
}

app.get("/", (req, res) => {
  res.send("Welcome to the Contact API");
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  const now = new Date();
  const formattedDate = now.toISOString().replace("T", " ").substring(0, 19);
  const safeMessage = message.replace(/"/g, '""');
  const newLine = `"${name}","${email}","${safeMessage}","${formattedDate}"\n`;

  fs.appendFile(csvFilePath, newLine, (err) => {
    if (err) {
      console.error("❌ Error writing to CSV", err);
      return res.status(500).json({ success: false, error: "Failed to save message" });
    }
    console.log(`✅ Saved contact from ${name} at ${formattedDate}`);
    res.json({ success: true, message: "Message saved successfully" });
  });
});

// ✅ Export as a serverless function for Vercel
module.exports = (req, res) => {
  app(req, res);
};
