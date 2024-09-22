import { configDotenv } from 'dotenv';
import  express  from 'express';
import projectRouter from './routers/ProjectRouter.js';
import productRouter from './routers/ProductRouter.js';
import categoryRouter from './routers/CategoryRouter.js';


configDotenv()
const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.use(express.json());
app.use('/api/product', productRouter);
app.use('/api/category', categoryRouter);
app.use('/api/project', projectRouter);
app.use('/', (req, res) => {
    res.send('welcome to smartLight platform! ⚡💡👋💡⚡');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})


