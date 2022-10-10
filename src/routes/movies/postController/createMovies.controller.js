import { MOVIE_CREATED } from "../../../constants/msgs.js";
import { createMovie } from "../../../utils/movies/createMovies.js";

export const createMoviesController = async (req, res, next) => {
	try {
		await createMovie(req.body);
		res.status(200).json({ msg: MOVIE_CREATED });
	} catch (error) {
		next(error);
	}
};
