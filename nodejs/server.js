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

dotenv.config();

configDotenv();
const app = express();
const hostname = process.env.HOST_NAME || 'localhost';
const port = process.env.PORT || 3000;

// // הגדרת CORS לפני הראוטים
// app.use(cors({
//     // origin: 'http://localhost:3001' // ניתן לשנות את הכתובת לכתובת שממנה רוצים לאפשר גישה
// }));
app.use(cors({
    origin: '*', // Allow all origins
  }));
  
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.use('/api', authRoutes);
app.use('/api/product', productRouter);
app.use('/api/category', categoryRouter);
app.use('/api/project', projectRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/recommendation', recommendationRouter);
// app.use('/api/calendar', calendarRouter);

app.use((req, res, next) => {
    console.log(req.body);
    next();
});


app.use('/', (req, res) => {
    res.send('Welcome to SmartLight platform! ⚡💡👋💡⚡');
});

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
