import { CHARACTER_DELETED } from "../../../constants/msgs.js";
import { deleteCharacter } from "../../../utils/characters/deleteCharacter.js";

export const deleteCharactersController = async (req, res, next) => {
	try {
		await deleteCharacter(req.params);
		res.status(200).json({ msg: CHARACTER_DELETED });
	} catch (error) {
		next(error);
	}
};
