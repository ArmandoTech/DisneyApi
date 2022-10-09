import jwt from "jsonwebtoken";

export const createToken = (dataToSave, expirationTime) => {
	const token = jwt.sign(dataToSave, process.env.SECRET, { expirationTime });
	return token;
};
