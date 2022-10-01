import { DataTypes } from "sequelize";

export const defineCharacters = sequelize => {
	sequelize.define("Character", {
		image: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		histoy: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		movies_related: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});
};
