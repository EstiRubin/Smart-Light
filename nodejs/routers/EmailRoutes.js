import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/send", async (req, res) => {
  const { userEmail, cart } = req.body;

  if (!userEmail || !cart || cart.length === 0) {
    return res.status(400).json({ message: "נתונים חסרים או עגלה ריקה." });
  }

  try {
    const cartItemsHTML = cart
      .map(
        (item) => `
        <tr>
          <td><img src="${item.images[0]}" width="50" /></td>
          <td>${item.nameOfProduct}</td>
          <td>${item.watt.join(", ")}</td>
          <td>${item.colors.join(", ")}</td>
          <td>${item.quantity}</td>
        </tr>`
      )
      .join("");

    const emailTemplate = `
      <h2>📋 הזמנה חדשה מחנות SmartLight</h2>
      <p>לקוח עם האימייל: <strong>${userEmail}</strong> ביקש הצעת מחיר.</p>
      <table border="1" cellpadding="5" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th>תמונה</th>
            <th>שם מוצר</th>
            <th>Watt</th>
            <th>צבעים</th>
            <th>כמות</th>
          </tr>
        </thead>
        <tbody>
          ${cartItemsHTML}
        </tbody>
      </table>
      <p>📞 צור קשר בהקדם האפשרי!</p>
    `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [process.env.EMAIL_USER, userEmail], // לחנות וללקוח
      subject: "🛒 בקשה להצעת מחיר - SmartLight",
      html: emailTemplate, // שליחה בפורמט HTML
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "✔ המיילים נשלחו בהצלחה!" });

  } catch (error) {
    console.error("❌ שגיאה בשליחת המייל:", error);
    res.status(500).json({ message: "❌ תקלה בשליחת המייל." });
  }
});

export default router;
