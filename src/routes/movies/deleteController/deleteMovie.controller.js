import { MOVIE_DELETED } from "../../../constants/msgs.js";
import { deleteMovie } from "../../../utils/movies/deleteMovie.js";

export const deleteMovieController = async (req, res, next) => {
	try {
		await deleteMovie(req.params);
		res.status(200).json({ msg: MOVIE_DELETED });
	} catch (error) {
		next(error);
	}
};
