import { getAllMovies } from "../../../utils/movies/getAllMovies.js";

export const getAllMoviesController = async (req, res, next) => {
	try {
		const movies = await getAllMovies();
		res.status(200).json(movies);
	} catch (error) {
		next(error);
	}
};
