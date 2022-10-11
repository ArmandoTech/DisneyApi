import mail from "@sendgrid/mail";

export const sendEmail = async email => {
	mail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: email,
		from: process.env.SENDGRID_MAILER,
		subject: "Welcome email",
		text: "Welcome to disney API!"
	};
	return await mail.send(msg);
};
