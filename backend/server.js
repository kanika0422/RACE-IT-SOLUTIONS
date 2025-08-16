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

// CSV file path (inside project folder, not /tmp anymore)
const csvFilePath = path.join(__dirname, "contactData.csv");

// Create CSV file with headers if it doesn't exist
if (!fs.existsSync(csvFilePath)) {
  fs.writeFileSync(csvFilePath, "Name,Email,Message,Date\n", "utf8");
}

app.get("/", (req, res) => {
  res.send("Welcome to the Contact API (Render version 🚀)");
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

// Start server on Render's assigned PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


app.get("/api/contacts", (req, res) => {
  res.sendFile(csvFilePath, (err) => {
    if (err) {
      console.error("❌ Error sending file:", err);
      res.status(500).send("Could not retrieve contacts");
    }
  });
});