import { getAllCharacters } from "../../../utils/characters/getAllCharacters.js";

export const getAllCharactersController = async (req, res, next) => {
	try {
		const characters = await getAllCharacters(req.query);
		res.status(200).json(characters);
	} catch (error) {
		next(error);
	}
};
