import { Router } from "express";
import { getAllCharactersController } from "./getController/getAllCharacters.controller.js";

export const characters = Router();

characters.route("/").get(getAllCharactersController);
