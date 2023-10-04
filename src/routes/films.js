const express = require("express");
const router = express.Router();
const {
  getAllFilms,
  getAllFilmsbyId,
  getAllCategories,
  getAllFilmsbyCategories,
} = require("../controllers/films");

router.get("/", getAllFilms);

router.get("/categories", getAllCategories);

router.get("/:id", getAllFilmsbyId);

router.get("/category/:name", getAllFilmsbyCategories);

module.exports = router;
