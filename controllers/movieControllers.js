import { check, validationResult } from "express-validator";

const movies = [
  {
    id: 0,
    title: "Project Hail Mary",
    author: "Andy Weir",
    pages: 496,
  },
  {
    id: 1,
    title: "Harrow the Ninth",
    author: "Tamsyn Muir",
    pages: 512,
  },
];
export const getMovies = (req, res) => {
  res.status(200).send(movies);
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
];