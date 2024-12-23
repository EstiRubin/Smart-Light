import { configDotenv } from 'dotenv';
import express from 'express';
import cors from 'cors'; // שינוי הייבוא של CORS
import projectRouter from './routers/ProjectRouter.js';
import productRouter from './routers/ProductRouter.js';
import categoryRouter from './routers/CategoryRouter.js';
import userRouter from './routers/UserRouter.js';
import recommendationRouter from './routers/RecommendationRouter.js';


configDotenv();
const app = express();
const hostname = process.env.HOST_NAME || 'localhost';
const port = process.env.PORT || 3000;

// הגדרת CORS לפני הראוטים
app.use(cors({
    // origin: 'http://localhost:3001' // ניתן לשנות את הכתובת לכתובת שממנה רוצים לאפשר גישה
}));

app.use(express.json());
app.use('/api/product', productRouter);
app.use('/api/category', categoryRouter);
app.use('/api/project', projectRouter);
app.use('/api/user', userRouter);
app.use('/api/recommendation', recommendationRouter);

app.use('/', (req, res) => {
    res.send('Welcome to SmartLight platform! ⚡💡👋💡⚡');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
