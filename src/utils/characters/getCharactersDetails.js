import { Character } from "../../dbRelations.js";

export const getCharactersDetails = async () => {
	return await Character.findAll();
};
