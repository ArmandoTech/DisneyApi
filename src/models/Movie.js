import { DataTypes } from "sequelize";

export const defineMovies = sequelize => {
	sequelize.define(
		"Movie",
		{
			image: {
				type: DataTypes.STRING,
				allowNull: false
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false
			},
			movieScore: {
				type: DataTypes.INTEGER,
				allowNull: true
			}
		},
		{ timestamps: true }
	);
};
