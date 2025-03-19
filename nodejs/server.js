import { configDotenv } from 'dotenv';
import express from 'express';
import cors from 'cors'; // שינוי הייבוא של CORS
import projectRouter from './routers/ProjectRouter.js';
import productRouter from './routers/ProductRouter.js';
import categoryRouter from './routers/CategoryRouter.js';
import userRouter from './routers/UserRouter.js';
import cartRouter from './routers/CartRouter.js';
import recommendationRouter from './routers/RecommendationRouter.js';
import dotenv from 'dotenv';
import authRoutes from './routers/AuthRouter.js'
import session from "express-session";
import passport from 'passport';
import emailRouter from "./routers/EmailRoutes.js"
import contactRoutes from './routers/ContactRoutes.js'
import path from 'path';
// import "./Util/passportConfigUtil.js"
configDotenv();

const app = express();
const hostname = process.env.HOST_NAME || "localhost";
const port = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/project", projectRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/recommendation", recommendationRouter);
app.use("/api/email", emailRouter);
app.use('/api', contactRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to SmartLight platform! ⚡💡👋💡⚡");
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-react-app/src', 'index.html')); // עדכן את הנתיב בהתאם למיקום של index.html
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
console.log("EMAIL_BUSINESS:", process.env.EMAIL_BUSINESS);