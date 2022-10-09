import { getOneCharacter } from "../../../utils/characters/getOneCharacter.js";

export const getOneCharacterController = async (req, res, next) => {
	try {
		const character = await getOneCharacter(req.params);
		res.status(200).json(character);
	} catch (error) {
		next(error);
	}
};
