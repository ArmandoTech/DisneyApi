import {
	BAD_CREDENTIALS,
	REQUIRED_EMAIL_OR_NAME,
	REQUIRED_PASSWORD,
	UNREGISTERED_USER
} from "../../constants/msgs.js";
import { User } from "../../dbRelations.js";
import { comparePassword } from "./comparePassword.js";

export const login = async body => {
	const { email, name, password } = body;
	if (!password) throw new Error({ message: REQUIRED_PASSWORD, status: 400 });
	if (!email && !name)
		throw new Error({ message: REQUIRED_EMAIL_OR_NAME, status: 400 });
	const user = await User.findOne({ where: { email } });
	if (!user) throw new Error({ message: UNREGISTERED_USER, status: 400 });
	const isRightPassword = await comparePassword(password, user.password);
	if (!isRightPassword)
		throw new Error({ message: BAD_CREDENTIALS, status: 400 });

	return user;
};
