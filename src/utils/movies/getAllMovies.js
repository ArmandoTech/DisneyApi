import { Character, Movie } from "../../dbRelations.js";

export const getAllMovies = async queries => {
	const { order, ...filters } = addQueriesFind(queries);
	return await Movie.findAll({
		attributes: ["id", "image", "title", "createdAt"],
		where: filters,
		include: Character,
		order
	});
};

const addQueriesFind = queries => {
	const { title, genre, order } = queries;
	const queryFind = {};
	if (title) queryFind.title = title;
	if (genre) queryFind.genre = genre;
	if (order) queryFind.order = [["createdAt", order]];
	return queryFind;
};
