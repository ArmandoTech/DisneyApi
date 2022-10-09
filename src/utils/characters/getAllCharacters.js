import { Character } from "../../dbRelations.js";

export const getAllCharacters = async () => {
	const characters = await Character.findAll();
	return characters;
};
