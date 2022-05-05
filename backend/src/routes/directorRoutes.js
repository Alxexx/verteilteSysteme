import express from "express";
import {
  getDirectors,
  getDirectorById,
  getDirectorByName,
  addDirector,
  updateDirector,
  deleteDirector,
  newDirectorValidators,
} from "../controllers/directorController.js";


const router = express.Router();

router.get("/", getDirectors);
router.get("/:id", getDirectorById);
router.get("/search", getDirectorByName);
router.post("/", newDirectorValidators, addDirector);
router.put("/:id",newDirectorValidators,updateDirector);
router.delete("/:id",deleteDirector);


export default router;