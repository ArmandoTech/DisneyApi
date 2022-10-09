import { DataTypes } from "sequelize";

export const defineUser = sequelize => {
	sequelize.define(
		"User",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			verify: {
				type: DataTypes.BOOLEAN,
				default: false
			}
		},
		{ timestamps: true }
	);
};
