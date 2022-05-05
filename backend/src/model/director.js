import mongoose from "mongoose";

const directorSchema = new mongoose.Schema({
directorName: String,
age: Number,
  
});

export const Director = mongoose.model("Director", directorSchema);