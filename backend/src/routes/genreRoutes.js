import express from "express";
import {
  getGenres,
  getGenreById,
  getGenreByName,
  addGenre,
  updateGenre,
  deleteGenre,
  newGenreValidators,
} from "../controllers/genreController.js";


const router = express.Router();

router.get("/", getGenres);
router.get("/:id", getGenreById);
router.get("/search", getGenreByName);
router.post("/", newGenreValidators, addGenre);
router.put("/:id",newGenreValidators,updateGenre);
router.delete("/:id",deleteGenre);


export default router;