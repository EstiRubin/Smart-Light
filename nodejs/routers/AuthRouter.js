import express from "express";
import passport from "passport";
import {
  sendTempPassword,
  loginWithTempPassword,
} from "../controllers/AuthController.js";
// import "../utils/passportGoogle.js"; // Load Google Passport Strategy

const router = express.Router();

// Email Login
router.post("/send-temp-password", sendTempPassword);
router.post("/login-with-temp-password", loginWithTempPassword);

// Google Authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: true,
  }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

export default router;
