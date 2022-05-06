import { check, validationResult } from "express-validator";
import { Genre } from "../model/genre.js";

export const getGenres = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:4000");
    const genres = await Genre.find();
    if(genres.length==0){
      return res.status(400).send({error: "Genre nicht gefunden!"});
    }
    res.status(200).send(genres);
  };
  export const getGenreById = async (req, res) => {
    let genre = await Genre.findById(req.params.id);
    if(genre.length==0){
      return res.status(400).send({error: "Genre nicht gefunden!"});
    }
    res.status(200).send(genre);
  };
  export const getGenreByName = async (req, res) => {
    let result = await Genre.find({genreName: req.query.genreName})
    if(result.length==0){
      return res.status(400).send({error: "Genre nicht gefunden!"});
    }
    res.status(200).send(result);
  };

  export const addGenre = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let result = await Genre.find({ genreName: req.body.genreName });
    if(result.length!=0){
        return res.status(400).send({error: `Genre bereits angelegt!`});
    }

    const genre = new Genre({
        genreName: req.body.genreName,
        beschreibung: req.body.beschreibung,  
      });

      genre.save(genre).then((genre) => res.status(201).send(genre));
    };

    export const updateGenre = async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      let result = await Genre.findById(req.params.id);
      if(result.length==0){
          return res.status(400).send({error: `Genre nicht gefunden!`});
      }

      const genre = new Genre({
          genreName: req.body.genreName,
          beschreibung: req.body.beschreibung,  
        });

        await Genre.replaceOne(
          {
            id: req.params.id,
          },
          {
           genreName: req.body.genreName,
            beschreibung: req.body.beschreibung,  
          }
   
        );
  
        res.status(200).send(genre);
      };

      export const deleteGenre = async (req, res) => {
        let result = await Genre.findById(req.params.id);
        if(result.length==0){
            return res.status(400).send({error: `Genre nicht gefunden!`});
        }
        await Genre.deleteOne(Genre.findById(req.params.id));
        res.status(200).send("Genre gelöscht!")
      }


    
export const newGenreValidators = [
    check("genreName").notEmpty().withMessage("Genrename field required"),
    check("beschreibung").notEmpty().withMessage("Beschreibung field required"),   
  ];