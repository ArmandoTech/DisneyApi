import { MOVIE_UPDATED } from "../../../constants/msgs.js";
import { updateMovie } from "../../../utils/movies/updateMovie.js";

export const updateMovieController = async (req, res, next) => {
	try {
		await updateMovie(req.params, req.body);
		res.status(200).json({ msg: MOVIE_UPDATED });
	} catch (error) {
		next(error);
	}
};
