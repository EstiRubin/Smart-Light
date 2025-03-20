import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
      user:process.env.EMAIL_USER,
      pass:process.env.EMAIL_PASS, // השתמש כאן בסיסמת האפליקציה החדשה
  },
});

// const transporter = nodemailer.createTransport({
//   host: process.env.HOST_NAME, // SMTP host
//   port: process.env.PORT || 587, // Port for sending emails (587 is the default for non-secure connections)
//   secure: process.env.PORT == 465, // אם ה-Port הוא 465 אז זה "secure"
//   auth: {
//       user: process.env.EMAIL_USER, // כתובת המייל שלך
//       pass: process.env.EMAIL_PASS, // הסיסמה
//   },
// });

export const sendEmail = async (to, subject, text) => {
  const mailOptions = { from: process.env.EMAIL_USER, to, subject, text };
  return transporter.sendMail(mailOptions);
};
export const sendCartToEmail = async (recipientEmail, cartData) => {
  try {
      const mailOptions = {
          from: process.env.EMAIL_USER, // המייל שממנו נשלח
          to: recipientEmail, // כתובת היעד
          subject: 'Your Cart Details',
          text: cartData, // תוכל לשנות את זה ל-html או פורמט אחר
      };

      // שולחים את המייל
      await transporter.sendMail(mailOptions);
  } catch (error) {
      console.error('Error in sending email:', error);
      throw new Error('Error sending cart to email');
  }
};