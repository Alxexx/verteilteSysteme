import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  duration: Number,
  
});

export const Movie = mongoose.model("Movie", movieSchema);