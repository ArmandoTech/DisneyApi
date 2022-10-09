import { CHARACTER_CREATED } from "../../../constants/msgs.js";
import { createCharacter } from "../../../utils/characters/createCharacter.js";

export const createCharacterController = async (req, res, next) => {
	try {
		await createCharacter(req.body);
		res.status(200).json({ msg: CHARACTER_CREATED });
	} catch (error) {
		next(error);
	}
};
