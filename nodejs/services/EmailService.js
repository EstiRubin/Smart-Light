import nodemailer from 'nodemailer';

class EmailService {
    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static async sendMail(mailOptions) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, 
            },
        });

        try {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }

    static async sendCartToEmail(cart, userEmail) {
        const businessEmail = process.env.EMAIL_BUSINESS;

        if (!this.validateEmail(userEmail)) {
            throw new Error("Invalid user email address");
        }
        if (!this.validateEmail(businessEmail)) {
            throw new Error("Invalid business email address");
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: businessEmail,
            subject: 'New Price Request',
            text: `
                A new price request has been submitted by ${userEmail}.
                The cart contains the following items:
                ${JSON.stringify(cart.items, null, 2)}
            `,
        };

        await this.sendMail(mailOptions);
    }
}

export default EmailService;

