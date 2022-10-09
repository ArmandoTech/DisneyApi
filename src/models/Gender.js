import { DataTypes } from "sequelize";

export const defineGender = sequelize => {
	sequelize.define(
		"Gender",
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
