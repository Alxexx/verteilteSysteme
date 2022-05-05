import express from "express";
import {
  getMovies,
  getMovieById,
  getMovieByName,
  addMovie,
  updateMovie,
  deleteMovie,
  newMovieValidators,
} from "../controllers/movieController.js";


const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.get("/search", getMovieByName);
router.post("/", newMovieValidators, addMovie);
router.put("/:id",newMovieValidators,updateMovie);
router.delete("/:id",deleteMovie);


export default router;