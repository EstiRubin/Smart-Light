import nodemailer from 'nodemailer';
import crypto from "crypto";

export const generateCode = () => crypto.randomInt(100000, 999999).toString();

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "s025712483@gmail.com",
        pass: "dgcr jnmt ohab lijd",
    },
});

export const sendEmail = async (email, code) => {
    const mailOptions = {
        from: "s025712483@gmail.com",
        to: email,
        subject: "Your Verification Code",
        text: `Your verification code is: ${code}`,
    };

    return transporter.sendMail(mailOptions);
};
