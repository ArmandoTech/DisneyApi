import { Router } from "express";
import { auth } from "./auth/auth.router.js";
import { characters } from "./characters/characters.router.js";

export const router = Router();

router.use("/characters", characters);
router.use("/auth", auth);
