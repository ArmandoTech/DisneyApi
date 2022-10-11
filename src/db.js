import { Sequelize } from "sequelize";

export const connDb = new Sequelize("disney_api", "root", "", {
	host: "localhost",
	dialect: "mysql",
	logging: false
});
