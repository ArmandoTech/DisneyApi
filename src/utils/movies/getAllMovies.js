import { Movie } from "../../dbRelations.js";

export const getAllMovies = async () => {
	return await Movie.findAll({
		attributes: ["id", "image", "title", "createdAt"]
	});
};
