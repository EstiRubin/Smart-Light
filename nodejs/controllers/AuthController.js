import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js'
import { sendEmail } from '../Util/sendEmail.js';

// Send Temporary Password
export const sendTempPassword = async (req, res) => {
    try {
        const { email } = req.body;

        // Generate a random password
        const tempPassword = Math.random().toString(36).slice(-8);

        // Hash the password
        const hashedPassword = await bcrypt.hash(tempPassword, 10);

        // Find or create user
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ email });
        }

        // Update temporary password and expiry time
        user.tempPassword = hashedPassword;
        user.tempPasswordExpires = Date.now() + 10 * 60 * 1000; // Expires in 10 minutes
        await user.save();

        // Send the temporary password via email
        await sendEmail(email, 'Your Temporary Password', `Your temporary password is: ${tempPassword}`);

        res.status(200).json({ message: 'Temporary password sent to email.' });
    } catch (error) {
        res.status(500).json({ error: 'Error sending temporary password.' });
    }
};

// Log In with Temporary Password
export const loginWithTempPassword = async (req, res) => {
    try {
        const { email, tempPassword } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'User not found.' });

        // Validate the temporary password
        const isValidPassword = await bcrypt.compare(tempPassword, user.tempPassword);
        if (!isValidPassword || Date.now() > user.tempPasswordExpires) {
            return res.status(400).json({ error: 'Invalid or expired temporary password.' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, user: { id: user._id, email: user.email } });
    } catch (error) {
        res.status(500).json({ error: 'Login failed.' });
    }
};
