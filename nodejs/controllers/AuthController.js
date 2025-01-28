import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import { sendEmail } from "../Utils/emailUtils.js";// Send Temporary Password
import dotenv from 'dotenv';
dotenv.config();

export const sendTempPassword = async (req, res) => {
    try {
        const { email } = req.body;
        console.log("Email received:", email); // לוג לבדיקת הקלט

        // Generate a random password
        const tempPassword = Math.random().toString(36).slice(-8);
        console.log("Generated temp password:", tempPassword); // לוג לבדיקת סיסמה זמנית

        // Hash the password
        const hashedPassword = await bcrypt.hash(tempPassword, 10);
        console.log("Hashed password:", hashedPassword); // לוג לבדיקת ההאש

        // Find or create user
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ email });
            console.log("New user created:", user); // לוג לבדיקת יצירת המשתמש
        }

        // Update temporary password and expiry time
        user.tempPassword = hashedPassword;
        user.tempPasswordExpires  = Date.now() + 15 * 60 * 1000; // הסיסמה תהיה תקפה ל-15 דקות
                await user.save();
        console.log("User updated with temp password."); // לוג לשמירת הסיסמה

        // Send the temporary password via email
        await sendEmail(email, 'Your Temporary Password', `Your temporary password is: ${tempPassword}`);
        console.log("Email sent successfully."); // לוג לשליחת האימייל

        res.status(200).json({ message: 'Temporary password sent to email.' });
    } catch (error) {
        console.error("Error in sendTempPassword:", error); // לוג לשגיאה
        res.status(500).json({ error: 'Error sending temporary password.' });
    }
};


// Log In with Temporary Password
export const loginWithTempPassword = async (req, res) => {
  try {
    const { email, tempPassword } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found." });

    const isValidPassword = await bcrypt.compare(tempPassword, user.tempPassword);
    if (!isValidPassword)
      return res.status(400).json({ error: "Invalid temporary---password." });
    if ( Date.now() > user.tempPasswordExpires) {
      return res.status(400).json({ error: "Invalid time" });
    }
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables.");
  }
  
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: `Login failed.${error}` });
  }
};
