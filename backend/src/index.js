import express from "express";
import bodyParser from "body-parser";
import movieRoutes from "./routes/movieRoutes.js";
import directorRoutes from "./routes/directorRoutes.js"
import genreRoutes from "./routes/genreRoutes.js"
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../swaggerDocs.js";

// complete application is here
const app = express();
const port = 3000;




app.use(bodyParser.json());

//routes are /movies, /directors, /genres & everything else throws a 404
app.use("/movies", movieRoutes);
app.use("/directors", directorRoutes);
app.use("/genres", genreRoutes);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.all("*", (req, res) => res.sendStatus(404));




mongoose.connect("mongodb://mongo:27017/testdb").then(() => {
console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
  
});