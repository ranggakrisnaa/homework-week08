require("dotenv").config();
const express = require("express");
const filmRoutes = require("./routes/films");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // belum dibutuhkan
app.use(express.urlencoded({ extended: true })); // belum dibutuhkan
app.use(morgan("tiny"));

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
