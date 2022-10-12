import { Character, Movie } from "../../dbRelations.js";

export const getAllCharacters = async queries => {
	const { movies, ...filters } = addQueriesFind(queries);
	return await Character.findAll({
		attributes: ["id", "image", "name"],
		where: filters,
		include: addInclude(queries)
	});
};

const addQueriesFind = queries => {
	const { name, age, weight } = queries;
	const queryFind = {};
	if (name) queryFind.name = name;
	if (age) queryFind.age = age;
	if (weight) queryFind.weight = weight;
	return queryFind;
};

const addInclude = queries => {
	const { movies } = queries;
	if (!movies) return undefined;
	return {
		model: Movie,
		where: {
			title: movies
		}
	};
};
