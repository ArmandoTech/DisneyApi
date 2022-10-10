import { Router } from "express";
import { deleteCharactersController } from "./deleteController/deleteCharacters.controller.js";
import { getAllCharactersController } from "./getController/getAllCharacters.controller.js";
import { getAllCharactersDetailController } from "./getController/getAllCharactersDetail.controller.js";
import { getOneCharacterController } from "./getController/getOneCharacter.controller.js";
import { createCharacterController } from "./postController/createCharacter.controller.js";
import { updateCharactersController } from "./updateController/updateCharacters.controller.js";

export const characters = Router();

characters.route("/").post(createCharacterController);
characters.route("/").get(getAllCharactersController);
characters.route("/detail").get(getAllCharactersDetailController);
characters.route("/:id").get(getOneCharacterController);
characters.route("/:id").delete(deleteCharactersController);
characters.route("/:id").patch(updateCharactersController);
