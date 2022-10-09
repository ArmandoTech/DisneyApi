import { connDb } from "./db.js";
import { defineCharacters } from "./models/Character.js";
import { defineGender } from "./models/Gender.js";
import { defineMovies } from "./models/movie.js";
import { defineUser } from "./models/User.js";

// definir modelos
defineCharacters(connDb);
defineMovies(connDb);
defineGender(connDb);
defineUser(connDb);

export const { Character } = connDb.models;
export const { Movie } = connDb.models;
export const { Gender } = connDb.models;
export const { User } = connDb.models;

// Associations

// Many to many Characters and Movies
Character.belongsToMany(Movie, { through: "CharacterMovie" });
Movie.belongsToMany(Character, { through: "CharacterMovie" });

// One to many Gender and Movies
Gender.hasMany(Movie);
Movie.belongsTo(Gender);
