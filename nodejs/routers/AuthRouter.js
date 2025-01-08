import express from "express";
import User from "../models/UserModel.js";
import { generateCode, sendEmail } from "../Util/emailUtils.js";
import passport from "passport";
import { googleAuthRedirect, getCurrentUser } from "../controllers/AuthController.js";

const router = express.Router();

// Send verification code
router.post("/send-code", async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).send("Email is required");

    const verificationCode = generateCode();
    const codeExpiration = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes validity

    await User.updateOne(
        { email },
        { email, verificationCode, codeExpiration },
        { upsert: true }
    );

    try {
        await sendEmail(email, verificationCode);
        res.send("Verification code sent");
    } catch (error) {
        res.status(500).send("Error sending email");
    }
});

// Verify code
router.post("/verify-code", async (req, res) => {
    const { email, code } = req.body;
    if (!email || !code) return res.status(400).send("Email and code are required");

    const user = await User.findOne({ email });
    if (
        !user ||
        user.verificationCode !== code ||
        user.codeExpiration < Date.now()
    ) {
        return res.status(400).send("Invalid or expired code");
    }

    res.send("Code verified successfully");
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  googleAuthRedirect
);

router.get("/current-user", getCurrentUser);


export default router;
