import { createCharacter } from "../../../utils/createCharacter.js";

export const getAllCharactersController = async (req, res, next) => {
	try {
		const character = await createCharacter();
		res.status(200).json(character);
	} catch (error) {
		next(error);
	}
};
