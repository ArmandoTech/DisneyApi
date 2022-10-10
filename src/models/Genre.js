import { DataTypes } from "sequelize";

export const defineGenre = sequelize => {
	sequelize.define(
		"Genre",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{ timestamps: false }
	);
};
