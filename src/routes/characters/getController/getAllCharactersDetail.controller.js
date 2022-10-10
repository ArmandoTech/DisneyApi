import { getCharactersDetails } from "../../../utils/characters/getCharactersDetails.js";

export const getAllCharactersDetailController = async (req, res, next) => {
	try {
		const characters = await getCharactersDetails();
		res.status(200).json(characters);
	} catch (error) {
		next(error);
	}
};
