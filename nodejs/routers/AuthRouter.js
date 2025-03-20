import express from "express";
import passport from "passport";
import {
  sendTempPassword,
  loginWithTempPassword,
} from "../controllers/AuthController.js";

const router = express.Router();

router.post("/send-temp-password", sendTempPassword);
router.post("/login-with-temp-password", loginWithTempPassword);

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
