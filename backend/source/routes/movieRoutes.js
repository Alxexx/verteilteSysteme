import express from "express";
import {
  getMovies,
  getMovieById,
  getMovieByTitle,
  addMovie,
  newMovieValidators,
} from "../controllers/movieControllers.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.get("/search", getMovieByTitle);
router.post("/", newMovieValidators, addMovie);

export default router;