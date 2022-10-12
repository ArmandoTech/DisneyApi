import { Movie } from "../../dbRelations.js";

export const createMovie = async body => {
	const { image, title, movieScore } = body;
	const movie = await Movie.create({
		image,
		title,
		movieScore
	});
	return movie;
};
