import { CHECK_EMAIL } from "../../../constants/msgs.js";
import { sendEmail } from "../../../utils/auth/sendEmail.js";
import { createUser } from "../../../utils/users/createUser.js";

export const registerController = async (req, res, next) => {
	try {
		const user = await createUser(req.body);
		sendEmail(user.email);
		res.status(200).json({ msg: CHECK_EMAIL });
	} catch (error) {
		next(error);
	}
};
