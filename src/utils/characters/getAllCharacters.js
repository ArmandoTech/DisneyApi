import { Character } from "../../dbRelations.js";

export const getAllCharacters = async queries => {
	const filters = addQueriesFind(queries);
	return await Character.findAll({ where: { ...filters } });
};

const addQueriesFind = queries => {
	const { name, age, weight, movies } = queries;
	const queryFind = {};
	if (name) queryFind.name = new RegExp(name, "i");
	if (age) queryFind.age = age;
	if (weight) queryFind.weight = weight;
	if (movies) queryFind.movies = movies;
	return queryFind;
};
