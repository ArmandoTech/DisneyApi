import { CHARACTER_UPDATED } from "../../../constants/msgs.js";
import { updateCharacter } from "../../../utils/characters/updateCharacters.js";

export const updateCharactersController = async (req, res, next) => {
	try {
		await updateCharacter(req.params, req.body);
		res.status(200).json({ msg: CHARACTER_UPDATED });
	} catch (error) {
		next(error);
	}
};
