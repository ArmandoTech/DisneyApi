import { Character } from "../../dbRelations.js";

export const createCharacter = async body => {
	const { name, image, age, weight, history, moviesIds } = body;
	const character = await Character.create({
		name,
		image,
		age,
		weight,
		history
	});
	await character.setMovies(moviesIds);
	return character;
};
