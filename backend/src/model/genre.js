import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
  genreName: String,
  beschreibung: String,  
});

export const Genre = mongoose.model("Genre", genreSchema);
