import express from "express";
import bodyParser from "body-parser";
import movieRoutes from "./routes/movieRoutes.js";
import mongoose from "mongoose";

// complete application is here
const app = express();
const port = 4000;


app.use(bodyParser.json());

//routes are /movies & everything else throws a 404
app.use("/movies", movieRoutes);
app.all("*", (req, res) => res.sendStatus(404));




mongoose.connect("mongodb://mongo:27017/testdb").then(() => {
console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
  
});