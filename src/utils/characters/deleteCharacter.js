import { Character } from "../../dbRelations.js";

export const deleteCharacter = async param => {
	const { id } = param;
	return await Character.destroy({
		where: { id }
	});
};
