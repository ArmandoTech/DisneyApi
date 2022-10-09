import { Character } from "../../dbRelations.js";

export const createCharacter = async body => {
	const { name, image, age, weight, history } = body;
	return await Character.create({
		name,
		image,
		age,
		weight,
		history
	});
};
