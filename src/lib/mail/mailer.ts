import * as nodemailer from "nodemailer";

import { createContactEmail } from "./templates/contact-email";
import { ContactEmailData } from "../validations/contact";

const mailUser = process.env.MAIL_USER;
const mailPassword = process.env.MAIL_PASSWORD;

if (!mailUser || !mailPassword) {
    throw new Error("MAIL_USER and MAIL_PASSWORD must be configured.");
}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: mailUser,
        pass: mailPassword,
    },
});

export const sendContactEmail = async (data: ContactEmailData) => {
    const { subject, html } = createContactEmail(data);

    await transporter.sendMail({
        from: mailUser,
        to: mailUser,
        replyTo: data.email,
        subject,
        html,
    });
};