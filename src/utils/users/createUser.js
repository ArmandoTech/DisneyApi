import { User } from "../../dbRelations.js";
import { encryptPassword } from "../auth/encryptPassword.js";

export const createUser = async body => {
	const { email, name, password } = body;
	const user = await User.create({
		name,
		email,
		password: await encryptPassword(password)
	});
	return user;
};
