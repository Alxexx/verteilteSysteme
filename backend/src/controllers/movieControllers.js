import { check, validationResult } from "express-validator";

const movies = [
  {
    id: 0,
    title: "The Adam Project",
    director: "Shawn Levy",
    duration: 106,
  },
  {
    id: 1,
    title: "The Tomorrow War",
    director: "Chris McKay",
    duration: 140,
  },
  {
    id: 2,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
  },
];
export const getMovies = (req, res) => {
  res.status(200).send(movies);
  res.set("Access.Control-Allow-Origin", "http://localhost:3000");
};
export const getMovieById = (req, res) => {
  let movie = movies.find((b) => b.id == req.params.id);
  res.status(200).send(movie);
};
export const getMovieByTitle = (req, res) => {
  let result = movies.filter((movie) => movie.title == req.query.title);
  res.status(200).send(result);
};

export const addMovie = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  movies.push(req.bod);
  res.status(201).send(`Added ${movie.title} to movie collection`);
};

// attached as second param in a route
export const newMovieValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("director").notEmpty().withMessage("Director field required"),
  check("duration").notEmpty().withMessage("Duration field required"),
];