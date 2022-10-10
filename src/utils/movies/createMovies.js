import { Movie } from "../../dbRelations.js";

export const createMovie = async body => {
	const { image, title, movieScore } = body;
	return await Movie.create({
		image,
		title,
		movieScore
	});
};
