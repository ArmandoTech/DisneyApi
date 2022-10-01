import { Router } from "express";
import { characters } from "./users/characters.router.js";

export const router = Router();

router.use("/characters", characters);
