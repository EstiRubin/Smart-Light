import express from 'express';
import EmailService from '../services/EmailService.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
    try {
        const { name, phone, email, message } = req.body;
        if (!name || !phone || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        await EmailService.sendContactForm(name, phone, email, message);
        res.status(200).json({ message: 'Your message has been sent successfully' });

    } catch (error) {
        console.error('Error sending contact form:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

export default router;