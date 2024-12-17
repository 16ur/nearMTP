const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const activities = require("./activities.json");

app.get("/activities", (req, res) => {
  res.json(activities);
});

app.get("/activities/search", (req, res) => {
  const { keyword, category } = req.query;
  const results = activities.filter(
    (activity) =>
      (keyword
        ? activity.name.toLowerCase().includes(keyword.toLowerCase())
        : true) &&
      (category
        ? activity.category.toLowerCase() === category.toLowerCase()
        : true)
  );
  res.json(results);
});

app.listen(3001, () => console.log("Server running on port 3001"));
