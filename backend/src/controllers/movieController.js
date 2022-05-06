import { check, validationResult } from "express-validator";
import { Movie } from "../model/movie.js";

export const getMovies = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:4000");
  const movies = await Movie.find();
  if(movies.length==0){
    return res.status(400).send({error: "Es konnte kein Film gefunden werden."});
  }
  res.status(200).send(movies);
};
export const getMovieById = async (req, res) => {
  let movie = await Movie.findById(req.params.id);
  if(movie.length==0){
    return res.status(400).send({error: "Es konnte kein Film gefunden werden."});
  }
  res.status(200).send(movie);
};
export const getMovieByName = async (req, res) => {
  let result = await Movie.find({movieName: req.query.movieName})
  if(result.length==0){
    return res.status(400).send({error: "Es konnte kein Film gefunden werden."});
  }
  res.status(200).send(result);
};

export const addMovie = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let result = await Movie.find({ title: req.body.title });
  if(result.length!=0){
      return res.status(400).send({error: `Film ist bereits vorhanden.`});
  }

  const movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    duration: req.body.duration,
  });
  
  movie.save(movie).then((movie) => res.status(201).send(movie));
};

export const updateMovie = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  let result = await Movie.findById(req.params.id);
  if(result.length==0){
      return res.status(400).send({error: `Es konnte kein Film gefunden werden.`});
  }

  const movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    duration: req.body.duration,
  });  
  await Movie.replaceOne(
    {
      id: req.params.id,
    },
    {
      title: req.body.title,
    director: req.body.director,
    duration: req.body.duration,
    }
  );
  res.status(200).send(movie)
};

export const deleteMovie = async (req, res) => {
  let result = await Movie.findById(req.params.id);
  if(result.length==0){
      return res.status(400).send({error: `Film konnte nicht gefunden werden.`});
  }
  await Movie.deleteOne(Movie.findById(req.params.id));
  res.status(200).send("Film wurde gelöscht.")
}


export const newMovieValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("director").notEmpty().withMessage("Director field required"),
  check("duration").notEmpty().withMessage("Duration field required")
];