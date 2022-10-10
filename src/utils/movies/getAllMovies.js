import { Movie } from "../../dbRelations.js";

export const getAllMovies = async queries => {
	const filters = addQueriesFind(queries);
	return await Movie.findAll({
		attributes: ["id", "image", "title", "createdAt"],
		where: { ...filters },
		order: [["createdAt", filters.order]] || []
	});
};

const addQueriesFind = queries => {
	const { title, genre, order } = queries;
	const queryFind = {};
	if (title) queryFind.title = title;
	if (genre) queryFind.genre = genre;
	if (order) queryFind.order = order;
	return queryFind;
};
