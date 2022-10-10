import { Movie } from "../../dbRelations.js";

export const updateMovie = async (param, body) => {
	const { id } = param;
	const { image, title, movieScore } = body;
	Movie.update(
		{
			image,
			title,
			movieScore
		},
		{
			where: { id }
		}
	);
};
