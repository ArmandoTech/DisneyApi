import { connDb } from "./db.js";
import { defineCharacters } from "./models/Character.js";
import { defineGenre } from "./models/Genre.js";
import { defineMovies } from "./models/movie.js";
import { defineUser } from "./models/User.js";

// definir modelos
defineCharacters(connDb);
defineMovies(connDb);
defineGenre(connDb);
defineUser(connDb);

export const { Character } = connDb.models;
export const { Movie } = connDb.models;
export const { Genre } = connDb.models;
export const { User } = connDb.models;

// Associations

// Many to many Characters and Movies
Character.belongsToMany(Movie, { through: "CharacterMovie" });
Movie.belongsToMany(Character, { through: "CharacterMovie" });

// One to many Genre and Movies
Genre.hasMany(Movie);
Movie.belongsTo(Genre);
