import { Character } from "../dbRelations.js";

export const createCharacter = async () => {
	return await Character.create({
		name: "Test"
	});
};
