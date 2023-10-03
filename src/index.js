require("dotenv").config();
const express = require("express");
const filmRoutes = require("./route/films");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  try {
    res.status(200).send("Selamat datang di API FILM by Rangga");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.use("/films", filmRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
