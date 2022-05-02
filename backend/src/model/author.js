import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
authorName: String,
  
});

export const Author = mongoose.model("Author", authorSchema);