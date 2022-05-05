import mongoose from "mongoose";

const directorSchema = new mongoose.Schema({
directorName: String,
  
});

export const Director = mongoose.model("Director", directorSchema);