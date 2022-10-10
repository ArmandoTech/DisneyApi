import { Router } from "express";
import { deleteMovieController } from "./deleteController/deleteMovie.controller.js";
import { getAllMoviesController } from "./getController/getAllMovies.controller.js";
import { createMoviesController } from "./postController/createMovies.controller.js";
import { updateMovieController } from "./updateController/updateMovie.controller.js";

export const movies = Router();

movies.route("/").get(getAllMoviesController);
movies.route("/").post(createMoviesController);
movies.route("/:id").patch(updateMovieController);
movies.route("/:id").delete(deleteMovieController);
