const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const Activity = require("./models/Activity");
const path = require("path");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/activities", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.post("/activities", async (req, res) => {
  try {
    const { name, category, description, image, website_link, phone, address } =
      req.body;
    const newActivity = new Activity({
      name,
      category,
      description,
      image,
      website_link,
      phone,
      address,
    });
    const savedActivity = await newActivity.save();
    res.status(201).json(savedActivity);
  } catch (error) {
    res.status(400).json({ message: "Impossible d'ajouter l'activité" });
  }
});

app.get("/activities/search", async (req, res) => {
  try {
    const { keyword, category } = req.query;

    const query = {};
    if (keyword) query.name = { $regex: keyword, $options: "i" };
    if (category) query.category = category;

    const results = await Activity.find(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.get("/activities/:id", async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ message: "Activité non trouvée" });
    }
    res.json(activity);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
