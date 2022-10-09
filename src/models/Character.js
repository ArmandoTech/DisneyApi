import { DataTypes } from "sequelize";

export const defineCharacters = sequelize => {
	sequelize.define(
		"Character",
		{
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
			history: {
				type: DataTypes.TEXT,
				allowNull: false
			}
		},
		{ timestamps: false }
	);
};
