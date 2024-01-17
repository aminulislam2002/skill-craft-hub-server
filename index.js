const express = require("express");
const mongodb = require("mongodb");
const app = express();
const port = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Skill Craft Hub is running on PORT ${port}`);
});
