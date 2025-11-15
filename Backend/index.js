import express from "express";
import fs from "fs/promises";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const FILE_PATH = "./leads.json";

// Create file automatically if not exists
async function ensureFile() {
  try {
    await fs.access(FILE_PATH);
  } catch {
    console.log("⚠ leads.json not found. Creating new file...");
    await fs.writeFile(FILE_PATH, JSON.stringify([], null, 2), "utf8");
  }
}

// Read leads safely
async function getLeads() {
  await ensureFile();

  try {
    const raw = await fs.readFile(FILE_PATH, "utf8");
    if (!raw.trim()) {
      // Empty file fix
      return [];
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error("JSON parse error. Resetting file.", err);
    await fs.writeFile(FILE_PATH, JSON.stringify([], null, 2));
    return [];
  }
}

// Write leads
async function saveLeads(leads) {
  return fs.writeFile(FILE_PATH, JSON.stringify(leads, null, 2));
}

// --------------------------------------
// GET Leads
// --------------------------------------
app.get("/leads", async (req, res) => {
  const leads = await getLeads();
  res.json(leads);
});

// --------------------------------------
// CREATE Lead
// --------------------------------------
app.post("/leads", async (req, res) => {
  const leads = await getLeads();

  const newLead = {
    id: Date.now(),
    name: req.body.name,
    company: req.body.company, // ✅ ADDED
    email: req.body.email,
    status: req.body.status,   // Active | Inactive
  };

  leads.push(newLead);

  await saveLeads(leads);

  res.json({ message: "Lead added", lead: newLead });
});

// --------------------------------------
// UPDATE Lead
// --------------------------------------
app.put("/leads/:id", async (req, res) => {
  const leads = await getLeads();
  const { id } = req.params;

  const index = leads.findIndex((l) => l.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "Lead not found" });
  }

  leads[index] = { ...leads[index], ...req.body };

  await saveLeads(leads);

  res.json({ message: "Lead updated", lead: leads[index] });
});

// --------------------------------------
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
