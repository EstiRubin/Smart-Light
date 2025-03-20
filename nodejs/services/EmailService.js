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

    static async sendContactForm(name, phone, email, message) {
        const businessEmail = process.env.EMAIL_USER;
        
        if (!this.validateEmail(email)) {
            throw new Error("Invalid user email address");
        }
        if (!this.validateEmail(businessEmail)) {
            throw new Error("Invalid business email address");
        }
    
        // עיצוב מייל נקי ואלגנטי
        const emailContent = `
            <div style="direction: rtl; text-align: right; font-family: Arial, sans-serif; padding: 20px; background-color: #f8f8f8;">
                <div style="max-width: 500px; margin: auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
                    <h2 style="color: #333; text-align: center; border-bottom: 2px solid #ddd; padding-bottom: 10px;">פניה חדשה מאת: ${name}</h2>
                    <p style="font-size: 16px; color: #222;"><strong>שם הלקוח:</strong> ${name}</p>
                    <p style="font-size: 16px; color: #222;"><strong>טלפון:</strong> ${phone}</p>
                    <p style="font-size: 16px; color: #222;"><strong>אימייל:</strong> ${email}</p>
                    <p style="font-size: 16px; color: #222;"><strong>הודעה:</strong></p>
                    <p style="font-size: 16px; background: #f2f2f2; padding: 10px; border-radius: 5px;">${message}</p>
    
                    <div style="text-align: center; margin-top: 20px;">
                        <a href="mailto:${email}" style="background-color: #333; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px; display: inline-block;">
                            ✉️ השב ללקוח
                        </a>
                    </div>
    
                    <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #777;">💡 פניה זו התקבלה דרך האתר</p>
                </div>
            </div>
        `;
    
        const mailOptions = {
            from: email,
            to: businessEmail,
            subject: `פניה חדשה מאת: ${name}`,
            html: emailContent, // שולחים את המייל בפורמט HTML
            replyTo: email,
        };
    
        await this.sendMail(mailOptions);
    }
    
}

export default EmailService;