import { Character } from "../../dbRelations.js";

export const getOneCharacter = async param => {
	const { id } = param;
	const character = await Character.findByPk(id);
	return character;
};
