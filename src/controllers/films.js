const filmModels = require("../models/films");

const getAllFilms = async (req, res) => {
  try {
    const data = await filmModels.getAllFilms();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getAllFilmsbyId = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await filmModels.getAllFilmsbyId(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: "Not Found", error: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const data = await filmModels.getAllCategories();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getAllFilmsbyCategories = async (req, res) => {
  const category = req.params.name;
  try {
    const data = await filmModels.getAllFilmsbyCategories(category);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: "Not Found", error: error.message });
  }
};

module.exports = {
  getAllFilms,
  getAllFilmsbyId,
  getAllCategories,
  getAllFilmsbyCategories,
};
