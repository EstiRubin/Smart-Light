import nodemailer from "nodemailer";
import crypto from "crypto";

const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const generateCode = () => crypto.randomInt(100000, 999999).toString();

export const sendVerificationEmail = async (to, code) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "Your Verification Code",
    text: `Your verification code is: ${code}`,
  };

  await transporter.sendMail(mailOptions);
};
