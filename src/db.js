import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./env/db.js";

export const connDb = new Sequelize({
	dialect: "mysql",
	host: DB_HOST,
	username: DB_USER,
	password: DB_PASSWORD,
	name: DB_NAME
});
