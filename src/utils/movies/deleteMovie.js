import { Movie } from "../../dbRelations.js";

export const deleteMovie = async param => {
	const { id } = param;
	return await Movie.destroy({
		where: { id }
	});
};
