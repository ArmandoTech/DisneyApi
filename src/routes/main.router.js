import { Router } from "express";
import { auth } from "./auth/auth.router.js";
import { characters } from "./characters/characters.router.js";
import { movies } from "./movies/movies.router.js";

export const router = Router();

router.use("/characters", characters);
router.use("/auth", auth);
router.use("/movies", movies);
