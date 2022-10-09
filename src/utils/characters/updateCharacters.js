import { Character } from "../../dbRelations.js";

export const updateCharacter = async (param, body) => {
	const { id } = param;
	const { name, image, age, weight, history } = body;
	return await Character.update(
		{
			name,
			image,
			age,
			weight,
			history
		},
		{
			where: { id }
		}
	);
};
