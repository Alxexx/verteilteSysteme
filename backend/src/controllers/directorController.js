import { check, validationResult } from "express-validator";
import { Director } from "../model/director.js";

export const getDirectors = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const directors = await Director.find();
    if(directors.length==0){
      return res.status(400).send({error: "Direktor nicht gefunden!"});
    }
    res.status(200).send(directors);
  };

  export const getDirectorById = async (req, res) => {
    let director = await Director.findById(req.params.id);
    if(director.length==0){
      return res.status(400).send({error: "Direktor nicht gefunden!"});
    }
    res.status(200).send(director);
  };

  export const getDirectorByName = async (req, res) => {
    let result = await Director.find({directorName: req.query.directorName})
    if(result.length==0){
      return res.status(400).send({error: "Direktor nicht gefunden!"});
    }
    res.status(200).send(result);
  };

  export const addDirector = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let result = await Director.find({ directorName: req.body.directorName });
    if(result.length!=0){
        return res.status(400).send({error: `Direktor bereits vorhanden!`});
    }
    
    const director = new Director({
        directorName: req.body.directorName,
        age:  req.body.age,   
      });

      director.save(director).then((director) => res.status(201).send(director));
    };

    export const updateDirector = async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      let result = await Director.findById(req.params.id);
      if(result.length==0){
      return res.status(400).send({error: `Direktor nicht gefunden!`});
      }

      const director = new Director({
          directorName: req.body.directorName,
          age:  req.body.age,   
        });

        await Director.replaceOne(
          {
            id: req.params.id,
          },
          {
            directorName: req.body.directorName,
            age:  req.body.age,
          }
        );
        res.status(200).send(director);
          
      };

      export const deleteDirector = async (req, res) => {
        let result = await Director.findById(req.params.id);
        if(result.length==0){
            return res.status(400).send({error: `Direktor nicht gefunden!`});
        }
        await Director.deleteOne(Director.findById(req.params.id));
        res.status(200).send("Direktor gelöscht!")
      }

        
export const newDirectorValidators = [
    check("directorName").notEmpty().withMessage("DirectorName field required"),
    check("age").notEmpty().withMessage("Age field required"),   
  ];